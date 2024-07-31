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


  const handleResize = () => {
    ScrollTrigger.refresh();
  };

  window.addEventListener('resize', handleResize);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };

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
          className="frame-container w-[100vw] md:w-[calc((100vw/12)*8)] bg-red-gradient border-[.09rem] border-white md:pr-[0.4rem] h-[calc(13rem+49vh)] rounded-[3rem] flex justify-between"
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
                  <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-6xl">
                    Increase User Engagement with Interactivity
                  </h6>
                  <h6 className="text-[4vw] md:text-xl xl:text-2xl">
                    Websites with interactive elements see a 40% increase in
                    user time spent on site
                  </h6>

                  <div className="test-img-mask block md:hidden ">
                    <img
                      alt=""
                      loading="lazy"
                      className="w-[100%] origin-top   rounded-[3rem] object-cover"
                      src="./images/showcase/car_image.png"
                    />
                  </div>

                </div>
                <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
                  <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-6xl">
                    Transform Sales with 3D Product Configurations
                  </h6>
                  <h6 className="text-[4vw] md:text-xl xl:text-2xl">
                    3D product views can increase conversion rates by up to 250%
                  </h6>
                  <div className="test-img-mask block md:hidden ">
                    <img
                      alt=""
                      loading="lazy"
                      className="w-[100%] origin-top   rounded-[3rem] object-cover"
                      src="./images/showcase/soda_image.png"
                    />
                  </div>
                </div>
                <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
                  <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-6xl">
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
                      className="w-[100%] origin-top   rounded-[3rem] object-cover"
                      src="./images/showcase/vr_image.png"
                    />
                  </div>
                </div>
                <div className="min-h-[15.6rem] tes-content h-screen gap-[3rem] flex flex-col justify-center">
                  <h6 className="text-[1.64rem] leading-[1.27]  md:text-3xl xl:text-6xl">
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
                      className="w-[100%] origin-top   rounded-[3rem] object-cover"
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
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-[34rem] top-[50%] rounded-[2rem] object-cover image-1"
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
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-[34rem] top-[50%] rounded-[2rem] object-cover image-2"
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
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-[34rem] top-[50%] rounded-[2rem] object-cover image-3"
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
                className="w-[100%] origin-top absolute h-[16.8rem] lg:h-[34rem] top-[50%] rounded-[2rem] object-cover image-4"
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
