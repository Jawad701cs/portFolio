import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/NavBar.css'
import {FaEnvelope,FaPhoneAlt} from 'react-icons/fa'
function NavBar() {
  return (
    <div>
      <div className="container">
        
          <div className='item' style={{ color: "white" , fontSize:"15px" }}> <b> <FaEnvelope/> 2021cs701@Student.uet.edu.pk</b></div>
          <div className='item' style={{ color: "white" , fontSize:"15px" }}> <b> <FaPhoneAlt/> +923486758450</b></div>
          {/* <div className='item'></div> */}
          <div className='item'><Link to="/" className="nav-link"> Home</Link></div>
          <div className='item'><Link to="/about" className="nav-link">About</Link></div>
          <div className='item'><Link to="/skills" className="nav-link">Skills</Link></div>
          <div className='item'><Link to="/projects" className="nav-link">Projects</Link></div>
          <div className='item'><Link to="/contact" className="nav-link">Contacts</Link></div>
        
      </div>

    </div>
  )
}

export default NavBar
