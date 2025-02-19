import { ToDoItem } from "./toDoItem"
import { UIController } from "./uiController"
export class Render{
    constructor(ui){
        this.container = document.getElementById("content")
        this.ui = ui
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
            <div class="to-do-list" id="to-do-list${project.id}"></div>
            </div>`
        this.container.appendChild(card)
        
        this.toggleToDoItem(card, project)
        this.toggleAddToDoItemForm(card, project)

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

    toggleAddToDoItemForm(card, project){
        card.querySelector('.add-toDo').addEventListener('click', () => {
            this.addToDoItemForm(project)

            document.querySelector('.submit-add-to-do').addEventListener('click', (event) => {
                event.preventDefault()
                const title = document.getElementById("title").value
                const description = document.getElementById("description").value
                const dueDate = document.getElementById("due-date").value
                const priority = document.getElementById("priority").value
                const notes = document.getElementById("notes")
                
                const newItem = new ToDoItem(title, description, dueDate, priority, notes, false)

                this.ui.addToDoItem(project, newItem)
            })
        })
    }

    showToDoItemCard(project){
        const toDoListContain = document.getElementById(`to-do-list${project.id}`)
        toDoListContain.innerHTML =''
        
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

    addToDoItemForm(project){
        const toDoListContain = document.getElementById(`to-do-list${project.id}`)
        const form = document.createElement("div")
        form.classList.add("to-do-add-form")
        form.id = `to-do-add-form${project.id}`
        form.innerHTML = `
        <form>
            <label for="title">Title: </label>
            <input type="text" name="title" id="title">
    
            <label for="description">Description: </label>
            <textarea name="description" id="description" rows="10" cols="50">Write some description</textarea>
    
            <label for="due-date">Due Date:</label>
            <input type="datetime-local" name="due-date" id="due-date">
    
            <label for="priority">Select priority:</label>
            <select name="priority" id="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
    
            <label for="notes">Notes: </label>
            <textarea name="notes" id="notes" rows="5" cols="50">write some notes</textarea>
            <button class = "submit-add-to-do" id="submit-add-to-do">Add</button>
        </form>`
        

        toDoListContain.innerHTML = ``
        toDoListContain.appendChild(form)
    }
}