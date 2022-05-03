import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/strikermcs/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/strikermcs" target="_blank"><BsGithub /></a>
      <a href="https://t.me/strikermcs" target="_blank"><BsTelegram /></a>
    </div>
  )
}

export default HeaderSocials