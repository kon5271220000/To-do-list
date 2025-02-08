import { Project } from "./projects"

export class UIcontroller {
    projects = []

    addProject(){
        const id = prompt("id: ")
        const name = prompt("name: ")
        const newProject = new Project(id, name, false)
        projects.push(newProject)
    }

    showProject(){
        for(let i = 0; i < projects.length; i++){
            console.log(projects[i])
        }
    }

    addProjectForm(){
        const container = document.getElementById("content")

        const addProjectForm = document.createElement("form")
        const idDiv = document.createElement("div")
        const idLabel = document.createElement("label")
        idLabel.textContent = "ID: "
        const idInput = document.createElement("input")

        idDiv.appendChild(idLabel)
        idDiv.appendChild(idInput)

        addProjectForm.appendChild(idDiv)

        const nameDiv = document.createElement("div")
        const nameLabel = document.createElement("label")
        nameLabel.textContent = "Name: "
        const nameInput = document.createElement("input")

        nameDiv.appendChild(nameLabel)
        nameDiv.appendChild(nameInput)

        addProjectForm.appendChild(nameDiv)
        container.appendChild(addProjectForm)
    }
}
