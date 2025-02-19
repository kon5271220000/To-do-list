export class Render{
    constructor(){
        this.container = document.getElementById("content")
    }

    showProjectCard(project){
        const card = document.createElement("div")
        card.classList.add("project-card")

        const toDoHtml = ''
        project.toDoList.forEach(item => {
            toDoHtml += this.showToDoItemCard(item, project.id)
        })

        card.innerHTML = `
            <h3>#${project.id}-${project.name}</h3>
            <p><strong>Created At:</strong>${project.createdAt}</p>
            <p><strong>Updated At:</strong>${project.updatedAt}</p>
            <button class="show-toDos">Show To Do Item</button>
            <button class="add-toDo">Add To Do Item</button>
            <div class="to-do-list" id="to-do-list${project.id}"></div>
            </div>`
        this.container.appendChild(card)
        
        this.toggleToDoItem(card, project)
    }

    addProjectForm(){
        const form = document.createElement("div")
        form.classList.add("project-add-form")
        form.innerHTML = `
            <h3>New Project</h3>
            <form>
                <label for="name">Name:</label>
                <input type="text" name="name" id="name">
            </form>
            <button class="add-project-btn" id="add-project-btn">Add</button>`

        this.container.appendChild(form)
    }

    toggleToDoItem(card, project){
        card.querySelector('.show-toDos').addEventListener('click', () => {
            this.showToDoItemCard(project)
        })
    }

    showToDoItemCard(project){
        const toDoListContain = document.getElementById(`to-do-list${project.id}`)
        
        project.toDoList.forEach(item => {
            const itemCard = document.createElement("div")
            itemCard.innerHTML = `
            <h4><strong>${item.title}</strong></h4>
                <p><strong>Description: </strong>${item.description}</p>
                <p><strong>Due Date: </strong>${item.dueDate}</p>
                <p><strong>Priority: </strong>${item.priority}</p>
                <p><strong>Notes: </strong>${item.notes}</p>
                <button class="mark-as-done">Mark as done</button>
                <button class="edit-to-do">Edit</button>
                <button class="delete-to-do">Delete</button>`
                toDoListContain.appendChild(itemCard)
            })   
    }
}