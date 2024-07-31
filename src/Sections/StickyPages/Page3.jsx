import React, { useRef, useState, useEffect } from 'react';
import ReactOdometer from 'react-odometerjs';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Page3 = () => {
    const [value, setValue] = useState(100000);
    const text1 = useRef(null);
    const meterContainer = useRef(null);

    useEffect(() => {
        if (text1.current) {
            const split = new SplitText(text1.current, { type: 'words, chars' });

            const tl = gsap.timeline({
                ease: "power0",
                scrollTrigger: {
                    trigger: ".trigger",
                    start: "top bottom",
                    endTrigger: ".trigger1",
                    end: "top 90%",
                    scrub: 1,
                    // markers: true,
                    onUpdate: (self) => {
                        setValue(self.progress > 0 ? 252000 : 100000);
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

            return () => {
                split.revert();
                tl.kill();
            };
        }
    }, []);

    return (
        <div className='z-10 relative w-screen h-auto'>
            <div className='trigger1 absolute h-16 w-16 z-30 bottom-0 top-1/2'></div>
            <div className='h-[50vh] flex justify-center items-center flex-col'>
                <div className='trigger absolute h-16 w-16 z-30 top-1/3'></div>
                <div ref={meterContainer} className='flex flex-col gap-7 justify-center items-center'>
                    <ReactOdometer className='text-[10vw]' value={value} format="d" />
                    <div ref={text1} className='tracking-[0.05em] text-xl lg:text-6xl text-center text-gray-100 font-inter font-bold'>
                        Websites are created <span className='highlighted-text'>Every Day</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
