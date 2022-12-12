import './navbar.css'
import Logo from '../../assets/Logo.jpg'
import data from './data'
import {IoColorPalette} from 'react-icons/io5'
const Navbar = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map((item,index)=><li key={index+1}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon'><IoColorPalette /></button>
      </div>
    </nav>
  )
}

export default Navbar