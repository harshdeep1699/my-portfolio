import ProjectCard from "./ProjectCard"
import projectArray from "./ProjectList"
import './projects.css'


const projects=()=>{
    return(
        <div className='projects'>
            {projectArray.map((ele,index)=>{
                return <ProjectCard key={index} name={ele.name} path={ele.path}></ProjectCard>
            })}
        </div>
    )
}

export default projects