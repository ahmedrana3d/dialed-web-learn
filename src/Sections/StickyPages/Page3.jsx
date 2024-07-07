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
            const split2 = new SplitText(text2.current, { type: 'words, chars' });
    
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
    
            tl.to(meterContainer.current, {
                y: -300,
                opacity: 0,
                delay: 0.5, // Add a delay of 0.5 seconds here
            }, ">");
    
            tl.fromTo(split2.chars, {
                'will-change': 'transform',
                transformOrigin: '50% 100%',
                scaleY: 0,
                delay: 0.5, // Add a delay of 0.5 seconds here
            }, {
                ease: 'power3.in',
                opacity: 1,
                scaleY: 1,
                stagger: 0.05
            }, ">");
    
            tl.to(text2.current, {
                position: 'fixed', // Ensure the text is fixed
                left: '50%', // Center the text horizontally
                top: '50%', // Center the text vertically
                transform: 'translate(-50%, -50%)', // Adjust for centering
                z: 400,
                y: 0,
                scale: 50, // Increase scale to cover the whole screen
                color: '#040316', // Change to your desired color
                backgroundColor: '#040316', // Change to your desired background color
                duration: 2,
                ease: 'power2.inOut',
                delay: 0.5, // Add a delay of 0.5 seconds here
            });
        }
    }, []);
    


    return (
        <div className='z-10 relative w-screen h-[350vh]'>
            <div className='trigger1 absolute h-16 w-16 z-30 bottom-0'></div>

            <div className='h-screen flex justify-center items-center flex-col sticky top-0 bg-black'>
                <div className='trigger absolute h-16 w-16 z-30 top-2/3'></div>

                <div ref={meterContainer} className='flex flex-col gap-7 justify-center items-center'>
                    <ReactOdometer className=' text-6xl md:text-7xl lg:text-9xl ' value={value} format="d"></ReactOdometer>
                    <div ref={text1} className='tracking-[0.3em] text-xl lg:text-6xl text-center text-[#8BF5A5] font-inter font-bold'>
                        Websites are created <span className='highlighted-text'>Every Day</span>
                    </div>
                </div>

                <div ref={text2} className='text-center tracking-widest text-xl lg:text-6xl text-[#8BF5A5] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-inter font-bold'>
                    How do you make yours stand out?
                </div>
            </div>
        </div>
    );
};

export default Page3;
