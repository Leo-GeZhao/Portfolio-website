import data from './data'
import HeaderImg from '../../assets/HeaderImg.jpg'
import './header.css'


const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImg} alt="Header Portrait" />
        </div>
        <h2>Hello World <span className='header__emoji'>👋</span></h2>
        <p>My name is Leo Zhao, I'm a software developer based in Toronto, Ontario, Canada. I am passionate about building software that solves problems, big and small, in elegant and efficient ways.  </p>
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