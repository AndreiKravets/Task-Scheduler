import * as React from 'react'
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, IconButton, Paper} from "@mui/material";
import TodoStore from '../../../store/todo'
import {ItaskItem} from "../models";


const TaskItem = ({children, title,id, status}: ItaskItem) => {


    return (

            <Paper variant={"outlined"}
                sx={{ backgroundColor:status ?'#FFFFFF' : '#f3f7fa', p:2,mb:2, borderRadius:'16px'}}
            >
                <Box display={"flex"}
                     mb={1}
                     pb={1} pt={1} sx={{borderBottom:'1px solid #e7e7e7'}}>
                    <Typography sx={{ width: '80%', flexShrink: 0 }}>
                        {title}
                    </Typography>
                    <Box sx={{width: '20%', textAlign:'right', mt:'-8px'}}>
                        <Button variant= {status ? "outlined" : undefined} sx={{minWidth:'20px', p:'5px 7px'}} onClick={() => TodoStore.changeDoneTask(id)}>
                            {status ? <CheckIcon /> : 'done'}
                        </Button>
                        <Button sx={{minWidth:'20px', p:'5px 7px', ml:1}} onClick={() => TodoStore.deleteTask(id)}>
                            <DeleteIcon />
                        </Button>
                    </Box>
                </Box>

                <Typography>
                    {children}
                </Typography>

            </Paper>


    )
}

export default TaskItem