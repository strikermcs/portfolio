import React from 'react'
import { portfolioList } from './portfolio.list'
import PortfolioItem from './PortfolioItem'
import './portfolio.css'

function Portfolio() {
  return (
    <section id='portfolio' className='observe'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioList.map((portfolio) => {
          return <PortfolioItem portfolio={portfolio} key={portfolio.id}/>
        })}
      </div> 
    </section>
  )
}

export default Portfolio