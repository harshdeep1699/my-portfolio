import './ProjectCard.css'
const projectCard=(props)=>{
    return(
        <a  target="_blank" href='https://notes-app-59fe7.web.app/'>
            <div className='cardblock'>
            <img className='imgofproj' src={props.path} alt={props.path}></img>
            <br></br>
            <p className="projTitle">{props.name}</p>
            </div>
        </a>
        
    )

}

export default projectCard