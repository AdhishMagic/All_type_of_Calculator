import { useState } from 'react'

export default function Loan(){
  const [amount,setAmount]=useState('')
  const [rate,setRate]=useState('')
  const [term,setTerm]=useState('')
  const [out,setOut]=useState(null)

  const calc=()=>{
    const P=parseFloat(amount), r=parseFloat(rate), n=parseInt(term,10)
    if(isNaN(P)||isNaN(r)||isNaN(n)) return alert('Please enter valid numbers')
    const monthly=r/100/12
    const payments=n
    const payment=(P*monthly)/(1-Math.pow(1+monthly,-payments))
    const interest=payment*payments-P
    setOut({payment,interest})
  }

  return (
    <div className="card">
      <h3>Loan Calculator</h3>
      <div className="input-row">
        <input placeholder="Loan Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
        <input placeholder="Interest % (annual)" value={rate} onChange={e=>setRate(e.target.value)} />
        <input placeholder="Term (months)" value={term} onChange={e=>setTerm(e.target.value)} />
        <button onClick={calc}>Calculate</button>
      </div>
      {out && (
        <div>
          <p><strong>Monthly Payment: {out.payment.toFixed(2)}</strong></p>
          <p><strong>Total Interest: {out.interest.toFixed(2)}</strong></p>
        </div>
      )}
    </div>
  )
}
