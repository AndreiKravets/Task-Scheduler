import React, {useEffect, useState} from 'react';
import {Paper} from "@mui/material";
import TaskList from "./components/taskList";
import TaskForm from "./components/taskForm";
import {Itask} from "./models";
import TodoStore from "../../store/todo";
import {observer} from "mobx-react-lite";

const Todo = observer( () => {

    let status:any = null

    let allTasks: Itask[] = []

    function renderTasks(){
        const allTasks: Itask[] = TodoStore.todosArray
        const currentTasks: Itask[] = allTasks.filter((e) => e.date == TodoStore.currentDate)
        setCurrentTasks(currentTasks)
        switch (filterStatus){
            case null:
                setTasks(currentTasks)
                break
            case true:
                setTasks(currentTasks.filter((e) => e.status == true))
                break
            case false:
                setTasks(currentTasks.filter((e) => e.status == false))
        }

    }

    const [currentTasks, setCurrentTasks] = useState(() => allTasks)
    const [tasks, setTasks] = useState(() => allTasks)
    const [filterStatus, setFilterStatus] = useState(() => status)



    useEffect(() => {
        renderTasks()
}, [TodoStore.currentDate, TodoStore.todosArray])




    interface ItaskItem {
        title: string,
        body: string
    }

    const addNewTask = (taskItem: ItaskItem) => {
        const tempTask = {
            id: tasks.length ? tasks[tasks.length -1].id  +1 : 1,
            status: true,
            title: taskItem.title,
            body: taskItem.body,
            date: TodoStore.currentDate
        }
        TodoStore.setAllTasks([...TodoStore.todosArray, {...tempTask}])
        setTasks([...tasks, {...tempTask}])
    }

    const changeDone = (id: any) => {
       let tempTask = [...TodoStore.todosArray]
       let index = tempTask.findIndex(e => e.id == id )
       tempTask[index].status = !tempTask[index].status
        TodoStore.setAllTasks(tempTask)
    }

    const deleteTask = (id: any) => {
        const tempTask = TodoStore.todosArray.filter( e => e.id !== id)
        TodoStore.setAllTasks(tempTask)
    }

    const setStatus = (status: any ) => {
        setFilterStatus(status)
    }

    const filterAllTask = () =>{
        setTasks(currentTasks)
    }

    const filterActiveTask = () =>{
        const tempTask = currentTasks.filter( e => e.status == true)
        setTasks(tempTask)
    }

    const filterDoneTask = () =>{
        const tempTask = currentTasks.filter( e => e.status == false)
        setTasks(tempTask)
    }

    return (
        <Paper variant={"outlined"} square={true} sx={{p:'22px', pb:'0px', borderRadius:'10px',boxShadow:'4px 4px 14px -10px grey'}}>
            <TaskForm
                addNewTask={addNewTask}
                filterAllTask={filterAllTask}
                filterActiveTask={filterActiveTask}
                filterDoneTask={filterDoneTask}
                filterStatus={filterStatus}
                setStatus={setStatus}
            />
            <TaskList tasks={tasks} changeDone={changeDone} deleteTask={deleteTask}/>
        </Paper>
    )
})

export default Todo