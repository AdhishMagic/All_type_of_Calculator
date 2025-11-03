import { useState } from 'react'

export default function Expense(){
  const [list,setList]=useState([])
  const [desc,setDesc]=useState('')
  const [amount,setAmount]=useState('')
  const total = list.reduce((s,x)=>s+x.amount,0)

  const add=()=>{
    const d=desc.trim()
    const a=parseFloat(amount)
    if(!d || isNaN(a)) return
    setList(prev=>[...prev,{description:d,amount:a}])
    setDesc(''); setAmount('')
  }
  const del=(idx)=>{
    setList(prev=> prev.filter((_,i)=>i!==idx))
  }

  return (
    <div className="card">
      <h3>Expense Tracker</h3>
      <div className="input-row">
        <input placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} />
        <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
        <button onClick={add}>Add</button>
      </div>
      <div>
        {list.map((x,i)=> (
          <div key={i} className="expense-item">
            <div>{x.description}</div>
            <div>${x.amount}</div>
            <button onClick={()=>del(i)}>&times;</button>
          </div>
        ))}
      </div>
      <h3>Total Expenses: ${total}</h3>
    </div>
  )
}
