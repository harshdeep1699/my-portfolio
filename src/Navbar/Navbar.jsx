import React from 'react'
import  './Navbar.css'
import {Link} from 'react-router-dom'
const navbar= (props)=>{
    return(
        <div>
            <div>
            <Link className='nav-links' to={{pathname:'/myskills'}} >Technical Skills</Link>
            <Link className='nav-links' to={{pathname:'/myprojects'}}>My Projects</Link>
            <Link className='nav-links' to={{pathname:'/'}}>About Me</Link>
            </div>
        </div>
    )

}

export default navbar