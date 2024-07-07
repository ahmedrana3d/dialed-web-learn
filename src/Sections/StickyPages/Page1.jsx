import { Environment, OrbitControls, Sparkles, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import Monitor from '../../Components/Models/Monitor'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ChessBoard from '../../Components/Models/ChessBoard'
import { useControls } from 'leva'
import { min } from 'three/examples/jsm/nodes/Nodes.js'


gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {

// const pos = useControls("Chess Board" , {
// x : { min : -5, max : 5 , value :-1.5},
// y : { min : -5, max : 5 , value : 1.4},
// z : { min : -5, max : 5 , value :0},
// })



  

const headText = useRef()
const descText = useRef()


const headText2 = useRef()
const descText2 = useRef()

const monitorRef = useRef()
const chessRef = useRef()
  useGSAP(() => {
    if (headText.current && descText.current ) {
      // Initialize SplitText instances
      const split = new SplitText(headText.current, { type: 'words, chars' });
      const split2 = new SplitText(descText.current, { type: 'words, chars' });
      const split3 = new SplitText(descText2.current, { type: 'words, chars' });

      
      // Get the path length for the progress animation
      const path = document.querySelector('.progress');
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      // Define the GSAP timeline
      const tl = gsap.timeline();

    //   tl.fromTo(split2.chars, { 
    //     'will-change': 'opacity, transform', 
    //     opacity: 0, 
    //     rotationY: 180,
    //     xPercent: -40,
    //     yPercent: 100
    // },
    // {
    //     ease: 'power4.inOut()',
    //     opacity: 1,
    //     rotationY: 0,
    //     xPercent: 0,
    //     yPercent: 0,
    //     stagger: {
    //         each: -0.03,
    //         from: 0
    //     },
    //     scrollTrigger: {
    //         trigger: descText.current,
    //         start: 'center+=20% bottom',
    //         end: '+=70%',
    //         scrub: true,
      
    //         onUpdate: (e) => {
    //           headText.current.innerText = `${Math.round(e.progress * 90)}%`;
    //         }
          
    //     },
    // });
    




    
      tl.fromTo(split2.chars, { 
        'will-change': 'opacity, transform', 
        opacity: 0, 
        rotationY: 180,
        xPercent: -40,
        yPercent: 100
    },
    {
        ease: 'power4.inOut()',
        opacity: 1,
        rotationY: 0,
        xPercent: 0,
        yPercent: 0,
        stagger: {
            each: -0.03,
            from: 0
        },
        scrollTrigger: {
            trigger: descText.current,
            start: 'center+=20% bottom',
            end: '+=70%',
            scrub: true,
          
            onUpdate: (e) => {
              headText.current.innerText = `${Math.round(e.progress * 90)}%`;
              monitorRef.current.scale.set(e.progress,e.progress,e.progress)
            },

           
          
        },
    });
    

  // Add the final animation to remove elements in a cool way
  tl.to([headText.current, descText.current], {
    opacity: 0,
    y: -50,
    scale : 0.7,
    duration: 1,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: descText.current,
      start: '+=70%',
      end : '+=25%',
      scrub: true,
      // markers : true,
      onUpdate : (e)=>{
        monitorRef.current.scale.set(
          1 - e.progress,
          1 - e.progress,
          1 - e.progress
        );
      }
    },
  });





    


//   tl.fromTo(split3.chars, { 
//     'will-change': 'opacity, transform', 
//     opacity: 0, 
//     rotationY: 180,
//     xPercent: -40,
//     yPercent: 100
// },
// {
//     ease: 'power4.inOut()',
//     opacity: 1,
//     rotationY: 0,
//     xPercent: 0,
//     yPercent: 0,
//     stagger: {
//         each: -0.03,
//         from: 0
//     },
//     scrollTrigger: {
//         trigger: descText2.current,
//         start: 'center+=100% bottom',
//         end: '+=70%',
//         scrub: true,
//       markers : true,
//         onUpdate: (e) => {
//           headText2.current.innerText = `${Math.round(e.progress * 89)}%`;
//           chessRef.current.scale.set(e.progress,e.progress,e.progress)
        
//         },

       
      
//     },
// });







      // Clean up SplitText instances
      return () => {
        split.revert();
        split2.revert();
      };
    }
  }, []);







  return (
    <section className='z-10 relative w-screen h-[300vh] bg-black'>
  <div className='h-screen flex justify-start items-center flex-col sticky top-0'>
  <div className='text-center absolute z-10 md:top-4 opacity-1'>
      <div ref={headText} className=' font-horizon horizon  bg-gradient-to-t to-[#8BF5A5] via-[#51d378] from-[#5afa98] bg-clip-text text-transparent text-huge-xl'>0%</div>
      <p ref={descText} className=' md:text-4xl lg:text-4xl xl:text-5xl  font-sf-bold  text-[#fcfeea]  '>
        of users cite poor design as a primary reason for not <span className=' font-bold font-sf-pro text-red-500'>trusting</span> a website
      </p>
    </div>

    {/* <div className='text-center opacity-0 absolute left-0 z-10 md:top-96 opacity-1 flex flex-col justify-start gap-12 items-start'>


  <div ref={headText2} className='  text-[20rem] font-horizon horizon bg-gradient-to-t to-[#8BF5A5] via-[#51d378] from-[#5afa98] bg-clip-text text-transparent '>
    89%
  </div>
 
    <p ref={descText2} className='md:text-4xl lg:text-4xl xl:text-7xl text-center  font-sf-bold text-[#fcfeea]'>
    of consumers turn to a competitor after a  <span className='font-bold font-sf-pro text-red-500'>poor</span> user experience
    </p>
  

</div> */}




    <div className='w-full h-full'>
      <Canvas className='!w-[100%] !h-[100vh]'
       camera={{ fov: 45, near: 0.1, far: 1000, position : [0 , 0 , 11] }}
      >
        {/* <color attach="background" args={[0x040316]} /> */}
        <Sparkles
          position={[0, 0, 0]}
          scale={[30, 30, 8]}
          size={8}
          count={100}
          color={"#a09bcb"}
          far={10}
          speed={1}
        />
        <group ref={monitorRef} scale={0}  position={[0,-1,0]}>
          <Monitor />
        </group>

{/* <group
rotation={[0.54,0.880,0]}
position={[pos.x , pos.y ,pos.z]}
scale={[0,0,0]}
ref={chessRef}
visible={false}
>

<ChessBoard/>

</group> */}
        <Environment preset="city" />
        <ambientLight intensity={Math.PI / 2} />
      </Canvas>
    </div>
  </div>
</section>

  
  )
}

export default Page1
