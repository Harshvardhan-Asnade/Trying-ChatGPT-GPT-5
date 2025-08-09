import React from 'react'
export default function Footer(){
  return (
    <footer id="contact" className="mt-16 border-t border-slate-700 pt-8 pb-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <p className="mt-2 text-sm">hello@modern3d.example — usually reply in 24 hours.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Quick links</h4>
          <div className="mt-2 flex gap-4 text-sm">
            <a>Privacy</a>
            <a>Terms</a>
            <a>Docs</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center mt-8 text-slate-500 text-sm">© {new Date().getFullYear()} Modern3D. All rights reserved.</div>
    </footer>
  )
}
