import React from 'react'
import './portfolio.css'
import dmc from '../../assests/krypto.jpg'
import NM from '../../assests/NM.png'
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={dmc} alt="" />
          </div>
          <h3>Web 3.0- Blockchain Wallet</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Manishbhamare510/Web3.0" className='btn' target="_blank">GitHub</a>
          <a href="#" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default portfolio