import ProjectCard from "./ProjectCard"
import projectArray from "./ProjectList"



const projects=()=>{
    return(
        <div>
            <center>Have been working on the following projects</center>
            <br></br>
            <br></br>
            <br></br>
            {projectArray.map(ele=>{
                return <ProjectCard name={ele.name} path={ele.path}></ProjectCard>
            })}
        </div>
    )
}

export default projects