import React, { useRef, useState, useEffect } from 'react';
import ReactOdometer from 'react-odometerjs';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Page3 = () => {

    const meterContainer = useRef(null);
    const parent = useRef(null);

    useEffect(() => {
        if ( meterContainer.current) {
            // GSAP Timeline Configuration
            const tl = gsap.timeline({
                ease: "power0",
                scrollTrigger: {
                    trigger: ".parent-web-stats",
                    start: "center center",
                    end: `+=${2 * window.innerHeight}`,
                    scrub: true,
                    pin: true,
                }
            });

            // Animate .number-stats from x: 130% to x: -130%
            tl.fromTo(".number-stats", 
                { x: "130%" },
                { x: "-120%", duration: 1 }
                ,"<"
            );

            // Animate .odo-meter and .make-your opacity in parallel to the .number-stats animation
            tl.to(".odo-meter", {
                opacity: 0,
                duration: 0.1,
                ease: "none"
            }, "-=0.7"); // Start the opacity change 0.5 seconds before the end of the number-stats animation

            tl.to(".make-your", {
                opacity: 1,
                duration: 0.1,
                ease: "none"
            }, "-=0.7"); // Start the opacity change 0.5 seconds before the end of the number-stats animation


            // Update the odometer value based on ScrollTrigger progress
            ScrollTrigger.create({
                trigger: meterContainer.current,
                start: "top bottom",
                end: `+=${2.8 * window.innerHeight}`,
            });

        
  const handleResize = () => {
    ScrollTrigger.refresh();
  };

  window.addEventListener('resize', handleResize);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
    tl.kill();
  };

        }
    }, []);

    return (
        <div ref={parent} className='z-10 relative w-screen h-screen parent-web-stats'>
            <div className='trigger1 absolute h-16 w-16 z-30 bottom-0 top-1/2'></div>
            <div className='h-[100vh] w-full flex justify-center items-center flex-col'>
                <div className='trigger absolute h-16 w-16 z-30 top-1/2'></div>

                {/* Banner */}
                <div className='number-stats w-screen z-20 h-screen flex justify-center items-center bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <img className='!w-[150vw] max-w-[140vw] !h-[150vh]' src="./images/number.svg" alt="" />
                </div>

                {/* Meter */}
                <div ref={meterContainer} className='flex w-screen h-screen flex-col gap-7 justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='odo-meter flex justify-center items-center flex-col'>
                    <div className=" absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stand-out font-sf-bold leading-tight text-[#fefeff] text-center text-[7vw] md:text-[4vw]">
                        Approximately 252000 <p>new websites are created</p> every day
                    </div>
                    </div>

                    {/* Makes Your Standout Text */}
                    <div className="make-your opacity-0 absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stand-out font-sf-bold leading-tight text-[#fefeff] text-center text-[7vw] md:text-[5vw]">
                        How do you make yours <p>stand out?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
