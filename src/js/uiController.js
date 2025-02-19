import { Render } from "./render"
import { Project } from "./project"
export class UIController{
    constructor(initialProjects){
        this.render = new Render()
        this.projects = initialProjects
        this.init()
    }

    init(){
        this.projects.forEach(project => {
            this.render.showProjectCard(project)
        });

        this.handleAddProjectForm()
    }

    addProject(project){
        this.projects.push(project)
        this.render.showProjectCard(project)
    }

    handleAddProjectForm(){
        document.getElementById("add-project").addEventListener('click', () => {
            this.render.addProjectForm()

            document.getElementById("add-project-btn").addEventListener('click', () => {
                const id = this.projects[this.projects.length-1].id + 1
                const name = document.getElementById("name").value
                const newProject = new Project(id, name, false)
                this.addProject(newProject)
                console.log("Add Project Success")
            })
        })
    }

    
}