import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import UserAnimation from "../assets/user.json";
import { Canvas } from "@react-three/fiber";
import { Environment, Stage } from "@react-three/drei";
import Monitor from "../Components/Models/Monitor";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const ThirdSection = () => {
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
      <div className="grid grid-cols-4 grid-rows-3 gap-4 w-4/5 h-3/5 p-4  rounded-2xl">
        <div className=" bg-[#111111] col-span-2 row-span-3 flex justify-center items-center rounded-3xl">
          <Canvas className='!w-[100%] !h-[100vh]'
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
        <div className="col-span-2 row-span-3 flex flex-col gap-4">
          <div className="flex gap-4 h-2/5">
            <div className="bg-white w-[60%] flex justify-center items-center rounded-3xl">
              <div ref={numberRef} className="text-[5vw] font-international-bold">90%</div>
            </div>
            <div className="bg-white w-[40%] flex justify-center items-center rounded-3xl">
              <div className=" scale-75">
              <Lottie animationData={UserAnimation} loop={true} />
              </div>
            </div>
          </div>
          <div className="bg-[#111111] flex justify-center items-center h-full rounded-3xl">
            <div ref={textRef} className="text-white font-inter text-[2.2vw] mx-16 leading-tight font-semibold">
              Of users cite poor design as a primary reason for not trusting a website.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
