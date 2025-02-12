import { Project } from "./projects"
import { toDoItem } from "./to-do-item"

export class Logic {
    projects = []

    addProject(){
        const id = this.projects.length + 1
        const name = document.getElementById("name").value
        const newProject = new Project(id, name, false)
        this.projects.push(newProject)
        console.log("Add project success")
    }

    addToDoItem(project){
        const title = document.getElementById("title").value
        const description = document.getElementById("description").value
        const dueDate = document.getElementById("dueDate").value
        const priority = document.querySelector('input[name="priority"]:checked')
        const notes = document.getElementById("note")

        const newToDoItem = new toDoItem()
    }
}