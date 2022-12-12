import HeaderImg from '../../assets/HeaderImg.jpg'
import data from './data'
import './header.css'


const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImg} alt="Header Portrait" />
        </div>
        <h3>Leo Zhao</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor id, quasi, architecto a commodi aut quis sit laborum ratione illo ipsa accusantium asperiores iste aliquid non quam ea adipisci rerum?</p>
        <div className='header__cta'>
          <a href="#contact" className='btn'>Let's Talk</a>
          <a href="#portfolio" className='btn'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map((item,index)=> <a key={index+1} href={item.link} target="_blank"
            rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header