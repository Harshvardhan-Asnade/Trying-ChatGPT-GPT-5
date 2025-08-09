import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Float, PresentationControls, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'

function FloatingModel(){
  return (
    <Float floatIntensity={1.2} speed={1}>
      <mesh castShadow position={[0,0,0]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial metalness={0.6} roughness={0.2} color={'#7c3aed'} />
      </mesh>
    </Float>
  )
}

export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center py-16">
      <div>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold leading-tight">
          Eye-catching <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400">3D</span> interactions for the web
        </motion.h1>
        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.15}} className="mt-4 text-slate-300">
          Built with React, Three.js (react-three-fiber), Framer Motion and Tailwind. Interactive canvas, parallax and performant animations.
        </motion.p>
        <div className="mt-6 flex gap-4">
          <button className="px-5 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold">Try Demo</button>
          <button className="px-5 py-3 rounded-md border border-slate-700">Learn more</button>
        </div>
      </div>

      <div className="w-full h-80 md:h-96 rounded-xl bg-slate-900/40 border border-slate-700 p-2">
        <Canvas shadows camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5,5,5]} intensity={1} />
          <Suspense fallback={null}>
            <PresentationControls global polar={[-0.2,0.2]} azimuth={[-0.2,0.2]} config={{mass:2, tension:400}}>
              <FloatingModel />
            </PresentationControls>
            <ContactShadows position={[0,-1.5,0]} opacity={0.6} scale={6} blur={2} />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
      </div>
    </section>
  )
}
