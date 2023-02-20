import React, {useState} from 'react';
import {Box, Button, ButtonGroup, TextField} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TodoStore from '../../../store/todo'
import {observer} from "mobx-react-lite";



const TaskForm = observer( () => {
    const [open, setOpen] = useState(false);
    const [taskItem, setTaskItem] = useState({title:'', body:''})




    const buttons = [
        <Button variant={TodoStore.filterTasks == null ? "contained" : undefined} key="all" onClick={() => {TodoStore.filteredTasks(null)}}>All</Button>,
        <Button variant={TodoStore.filterTasks == true ? "contained" : undefined} key="active" onClick={() => {TodoStore.filteredTasks(true)}}>Active</Button>,
        <Button variant={TodoStore.filterTasks == false ? "contained" : undefined} key="done" onClick={() => {TodoStore.filteredTasks(false)}}>Done</Button>,
    ];



    return (
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup sx={{height:'40px', m:'0'}}>
                    {buttons}
                </ButtonGroup>
            </Box>
            <Button variant="outlined"  onClick={() => setOpen(true)} sx={{height:'40px'}}>
                Add New Task
            </Button>
            <Dialog
                open={open}
                maxWidth={'sm'}
                fullWidth={true}
                onClose={() => setOpen(false)}
            >
                <DialogTitle>
                        New task
                </DialogTitle>
                <DialogContent sx={{pb:0}}>

                        <TextField fullWidth
                                   label="Task name"
                                   value={taskItem.title}
                                   onChange={e => setTaskItem({...taskItem, title: e.target.value})}
                                   sx={{mb:2,mt:1}}
                        />
                        <TextField fullWidth
                                   label="Task description"
                                   value={taskItem.body}
                                   onChange={e => setTaskItem({...taskItem, body: e.target.value})}
                        />

                </DialogContent>
                <DialogActions sx={{p:3}}>
                    <Button autoFocus onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button variant="outlined"
                            onClick={() => {setOpen(false);
                                TodoStore.addNewTask(taskItem);
                                setTaskItem({title: '', body: ''})
                            }}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
})

export default TaskForm