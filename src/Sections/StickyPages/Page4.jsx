import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Page4 = () => {

const statRef = useRef()


useGSAP(() => {
  if (statRef.current) {
    // Initialize an object to keep track of triggered animations
    const animationsTriggered = {
      animation1: false,
      animation2: false,
      animation3: false,
      animation4: false,
      animation5: false,
    };

    const tl = gsap.timeline({
      ease: 'power0',
      scrollTrigger: {
        trigger: statRef.current,
        start: 'top 30%',
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          const scrollY = parseFloat(self.progress.toFixed(2));

          // Trigger animations when scrolling down
          if (scrollY >= 0.72 && !animationsTriggered.animation5) {
            console.log('Animation 5');
            highlightButton('brand-img');
            animationsTriggered.animation5 = true;
          } else if (scrollY >= 0.5 && !animationsTriggered.animation4) {
            console.log('Animation 4');
            highlightButton('customer-exp');
            animationsTriggered.animation4 = true;
          } else if (scrollY >= 0.31 && !animationsTriggered.animation3) {
            console.log('Animation 3');
            highlightButton('conversion-rate');
            animationsTriggered.animation3 = true;
          } else if (scrollY >= 0.19 && !animationsTriggered.animation2) {
            console.log('Animation 2');
            highlightButton('conversion-rate');
            animationsTriggered.animation2 = true;
          } else if (scrollY >= 0.1 && !animationsTriggered.animation1) {
            console.log('Animation 1');
            highlightButton('user-eng');
            animationsTriggered.animation1 = true;
          }

          // Reset animations when scrolling up
          if (scrollY < 0.1 && animationsTriggered.animation1) {
            console.log(animationsTriggered.animation1);
            reverseHighlightButton('user-eng');
            animationsTriggered.animation1 = false;
          } else if (scrollY < 0.19 && animationsTriggered.animation2) {
            console.log(animationsTriggered.animation2);
            reverseHighlightButton('conversion-rate');
            animationsTriggered.animation2 = false;
          } else if (scrollY < 0.31 && animationsTriggered.animation3) {
            console.log(animationsTriggered.animation3);
            reverseHighlightButton('conversion-rate');
            animationsTriggered.animation3 = false;
          } else if (scrollY < 0.50 && animationsTriggered.animation4) {
            console.log(animationsTriggered.animation4);
            reverseHighlightButton('customer-exp');
            animationsTriggered.animation4 = false;
          } else if (scrollY < 0.72 && animationsTriggered.animation5) {
            console.log(animationsTriggered.animation5);
            reverseHighlightButton('brand-img');
            animationsTriggered.animation5 = false;
          }
        },
      },
    });

    tl.fromTo(
      statRef.current,
      {
        translateY: '13%',
      },
      {
        translateY: '-82%',
      }
    );
    function highlightButton(buttonClass) {
      const buttons = document.querySelectorAll('.tes-button');
      buttons.forEach((button) => {
        if (button.classList.contains(buttonClass)) {
          gsap.to(button, { opacity: 1, fontWeight: 500 });
        } else {
          gsap.to(button, { opacity: 0.5, fontWeight: 400 });
        }
      });
    }

    function reverseHighlightButton(buttonClass) {
      const buttons = document.querySelectorAll('.tes-button');
      buttons.forEach((button) => {
        if (button.classList.contains(buttonClass)) {
          gsap.to(button, { opacity: 1, fontWeight: 500 });
        } else {
          gsap.to(button, { opacity: 0.5, fontWeight: 400 });
        }
      });
    }


  }
}, []);





// 17 // User Engagment
// -1 // User Engagment 0.1
// -17 // Conversion Rates 0.21
// -33.5 // Conversion Rates 0.34
// -52.2 // Customer Experience 0.52
// -69 // Brand Image v 0.81





// 17 to -72





  return (
    <section className=" bg-dialed-back z-20 testimonials text-gray-200 h-[400vh] relative">

<div className='trigger w-20 h-20  z-50 absolute top-28 '></div>
<div className='trigger1 w-20 h-20  z-50 absolute bottom-28 '></div>


    <div className="h-[100vh] w-[10rem] sticky top-0 buttons pl-[calc(100vw/12)] z-[200] flex flex-col justify-center text-regular30 gap-[.67rem]">
      <button data-name="events" className="text-left tes-button capitalize user-eng" style={{ fontWeight: 500, opacity: 1 }}> Engagment</button>
      <button data-name="share homes" className="text-left tes-button capitalize conversion-rate" style={{ fontWeight: 400, opacity: 0.5 }}>Conversion</button>
      <button data-name="cost splitting" className="text-left tes-button capitalize customer-exp" style={{ fontWeight: 400, opacity: 0.5 }}> Experience</button>
      <button data-name="sync plans" className="text-left tes-button capitalize brand-img" style={{ fontWeight: 400, opacity: 0.5 }}>Image</button>
    </div>
    <div className=" mt-[-100vh] sticky top-[0] px-[calc(100vw/12)] flex flex-row justify-between items-center">
      <div className="h-[100vh] w-[7rem] buttons flex flex-col justify-center text-regular30 gap-[.67rem]"></div>
      <div className="frame-container w-[calc((100vw/12)*8)] bg-red-gradient border-[.09rem] border-white pr-[0.4rem] h-[calc(13rem+49vh)] rounded-[2rem] flex justify-between" style={{     backgroundImage: 'linear-gradient(111deg, rgb(77 77 206) 13.66%, rgb(35 44 101) 63.68%)' }}>
        <div className="relative w-[57%] h-full overflow-hidden">
          <div ref={statRef} className="tes-scroll-content w-[60ch] absolute   flex flex-col gap-80    pl-[2.03rem] pr-[.2rem] top-[calc(((71vh-20.3rem)/2)*-1)]" style={{ transform: 'translate(0px, 13%)' }}>
            <div className="min-h-[15.6rem]  tes-content h-auto flex flex-col justify-center">
              <h6 className=" text-3xl leading-[1.27] pb-[3rem]  md:text-3xl lg:text-6xl">Encourage users to stay on your site and explore more. </h6>
              <h6 className=" text-lg  md:text-xl lg:text-3xl">Interactive content generates 2x more user engagement than static content</h6>
            </div>
            <div className="min-h-[15.6rem]  tes-content h-auto flex flex-col justify-center">
              <h6 className="text-[1.64rem] leading-[1.27] pb-[3rem]  md:text-3xl lg:text-5xl">Increase User Engagement with Interactivity</h6>
              <h6 className="text-[.63rem]  md:text-xl lg:text-2xl text-base">Websites with interactive elements see a 40% increase in user time spent on site</h6>
            </div>
            <div className="min-h-[15.6rem]  tes-content h-auto flex flex-col justify-center">
              <h6 className="text-[1.64rem] leading-[1.27] pb-[3rem]  md:text-3xl lg:text-5xl">Transform Sales with 3D Product Configurations</h6>
              <h6 className="text-[.63rem]  md:text-xl lg:text-2xl text-base">3D product views can increase conversion rates by up to 250%</h6>
            </div>
            <div className="min-h-[15.6rem]  tes-content h-auto flex flex-col justify-center">
              <h6 className="text-[1.64rem] leading-[1.27] pb-[3rem]  md:text-3xl lg:text-5xl">Drive Conversions with Product Customization Tools</h6>
              <h6 className="text-[.63rem]  md:text-xl lg:text-2xl text-base">Interactive Product Customizers can lead to a 30% increase in sales</h6>
            </div>
            <div className="min-h-[15.6rem]  tes-content h-auto flex flex-col justify-center">
              <h6 className="text-[1.64rem] leading-[1.27] pb-[3rem]  md:text-3xl lg:text-5xl">Avoid Losing Customers, Enhance User Experience</h6>
              <h6 className="text-[.63rem]  md:text-xl lg:text-2xl text-base">89% of consumers turn to a competitor after a poor user experience</h6>
            </div>
            <div className="min-h-[15.6rem]  tes-content h-auto flex flex-col justify-center">
              <h6 className="text-[1.64rem] leading-[1.27] pb-[3rem]  md:text-3xl lg:text-5xl">Get ahead of the curve.</h6>
              <h6 className="text-[.63rem]  md:text-xl lg:text-2xl text-base">A 3D website sets your brand apart from competitors by offering a cutting-edge, modern online experience.</h6>
            </div>
          </div>
        </div>
        <div className="images-container w-[43%] relative">
          <div className="test-img-mask" style={{ opacity: 1, display: 'flex' }}>
            <img alt="" loading="lazy" width="800" height="1200" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover" style={{ transform: 'translate(0%, -50%) translate(0px, 1rem) scale(0.9, 0.9)', opacity: 2.132, zIndex: 4 }} src="./images/showcase/car_image.png" />
          </div>
          <div className="test-img-mask" style={{ opacity: 1, display: 'flex' }}>
            <img alt="" loading="lazy" width="1000" height="1000" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover" style={{ transform: 'translate(0%, -50%) translate(0px, 0.35rem) scale(0.8, 0.8)', opacity: 1.558, zIndex: 3 }} src="./images/showcase/soda_image.png" />
          </div>
          <div className="test-img-mask" style={{ opacity: 1, display: 'flex' }}>
            <img alt="" loading="lazy" width="800" height="1200" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover" style={{ transform: 'translate(0%, -50%) translate(0px, -0.3rem) scale(0.7286, 0.7286)', opacity: 0.984, zIndex: 2 }} src="./images/showcase/vr_image.png" />
          </div>
          <div className="test-img-mask">
            <img alt="" loading="lazy" width="800" height="1200" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover" style={{ transform: 'translate(0%, -50%) translate(0px, -0.95rem) scale(0.675, 0.675)', opacity: 0.41, zIndex: 1 }} src="./images/showcase/player_image.png" />
          </div>
          <div className="test-img-mask">
            <img alt="" loading="lazy" width="800" height="1200" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover" style={{ transform: 'translate(0%, -50%) translate(0px, -1.4rem) scale(0.675, 0.675)', opacity: 0.41, zIndex: -1 }} src="./images/showcase/player_image.png" />
          </div>
          <div className="test-img-mask">
            <img alt="" loading="lazy" width="800" height="1200" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover" style={{ transform: 'translate(0%, -50%) translate(0px, -2rem) scale(0.675, 0.675)', opacity: 0.41, zIndex: -2 }} src="./images/showcase/player_image.png" />
          </div>
        </div>
      </div>
    </div>
    <div className="tes-scroller-wrapper w-[calc((100%-((100vw/12)*3))/2)] opacity-0 absolute left-[calc((100vw/12)*3)] md:pl-0 lg:pl-[2.03rem] pr-[2.2rem] top-[0]">
      <div className="tes-scroller h-screen w-full" data-color="linear-gradient(111deg, #FFF 13.66%, #FFE0E8 63.68%)" data-name="events" id="events"></div>
      <div className="tes-scroller h-screen w-full" data-color="linear-gradient(111deg, #FFF 13.66%, #FFFFE0 63.68%)" data-name="share homes" id="share homes"></div>
      <div className="tes-scroller h-screen w-full" data-color="linear-gradient(111deg, #FFF 13.66%, #E0E5FF 63.68%)" data-name="cost splitting" id="cost splitting"></div>
      <div className="tes-scroller h-screen w-full" data-color="linear-gradient(111deg, #FFF 13.66%, #E0F5FF 63.68%)" data-name="sync plans" id="sync plans"></div>
    </div>
  </section>
  )
}

export default Page4
