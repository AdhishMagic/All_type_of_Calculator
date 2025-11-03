import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import BMI from './pages/BMI'
import Age from './pages/Age'
import Loan from './pages/Loan'
import Tip from './pages/Tip'
import FD from './pages/FD'
import Expense from './pages/Expense'
import Cash from './pages/Cash'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h2>~ CALCY (React) ~</h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/cash">Cash</Link></li>
            <li><Link to="/bmi">BMI</Link></li>
            <li><Link to="/age">Age</Link></li>
            <li><Link to="/loan">Loan</Link></li>
            <li><Link to="/tip">Tip</Link></li>
            <li><Link to="/fd">FD</Link></li>
            <li><Link to="/expense">Expense</Link></li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/cash" element={<Cash />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/age" element={<Age />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/tip" element={<Tip />} />
          <Route path="/fd" element={<FD />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </main>
      <footer className="footer">&copy; By Bala Adhish N D</footer>
    </div>
  )
}
