import { Project } from "./project";
import { ToDoItem } from "./toDoItem";
import { UIController } from "./uiController";

const initialProjects = [
    new Project(101, "Home Work", true),
    new Project(102, "House Work", true),
    new Project(103, "Fitness", true)
]

console.log(initialProjects[0].name)

const initialToDoItems = [
    new ToDoItem("Task1", "Task 1 Description", "2025-02-20", "low", "some notes", false),
    new ToDoItem("Task2", "Task 2 Description", "2025-02-20", "high", "other notes", true)
]

const uiController = new UIController(initialProjects)

initialToDoItems.forEach(item => {
    uiController.projects[0].toDoList.push(item)
})

console.log(uiController.projects[0].name)
console.log(uiController.projects[0].toDoList)