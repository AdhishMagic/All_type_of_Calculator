import { useState } from 'react'

export default function FD(){
  const [p,setP]=useState('')
  const [r,setR]=useState('')
  const [t,setT]=useState('')
  const [m,setM]=useState(null)
  const calc=()=>{
    const P=parseFloat(p), R=parseFloat(r), T=parseFloat(t)
    const maturity=P + (P*R*T)/100
    setM(maturity)
  }
  return (
    <div className="card">
      <h3>Fixed Deposit (Simple Interest)</h3>
      <div className="input-row">
        <input placeholder="Principal" value={p} onChange={e=>setP(e.target.value)} />
        <input placeholder="Interest %" value={r} onChange={e=>setR(e.target.value)} />
        <input placeholder="Tenure (years)" value={t} onChange={e=>setT(e.target.value)} />
        <button onClick={calc}>Calculate</button>
      </div>
      {m!==null && <p>Maturity Amount: {m.toFixed(2)}</p>}
    </div>
  )
}
