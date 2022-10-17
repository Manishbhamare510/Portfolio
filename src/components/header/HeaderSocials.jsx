import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/manish-bhamare-64b337203/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Manishbhamare510" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.codechef.com/users/manish510" target="blank"><SiCodechef/></a>
        <a href="https://codeforces.com/profile/manish510" target="blank"><SiCodeforces/></a>
    </div>
  )
}

export default HeaderSocials