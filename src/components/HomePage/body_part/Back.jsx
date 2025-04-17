import React from "react";
import BackTo from "../../button/BackTo";

function Back() {
  return (
    <>
     <BackTo/>
      <div>
        <h1 className="text-3xl font-serif  font-semibold py-5">Back pain</h1>
        <h2 className="text-2xl font-semibold py-1">Definition</h2>
        <p>
          There are different definitions of low back pain (LBP) depending on
          the source.
        </p>
        <p>
          <ul className="list-disc space-y-2">
            <li>
              According to the European Guidelines for prevention of LBP, LBP is
              defined as “pain and discomfort, localised below the costal margin
              and above the inferior gluteal folds, with or without leg pain"[1]
            </li>
            <li>
              according to S.Kinkade, which resembles the European guidelines is
              that LBP is “pain that occurs posteriorly in the region between
              the lower rib margin and the proximal thighs”.[2]
            </li>
            <li>
              The most common form of LBP is the one that is called
              “non-specific LBP” and is defined as “LBP not attributed to
              recognisable, known specific pathology”. [1]
            </li>
          </ul>
        </p>
      </div>

      <div className="size-72 mx-auto my-10">
        <img src="https://www.physio-pedia.com/images/a/a4/Muscles_of_the_back_erector_spinae_group_Primal.png" />
      </div>
      <div>
        <h1 className="text-3xl font-semibold py-5">Epidemiology</h1>
        <ul className="list-disc space-y-2">
          <li>
            Widespread Prevalence: LBP is a common condition, affecting a
            significant portion of the population
          </li>
          <li>Lifetime Prevalence: Estimates range from 60-80% of adults.</li>
          <li>Chronic LBP: Up to 23% of adults suffer from chronic LBP.</li>
          <li>
            High Recurrence Rate: Chronic LBP patients have a high risk of
            recurrence.
          </li>
          <li>
            Adolescent LBP: A significant number of 84% adolescents experience
            back pain.[3]
          </li>
          <li>
            Disability: LBP can lead to disability in a substantial portion of
            the population11-12%.[4]
          </li>
        </ul>
      </div>
    </>
  );
}

export default Back;
