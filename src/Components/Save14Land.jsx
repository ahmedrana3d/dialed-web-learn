// import React, { useRef } from 'react'
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SplitText } from 'gsap/SplitText';

// gsap.registerPlugin(ScrollTrigger, SplitText);


// const Page4 = () => {

// const statRef = useRef()

// useGSAP(() => {
//   if (statRef.current) {
//     const animationsTriggered = {
//       animation1: false,
//       animation2: false,
//       animation3: false,
//       animation4: false,
//       animation5: false,
//     };




//     const tl = gsap.timeline({
//       ease: 'power0',
//       scrollTrigger: {
//         trigger: statRef.current,
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: true,
//         // markers: true,
//         onUpdate: (self) => {
//           const scrollY = parseFloat(self.progress.toFixed(2));

//           // Trigger animations when scrolling down
//           if (scrollY >= 0.66 && !animationsTriggered.animation5) {
//             highlightButton('brand-img');
//             changeBackground('rgb(19 37 26)');
//             animationsTriggered.animation5 = true;
//             animateImage(".image-3", 0.9, "2rem", 0, 0.3);
//             animateImage(".image-4", 0.9, "1rem", 2.132, 0.5);
//           } else if (scrollY >= 0.4 && !animationsTriggered.animation4) {
//             highlightButton('customer-exp');
//             changeBackground('rgb(19 32 37)');
//             animationsTriggered.animation4 = true;
//             animateImage(".image-2", 0.9, "2rem", 0, 0.3);
//             animateImage(".image-3", 0.9, "1rem", 2.132, 0.5);
//             animateImage(".image-4", 0.8, "0.35rem", 1.558, 0.5);
//           } else if (scrollY >= 0.31 && !animationsTriggered.animation3) {
//             highlightButton('conversion-rate');
//             animationsTriggered.animation3 = true;
//           } else if (scrollY >= 0.09 && !animationsTriggered.animation2) {
//             changeBackground('rgb(58 43 43)');
//             highlightButton('conversion-rate');
//             animationsTriggered.animation2 = true;
//             animateImage(".image-1", 0.9, "2.2rem", 0, 0.3);
//             animateImage(".image-2", 0.9, "1rem", 2.132, 0.5);
//             animateImage(".image-3", 0.8, "0.35rem", 1.558, 0.5);
//             animateImage(".image-4", 0.72, "-0.3rem", 0.984, 0.5);
//           } else if (scrollY >= 0.03 && !animationsTriggered.animation1) {
//             changeBackground('rgb(106, 106, 106)');
//             highlightButton('user-eng');
//             animationsTriggered.animation1 = true;
//           }

//           // Reset animations when scrolling up
//           if (scrollY < 0.03 && animationsTriggered.animation1) {
//             changeBackground('rgb(106, 106, 106)');
//             reverseHighlightButton('user-eng');
//             animationsTriggered.animation1 = false;
//             reverseAnimateImage(".image-1", 0.9, "1rem", 2.132, 0.3);
//             reverseAnimateImage(".image-2", 0.8, "0.35rem", 1.558, 0.5);
//             reverseAnimateImage(".image-3", 0.72, "-0.3rem", 0.984, 0.5);
//             reverseAnimateImage(".image-4", 0.67, "-0.95rem", 0.41, 0.5);
//           } else if (scrollY < 0.19 && animationsTriggered.animation2) {
//             reverseHighlightButton('conversion-rate');
//             changeBackground('rgb(58 43 43)');
//             animationsTriggered.animation2 = false;
//             reverseAnimateImage(".image-1", 0.9, "2.2rem", 0, 0.3);
//             reverseAnimateImage(".image-2", 0.9, "1rem", 2.132, 0.5);
//             reverseAnimateImage(".image-3", 0.8, "0.35rem", 1.558, 0.5);
//             reverseAnimateImage(".image-4", 0.72, "-0.3rem", 0.984, 0.5);
//           } else if (scrollY < 0.34 && animationsTriggered.animation3) {
//             reverseHighlightButton('conversion-rate');
//             changeBackground('rgb(58 43 43)');
//             animationsTriggered.animation3 = false;
//             reverseAnimateImage(".image-1", 0.9, "2.2rem", 0, 0.3);
//             reverseAnimateImage(".image-2", 0.9, "1rem", 2.132, 0.5);
//             reverseAnimateImage(".image-3", 0.8, "0.35rem", 1.558, 0.5);
//             reverseAnimateImage(".image-4", 0.72, "-0.3rem", 0.984, 0.5);
//           } else if (scrollY < 0.56 && animationsTriggered.animation4) {
//             changeBackground('rgb(19 32 37)');
//             reverseHighlightButton('customer-exp');
//             animationsTriggered.animation4 = false;
//             reverseAnimateImage(".image-2", 0.9, "2rem", 0, 0.3);
//             reverseAnimateImage(".image-3", 0.9, "1rem", 2.132, 0.5);
//             reverseAnimateImage(".image-4", 0.8, "0.35rem", 1.558, 0.5);
//           } else if (scrollY < 0.72 && animationsTriggered.animation5) {
//             reverseHighlightButton('brand-img');
//             changeBackground('rgb(19 37 26)');
//             animationsTriggered.animation5 = false;
//             reverseAnimateImage(".image-3", 0.9, "2rem", 0, 0.3);
//             reverseAnimateImage(".image-4", 0.9, "1rem", 2.132, 0.5);
//           }

//         },

//       },
//     });

//     animateText(".stand-out")

//     tl.fromTo(
//       statRef.current,
//       {
//         translateY: '0%',
//       },
//       {
//         translateY: '-86%',
//       }
//     );

//     function highlightButton(buttonClass) {
//       gsap.to(`.tes-button.${buttonClass}`, { opacity: 1, fontWeight: 500 });
//       gsap.to(`.tes-button:not(.${buttonClass})`, { opacity: 0.5, fontWeight: 400 });
//     }

//     function reverseHighlightButton(buttonClass) {
//       highlightButton(buttonClass);
//     }

//     function changeBackground(color) {
//       const linearGradient = `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, ${color} 63.68%)`;
//       gsap.to(".frame-container", {
//         backgroundImage: linearGradient,
//         duration: 1,
//       });
//     }

//     function animateImage(imageClass, scale, y, opacity, duration) {
//       const image = document.querySelector(imageClass);
//       gsap.to(image, {
//         scale: scale,
//         y: y,
//         opacity: opacity,
//         duration: duration,
//         ease: "power2.in",
//         transform: "translate(0%, -50%)",
//       });
//     }

//     function reverseAnimateImage(selector, scale, y, opacity, duration) {
//       animateImage(selector, scale, y, opacity, duration, "power2.out");
//     }
//   }
// }, []);



// function animateText(textSelector) {
  
//   document.querySelectorAll(textSelector).forEach((element) => {
//     gsap.set(element, {
//       transformPerspective: 500,
//       transformOrigin: "center bottom",
//       rotationX: 70
//     });

//     let mySplitText = new SplitText(element, { type: "chars" });
//     let chars = mySplitText.chars;

//     gsap.fromTo(
//       element,
//       {
//         rotationX: 70,
//         opacity: 0
//       },
//       {
//         rotationX: 0,
//         opacity: 1,
//         duration: 1.5,
//         ease: "back.out",
//         scrollTrigger: {
//           trigger: element,
//           start: "top 80%",
//           toggleActions: "play none none reset"
//         }
//       }
//     );

//     gsap.from(chars, {
//       yPercent: 15,
//       stagger: 0.04,
//       opacity: 0,
//       ease: "power1.out",
//       duration: 1.5,
//       scrollTrigger: {
//         trigger: element,
//         start: "top 80%",
//         toggleActions: "play none none reset"
//       }
//     });

//     gsap.fromTo(
//       element,
//       {
//         opacity: 0
//       },
//       {
//         opacity: 1,
//         ease: "none",
//         scrollTrigger: {
//           trigger: element,
//           start: "top 80%",
//           end: "top 60%",
//           scrub: true,
//           toggleActions: "play reverse play reverse"
//         }
//       }
//     );

//     gsap.fromTo(
//       element,
//       {
//         opacity: 1
//       },
//       {
//         opacity: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: element,
//           start: "top 20%",
//           end: "top 5%",
//           scrub: true,
//           toggleActions: "play reverse play reverse"
//         }
//       }
//     );
//   });
// }




//   return (
//     <section className=" z-20 testimonials text-gray-200 h-[600vh] relative">

// <div   className='stand-out font-sf-bold  leading-tight text-[#fefeff]  text-center text-[7vw] md:text-[5vw]'>
//                     How do you make yours <p>
//                     stand out? </p> 
//                 </div>

// <div className='trigger w-20 h-20  z-50 absolute top-28 '></div>
// <div className='trigger1 w-20 h-20  z-50 absolute bottom-28 '></div>



//     <div className="h-[100vh] invisible md:visible w-[10rem] sticky top-0 buttons pl-[calc(100vw/12)] z-[200] flex flex-col justify-center text-regular30 gap-[.67rem]">
//       <button data-name="events" className="text-left tes-button capitalize user-eng text-2xl leading-relaxed"> Engagment</button>
//       <button data-name="share homes" className="text-left tes-button capitalize conversion-rate text-2xl leading-relaxed opacity-50" >Conversion</button>
//       <button data-name="cost splitting" className="text-left tes-button capitalize customer-exp text-2xl leading-relaxed opacity-50" > Experience</button>
//       <button data-name="sync plans" className="text-left tes-button capitalize brand-img text-2xl leading-relaxed opacity-50" >Image</button>
//     </div>
//     <div className=" mt-[-100vh] h-screen sticky top-[0] px-[calc(100vw/12)] flex flex-row justify-center  md:justify-between items-center">
//       <div className="h-[100vh] w-[7rem] buttons  flex-col justify-center text-regular30 gap-[.67rem] hidden md:flex"></div>
//       <div className="frame-container w-[100vw] md:w-[calc((100vw/12)*8)] bg-red-gradient border-[.09rem] border-white md:pr-[0.4rem] h-[calc(13rem+49vh)] rounded-[2rem] flex justify-between" style={{     backgroundImage: `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, rgb(106 106 106) 63.68%)` }}>
//         <div className="relative w-full md:w-[57%] h-full overflow-hidden flex justify-center">
//         <div className="relative w-full lg:w-[57%] h-full overflow-hidden mx-[3vw] ">
//         <div ref={statRef} className="tes-scroll-content w-full text-center md:text-start absolute flex flex-col gap-80 md:pl-[2.03rem] md:pr-[.2rem] top-[calc(((71vh-20.3rem)/2)*-1)]" style={{ transform: 'translate(0px, 13%)' }}>
   
//           <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
//             <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">Increase User Engagement with Interactivity</h6>
//             <h6 className="text-[4vw] md:text-xl xl:text-2xl">Websites with interactive elements see a 40% increase in user time spent on site</h6>
            
//           </div>
//           <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
//             <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">Transform Sales with 3D Product Configurations</h6>
//             <h6 className="text-[4vw] md:text-xl xl:text-2xl">3D product views can increase conversion rates by up to 250%</h6>
//             <div className="test-img-mask block md:hidden ">
//             <img alt="" loading="lazy"  className="w-[100%] origin-top   rounded-[1.25rem] object-cover"  src="./images/showcase/soda_image.png" />
//           </div>
//           </div>
//           <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
//             <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">Drive Conversions with Product Customization Tools</h6>
//             <h6 className="text-[4vw] md:text-xl xl:text-2xl">Interactive Product Customizers can lead to a 30% increase in sales</h6>
//           </div>
//           <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
//             <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">Avoid Losing Customers, Enhance User Experience</h6>
//             <h6 className="text-[4vw] md:text-xl xl:text-2xl">89% of consumers turn to a competitor after a poor user experience</h6>
//             <div className="test-img-mask block md:hidden ">
//             <img alt="" loading="lazy"  className="w-[100%] origin-top   rounded-[1.25rem] object-cover"  src="./images/showcase/vr_image.png" />
//           </div>
//           </div>
//           <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
//             <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">Get ahead of the curve.</h6>
//             <h6 className="text-[4vw] md:text-xl xl:text-2xl">A 3D website sets your brand apart from competitors by offering a cutting-edge, modern online experience.</h6>
//             <div className="test-img-mask block md:hidden ">
//             <img alt="" loading="lazy"  className="w-[100%] origin-top   rounded-[1.25rem] object-cover"  src="./images/showcase/player_image.png" />
//           </div>
//           </div>
//         </div>
//       </div>
//         </div>
//         <div className="images-container w-[43%] relative hidden md:block">
//           <div className="test-img-mask" style={{ opacity: 1, display: 'flex' }}>
//             <img alt="" loading="lazy" width="800" height="1200" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-1" style={{ transform: 'translate(0%, -50%) translate(0px, 1rem) scale(0.9, 0.9)', opacity: 2.132, zIndex: 4 }} src="./images/showcase/car_image.png" />
//           </div>
//           <div className="test-img-mask" style={{ opacity: 1, display: 'flex' }}>
//             <img alt="" loading="lazy" width="1000" height="1000" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-2" style={{ transform: 'translate(0%, -50%) translate(0px, 0.35rem) scale(0.8, 0.8)', opacity: 1.558, zIndex: 3 }} src="./images/showcase/soda_image.png" />
//           </div>
//           <div className="test-img-mask" style={{ opacity: 1, display: 'flex' }}>
//             <img alt="" loading="lazy" width="800" height="1200" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-3" style={{ transform: 'translate(0%, -50%) translate(0px, -0.3rem) scale(0.7286, 0.7286)', opacity: 0.984, zIndex: 2 }} src="./images/showcase/vr_image.png" />
//           </div>
//           <div className="test-img-mask">
//             <img alt="" loading="lazy" width="800" height="1200" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-4" style={{ transform: 'translate(0%, -50%) translate(0px, -0.95rem) scale(0.675, 0.675)', opacity: 0.41, zIndex: 1 }} src="./images/showcase/player_image.png" />
//           </div>
         
//         </div>
//       </div>
//     </div>
//     <div className="tes-scroller-wrapper w-[calc((100%-((100vw/12)*3))/2)] opacity-0 absolute left-[calc((100vw/12)*3)] md:pl-0 lg:pl-[2.03rem] pr-[2.2rem] top-[0]">
//       <div className="tes-scroller h-screen w-full" data-color="linear-gradient(111deg, #FFF 13.66%, #FFE0E8 63.68%)" data-name="events" id="events"></div>
//       <div className="tes-scroller h-screen w-full" data-color="linear-gradient(111deg, #FFF 13.66%, #FFFFE0 63.68%)" data-name="share homes" id="share homes"></div>
//       <div className="tes-scroller h-screen w-full" data-color="linear-gradient(111deg, #FFF 13.66%, #E0E5FF 63.68%)" data-name="cost splitting" id="cost splitting"></div>
//       <div className="tes-scroller h-screen w-full" data-color="linear-gradient(111deg, #FFF 13.66%, #E0F5FF 63.68%)" data-name="sync plans" id="sync plans"></div>
//     </div>
//   </section>
//   )
// }

// export default Page4






// import React, { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// const Page4 = () => {
//   const statRef = useRef();
//   const startTrigger = useRef();
//   const endTrigger = useRef();

// useGSAP(() => {
//   if (statRef.current) {
//     const animations = [
//       {
//         trigger: 0.66,
//         reverseTrigger : 0.72,
//         flag: 'animation5',
//         actions: () => {
//           highlightButton("brand-img");
//           changeBackground("rgb(19 37 26)");
//           animateImage(".image-3", 0.9, "2rem", 0, 0.3);
//           animateImage(".image-4", 0.9, "1rem", 2.132, 0.5);
//         },
//         reverseActions: () => {
//           reverseHighlightButton("brand-img");
//           changeBackground("rgb(19 37 26)");
//           reverseAnimateImage(".image-3", 0.9, "2rem", 0, 0.3);
//           reverseAnimateImage(".image-4", 0.9, "1rem", 2.132, 0.5);
//         }
//       },
//       {
//         trigger: 0.4,
//         reverseTrigger : 0.56,
//         flag: 'animation4',
//         actions: () => {
//           highlightButton("customer-exp");
//           changeBackground("rgb(19 32 37)");
//           animateImage(".image-2", 0.9, "2rem", 0, 0.3);
//           animateImage(".image-3", 0.9, "1rem", 2.132, 0.5);
//           animateImage(".image-4", 0.8, "0.35rem", 1.558, 0.5);
//         },
//         reverseActions: () => {
//           reverseHighlightButton("customer-exp");
//           changeBackground("rgb(19 32 37)");
//           reverseAnimateImage(".image-2", 0.9, "2rem", 0, 0.3);
//           reverseAnimateImage(".image-3", 0.9, "1rem", 2.132, 0.5);
//           reverseAnimateImage(".image-4", 0.8, "0.35rem", 1.558, 0.5);
//         }
//       },
//       {
//         trigger: 0.31,
//         reverseTrigger : 0.34  ,
//         flag: 'animation3',
//         actions: () => {
//           highlightButton("conversion-rate");
//         },
//         reverseActions: () => {
//           reverseHighlightButton("conversion-rate");
//           changeBackground("rgb(58 43 43)");
//         }
//       },
//       {
//         trigger: 0.09,
//         reverseTrigger : 0.19,
//         flag: 'animation2',
//         actions: () => {
//           changeBackground("rgb(58 43 43)");
//           highlightButton("conversion-rate");
//           animateImage(".image-1", 0.9, "2.2rem", 0, 0.3);
//           animateImage(".image-2", 0.9, "1rem", 2.132, 0.5);
//           animateImage(".image-3", 0.8, "0.35rem", 1.558, 0.5);
//           animateImage(".image-4", 0.72, "-0.3rem", 0.984, 0.5);
//         },
//         reverseActions: () => {
//           reverseHighlightButton("conversion-rate");
//           changeBackground("rgb(58 43 43)");
//           reverseAnimateImage(".image-1", 0.9, "2.2rem", 0, 0.3);
//           reverseAnimateImage(".image-2", 0.9, "1rem", 2.132, 0.5);
//           reverseAnimateImage(".image-3", 0.8, "0.35rem", 1.558, 0.5);
//           reverseAnimateImage(".image-4", 0.72, "-0.3rem", 0.984, 0.5);
//         }
//       },
//       {
//         trigger: 0.03,
//         reverseTrigger : 0.03,
//         flag: 'animation1',
//         actions: () => {
//           changeBackground("rgb(106, 106, 106)");
//           highlightButton("user-eng");
//         },
//         reverseActions: () => {
//           reverseHighlightButton("user-eng");
//           changeBackground("rgb(106, 106, 106)");
//           reverseAnimateImage(".image-1", 0.9, "1rem", 2.132, 0.3);
//           reverseAnimateImage(".image-2", 0.8, "0.35rem", 1.558, 0.5);
//           reverseAnimateImage(".image-3", 0.72, "-0.3rem", 0.984, 0.5);
//           reverseAnimateImage(".image-4", 0.67, "-0.95rem", 0.41, 0.5);
//         }
//       }
//     ];

//     const animationsTriggered = {};
//     animations.forEach(anim => animationsTriggered[anim.flag] = false);

//     const tl = gsap.timeline({
//       ease: "power0",
//       scrollTrigger: {
//         trigger: startTrigger.current,
//        endTrigger : endTrigger.current,
//         scrub: true,
//         // markers: true,
//         onUpdate: (self) => {
//           const scrollY = parseFloat(self.progress.toFixed(2));

//           animations.forEach(anim => {
//             if (scrollY >= anim.trigger && !animationsTriggered[anim.flag]) {
//               anim.actions();
//               console.log(anim.flag);
//               animationsTriggered[anim.flag] = true;
//             } else if (scrollY < anim.reverseTrigger && animationsTriggered[anim.flag]) {
//               anim.reverseActions();
//               console.log(anim.flag);
//               animationsTriggered[anim.flag] = false;
//             }
//           });
//         },
//       },
//     });

//     animateText(".stand-out");

//     tl.fromTo(
//       statRef.current,
//       {
//         translateY: "0%",
//       },
//       {
//         translateY: "-86%",
//       }
//     );

//     function highlightButton(buttonClass) {
//       gsap.to(`.tes-button.${buttonClass}`, { opacity: 1, fontWeight: 500 });
//       gsap.to(`.tes-button:not(.${buttonClass})`, {
//         opacity: 0.5,
//         fontWeight: 400,
//       });
//     }

//     function reverseHighlightButton(buttonClass) {
//       highlightButton(buttonClass);
//     }

//     function changeBackground(color) {
//       const linearGradient = `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, ${color} 63.68%)`;
//       gsap.to(".frame-container", {
//         backgroundImage: linearGradient,
//         duration: 1,
//       });
//     }

//     function animateImage(imageClass, scale, y, opacity, duration) {
//       const image = document.querySelector(imageClass);
//       gsap.to(image, {
//         scale: scale,
//         y: y,
//         opacity: opacity,
//         duration: duration,
//         ease: "power2.in",
//         transform: "translate(0%, -50%)",
//       });
//     }

//     function reverseAnimateImage(selector, scale, y, opacity, duration) {
//       animateImage(selector, scale, y, opacity, duration, "power2.out");
//     }
//   }
// }, []);


//   function animateText(textSelector) {
//     document.querySelectorAll(textSelector).forEach((element) => {
//       gsap.set(element, {
//         transformPerspective: 500,
//         transformOrigin: "center bottom",
//         rotationX: 70,
//       });

//       let mySplitText = new SplitText(element, { type: "chars" });
//       let chars = mySplitText.chars;

//       gsap.fromTo(
//         element,
//         {
//           rotationX: 70,
//           opacity: 0,
//         },
//         {
//           rotationX: 0,
//           opacity: 1,
//           duration: 1.5,
//           ease: "back.out",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 80%",
//             toggleActions: "play none none reset",
//           },
//         }
//       );

//       gsap.from(chars, {
//         yPercent: 15,
//         stagger: 0.04,
//         opacity: 0,
//         ease: "power1.out",
//         duration: 1.5,
//         scrollTrigger: {
//           trigger: element,
//           start: "top 80%",
//           toggleActions: "play none none reset",
//         },
//       });

//       gsap.fromTo(
//         element,
//         {
//           opacity: 0,
//         },
//         {
//           opacity: 1,
//           ease: "none",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 80%",
//             end: "top 60%",
//             scrub: true,
//             toggleActions: "play reverse play reverse",
//           },
//         }
//       );

//       gsap.fromTo(
//         element,
//         {
//           opacity: 1,
//         },
//         {
//           opacity: 0,
//           ease: "none",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 20%",
//             end: "top 5%",
//             scrub: true,
//             toggleActions: "play reverse play reverse",
//           },
//         }
//       );
//     });
//   }

//   return (
//     <section className=" z-20 testimonials text-gray-200 h-[600vh] relative">
//       <div className="stand-out font-sf-bold  leading-tight text-[#fefeff]  text-center text-[7vw] md:text-[5vw]">
//         How do you make yours <p>stand out? </p>
//       </div>

//       <div ref={startTrigger} className=" w-20 h-20    z-50 absolute  top-[110vh] "></div>
//       <div ref={endTrigger} className=" w-20 h-20    z-50 absolute bottom-28 "></div>

//       <div className="h-[100vh] invisible md:visible w-[10rem] sticky top-0 buttons pl-[calc(100vw/12)] z-[200] flex flex-col justify-center text-regular30 gap-[.67rem]">
//         <button
//           data-name="events"
//           className="text-left tes-button capitalize user-eng text-2xl leading-relaxed"
//         >
//           {" "}
//           Engagment
//         </button>
//         <button
//           data-name="share homes"
//           className="text-left tes-button capitalize conversion-rate text-2xl leading-relaxed opacity-50"
//         >
//           Conversion
//         </button>
//         <button
//           data-name="cost splitting"
//           className="text-left tes-button capitalize customer-exp text-2xl leading-relaxed opacity-50"
//         >
//           {" "}
//           Experience
//         </button>
//         <button
//           data-name="sync plans"
//           className="text-left tes-button capitalize brand-img text-2xl leading-relaxed opacity-50"
//         >
//           Image
//         </button>
//       </div>
//       <div className=" mt-[-100vh] h-screen sticky top-[0] px-[calc(100vw/12)] flex flex-row justify-center  md:justify-between items-center">
//         <div className="h-[100vh] w-[7rem] buttons  flex-col justify-center text-regular30 gap-[.67rem] hidden md:flex"></div>
//         <div
//           className="frame-container w-[100vw] md:w-[calc((100vw/12)*8)] bg-red-gradient border-[.09rem] border-white md:pr-[0.4rem] h-[calc(13rem+49vh)] rounded-[2rem] flex justify-between"
//           style={{
//             backgroundImage: `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, rgb(106 106 106) 63.68%)`,
//           }}
//         >
//           <div className="relative w-full md:w-[57%] h-full overflow-hidden flex justify-center">
//             <div className="relative w-full lg:w-[57%] h-full overflow-hidden mx-[3vw] ">
//               <div
//                 ref={statRef}
//                 className="tes-scroll-content w-full text-center md:text-start absolute flex flex-col gap-80 md:pl-[2.03rem] md:pr-[.2rem] top-[calc(((71vh-20.3rem)/2)*-1)]"
//                 style={{ transform: "translate(0px, 13%)" }}
//               >
//                 <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
//                   <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">
//                     Increase User Engagement with Interactivity
//                   </h6>
//                   <h6 className="text-[4vw] md:text-xl xl:text-2xl">
//                     Websites with interactive elements see a 40% increase in
//                     user time spent on site
//                   </h6>
//                 </div>
//                 <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
//                   <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">
//                     Transform Sales with 3D Product Configurations
//                   </h6>
//                   <h6 className="text-[4vw] md:text-xl xl:text-2xl">
//                     3D product views can increase conversion rates by up to 250%
//                   </h6>
//                   <div className="test-img-mask block md:hidden ">
//                     <img
//                       alt=""
//                       loading="lazy"
//                       className="w-[100%] origin-top   rounded-[1.25rem] object-cover"
//                       src="./images/showcase/soda_image.png"
//                     />
//                   </div>
//                 </div>
//                 <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
//                   <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">
//                     Drive Conversions with Product Customization Tools
//                   </h6>
//                   <h6 className="text-[4vw] md:text-xl xl:text-2xl">
//                     Interactive Product Customizers can lead to a 30% increase
//                     in sales
//                   </h6>
//                 </div>
//                 <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
//                   <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">
//                     Avoid Losing Customers, Enhance User Experience
//                   </h6>
//                   <h6 className="text-[4vw] md:text-xl xl:text-2xl">
//                     89% of consumers turn to a competitor after a poor user
//                     experience
//                   </h6>
//                   <div className="test-img-mask block md:hidden ">
//                     <img
//                       alt=""
//                       loading="lazy"
//                       className="w-[100%] origin-top   rounded-[1.25rem] object-cover"
//                       src="./images/showcase/vr_image.png"
//                     />
//                   </div>
//                 </div>
//                 <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
//                   <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">
//                     Get ahead of the curve.
//                   </h6>
//                   <h6 className="text-[4vw] md:text-xl xl:text-2xl">
//                     A 3D website sets your brand apart from competitors by
//                     offering a cutting-edge, modern online experience.
//                   </h6>
//                   <div className="test-img-mask block md:hidden ">
//                     <img
//                       alt=""
//                       loading="lazy"
//                       className="w-[100%] origin-top   rounded-[1.25rem] object-cover"
//                       src="./images/showcase/player_image.png"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="images-container w-[43%] relative hidden md:block">
//             <div
//               className="test-img-mask"
//               style={{ opacity: 1, display: "flex" }}
//             >
//               <img
//                 alt=""
//                 loading="lazy"
//                 width="800"
//                 height="1200"
//                 className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-1"
//                 style={{
//                   transform:
//                     "translate(0%, -50%) translate(0px, 1rem) scale(0.9, 0.9)",
//                   opacity: 2.132,
//                   zIndex: 4,
//                 }}
//                 src="./images/showcase/car_image.png"
//               />
//             </div>
//             <div
//               className="test-img-mask"
//               style={{ opacity: 1, display: "flex" }}
//             >
//               <img
//                 alt=""
//                 loading="lazy"
//                 width="1000"
//                 height="1000"
//                 className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-2"
//                 style={{
//                   transform:
//                     "translate(0%, -50%) translate(0px, 0.35rem) scale(0.8, 0.8)",
//                   opacity: 1.558,
//                   zIndex: 3,
//                 }}
//                 src="./images/showcase/soda_image.png"
//               />
//             </div>
//             <div
//               className="test-img-mask"
//               style={{ opacity: 1, display: "flex" }}
//             >
//               <img
//                 alt=""
//                 loading="lazy"
//                 width="800"
//                 height="1200"
//                 className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-3"
//                 style={{
//                   transform:
//                     "translate(0%, -50%) translate(0px, -0.3rem) scale(0.7286, 0.7286)",
//                   opacity: 0.984,
//                   zIndex: 2,
//                 }}
//                 src="./images/showcase/vr_image.png"
//               />
//             </div>
//             <div className="test-img-mask">
//               <img
//                 alt=""
//                 loading="lazy"
//                 width="800"
//                 height="1200"
//                 className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-4"
//                 style={{
//                   transform:
//                     "translate(0%, -50%) translate(0px, -0.95rem) scale(0.675, 0.675)",
//                   opacity: 0.41,
//                   zIndex: 1,
//                 }}
//                 src="./images/showcase/player_image.png"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="tes-scroller-wrapper w-[calc((100%-((100vw/12)*3))/2)] opacity-0 absolute left-[calc((100vw/12)*3)] md:pl-0 lg:pl-[2.03rem] pr-[2.2rem] top-[0]">
//         <div
//           className="tes-scroller h-screen w-full"
//           data-color="linear-gradient(111deg, #FFF 13.66%, #FFE0E8 63.68%)"
//           data-name="events"
//           id="events"
//         ></div>
//         <div
//           className="tes-scroller h-screen w-full"
//           data-color="linear-gradient(111deg, #FFF 13.66%, #FFFFE0 63.68%)"
//           data-name="share homes"
//           id="share homes"
//         ></div>
//         <div
//           className="tes-scroller h-screen w-full"
//           data-color="linear-gradient(111deg, #FFF 13.66%, #E0E5FF 63.68%)"
//           data-name="cost splitting"
//           id="cost splitting"
//         ></div>
//         <div
//           className="tes-scroller h-screen w-full"
//           data-color="linear-gradient(111deg, #FFF 13.66%, #E0F5FF 63.68%)"
//           data-name="sync plans"
//           id="sync plans"
//         ></div>
//       </div>
//     </section>
//   );
// };

// export default Page4;

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Page4 = () => {
  const statRef = useRef();
  const startTrigger = useRef();
  const endTrigger = useRef();

useGSAP(() => {
  if (statRef.current) {
    const animations = [
      {
        trigger: 0.66,
        reverseTrigger : 0.72,
        flag: 'animation5',
        actions: () => {
          highlightButton("brand-img");
          changeBackground("rgb(19 37 26)");
          animateImage(".image-3", 0.9, "2rem", 0, 0.3);
          animateImage(".image-4", 0.9, "1rem", 2.132, 0.5);
        },
        reverseActions: () => {
          reverseHighlightButton("brand-img");
          changeBackground("rgb(19 37 26)");
          reverseAnimateImage(".image-3", 0.9, "2rem", 0, 0.3);
          reverseAnimateImage(".image-4", 0.9, "1rem", 2.132, 0.5);
        }
      },
      {
        trigger: 0.4,
        reverseTrigger : 0.56,
        flag: 'animation4',
        actions: () => {
          highlightButton("customer-exp");
          changeBackground("rgb(19 32 37)");
          animateImage(".image-2", 0.9, "2rem", 0, 0.3);
          animateImage(".image-3", 0.9, "1rem", 2.132, 0.5);
          animateImage(".image-4", 0.8, "0.35rem", 1.558, 0.5);
        },
        reverseActions: () => {
          reverseHighlightButton("customer-exp");
          changeBackground("rgb(19 32 37)");
          reverseAnimateImage(".image-2", 0.9, "2rem", 0, 0.3);
          reverseAnimateImage(".image-3", 0.9, "1rem", 2.132, 0.5);
          reverseAnimateImage(".image-4", 0.8, "0.35rem", 1.558, 0.5);
        }
      },
      {
        trigger: 0.31,
        reverseTrigger : 0.34  ,
        flag: 'animation3',
        actions: () => {
          highlightButton("conversion-rate");
        },
        reverseActions: () => {
          reverseHighlightButton("conversion-rate");
          changeBackground("rgb(58 43 43)");
        }
      },
      {
        trigger: 0.09,
        reverseTrigger : 0.19,
        flag: 'animation2',
        actions: () => {
          changeBackground("rgb(58 43 43)");
          highlightButton("conversion-rate");
          animateImage(".image-1", 0.9, "2.2rem", 0, 0.3);
          animateImage(".image-2", 0.9, "1rem", 2.132, 0.5);
          animateImage(".image-3", 0.8, "0.35rem", 1.558, 0.5);
          animateImage(".image-4", 0.72, "-0.3rem", 0.984, 0.5);
        },
        reverseActions: () => {
          reverseHighlightButton("conversion-rate");
          changeBackground("rgb(58 43 43)");
          reverseAnimateImage(".image-1", 0.9, "2.2rem", 0, 0.3);
          reverseAnimateImage(".image-2", 0.9, "1rem", 2.132, 0.5);
          reverseAnimateImage(".image-3", 0.8, "0.35rem", 1.558, 0.5);
          reverseAnimateImage(".image-4", 0.72, "-0.3rem", 0.984, 0.5);
        }
      },
      {
        trigger: 0.03,
        reverseTrigger : 0.03,
        flag: 'animation1',
        actions: () => {
          changeBackground("rgb(106, 106, 106)");
          highlightButton("user-eng");
        },
        reverseActions: () => {
          reverseHighlightButton("user-eng");
          changeBackground("rgb(106, 106, 106)");
          reverseAnimateImage(".image-1", 0.9, "1rem", 2.132, 0.3);
          reverseAnimateImage(".image-2", 0.8, "0.35rem", 1.558, 0.5);
          reverseAnimateImage(".image-3", 0.72, "-0.3rem", 0.984, 0.5);
          reverseAnimateImage(".image-4", 0.67, "-0.95rem", 0.41, 0.5);
        }
      }
    ];

    const animationsTriggered = {};
    animations.forEach(anim => animationsTriggered[anim.flag] = false);

    const tl = gsap.timeline({
      ease: "power0",
      scrollTrigger: {
        trigger: startTrigger.current,
       endTrigger : endTrigger.current,
        scrub: true,
        markers: true,
        onUpdate: (self) => {
          const scrollY = parseFloat(self.progress.toFixed(2));

          animations.forEach(anim => {
            if (scrollY >= anim.trigger && !animationsTriggered[anim.flag]) {
              anim.actions();
              console.log(anim.flag);
              animationsTriggered[anim.flag] = true;
            } else if (scrollY < anim.trigger && animationsTriggered[anim.flag]) {
              anim.reverseActions();
              console.log(anim.flag);
              animationsTriggered[anim.flag] = false;
            }
          });
        },
      },
    });

    animateText(".stand-out");

    tl.fromTo(
      statRef.current,
      {
        translateY: "0%",
      },
      {
        translateY: "-75%",
      }
    );

    function highlightButton(buttonClass) {
      gsap.to(`.tes-button.${buttonClass}`, { opacity: 1, fontWeight: 500 });
      gsap.to(`.tes-button:not(.${buttonClass})`, {
        opacity: 0.5,
        fontWeight: 400,
      });
    }

    function reverseHighlightButton(buttonClass) {
      highlightButton(buttonClass);
    }

    function changeBackground(color) {
      const linearGradient = `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, ${color} 63.68%)`;
      gsap.to(".frame-container", {
        backgroundImage: `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, ${color} 63.68%)`,
        duration: 1,
      });
    }

    function animateImage(imageClass, scale, y, opacity, duration) {
      const image = document.querySelector(imageClass);
      gsap.to(image, {
        scale: scale,
        y: y,
        opacity: opacity,
        duration: duration,
        ease: "power2.in",
        transform: "translate(0%, -50%)",
      });
    }

    function reverseAnimateImage(selector, scale, y, opacity, duration) {
      animateImage(selector, scale, y, opacity, duration, "power2.out");
    }
  }
}, []);


  function animateText(textSelector) {
    document.querySelectorAll(textSelector).forEach((element) => {
      gsap.set(element, {
        transformPerspective: 500,
        transformOrigin: "center bottom",
        rotationX: 70,
      });

      let mySplitText = new SplitText(element, { type: "chars" });
      let chars = mySplitText.chars;

      gsap.fromTo(
        element,
        {
          rotationX: 70,
          opacity: 0,
        },
        {
          rotationX: 0,
          opacity: 1,
          duration: 1.5,
          ease: "back.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );

      gsap.from(chars, {
        yPercent: 15,
        stagger: 0.04,
        opacity: 0,
        ease: "power1.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      gsap.fromTo(
        element,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        element,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 20%",
            end: "top 5%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }

  return (
    <section className=" z-20 testimonials text-gray-200 h-[400vh] relative">
      <div className="stand-out font-sf-bold  leading-tight text-[#fefeff]  text-center text-[7vw] md:text-[5vw]">
        How do you make yours <p>stand out? </p>
      </div>

      <div ref={startTrigger} className=" w-20 h-20    z-50 absolute  top-[110vh] "></div>
      <div ref={endTrigger} className=" w-20 h-20    z-50 absolute bottom-28 "></div>

      <div className="h-[100vh] invisible md:visible w-[10rem] sticky top-0 buttons pl-[calc(100vw/12)] z-[200] flex flex-col justify-center text-regular30 gap-[.67rem]">
        <button
          data-name="events"
          className="text-left tes-button capitalize user-eng text-2xl leading-relaxed"
        >
          {" "}
          Engagment
        </button>
        <button
          data-name="share homes"
          className="text-left tes-button capitalize conversion-rate text-2xl leading-relaxed opacity-50"
        >
          Conversion
        </button>
        <button
          data-name="cost splitting"
          className="text-left tes-button capitalize customer-exp text-2xl leading-relaxed opacity-50"
        >
          {" "}
          Experience
        </button>
        <button
          data-name="sync plans"
          className="text-left tes-button capitalize brand-img text-2xl leading-relaxed opacity-50"
        >
          Image
        </button>
      </div>
      <div className=" mt-[-100vh] h-screen sticky top-[0] px-[calc(100vw/12)] flex flex-row justify-center  md:justify-between items-center">
        <div className="h-[100vh] w-[7rem] buttons  flex-col justify-center text-regular30 gap-[.67rem] hidden md:flex"></div>
        <div
          className="frame-container w-[100vw] md:w-[calc((100vw/12)*8)] bg-red-gradient border-[.09rem] border-white md:pr-[0.4rem] h-[calc(13rem+49vh)] rounded-[2rem] flex justify-between"
          style={{
            backgroundImage: `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, rgb(106 106 106) 63.68%)`,
          }}
        >
          <div className="relative w-full md:w-[57%] h-full overflow-hidden flex justify-center">
            <div className="relative w-full lg:w-[57%] h-full overflow-hidden mx-[3vw] ">
              <div
                ref={statRef}
                className="tes-scroll-content w-full text-center md:text-start absolute flex flex-col gap-80 md:pl-[2.03rem] md:pr-[.2rem] top-[calc(((71vh-20.3rem)/2)*-1)]"
                style={{ transform: "translate(0px, 13%)" }}
              >
                <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col items-center justify-center">
                  <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">
                    Increase User Engagement with Interactivity
                  </h6>
                  <h6 className="text-[4vw] md:text-xl xl:text-2xl">
                    Websites with interactive elements see a 40% increase in
                    user time spent on site
                  </h6>
                </div>
                <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
                  <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">
                    Transform Sales with 3D Product Configurations
                  </h6>
                  <h6 className="text-[4vw] md:text-xl xl:text-2xl">
                    3D product views can increase conversion rates by up to 250%
                  </h6>
                  <div className="test-img-mask block md:hidden ">
                    <img
                      alt=""
                      loading="lazy"
                      className="w-[100%] origin-top   rounded-[1.25rem] object-cover"
                      src="./images/showcase/soda_image.png"
                    />
                  </div>
                </div>
                <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
                  <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">
                    Avoid Losing Customers, Enhance User Experience
                  </h6>
                  <h6 className="text-[4vw] md:text-xl xl:text-2xl">
                    89% of consumers turn to a competitor after a poor user
                    experience
                  </h6>
                  <div className="test-img-mask block md:hidden ">
                    <img
                      alt=""
                      loading="lazy"
                      className="w-[100%] origin-top   rounded-[1.25rem] object-cover"
                      src="./images/showcase/vr_image.png"
                    />
                  </div>
                </div>
                <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
                  <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">
                    Get ahead of the curve.
                  </h6>
                  <h6 className="text-[4vw] md:text-xl xl:text-2xl">
                    A 3D website sets your brand apart from competitors by
                    offering a cutting-edge, modern online experience.
                  </h6>
                  <div className="test-img-mask block md:hidden ">
                    <img
                      alt=""
                      loading="lazy"
                      className="w-[100%] origin-top   rounded-[1.25rem] object-cover"
                      src="./images/showcase/player_image.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="images-container w-[43%] relative hidden md:block">
            <div
              className="test-img-mask"
              style={{ opacity: 1, display: "flex" }}
            >
              <img
                alt=""
                loading="lazy"
                width="800"
                height="1200"
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-1"
                style={{
                  transform:
                    "translate(0%, -50%) translate(0px, 1rem) scale(0.9, 0.9)",
                  opacity: 2.132,
                  zIndex: 4,
                }}
                src="./images/showcase/car_image.png"
              />
            </div>
            <div
              className="test-img-mask"
              style={{ opacity: 1, display: "flex" }}
            >
              <img
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-2"
                style={{
                  transform:
                    "translate(0%, -50%) translate(0px, 0.35rem) scale(0.8, 0.8)",
                  opacity: 1.558,
                  zIndex: 3,
                }}
                src="./images/showcase/soda_image.png"
              />
            </div>
            <div
              className="test-img-mask"
              style={{ opacity: 1, display: "flex" }}
            >
              <img
                alt=""
                loading="lazy"
                width="800"
                height="1200"
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-3"
                style={{
                  transform:
                    "translate(0%, -50%) translate(0px, -0.3rem) scale(0.7286, 0.7286)",
                  opacity: 0.984,
                  zIndex: 2,
                }}
                src="./images/showcase/vr_image.png"
              />
            </div>
            <div className="test-img-mask">
              <img
                alt=""
                loading="lazy"
                width="800"
                height="1200"
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-4"
                style={{
                  transform:
                    "translate(0%, -50%) translate(0px, -0.95rem) scale(0.675, 0.675)",
                  opacity: 0.41,
                  zIndex: 1,
                }}
                src="./images/showcase/player_image.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tes-scroller-wrapper w-[calc((100%-((100vw/12)*3))/2)] opacity-0 absolute left-[calc((100vw/12)*3)] md:pl-0 lg:pl-[2.03rem] pr-[2.2rem] top-[0]">
        <div
          className="tes-scroller h-screen w-full"
          data-color="linear-gradient(111deg, #FFF 13.66%, #FFE0E8 63.68%)"
          data-name="events"
          id="events"
        ></div>
        <div
          className="tes-scroller h-screen w-full"
          data-color="linear-gradient(111deg, #FFF 13.66%, #FFFFE0 63.68%)"
          data-name="share homes"
          id="share homes"
        ></div>
        <div
          className="tes-scroller h-screen w-full"
          data-color="linear-gradient(111deg, #FFF 13.66%, #E0E5FF 63.68%)"
          data-name="cost splitting"
          id="cost splitting"
        ></div>
        <div
          className="tes-scroller h-screen w-full"
          data-color="linear-gradient(111deg, #FFF 13.66%, #E0F5FF 63.68%)"
          data-name="sync plans"
          id="sync plans"
        ></div>
      </div>
    </section>
  );
};

export default Page4;


import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Page4 = () => {
  const statRef = useRef();
  const startTrigger = useRef();
  const endTrigger = useRef();

useGSAP(() => {
  if (statRef.current) {

    const animationsTriggered = {};

    const tl = gsap.timeline({
      ease: "power0",
      scrollTrigger: {
        trigger: ".scroller-pin",
      //  endTrigger : endTrigger.current,
          start: "center center",
    end: `+=${2.8 * window.innerHeight}`,
    ease: "none",
        scrub: true,
        pin: true,
        // markers: true,
    
      },
    });

 

// Function to update opacity based on scale
const updateOpacity = (element, scale) => {
  const opacity = scale === 1 ? 0 : 1;
  gsap.set(element, { opacity: opacity });
};

const highlightText = (element) => {
    gsap.to(`.tes-button.${element}`, { opacity: 1, fontWeight: 500 });
      gsap.to(`.tes-button:not(.${element})`, {
        opacity: 0.5,
        fontWeight: 400,
     });
}

tl.fromTo(statRef.current, { translateY: "1%" }, { translateY: "-18%", ease: "none" }, ">")
  .to(".image-1", {
    scale: 1,
    ease: "none",
    onUpdate: function() {
      updateOpacity(".image-1", this.targets()[0]._gsap.scaleX);
      highlightText("user-eng");
    }
  }, "<")
  // .to(".frame-container", {
  //   backgroundImage: `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, rgb(109 110 160) 63.68%)`,
  //   duration: 1,
  // },"<")
  .to(".image-2", {
    scale: 0.9,
    ease: "none",

  }, "<")
  .to(".image-3", {
    scale: 0.8,
    ease: "none",
 
  }, "<")
  .to(".image-4", {
    scale: 0.7,
    ease: "none",
 
  }, "<");

tl.fromTo(statRef.current, { translateY: "-18%" }, { translateY: "-44%", ease: "none" }, ">")
  .to(".image-2", {
    scale: 1,
    ease: "none",
    onUpdate: function() {
      updateOpacity(".image-2", this.targets()[0]._gsap.scaleX);
      highlightText("conversion-rate");
    }
  }, "<")
  // .to(".frame-container", {
  //   backgroundImage: `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, rgb(57 57 90) 63.68%)`,
  //   duration: 1,
  // },"<")
  .to(".image-3", {
    scale: 0.9,
    ease: "none",
    
  }, "<")
  .to(".image-4", {
    scale: 0.8,
    ease: "none",
    
  }, "<");
  
  tl.fromTo(statRef.current, { translateY: "-44%" }, { translateY: "-70%", ease: "none" }, ">")
  .to(".image-3", {
    scale: 1,
    ease: "none",
    onUpdate: function() {
      updateOpacity(".image-3", this.targets()[0]._gsap.scaleX);
      highlightText("customer-exp");
    }
  }, "<")
  // .to(".frame-container", {
  //   backgroundImage: `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, rgb(163 105 84) 63.68%)`,
  //   duration: 1,
  // },"<")
  .to(".image-4", {
    scale: 0.9,
    ease: "none",
    
  }, "<");
  
  
  tl.fromTo(statRef.current, { translateY: "-70%" }, { translateY: "-80%", ease: "none" }, ">")
  .to(".image-4", {
    scale: 1,
    ease: "none",
    onUpdate : ()=>{
      highlightText("brand-img");
    },
  }, "<");
  // .to(".frame-container", {
  //   backgroundImage: `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, rgb(163 105 84) 63.68%)`,
  //   duration: 1,
  // },"<")

  }
}, []);



  return (
    <section className=" z-20 testimonials  text-gray-200 h-[400vh] relative">
      <div className="stand-out font-sf-bold  leading-tight text-[#fefeff]  text-center text-[7vw] md:text-[5vw]">
        How do you make yours <p>stand out? </p>
      </div>

      <div ref={startTrigger} className=" w-20 h-20    z-50 absolute  top-[110vh] "></div>
      <div ref={endTrigger} className=" w-20 h-20    z-50 absolute bottom-28 "></div>

<div className=" scroller-pin  sticky top-0 ">
      <div className="h-[100vh] invisible md:visible w-[10rem]  top-0 buttons pl-[calc(100vw/12)] z-[200] flex flex-col justify-center text-regular30 gap-[.67rem]">
        <button
          data-name="events"
          className="text-left tes-button capitalize user-eng text-2xl leading-relaxed"
        >
          {" "}
          Engagment

        </button>
        <button
          data-name="share homes"
          className="text-left tes-button capitalize conversion-rate text-2xl leading-relaxed opacity-50"
        >
          Conversion
        </button>
        <button
          data-name="cost splitting"
          className="text-left tes-button capitalize customer-exp text-2xl leading-relaxed opacity-50"
        >
          {" "}
          Experience
        </button>
        <button
          data-name="sync plans"
          className="text-left tes-button capitalize brand-img text-2xl leading-relaxed opacity-50"
        >
          Image
        </button>
      </div>
      <div className=" mt-[-100vh] h-screen  top-[0] px-[calc(100vw/12)] flex flex-row justify-center  md:justify-between items-center">
        <div className="h-[100vh] w-[7rem] buttons  flex-col justify-center text-regular30 gap-[.67rem] hidden md:flex"></div>
        <div
          className="frame-container w-[100vw] md:w-[calc((100vw/12)*8)] bg-red-gradient border-[.09rem] border-white md:pr-[0.4rem] h-[calc(13rem+49vh)] rounded-[2rem] flex justify-between"
          style={{
            backgroundImage: `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, rgb(106 106 106) 63.68%)`,
          }}
        >
          <div className="relative w-full md:w-[57%] h-full overflow-hidden flex justify-center">
            <div className="relative w-full lg:w-[57%] h-full overflow-hidden mx-[3vw] ">
              <div
                ref={statRef}
                className="tes-scroll-content w-full text-center md:text-start absolute flex flex-col gap-80 md:pl-[2.03rem] md:pr-[.2rem] top-[calc(((71vh-20.3rem)/2)*-1)]"
                style={{ transform: "translate(0px, 13%)" }}
              >
                <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
                  <h6 className="text-[2.64rem] leading-[1.27]  md:text-[2vw] tracking-wide font-sf-bold">
                    Increase User Engagement with Interactivity
                  </h6>
                  <h6 className="text-xl md:text-[1vw] tracking-wide xl:text-2xl font-inter ">
                    Websites with interactive elements see a 40% increase in
                    user time spent on site
                  </h6>

                  <h3 className="text-xl">Linearity</h3>

                  <div className="test-img-mask block md:hidden ">
                    <img
                      alt=""
                      loading="lazy"
                      className="w-[100%] origin-top   rounded-[1.25rem] object-cover"
                      src="./images/showcase/car_image.png"
                    />
                  </div>

                </div>
                <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
                  <h6 className="text-[2.64rem] leading-[1.27]  md:text-[2vw] tracking-wide font-sf-bold">
                    Transform Sales with 3D Product Configurations
                  </h6>
                  <h6 className="text-xl md:text-[1vw] tracking-wide xl:text-2xl font-inter">
                    3D product views can increase conversion rates by up to 250%
                  </h6>
                  <h3 className="text-xl">Shopify</h3>

                  <div className="test-img-mask block md:hidden ">
                    <img
                      alt=""
                      loading="lazy"
                      className="w-[100%] origin-top   rounded-[1.25rem] object-cover"
                      src="./images/showcase/soda_image.png"
                    />
                  </div>
                </div>
                <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
                  <h6 className="text-[2.64rem] leading-[1.27]  md:text-[2vw] tracking-wide font-sf-bold">
                    Avoid Losing Customers, Enhance User Experience
                  </h6>
                  <h6 className="text-xl md:text-[1vw] tracking-wide xl:text-2xl font-inter">
                    89% of consumers turn to a competitor after a poor user
                    experience
                  </h6>
                  <h3 className="text-xl">Linearity</h3>
                  <div className="test-img-mask block md:hidden ">
                    <img
                      alt=""
                      loading="lazy"
                      className="w-[100%] origin-top   rounded-[1.25rem] object-cover"
                      src="./images/showcase/vr_image.png"
                    />
                  </div>
                </div>
                <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
                  <h6 className="text-[2.64rem] leading-[1.27]  md:text-[2vw] tracking-wide font-sf-bold">
                    Get ahead of the curve.
                  </h6>
                  <h6 className="text-xl md:text-[1vw] tracking-wide xl:text-2xl font-inter">
                    A 3D website sets your brand apart from competitors by
                    offering a cutting-edge, modern online experience.
                  </h6>
                  <h3 className="text-xl">Dialedweb</h3>
                  <div className="test-img-mask block md:hidden ">
                    <img
                      alt=""
                      loading="lazy"
                      className="w-[100%] origin-top   rounded-[1.25rem] object-cover"
                      src="./images/showcase/player_image.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="images-container w-[43%] relative hidden md:block">
            <div
              className="test-img-mask"
              style={{ opacity: 1, display: "flex" }}
            >
              <img
                alt=""
                loading="lazy"
                width="800"
                height="1200"
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-[34rem] top-[50%] rounded-[1.25rem] object-cover image-1"
                style={{
                  transform:
                    "translate(0%, -50%) translate(0px, 1rem) scale(0.9, 0.9)",
                  opacity: 2.132,
                  zIndex: 4,
                }}
                src="./images/showcase/soda_image.png"
              />
            </div>
            <div
              className="test-img-mask"
            
            >
              <img
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-[34rem] top-[50%] rounded-[1.25rem] object-cover image-2"
                style={{
                  transform:
                    "translate(0%, -50%) translate(0px, 0.35rem) scale(0.8, 0.8)",
                  opacity: 1.558,
                  zIndex: 3,
                }}
                src="./images/showcase/car_image.png"
              />
            </div>
            <div
              className="test-img-mask"
             
            >
              <img
                alt=""
                loading="lazy"
                width="800"
                height="1200"
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-[34rem] top-[50%] rounded-[1.25rem] object-cover image-3"
                style={{
                  transform:
                    "translate(0%, -50%) translate(0px, -0.3rem) scale(0.7, 0.7)",
                 
                  zIndex: 2,
                }}
                src="./images/showcase/vr_image.png"
              />
            </div>
            <div className="test-img-mask">
              <img
                alt=""
                loading="lazy"
                width="800"
                height="1200"
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-[34rem] top-[50%] rounded-[1.25rem] object-cover image-4"
                style={{
                  transform:
                    "translate(0%, -50%) translate(0px, -0.95rem) scale(0.6, 0.6)",
              
                  zIndex: 1,
                }}
                src="./images/showcase/player_image.png"
              />
            </div>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
};

export default Page4;


{/* <Canvas id='canvas-webgl' className=' '>
  
<color attach="background" args={[0x000]} />

<Sparkles position={ [ 0, 0, 0 ] } scale={ [ 20, 20, 5 ] } size={ 4 } count={ 100 } color={ "#a09bcb" } far={ 10 } speed={ 1 } />


{/* <div ref={mouseEl} className='fixed bottom-12 z-20'>
<svg className="mouse" width="28" height="56" viewBox="0 0 24 48">
<rect x="1.5" y="1.5" width="21" height="45" rx="12" ry="12" stroke="#888" strokeWidth="2.5" fill="none" />
<circle className="scroll" cx="12" cy="15" r="3.5" fill="#888" />
<rect className="progress" x="1.5" y="1.5" width="21" height="45" rx="12" ry="12" stroke="#009eb7" strokeWidth="2.5" fill="none" />
</svg>
 {/* <span className=' relative inline-block mx-4 '> */}
{/* <span className='  text-dialed-purple'> */}
{/* Boost */}
{/* </span> */}



{/* <svg className="writing-home inline-block absolute w-40 align-middle" viewBox="0 0 402 175" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <mask id="mask0_3037_1594" style={{maskType : "alpha"}} className=' inline-block relative' maskUnits="userSpaceOnUse" x="-2" y="-1" width="406" height="178">
                                <path ref={writingRef} className='noAnimate' d="M370.756 20.9749C364.945 19.5222 300.488 5.11369 257.432 3.72385C233.073 2.93758 195.071 6.10648 195.071 6.10648C195.071 6.10648 115.555 16.5865 71.9481 41.0008C50.7538 52.8668 36.5698 58.3028 21.4506 77.3135C12.3748 88.7254 5.13503 95.474 3.29428 109.938C2.26982 117.988 2.31628 122.988 4.99644 130.648C8.63686 141.052 14.2823 145.582 22.8691 152.492C35.6281 162.761 46.0994 163.681 62.0188 167.528C76.9794 171.144 85.808 171.094 101.168 172.067C126.273 173.658 140.489 172.621 165.567 170.649C206.931 167.395 270.25 152.492 270.25 152.492C270.25 152.492 318.75 140.348 346.563 125.258C361.337 117.242 370.906 113.792 382.592 101.711C389.756 94.3053 395.662 90.4217 398.195 80.4341C399.857 73.8835 399.019 68.9134 396.099 62.8188C390.651 51.4498 385.685 48.4616 375.256 41.502C361.288 32.1812 350.971 29.9056 334.648 25.965C317.848 21.9093 290.676 20.9749 290.676 20.9749" stroke="black" strokeWidth="8"></path>
                                </mask>
                                <g mask="url(#mask0_3037_1594)" className=' inline-block relative'>
                                    <path  d="M236.395 0.741196V0.696274L245.97 0.696762V0.727036H249.419V0.803207H253.906V0.919907H258.341V1.03416H261.66V1.21678H265.986V1.43407H270.249V1.68456H274.446V1.96629H278.571V2.27684H282.622V2.61424H286.595V2.97655H290.486V3.46483H295.272V3.87694H298.975V4.30614H302.584V4.87498H307.037V5.46922H311.361V6.08495H315.549V6.71873H319.595V7.36717H323.495V8.02586H327.243V8.85008H331.673V9.68651H335.9V10.5288H339.918V11.3701H343.718V12.2046H347.294V13.207H351.361V14.3799H355.828V15.3428H359.277V16.6514H363.672V17.7217H367.027V22.7217H362.027V21.6514H358.672V20.3428H354.277V19.3799H350.828V18.207H346.361V17.2046H342.294V16.3701H338.718V15.5288H334.918V14.6865H330.9V13.8501H326.673V13.0259H322.243V12.3672H318.495V11.7187H314.595V11.0849H310.549V10.4692H306.361V9.87498H302.037V9.30614H297.584V8.87694H293.975V8.46483H290.272V7.97655H285.486V7.61424H281.595V7.27684H277.622V6.96629H273.571V6.68456H269.446V6.43407H265.249V6.21678H260.986V6.03416H256.66V5.91991H253.341V5.80321H248.906V5.72704H244.419V5.69676L236.78 5.69627V5.7412H233.226V5.80663H228.543V5.93553H224.935V6.06786H220.198V6.28661H216.547V6.48973H212.881V6.72508H208.087V7.08153H204.394V7.39354H200.692V7.74022H195.868V8.24413H192.156V8.67235H188.442V9.1367H183.614V9.79686H179.904V10.3476H176.199V10.9365H171.394V11.7607H167.708V12.4394H163.773V13.2095H158.843V14.2324H155.486V14.9614H150.75V16.0395H147.552V16.7983H143.01V17.9238H138.574V19.0762H135.622V19.8716H131.38V21.0605H127.245V22.2695H123.216V23.4971H119.294V24.7402H115.478V25.998H111.768V27.2666H106.929V28.9956H103.451V30.2895H100.078V31.5874H95.6395V33.3652H92.4962V34.6719H88.3314V36.4702H84.3152V38.2793H80.4468V40.0947H76.7259V41.9126H73.1509V43.7295H69.7213V45.5415H66.4356V47.3442H62.3477V49.6875H59.3709V51.4663H55.6436V53.7905H52.1087V56.1011H48.7635V58.3921H45.6055V60.6572H41.8668V63.4848H38.3726V66.2851H35.8145V68.4443H32.762V71.1611H29.3138V74.4424H26.7479V77.0522H23.846V80.2168H21.2232V83.31H18.4031V86.9516H16.3414V89.875H14.138V93.3306H11.9097V97.3139H10.0604V101.184H8.56622V104.933H7.40118V108.562H6.41754V112.697H5.81818V116.716H5.5816V120.078H5.74811V124.724H6.44806V128.271H7.42975V132.209H9.04742V135.994H11.1885V139.169H13.4864V142.284H16.2508V144.895H19.0096V147.475H22.1954V150.008H25.8343V152.102H29.285V154.152H33.1251V155.811H36.619V157.434H40.4341V159.005H44.5743V160.238H48.1868V161.433H52.056V162.579H56.1819V163.444H59.618V164.485H64.2217V165.265H68.0745V166H72.1197V166.685H76.355V167.171H79.7042V167.758H84.2877V168.166H87.9351V168.639H92.8568V168.958H96.7933V169.233H100.861V169.462H105.057V169.644H109.38V169.745H112.596V169.838H117.147V169.876H120.323V169.87H123.914V169.832H128.894V169.727H132.661V169.609H136.506V169.458H140.429V169.269H144.426V169.042H148.498V168.778H152.641V168.474H156.854V168.129H161.135V167.743H165.482V167.315H169.895V166.845H174.369V166.331H177.463V165.955H182.049V165.365H186.692V164.729H189.924V164.265H192.079V164.19H195.402V163.437H198.663V162.925H203.347V162.168H206.535V161.64H211.128V160.857H215.669V160.06H218.736V159.507H223.178V158.686H227.564V157.85H231.891V157.001H236.159V156.141H238.996V155.555H243.151V154.677H247.243V153.788H251.27V152.889H255.23V151.981H259.122V151.064H262.079V150.19H264.242V149.822H267.981V148.887H271.648V147.946H275.241V147.001H280V145.711H283.427V144.756H287.987V143.447H291.243V142.486H295.597V141.163H299.836V139.832H303.959V138.495H307.962V137.154H311.846V135.811H315.608V134.467H319.246V133.126H322.76V131.79H327.167V130.05H330.406V128.725H334.491V126.991H338.4V125.262H342.131V123.541H345.683V121.834H349.056V120.145H353.089V118.025H356.885V115.921H360.442V113.84H363.762V111.79H367.553V109.296H370.373V107.324H374.231V104.422H377.129V102.062H380.291V99.2602H383.099V96.5244H386.022V93.3447H388.534V90.2422H391.005V86.6875H393.017V83.209H394.828V79.248H396.12V75.1059H396.665V72.0405H396.507V68.0039H395.61V63.9878H393.963V60.7388H392.056V57.4209H389.547V54.4267H386.77V51.3955H383.424V49.0459H380.436V46.6728H377.037V44.6216H373.766V42.5718H370.158V40.5434H366.219V38.8354H362.587V37.1562H358.701V35.7754H355.244V34.1777H350.902V32.874H347.053V31.6167H343.034V30.6201H339.601V29.4629H335.287V28.5547H331.608V27.5229H327.039V26.7236H323.152V25.9795H319.179V25.2939H315.13V24.6709H311.014V24.1128H306.84V23.623H302.617V23.2798H299.193V22.9189H294.905V22.749H292.482V17.749H297.482V17.9189H299.905V18.2798H304.193V18.623H307.617V19.1128H311.84V19.6709H316.014V20.2939H320.13V20.9795H324.179V21.7236H328.152V22.5229H332.039V23.5547H336.608V24.4629H340.287V25.6201H344.601V26.6167H348.034V27.874H352.053V29.1777H355.902V30.7754H360.244V32.1562H363.701V33.8354H367.587V35.5434H371.219V37.5718H375.158V39.6216H378.766V41.6728H382.037V44.0459H385.436V46.3955H388.424V49.4267H391.77V52.4209H394.547V55.7388H397.056V58.9878H398.963V63.0039H400.61V67.0405H401.507V71.1865H401.665V76.1865H401.12V80.1059H399.828V84.248H398.017V88.209H396.005V91.6875H393.534V95.2422H391.022V98.3447H388.099V101.524H385.291V104.26H382.129V107.062H379.231V109.422H375.373V112.324H372.553V114.296H368.762V116.79H365.442V118.84H361.885V120.921H358.089V123.025H354.056V125.145H350.683V126.834H347.131V128.541H343.4V130.262H339.491V131.991H335.406V133.725H332.167V135.05H327.76V136.79H324.246V138.126H320.608V139.467H316.846V140.811H312.962V142.154H308.959V143.495H304.836V144.832H300.597V146.163H296.243V147.486H292.987V148.447H288.427V149.756H285V150.711H280.241V152.001H276.648V152.946H272.981V153.887H269.242V154.822H267.079V155.19H264.122V156.064H260.23V156.981H256.27V157.889H252.243V158.788H248.151V159.677H243.996V160.555H241.159V161.141H236.891V162.001H232.564V162.85H228.178V163.686H223.736V164.507H220.669V165.06H216.128V165.857H211.535V166.64H208.347V167.168H203.663V167.925H200.402V168.437H197.079V169.19H194.924V169.265H191.692V169.729H187.049V170.365H182.463V170.955H179.369V171.331H174.895V171.845H170.482V172.315H166.135V172.743H161.854V173.129H157.641V173.474H153.498V173.778H149.426V174.042H145.429V174.269H141.506V174.458H137.661V174.609H133.894V174.727H128.914V174.832H125.323V174.87H121.816V174.876H116.816V174.838H112.147V174.745H107.596V174.644H104.38V174.462H100.057V174.233H95.8609V173.958H91.7933V173.639H87.8568V173.166H82.9351V172.758H79.2877V172.171H74.7042V171.685H71.355V171H67.1197V170.265H63.0745V169.485H59.2217V168.444H54.618V167.579H51.1819V166.433H47.056V165.238H43.1868V164.005H39.5743V162.434H35.4341V160.811H31.619V159.152H28.1251V157.102H24.285V155.008H20.8343V152.475H17.1954V149.895H14.0096V147.284H11.2508V144.169H8.48639V140.994H6.18854V137.209H4.04742V133.271H2.42975V129.724H1.44806V125.078H0.748108V120.633H0.581604V115.633H0.818176V111.716H1.41754V107.697H2.40118V103.562H3.56622V99.9331H5.06036V96.1836H6.90973V92.3139H9.138V88.3306H11.3414V84.875H13.4031V81.9516H16.2232V78.31H18.846V75.2168H21.7479V72.0522H24.3138V69.4424H27.762V66.1611H30.8145V63.4443H33.3726V61.2851H36.8668V58.4848H40.6055V55.6572H43.7635V53.3921H47.1087V51.1011H50.6436V48.7905H54.3709V46.4663H57.3477V44.6875H61.4356V42.3442H64.7213V40.5415H68.1509V38.7295H71.7259V36.9126H75.4468V35.0947H79.3152V33.2793H83.3314V31.4702H87.4962V29.6719H90.6395V28.3652H95.0779V26.5874H98.4507V25.2895H101.929V23.9956H106.768V22.2666H110.478V20.998H114.294V19.7402H118.216V18.4971H122.245V17.2695H126.38V16.0605H130.622V14.8716H133.574V14.0762H138.01V12.9238H142.552V11.7983H145.75V11.0395H150.486V9.96141H153.843V9.23241H158.773V8.20946H162.708V7.43944H166.394V6.76073H171.199V5.93651H174.904V5.34764H178.614V4.79686H183.442V4.1367H187.156V3.67235H190.868V3.24413H195.692V2.74022H199.394V2.39354H203.087V2.08153H207.881V1.72508H211.547V1.48973H215.198V1.28661H219.935V1.06786H223.543V0.935532H228.226V0.806625H231.78V0.741196H236.395Z" fill="#00E5FF"></path>
                                </g>
                            </svg> 



   </span>  
// </Canvas> */}








import React, { useRef, useState, useEffect } from 'react';
import ReactOdometer from 'react-odometerjs';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Page3 = () => {
    const [value, setValue] = useState(100000);

    const meterContainer = useRef(null);
    const parent = useRef(null);

    useEffect(() => {
        if ( meterContainer.current) {
            // GSAP Timeline Configuration
            const tl = gsap.timeline({
                ease: "power0",
                scrollTrigger: {
                    trigger: ".parent-web-stats",
                    start: " top top",
                    end: `+=${2 * window.innerHeight}`,
                    scrub: true,
                    pin: true,
                    pinReparent : true,
                    pinSpacing : true,
                    // markers: true,
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
                    <div className=" absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stand-out font-sf-bold leading-tight text-[#fefeff] text-center text-[7vw] md:text-[5vw]">
                        Approximately 252000 <p>new websites are created</p> every day
                    </div>
                    </div>

                    {/* Makes Your Standout Text */}
                    <div className='w-screen h-screen'>

                    <div className="make-your opacity-0 absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stand-out font-sf-bold leading-tight text-[#fefeff] text-center text-[7vw] md:text-[5vw]">
                        How do you make yours <p>stand out?</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
