import { useState } from 'react'

export default function Tip(){
  const [bill,setBill]=useState('')
  const [rating,setRating]=useState('')
  const [split,setSplit]=useState('1')
  const [meal,setMeal]=useState('')
  const [res,setRes]=useState(null)

  const calc=()=>{
    const b=parseFloat(bill), r=parseInt(rating,10), s=parseInt(split,10)
    if(isNaN(b)||isNaN(r)||isNaN(s)) return setRes({text:'Please Enter Valid Numbers'})
    let tip=0
    switch(r){
      case 1: tip=b*0.05; break
      case 2: tip=b*0.10; break
      case 3: tip=b*0.15; break
      case 4: tip=b*0.20; break
      default: tip=0
    }
    let total=b+tip
    let per=total/s
    if(meal==='dinner'){
      tip+=5; total+=5; per+=5/s
    }
    setRes({tip,total,per})
  }

  return (
    <div className="card">
      <h3>Tip Calculator</h3>
      <div className="input-row">
        <input placeholder="Bill Amount" value={bill} onChange={e=>setBill(e.target.value)} />
        <select value={rating} onChange={e=>setRating(e.target.value)}>
          <option value="">Service Rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Excellent</option>
        </select>
        <input placeholder="Split Count" value={split} onChange={e=>setSplit(e.target.value)} />
        <select value={meal} onChange={e=>setMeal(e.target.value)}>
          <option value="">Meal Type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <button onClick={calc}>Calculate</button>
      </div>
      {res && (res.text ? <p>{res.text}</p> : (
        <div>
          <p>Tip: ${res.tip.toFixed(2)}</p>
          <p>Total Amount: ${res.total.toFixed(2)}</p>
          <p>Amount Per Person: ${res.per.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}
