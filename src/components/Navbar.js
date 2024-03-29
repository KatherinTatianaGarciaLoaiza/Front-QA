import React from 'react'
import { Link } from 'react-router-dom'
import {SignIn, SignOut} from '../App'

export const PublicNavbar = () => (
  <nav>
    <Link to="/" >Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/info">Developers</Link>
      <SignIn/>
  </nav>
)

export const PrivateNavbar = () => (
  <nav>
  <Link to="/" className="BarraSuperior">Home</Link>
      <Link to="/questions" className="BarraSuperior">Questions</Link>
      <Link to="/new" className="BarraSuperior">New Questions</Link>
      <Link to="/list" className="BarraSuperior">My Questions</Link>
      <Link to="/info">Developers</Link>
      <SignOut/>
  </nav>
)
