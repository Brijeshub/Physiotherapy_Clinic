import React from "react";
import BackTo from "../../button/BackTo";

function Head() {
  return (
    <>
      <BackTo/>
        <div className="px-10 my-12">
          <h2 className="text-3xl font-semibold">Introduction</h2>
          <p className="font-serif">
            The cranium (from the Greek word krania, meaning skull) is the most
            cephalad aspect of the axial skeleton. The cranium, or skull, is
            composed of 22 bones anis d divided into two regions: the
            neurocranium (which protects the brain) and the viscerocranium
            (which forms the face).
            <br/>
            The skull also supports tendinous muscle attachments and allows
            neurovascular passage between intracranial and extracranial anatomy.
            The skull is embryologically derived from mesoderm and neural crest
            and will fuse, harden, and mold from gestation through adulthood. It
            gives the human face its form, and even minor variations in anatomy
            among individuals can lead to vast differences in appearance.
          </p>
        <div className="my-10">
          <img src="https://www.ncbi.nlm.nih.gov/books/NBK499834/bin/skullForamen.jpg" />
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-1">Medical Management</h1>
          <h2 className="text-xl font-medium mb-1">Medications</h2>
          <p className="my-2">
            Milder forms of pain may be relieved by over-the-counter medications
            such as Tylenol (acetaminophen) or nonsteroidal anti-inflammatory
            drugs (NSAIDs) such as aspirin, ibuprofen, and naproxen. Both
            acetaminophen and NSAIDs relieve pain caused by muscle aches and
            stiffness, and additionally, NSAIDs reduce inflammation (swelling
            and irritation). If over-the-counter drugs do not provide relief, a
            doctor may prescribe muscle relaxants, anti-anxiety drugs (Valium),
            antidepressants (Cymbalta), NSAIDs such as Celebrex, or a short
            course of stronger painkillers (codeine), hydrocodone and
            acetaminophen (Vicodin)
          </p>
          <h2 className="text-2xl font-semibold mb-1">
            Trigger Point Injection (TPI)
          </h2>
          <p className="my-2">
            This is a procedure of inserting a small needle into the patient's
            active TrP. The injection contains a local anaesthetic or saline and
            may include a corticosteroid. With the injection, the TrP is made
            inactive and the pain is alleviated. Often, a brief course of
            treatment will result in sustained relief. Injections are performed
            by a physician and usually take a few minutes. Several sites may be
            injected in one visit. If a patient has an allergy to a certain
            drug, a dry-needle technique (involving no medications) can be used
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-1">
            Physical Therapy Management
          </h1>
          <ul className="my-2">
            <li className="list-disc my-2">
              If possible, everyday-life factors that arouse the emergence of
              TrPs must be eliminated or reduced,
            </li>
            <li className="list-disc">
              Posture training and education about postures and lifestyle,
            </li>
            <li className="list-disc my-2">
              Passive stretching and/or Foam Roller stretching, a few times a
              day,
            </li>
            <li className="list-disc">
              Self-massage, a few times a day, and especially Deep Stroking
              Massage done rhythmically and in only one direction,
            </li>
            <li className="list-disc my-2">
              Strengthening: initially only isometric and then isotonic
              exercises,
            </li>
            <li className="list-disc">
              Ischemic Compression Technique - the term has been used to
              describe treatment in which ischemia is induced in the TrPt zone
              by applying sustained pressure. However, this principle is
              questionable, since the nucleus of the TrP intrinsically presents
              important hypoxia. Simons described a similar treatment modality,
              though without the need to induce additional ischemia in the TrP
              zone (TrP Pressure Release). The aim of this technique is to free
              the contracted sarcomeres within the TrP. The amount of pressure
              applied should suffice to produce gradual relaxation of the
              tension within the TrP zone, without causing pain. Yet both
              techniques show imitate significant improvement of the ROM after
              treatment
            </li>
            <li className="list-disc my-2">
              Spray and Stretch Technique by using ethyl chloride spray,
            </li>
            <li className="list-disc">
              Manual Lymphatic Drainage (MLD), since the presence of TrPs
              obstacle lymphatic flow,
            </li>
            <li className="list-disc my-2">
              Other proprioceptive neuromuscular techniques: Reciprocal
              Inhibition (RI), Post-Isometric Relaxation (PIR),
              Contract-Relax/Hold-Relax (CRHR), Contract-Relax/Antagonist
              Contract (CRAC),
            </li>
            <li className="list-disc my-2">
              Some specific techniques like Neuromuscular Technique(NMT), Muscle
              Energy Technique (MET) and Myotherapy (MT),
            </li>
          </ul>
        </div>
        </div>
    </>
  );
}

export default Head;
