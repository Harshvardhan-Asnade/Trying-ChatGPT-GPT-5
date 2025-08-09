import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Graph from './components/Graph'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen text-slate-100 antialiased">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <Features />
        <Graph />
      </main>
      <Footer />
    </div>
  )
}
