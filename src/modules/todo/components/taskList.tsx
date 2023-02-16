import React from 'react'
import TaskItem from "./taskItem";
import {Box, Paper} from "@mui/material";


interface Itask {
    id: number,
    status: boolean,
    title: string,
    body: string
}

interface ItaskList {
    tasks: Itask[],
    changeDone: any,
    deleteTask:any
}


const TaskList = ({tasks, changeDone, deleteTask}: ItaskList) => {

    return (
        <Box sx={{ mt:2.5, mb:2.5}}>
            {tasks.map((task : Itask) => {
               return     <TaskItem
                        deleteTask={deleteTask}
                        changeDone={changeDone}
                        key={task.id}
                        id={task.id}
                        status={task.status}
                        title={task.title}
                    >
                        {task.body}
                    </TaskItem>
                }
             )}

        </Box>
    )
}

export default TaskList