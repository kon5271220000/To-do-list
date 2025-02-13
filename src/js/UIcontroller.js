import { Project } from "./projects"
import { Render } from "./render"
export class UIcontroller{
    projects = []
    render = new Render()

    addProject(project){
        this.projects.push(project)
    }

    showProjects(){
        for(let i = 0; i < this.projects.length; i++){
            this.render.createProjectCard(this.projects[i])
        }
    }

    editProject(){

    }

    showToDoList(projectId){
        const project = this.projects.find(p => p.id === projectId)

        const container = document.getElementById(projectId)
        container.innerHTML = ''

        if(!project){
            console.error("project not found")
            return
        }

        for(let i = 0; i < project.todos.length; i++){
            this.render.createToDoCard(project.todos[i], container)
        }
    }
}