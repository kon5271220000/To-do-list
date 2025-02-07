import { toDoItem } from "./to-do-item"
import "../style.css"

const exampleItem = new toDoItem("buy milk", "27-12-2025", "emergence", "buy vinamilk", "not done")

const content = document.getElementById("content")

const titleItem = document.createElement("p")
titleItem.textContent = exampleItem.title
content.appendChild(titleItem)

const dueDateItem = document.createElement("p")
dueDateItem.textContent = exampleItem.dueDate
content.appendChild(dueDateItem)

document.getElementById("add_project").addEventListener('click', () => {
    
})