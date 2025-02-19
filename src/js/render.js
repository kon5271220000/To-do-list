export class Render{
    constructor(){
        this.container = document.getElementById("content")
    }

    showProjectCard(project){
        const card = document.createElement("div")
        card.classList.add("project-card")
        card.innerHTML = `
            <h3>#${project.id}-${project.name}</h3>
            <p><strong>Created At:</strong>${project.createdAt}</p>
            <p><strong>Updated At:</strong>${project.updatedAt}</p>
            <button class="show-toDos">Show To Do Item</button>
            <button class="add-toDo">Add To Do Item</button>
            <div class="to-do-list" style=" dislay:none;">
                ${project.toDoList.forEach(item => {
                    this.showToDoItemCard(item, project.id)
                })}
            </div>`
        this.container.appendChild(card)
        
        this.toggleToDoItem(card)
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

    toggleToDoItem(card){
        card.querySelector('.show-toDos').addEventListener('click', () => {
            const toDoList = card.querySelector('.to-do-list')
            toDoList.style.display = toDoList.style.display === 'none' ? 'block' : 'none'
        })
    }

    showToDoItemCard(toDoItem, projectId){
        return `
            <div class="to-do-item-card">
            <h4><strong>${toDoItem.title}</strong></h4>
            <p><strong>Description: </strong>${toDoItem.description}</p>
            <p><strong>Due Date: </strong>${toDoItem.dueDate}</p>
            <p><strong>Priority: </strong>${toDoItem.priority}</p>
            <p><strong>Notes: </strong>${toDoItem.notes}</p>
            <button class="mark-as-done">Mark as done</button>
            <button class="edit-to-do">Edit</button>
            <button class="delete-to-do">Delete</button>
            </div>`
    }
}