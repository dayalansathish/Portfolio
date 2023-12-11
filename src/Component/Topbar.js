import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Topbar() {
    return (
        <div class="container-fluid">
            <nav class="navbar fixed-top navbar-expand-lg bgdark">
  <div class="container-fluid">
    <a class="navbar-brand text-white fs-3 fw-bold fst-italic mx-5 " href="#"><s>PORTFOLIO</s></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <Link to={"/"}>
        <a class="nav-link active fs-4 fw-semibold text-white mx-5 hover" aria-current="page" href="#">Home</a>
        </Link>
        <Link to={"/About"}>
        <a class="nav-link fs-4 fw-semibold text-white mx-5" href="#">About</a>
        </Link>
        <Link to={"/Skill"}>
        <a class="nav-link fs-4 fw-semibold text-white mx-5" href="#">Skill</a>
        </Link>
        <Link to={"/Project"}>
        <a class="nav-link fs-4 fw-semibold text-white mx-5" >Project</a>
        </Link>
        <Link to={"/Contact"}>
        <a class="nav-link fs-4 fw-semibold text-white mx-5" >Contact</a>
        </Link>
      </div>
    </div>
    {/* <div class="d-flex justify-content-between">
            <a class="mx-5" href='https://www.instagram.com/smokey_sk/?next=%2F' target='_blank'>
              <i class="fa fa-instagram text-danger fs-3" aria-hidden="true"></i>
            </a>
            <a class="mx-5" href=''>
              <i class="fa fa-facebook fs-3" aria-hidden="true"></i>
            </a>
            <a class="mx-5" href=''>
              <i class="fa fa-twitter text-white fs-3" aria-hidden="true"></i>
            </a>
            
          </div> */}

  </div>
</nav>
  </div>
    )
}

export default Topbar