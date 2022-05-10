import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import './footer.css'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">@strikermcs</a> 
      
      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/strikermcs/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/strikermcs" target="_blank"><BsGithub /></a>
        <a href="https://t.me/strikermcs" target="_blank"><BsTelegram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Pavel Semeniuk</small>
      </div>
    </footer>
  )
}

export default Footer