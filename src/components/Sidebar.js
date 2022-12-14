import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import { NavLink } from 'react-router-dom'

import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          <p>Hi User</p>
        </div>
        <nav className='links'>
          <ul>
            <li>
              <NavLink exact to ='/'>
                <img src={DashboardIcon} alt='dashboard icon' />
                <span>Dashboard</span>
              </NavLink>
              <NavLink to ='/create'>
                <img src={AddIcon} alt='dashboard icon' />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar