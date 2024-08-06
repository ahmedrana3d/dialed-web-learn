import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { useEffect, useRef } from 'react'
import createGlobe from 'cobe';



gsap.registerPlugin(ScrollTrigger , SplitText);

const FiveSection = () => {
  const buttonRef = useRef();
  const headText = useRef()
  const canvasRef = useRef();

  useGSAP(() => {
    if (buttonRef.current ) {
      gsap.fromTo(buttonRef.current, 
        {
          scale: 0,
          rotationX: 180,
          rotationY: 180,
          z: 500,
          opacity: 0
        }, 
        {
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          z: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
            // markers: true,
          }
        }
      );
      







      animateText(".footer-head")




    }







    
  }, []);
  
  function animateText(textSelector) {
  
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
        yPercent: 15,
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
  
  animateText(".split");
  

  // useEffect(() => {
  //   let phi = 0;
  //   let width = 0;
  //   const onResize = () => canvasRef.current && (width = window.innerWidth * 2)
  //   window.addEventListener('resize', onResize)
  //   onResize()
  //   const globe = createGlobe(canvasRef.current, {
  //     devicePixelRatio: 2,
  //     width: width,
  //     height: window.innerHeight * 1.6,
  //     phi: 0,
  //     theta: 0,
  //     dark: 1,
  //     diffuse: 1.2,
  //     mapSamples: 16000,
  //     mapBrightness: 6,
  //     baseColor: [0.3, 0.3, 0.3],
  //     markerColor: [0.1, 0.8, 1],
  //     glowColor: [1, 1, 1],
  //     markers: [
  //       // longitude latitude
  //       { location: [46.2044, 6.1432], size: 0.07 },
  //       { location: [41.8967, 12.4822], size: 0.07 },
  //       { location: [13.7563, 100.5018], size: 0.07 },
  //       { location: [32.0853, 34.7818], size: 0.07 },
  //       { location: [40.4167, 3.7033], size: 0.07 },
       
  //     ],
  //     onRender: (state) => {
  //       // Called on every animation frame.
  //       // `state` will be an empty object, return updated params.
  //       state.phi = phi;
  //       phi += 0.004;
  //     }
  //   });

  //   return () => { 
  //     globe.destroy();
  //     window.removeEventListener('resize', onResize);
  //   };
  // }, []);

  return (
    <div className="content z-30 bg-transparent">


<div className=' flex justify-center items-center flex-col'>

<div className=' text-[7vw] md:text-[5vw] font-sf-bold  leading-tight text-[#fefeff]  text-center footer-head'>Have an idea in mind for <p> 
your business?</p> </div>

<div ref={buttonRef} className=" relative  md:mb-96 z-40 group">
  <div
    className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-transparent z-10"
    >


    <div
      className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black"
      >
      <button
        name="text"
        className="input font-semibold text-lg h-full opacity-90 w-full px-10 py-3 rounded-xl bg-black"
        >
        Let's Get In Touch 
      </button>
    </div>
    <div
      className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"
      ></div>
  </div>
</div>

      </div>

    {/* <canvas
        ref={canvasRef}
        className='w-full h-[80vh]  absolute bottom-0 -z-10 bg-transparent'
      /> */}

    </div>
  )
}

export default FiveSection
