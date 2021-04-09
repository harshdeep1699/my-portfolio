import './SkillCard.css'
const SkillCard=(props)=>{
    return(
            <div className="skill-card">
                <div className='header'>
                    <img className='skillImage' src={props.skill[2]} alt='jellp'></img>
                    <div className='skillDesc'>
                        <p>{props.skill[1]}</p>
                    </div>
                </div>
            </div>
    )
}

export default SkillCard