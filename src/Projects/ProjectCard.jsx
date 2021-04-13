import './ProjectCard.css'
const projectCard=(props)=>{
    return(
        <a  target="_blank" href={props.url}>
            <div className='cardblock'>
            <img className='imgofproj' src={props.path} alt={props.path}></img>
            <br></br>
            <p className="projTitle">{props.name}</p>
            </div>
        </a>
        
    )

}

export default projectCard