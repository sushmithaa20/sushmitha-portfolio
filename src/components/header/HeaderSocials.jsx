import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/sushmitha-sushmitha-4216a9219/' target="_blank"><AiFillLinkedin /></a>
        <a href='https://github.com/sushmithaa20' target="_blank"><FaGithub /></a>
        <a href='https://www.instagram.com/_sushmithaaa/?hl=en' target="_blank"><AiOutlineInstagram /></a>
    </div>
  )
}

export default HeaderSocials