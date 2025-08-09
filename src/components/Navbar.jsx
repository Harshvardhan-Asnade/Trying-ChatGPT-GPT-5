import React, {useState} from 'react'
export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-white">3D</div>
          <div className="text-lg font-semibold">Modern3D</div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm text-slate-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#graph" className="hover:text-white">Graph</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <button className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-pink-500 text-white">Get Started</button>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-100">
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {open && <div className="md:hidden bg-slate-800 p-4 text-slate-200">
        <a className="block py-2" href="#features">Features</a>
        <a className="block py-2" href="#graph">Graph</a>
        <a className="block py-2" href="#contact">Contact</a>
      </div>}
    </header>
  )
}
