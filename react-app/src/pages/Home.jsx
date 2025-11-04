import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="card" style={{padding:'28px'}}>
        <h1 style={{margin:'0 0 8px'}}>All-in-one calculators</h1>
        <p style={{margin:'0 0 18px', color:'var(--muted)'}}>
          Quick, clean and fast tools for everyday math, finance and health.
        </p>
        <div className="input-row">
          <Link className="btn-equals" to="/calculator" style={{textDecoration:'none', padding:'10px 14px', borderRadius:10, display:'inline-block', color:'#0c1326'}}>Open Calculator</Link>
          <Link className="btn-operator" to="/cash" style={{textDecoration:'none', padding:'10px 14px', borderRadius:10}}>Cash</Link>
          <Link className="btn-operator" to="/bmi" style={{textDecoration:'none', padding:'10px 14px', borderRadius:10}}>BMI</Link>
          <Link className="btn-operator" to="/loan" style={{textDecoration:'none', padding:'10px 14px', borderRadius:10}}>Loan</Link>
        </div>
      </section>
    </div>
  )
}
