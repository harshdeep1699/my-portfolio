import ProjectCard from "./ProjectCard"
import projectArray from "./ProjectList"
import './projects.css'


const projects=()=>{
    return(
        <div className='projects'>
            {projectArray.map(ele=>{
                return <ProjectCard name={ele.name} path={ele.path}></ProjectCard>
            })}
        </div>
    )
}

export default projects