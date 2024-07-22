import React, { useEffect, useRef } from 'react'
import Page1 from './StickyPages/Page1'
import Page2 from './StickyPages/Page2'
import Page3 from './StickyPages/Page3'
import Page4 from './StickyPages/Page4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const FourthSection = () => {
  // const svgPath = useRef(null);

  // useEffect(() => {
  //   const path = svgPath.current;
  //   const pathLength = path.getTotalLength();

  //   // Set up the initial dasharray and dashoffset
  //   path.style.strokeDasharray = pathLength;
  //   path.style.strokeDashoffset = pathLength;

  //   gsap.fromTo(path, 
  //     { strokeDashoffset: pathLength },
  //     { strokeDashoffset: 0,
  //       scrollTrigger: {
  //         trigger: path,
  //         start: "top 10%",
  //         end: "bottom top",
  //         scrub: true,
  //         // markers : true,
  //       }
  //     }
  //   );
  // }, []);

  return (
    <div className='relative bg-black'>
      {/* <Page1 /> */}
      <div>
  <svg className='absolute w-screen h-[150vw] left-0' width="100%" height="100%" viewBox="0 0 1000 1500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <path ref={svgPath} d="M-24 14C285.5 184.236 6.36279 290.269 144.723 435.802C239.904 535.918 560.015 556.406 609.308 424.839C658.601 293.272 498.127 225.66 406.798 273.17C136.995 390.296 -113.444 1120.7 265.5 1027.69C522.961 964.492 961.045 952.071 960.591 1080.5C942.343 1402.77 1249.39 740.968 1585.5 635" stroke="#CD3C2F" strokeLinecap="round" strokeWidth="14" strokeLinejoin="round"/>
  </svg>
  {/* <Page2 /> */}
  <Page3 />
</div>

      <Page4 />
    </div>
  )
}

export default FourthSection;
