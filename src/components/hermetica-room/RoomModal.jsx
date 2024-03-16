import React from 'react'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Loader } from '@react-three/drei'
import { GLTFLoader } from 'three-stdlib'

import Model from './Model'

const RoomModal = () => {
   // const loader = new GLTFLoader()
   // loader.load('/Public/model.glb', function ())

  return (
   <>
   <Canvas className='m-0 p-16 scale-125 sm:-translate-x-20'>
         <ambientLight />
         <OrbitControls /> 
            <Model />
         <Environment preset='sunset' />
   </Canvas>
   </>
  )
}

export default RoomModal
