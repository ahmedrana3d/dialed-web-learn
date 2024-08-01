import { Environment, OrbitControls, Sparkles, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import Monitor from '../../Components/Models/Monitor'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  const monitorRef = useRef();




  const [monScale, setMonScale] = useState(1.5)


useEffect(()=>{

  window.addEventListener("resize" , ()=>{
    if (window.innerWidth  < 1000) {
      setMonScale(1.3)
    } else if (window.innerWidth < 700) {
      setMonScale(1.3)
    }
  })


},[])

  

  useGSAP(() => {
    // if (monitorRef.current) {
      ScrollTrigger.create({
        trigger: ".trigger-1",
        start: "top center",
        // markers: true,
        onEnter: () => gsap.to(monitorRef.current.scale, { x: monScale, y: monScale, z: monScale, duration: 0.5 ,   ease: "power4.inOut", }),
        onLeave: () => gsap.to(monitorRef.current.scale, { x: 0, y: 0, z: 0, duration: 0.5 ,   ease: "power4.inOut", }),
        onEnterBack: () => gsap.to(monitorRef.current.scale, { x: monScale, y: monScale, z: monScale, duration: 0.5 ,   ease: "power4.inOut", }),
        onLeaveBack: () => gsap.to(monitorRef.current.scale, { x: 0, y: 0, z: 0, duration: 0.5 ,   ease: "power4.inOut", }),
      });
    // }
  });

  return (
    <section className='z-10 relative w-screen h-[300vh] bg-black'>
      <div className='trigger-1 absolute h-80  w-16 z-30 '></div>
      <div className='trigger-2 absolute h-80  w-16 z-30 bottom-0'></div>
      <div className='h-screen flex justify-start items-center flex-col sticky top-0'>

{/* <img src="./images/squiggle.svg" className=' absolute top-0 left-0 w-screen h-[200vh] z-50' alt="" /> */}


<div>
  <div></div>
</div>


        <div className='w-full h-full'>
          <Canvas className='!w-[100%] !h-[100vh]'
            camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 11] }}
          >
            <Sparkles
              position={[0, 0, 0]}
              scale={[30, 30, 8]}
              size={8}
              count={100}
              color={"#a09bcb"}
              far={10}
              speed={1}
            />
            <group ref={monitorRef}  scale={0} position={[0, 0.5, 0]}>
              {/* <Stage> */}
              <Monitor />
              {/* </Stage> */}
            </group>



            <Environment preset="city" />
            <ambientLight intensity={Math.PI / 2} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default Page1;
