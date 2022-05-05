import React from 'react'

function PortfolioItem({portfolio}) {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={portfolio.image} alt="image" />
      </div>
      <h3>{portfolio.title}</h3>
      <div className="portfolio__item-cta">
        <a href={portfolio.gitHubUrl} className="btn" target="_blank">GitHub</a>
        <a href={portfolio.liveDemoUrl} className="btn btn-primary" target="_blank">Live Demo</a>
      </div>
    </article>
  )
}

export default PortfolioItem