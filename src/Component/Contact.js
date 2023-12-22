import React from 'react'
import './Contact.css'
import toast, { Toast } from 'react-hot-toast'
import Animated from './Animated'
function Contact() {
  const onSubmit = () => {
    toast.success("Sent Successfully ")
  }

  return (
    <>
    
    <div className='container'>
      <div className='contact-empty'>
        <h3 className='text-center text-black-50 my-2'>Get in touch</h3>
        <h1 className='text-center text-black'><img src='contact.gif' width={"50px"} height={"50px"} className='mx-2' />Contact</h1>
        <div className='row mt-5'>
          <div className='col-6 left'>
            <div className='m-3'>
              <input class="form-control" type="text" placeholder="Name" name='name' />
            </div>
            <div className='m-3'>
              <input class="form-control" type="text" placeholder="Mail" name='email' />
            </div>
            <div className='m-3'>
              <input class="form-control" type="text" placeholder="Subject" name='subject' />
            </div>
            <div className='m-3'>
              <textarea class="form-control-lg" type="text" placeholder="Message" name='message'></textarea>
            </div>
            <div className='m-3'>
              <button className='btn btn-lg btn-dark px-5' onClick={() => onSubmit()}>Submit</button>

            </div>

          </div>

          <div className='col-6 '>
            <div className='mx-3 my-2 '>
              <p className='fs-5 text-center '>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
            </div>
            <div className='text-center'>
              <a href='https://github.com/dayalansathish?tab=overview&from=2023-11-01&to=2023-11-30' target='_blank'>
            <img src='link.gif' width={'20px'} height={"20px"}/><i class="fa fa-github  display-3 text-dark" aria-hidden="true"></i>
            </a>
            </div>
            <div className='text-center my-4'>
            <i class="fa fa-envelope-o fs-4" aria-hidden="true"></i> - <span className='fs-5'>sathishkumarcse25@gmail.com</span>
            </div>
            <div className='text-center my-4'>
            <i class="fa fa-phone-square fs-4 mx-2" aria-hidden="true"></i><span className='fs-5'>+91 9791492092</span>
            </div>
            <div className='text-center my-4'>
            <i class="fa fa-map-marker fs-4 mx-2" aria-hidden="true"></i><span className='fs-5'>Thiruvalam , Vellore-632 515</span>
            </div>
          </div>
        </div>
      </div>


    </div>
    
    </>
  )
}

export default Contact