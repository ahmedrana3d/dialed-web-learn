import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ThirdSection = () => {
  const textRef = useRef()

  useGSAP(() => {
    // Create a new SplitText instance to split the text into characters
    const split = new SplitText(textRef.current, { type: 'words, chars' });

    // Define the GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top bottom',  // Start the animation when the top of the textRef element enters the bottom of the viewport
        end: 'bottom center',   // End the animation when the bottom of the textRef element exits the top of the viewport
        scrub: true,         // Animate in sync with the scroll position
        // markers: true,       // Display markers for debugging
      },
    })

    // Add animations to the timeline
    tl.fromTo(
      split.chars,
      {
        opacity: 0,  // Start with the text invisible
        y: 30,       // Start the text from below its final position
      
      },
      {
        opacity: 1,  // End with the text fully visible
        y: 0,        // Move text to its final position
    
        stagger: 0.03,  // Stagger animation by 0.03 seconds for each character
        ease: 'power3.out',  // Easing function
        duration: 1,    // Duration of the animation
      }
    )
  }, [])

  return (
    <div
      className='w-screen relative h-[70vh] flex justify-center bg-black items-center'
      // Optional: Add background style or color
      // style={{
      //   backgroundImage: "url(./images/grain-bg.webp)",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >


{/* <div className=' absolute -z-10'>
<svg version="1.1"
   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
   width="516.3px" height="190px" viewBox="0 0 516.3 190" 
   xml:space="preserve">
  <path id="template" d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
  <path id="path" d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
</svg>
      </div> */}


      <div
        ref={textRef}
        className='md:w-1/2 text-gray-400 text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-sf-pro font-semibold leading-tight'
      >

      
DialedWeb is an IT service company that uses <span className=' text-dialed-purple'>cutting-edge technology</span>   to provide innovative solutions with a <span className=' text-teal-300'>global reach</span> . Our <span className=' text-orange-300 '>client-centric approach</span>   ensures we meet the unique needs of each client, delivering exceptional service and support.
      </div>
    </div>
  )
}

export default ThirdSection
