import React from 'react'
import logo from '../pictures/resort3.webp'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className="no-underline-img" />
      <ul>
        <li><a href="">ACTIVITIES</a></li>
        <li><a href="">LOCATION</a></li>
        <li><a href="">Coupons&Deals</a></li>
        <li><a href="">ENQUIRY</a></li>
      </ul>
      <span className="searching">
        <input type="text" placeholder="Search destinations or resorts" />
        <button type="submit">Search</button>
      </span>
      <button className='btn1'>Login</button>
    </div>
  )
}

export default Navbar
