import './ProjectCard.css'
const projectCard=(props)=>{
    return(
        <div className='cardblock'>
            <img className='imgofproj' src={props.path} alt={props.path}></img>
            <br></br>
            <a className='projname' target="_blank" href='https://notes-app-59fe7.web.app/'>{props.name}</a>
            </div>
    )

}

export default projectCard