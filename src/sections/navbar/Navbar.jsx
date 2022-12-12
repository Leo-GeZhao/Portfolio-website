/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.css'
import data from './data'
const Navbar = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <a href="#"><span className='nav__logo'>Leo Zhao</span></a>
        <ul className='nav__menu'>
          {
            data.map((item,index)=><li key={index+1}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar