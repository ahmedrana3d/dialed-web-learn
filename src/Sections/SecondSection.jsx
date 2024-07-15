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

      
      
      

    // animateText(".split")

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


  function animateText(textSelector) {
    gsap.registerPlugin(SplitText, ScrollTrigger);
  
    document.querySelectorAll(textSelector).forEach((element) => {
      gsap.set(element, {
        transformPerspective: 500,
        transformOrigin: "center bottom",
        rotationX: 70
      });
  
      let mySplitText = new SplitText(element, { type: "chars" });
      let chars = mySplitText.chars;
  
      gsap.fromTo(
        element,
        {
          rotationX: 70,
          opacity: 0
        },
        {
          rotationX: 0,
          opacity: 1,
          duration: 1.5,
          ease: "back.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reset"
          }
        }
      );
  
      gsap.from(chars, {
        yPercent: 100,
        stagger: 0.04,
        opacity: 0,
        ease: "power1.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reset"
        }
      });
  
      gsap.fromTo(
        element,
        {
          opacity: 0
        },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
            toggleActions: "play reverse play reverse"
          }
        }
      );
  
      gsap.fromTo(
        element,
        {
          opacity: 1
        },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 20%",
            end: "top 5%",
            scrub: true,
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });
  }

  return (

<div className='h-[400vh] relative w-screen bg-black'>
  <div className='sticky top-0 left-0  h-screen  w-full overflow-hidden flex justify-start items-center flex-col font-inter font-bold'>
    <h1 ref={headText} className='  split  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-gray-200 font-sf-bold  text-6xl md:text-9xl text-center '>
      <span className=' opacity-0 hidden'>L</span>
      Let's uncover that
      <span className=' opacity-0 hidden'>t</span>
    </h1>



    <div ref={videoEl} className='absolute top-0 left-0 w-full h-full overflow-hidden '>
      <div  id='video-el-logo' className='absolute w-full h-full z-20 flex justify-center items-center'>
        <img src="./images/logo/keycap.png" alt="" />
      </div>
      <div id='top-left' className='absolute top-0 left-0 w-1/2 h-1/2  bg-black z-10 scale-[1.1] origin-top translate-x-[-5%] translate-y-[-5%]'></div>
      <div id='top-right' className='absolute top-0 right-0 w-1/2 h-1/2  bg-black z-10 scale-[1.1] origin-top translate-x-[5%] translate-y-[-5%]'></div>
      <div id='bottom-left' className='absolute bottom-0 left-0 w-1/2 h-1/2  bg-black z-10 scale-[1.1] origin-bottom translate-x-[-5%] translate-y-[5%]'></div>
      <div id='bottom-right' className='absolute bottom-0 right-0 w-1/2 h-1/2  bg-black z-10 scale-[1.1] origin-bottom translate-x-[5%] translate-y-[5%]'></div>
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
