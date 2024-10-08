import React from 'react'
import Learn from './Learn'
import './App.css'
import ReactLenis from 'lenis/react'
const App = () => {
  return (
    <div>
      <ReactLenis root options={{lerp : 0.15,}}>
      <Learn/>
      </ReactLenis>
    </div>
  )
}

export default App
