import React from 'react'
import './Home.css'

function Home_method() {
  return (
    <>
    <div>
        <div className='Home__top'>
            <mark class="green"><h1>How it works.</h1></mark>
        </div> 
        <div className='Home__bottom'>
            <ul className='Home__list'>
                <li className='Home__list__item'>
                    <img src="images/home-method1.png" alt="method1"></img>
                    <br/>
                    <div className='Home__list__text'>
                        <b>Adapt your menu items</b>
                        <p>Easily adapt your menu using the webflow CMS and allow customers to browse your items.</p>
                    </div>
                </li>
                <li className='Home__list__item'>
                    <img src="images/home-method2.png" alt="method2"></img>
                    <br/>
                    <div className='Home__list__text'>
                        <b>Accept online orders & takeout</b>
                        <p>Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</p>
                    </div>
                </li>
                <li className='Home__list__item'>
                    <img src="images/home-method3.png" alt="method3"></img>
                    <br/>
                    <div className='Home__list__text'>
                        <b>Manage delivery or takeout</b>
                        <p>Manage your own logistics and take orders simply through the ecommerce system.</p>
                    </div>
                </li>
            </ul>
        </div>
        </div>
    </>
  )
}

export default Home_method