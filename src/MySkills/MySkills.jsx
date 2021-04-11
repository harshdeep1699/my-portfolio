import './MySkills.css'
import SkillCard from './SkillCard'
import skillList from './SkillList'


const mySkills=()=>{
    return(
        <div className="myskillPage">
            {skillList.map((skill,index)=>{
                return <SkillCard key={index} skill={skill} index={index}></SkillCard>
            })}
        </div>
    )
}

export default mySkills