import './MySkills.css'
import SkillCard from './SkillCard'
import skillList from './SkillList'


const mySkills=()=>{
    return(
        <div className="container">
            {skillList.map((skill,index)=>{
                return <SkillCard skill={skill} index={index}></SkillCard>
            })}
        </div>
    )
}

export default mySkills