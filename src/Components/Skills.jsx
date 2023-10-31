import React from 'react'

import '../styles/Skills.css'

import { SiJavascript, SiHtml5, SiCss3, SiReact, SiTypescript, SiPython, SiCplusplus, SiTailwindcss} from 'react-icons/si';


const Skills = () => {
  return (
    <div className='skills'>
      <h2>My Skills</h2>
      <div className="skill">
        <div className="js">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="ts">
          <SiTypescript />
          <p>TypeScript</p>
        </div>
        <div className="python">
          <SiPython />
          <p>Python</p>
        </div>
        <div className="html">
          <SiHtml5 />
          <p>HTML</p>
        </div>
        <div className="css">
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="react">
          <SiReact />
          <p>React</p>
        </div>
        <div className="C">
          <SiCplusplus />
          <p>C++</p>
        </div>
        <div className="tailwind">
          <SiTailwindcss />
          <p>Tailwind CSS</p>
        </div>
        
      </div>
    </div>
  )
}

export default Skills;