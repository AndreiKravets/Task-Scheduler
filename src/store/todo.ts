import {makeAutoObservable} from "mobx";
import {Itask} from "../modules/todo/models";

class TodoStore {
    constructor() {
        makeAutoObservable(this)
    }

    currentDate = ''

    todosArray: Itask[] = []

    filterTasks: null | boolean = null

    setCountDate(currentDate : string){
      this.currentDate = currentDate
    }


    addNewTask(taskItem: {title:string, body:string}){
        const tempTask = {
            id: this.todosArray.length ? this.todosArray[this.todosArray.length -1].id  +1 : 1,
            status: true,
            title: taskItem.title,
            body: taskItem.body,
            date: this.currentDate
        }
        this.todosArray = [...this.todosArray, {...tempTask}]
    }
    changeDoneTask (id: any) {
        let tempTask = [...this.todosArray]
        let index = tempTask.findIndex(e => e.id == id )
        tempTask[index].status = !tempTask[index].status
        this.todosArray = tempTask
    }
    deleteTask = (id: any) => {
        const tempTask = this.todosArray.filter( e => e.id !== id)
        this.todosArray = tempTask
    }

    filteredTasks = (filter:null | boolean) =>{
        this.filterTasks = filter
    }
}

export default new TodoStore()