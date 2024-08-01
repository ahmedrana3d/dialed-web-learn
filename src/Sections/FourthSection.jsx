import React, { useEffect, useRef } from 'react'
import Page1 from './StickyPages/Page1'
import Page2 from './StickyPages/Page2'
import Page3 from './StickyPages/Page3'
import Page4 from './StickyPages/Page4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const FourthSection = () => {

  return (

<>
  <Page3 />

      <Page4 />
</>
  )
}

export default FourthSection;
