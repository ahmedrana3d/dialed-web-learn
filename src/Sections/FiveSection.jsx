import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react'



gsap.registerPlugin(ScrollTrigger , SplitText);

const FiveSection = () => {
  const buttonRef = useRef();
  const headText = useRef()

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
      



      gsap.fromTo(
        ['.rail_gradient.-core', '.rail_gradient.-pro'], 
        {
          transform: (index) => index === 0 ? 'translate(-20vw, calc(-2.3vw + 100vh))' : 'translate(20vw, calc(-2.3vw + 100vh))',
          opacity: 0.6
        }, 
        {
          transform: (index) => index === 0 ? 'translate(-20vw, 0)' : 'translate(20vw, 0)',
          opacity: 0.6,
          duration: 3,
          ease: 'cubic-bezier(.04,1.15,0.4,.99)',
          scrollTrigger: {
            trigger: '.rail_container',
            start: "top bottom",
            end: "top 80%",
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
  



  return (
    <div className="content z-30 bg-black">


<div className=' flex justify-center items-center flex-col'>

<div className=' text-[7vw] md:text-[5vw] font-sf-bold  leading-tight text-[#fefeff]  text-center footer-head'>Have an idea in mind for <p> 
your business?</p> </div>

<div ref={buttonRef} className=" relative  md:mb-96 z-40 group">
  <div
    className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-transparent z-10"
    >
    <div
      className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"
      ></div>

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

    <div className="rail mb-5">
      <div className="screen-reader-text">DIALEDWEB</div>




      <div className="rail_container z-30">

 

        
        <div className="rail_clip z-40">
        <div className="rail_color z-40">
          <div className="rail_gradients z-40">
            <img
            src="images/orange_blur.png"
            width="50"
            height="50"
            alt="Core Gradient"
            className="rail_gradient -core hover:opacity-0"
            />
            <img
            src="images/purple_blur.png"
            width="50"
            height="50"
            alt="Pro Gradient"
            className="rail_gradient -pro hover:opacity-0"
            />
          </div>
        </div>
        </div>
        <svg
        width="5482"
        height="500"
        viewBox="0 0 5482 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rail_sizing"
        ></svg>
<svg className="rail_mask">
		<clipPath id="contentTitle" clipPathUnits="objectBoundingBox">
		  <path
			d="M0.001,1 V0.014 H0.025 C0.034,0.014,0.041,0.058,0.046,0.143 C0.051,0.23,0.053,0.354,0.053,0.514 C0.053,0.675,0.051,0.798,0.046,0.884 C0.041,0.971,0.034,1,0.025,1 H0.001 M0.014,0.831 H0.023 C0.035,0.831,0.04,0.725,0.04,0.514 C0.04,0.413,0.039,0.334,0.036,0.279 C0.033,0.225,0.029,0.197,0.023,0.197 H0.014 V0.831 M0.075,0.014 V1 H0.062 V0.014 H0.075 M0.115,0.013 L0.138,1 H0.124 L0.12,0.79 H0.098 L0.093,1 H0.08 L0.102,0.013 H0.115 M0.116,0.63 L0.109,0.258 L0.101,0.63 H0.116 M0.184,0.825 V1 H0.143 V0.014 H0.155 V0.825 H0.184 M0.235,0.014 V0.194 H0.204 V0.411 H0.233 V0.584 H0.204 V0.829 H0.236 V1 H0.191 V0.014 H0.235 M0.245,1 V0.014 H0.268 C0.277,0.014,0.284,0.058,0.289,0.143 C0.294,0.23,0.297,0.354,0.297,0.514 C0.297,0.675,0.294,0.798,0.289,0.884 C0.284,0.971,0.277,1,0.268,1 H0.245 M0.257,0.831 H0.267 C0.278,0.831,0.284,0.725,0.284,0.514 C0.284,0.413,0.282,0.334,0.279,0.279 C0.277,0.225,0.272,0.197,0.267,0.197 H0.257 V0.831 M0.3,0.014 H0.313 L0.322,0.693 L0.333,0.014 H0.345 L0.355,0.702 L0.364,0.014 H0.377 L0.361,1 H0.348 L0.338,0.331 L0.329,1 H0.316 L0.3,0.014 M0.427,0.014 V0.194 H0.396 V0.411 H0.424 V0.584 H0.396 V0.829 H0.427 V1 H0.383 V0.014 H0.427 M0.436,0.014 H0.464 C0.469,0.014,0.474,0.035,0.477,0.077 C0.481,0.12,0.483,0.181,0.483,0.265 C0.483,0.313,0.482,0.354,0.48,0.39 C0.479,0.427,0.477,0.453,0.475,0.472 C0.482,0.507,0.485,0.588,0.485,0.716 C0.485,0.811,0.483,0.884,0.48,0.936 C0.476,0.988,0.471,1,0.465,1 H0.436 V0.014 M0.449,0.184 V0.42 H0.46 C0.467,0.42,0.47,0.38,0.47,0.303 C0.47,0.257,0.469,0.226,0.467,0.209 C0.466,0.192,0.463,0.184,0.46,0.184 H0.449 M0.449,0.568 L0.449,0.84 H0.462 C0.465,0.84,0.468,0.831,0.469,0.812 C0.471,0.793,0.472,0.758,0.472,0.704 C0.472,0.65,0.471,0.613,0.469,0.595 C0.467,0.577,0.464,0.568,0.461,0.568 H0.449 M0.517,1 V0.014 H0.541 C0.55,0.014,0.557,0.058,0.562,0.143 C0.567,0.23,0.569,0.354,0.569,0.514 C0.569,0.675,0.567,0.798,0.562,0.884 C0.557,0.971,0.55,1,0.541,1 H0.517 M0.53,0.831 H0.539 C0.55,0.831,0.556,0.725,0.556,0.514 C0.556,0.413,0.555,0.334,0.552,0.279 C0.549,0.225,0.545,0.197,0.539,0.197 H0.53 V0.831 M0.591,0.014 V1 H0.578 V0.014 H0.591 M0.631,0.013 L0.654,1 H0.64 L0.635,0.79 H0.614 L0.609,1 H0.596 L0.618,0.013 H0.631 M0.632,0.63 L0.625,0.258 L0.617,0.63 H0.632 M0.7,0.825 V1 H0.658 V0.014 H0.671 V0.825 H0.7 M0.751,0.014 V0.194 H0.72 V0.411 H0.748 V0.584 H0.72 V0.829 H0.752 V1 H0.707 V0.014 H0.751 M0.76,1 V0.014 H0.784 C0.793,0.014,0.8,0.058,0.805,0.143 C0.81,0.23,0.813,0.354,0.813,0.514 C0.813,0.675,0.81,0.798,0.805,0.884 C0.8,0.971,0.793,1,0.784,1 H0.76 M0.773,0.831 H0.783 C0.794,0.831,0.8,0.725,0.8,0.514 C0.8,0.413,0.798,0.334,0.795,0.279 C0.793,0.225,0.788,0.197,0.783,0.197 H0.773 V0.831 M0.816,0.014 H0.829 L0.838,0.693 L0.848,0.014 H0.861 L0.871,0.702 L0.88,0.014 H0.893 L0.877,1 H0.864 L0.854,0.331 L0.844,1 H0.831 L0.816,0.014 M0.943,0.014 V0.194 H0.912 V0.411 H0.94 V0.584 H0.912 V0.829 H0.943 V1 H0.899 V0.014 H0.943 M0.952,0.014 H0.98 C0.985,0.014,0.99,0.035,0.993,0.077 C0.997,0.12,0.998,0.181,0.998,0.265 C0.998,0.313,0.998,0.354,0.996,0.39 C0.995,0.427,0.993,0.453,0.991,0.472 C0.998,0.507,1,0.588,1,0.716 C1,0.811,0.999,0.884,0.996,0.936 C0.992,0.988,0.987,1,0.981,1 H0.952 V0.014 M0.965,0.184 V0.42 H0.976 C0.983,0.42,0.986,0.38,0.986,0.303 C0.986,0.257,0.985,0.226,0.983,0.209 C0.982,0.192,0.979,0.184,0.976,0.184 H0.965 M0.965,0.568 L0.965,0.84 H0.977 C0.981,0.84,0.983,0.831,0.985,0.812 C0.987,0.793,0.988,0.758,0.988,0.704 C0.988,0.65,0.987,0.613,0.985,0.595 C0.983,0.577,0.98,0.568,0.977,0.568 H0.965"
		  ></path>
		</clipPath>
	  </svg>

      </div>
    </div>

    </div>
  )
}

export default FiveSection