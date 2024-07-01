import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  const headText = useRef();
  const videoEl = useRef();

  useGSAP(() => {
    if (headText.current) {
      const tl = gsap.timeline();
      const split = new SplitText(headText.current, { type: 'words, chars' });

      tl.fromTo(split.chars, { 
        'will-change': 'opacity', 
        opacity: 0,
        filter: 'blur(20px)'
    },
    {
        duration: 0.25,
        ease: 'power1.inOut',
        opacity: 1,
        filter: 'blur(0px)',
        stagger: { each: 0.05, from: 'random'},
        scrollTrigger: {
            trigger: headText.current,
            start: 'center+=20% bottom',
            end: '+=50%',
            scrub: true,
          
        },
    });

    tl.to(
        split.chars, 
  
        {
          duration: 0.25,
          ease: 'power1.inOut',
          opacity: 0,
          filter: 'blur(20px)',
          stagger: { each: 0.05, from: 'random'},
          scrollTrigger: {
            trigger: headText.current,
            start: '+=60%',
            end: '+=70%',
            scrub: true,
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
      

      



      tl.to("#top-left",
        {
        duration: 0.25,
        ease: 'power1.inOut',
        scaleY: 0,
        scrollTrigger: {
          trigger: videoEl.current,
          start: '+=200%',
          end: '+=200%',
          scrub: true,
         
        },
      })
      .to("#top-right", {
        duration: 0.25,
        ease: 'power1.inOut',
        scaleY: 0,
        scrollTrigger: {
          trigger: videoEl.current,
          start: '+=200%',
          end: '+=200%',
          scrub: true,
        },
      })
      .to("#bottom-left", {
        duration: 0.25,
        ease: 'power1.inOut',
        scaleY: 0,
        scrollTrigger: {
          trigger: videoEl.current,
          start: '+=200%',
          end: '+=200%',
          scrub: true,
        },
      })
      .to("#bottom-right", {
        
        duration: 0.25,
        ease: 'power1.inOut',
        scaleY: 0,
        scrollTrigger: {
          trigger: videoEl.current,
          start: '+=200%',
            end: '+=200%',
          scrub: true,
        },
      })






      return () => {
        split.revert(); // Clean up SplitText instance
      };
    }
  }, []);

  return (

<div className='h-[400vh] relative w-screen bg-[#040316]'>
  <div className='sticky top-0 left-0  h-screen  w-full overflow-hidden flex justify-start items-center flex-col font-capraia'>
    <h1 ref={headText} className='text-[#AAA3FF] text-6xl md:text-9xl text-center md:mx-32'>
      Let's uncover that
    </h1>



    <div ref={videoEl} className='absolute top-0 left-0 w-full h-full overflow-hidden '>
      <div  id='video-el-logo' className='absolute w-full h-full z-20 flex justify-center items-center'>
        <img src="./images/logo/keycap.png" alt="" />
      </div>
      <div id='top-left' className='absolute top-0 left-0 w-1/2 h-1/2 bg-[#040316] z-10 scale-[1.1] origin-top translate-x-[-5%] translate-y-[-5%]'></div>
      <div id='top-right' className='absolute top-0 right-0 w-1/2 h-1/2 bg-[#040316] z-10 scale-[1.1] origin-top translate-x-[5%] translate-y-[-5%]'></div>
      <div id='bottom-left' className='absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#040316] z-10 scale-[1.1] origin-bottom translate-x-[-5%] translate-y-[5%]'></div>
      <div id='bottom-right' className='absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#040316] z-10 scale-[1.1] origin-bottom translate-x-[5%] translate-y-[5%]'></div>
      <video
        src="./videos/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover'
      />
    </div>






  
  </div>


<div className='mouse-end h-10 w-100  absolute bottom-3'>

</div>


</div>

  );
};

export default SecondSection;
