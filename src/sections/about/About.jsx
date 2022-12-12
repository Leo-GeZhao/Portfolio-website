import './about.css'
import CV from '../../assets/CV.pdf'
import data from './data'
import Card from '../../components/Card'
import {HiDownload} from 'react-icons/hi'
import aboutImg from '../../assets/about.jpg'

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
          <div className="about__cards">
            {
              data.map((item,index)=>(
                <Card key={index+1} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                  
                </Card>
              ))
            }
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga inventore, aspernatur porro perspiciatis eum maxime alias culpa repudiandae rem, expedita praesentium eaque sapiente nobis debitis quo ipsum quis ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eius iste doloribus odit nam ducimus soluta alias nihil porro similique molestiae possimus earum provident veniam, rerum enim, atque illum quaerat?</p>
          <a href={CV} download className='btn'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About