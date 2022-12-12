/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

import './footer.css'

const Footer = () => {
  return (
    <footer id="footer">
    <a href="#" className='footer__logo'>Leo Zhao</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/leogezhao/" target="_blank"
            rel="noopener noreferrer"><AiFillLinkedin/></a>
      <a href="https://github.com/Leo-GeZhao" target="_blank"
            rel="noopener noreferrer"><AiOutlineGithub/></a>
    </div>
    </footer>
  )
}

export default Footer