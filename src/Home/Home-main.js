import React from 'react'
import './Home.css'

function Home_main() {
  return (
    <div className='Home__container'>
      <div className='Home__left'>
        <div className='Home__text'>
          <h1>Beautiful food & takeaway, <mark class="green">delivered </mark>to your door.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
          </p>
        </div>
        <button type='button' className='Home__button'>Place an Order</button>
        <p><mark class="green">4.8 out of 5</mark> based on 2000+ reviews</p>
      </div>
      <div className='Home__right'>
        <img src="images/home-food.png" alt="food" className='Home__image'/>
      </div>
    </div>
  )
}

export default Home_main