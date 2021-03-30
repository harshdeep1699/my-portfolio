import './MySkills.css'
import skillList from './SkillList'


const mySkills=()=>{
    return(
        <div className="container">
            My skills include:
            <ul>
            {skillList.map(skill=>{
                return <li>{skill}</li>
            })}
            </ul>
        
        </div>
    )
}

export default mySkills