import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <h1>Welcome to Calci (React)</h1>
      <p>Choose a calculator:</p>
      <ul>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/cash">Cash Calculator</Link></li>
        <li><Link to="/bmi">BMI Calculator</Link></li>
        <li><Link to="/age">Age Calculator</Link></li>
        <li><Link to="/loan">Loan Calculator</Link></li>
        <li><Link to="/tip">Tip Calculator</Link></li>
        <li><Link to="/fd">FD Calculator</Link></li>
        <li><Link to="/expense">Expense Tracker</Link></li>
      </ul>
    </div>
  )
}
