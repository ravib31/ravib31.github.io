import React from 'react'

const CTA = () => {
  const URL="https://drive.google.com/file/d/1l55gztM4qhklAstnH0I7h8y1MmvdRZ6r/view?usp=sharing"
  return (
    <div className='cta'>
        {/* <a href="https://drive.google.com/file/d/1l55gztM4qhklAstnH0I7h8y1MmvdRZ6r/view?usp=sharing" className='btn'  id="resume-button-2">Resume</a> */}
        <a
            href="https://drive.google.com/u/0/uc?id=1l55gztM4qhklAstnH0I7h8y1MmvdRZ6r&export=download"
              target="_blank"
              download="Ravi-bhashkar-Resume.pdf"
              rel="noreferrer"
              id="resume-button-2"
              class="nav-link resume"
              className='btn'
             
            >
              Resume
            </a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA