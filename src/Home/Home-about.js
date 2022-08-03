import React from 'react'
import './Home.css'

function Home_about() {
  return (
    <div className='Home__container'>
        <div className='Home__left'>
            <div className='Home__text'>
            <mark class="green"><h1>The home of fresh products</h1></mark>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            </div>
            <div className='button__area'>
                <button type='button' className='Home__button'>Learn about us</button>
            </div>
        </div>
        <div className='Home__right'>
            <img src="images/home-food2.png" alt="food" className='Home__image'/>
        </div>
    </div>
  )
}

export default Home_about