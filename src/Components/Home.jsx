import '../styles/Home.css'

import TypeWriterEffect from 'react-typewriter-effect';

import { Link } from 'react-scroll';

const Home = () => {
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

          <a href='https://drive.google.com/file/d/1hQjaMEV0YYKtbpHmAgYiu6l42gwOUBKF/view?usp=drive_link' target='_blank' className='btn2'>View Resume</a>
        </div>
      </div>
    </div>
  
  )
}

export default Home;
