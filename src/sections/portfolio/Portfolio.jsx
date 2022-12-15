import data from './data'
import Card from '../../components/Card'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id="portfolio">
        <h2>Recent Projects</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, nisi consectetur labore totam ea omnis, libero asperiores facilis vel, quia dolores natus quos modi in tempora sed praesentium qui molestias.</p>
        <div className='container portfolio__cards'>
          {
            data.map((item,index)=>
            <Card key={index+1} className="portfolio__card">
                      <img src={item.img} alt="" className="portfolio__card-img"/>
                      <h5>{item.title}</h5>
                      <small>{item.desc}</small>
                      <div className='btn__group'>
                        <a href={item.demo} target="_blank"
            rel="noopener noreferrer" className='btn portfolio-btn'>Demo</a>
                        <a href={item.github} target="_blank"
            rel="noopener noreferrer" className='btn portfolio-btn'>Github</a>
                      </div>
            </Card>)
          }
        </div>
    </section>
  )
}

export default Portfolio