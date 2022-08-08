import React, {useState} from 'react'
import './Home.css'
import './Home-menu.css'
import Burgersdata from '../Data/Burgers.json'
import Sidesdata from '../Data/Sides.json'
import Drinksdata from '../Data/Drinks.json'

function Home_menu() {

    const [active, setActive] = useState("Burgers");
    const [listdata,setListdata] = useState(Burgersdata)

    function handleToggle (item){
        setActive(item.target.id);
        // setListdata([])
        switch (item.target.id){
            case "Burgers": 
                setListdata(Burgersdata)
                break;
            case "Sides":
                setListdata(Sidesdata)
                break;
            case "Drinks":
                setListdata(Drinksdata)
                break;
        } 
        
    };

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
            <div>
                <nav>
                    <ul className='Menu__button'>
                        <li> <a className={active=="Burgers" ? 'Menu__button__active' : 'Menu__button__deactive'} onClick={handleToggle} id="Burgers">Burgers</a></li>
                        <li> <a className={active=="Sides" ? 'Menu__button__active' : 'Menu__button__deactive'} onClick={handleToggle}  id="Sides">Sides</a></li>
                        <li> <a to="/drinks" className={active=="Drinks" ? 'Menu__button__active' : 'Menu__button__deactive'} onClick={handleToggle}  id="Drinks">Drinks</a></li>
                    </ul>
                </nav>
                <div className='Home__menu__bottom'>
                    <div className='Home__menu__container'> 
                    {      
                    listdata.slice(0,6).map((item) =>(
                        <div key={item.name}>
                            <li className='Menu_item_box'>
                                <div className='Menu_item_left'>
                                    <img className='Menu_item_img' src={item.img}/>
                                </div>
                                    <div className='Menu_item_right'>
                                        <div className='Menu_item_top'>
                                            <div className='Menu_item_Name'><b>{item.name}</b></div>
                                            <div className='Menu_item_price'>$ {item.price.toFixed(2)} USD</div>
                                        </div>
                                        <div className='Menu_item_description'>{item.description}</div>
                                        <ul className='Menu_item_bottom'>
                                            <li>
                                                <input type="number"  className='Menu_item_input' defaultValue='1' min="1"/>
                                            </li>
                                            <li>
                                                <a className='Menu_button_ToCart'>Add To Cart</a>
                                            </li>
                                        </ul>
                                </div>
                            </li>
                        </div>
                    ))
                    }
                    </div>
                    <div className='Menu__button__container'>
                        <a className='Home__button'>See Full Menu</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home_menu