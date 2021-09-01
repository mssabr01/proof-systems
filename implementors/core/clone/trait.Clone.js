(function() {var implementors = {};
implementors["commitment_dlog"] = [{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;C&gt;","synthetic":false,"types":["commitment_dlog::commitment::PolyComm"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + AffineCurve&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.OpeningProof.html\" title=\"struct commitment_dlog::commitment::OpeningProof\">OpeningProof</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["commitment_dlog::commitment::OpeningProof"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"commitment_dlog/srs/struct.SRS.html\" title=\"struct commitment_dlog::srs::SRS\">SRS</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G::BaseField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["commitment_dlog::srs::SRS"]}];
implementors["mina_curves"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mina_curves/pasta/pallas/struct.PallasParameters.html\" title=\"struct mina_curves::pasta::pallas::PallasParameters\">PallasParameters</a>","synthetic":false,"types":["mina_curves::pasta::curves::pallas::PallasParameters"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mina_curves/pasta/vesta/struct.VestaParameters.html\" title=\"struct mina_curves::pasta::vesta::VestaParameters\">VestaParameters</a>","synthetic":false,"types":["mina_curves::pasta::curves::vesta::VestaParameters"]}];
implementors["oracle"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.MarlinSpongeConstants.html\" title=\"struct oracle::poseidon::MarlinSpongeConstants\">MarlinSpongeConstants</a>","synthetic":false,"types":["oracle::poseidon::MarlinSpongeConstants"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.PlonkSpongeConstants.html\" title=\"struct oracle::poseidon::PlonkSpongeConstants\">PlonkSpongeConstants</a>","synthetic":false,"types":["oracle::poseidon::PlonkSpongeConstants"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.PlonkSpongeConstants5W.html\" title=\"struct oracle::poseidon::PlonkSpongeConstants5W\">PlonkSpongeConstants5W</a>","synthetic":false,"types":["oracle::poseidon::PlonkSpongeConstants5W"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.PlonkSpongeConstants3.html\" title=\"struct oracle::poseidon::PlonkSpongeConstants3\">PlonkSpongeConstants3</a>","synthetic":false,"types":["oracle::poseidon::PlonkSpongeConstants3"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"oracle/poseidon/enum.SpongeState.html\" title=\"enum oracle::poseidon::SpongeState\">SpongeState</a>","synthetic":false,"types":["oracle::poseidon::SpongeState"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.ArithmeticSpongeParams.html\" title=\"struct oracle::poseidon::ArithmeticSpongeParams\">ArithmeticSpongeParams</a>&lt;F&gt;","synthetic":false,"types":["oracle::poseidon::ArithmeticSpongeParams"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Field, SC:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"oracle/poseidon/trait.SpongeConstants.html\" title=\"trait oracle::poseidon::SpongeConstants\">SpongeConstants</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.ArithmeticSponge.html\" title=\"struct oracle::poseidon::ArithmeticSponge\">ArithmeticSponge</a>&lt;F, SC&gt;","synthetic":false,"types":["oracle::poseidon::ArithmeticSponge"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"oracle/rndoracle/enum.ProofError.html\" title=\"enum oracle::rndoracle::ProofError\">ProofError</a>","synthetic":false,"types":["oracle::rndoracle::ProofError"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/sponge/struct.ScalarChallenge.html\" title=\"struct oracle::sponge::ScalarChallenge\">ScalarChallenge</a>&lt;F&gt;","synthetic":false,"types":["oracle::sponge::ScalarChallenge"]},{"text":"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + SWModelParameters, SC:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"oracle/poseidon/trait.SpongeConstants.html\" title=\"trait oracle::poseidon::SpongeConstants\">SpongeConstants</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/sponge/struct.DefaultFqSponge.html\" title=\"struct oracle::sponge::DefaultFqSponge\">DefaultFqSponge</a>&lt;P, SC&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P::BaseField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["oracle::sponge::DefaultFqSponge"]}];
implementors["plonk_5_wires_circuits"] = [{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_circuits/constraints/struct.ConstraintSystem.html\" title=\"struct plonk_5_wires_circuits::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt;","synthetic":false,"types":["plonk_5_wires_circuits::constraints::ConstraintSystem"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_circuits/domains/struct.EvaluationDomains.html\" title=\"struct plonk_5_wires_circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt;","synthetic":false,"types":["plonk_5_wires_circuits::domains::EvaluationDomains"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"plonk_5_wires_circuits/gate/enum.GateType.html\" title=\"enum plonk_5_wires_circuits::gate::GateType\">GateType</a>","synthetic":false,"types":["plonk_5_wires_circuits::gate::GateType"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_circuits/gate/struct.CircuitGate.html\" title=\"struct plonk_5_wires_circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;","synthetic":false,"types":["plonk_5_wires_circuits::gate::CircuitGate"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_circuits/polynomial/struct.WitnessEvals.html\" title=\"struct plonk_5_wires_circuits::polynomial::WitnessEvals\">WitnessEvals</a>&lt;F&gt;","synthetic":false,"types":["plonk_5_wires_circuits::polynomial::WitnessEvals"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_circuits/polynomial/struct.WitnessShifts.html\" title=\"struct plonk_5_wires_circuits::polynomial::WitnessShifts\">WitnessShifts</a>&lt;F&gt;","synthetic":false,"types":["plonk_5_wires_circuits::polynomial::WitnessShifts"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_circuits/polynomial/struct.WitnessOverDomains.html\" title=\"struct plonk_5_wires_circuits::polynomial::WitnessOverDomains\">WitnessOverDomains</a>&lt;F&gt;","synthetic":false,"types":["plonk_5_wires_circuits::polynomial::WitnessOverDomains"]},{"text":"impl&lt;Fs:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_circuits/scalars/struct.ProofEvaluations.html\" title=\"struct plonk_5_wires_circuits::scalars::ProofEvaluations\">ProofEvaluations</a>&lt;Fs&gt;","synthetic":false,"types":["plonk_5_wires_circuits::scalars::ProofEvaluations"]},{"text":"impl&lt;Fs:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_circuits/scalars/struct.CamlProofEvaluations.html\" title=\"struct plonk_5_wires_circuits::scalars::CamlProofEvaluations\">CamlProofEvaluations</a>&lt;Fs&gt;","synthetic":false,"types":["plonk_5_wires_circuits::scalars::CamlProofEvaluations"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_circuits/scalars/struct.RandomOracles.html\" title=\"struct plonk_5_wires_circuits::scalars::RandomOracles\">RandomOracles</a>&lt;F&gt;","synthetic":false,"types":["plonk_5_wires_circuits::scalars::RandomOracles"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_circuits/wires/struct.Wire.html\" title=\"struct plonk_5_wires_circuits::wires::Wire\">Wire</a>","synthetic":false,"types":["plonk_5_wires_circuits::wires::Wire"]}];
implementors["plonk_5_wires_protocol_dlog"] = [{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + AffineCurve&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_protocol_dlog/prover/struct.ProverCommitments.html\" title=\"struct plonk_5_wires_protocol_dlog::prover::ProverCommitments\">ProverCommitments</a>&lt;G&gt;","synthetic":false,"types":["plonk_5_wires_protocol_dlog::prover::ProverCommitments"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + AffineCurve&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_protocol_dlog/prover/struct.CamlProverCommitments.html\" title=\"struct plonk_5_wires_protocol_dlog::prover::CamlProverCommitments\">CamlProverCommitments</a>&lt;G&gt;","synthetic":false,"types":["plonk_5_wires_protocol_dlog::prover::CamlProverCommitments"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + AffineCurve&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_5_wires_protocol_dlog/prover/struct.ProverProof.html\" title=\"struct plonk_5_wires_protocol_dlog::prover::ProverProof\">ProverProof</a>&lt;G&gt;","synthetic":false,"types":["plonk_5_wires_protocol_dlog::prover::ProverProof"]}];
implementors["plonk_circuits"] = [{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/constraints/struct.ConstraintSystem.html\" title=\"struct plonk_circuits::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt;","synthetic":false,"types":["plonk_circuits::constraints::ConstraintSystem"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/domains/struct.EvaluationDomains.html\" title=\"struct plonk_circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt;","synthetic":false,"types":["plonk_circuits::domains::EvaluationDomains"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"plonk_circuits/gate/enum.GateType.html\" title=\"enum plonk_circuits::gate::GateType\">GateType</a>","synthetic":false,"types":["plonk_circuits::gate::GateType"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/gate/struct.CircuitGate.html\" title=\"struct plonk_circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;","synthetic":false,"types":["plonk_circuits::gate::CircuitGate"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/gate/struct.Gate.html\" title=\"struct plonk_circuits::gate::Gate\">Gate</a>&lt;F&gt;","synthetic":false,"types":["plonk_circuits::gate::Gate"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/polynomial/struct.WitnessEvals.html\" title=\"struct plonk_circuits::polynomial::WitnessEvals\">WitnessEvals</a>&lt;F&gt;","synthetic":false,"types":["plonk_circuits::polynomial::WitnessEvals"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/polynomial/struct.WitnessShifts.html\" title=\"struct plonk_circuits::polynomial::WitnessShifts\">WitnessShifts</a>&lt;F&gt;","synthetic":false,"types":["plonk_circuits::polynomial::WitnessShifts"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/polynomial/struct.WitnessOverDomains.html\" title=\"struct plonk_circuits::polynomial::WitnessOverDomains\">WitnessOverDomains</a>&lt;F&gt;","synthetic":false,"types":["plonk_circuits::polynomial::WitnessOverDomains"]},{"text":"impl&lt;Fs:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/scalars/struct.ProofEvaluations.html\" title=\"struct plonk_circuits::scalars::ProofEvaluations\">ProofEvaluations</a>&lt;Fs&gt;","synthetic":false,"types":["plonk_circuits::scalars::ProofEvaluations"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/scalars/struct.RandomOracles.html\" title=\"struct plonk_circuits::scalars::RandomOracles\">RandomOracles</a>&lt;F&gt;","synthetic":false,"types":["plonk_circuits::scalars::RandomOracles"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/wires/struct.GateWires.html\" title=\"struct plonk_circuits::wires::GateWires\">GateWires</a>","synthetic":false,"types":["plonk_circuits::wires::GateWires"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"plonk_circuits/wires/enum.Col.html\" title=\"enum plonk_circuits::wires::Col\">Col</a>","synthetic":false,"types":["plonk_circuits::wires::Col"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/wires/struct.Wire.html\" title=\"struct plonk_circuits::wires::Wire\">Wire</a>","synthetic":false,"types":["plonk_circuits::wires::Wire"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_circuits/wires/struct.Wires.html\" title=\"struct plonk_circuits::wires::Wires\">Wires</a>","synthetic":false,"types":["plonk_circuits::wires::Wires"]}];
implementors["plonk_protocol_dlog"] = [{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + AffineCurve&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_protocol_dlog/prover/struct.ProverCommitments.html\" title=\"struct plonk_protocol_dlog::prover::ProverCommitments\">ProverCommitments</a>&lt;G&gt;","synthetic":false,"types":["plonk_protocol_dlog::prover::ProverCommitments"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + AffineCurve&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_protocol_dlog/prover/struct.ProverProof.html\" title=\"struct plonk_protocol_dlog::prover::ProverProof\">ProverProof</a>&lt;G&gt;","synthetic":false,"types":["plonk_protocol_dlog::prover::ProverProof"]},{"text":"impl&lt;Fs:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plonk_protocol_dlog/verifier/struct.CachedValues.html\" title=\"struct plonk_protocol_dlog::verifier::CachedValues\">CachedValues</a>&lt;Fs&gt;","synthetic":false,"types":["plonk_protocol_dlog::verifier::CachedValues"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()