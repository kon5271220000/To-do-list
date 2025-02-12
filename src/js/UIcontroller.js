import { Project } from "./projects"

export class UIcontroller {
    addProjectForm(){
        const container = document.getElementById("content")

        const addProjectForm = document.createElement("form")

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

    viewAllProjecs(projects){
        const container = document.getElementById("content")

        const projectsContainer = document.createElement("div")

        for(let i = 0; i < projects.length; i++){
            this.creatProjectCard(projectsContainer, projects, i)
        }

        container.appendChild(projectsContainer)
    }

    creatProjectCard(projectsContainer, projects, index){
        const projectCard = document.createElement("div")
        projectCard.id = projects[index].id

            
        const projectName = document.createElement("h3")
        projectName.textContent = `#${projects[index].id}-${projects[index].name}`
        projectCard.appendChild(projectName)
        

        const viewToDoBtn = document.createElement("button")
        viewToDoBtn.textContent = "View To Do"
        viewToDoBtn.id = "viewTasks"
        projectCard.appendChild(viewToDoBtn)

        const addToDoBtn = document.createElement("button")
        addToDoBtn.textContent = "Add To Do"
        addToDoBtn.id = "addToDo"
        projectCard.appendChild(addToDoBtn)

        projectsContainer.appendChild(projectCard)

        function getProjectId(){
            return projects[index].id
        }

    }


    addToDoItemForm(){
        const container = document.getElementById("content")

        const addToDoItemForm = document.createElement("form")

        const titleDiv = document.createElement("div")
        const titleLabel = document.createElement("label")
        titleLabel.textContent = "Title: "
        titleLabel.for = "title"
        const titleInput = document.createElement("input")
        titleInput.type = "text"
        titleInput.name = "title"
        titleInput.id = "title" 

        titleDiv.appendChild(titleLabel)
        titleDiv.appendChild(titleInput)

        addToDoItemForm.appendChild(titleDiv)

        const descriptionDiv = document.createElement("div")
        const descriptionLable = document.createElement("label")
        descriptionLable.textContent = "Description: "
        descriptionLable.for = "description"
        const descriptionInput = document.createElement("input")
        descriptionInput.type = "text"
        descriptionInput.name = "description"
        descriptionInput.id = "description"

        descriptionDiv.appendChild(descriptionLable)
        descriptionDiv.appendChild(descriptionInput)

        addToDoItemForm.appendChild(descriptionDiv)

        const dueDateDiv = document.createElement("div")
        const dueDateLable = document.createElement("lable")
        dueDateLable.textContent = "Due date: "
        dueDateLable.for = "dueDate"
        const dueDateInput = document.createElement("input")
        dueDateInput.type = "date"
        dueDateInput.id = "dueDate"
        dueDateInput.name = "dueDate"

        dueDateDiv.appendChild(dueDateLable)
        dueDateDiv.appendChild(dueDateInput)

        addToDoItemForm.appendChild(dueDateDiv)

        const priorityDiv = document.createElement("div")

        const priorities = [
            { value: "low", label: "🔵 Thấp" },
            { value: "medium", label: "🟡 Trung bình" },
            { value: "high", label: "🔴 Cao" }
        ];

        priorities.forEach(({value, label}) => {
            const radioLable = document.createElement("label")
            radioLable.textContent = `${label}`

            const radioInput = document.createElement("input")
            radioInput.type = "radio"
            radioInput.name = "priority"
            radioInput.value = value

            radioLable.appendChild(radioInput)
            priorityDiv.appendChild(radioLable)
        })
        
        addToDoItemForm.appendChild(priorityDiv)

        const noteDiv = document.createElement("div")
        const noteLable = document.createElement("label")
        noteLable.textContent = "Note: "
        noteLable.for = "note"
        const noteInput = document.createElement("input")
        noteInput.type = "text"
        noteInput.name = "note"
        noteInput.id = "note"

        noteDiv.appendChild(noteLable)
        noteDiv.appendChild(noteInput)

        addToDoItemForm.appendChild(noteDiv)

        const checkListBtn = document.createElement("button")
        checkListBtn.textContent = "Add Check List"
        addToDoItemForm.appendChild(checkListBtn)

        const submitBtn = document.createElement("button")
        submitBtn.textContent = "Submit"
        submitBtn.id = "appendToDoItem"

        addToDoItemForm.appendChild(submitBtn)

        container.appendChild(addToDoItemForm)
    }

    viewToDos(){
        
    }

    createToDoCard(){
        
    }
}
