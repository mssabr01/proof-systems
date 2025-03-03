//! This module implements short Weierstrass curve variable base scalar multiplication custom Plonk polynomials.
//!
//! ```ignore
//! Acc := [2]T
//! for i = n-1 ... 0:
//!   Q := (r_i == 1) ? T : -T
//!   Acc := Acc + (Q + Acc)
//! ```
//!
//! See <https://github.com/zcash/zcash/issues/3924>
//! and 3.1 of <https://arxiv.org/pdf/math/0208038.pdf> for details.

use std::marker::PhantomData;

use ark_ff::{FftField, One};
use CurrOrNext::{Curr, Next};

use crate::circuits::{
    argument::{Argument, ArgumentType},
    expr::{prologue::*, Cache, Column, Variable},
    gate::{CircuitGate, CurrOrNext, GateType},
    wires::{GateWires, COLUMNS},
};

/// Implementation of short Weierstrass curve variable base scalar multiplication custom Plonk constraints.
///
/// ```ignore
/// Acc := [2]T
/// for i = n-1 ... 0:
///    Q := (r_i == 1) ? T : -T
///    Acc := Acc + (Q + Acc)
/// return (d_0 == 0) ? Q - P : Q
/// ```
///
/// One-bit round constraints:
///
/// S = (P + (b ? T : −T)) + P
///
/// VBSM gate constraints for THIS witness row
/// * b1*(b1-1) = 0
/// * b2*(b2-1) = 0
/// * (xp - xt) * s1 = yp – (2b1-1)*yt
/// * s1^2 - s2^2 = xt - xr
/// * (2*xp + xt – s1^2) * (s1 + s2) = 2*yp
/// * (xp – xr) * s2 = yr + yp
/// * (xr - xt) * s3 = yr – (2b2-1)*yt
/// * S3^2 – s4^2 = xt - xs
/// * (2*xr + xt – s3^2) * (s3 + s4) = 2*yr
/// * (xr – xs) * s4 = ys + yr
/// * n = 32*n_n + 16*b2 + 8*b1 + 4*b3_n + 2*b2_n + b1_n
///
/// The constraints above are derived from the following EC Affine arithmetic equations:
///
/// * (xq1 - xp) * s1 = yq1 - yp
/// * s1^2 - s2^2 = xq1 - xr
/// * (2*xp + xq1 – s1^2) * (s1 + s2) = 2*yp
/// * (xp – xr) * s2 = yr + yp
///
/// * (xq2 - xr) * s3 = yq2 - yr
/// * s3^2 – s4^2 = xq2 - xs
/// * (2*xr + xq2 – s3^2) * (s3 + s4) = 2*yr
/// * (xr – xs) * s4 = ys + yr
///
///
/// VBSM gate constraints for NEXT witness row:
///
/// * b1*(b1-1) = 0
/// * b2*(b2-1) = 0
/// * b3*(b3-1) = 0
/// * (xq - xp) * s1 = (2b1-1)*yt - yp
/// * (2*xp – s1^2 + xq) * ((xp – xr) * s1 + yr + yp) = (xp – xr) * 2*yp
/// * (yr + yp)^2 = (xp – xr)^2 * (s1^2 – xq + xr)
/// * (xq - xr) * s3 = (2b2-1)*yt - yr
/// * (2*xr – s3^2 + xq) * ((xr – xv) * s3 + yv + yr) = (xr – xv) * 2*yr
/// * (yv + yr)^2 = (xr – xv)^2 * (s3^2 – xq + xv)
/// * (xq - xv) * s5 = (2b3-1)*yt - yv
/// * (2*xv – s5^2 + xq) * ((xv – xs) * s5 + ys + yv) = (xv – xs) * 2*yv
/// * (ys + yv)^2 = (xv – xs)^2 * (s5^2 – xq + xs)
///
/// The constraints above are derived from the following EC Affine arithmetic equations:
///
/// * (xq1 - xp) * s1 = yq1 - yp
/// * s1^2 - s2^2 = xq1 - xr
/// * (2*xp + xq1 – s1^2) * (s1 + s2) = 2*yp
/// * (xp – xr) * s2 = yr + yp
///
/// * (xq2 - xr) * s3 = yq2 - yr
/// * s3^2 – s4^2 = xq2 - xv
/// * (2*xr + xq2 – s3^2) * (s3 + s4) = 2*yr
/// * (xr – xv) * s4 = yv + yr
///
/// * (xq3 - xv) * s5 = yq3 - yv
/// * s5^2 – s6^2 = xq3 - xs
/// * (2*xv + xq3 – s5^2) * (s5 + s6) = 2*yv
/// * (xv – xs) * s6 = ys + yv
///
/// =>
///
/// * (xq1 - xp) * s1 = yq1 - yp
/// * (2*xp – s1^2 + xq1) * ((xp – xr) * s1 + yr + yp) = (xp – xr) * 2*yp
/// * (yr + yp)^2 = (xp – xr)^2 * (s1^2 – xq1 + xr)
///
/// * (xq2 - xr) * s3 = yq2 - yr
/// * (2*xr – s3^2 + xq2) * ((xr – xv) * s3 + yv + yr) = (xr – xv) * 2*yr
/// * (yv + yr)^2 = (xr – xv)^2 * (s3^2 – xq2 + xv)
///
/// * (xq3 - xv) * s5 = yq3 - yv
/// * (2*xv – s5^2 + xq3) * ((xv – xs) * s5 + ys + yv) = (xv – xs) * 2*yv
/// * (ys + yv)^2 = (xv – xs)^2 * (s5^2 – xq3 + xs)
///
///
/// |  Row  |  0 |  1 |  2 |  3 |  4 |  5 | 6 |  7 |  8 |  9 | 10 | 11 | 12 | 13 | 14 | Type |
/// | ---------------------------------------------------------------------------------------|
/// |     i | xT | yT | xS | yS | xP | yP | n | xr | yr | s1 | s2 | b1 | s3 | s4 | b2 | VBSM |
/// |   i+1 | s5 | b3 | xS | yS | xP | yP | n | xr | yr | xv | yv | s1 | b1 | s3 | b2 | ZERO |
/// |  ...  |    |    |    |    |    |    |   |    |    |    |    |    |    |    |    |      |
/// | i+100 | xT | yT | xS | yS | xP | yP | n | xr | yr | s1 | s2 | b1 | s3 | s4 | b2 | VBSM |
/// | i+101 | s5 | b3 | xS | yS | xP | yP | n | xr | yr | xv | yv | s1 | b1 | s3 | b2 | ZERO |
impl<F: FftField> CircuitGate<F> {
    pub fn create_vbmul(wires: &[GateWires; 2]) -> Vec<Self> {
        vec![
            CircuitGate {
                typ: GateType::VarBaseMul,
                wires: wires[0],
                coeffs: vec![],
            },
            CircuitGate {
                typ: GateType::Zero,
                wires: wires[1],
                coeffs: vec![],
            },
        ]
    }

    pub fn verify_vbmul(&self, _row: usize, _witness: &[Vec<F>; COLUMNS]) -> Result<(), String> {
        // TODO: implement
        Ok(())
    }

    pub fn vbmul(&self) -> F {
        if self.typ == GateType::VarBaseMul {
            F::one()
        } else {
            F::zero()
        }
    }
}

type CurveVar = (Variable, Variable);

fn set<F>(w: &mut [Vec<F>; COLUMNS], row0: usize, var: Variable, x: F) {
    match var.col {
        Column::Witness(i) => w[i][row0 + var.row.shift()] = x,
        _ => panic!("Can only set witness columns"),
    }
}

#[allow(clippy::too_many_arguments)]
fn single_bit_witness<F: FftField>(
    w: &mut [Vec<F>; COLUMNS],
    row: usize,
    b: Variable,
    base: CurveVar,
    s1: Variable,
    input: CurveVar,
    output: CurveVar,
    b_value: F,
    base_value: (F, F),
    input_value: (F, F),
) -> (F, F) {
    let mut set = |var, x| set(w, row, var, x);

    set(b, b_value);
    set(input.0, input_value.0);
    set(input.1, input_value.1);

    set(base.0, base_value.0);
    set(base.1, base_value.1);

    let s1_value = (input_value.1 - (base_value.1 * (b_value.double() - F::one())))
        / (input_value.0 - base_value.0);

    set(s1, s1_value);

    let s1_squared = s1_value.square();

    let s2 =
        input_value.1.double() / (input_value.0.double() + base_value.0 - s1_squared) - s1_value;
    let out_x = base_value.0 + s2.square() - s1_squared;
    let out_y = (input_value.0 - out_x) * s2 - input_value.1;
    set(output.0, out_x);
    set(output.1, out_y);
    (out_x, out_y)
}

fn single_bit<F: FftField>(
    cache: &mut Cache,
    b: Variable,
    base: CurveVar,
    s1: Variable,
    input: CurveVar,
    output: CurveVar,
) -> Vec<E<F>> {
    let v = E::Cell;
    let double = |x: E<_>| x.clone() + x;

    let b_sign = double(v(b)) - E::one();

    let s1_squared = cache.cache(v(s1) * v(s1));

    // s1 = (input.y - (2b - 1) * base.y) / (input.x - base.x)
    // s2 = 2*input.y / (2*input.x + base.x – s1^2) - s1
    // output.x = base.x + s2^2 - s1^2
    // output.y = (input.x – output.x) * s2 - input.y

    let rx = s1_squared.clone() - v(input.0) - v(base.0);
    let t = cache.cache(v(input.0) - rx);
    let u = cache.cache(double(v(input.1)) - t.clone() * v(s1));
    // s2 = u / t

    // output.x = base.x + s2^2 - s1^2
    // <=>
    // output.x = base.x + u^2 / t^2 - s1^2
    // output.x - base.x + s1^2 =  u^2 / t^2
    // t^2 (output.x - base.x + s1^2) =  u^2
    //
    // output.y = (input.x – output.x) * s2 - input.y
    // <=>
    // output.y = (input.x – output.x) * (u/t) - input.y
    // output.y + input.y = (input.x – output.x) * (u/t)
    // (output.y + input.y) * t = (input.x – output.x) * u

    vec![
        // boolean constrain the bit.
        v(b) * v(b) - v(b),
        // constrain s1:
        //   (input.x - base.x) * s1 = input.y – (2b-1)*base.y
        (v(input.0) - v(base.0)) * v(s1) - (v(input.1) - b_sign * v(base.1)),
        // constrain output.x
        (u.clone() * u.clone()) - (t.clone() * t.clone()) * (v(output.0) - v(base.0) + s1_squared),
        // constrain output.y
        (v(output.1) + v(input.1)) * t - (v(input.0) - v(output.0)) * u,
    ]
}

struct Layout {
    accs: [(Variable, Variable); 6],
    bits: [Variable; 5],
    ss: [Variable; 5],
    base: (Variable, Variable),
    n_prev: Variable,
    n_next: Variable,
}

// We lay things out like
// 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14
// xT  yT  x0  y0  n   n'      x1  y1  x2  y2  x3  y3  x4  y4
// x5  y5  b0  b1  b2  b3  b4  s0  s1  s2  s3  s4
const fn v(row: CurrOrNext, col: usize) -> Variable {
    Variable {
        row,
        col: Column::Witness(col),
    }
}

const LAYOUT: Layout = Layout {
    accs: [
        (v(Curr, 2), v(Curr, 3)),
        (v(Curr, 7), v(Curr, 8)),
        (v(Curr, 9), v(Curr, 10)),
        (v(Curr, 11), v(Curr, 12)),
        (v(Curr, 13), v(Curr, 14)),
        (v(Next, 0), v(Next, 1)),
    ],
    bits: [v(Next, 2), v(Next, 3), v(Next, 4), v(Next, 5), v(Next, 6)],

    ss: [v(Next, 7), v(Next, 8), v(Next, 9), v(Next, 10), v(Next, 11)],

    base: (v(Curr, 0), v(Curr, 1)),
    n_prev: v(Curr, 4),
    n_next: v(Curr, 5),
};

pub struct VarbaseMulResult<F> {
    pub acc: (F, F),
    pub n: F,
}

pub fn witness<F: FftField + std::fmt::Display>(
    w: &mut [Vec<F>; COLUMNS],
    row0: usize,
    base: (F, F),
    bits: &[bool],
    acc0: (F, F),
) -> VarbaseMulResult<F> {
    let l = LAYOUT;
    let bits: Vec<_> = bits.iter().map(|b| F::from(*b as u64)).collect();
    let bits_per_chunk = 5;
    assert_eq!(bits_per_chunk * (bits.len() / bits_per_chunk), bits.len());

    let mut acc = acc0;
    let mut n_acc = F::zero();
    for (chunk, bs) in bits.chunks(bits_per_chunk).enumerate() {
        let row = row0 + 2 * chunk;

        set(w, row, l.n_prev, n_acc);
        for (i, bs) in bs.iter().enumerate().take(bits_per_chunk) {
            n_acc.double_in_place();
            n_acc += bs;
            acc = single_bit_witness(
                w,
                row,
                l.bits[i],
                l.base,
                l.ss[i],
                l.accs[i],
                l.accs[i + 1],
                *bs,
                base,
                acc,
            );
        }
        set(w, row, l.n_next, n_acc);
    }
    VarbaseMulResult { acc, n: n_acc }
}

/// Implementation of the VarbaseMul gate
pub struct VarbaseMul<F>(PhantomData<F>);

impl<F> Argument<F> for VarbaseMul<F>
where
    F: FftField,
{
    const ARGUMENT_TYPE: ArgumentType = ArgumentType::Gate(GateType::VarBaseMul);
    const CONSTRAINTS: u32 = 21;

    fn constraints() -> Vec<E<F>> {
        let Layout {
            base,
            accs,
            bits,
            ss,
            n_prev,
            n_next,
        } = LAYOUT;

        let mut c = Cache::default();

        let mut constraint = |i| single_bit(&mut c, bits[i], base, ss[i], accs[i], accs[i + 1]);

        // n'
        // = 2^5 * n + 2^4 b0 + 2^3 b1 + 2^2 b2 + 2^1 b3 + b4
        // = b4 + 2 (b3 + 2 (b2 + 2 (b1 + 2(b0 + 2 n))))

        let n_prev = E::Cell(n_prev);
        let n_next = E::Cell(n_next);
        let mut res = vec![
            n_next
                - bits
                    .iter()
                    .fold(n_prev, |acc, b| E::Cell(*b) + acc.double()),
        ];

        for i in 0..5 {
            res.append(&mut constraint(i));
        }

        res
    }
}
