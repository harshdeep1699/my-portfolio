import React, { useState } from 'react'
import  './Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'



const Navbard= (props)=>{
    const [expanded, setExpanded] = useState(false);
    return(
      
        <div>
            <Navbar expanded={expanded} className='navbar' fixed="top"  expand="lg">
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link onClick={() => setExpanded(false)} className='nav-links' to={{pathname:'/my-portfolio/'}}>About Me</Link>
                <Link onClick={() => setExpanded(false)} className='nav-links' to={{pathname:'/my-portfolio/myskills'}} >Technical Skills</Link>
                <Link onClick={() => setExpanded(false)} className='nav-links' to={{pathname:'/my-portfolio/myprojects'}}>My Projects</Link>    
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
    )
    

}

export default Navbard