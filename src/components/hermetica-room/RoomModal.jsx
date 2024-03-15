import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import Model from './Model'

const RoomModal = () => {

  return (
   <>
   <Canvas>
         <ambientLight />
         <OrbitControls /> 
            <Model />
         <Environment preset='sunset' />
   </Canvas>
   </>
  )
}

export default RoomModal
