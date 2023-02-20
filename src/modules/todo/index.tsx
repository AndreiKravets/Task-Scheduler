import React, {useEffect, useState} from 'react';
import {Paper} from "@mui/material";
import TaskList from "./components/taskList";
import TaskForm from "./components/taskForm";
import {observer} from "mobx-react-lite";

const Todo = observer( () => {
    return (
        <Paper variant={"outlined"} square={true} sx={{p:'22px', pb:'0px', borderRadius:'10px',boxShadow:'4px 4px 14px -10px grey'}}>
            <TaskForm/>
            <TaskList/>
        </Paper>
    )
})

export default Todo