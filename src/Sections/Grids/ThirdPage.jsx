import gsap, { ScrollTrigger, SplitText, TextPlugin } from 'gsap/all';
import React, { useEffect, useRef } from 'react';
// import { Curtains } from 'react-curtains';
// import SimplePlane from '../../Components/Models/SimplePlane';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const ThirdPage = () => {
  const paraRef = useRef(null);
  const headText1Ref = useRef(null);
  const headText2Ref = useRef(null);
  const svgPath = useRef(null);

  useEffect(() => {
    const splitPara = new SplitText(paraRef.current, { type: "words, chars" });
    const splitHead1 = new SplitText(headText1Ref.current, { type: "words" });
    const splitHead2 = new SplitText(headText2Ref.current, { type: "words" });

    gsap.fromTo(
      splitPara.words,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.01,
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 99%",
          end: "top 99%",
          toggleActions: "play none reset none",
        },
      }
    );

    gsap.fromTo(
      splitHead1.words,
      {
        y: 250,
      },
      {
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: headText1Ref.current,
          start: "top 99%",
          end: "top 99%",
          toggleActions: "play none reset none",
        },
      }
    );

    gsap.fromTo(
      splitHead2.words,
      {
        y: -250,
      },
      {
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: {
          each: 0.3,
          from: 'end',
        },
        scrollTrigger: {
          trigger: headText2Ref.current,
          start: "top 99%",
          end: "top 99%",
          toggleActions: "play none reset none",
        },
      }
    );

    const path = svgPath.current;
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    gsap.fromTo(
      path,
      { strokeDashoffset: pathLength },
      {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: path,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );



    gsap.to(headText1Ref.current, {
      x: "18%",
      scrollTrigger: {
        trigger: headText1Ref.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });

    return () => {
      splitPara.revert();
      splitHead1.revert();
      splitHead2.revert();
    };
  }, []);

  return (
    <div className='w-screen h-auto bg-black flex flex-col items-center gap-12 md:gap-0 md:items-start '>
      <svg
        className='absolute w-screen h-[150vw] left-0'
        width="100%"
        height="100%"
        viewBox="0 0 1000 1500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          ref={svgPath}
          d="M-13 17.5C-46.2521 -28.3137 475.634 302.292 320 455C233.7 531.813 122.952 458.201 166.5 344.5C193.788 273.253 330.649 117.107 510.5 393C547.281 449.422 538.5 504.5 609.5 476.5C680.5 448.5 727.243 671 774.5 671C935.994 672.176 1039.92 724.796 1072.5 781"
          stroke="url(#paint0_radial_79_8)"
          strokeLinecap="round"
          strokeWidth="14"
          strokeLinejoin="round"
        />
        <defs>
          <radialGradient id="paint0_radial_79_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(524.199 337.527) rotate(90) scale(333.473 333.473)">
            <stop stop-color="#323232" />
            <stop offset="0.0001" stop-color="#282828" />
            <stop offset="1" stop-color="#666666" />
          </radialGradient>
        </defs>
      </svg>

      <div className='w-full  '>
        <div className='overflow-hidden w-full'>
          <div ref={headText1Ref} className='text-[8vw] font-sf-bold text-gray-50 tracking-tight leading-tight pl-12'>Great Experiences</div>
        </div>
        <div className='overflow-hidden'>
          <div ref={headText2Ref} className='text-[8vw] font-sf-bold text-gray-50 tracking-tight leading-tight pl-12'>Build Loyalty</div>
        </div>
      </div>

      <div className='w-full text-left mt-8 flex justify-center md:justify-end'>
        <div ref={paraRef} className=' w-5/6 md:w-[50vw] text-[clamp(1rem,1.5vw,3rem)] leading-[1.5] mr-8 font-inter text-white'>
          A <span className='text-red-400'>negative experience</span> on a website will deter 88% of online consumers from revisiting, and 79% of consumers who encounter performance issues are less likely to buy from that site again, highlighting the critical importance of <span  className='text-emerald-400'>user satisfaction</span> for maintaining <span className='text-dialed-purple'>customer loyalty</span> and sales.
        </div>
      </div>


<div className=' z-10 w-full flex justify-center md:justify-start md:pl-12'>



<video src="./videos/video.mp4" 
autoPlay
muted
playsinline
loop
webkit-playsinline
className=' w-5/6 md:w-1/3 rounded-3xl'></video>

</div>


    </div>
  );
};

export default ThirdPage;
