import React, { useRef } from 'react'
import Page1 from './StickyPages/Page1'
import Page2 from './StickyPages/Page2'
import Page3 from './StickyPages/Page3'
import Page4 from './StickyPages/Page4'

const FourthSection = () => {

const section1 = useRef()

  return (
  <>
<div className='relative '>
<Page1/>


<div className=' relative'>

<Page2/>
<Page3/>
<Page4/>
</div>
</div>



  </>
  )
}

export default FourthSection
