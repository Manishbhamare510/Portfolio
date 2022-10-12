import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Krushna Pulate</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="#" target='_blank'><FaFacebookF/></a>
        <a href="#" target='_blank'><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/krushna-pulate-29756421a/' target="_blank"><BsLinkedin/></a>
        
      </div>


      <div className="footer__copyright">
        <small>&copy; Krushna Pulate. All rights reserved.</small>
      </div>
    </footer>


  )
}

export default Footer