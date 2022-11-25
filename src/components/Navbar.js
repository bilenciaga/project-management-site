import './Navbar.css'
import Project from '../assets/project.svg'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {

  let activeStyle = { 
    color:"#8d69f1"
  }

  const { logout, isPending } = useLogout(false)

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Project} alt='logo' />
          <span>Project Management Site</span>
        </li>

        <li><NavLink to ='/login'>Login</NavLink></li>
        <li><NavLink to ='/signup'>Signup</NavLink></li>
        <li>
          {!isPending && <button className='btn' onClick={logout}>Logout</button>}
          {isPending && <button className='btn' disabled>Logging out</button>}
        </li>
      </ul>
    </div>
  )
}

export default Navbar