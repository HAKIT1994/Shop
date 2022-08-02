import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMenu = ()=> setClick(false);
    
  return (
    <div className="navbar__container">
        <div className='navbar__icon'>
            <Link to="/"><i class='fas fa-hamburger fa-5x'> </i></Link>  
        </div>
        <nav>
            <ul className={click?'navbar__menu active' :'navbar__menu '}  >
                <li><NavLink to="/" style={({ isActive }) => ({color: isActive ? '#35DFA6' : 'black'})} className='navbar__btn' onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/order"  style={({ isActive }) => ({color: isActive ? '#35DFA6' : 'black'})} className='navbar__btn' onClick={closeMenu}>Order</NavLink></li>
                <li><NavLink to="/company"  style={({ isActive }) =>  ({color: isActive ? "#35DFA6" : "black"})} className='navbar__btn' onClick={closeMenu}>Company</NavLink></li>
                <li><NavLink to="/faq" style={({ isActive }) => ({color: isActive ? "#35DFA6" : "black"})} className='navbar__btn' onClick={closeMenu}>FAQ</NavLink></li>
                <li><NavLink to="/contact"  style={({ isActive }) => ({color: isActive ? "#35DFA6" : "black"})} className='navbar__btn' onClick={closeMenu}>Contact</NavLink></li>
                <li><NavLink to="/cart" style={({ isActive }) => ({color: isActive ? "#35DFA6" : "black"})} className='navbar__btn' onClick={closeMenu}><i class="fas fa-shopping-cart"/></NavLink></li>
            </ul>
            <ul className='navbar__cart'>
                <li>
                <Link to="/" className='navbar__dropdown__btn'><i class="fas fa-shopping-cart"/></Link>
                </li>
                <li>
                <div className = "navbar__dropdown__btn" onClick={handleClick}>
                    <i class={click?"fa fa-outdent":"fa fa-bars "}/>
                </div>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar