import React from "react";
import { Link } from "react-router-dom";
import BackTo from "../../button/BackTo";
function Hip() {
  return (
    <>
      <BackTo/>
      <div className="flex flex-col my-16 mx-16">
        <h1 className="text-2xl font-semibold mb-1">Hip Pain</h1>
        <p className="w-10/12">
          Hip pain is a common symptom that can be caused by anything from
          sports injuries to arthritis. You can usually treat hip pain at home
          by taking a break from physical activities and taking over-the-counter
          pain relievers. But if the pain persists or gets worse, other
          treatments may be necessary.
        </p>
        <div className="w-1/2 mx-auto my-10">
          <img
            src="https://my.clevelandclinic.org/-/scassets/images/org/health/articles/21118-hip-pain"
            alt="hip"
          />
          <p>
            Hip pain can be caused by arthritis, injuries, bursitis and
            structural issues with your hip joint.
          </p>
        </div>
      </div>

      <div className="w-10/12 space-y-4">
        <h1 className="text-2xl font-semibold mb-1">What is hip pain?</h1>
        <p>
          Hip pain is pain or discomfort you feel in or around your hip joint.
          <br />
          A joint is a place in your body where two bones meet. Your hip joint
          is where your thigh bone (femur) connects to your pelvis. Your hip
          joint is one of the largest joints in your body, and you use it
          constantly to move, support your weight and maintain your balance.
          <br />
          Hip pain can range from a temporary, short-term annoyance to a bigger
          issue that needs treatment from a healthcare provider. Where you feel
          the pain depends on which part of your hip joint is damaged. You might
          feel hip pain:
        </p>
        <ul className="list-disc space-y-5">
          <li>
            Close to the surface above or around your hip (usually an issue with
            your muscles, tendons or ligaments).
          </li>
          <li>
            Deeper inside your hip joint (pain that comes from your bones or
            cartilage).
          </li>
          <li>
            In your lower back. Hip pain can sometimes spread (radiate) to other
            areas like your lower back or groin.
          </li>
        </ul>
        <p>
          The pain might come and go. For example, you might feel hip pain when
          you’re walking or moving, but it gets better when you rest. Some
          people also feel pain during different parts of the day. You could
          feel more pain first thing in the morning when you wake up. It’s also
          common to feel hip pain at night, especially if you sleep lying on the
          same side as your painful hip.
          <br />
          You can usually treat hip pain at home by taking a break from physical
          activities and by taking over-the-counter pain relievers. Visit a
          healthcare provider if you’re feeling hip pain that’s bad enough to
          affect your daily routine or that’s making it hard to move. See a
          provider if you’re feeling pain that lasts more than a few days
          without getting better.
        </p>
      </div>
    </>
  );
}

export default Hip;
