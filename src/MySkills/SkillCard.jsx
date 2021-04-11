import './SkillCard.css'
const SkillCard=(props)=>{
    return(
            <div className="skill-card">
                <img className='skillImage' src={props.skill[1]} alt='jellp'></img>
                <p className='skillDesc'>{props.skill[0]}</p>
                <hr></hr>
            </div>
    )
}

export default SkillCard