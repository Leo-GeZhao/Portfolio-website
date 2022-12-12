import {MdOutlineMail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ge.leo.zhao@gmail.com</h5>
            <a href="mailto:ge.leo.zhao@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>LeoGeZhao</h5>
            <a href="www.linkedin.com/in/LeoGeZhao">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact