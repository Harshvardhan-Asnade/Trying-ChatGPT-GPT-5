import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {name:'Jan', uv:400},
  {name:'Feb', uv:300},
  {name:'Mar', uv:500},
  {name:'Apr', uv:450},
  {name:'May', uv:600},
  {name:'Jun', uv:700},
  {name:'Jul', uv:650},
]

export default function Graph(){
  return (
    <section id="graph" className="py-12">
      <h2 className="text-3xl font-bold">Analytics</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700">
          <p className="text-sm text-slate-300">Monthly traffic (interactive)</p>
          <div style={{width:'100%', height:300}} className="mt-4">
            <ResponsiveContainer>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#7c3aed" strokeWidth={3} dot={{r:3}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700">
          <h3 className="font-semibold">Insights</h3>
          <ul className="mt-4 text-sm text-slate-300 space-y-2">
            <li>• Strong growth during May–June.</li>
            <li>• Use the 3D demo to gather user attention.</li>
            <li>• Hover on the graph to see exact values.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
