import frontend from './frontend'
import backend from './backend'
import {IoCheckmarkCircleSharp} from 'react-icons/io5'
import './skills.css'
const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className='container skills__container'>
        <div className='skill__container'>
          <h3>Frontend Development</h3>
          <div className='skills__content'>
            {
              frontend.map((item,index)=> 
              <article className='skill__detail'>
                <IoCheckmarkCircleSharp className='skill__detail-icon'/>
                 <div>
                  <h4>{item.title}</h4>
                  <small>{item.experience}</small>
                 </div>     
              </article>)
            }
          </div>
        </div>
        <div className='skill__container'>
          <h3>Backend Development</h3>
          <div className='skills__content'>
            {
                backend.map((item,index)=> 
                <article className='skill__detail'>
                  <IoCheckmarkCircleSharp className='skill__detail-icon'/>
                  <div>
                    <h4>{item.title}</h4>
                    <small>{item.experience}</small>
                  </div>
                </article>)
              }
          </div>
        </div>
        </div>
    </section>
  )
}

export default Skills