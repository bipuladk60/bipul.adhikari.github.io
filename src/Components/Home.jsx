import React, { useState, useRef } from 'react'

import '../styles/Home.css'

import TypeWriterEffect from 'react-typewriter-effect';
import { saveAs } from "file-saver";
import { Link } from 'react-scroll';

const Home = () => {
  const handleDownload = () => {
    saveAs(
      "google drive url",
      "Resume.pdf"
    )
  }


  return (
    <div className='home' id='home'>
      <div className="home-text">
        <h1>
          <span className='gradientText'>
            Hi, I'm Bipul Adhikari!
          </span>
        </h1>
        <TypeWriterEffect
          cursorColor="#1da1f2"
          multiText={[
            'Welcome to my website!',
            "Scroll to learn more about me!"
          ]}
          multiTextLoop={true}
          multiTextDelay={1500}
          typeSpeed={35}
        />
        <div className="btns">
          <Link className='btn1' activeClass="active" to="mail" spy={true} smooth={true} offset={-50} duration={500}>
            Hire Me
          </Link>

          <div onClick={handleDownload} className='btn2'>View Resume</div>
        </div>
      </div>

    </div >
  )
}

export default Home;
