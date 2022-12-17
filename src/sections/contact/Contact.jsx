import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {MdOutlineMail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import './contact.css'

const Contact = () => {
  const form = useRef()

  
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    function messageNotice(){
      const messageBtn = e.target.querySelector('#message-btn')
      
      messageBtn.innerText = 'Send Successful'
      messageBtn.style.background = 'var(--green)'
      messageBtn.style.color = 'white'
      messageBtn.style.transition='var(--transition)'
    }

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
    .then(messageNotice())
    .then(e.target.reset())
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ge.leo.zhao@gmail.com</h5>
            <a href="mailto:ge.leo.zhao@email.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>LeoGeZhao</h5>
            <a href="https://www.linkedin.com/in/leogezhao/" target="_blank"
            rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn' id="message-btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact