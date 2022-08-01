import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click,setClick] = useState(false)



  return (
    <div className="navbar__container">
        <div className='navbar__icon'>
            <Link to="/"><i class='fas fa-hamburger fa-5x'> </i></Link>  
        </div>

        <ul className={click?'navbar__dropdown':'navbar__menu'}>
            <li>
                <Link to="/" className='navbar__btn'>Home</Link>
                <Link to="/"  className='navbar__btn'>Order</Link>
                <Link to="/"  className='navbar__btn'>Company</Link>
                <Link to="/" className='navbar__btn'>FAQ</Link>
                <Link to="/"  className='navbar__btn'>Contact</Link>
                <Link to="/" className='navbar__btn'><i class="fas fa-shopping-cart"/></Link>
                <div className = "mobile__menu__icon" onClick={()=>{setClick(!click)}}>
                    <i class={click?"fa fa-outdent":"fa fa-align-justify "}/>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Navbar