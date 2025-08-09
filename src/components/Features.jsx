import React from 'react'
export default function Features(){
  const items = [
    {title:'Interactive 3D Canvas', desc:'React-Three-Fiber powered models with controls and animation.'},
    {title:'Smooth Scroll & Motion', desc:'Framer Motion driven micro-interactions and reveal-on-scroll.'},
    {title:'Charts & Analytics', desc:'Recharts to visualize your metrics with style.'},
    {title:'Responsive & Accessible', desc:'Mobile-first layouts and accessible patterns.'},
    {title:'Performance-minded', desc:'Lazy-loaded 3D assets and efficient rendering.'},
    {title:'Customizable', desc:'Swap colors, shapes, and animations easily.'},
  ]
  return (
    <section id="features" className="py-12">
      <h2 className="text-3xl font-bold">Features</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it,i)=>(
          <article key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
