import React from 'react'
import RE from '../../asserts/Resume_165.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RE} download className='btn'>Download Resume</a>
         {/* for it to download we are adding download attribute */}
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA