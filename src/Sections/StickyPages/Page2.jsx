import React, { useRef, useState } from 'react'
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactOdometer from 'react-odometerjs';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

    const text1 = useRef(null);

    const [value, setValue] = useState(0.01);

    useGSAP(() => {
        if (text1.current) {
  
          const tl = gsap.timeline({
            ease: "power0",
            scrollTrigger: {
                trigger: ".trigger",
                start: "top bottom",
                endTrigger: ".trigger-el",
                end: "top bottom",
                scrub: 1,
                markers : true,
                onUpdate: self => {
                    if (self.progress > 0) {
                        setValue(0.05);
                    } else {
                        setValue("0.01");
                    }
                }
            }
        });

        
        }
    }, []);
    









  return (

    <>




<div className='z-10 relative w-screen h-[100vh]'>
            <div className='trigger-el absolute h-16 w-16 z-30 bottom-0'></div>

            <div className='h-screen flex justify-center items-center flex-col   '>
                <div className='trigger absolute h-16 w-16 z-30 top-2/3'></div>

                <div  className='flex flex-col gap-7 justify-center items-center'>
                    <div ref={text1} className=' tracking-widest text-xl lg:text-6xl text-center text-gray-100 font-inter font-bold'>
                    Users generate an  <span className='highlighted-text'>opinion</span> about a website 🌐 in
                    </div>
                    <ReactOdometer className='  text-[10vw] ' value={value} format="(.ddd),dd"></ReactOdometer>
                    <div ref={text1} className=' tracking-widest text-xl lg:text-6xl text-center text-gray-100 font-inter font-bold'>
                    seconds
                    </div>
                </div>

             
            </div>
        </div>
  
      </>
  

  )
}

export default Page2
