import React, { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText);

const FirstSection = () => {
  const headText = useRef();
  const el = useRef();

  useGSAP(() => {
    if (headText.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        ".line-inner",
        {
          x: 0,
          opacity: 0,
          y: "2em",
          rotationX: -60,
          rotationY: -20,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          delay: 0.5,
          rotationX: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power2.out", // Optional: Adjust ease as needed
        }
      );

      tl.fromTo(
        ".line-inner",
        {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 1,
        },
        {
          x: 0,
          y: "2em",
          rotationX: -60,
          rotationY: -20,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: headText.current,
            start: "top 10%", // Start the animation when the top of the headText element hits the top of the viewport
            end: "+=55%", // End the animation 45% of the viewport height after the start
            scrub: true, // Animate in sync with the scroll position
          },
        }
      );
    }
  });

  return (
    <>
      <div
        ref={el}
        className="w-screen !h-screen relative    flex justify-center items-center md:items-start flex-col  font-sf-bold  bg-black z-10"
      >
         <h1
        ref={headText}
        className="text-gray-50 text-[9vw] md:text-[7vw] md:text-start text-center uppercase md:mx-32 leading-[1.1] md:leading-[1]"
      >
        {["how do these", "features actually", 
          <><span className="text-dialed-purple">boost</span> your digital</>, 
          "conversions?"].map((text, index) => (
            <div 
              key={index} 
              className="overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              <div className="line-inner opacity-0">
                {text}
              </div>
            </div>
          ))}
      </h1>
      </div>
    </>
  );
};

export default FirstSection;
