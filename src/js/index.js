import { toDoItem } from "./to-do-item"
import { Project } from "./projects"
import { UIcontroller} from "./UIcontroller"
import { Logic } from "./logic"
import "../style.css"

const uicontrol = new UIcontroller()
const logic = new Logic()
const mainContent = document.getElementById("content")

document.getElementById("add_project").addEventListener('click', () => {
    mainContent.innerHTML = ''
    uicontrol.addProjectForm()
    
    document.getElementById("submit").addEventListener('click', () => {
        event.preventDefault()
        logic.addProject()
    })
})

document.getElementById("show_project").addEventListener('click', () => {
    mainContent.innerHTML = ''
    uicontrol.viewAllProjecs(logic.projects)

    document.getElementById("addToDo").addEventListener('click', () => {
        uicontrol.addToDoItemForm()

    
    })
})


