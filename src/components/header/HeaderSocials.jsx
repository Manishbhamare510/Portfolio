import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tanmay-goregaonkar-99366021b" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/TanmayGoregaonkar" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.codechef.com/users/tanmayg790"><SiCodechef/></a>
    </div>
  )
}

export default HeaderSocials