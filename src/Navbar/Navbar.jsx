import React from 'react'
import   './Navbar.css'
const navbar= ()=>{
    return(
        <div>
            <div>
            <a className='nav-links' href='/myskills'>Technical Skills</a>
            <a className='nav-links' href='/myprojects'>My Projects</a>
            <a className='nav-links' href='/'>About Me</a>
            </div>
        </div>
    )

}

export default navbar