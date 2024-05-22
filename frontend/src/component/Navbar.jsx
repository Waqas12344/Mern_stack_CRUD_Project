import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      MERN
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
    
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>
            Create Post
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/all"}>
            All Post
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar