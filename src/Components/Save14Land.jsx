import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GlobalCanvas, ScrollScene, SmoothScrollbar, UseCanvas } from '@14islands/r3f-scroll-rig'
import { GradientTexture, MeshDistortMaterial } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)
const el = useRef()
  return (
    <>
 <GlobalCanvas>
  <ambientLight/>
 </GlobalCanvas>



 
 <SmoothScrollbar />

 <div ref={el} className=' absolute top-1/2 left-1/2 translate-x-[-50%] h-80 w-80'>Track me!</div>
      {/* <UseCanvas>
        <ScrollScene track={el}>
          {(props) => (
            <mesh {...props} position={[0, -50, 0]} scale={[1,1,1]}>
              <planeGeometry />
              <MeshDistortMaterial speed={5} distort={0.2}>
                <GradientTexture
                  stops={[0, 1]} // As many stops as you want
                  colors={['magenta', 'turquoise']} // Colors need to match the number of stops
                  rotation={0.5}
                />
              </MeshDistortMaterial>
            </mesh>
          )}
        </ScrollScene>
      </UseCanvas> */}
    </>
  )
}




export default App
