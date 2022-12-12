/* eslint-disable jsx-a11y/anchor-is-valid */
import {FiArrowUp} from 'react-icons/fi'
import './scrollup.css'
const scrollup = () => {
    window.addEventListener('scroll',function(){
        const scrollUp = document.querySelector('.scrollup');
        if(this.scrollY >= 500) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll')
        
    })
  return (
    <a href="#" className="scrollup">
        <FiArrowUp className='scrollup__icon'/>
    </a>
  )
}

export default scrollup