import { toDoItem } from "./to-do-item"
import { Project } from "./projects"
import {UIcontroller} from "./UIcontroller"
import "../style.css"

const uicontroller = new UIcontroller()
const mainContent = document.getElementById("content")

const project1 = new Project(101, "Home Work", true)
const project2 = new Project(102, "House Work", true)
const project3 = new Project(103, "Fitness", true) 

const todo1 = new toDoItem("coding", "develope a to do list app", "27-12-2000", "high", "none", false)
const todo2 = new toDoItem("learn vocab", "learn 3 new vocab", "27-12-2000", "medium", "none", false)
uicontroller.addProject(project1)
uicontroller.addProject(project2)
uicontroller.addProject(project3)

project1.addToDo(todo1)
project1.addToDo(todo2)

//loadPage
uicontroller.showProjects()

document.getElementById("add_project").addEventListener('click', () => {
    mainContent.innerHTML = ''
    uicontroller.getProjectAddForm()
    
    document.getElementById("addProjectFormBtn").addEventListener('click', () => {
        uicontroller.createNewProject()
    })
})

document.getElementById("show_project").addEventListener('click', () => {
    mainContent.innerHTML = ''
    uicontroller.showProjects()
})

document.addEventListener("click", (event) =>{
    if(event.target.id === "view_lists"){
        const projectId = parseInt(event.target.dataset.projectId)
        uicontroller.showToDoList(projectId)
        uicontroller.hideProject(projectId)
        uicontroller.hideToDoListBtn()
    }
})

