import React from 'react'
import './Services.css'
import img1 from '../../asserts/pic.jpg'



const data = [
  {
    id:1,
    image:img1,
    title:'Chat box using react js',
    github:'',
    demo:''
  },
  {
    id:2,
    image:img1,
    title:'Chat box using react js',
    github:'',
    demo:''
  },
  {
    id:3,
    image:img1,
    title:'Chat box using react js',
    github:'',
    demo:''
  },
  {
    id:4,
    image:img1,
    title:'Chat box using react js',
    github:'',
    demo:''
  },
  {
    id:5,
    image:img1,
    title:'Chat box using react js',
    github:'',
    demo:''
  },
  {
    id:6,
    image:img1,
    title:'Chat box using react js',
    github:'',
    demo:''
  },
]

const Services = () => {
  return (
    <section id='services'>
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>

      <div className='container portfolio__container'>
       {
        data.map(({id,image,title,github,demo}) => {
         return(
          <article key={id} className='portfolio_item'>
          <div className='portfolio__item-image'>
           <img src={image} alt={title}></img>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a>
          </div>
        </article>
         )
        })
       }
      </div>
    </section>
  )
}

export default Services