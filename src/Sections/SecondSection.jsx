import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  const headText = useRef();
  const videoEl = useRef();

  useGSAP(() => {
    if (headText.current) {
      const tl = gsap.timeline();
      const split = new SplitText(headText.current, { type: 'words, chars' });
// Initial animation for the text appearance
// Initial animation for the text appearance
tl.fromTo(
  split.chars,
  { 
    'will-change': 'opacity', 
    opacity: 0,
    filter: 'blur(20px)',
    scale: 0.4, // Start smaller
    rotation: -45, // Start with a slight rotation
    color: '#AAA3FF', // Start with a specific color
  },
  {
    duration: 0.5, // Duration for smoother effect
    ease: 'power1.inOut',
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1, // Scale up to normal size
    rotation: 0, // Rotate to normal
    color: '#ffffff', // Change color
    stagger: { each: 0.05, from: "start" },
    delay: 0.1, // Adding slight delay
    scrollTrigger: {
      trigger: headText.current,
      start: 'top bottom', // Start when the top of the trigger element reaches the center of the viewport
      end: 'bottom center', // End when the bottom of the trigger element reaches the center of the viewport
      scrub: true,
      // markers : true
    },
  }
);

// Animation for the text disappearance
tl.to(
  split.chars,
  {
    duration: 0.5, // Duration for smoother effect
    ease: 'power1.inOut',
    opacity: 0,
    filter: 'blur(20px)',
    x: (index, target, targets) => index < targets.length / 2 ? '-100vw' : '100vw', // Move left or right based on position
    rotation: 45, // Rotate in the opposite direction
    stagger: { each: 0.1, from: "edges" }, // Stagger from the center to edges
    scrollTrigger: {
      trigger: headText.current,
      start: 'top 30%', // Start when the top of the trigger element reaches the center of the viewport
      end: 'bottom top', // End when the bottom of the trigger element reaches the center of the viewport
      scrub: true,
      // markers : true,
    },
  }
);


tl.fromTo(
  videoEl.current, 
{
scale : 0,
},
  {
    duration: 0.25,
    ease: 'power1.inOut',
scale : 1,  
    scrollTrigger: {
      trigger: videoEl.current,
      start: '+=60%',
      end: '+=70%',
      scrub: true,
      // markers: true,
    },
  }
)


.to("#video-el-logo", {
  duration: 0.25,
  ease: 'power1.inOut',
  opacity : 0,
  scrollTrigger: {
    trigger: videoEl.current,
    start: '+=40%',
    end: '+=40%',
    scrub: true,
 
  },
})


      
tl.fromTo('.mask', {
  r: 0,
}, {
  r: 1450,
  ease: 'power3.inOut',
   scrollTrigger: {
        trigger: videoEl.current,
        start: '+=60%',
        end: '+=100%',
        scrub: true,
      //  markers : true
      },
})

      



      return () => {
        split.revert(); // Clean up SplitText instance
      };
    }
  }, []);


  return (

<div className='h-[400vh] relative w-screen bg-black'>
  <div className='sticky top-0 left-0  h-screen  w-full overflow-hidden flex justify-start items-center flex-col font-inter font-bold'>
    <h1 ref={headText} className='  split  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-gray-200 font-sf-bold  text-[6vw] text-center '>
      <span className=' opacity-0 hidden'>L</span>
      Let's uncover that
      <span className=' opacity-0 hidden'>t</span>
    </h1>



    <div ref={videoEl} className='absolute top-0 left-0 z-30 bg-transparent w-screen h-screen overflow-hidden'>


  <div id='video-el-logo' className='absolute w-full opacity-1 h-full z-20 flex justify-center items-center'>
    <img src="./images/logo/keycap.png" alt="Logo" />
  </div>

  <svg className="content__img content__img--1 absolute top-0 left-0 w-screen h-screen object-cover" version="1.1" preserveAspectRatio='none' xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="displacementFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <mask id="circleMask">
        <circle cx="50%" cy="50%" r="30" data-value-final="820" fill="white" className="mask" style={{ filter: 'url(#displacementFilter)' }} />
      </mask>
    </defs>
  </svg>
  <video className="video-mask absolute top-0 left-0 w-screen h-screen object-cover" src="./videos/video.mp4" muted loop autoPlay />
</div>


  
  </div>


<div className='mouse-end h-10 w-100  absolute bottom-3'>

</div>


</div>

  );
};

export default SecondSection;
