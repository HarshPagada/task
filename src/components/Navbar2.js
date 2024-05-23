import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/user/johndoe">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/user/johndoe">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/janedoe?age=25&city=NewYork">userProfile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar2
