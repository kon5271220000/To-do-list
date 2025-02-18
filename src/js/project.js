export class Project{
    constructor(id, name, isDefault){
        this.id = id
        this.name = name
        this.toDoList = []
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.isDefault = isDefault
    }

    reUpdatedAt(){
        this.updatedAt= new Date()
    }
}