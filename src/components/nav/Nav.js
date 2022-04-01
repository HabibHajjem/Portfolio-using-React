import React, { useState } from 'react'
import './Nav.css'
import {FaLaptopCode} from 'react-icons/fa'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {GiDiploma} from 'react-icons/gi'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {AiOutlineProject} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href='#' 
        className={activeNav === '#' ? 'active':''}
        onClick={()=>setActiveNav('#')}><AiOutlineHome/></a>

        <a href='#about' 
        className={activeNav === '#about' ? 'active':''}
        onClick={()=>setActiveNav('#about')}><BiUser/></a>

        <a href='#experience'
        className={activeNav === '#experience' ? 'active':''}
        onClick={()=>setActiveNav('#experience')}><FaLaptopCode/></a>

        <a href='#services'
        className={activeNav === '#services' ? 'active':''}
        onClick={()=>setActiveNav('#services')}><MdOutlineHomeRepairService/></a>

        <a href='#certificates'
        className={activeNav === '#certificates' ? 'active':''}
        onClick={()=>setActiveNav('#certificates')}><GiDiploma/></a>

        <a href='#portfolio'
        className={activeNav === '#portfolio'?'active':''}
        onClick={()=>setActiveNav('#portfolio')}><AiOutlineProject/></a>

        <a href='#contact'
        className={activeNav === '#contact' ? 'active':''}
        onClick={()=>setActiveNav('#contact')}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav