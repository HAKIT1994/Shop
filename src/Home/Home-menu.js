import React from 'react'
import './Home.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import Burger from '../Menu/Burger'
import Sides from '../Menu/Sides'

import Burgersdata from '../Data/Burgers.json'

function Home_menu() {
  return (
    <div>
        <div className='Home__top'>
            <mark class="green"><h1>Browse our menu</h1></mark>
            <div className='Home__text'>
            <p>Use our menu to place an order online, or <a href="#">phone</a> our store to
    place a pickup order. Fast and fresh food. 
                </p>
            </div>
        </div>         
        <div className='Home__bottom'>
        <nav>
            <ul>
                <li> <NavLink to="/" style={({ isActive }) => ({color: isActive ? '#35DFA6' : 'black'})}>Burgers</NavLink></li>
                <li> <NavLink to="/sides">Sides</NavLink></li>
                <li> <NavLink to="/">Drinks</NavLink></li>
            </ul>
        </nav>
        <div className='Home__menu__container'> 
            <Routes>
                <Route exact element={<Burger/>} />
                <Route exact element={<Burger/>} />
                <Route path="sides" element={<Sides/>} />
            </Routes>
        </div>
        {Burgersdata.map((item, index) =>(
        <div key={index}>
          <li>
            {item.name}
          </li>
        </div>
      ))}

        </div>
    </div>
  )
}

export default Home_menu