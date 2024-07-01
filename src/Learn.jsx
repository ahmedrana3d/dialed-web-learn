import React from 'react'
import FirstSection from './Sections/FirstSection'
import SecondSection from './Sections/SecondSection'
import ThirdSection from './Sections/ThirdSection'
import FourthSection from './Sections/FourthSection'
import { GlobalCanvas } from '@14islands/r3f-scroll-rig'

const Learn = () => {
  return (
    <div >

<GlobalCanvas camera={{ position: [0, 0, 5],  fov: 50}}>
  <ambientLight/>
 </GlobalCanvas>
      
<FirstSection/>
<SecondSection/>
<ThirdSection/>
<FourthSection/>

</div>
  )
}

export default Learn
