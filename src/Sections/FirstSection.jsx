import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);

const FirstSection = () => {
  const headText = useRef();
  const mouseEl = useRef();
  const mouseText = useRef();

  useGSAP(() => {
    if (headText.current && mouseText.current && mouseEl.current) {
      // Initialize SplitText instances
      const split = new SplitText(headText.current, { type: 'words, chars' });
      const split2 = new SplitText(mouseText.current, { type: 'words, chars' });

      // Get the path length for the progress animation
      const path = document.querySelector('.progress');
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      // Define the GSAP timeline
      const tl = gsap.timeline();

      // Add animations to the timeline
      tl.from(split.chars, {
        duration: 1,
        opacity: 0,
        stagger: 0.03,
        ease: 'power3.out',
      })
      .from(split2.chars, {
        rotationX: 70,
        opacity: 0,
        yPercent: 100,
        stagger: 0.03,
        ease: 'power3.out',
      }, "-=0.5") // Start this animation 0.5 seconds before the previous one ends
      .from(mouseEl.current, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power3.out',
      }, "-=0.5"); // Start this animation 0.5 seconds before the previous one ends

      // Update ScrollTrigger setup for headText
      tl.fromTo(headText.current, {
        opacity: 1,
        filter: 'blur(0px)',
      }, {
        duration: 0.25,
        opacity: 0,
        filter: 'blur(10px)',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: headText.current,
          start: 'top 35%',  // Start the animation when the top of the headText element hits the top of the viewport
          end: '+=45%',     // End the animation 45% of the viewport height after the start
          scrub: true,      // Animate in sync with the scroll position
        },
      });

      // Update ScrollTrigger setup for mouseText
      tl.fromTo(mouseText.current, {
        opacity: 1,
        filter: 'blur(0px)',
      }, {
        duration: 0.25,
        opacity: 0,
        filter: 'blur(10px)',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: headText.current,
          start: 'top 35%',  // Start the animation when the top of the headText element hits the top of the viewport
          end: '+=45%',     // End the animation 45% of the viewport height after the start
          scrub: true,      // Animate in sync with the scroll position
        },
      });

      // Add the ScrollTrigger animation for the progress bar
      tl.to(".progress", {
        strokeDashoffset: 0,
        display: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",  // Start animation when the top of the body reaches the top of the viewport
          endTrigger: ".mouse-end",
          end: "top bottom",  // End animation when the top of .mouse-end element reaches the bottom of the viewport
          scrub: true,       // Sync animation with the scroll position
          onEnterBack: () => {
            gsap.to(mouseEl.current, { opacity: 1, duration: 0.4 });  // Show the .progress element if scrolled back
          },
          onLeave: () => {
            gsap.to(mouseEl.current, { opacity: 0, duration: 0.4 });  // Hide the .progress element when scrolled beyond the end
          },
        }
      });

      // Clean up SplitText instances
      return () => {
        split.revert();
        split2.revert();
      };
    }
  }, []);

  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center flex-col font-sf-pro bg-[#040316]'>
        <h1 ref={headText} className='text-gray-200 text-3xl md:text-6xl text-center md:mx-32'>
          Okay, you’re intrigued – but how do these features actually <span className='text-[#009eb7] '>Boost</span> your digital conversions?
        </h1>




        {/* Mouse Scroll */}
        <div className='absolute gap-10 flex flex-col justify-center items-center bottom-28 left-1/2 translate-x-[-50%]'>
          <div ref={mouseText} className='text-gray-200'>Scroll Down To Find Out</div>
        </div>

        <div ref={mouseEl} className='fixed bottom-12 z-20'>
          <svg className="mouse" width="24" height="48" viewBox="0 0 24 48">
            <rect x="1" y="1" width="22" height="46" rx="12" ry="12" stroke="#888" strokeWidth="2" fill="none" />
            <circle className="scroll" cx="12" cy="14" r="3" fill="#888" />
            <rect className="progress" x="1" y="1" width="22" height="46" rx="12" ry="12" stroke="#009eb7" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
