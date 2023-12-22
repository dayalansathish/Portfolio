import React from 'react'
import './Skill.css'
import { useNavigate } from 'react-router-dom'
function Skill() {
  const navigate = useNavigate()

  return (
    <div className='container'>
      <div className='skill-empty'>
        <div className='text-center py-2'>
          <img src='skill.gif' width={'50px'} height={'50px'} className='mb-4' /><span className='fs-1 text-black'>Skill</span>
        </div>
        <div className='d-flex justify-content-between'>
          <div onClick={()=>navigate('/About')}>
            <i class="fa fa-arrow-circle-left fs-1 text-black p-2" aria-hidden="true"></i>
          </div>
          <img src='Tech.png' width={'100px'} height={'100px'} className='' />
         <div onClick={()=>navigate('/Project')}>
            <i class="fa fa-arrow-circle-right fs-1 text-black p-2" aria-hidden="true"></i>
            </div>
        </div>
        <div className='text-center p-3'>
          <h2>Technical</h2>
          <p className='fs-5'>I have become confident using following technologies</p>
        </div>
        <div className='container w-75 border border-secondary rounded-5 skill-container'>
          <div className='row m-3'>
            <div className='anime col-3'>
              <img src='html-logo.png' width={'80px'} height={'80px'} className='' />
              <h5 className='p-2'>HTML</h5>
              <div className='progress-bar my-2 border border-secondary rounded-5'>
              <span className='percentage border border-dark rounded-5'>75%</span>
              </div>
              </div>
            <div className='anime col-3'>
              <img src='css-logo.png' width={'80px'} height={'80px'} />
              <h5 className='p-2'>CSS</h5>
              <div className='progress-bar my-2 border border-secondary rounded-5'>
              <span className='percentage border border-dark rounded-5'>75%</span>
              </div>
            </div>
            <div className='anime col-3'>
              <img src='javascript-logo.png' width={'80px'} height={'80px'} />
              <h5 className='p-2'>JavaScript</h5>
              <div className='progress-bar my-2 border border-secondary rounded-5'>
              <span className='percentage javascript border border-dark rounded-5'>50%</span>
              </div>
            </div>
            <div className='anime col-3'>
              <img src='react.png' width={'80px'} height={'80px'} />
              <h5 className='p-2'>React</h5>
              <div className='progress-bar my-2 border border-secondary rounded-5'>
              <span className='percentage react border border-dark rounded-5'>50%</span>
              </div>
            </div>
            <div className='anime col-3'>
              <img src='nodejs.png' width={'80px'} height={'80px'} />
              <h5 className='p-2'>NodeJs</h5>
              <div className='progress-bar my-2 border border-secondary rounded-5'>
              <span className='percentage node border border-dark rounded-5'>50%</span>
              </div>
            </div>
            <div className='anime col-3'>
              <img src='express-icon.png' width={'80px'} height={'80px'} />
              <h5 className='p-2'>Express</h5>
              <div className='progress-bar my-2 border border-secondary rounded-5'>
              <span className='percentage express border border-dark rounded-5'>50%</span>
              </div>
            </div>
            <div className='anime col-3'>
              <img src='mongo-db.png' width={'80px'} height={'80px'} />
              <h5 className='p-2'>MongoDb</h5>
              <div className='progress-bar my-2 border border-secondary rounded-5'>
              <span className='percentage mongodb border border-dark rounded-5'>50%</span>
              </div>
            </div>
            <div className='anime col-3'>
              <img src='bootstrap-logo.png' width={'80px'} height={'80px'} />
              <h5 className='p-2'>Bootstrap</h5>
              <div className='progress-bar my-2 border border-secondary rounded-5'>
              <span className='percentage border border-dark rounded-5'>75%</span>
              </div>
            </div>
            <div className='anime col-3'>
              <img src='github.png' width={'80px'} height={'80px'} />
              <h5 className='p-2'>GitHub</h5>
              <div className='progress-bar my-2 border border-secondary rounded-5'>
              <span className='percentage github border border-dark rounded-5'>50%</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Skill