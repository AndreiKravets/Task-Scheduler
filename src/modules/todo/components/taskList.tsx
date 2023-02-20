import React from 'react'
import TaskItem from "./taskItem";
import {Box} from "@mui/material";
import {observer} from "mobx-react-lite";
import TodoStore from '../../../store/todo'
import {Itask} from "../models";


const TaskList = observer( () => {
    return (
        <Box sx={{ mt:2.5, mb:2.5}}>
            {TodoStore.todosArray.map((task : Itask) => {
                if(TodoStore.currentDate == task.date && (TodoStore.filterTasks == task.status || TodoStore.filterTasks == null)) {
                    return (
                        <TaskItem
                            key={task.id}
                            id={task.id}
                            status={task.status}
                            title={task.title}
                        >
                            {task.body}
                        </TaskItem>
                    )
                }
                }
             )}

        </Box>
    )
})

export default TaskList