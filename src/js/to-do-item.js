export class toDoItem {
    constructor(title, description, dueDate, priority, notes, isCompleted){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.isCompleted = isCompleted
    }

    reTitle(newTitle){
        this.name = newTitle
    }

    editDescrip(){

    }

    redueDate(newDueDate){
        this.dueDate = newDueDate
    }

    rePriority(newPriority){
        this.priority = newPriority
    }

    editNotes(){

    }

    markAsComplete(){
        if(!this.isCompleted){
            this.isCompleted = true
        }
    }

}