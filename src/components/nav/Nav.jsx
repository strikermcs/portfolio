import React from 'react'
import { useState, useEffect } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BiPhotoAlbum } from 'react-icons/bi'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.7
    }
  
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll('.observe');
    targets.forEach(t => observer.observe(t))
  
    function callback (entries, observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          setActiveNav(`#${entry.target.id}`)
        }
      })
    }
  })  

    
  return (
    <nav>
      <a href="#header" className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#service" className={activeNav === '#service' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''}><BiPhotoAlbum /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav 