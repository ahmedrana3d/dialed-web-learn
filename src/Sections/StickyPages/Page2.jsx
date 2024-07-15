import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

    const text1 = useRef(null);
    const text2 = useRef(null);

    useGSAP(() => {
        if (text1.current) {
            const split = new SplitText(text1.current, { type: 'words, chars' });
            // const split2 = new SplitText(text2.current, { type: 'words, chars' });
    
  const words = split.chars



   words.forEach(word => gsap.set(word.parentNode, { perspective: 1000 })); 

   gsap.fromTo(words, {
       'will-change': 'opacity, transform', 
       z: () => gsap.utils.random(500,950),
       opacity: 0,
       xPercent: (pos) => gsap.utils.random(-100,100),
       yPercent: (pos) => gsap.utils.random(-10,10),
       rotationX: () => gsap.utils.random(-90,90)
   }, 
   {
       ease: 'expo',
       opacity: 1,
       rotationX: 0,
       rotationY: 0,
       xPercent: 0,
       yPercent: 0,
       z: 0,
       scrollTrigger: {
           trigger: text1.current,
           start: 'center center',
           end: '+=150%',
           scrub: true,
           pin: text1.parentNode,
       },
       stagger: {
           each: 0.006,
           from: 'random'
       }
   });

        
        }
    }, []);
    









  return (

    <>




    <div className="z-20 relative flex justify-center w-screen h-[200vh] bg-black">
    <div
      ref={text1}
      className="flex h-screen flex-col justify-center items-center gap-10 md:gap-20 sticky top-0"
      >
      <p className="text-gray-300 font-sf-bold text-xl sm:text-2xl md:text-4xl lg:text-7xl text-center px-2 sm:px-4 md:px-0">
        Users generate an <span className='text-cyan-400'>opinion</span> 💭 about a website 🌐 in
      </p>
      <div className="relative">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-9xl horizon text-[#8BF5A5]">
          0.05
          <span className="absolute right-0 tracking-widest bottom-0 text-sm sm:text-base md:text-lg lg:text-xl text-white">
            seconds
          </span>
        </h1>
      </div>
    </div>

    {/* <img src="./images/squiggle.svg" className=' absolute top-0 left-0 w-screen h-[200vh] z-50' alt="" /> */}

  </div>
  
      </>
  

  )
}

export default Page2
