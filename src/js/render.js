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

        const addToDoBtn = document.createElement("button")
        addToDoBtn.textContent = "Add new To Do Item"
        addToDoBtn.id = "add_task"
        addToDoBtn.dataset.projectId = project.id
        projectCard.appendChild(addToDoBtn)
        
        this.content.appendChild(projectCard)

    }

    createAddToDoForm(){
        const toDoAddForm = document.createElement("div")
        
        const tittleDiv = document.createElement("div")
        const titleLable = document.createElement("label")
        titleLable.textContent = "Title: "
        titleLable.for = "toDoTitle"
        const titleInput = document.createElement("input")
        titleInput.type = "text"
        titleInput.name = "toDoTitle"
        titleInput.id = "toDoTitle"

        tittleDiv.appendChild(titleLable)
        tittleDiv.appendChild(titleInput)

        toDoAddForm.appendChild(tittleDiv)

        const desDiv = document.createElement("div")
        const desLabel = document.createElement("label")
        desLabel.textContent = "Description: "
        desLabel.for = "toDoDes"
        const desInput = document.createElement("textarea")
        desInput.name ="toDoDes"
        desInput.id = "toDoDes"
        desInput.cols = "50"
        desInput.rows = "10"

        desDiv.appendChild(desLabel)
        desDiv.appendChild(desInput)

        toDoAddForm.appendChild(desDiv)

        const dueDateDiv = document.createElement("div")
        const dueDateLabel = document.createElement("label")
        dueDateLabel.for = "toDoDueDate"
        dueDateLabel.textContent = "Select due date"
        const dueDateInput = document.createElement("input")
        dueDateInput.type = "datetime-local"
        dueDateInput.name = "toDoDueDate"
        dueDateInput.id = "toDoDueDate"

        dueDateDiv.appendChild(dueDateLabel)
        dueDateDiv.appendChild(dueDateInput)

        toDoAddForm.appendChild(dueDateDiv)

        const priorityDiv = document.createElement("div")
        const priorityLable = document.createElement("label")
        priorityLable.textContent = "Select priority: "
        priorityDiv.appendChild(priorityLable)
        const priorities = [
            {value: "low", lable: "🔵 low"},
            {value: "medium", lable: "🟡 medium"},
            {value: "high", label: "🔴 high"}
        ]
        priorities.forEach(({value, label}) => {
            const radioLabel = document.createElement("label")
            radioLabel.textContent = `${label}`

            const radioInput = document.createElement("input")
            radioInput.type = "radio"
            radioInput.name = "priority"
            radioInput.value = value

            priorityDiv.appendChild(radioLabel)
            priorityDiv.appendChild(radioInput)
        })

        toDoAddForm.appendChild(priorityDiv)

        const notesDiv = document.createElement("div")
        const notesLabel = document.createElement("label")
        notesLabel.for = "toDoNotes"
        notesLabel.textContent = "Notes: "
        const notesInput = document.createElement("textarea")
        notesInput.name = "toDoNotes"
        notesInput.id = "toDoNotes"
        notesInput.cols = "50"
        notesInput.rows = "4"

        notesDiv.appendChild(notesLabel)
        notesDiv.appendChild(notesInput)

        toDoAddForm.appendChild(notesDiv)

        const addBtn = document.createElement("button")
        addBtn.id = "submitToDoInfo"
        addBtn.textContent = "Submit"

        toDoAddForm.appendChild(addBtn)
        
        this.content.appendChild(toDoAddForm)
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