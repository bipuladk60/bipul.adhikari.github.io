import React from 'react'

import { AiFillInstagram, AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'

import '../styles/Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
      <h2>Find Me @ The Web</h2>
      <div className="social">
        <div className='insta'>
          <AiFillInstagram />
          <p>Instagram</p>
          <a href="https://www.instagram.com/bipuladk60/" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/bipuladk60" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='twit'>
          <AiFillFacebook />
          <p>Twitter</p>
          <a href="https://www.facebook.com/profile.php?id=100025847800239" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="https://www.linkedin.com/feed/" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
      </div>
    </div>
  )
}

export default Socials