import { useState } from 'react'

export default function BMI(){
  const [gender,setGender]=useState('')
  const [age,setAge]=useState('')
  const [feet,setFeet]=useState('')
  const [inches,setInches]=useState('')
  const [weight,setWeight]=useState('')
  const [result,setResult]=useState(null)

  const submit = (e)=>{
    e.preventDefault()
    const ageN = parseInt(age)
    const hf = parseInt(feet)
    const hi = parseInt(inches)
    const w = parseFloat(weight)
    if(!gender || !ageN || !hf || !hi || !w) return setResult({text:'Please fill all fields correctly.'})
    const heightMeters = ((hf*12)+hi)*0.0254
    const bmi = w/(heightMeters*heightMeters)
    let category=''
    if(bmi<18.5) category='Under Weight'
    else if(bmi<24.9) category='Normal Weight'
    else if(bmi<29.9) category='Over Weight'
    else category='Obese'
    setResult({text:`Your BMI: ${bmi.toFixed(2)}\nCategory: ${category}`})
  }

  return (
    <div className="card">
      <h3>BMI Calculator</h3>
      <form onSubmit={submit} className="input-row">
        <select value={gender} onChange={e=>setGender(e.target.value)}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input placeholder="Age" value={age} onChange={e=>setAge(e.target.value)} />
        <input placeholder="Height (ft)" value={feet} onChange={e=>setFeet(e.target.value)} />
        <input placeholder="Height (in)" value={inches} onChange={e=>setInches(e.target.value)} />
        <input placeholder="Weight (kg)" value={weight} onChange={e=>setWeight(e.target.value)} />
        <button type="submit">Calculate</button>
      </form>
      {result && <pre>{result.text}</pre>}
    </div>
  )
}
