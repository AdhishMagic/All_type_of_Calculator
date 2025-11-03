import { useState } from 'react'

export default function Age(){
  const [birth,setBirth]=useState('')
  const [res,setRes]=useState(null)

  function isValid(d){ return d instanceof Date && !isNaN(d) }

  const submit=(e)=>{
    e.preventDefault()
    const parts = birth.split('-')
    if(parts.length!==3) return alert('Enter date as DD-MM-YYYY')
    const day = parseInt(parts[0],10), month = parseInt(parts[1],10)-1, year = parseInt(parts[2],10)
    const bd = new Date(year,month,day)
    if(!isValid(bd)) return alert('Invalid Date Format: Please enter DD-MM-YYYY')
    const now = new Date()
    const ms = now - bd
    const sec = Math.floor(ms/1000)
    const min = Math.floor(sec/60)
    const hr = Math.floor(min/60)
    const days = Math.floor(hr/24)
    const weeks = Math.floor(days/7)
    const months = Math.floor(days/30.436875)
    const years = Math.floor(days/365.25)
    setRes({years, months, days, hr, min, sec, weeks})
  }

  return (
    <div className="card">
      <h3>Age Calculator</h3>
      <form onSubmit={submit} className="input-row">
        <input placeholder="DD-MM-YYYY" value={birth} onChange={e=>setBirth(e.target.value)} />
        <button type="submit">Calculate Age</button>
      </form>
      {res && (
        <div>
          <p>Age: {res.years} Years {res.months % 12} Months {res.days % 30} Days</p>
          <p>Months Passed: {res.months}</p>
          <p>Weeks Passed: {res.weeks}</p>
          <p>Days Passed: {res.days}</p>
          <p>Hours Passed: {res.hr}</p>
          <p>Minutes Passed: {res.min}</p>
          <p>Seconds Passed: {res.sec}</p>
        </div>
      )}
    </div>
  )
}
