import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import UserAnimation from "../../assets/user.json";
import { Canvas } from "@react-three/fiber";
import { Environment, Stage } from "@react-three/drei";
import Monitor from "../../Components/Models/Monitor";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const MonitorGrid = () => {
  const textRef = useRef();
  const numberRef = useRef();

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "words, chars" });

    gsap.fromTo(
      split.chars, 
      { opacity: 0.1 }, 
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 99%',
          end: 'top 99%',
          // markers: true,
          toggleActions: 'play none reset none',
        }
      }
    );

    gsap.fromTo(
      numberRef.current, 
      { innerText: "0%" }, 
      {
        duration: 2,
        innerText: "90%",
        stagger: 0.05,
        scrollTrigger: {
          trigger: numberRef.current,
          start: 'top 99%',
          end: 'top 99%',
          // markers: true,
          toggleActions: 'play none reset none',
        },
        snap: { innerText: 1 },
        onUpdate: function() {
          numberRef.current.innerText = `${Math.round(parseFloat(this.targets()[0].innerText))}%`;
        }
      }
    );

  }, []);

  return (
<div className="w-screen h-[100vh] flex justify-center items-center bg-black">
  <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 md:grid-rows-3 gap-4 w-[95%] h-[90%] md:w-[90%] md:h-[70%] p-2 md:p-4 ">
    <div className="bg-[#111111] col-span-1 md:col-span-2 row-span-1 md:row-span-3 flex justify-center items-center rounded-3xl">
      <Canvas
        className='!w-full !h-[50vh] md:!h-[75vh]'
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 11] }}
      >
        <group>
          <Stage>
            <Monitor />
          </Stage>
        </group>
        <Environment preset="city" />
        <ambientLight intensity={Math.PI / 2} />
      </Canvas>
    </div>
    <div className="col-span-1 md:col-span-2 row-span-2 md:row-span-3 flex flex-col gap-2 md:gap-4">
      <div className="flex gap-2 md:gap-4 h-2/5">
        <div className="bg-white w-[60%] flex justify-center items-center rounded-3xl">
          <div ref={numberRef} className="text-[8vw] md:text-[5.5vw] font-international-bold">90%</div>
        </div>
        <div className="bg-white w-[40%] flex justify-center items-center rounded-3xl">
          <div className="scale-75">
            <Lottie animationData={UserAnimation} loop={true} />
          </div>
        </div>
      </div>
      <div className="bg-[#111111] flex justify-start items-start h-[30%] md:h-full rounded-3xl p-4 md:p-10">
        <div ref={textRef} className="text-white font-inter text-[4vw] md:text-[2.5vw] leading-tight font-semibold">
          Of users cite poor design as a primary reason for not trusting a website.
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default MonitorGrid;
