import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import About from './About'

function Home() {
  return (
    <>
    <div className='container'>
      <div className='home'>
        <h1 className='text-white display-1 fw-normal fst-italic'>Sathish Kumar D</h1>
        <h4 className='text-white-50 display-5'>Full Stack Developer</h4>
      </div>
      <div className='text-center'>
        <a href='https://github.com/dayalansathish?tab=overview&from=2023-11-01&to=2023-11-30' target='-blank'>
        <i class="fa fa-github fs-1 m-3 text-dark" aria-hidden="true"></i>
        </a>
        <a href='https://www.linkedin.com/in/sathish-kumar-7aa310250/' target='-blank'>
        <i class="fa fa-linkedin-square fs-1 text-dark m-3" aria-hidden="true"></i>
        </a>
        <a href='https://twitter.com/skvilla_25' target='-blank'>
        <i class="fa fa-twitter fs-1 m-3 text-dark" aria-hidden="true"></i>
        </a>
      </div>
      <div className='mt-3 d-flex justify-content-center'>
        <a href='https://drive.google.com/file/d/1hSFdxLVHL8OCbDRRBqy8VlL1CcXUG4Bg/view?usp=sharing' target='-blank'>
      <button className='btn btn-lg btn-light  fst-italic border-2 mx-2'>Get Resume</button>
      </a>
      <Link to={"About"}>
      <button className='btn btn-lg btn-light  fst-italic border-2 mx-2'>About Me</button>
      </Link>
      </div>
    </div>
    

      <Outlet></Outlet>
    </>
  )
}

export default Home