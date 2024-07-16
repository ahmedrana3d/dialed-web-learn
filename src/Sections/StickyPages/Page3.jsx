import React, { useEffect, useRef, useState } from 'react';
import ReactOdometer from 'react-odometerjs';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
    const [value, setValue] = useState(100000);
    const text1 = useRef(null);
    const text2 = useRef(null);
    const meterContainer = useRef();
    const prevProgress = useRef(0);
    useGSAP(() => {
        if (text1.current) {
            const split = new SplitText(text1.current, { type: 'words, chars' });

            const tl = gsap.timeline({
                ease: "power0",
                scrollTrigger: {
                    trigger: ".trigger",
                    start: "top bottom",
                    endTrigger: ".trigger1",
                    end: "top bottom",
                    scrub: 1,
                    onUpdate: self => {
                        if (self.progress > 0) {
                            setValue(252000);
                        } else {
                            setValue("100000");
                        }
                    }
                }
            });

            tl.fromTo(split.chars, { 
                'will-change': 'opacity, transform', 
                opacity: 0, 
                xPercent: () => gsap.utils.random(-200, 200), 
                yPercent: () => gsap.utils.random(-150, 150) 
            }, {
                ease: 'power1.inOut',
                opacity: 1,
                xPercent: 0,
                yPercent: 0,
                stagger: { each: 0.05, grid: 'auto', from: 'random'}
            }, ">");

            // tl.to(meterContainer.current, {
            //     y: -300,
            //     opacity: 0,
            //     delay: 0.5,
            // }, ">");

            // tl.fromTo(split2.chars, {
            //     'will-change': 'transform',
            //     transformOrigin: '50% 100%',
            //     scaleY: 0,
            //     delay: 0.5,
            // }, {
            //     ease: 'power3.in',
            //     opacity: 1,
            //     scaleY: 1,
            //     stagger: 0.05
            // }, ">");

            // tl.to(text2.current, {
            //     position: 'fixed',
            //     left: '50%',
            //     top: '50%',
            //     transform: 'translate3d(-50%, -50%, 0)', // Use translate3d for GPU acceleration
            //     z: 400,
            //     y: 0,
            //     scale: 50,
            //     color: '#000000',
            //     backgroundColor: '#000000',
            //     duration: 2,
            //     ease: 'power2.inOut',
            //     delay: 0.5,
            //     backfaceVisibility: 'hidden', // Improve rendering
            //     '-webkit-font-smoothing': 'antialiased', // Ensure smooth text rendering
            //     'text-rendering': 'optimizeLegibility',
            // });
        }
    }, []);

    return (
        <div className='z-10 relative w-screen h-[100vh]'>
            <div className='trigger1 absolute h-16 w-16 z-30 bottom-0'></div>

            <div className='h-screen flex justify-center items-center flex-col   '>
                <div className='trigger absolute h-16 w-16 z-30 top-2/3'></div>

                <div ref={meterContainer} className='flex flex-col gap-7 justify-center items-center'>
                    <ReactOdometer className='  text-[10vw] ' value={value} format="d"></ReactOdometer>
                    <div ref={text1} className='tracking-[0.3em] text-xl lg:text-6xl text-center text-gray-100 font-inter font-bold'>
                        Websites are created <span className='highlighted-text'>Every Day</span>
                    </div>
                </div>

             
            </div>
        </div>
    );
};

export default Page3;
