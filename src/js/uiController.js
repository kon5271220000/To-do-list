import { Render } from "./render"
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
            this.render.container.innerHTML = ''
            this.render.addProjectForm()
        })
    }
}