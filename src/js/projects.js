export class Project {
    constructor(id, name, isDefault) {
        this.id = id
        this.name = name
        this.todos = []
        this.createdAt = new Date()
        this.updateAt = new Date()
        this.isDefault = isDefault
    }

    reName(newName){
        this.name = newName
        this.updateAt = new Date()
    }

    addToDo(toDo) {
        this.todos.push(toDo)
        this.updateAt = new Date
    }

    removeToDo(toDoId){
        this.todos = this.todos.filter(toDo => toDo.id != toDoId)
    }

    getAllToDo(){
        return this.todos
    }

    getUnfinishedToDo(){
        return this.todos.filter(toDo => !toDo.completed)
    }

    getCompletedTodo(){
        return this.todos.filter(toDo => toDo.completed)
    }

}
