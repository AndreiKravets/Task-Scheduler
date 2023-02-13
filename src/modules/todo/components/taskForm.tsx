import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";



interface ItaskForm {
    addNewTask: any
}

export default  function TaskForm ({addNewTask}: ItaskForm) {
    const [taskItem, setTaskItem] = useState({title:'', body:''})

    return (
        <div>
            <TextField fullWidth label="Task name" value={taskItem.title} onChange={e => setTaskItem({...taskItem, title: e.target.value})}/>
            <TextField fullWidth label="Task description" value={taskItem.body} onChange={e => setTaskItem({...taskItem, body: e.target.value})}/>
            <Button variant="outlined" onClick={() => {addNewTask(taskItem); setTaskItem({title: '', body: ''})}}>Add New Task</Button>
        </div>
    )
}