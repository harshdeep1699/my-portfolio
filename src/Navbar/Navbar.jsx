import React from 'react'
import  './Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
const navbar= (props)=>{
    return(
        <div>
            <Navbar className='navbar' fixed="top"  expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link className='nav-links' to={{pathname:'/'}}>About Me</Link>
                <Link className='nav-links' to={{pathname:'/myskills'}} >Technical Skills</Link>
                <Link className='nav-links' to={{pathname:'/myprojects'}}>My Projects</Link>    
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            {/* <div className='navbar'>
            
            <a href="https://www.surveymonkey.com/r/M9FS3Z5" target="_blank" className='nav-links'>Contact Me</a>
            </div> */}
        </div>
    )

}

export default navbar