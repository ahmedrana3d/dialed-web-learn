import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);


const Page4 = () => {

const statRef = useRef()

useGSAP(() => {
  if (statRef.current) {
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
        trigger: ".testimonials",
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        markers: true,
        onUpdate: (self) => {
          const scrollY = parseFloat(self.progress.toFixed(2));

          // Trigger animations when scrolling down
          if (scrollY >= 0.66 && !animationsTriggered.animation5) {
            highlightButton('brand-img');
            changeBackground('rgb(19 37 26)');
            animationsTriggered.animation5 = true;
            animateImage(".image-3", 0.9, "2rem", 0, 0.3);
            animateImage(".image-4", 0.9, "1rem", 2.132, 0.5);
          } else if (scrollY >= 0.4 && !animationsTriggered.animation4) {
            highlightButton('customer-exp');
            changeBackground('rgb(19 32 37)');
            animationsTriggered.animation4 = true;
            animateImage(".image-2", 0.9, "2rem", 0, 0.3);
            animateImage(".image-3", 0.9, "1rem", 2.132, 0.5);
            animateImage(".image-4", 0.8, "0.35rem", 1.558, 0.5);
          } else if (scrollY >= 0.31 && !animationsTriggered.animation3) {
            highlightButton('conversion-rate');
            animationsTriggered.animation3 = true;
          } else if (scrollY >= 0.09 && !animationsTriggered.animation2) {
            changeBackground('rgb(58 43 43)');
            highlightButton('conversion-rate');
            animationsTriggered.animation2 = true;
            animateImage(".image-1", 0.9, "2.2rem", 0, 0.3);
            animateImage(".image-2", 0.9, "1rem", 2.132, 0.5);
            animateImage(".image-3", 0.8, "0.35rem", 1.558, 0.5);
            animateImage(".image-4", 0.72, "-0.3rem", 0.984, 0.5);
          } else if (scrollY >= 0.03 && !animationsTriggered.animation1) {
            changeBackground('rgb(106, 106, 106)');
            highlightButton('user-eng');
            animationsTriggered.animation1 = true;
          }

          // Reset animations when scrolling up
          if (scrollY < 0.03 && animationsTriggered.animation1) {
            changeBackground('rgb(106, 106, 106)');
            reverseHighlightButton('user-eng');
            animationsTriggered.animation1 = false;
            reverseAnimateImage(".image-1", 0.9, "1rem", 2.132, 0.3);
            reverseAnimateImage(".image-2", 0.8, "0.35rem", 1.558, 0.5);
            reverseAnimateImage(".image-3", 0.72, "-0.3rem", 0.984, 0.5);
            reverseAnimateImage(".image-4", 0.67, "-0.95rem", 0.41, 0.5);
          } else if (scrollY < 0.19 && animationsTriggered.animation2) {
            reverseHighlightButton('conversion-rate');
            changeBackground('rgb(58 43 43)');
            animationsTriggered.animation2 = false;
            reverseAnimateImage(".image-1", 0.9, "2.2rem", 0, 0.3);
            reverseAnimateImage(".image-2", 0.9, "1rem", 2.132, 0.5);
            reverseAnimateImage(".image-3", 0.8, "0.35rem", 1.558, 0.5);
            reverseAnimateImage(".image-4", 0.72, "-0.3rem", 0.984, 0.5);
          } else if (scrollY < 0.34 && animationsTriggered.animation3) {
            reverseHighlightButton('conversion-rate');
            changeBackground('rgb(58 43 43)');
            animationsTriggered.animation3 = false;
            reverseAnimateImage(".image-1", 0.9, "2.2rem", 0, 0.3);
            reverseAnimateImage(".image-2", 0.9, "1rem", 2.132, 0.5);
            reverseAnimateImage(".image-3", 0.8, "0.35rem", 1.558, 0.5);
            reverseAnimateImage(".image-4", 0.72, "-0.3rem", 0.984, 0.5);
          } else if (scrollY < 0.56 && animationsTriggered.animation4) {
            changeBackground('rgb(19 32 37)');
            reverseHighlightButton('customer-exp');
            animationsTriggered.animation4 = false;
            reverseAnimateImage(".image-2", 0.9, "2rem", 0, 0.3);
            reverseAnimateImage(".image-3", 0.9, "1rem", 2.132, 0.5);
            reverseAnimateImage(".image-4", 0.8, "0.35rem", 1.558, 0.5);
          } else if (scrollY < 0.72 && animationsTriggered.animation5) {
            reverseHighlightButton('brand-img');
            changeBackground('rgb(19 37 26)');
            animationsTriggered.animation5 = false;
            reverseAnimateImage(".image-3", 0.9, "2rem", 0, 0.3);
            reverseAnimateImage(".image-4", 0.9, "1rem", 2.132, 0.5);
          }

        },

      },
    });

    animateText(".stand-out")

    tl.fromTo(
      statRef.current,
      {
        translateY: '0%',
      },
      {
        translateY: '-86%',
      }
    );

    function highlightButton(buttonClass) {
      gsap.to(`.tes-button.${buttonClass}`, { opacity: 1, fontWeight: 500 });
      gsap.to(`.tes-button:not(.${buttonClass})`, { opacity: 0.5, fontWeight: 400 });
    }

    function reverseHighlightButton(buttonClass) {
      highlightButton(buttonClass);
    }

    function changeBackground(color) {
      const linearGradient = `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, ${color} 63.68%)`;
      gsap.to(".frame-container", {
        backgroundImage: linearGradient,
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
      rotationX: 70
    });

    let mySplitText = new SplitText(element, { type: "chars" });
    let chars = mySplitText.chars;

    gsap.fromTo(
      element,
      {
        rotationX: 70,
        opacity: 0
      },
      {
        rotationX: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reset"
        }
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
        toggleActions: "play none none reset"
      }
    });

    gsap.fromTo(
      element,
      {
        opacity: 0
      },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
          toggleActions: "play reverse play reverse"
        }
      }
    );

    gsap.fromTo(
      element,
      {
        opacity: 1
      },
      {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 20%",
          end: "top 5%",
          scrub: true,
          toggleActions: "play reverse play reverse"
        }
      }
    );
  });
}




  return (
    <section className=" z-20 testimonials text-gray-200 h-[600vh] relative">

<div   className='stand-out font-sf-bold  leading-tight text-[#fefeff]  text-center text-[7vw] md:text-[5vw]'>
                    How do you make yours <p>
                    stand out? </p> 
                </div>

<div className='trigger w-20 h-20  z-50 absolute top-28 '></div>
<div className='trigger1 w-20 h-20  z-50 absolute bottom-28 '></div>



    <div className="h-[100vh] invisible md:visible w-[10rem] sticky top-0 buttons pl-[calc(100vw/12)] z-[200] flex flex-col justify-center text-regular30 gap-[.67rem]">
      <button data-name="events" className="text-left tes-button capitalize user-eng text-2xl leading-relaxed"> Engagment</button>
      <button data-name="share homes" className="text-left tes-button capitalize conversion-rate text-2xl leading-relaxed opacity-50" >Conversion</button>
      <button data-name="cost splitting" className="text-left tes-button capitalize customer-exp text-2xl leading-relaxed opacity-50" > Experience</button>
      <button data-name="sync plans" className="text-left tes-button capitalize brand-img text-2xl leading-relaxed opacity-50" >Image</button>
    </div>
    <div className=" mt-[-100vh] h-screen sticky top-[0] px-[calc(100vw/12)] flex flex-row justify-center  md:justify-between items-center">
      <div className="h-[100vh] w-[7rem] buttons  flex-col justify-center text-regular30 gap-[.67rem] hidden md:flex"></div>
      <div className="frame-container w-[100vw] md:w-[calc((100vw/12)*8)] bg-red-gradient border-[.09rem] border-white md:pr-[0.4rem] h-[calc(13rem+49vh)] rounded-[2rem] flex justify-between" style={{     backgroundImage: `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, rgb(106 106 106) 63.68%)` }}>
        <div className="relative w-full md:w-[57%] h-full overflow-hidden flex justify-center">
        <div className="relative w-full lg:w-[57%] h-full overflow-hidden mx-[3vw] ">
        <div ref={statRef} className="tes-scroll-content w-full text-center md:text-start absolute flex flex-col gap-80 md:pl-[2.03rem] md:pr-[.2rem] top-[calc(((71vh-20.3rem)/2)*-1)]" style={{ transform: 'translate(0px, 13%)' }}>
   
          <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
            <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">Increase User Engagement with Interactivity</h6>
            <h6 className="text-[4vw] md:text-xl xl:text-2xl">Websites with interactive elements see a 40% increase in user time spent on site</h6>
            
          </div>
          <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
            <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">Transform Sales with 3D Product Configurations</h6>
            <h6 className="text-[4vw] md:text-xl xl:text-2xl">3D product views can increase conversion rates by up to 250%</h6>
            <div className="test-img-mask block md:hidden ">
            <img alt="" loading="lazy"  className="w-[100%] origin-top   rounded-[1.25rem] object-cover"  src="./images/showcase/soda_image.png" />
          </div>
          </div>
          <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
            <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">Drive Conversions with Product Customization Tools</h6>
            <h6 className="text-[4vw] md:text-xl xl:text-2xl">Interactive Product Customizers can lead to a 30% increase in sales</h6>
          </div>
          <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
            <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">Avoid Losing Customers, Enhance User Experience</h6>
            <h6 className="text-[4vw] md:text-xl xl:text-2xl">89% of consumers turn to a competitor after a poor user experience</h6>
            <div className="test-img-mask block md:hidden ">
            <img alt="" loading="lazy"  className="w-[100%] origin-top   rounded-[1.25rem] object-cover"  src="./images/showcase/vr_image.png" />
          </div>
          </div>
          <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
            <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-5xl">Get ahead of the curve.</h6>
            <h6 className="text-[4vw] md:text-xl xl:text-2xl">A 3D website sets your brand apart from competitors by offering a cutting-edge, modern online experience.</h6>
            <div className="test-img-mask block md:hidden ">
            <img alt="" loading="lazy"  className="w-[100%] origin-top   rounded-[1.25rem] object-cover"  src="./images/showcase/player_image.png" />
          </div>
          </div>
        </div>
      </div>
        </div>
        <div className="images-container w-[43%] relative hidden md:block">
          <div className="test-img-mask" style={{ opacity: 1, display: 'flex' }}>
            <img alt="" loading="lazy" width="800" height="1200" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-1" style={{ transform: 'translate(0%, -50%) translate(0px, 1rem) scale(0.9, 0.9)', opacity: 2.132, zIndex: 4 }} src="./images/showcase/car_image.png" />
          </div>
          <div className="test-img-mask" style={{ opacity: 1, display: 'flex' }}>
            <img alt="" loading="lazy" width="1000" height="1000" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-2" style={{ transform: 'translate(0%, -50%) translate(0px, 0.35rem) scale(0.8, 0.8)', opacity: 1.558, zIndex: 3 }} src="./images/showcase/soda_image.png" />
          </div>
          <div className="test-img-mask" style={{ opacity: 1, display: 'flex' }}>
            <img alt="" loading="lazy" width="800" height="1200" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-3" style={{ transform: 'translate(0%, -50%) translate(0px, -0.3rem) scale(0.7286, 0.7286)', opacity: 0.984, zIndex: 2 }} src="./images/showcase/vr_image.png" />
          </div>
          <div className="test-img-mask">
            <img alt="" loading="lazy" width="800" height="1200" className="w-[100%] origin-top absolute h-[16.8rem] lg:h-96 top-[50%] rounded-[1.25rem] object-cover image-4" style={{ transform: 'translate(0%, -50%) translate(0px, -0.95rem) scale(0.675, 0.675)', opacity: 0.41, zIndex: 1 }} src="./images/showcase/player_image.png" />
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
