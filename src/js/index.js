import { toDoItem } from "./to-do-item"
import { Project } from "./projects"
import { UIcontroller} from "./UIcontroller"
import "../style.css"

const uicontrol = new UIcontroller()

document.getElementById("add_project").addEventListener('click', () => {
    uicontrol.addProjectForm()
    
    document.getElementById("submit").addEventListener('click', () => {
        event.preventDefault()
        uicontrol.addProject()
    })
})

document.getElementById("show_project").addEventListener('click', () => {
    uicontrol.viewAllToDo()
})