import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-dark " style={{
                fontSize: " 17px",
                fontFamily: "monospace",
            }}>
                <div className="container-fluid">
                    <img src="" alt="" srcset="" />
                    <h4 style={{color:"white"}}><i class="fa fa-smile-o" style={{margin:"4px"}}></i>Lila Parmar</h4>
                    <div className="collapse navbar-collapse" id="nav45">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link buten " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link buten" to="./Skills">Skills</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link buten" to="./Projects">Projects</Link>
                            </li>
                           
                             
                                
                           
                            <li className="nav-item ">
                                <Link className="nav-link buten" to="./Contact">Contact</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link buten" to="./About">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn  buten btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
