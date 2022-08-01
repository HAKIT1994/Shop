import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const showMenu = () => {
        if (window.innerWidth >= 920){
            setClick(false);
        };
    }


    window.addEventListener('resize', showMenu)

  return (
    <div className="navbar__container">
        <div className='navbar__icon'>
            <Link to="/"><i class='fas fa-hamburger fa-5x'> </i></Link>  
        </div>

        <ul className={click?'navbar__dropdown active' :'navbar__menu'}  >
            <li><Link to="/" className='navbar__btn'>Home</Link></li>
            <li><Link to="/"  className='navbar__btn'>Order</Link></li>
            <li><Link to="/"  className='navbar__btn'>Company</Link></li>
            <li><Link to="/" className='navbar__btn'>FAQ</Link></li>
            <li><Link to="/"  className='navbar__btn'>Contact</Link></li>
            <li><Link to="/" className='navbar__btn'><i class="fas fa-shopping-cart"/></Link></li>
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
    </div>
  )
}

export default Navbar