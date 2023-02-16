import {makeAutoObservable} from "mobx";
import {Itask} from "../modules/todo/models";

class TodoStore {
    constructor() {
        makeAutoObservable(this)
    }

    currentDate = ''

    todosArray: Itask[] = []


    setCountDate(carrentDate : string){
      this.currentDate = carrentDate
        console.log(carrentDate)
    }

    setAllTasks (tasks: any){
        this.todosArray = tasks
        console.log(tasks)
    }

}

export default new TodoStore()