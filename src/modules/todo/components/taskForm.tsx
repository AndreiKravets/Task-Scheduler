import React, {useState} from 'react';
import {Box, Button, ButtonGroup, TextField} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



interface ItaskForm {
    addNewTask: any,
    filterAllTask: any,
    filterActiveTask: any,
    filterDoneTask: any,
    filterStatus:any,
    setStatus: any
}

const TaskForm = ({addNewTask, filterAllTask, filterActiveTask, filterDoneTask, filterStatus,setStatus }: ItaskForm) => {
    const [open, setOpen] = useState(false);
    const [taskItem, setTaskItem] = useState({title:'', body:''})

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const buttons = [
        <Button variant={filterStatus ==null ? "contained" : undefined} key="all" onClick={() => {filterAllTask(); setStatus(null)}}>All</Button>,
        <Button variant={filterStatus ==true ? "contained" : undefined} key="active" onClick={() => {filterActiveTask(); setStatus(true)}}>Active</Button>,
        <Button variant={filterStatus ==false ? "contained" : undefined} key="done" onClick={() => {filterDoneTask(); setStatus(false)}}>Done</Button>,
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
            <Button variant="outlined"  onClick={handleClickOpen} sx={{height:'40px'}}>
                Add New Task
            </Button>
            <Dialog
                open={open}
                maxWidth={'sm'}
                fullWidth={true}
                onClose={handleClose}
            >
                <DialogTitle>
                        New task
                </DialogTitle>
                <DialogContent sx={{pb:0}}>
                    <DialogContentText>
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
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{p:3}}>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="outlined"
                            onClick={() => {handleClose();
                                addNewTask(taskItem);
                                setTaskItem({title: '', body: ''})
                            }}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default TaskForm