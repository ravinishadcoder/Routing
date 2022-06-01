import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Navbar">Navbar</Link>
        <Link to="/Products">Products</Link>
    </div>
  )
}

export default HomePage