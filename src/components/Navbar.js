import React from 'react'
import { Link } from 'react-router-dom'

export const PublicNavbar = () => (
  <nav>
    <section>
      <Link to="/" >Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/info">Developers</Link>
    </section>
  </nav>
)

export const PrivateNavbar = () => (
  <nav>
    <section>
      <Link to="/" className = "BarraSuperior">Home</Link>
      <Link to="/questions" className = "BarraSuperior">Questions</Link>
      <Link to="/new" className = "BarraSuperior">New Questions</Link>
      <Link to="/list" className = "BarraSuperior">My Questions</Link>
      <Link to="/info">Developers</Link>
    </section>
  </nav>
)
