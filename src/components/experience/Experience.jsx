import React from 'react'
import './Experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

function Experience() {
  return (
    <section id='experience'>
      <h5>skills</h5>
      <h2>Skills</h2>

      <div className='container experience__container'>
          <div className="experience__frontend">
              <h3>Frontend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon' />
                  <div>
                  <h4>HTML</h4>
                  <small className='text-align'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon' />
                  <div>
                  <h4>CSS</h4>
                  <small className='text-align'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon' />
                  <div>
                  <h4>JavaScript</h4>
                  <small className='text-align'>Beginner</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon' />
                  <div>
                  <h4>Bootstrap</h4>
                  <small className='text-align'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon' />
                  <div>
                  <h4>XML</h4>
                  <small className='text-align'>Beginner</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon' />
                  <div>
                  <h4>React</h4>
                  <small className='text-align'>Beginner</small>
                  </div>
                </article>
              </div>
          </div>
          <div className="experience__backend">
          <h3>Backend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon' />
                  <div>
                  <h4>PHP</h4>
                  <small className='text-align'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon' />
                  <div>
                  <h4>MYSQL</h4>
                  <small className='text-align'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon' />
                 <div>
                 <h4>Firebase</h4>
                  <small className='text-align'>Beginner</small>
                 </div>
                </article>
                
              </div>
          </div>
      </div>
    </section>
  )
}

export default Experience