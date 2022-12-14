import './about.css'
import aboutImg from '../../assets/about.jpg'
import {HiDownload} from 'react-icons/hi'
import CV from '../../assets/CV.pdf'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h3>About Me</h3>
          <p>After 3 years of working in Accouting and Finance, I have decided to change my occupation.</p>
          <a href={CV} download className='btn'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About