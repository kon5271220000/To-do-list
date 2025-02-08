import { toDoItem } from "./to-do-item"
import { Project } from "./projects"
import { UIcontroller} from "./UIcontroller"
import "../style.css"

const uicontrol = new UIcontroller()

document.getElementById("add_project").addEventListener('click', () => {
    uicontrol.addProjectForm()
    //uicontrol.addProject()
})

document.getElementById("show_project").addEventListener('click', () => {
    uicontrol.showProject()
})