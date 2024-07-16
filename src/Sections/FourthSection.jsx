import React, { useEffect, useRef } from 'react'
import Page1 from './StickyPages/Page1'
import Page2 from './StickyPages/Page2'
import Page3 from './StickyPages/Page3'
import Page4 from './StickyPages/Page4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const FourthSection = () => {
  const svgPath = useRef(null);

  useEffect(() => {
    const path = svgPath.current;
    const pathLength = path.getTotalLength();

    // Set up the initial dasharray and dashoffset
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    gsap.fromTo(path, 
      { strokeDashoffset: pathLength },
      { strokeDashoffset: 0,
        scrollTrigger: {
          trigger: path,
          start: "top 10%",
          end: "bottom top",
          scrub: true,
          // markers : true,
        }
      }
    );
  }, []);

  return (
    <div className='relative bg-black'>
      <Page1 />
      <div>
      <svg className='absolute  w-screen h-[200vw] left-0 object-contain' width="100%" height="100%" viewBox="0 0 1000 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ref={svgPath} d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852" stroke="#AAA3FF" strokeLinecap="round" strokeWidth="14" strokeLinejoin="round"/>
        </svg>
        <Page2 />
        <Page3 />
      <Page4 />
      </div>
    </div>
  )
}

export default FourthSection;
