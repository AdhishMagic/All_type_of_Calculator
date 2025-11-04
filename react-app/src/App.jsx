import { Link, NavLink, Route, Routes } from 'react-router-dom'
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
        <div className="container header-inner">
          <div className="brand">
            <span className="dot" />
            <Link to="/">Calcy</Link>
          </div>
          <nav className="nav" aria-label="Main">
            <ul>
              <li><NavLink to="/" end className={({isActive})=> isActive? 'active' : undefined}>Home</NavLink></li>
              <li><NavLink to="/calculator" className={({isActive})=> isActive? 'active' : undefined}>Calculator</NavLink></li>
              <li><NavLink to="/cash" className={({isActive})=> isActive? 'active' : undefined}>Cash</NavLink></li>
              <li><NavLink to="/bmi" className={({isActive})=> isActive? 'active' : undefined}>BMI</NavLink></li>
              <li><NavLink to="/age" className={({isActive})=> isActive? 'active' : undefined}>Age</NavLink></li>
              <li><NavLink to="/loan" className={({isActive})=> isActive? 'active' : undefined}>Loan</NavLink></li>
              <li><NavLink to="/tip" className={({isActive})=> isActive? 'active' : undefined}>Tip</NavLink></li>
              <li><NavLink to="/fd" className={({isActive})=> isActive? 'active' : undefined}>FD</NavLink></li>
              <li><NavLink to="/expense" className={({isActive})=> isActive? 'active' : undefined}>Expense</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="content">
        <div className="container">
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
        </div>
      </main>
      <footer className="footer">
        <div className="container">&copy; By Bala Adhish N D</div>
      </footer>
    </div>
  )
}
