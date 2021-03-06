import React from 'react'
import CTA from './CTA'
import ME from '../../asssets/me.jpg'
import HeaderSocials from './HeaderSocials'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className='container header_container'>
            <h5>Hello I'm</h5>
            <h1>Habib Hajjem</h1>
            <h5 className='text-light'>Full Stack Developer</h5>
            <CTA/>
            <HeaderSocials/>

            <div className='me'>
                <img src={ME} alt='me'></img>
            </div>
            <div className='scroll_down'>
               <a href='#about'>Scroll Down</a> 
            </div>
        </div>
    </header>
  )
}

export default Header