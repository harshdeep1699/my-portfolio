import './SkillCard.css'
const SkillCard=(props)=>{
    return(
            <div className="skill-card">
                <img className='skillImage' src={props.skill[2]} alt='jellp'></img>
                <p className='skillDesc'>{props.skill[1]}</p>
            </div>
    )
}

export default SkillCard