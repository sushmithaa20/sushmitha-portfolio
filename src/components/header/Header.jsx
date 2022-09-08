
import './Header.css'
import React from 'react'
import CTA from './CTA'
import me from '../../asserts/me.jpg'
import HeaderSocials  from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Sushmitha</h1>
        <h5 className="text-align">Learner</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          
          <img className='img'  src={me} alt='sushmitha'/>
          
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header