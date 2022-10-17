import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Manish Bhamare</a>

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
        <a href='https://www.linkedin.com/in/manish-bhamare-64b337203/' target="_blank"><BsLinkedin/></a>
        
      </div>


      <div className="footer__copyright">
        <small>&copy; Manish Bhamare. All rights reserved.</small>
      </div>
    </footer>


  )
}

export default Footer