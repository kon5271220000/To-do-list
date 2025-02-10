import { Project } from "./projects"

export class UIcontroller {
    projects = []

    addProject(){
        const id = document.getElementById("id").value
        const name = document.getElementById("name").value
        const newProject = new Project(id, name, false)
        this.projects.push(newProject)
        console.log("Add project success")
    }

    addProjectForm(){
        const container = document.getElementById("content")

        const addProjectForm = document.createElement("form")
        const idDiv = document.createElement("div")
        const idLabel = document.createElement("label")
        idLabel.textContent = "ID: "
        idLabel.for = "id"
        const idInput = document.createElement("input")
        idInput.type = "text"
        idInput.name = "id"
        idInput.id = "id"

        idDiv.appendChild(idLabel)
        idDiv.appendChild(idInput)

        addProjectForm.appendChild(idDiv)

        const nameDiv = document.createElement("div")
        const nameLabel = document.createElement("label")
        nameLabel.textContent = "Name: "
        nameLabel.for = "name"
        const nameInput = document.createElement("input")
        nameInput.type = "text"
        nameInput.name = "name"
        nameInput.id = "name"

        nameDiv.appendChild(nameLabel)
        nameDiv.appendChild(nameInput)
        addProjectForm.appendChild(nameDiv)

        const submitBtn = document.createElement("button")
        submitBtn.textContent = "Add"
        submitBtn.id = "submit"
        addProjectForm.appendChild(submitBtn)

        container.appendChild(addProjectForm)
    }

    viewAllToDo(){
        const container = document.getElementById("content")

        const projectsContainer = document.createElement("div")

        for(let i = 0; i < this.projects.length; i++){
            this.creatProjectCard(projectsContainer, i)
        }

        container.appendChild(projectsContainer)
    }

    creatProjectCard(projectsContainer, index){
        const projectCard = document.createElement("div")
            
        const projectName = document.createElement("h3")
        projectName.textContent = this.projects[index].name
        projectCard.appendChild(projectName)

        const viewToDoBtn = document.createElement("button")
        viewToDoBtn.textContent = "View tasks"
        projectCard.appendChild(viewToDoBtn)

        projectsContainer.appendChild(projectCard)
    }

    vie
}
