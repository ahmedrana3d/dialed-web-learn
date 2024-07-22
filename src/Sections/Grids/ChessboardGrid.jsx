import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import CursorAnimation from "../../assets/cursor.json";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import Monitor from "../../Components/Models/Monitor";
import TextPlugin from "gsap/TextPlugin";
import ChessBoard from "../../Components/Models/ChessBoard";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const ChessboardGrid = () => {
  const textRef = useRef();
  const numberRef = useRef();


  const [scaleValues, setScaleValues] = useState({ left: 1.5, right: 0.5 });
  const chessBoardRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX } = event;
      const windowWidth = window.innerWidth;
      const mouseX = clientX;
      const scaleFactor = mouseX / windowWidth;
      const newScaleValues = {
        left: 0.5 + scaleFactor,
        right: 1.5 - scaleFactor,
      };
      setScaleValues(newScaleValues);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "words, chars" });

    gsap.fromTo(
      split.chars,
      { scale: 0,  },
      {
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 99%",
          end: "top 99%",
          onEnter : ()=>{
if (chessBoardRef.current) {
  chessBoardRef.current.playAnimation()
}
          },
          // markers: true,
          toggleActions: "play none reset none",
        },
      }
    );


  

    gsap.fromTo(
      numberRef.current,
      { innerText: "0%" },
      {
        duration: 2,
        innerText: "89%",
        stagger: 0.05,
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top 99%",
          end: "top 99%",
          // markers: true,
          toggleActions: "play none reset none",
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          numberRef.current.innerText = `${Math.round(
            parseFloat(this.targets()[0].innerText)
          )}%`;
        },
      }
    );
  }, []);

  return (
    <div className="w-screen h-[100vh] flex justify-center items-center bg-black">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 md:grid-rows-3 gap-4 w-[95%] h-[90%] md:w-[90%] md:h-[70%] p-2 md:p-4 rounded-2xl">
        <div className="col-span-1 md:col-span-2 row-span-2 md:row-span-3 flex flex-col gap-2 md:gap-4">
          <div className="flex gap-2 md:gap-4 h-2/5">
            <div className="bg-white w-[60%] flex justify-center items-center rounded-3xl">
              <div
                ref={numberRef}
                className="text-[8vw] md:text-[5.5vw] font-international-bold"
              >
                90%
              </div>
            </div>
            <div className="bg-[#111111] w-[40%] flex justify-center items-center rounded-3xl">
              <div className="scale-75">
                <Lottie animationData={CursorAnimation} loop={true} />
              </div>
            </div>
          </div>
          <div className="bg-white flex justify-start items-start h-[30%] md:h-full rounded-3xl p-4 md:p-10">
            <div
              ref={textRef}
              className="text-black font-inter text-[4vw] md:text-[3vw] leading-tight font-semibold"
            >
              Of users turn to a competitor after a poor user experience
            </div>
          </div>
        </div>
        <div className="bg-black col-span-1 md:col-span-2 row-span-1 md:row-span-3 flex justify-center items-center rounded-3xl relative">
  <Canvas
    className="!w-full !h-full z-10"
    camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 5, 11] }}
  >
    <group>
      <Stage shadows={"contact"}>
        <group position={[0, 10, -1]} rotation={[0 , 1 , 0]}>
        <ChessBoard ref={chessBoardRef} />
        </group>
      </Stage>
      {/* <OrbitControls/> */}
    </group>
    <Environment preset="city" />
    <ambientLight intensity={Math.PI / 2} />
  </Canvas>

  <div className="absolute left-0 top-0 w-full h-full grid gap-x-10 grid-cols-2  pointer-events-none">
  <div
        className="rounded-3xl bg-[#111111] scale-transition origin-left"
        style={{ transform: `scale(${scaleValues.left}, 1)` }}
      ></div>
      <div
        className="rounded-3xl bg-neutral-200 scale-transition origin-right"
        style={{ transform: `scale(${scaleValues.right}, 1)` }}
      ></div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ChessboardGrid;
