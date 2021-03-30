import React from 'react'
import  './Navbar.css'
import {Link} from 'react-router-dom'
const navbar= (props)=>{
    return(
        <div>
            <div className='navbar'>
            <Link className='nav-links' to={{pathname:'/myskills'}} >Technical Skills</Link>
            <Link className='nav-links' to={{pathname:'/myprojects'}}>My Projects</Link>
            <Link className='nav-links' to={{pathname:'/'}}>About Me</Link>
            <a href="https://www.surveymonkey.com/r/M9FS3Z5" target="_blank" className='nav-links'>Contact Me</a>
            </div>
        </div>
    )

}

export default navbar