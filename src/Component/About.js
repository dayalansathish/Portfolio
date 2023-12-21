import React from 'react'
import './About.css'
import { Link, Outlet } from 'react-router-dom'
import profile from './../Component/profile.jpeg'
import { motion } from "framer-motion"
import Animated from './Animated'
function About() {
  return (
    <>
    <Animated>
    <div className='container'>
      <div className='about-empty p-0'>
        <div className='row'>
          <div className='col-5 '>
            <img src={profile} width={"400px"} height={"450px"} className='m-5 p-0 rounded-5 img' />
          </div>
          <div className='col-6 m-auto'>
            <h1 className='about my-3'>About</h1>
            <p className='p-3 about-content '>Hello, I am a highly motivated and skilled engineering graduate looking for an entry-level position as a software engineer. Strong in design and integration with intuitive problem-solving skills. Passionate to contribute ideas and learn new things.
             I am available for any kind of job opportunity that suits my interests</p>
             <div>
              <Link to={"/Contact"}>
              <button className='btn btn-outline-dark btn-lg fw-semibold  contact'>Contact Me <i class="fa fa-whatsapp p-1" aria-hidden="true"></i></button>
              </Link>
             </div>
             <div class="d-flex justify-content-center mt-3">
            <a class="mx-3" href='https://www.instagram.com/smokey_sk/?next=%2F' target='_blank'>
              <i class="fa fa-instagram text-dark fs-3" aria-hidden="true"></i>
            </a>
            <a class="mx-3" href=''>
              <i class="fa fa-facebook text-dark fs-3" aria-hidden="true"></i>
            </a>
            <a class="mx-3" href='https://twitter.com/skvilla_25' target='_blank'>
              <i class="fa fa-twitter text-dark fs-3" aria-hidden="true"></i>
            </a>
            
          </div>
          </div>
        </div>
      </div>
    </div>
    </Animated>
    <Outlet></Outlet>
    </>
  )
}

export default About