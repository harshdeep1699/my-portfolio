import './ProjectCard.css'
const projectCard=(props)=>{
    return(
        <div className='cardblock'>
            <img className='imgofproj' src={props.path} alt={props.path}></img>
            <br></br>
            <p className='projname'>{props.name}</p>
            </div>
    )

}

export default projectCard