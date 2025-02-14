import { toDoItem } from "./to-do-item"

export class Render{
    content = document.getElementById("content")

    createProjectAddForm(){
        const projectAddForm = document.createElement("div")

        const nameLabel = document.createElement("label")
        nameLabel.for = "nameProject"
        nameLabel.textContent = "Name: "
        const nameInput = document.createElement("input")
        nameInput.type = "text"
        nameInput.name = "nameProject"
        nameInput.id = "nameProject"

        projectAddForm.appendChild(nameLabel)
        projectAddForm.appendChild(nameInput)

        const submitInput = document.createElement("button")
        submitInput.textContent = "Add"
        submitInput.id = "addProjectFormBtn"

        projectAddForm.appendChild(submitInput)
        
        this.content.appendChild(projectAddForm)
    }

    createProjectCard(project){
        const projectCard = document.createElement("div")
        projectCard.id = `${project.id}`

        const projectTitle = document.createElement("h3")
        projectTitle.textContent = `#${project.id}-${project.name}`
        projectCard.appendChild(projectTitle)

        const projectEditButton = document.createElement("button")
        projectEditButton.id = "edit_project"
        projectEditButton.textContent = "edit"
        projectCard.appendChild(projectEditButton)

        const projectDes = document.createElement("p")
        projectDes.innerHTML = `<strong>Created At: </strong>${project.createdAt}<br>
                                <strong>Updated At: </strong>${project.updateAt}<br>
                                <strong>Default: </strong>${project.isDefault}`
        projectCard.appendChild(projectDes)

        const viewTaskButton = document.createElement("button")
        viewTaskButton.textContent = "View To Do List"
        viewTaskButton.id = "view_lists"
        viewTaskButton.dataset.projectId = project.id
        projectCard.appendChild(viewTaskButton)
        
        this.content.appendChild(projectCard)

    }

    createToDoCard(todoItem, container){
        const toDoCard = document.createElement("div")
        toDoCard.className = "toDoItem"
        toDoCard.id = "toDoItem"

        const toDoTitle = document.createElement("h4")
        toDoTitle.textContent = todoItem.title
        toDoCard.appendChild(toDoTitle)

        const todoInfo = document.createElement("p")
        todoInfo.innerHTML = `<strong>Desription: <strong> ${todoItem.description}<br>
                            <strong>Due Date: <strong> ${todoItem.dueDate}<br>
                            <strong>Priority: <strong> ${todoItem.priority}<br>
                            <strong>Notes: <strong> ${todoItem.notes}<br>
                            <strong>Completed: <strong> ${todoItem.isCompleted}`

        toDoCard.appendChild(todoInfo)

        container.appendChild(toDoCard)
    }

    changeViewToDoButton(){
        const viewToDoButton = document.getElementById("view_lists")

        viewToDoButton.textContent = "Hide to Do List"
        viewToDoButton.id = "hide_list"
    }


}