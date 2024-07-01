import React, { useRef } from 'react'
import Page1 from './StickyPages/Page1'
import Page2 from './StickyPages/Page2'
import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'
import { StickyScrollScene } from '@14islands/r3f-scroll-rig/powerups'
import { GradientTexture, MeshDistortMaterial } from '@react-three/drei'
import groovyWalkAnimation from "../assets/globe_animation.json";
import Lottie from 'lottie-react'

const FourthSection = () => {

const section1 = useRef()

  return (
  <>
<div className='relative '>
  <div ref={section1} className='z-10 sticky top-0 flex justify-center items-center w-screen h-screen bg-[#2fbde4]'>
  <Lottie animationData={groovyWalkAnimation} loop={true} />;
  </div>
  <div className='z-20 sticky top-0 flex justify-center items-center w-screen h-screen bg-[#040316]'>
    <h1 className='font-semibold text-9xl text-gray-100 font-gt-apline'>Section 2</h1>
  </div>

  <div className='z-30 sticky top-0 flex justify-center items-center w-screen h-screen bg-[#912bc0]'>
    <h1 className='font-semibold text-9xl text-gray-100 font-gt-apline'>Section 3</h1>
  </div>

  <div className='z-40 sticky top-0 flex justify-center items-center w-screen h-screen bg-[#31c0b9]'>
    <h1 className='font-semibold text-9xl text-gray-100 font-gt-apline'>Section 4</h1>
  </div>

  <div className='z-50 sticky top-0 flex justify-center items-center w-screen h-screen bg-[#d134aa]'>
    <h1 className='font-semibold text-9xl text-gray-100 font-gt-apline'>Section 5</h1>
  </div>



</div>



  </>
  )
}

export default FourthSection
