import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import Skeleton from '../Skeleton'
import Model from './Model'

const RoomModal = () => {

  return (
   <Canvas>
         <ambientLight />
         <OrbitControls /> 
         <Suspense fallback={Skeleton}>
            <Model />
         </Suspense>
         <Environment preset='sunset' />
   </Canvas>
  )
}

export default RoomModal
