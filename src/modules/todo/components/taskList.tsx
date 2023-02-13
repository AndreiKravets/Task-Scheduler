import React from 'react'
import {TaskItem} from "./taskItem";


interface Itask {
    id: number,
    title: string,
    body: string
}

interface ItaskList {
    tasks: Itask[],
}

const TaskList = ({tasks}: ItaskList) => {
    return (
        <div>
            {tasks.map((task : Itask) =>
                <TaskItem key={task.id} title={task.title}>{task.body}</TaskItem>
             )}
        </div>
    )
}

export default TaskList