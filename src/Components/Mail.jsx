import React, {useRef} from 'react'
import '../styles/Mail.css'

import emailjs from '@emailjs/browser';

const Mail = () => {

  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_46tfrkr','template_1axyq6s', form.current, 'aMtiJVADiW-TAqZ-z').then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  };

  return (
    <section>
      <div className='mail' id="mail">
          <h2 className='title'>Contact Me</h2>
          <form ref = {form} onSubmit={sendEmail} class = 'form'>
              <input type = 'text' placeholder='Full Name' name = 'user_name' required/>
              <input type = 'email' placeholder='Email' name = 'user_email' required/>
              <input type = 'text' placeholder='Subject' name = 'subject' required/>
              <textarea name = 'message' cols='30' rows='10'></textarea>
              <button type = 'submit' className='btn'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Mail
