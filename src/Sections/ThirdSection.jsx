import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {
  const textRef = useRef();

  useGSAP(() => {
    // Create a new SplitText instance to split the text into characters
    const split = new SplitText(textRef.current, { type: "words, chars" });

    // Define the GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom", // Start the animation when the top of the textRef element enters the bottom of the viewport
        end: "bottom center", // End the animation when the bottom of the textRef element exits the top of the viewport
        scrub: true, // Animate in sync with the scroll position
        // markers: true,       // Display markers for debugging
      },
    });

    // Add animations to the timeline
    tl.fromTo(
      split.chars,
      {
        scaleY: 0.1,
        scaleX: 1.8,
        filter: 'blur(10px) brightness(50%)',
        willChange: 'filter, transform'
      }, {
          ease: 'none', 
          scaleY: 1,
          scaleX: 1,
          filter: 'blur(0px) brightness(100%)',
          stagger: 0.05, 
      });


      
  }, []);

  return (
<div className="w-screen relative h-[70vh] flex justify-center  bg-black items-center overflow-hidden">
  <div
    ref={textRef}
    className="relative w-11/12 md:w-3/4 lg:w-1/2 text-gray-50  text-[2.5vw]  font-helvetica  leading-tight text-center px-4 md:px-8"
  >

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus iste veritatis consequatur laborum odit, ratione maxime, totam suscipit eveniet sequi, amet rerum corporis assumenda quae ducimus quasi ipsa consequuntur deleniti?

  </div>
  <div className="absolute inset-0 z-[-1]">
    <svg viewBox="0 0 1024 1024" className="w-full h-full absolute top-0 left-0 opacity-10">
      <circle cx="200" cy="300" r="200" fill="rgba(255, 255, 255, 0.1)" />
      <circle cx="800" cy="500" r="150" fill="rgba(255, 255, 255, 0.05)" />
      <circle cx="500" cy="800" r="250" fill="rgba(255, 255, 255, 0.1)" />
    </svg>
  </div>
</div>

  
  );
};

export default ThirdSection;
