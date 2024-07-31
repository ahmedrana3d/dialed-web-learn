import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import ClockAnimation from "../../assets/clock.json";

import TextPlugin from "gsap/TextPlugin";
import { SlArrowRight } from "react-icons/sl";


gsap.registerPlugin(ScrollTrigger, TextPlugin);

const OpinionStatGrid = () => {
  const textRef = useRef();
  const text2Ref = useRef();
  const numberRef = useRef();

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "words, chars" });
    const split2 = new SplitText(text2Ref.current, { type: "words, chars" });

    gsap.fromTo(
      split.chars,
     {
  filter: "blur(20px)",
  scaleY: 0.1,
     },
      {
        filter: "blur(0px)",
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 30%",
          scrub: 1,
          // markers: true,
        },
      }
    );


    gsap.fromTo(
      split2.chars,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: text2Ref.current,
          start: "top 90%",
          end: "top 30%",
          scrub: 1,
          // markers: true,
          
        },
      }
    );







  }, []);

  return (

    <div className="w-screen h-[100vh] flex justify-center items-center bg-black">
  <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 w-[95%] h-[90%] md:w-[80%] md:h-[60%] p-2 md:p-4 rounded-2xl">
    
    <div className="bg-[#111111] col-span-1 md:col-span-2 row-span-1 md:row-span-1 flex justify-center items-center rounded-3xl">
      <div ref={textRef} className="text-white font-inter text-[5vw] md:text-[2vw] leading-tight font-semibold p-2 md:p-6">
        Users generate an opinion about a website in...
      </div>
    </div>


    <div className="bg-white col-span-1 md:col-span-1 row-span-1 md:row-span-1 md:hidden flex justify-center items-center rounded-3xl">
      <div ref={numberRef} className="text-[7vw] md:text-[5.5vw] font-international-bold">
        0.05 <span className="text-[5vw] md:text-[2vw]">seconds</span>
      </div>
    </div>
    

    {/* bg-white col-span-1 md:col-span-1 row-span-1 md:row-span-1 flex justify-center items-center rounded-3xl */}
    <div className="bg-white col-span-1 md:col-span-1 row-span-1 md:row-span-1 flex justify-center items-center rounded-3xl">
      <div>
        <Lottie  animationData={ClockAnimation} loop={false} />
      </div>
    </div>
    
    <div className="bg-[#111111] col-span-1 md:col-span-1 row-span-1 md:row-span-2 flex flex-col justify-around items-center rounded-3xl">
      <div ref={text2Ref} className="text-white font-inter text-[5vw] md:text-[2vw] leading-tight font-semibold p-2 md:p-4">
        Ensure your hero page is engaging and captivating.
      </div>
      <button className="bg-white text-black font-sf-bold text-[4vw] md:text-2xl font-bold py-3 px-6 rounded-full flex items-center space-x-2">
        <span>Get in Touch</span>
        <SlArrowRight />
      </button>
    </div>
    
    
    <div className="bg-white col-span-1 hidden md:col-span-3 row-span-1 md:row-span-1 md:flex justify-center items-center rounded-3xl md:order-none order-last">
      <div ref={numberRef} className="text-[7vw] md:text-[5.5vw] font-international-bold">
        0.05 <span className="text-[5vw] md:text-[2vw]">seconds</span>
      </div>
    </div>
  </div>
</div>


  
  );
};

export default OpinionStatGrid;

//  <div className="w-screen h-[100vh] flex justify-center items-center bg-black">
//   <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-4 w-[95%] h-[90%] md:w-[90%] md:h-[70%] p-2 md:p-4 rounded-2xl">
//     <div className="bg-[#111111] col-span-1 md:col-span-2 row-span-1 md:row-span-1 flex justify-center items-center rounded-3xl">
//       <div className="text-white font-inter text-[4vw] md:text-[2vw] leading-tight font-semibold p-4 md:p-10">
//         Users generate an opinion about a website in...
//       </div>
//     </div>
//     <div className="bg-white col-span-1 md:col-span-1 row-span-1 md:row-span-2 flex justify-center items-center rounded-3xl">
//       <div
//         ref={numberRef}
//         className="text-[8vw] md:text-[5.5vw] font-international-bold"
//       >
//         0.05 <span className="text-[4vw] md:text-[2vw]">seconds</span>
//       </div>
//     </div>
//     <div className="bg-[#111111] col-span-1 md:col-span-1 row-span-1 md:row-span-2 flex flex-col justify-center items-center rounded-3xl p-4 md:p-10">
//       <div className="text-white font-inter text-[4vw] md:text-[2vw] leading-tight font-semibold">
//         Ensure your hero page is engaging and captivating.
//       </div>
//       <button className="mt-4 bg-white text-black font-bold py-2 px-4 rounded-full">
//         Get in Touch
//       </button>
//     </div>
//   </div>
// </div>
