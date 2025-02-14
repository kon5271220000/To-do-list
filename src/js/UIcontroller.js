import { Project } from "./projects"
import { Render } from "./render"
export class UIcontroller{
    projects = []
    render = new Render()

    addProject(project){
        this.projects.push(project)
    }

    getProjectAddForm(){
        this.render.createProjectAddForm()
    }

    getToDoAddForm(){
        this.render.createAddToDoForm()
    }

    createNewProject(){
        const nameProject = document.getElementById("nameProject").value

        const idProject = this.projects[this.projects.length-1].id + 1

        const newProject = new Project(idProject, nameProject, false)

        this.addProject(newProject)
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
        

        if(!project){
            console.error("project not found")
            return
        }

        for(let i = 0; i < project.todos.length; i++){
            this.render.createToDoCard(project.todos[i], container)
        }
    }

    hideProject(projectId){
        for(let i = 0; i < this.projects.length; i++){
            const removeProjectCard = document.getElementById((`${this.projects[i].id}`))
            if(this.projects[i].id !== projectId && removeProjectCard){
                removeProjectCard.style.display = "none"
            }
        }
    }

    hideToDoListBtn(){
        this.render.changeViewToDoButton()
    }
}