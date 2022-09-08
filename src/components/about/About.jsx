import React from 'react'
import './About.css'
import ME from '../../asserts/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5 className='ab'>Get to Know</h5>
      <h2 className='abc'>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me_img">
              <img src={ME} alt='about img'></img>
          </div>
          </div> 
      <div className='about__content'>
        <div className="about__cards">
           
              <article className="about__card">
                <FaAward  className='about__icon'/>
                  <h5>Education</h5>
                  <small>CSE Final Year</small>
              </article>
            

            
              <article className="about__card">
                <FiUsers  className='about__icon'/>
                  <h5>Clients</h5>
                  <small>Open for Work</small>
              </article>
           
            
              <article className="about__card">
                <VscFolderOpened  className='about__icon'/>
                  <h5>Projects</h5>
                  <small>5+ completed</small>
              </article>
              
        </div>    


            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum incidunt corrupti nesciunt obcaecati perferendis alias, ipsam impedit assumenda minima fugiat sit maiores iure minus doloribus itaque dolor voluptate optio ab?
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk </a>
       
        </div>
        </div>
    </section>
  )
}

export default About