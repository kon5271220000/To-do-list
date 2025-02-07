class Project {
    constructor(id, name, isDefault) {
        this.id = id
        this.name = name
        this.todos = []
        this.createdAt = new Date()
        this.updateAt = new Date()
        this.isDefault = isDefault
    }

    //rename project
    reName(newName){
        this.name = newName
        this.updateAt = new Date()
    }

    //add todo
    addToDo(toDo) {
        this.todos.push(toDo)
        this.updateAt = new Date
    }

    //remove to do
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

// Tạo một dự án mới
const project1 = new Project(1, "Học lập trình", true);

// Thêm công việc vào dự án
project1.addToDo({ id: 101, title: "Học JavaScript", completed: false });
project1.addToDo({ id: 102, title: "Học Node.js", completed: true });

// Lấy danh sách công việc
console.log(project1.getAllToDo().toString());
/* Output:
[
  { id: 101, title: "Học JavaScript", completed: false },
  { id: 102, title: "Học Node.js", completed: true }
]
*/

for(let i = 0; i < project1.getAllToDo().length; i++){
    console.log(project1.getAllToDo()[i])
}