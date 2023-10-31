import './styles/App.css';
import { Fade } from 'react-awesome-reveal';

import Home from './Components/Home';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Socials from './Components/Socials';
import About from './Components/About';
import Skills from './Components/Skills';
import Mail from './Components/Mail';


function App() {
  

  return (
    <div className='APP'>
      <div>
        <Nav />
        <Home />
      </div>
      <div className= 'light'>
      <Fade fraction={.2} triggerOnce>
          <About />
        </Fade>
        <Fade fraction={.2} triggerOnce>
          <Projects />
        </Fade>
        <Fade fraction={.2} triggerOnce>
          <Socials />
        </Fade>
       
        <Fade fraction={.2} triggerOnce>
          <Skills />
        </Fade>
      </div>
      <div>
        <Fade fraction={.2} triggerOnce>
          <Mail />
        </Fade>
      </div>
      <div className= 'dark'>
        <Fade fraction={.2} triggerOnce>
          <p>Thank you!</p>
        </Fade>
      </div>
    </div>
  );
}

export default App;