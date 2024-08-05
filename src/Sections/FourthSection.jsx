import React, { useEffect, useRef } from 'react'
import Page3 from './StickyPages/Page3'
import Page4 from './StickyPages/Page4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const FourthSection = () => {

  return (

    <>

{/* <div className=' flex flex-col-reverse md:flex-col'> */}

  <Page3 />
      <Page4 />
{/* </div> */}
</>
  )
}

export default FourthSection;
