import { Project } from "./projects"
import { toDoItem } from "./to-do-item"
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

    createNewToDo(projectId){
        const project = this.projects.find(p => p.id === projectId)

        const title = document.getElementById("toDoTitle").value
        const des = document.getElementById("toDoDes").value
        const dueDate = document.getElementById("toDoDueDate").value
        const selectedPriority = document.querySelector('input[name="priority"]:checked')
        const notes = document.getElementById("toDoNotes").value
        
        const newToDo = new toDoItem(title, des, dueDate, selectedPriority, notes, false)
        project.addToDo(newToDo)
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