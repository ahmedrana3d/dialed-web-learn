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



    useGSAP(() => {
 
          const tl = gsap.timeline({
            ease: "power0",
            scrollTrigger: {
                trigger: ".opinion-1",
                start: "top 90%",
                endTrigger: ".opinion-2",
                end: "bottom 80%",
                scrub: true,
             
                
        
            }
        });

        tl.fromTo(
            ".left-mob1",
            {
              x: -748.505,        // Translate X value
              y: -209.18,        // Translate Y value
              rotation: 40.2961  // Rotation in degrees
            },
            {
              x: 0.505,          // Translate X value
              y: -209.18,        // Translate Y value
              rotation: 12, // Rotation in degrees
              duration: 1,       // Duration of the animation (in seconds)
              ease: "power2.inOut" // Easing function for smoother animation
            }
          );
          
        tl.fromTo(
            ".right-mob1",
            {
              x: 748.505,        // Translate X value
              y: -209.18,        // Translate Y value
              rotation: 40.2961  // Rotation in degrees
            },
            {
              x: 0.505,          // Translate X value
              y: -209.18,        // Translate Y value
              rotation: -12, // Rotation in degrees
              duration: 1,       // Duration of the animation (in seconds)
              ease: "power2.inOut" // Easing function for smoother animation
            },
            "<"
          );
          
        tl.fromTo(
            ".left-mob2",
            {
              x: -748.505,        // Translate X value
              y: -209.18,        // Translate Y value
              rotation: 40.2961  // Rotation in degrees
            },
            {
              x: 0.505,          // Translate X value
              y: -209.18,        // Translate Y value
              rotation: -12, // Rotation in degrees
              duration: 1,       // Duration of the animation (in seconds)
              ease: "power2.inOut" // Easing function for smoother animation
            },
            ">"
          );
          
        tl.fromTo(
            ".right-mob2",
            {
              x: 748.505,        // Translate X value
              y: -209.18,        // Translate Y value
              rotation: 40.2961  // Rotation in degrees
            },
            {
              x: 0.505,          // Translate X value
              y: -209.18,        // Translate Y value
              rotation: 12, // Rotation in degrees
              duration: 1,       // Duration of the animation (in seconds)
              ease: "power2.inOut" // Easing function for smoother animation
            },
            "<"
          );
          
   
          





    
    }, []);
    

// translate3d(148.505px, -209.18px, 0px) rotate(16.2961deg);







  return (

    <>




<div className='z-10 relative w-screen h-screen flex justify-center items-center'>


    <div className=' opinion-1 w-12 h-12  absolute top-0'></div>
    <div className=' opinion-2 w-12 h-12  absolute bottom-0'></div>
    
{/* https://buenro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F20.29e37a71.jpg&w=1920&q=75 */}

<div className='flex flex-row justify-around gap-40'>

<div className=' left-mobiles relative w-96 h-auto'>
  <img  src="https://buenro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F20.29e37a71.jpg&w=1920&q=75" className=' left-mob1 absolute top-0 left-0 w-96 rounded-3xl border-white  rotate-12 border-solid  transform translate-y-[-50%]' alt="" />
  <img  src="./images/showcase/vr_mobile.png" className=' left-mob2 absolute top-0 left-0 w-96 rounded-3xl border-white  -rotate-12 border-solid  transform translate-y-[-50%]' alt="" />
</div>



<div className='opinion  text-white font-sf-bold flex flex-col justify-center items-center gap-4 md:gap-20'>
    <div className=' stand-out font-sf-bold leading-tight text-[#fefeff] text-center text-xl   md:text-[2.5vw]'>
        Users Generate An <span className='text-dialed-purple'>Opinion</span> About A Website In
    </div>
    <div className=' relative flex '>
        <div className=' stand-out text-2xl md:text-[4vw] horizon font-bold highlighted-text'>0.05</div>
  
  <div className='  my-5 tracking-wider   text-lg stand-out -bottom-3 left-full'>
        <div className='   left-full'>seconds</div>
  </div>
    </div>
    
</div>


<div className=' right-mobiles relative w-96 h-auto'>
  <img  src="https://buenro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F20.29e37a71.jpg&w=1920&q=75" className='right-mob1 absolute top-0 left-0 w-96 rounded-3xl border-white  -rotate-12 border-solid  transform translate-y-[-50%]' alt="" />
  <img  src="./images/showcase/soda_mobile.png" className='right-mob2 absolute top-0 left-0 w-96 rounded-3xl border-white  rotate-12 border-solid  transform translate-y-[-50%]' alt="" />
</div>







</div>


          
        </div>
  
      </>
  

  )
}

export default Page2
