import { Paper, Box, Typography, Button } from "@mui/material"
import {Check, Delete, } from '@mui/icons-material';
import { ItaskItem } from "../models";
import { todoStore } from "../../../store/todo";

const TaskItem = ({title, body, id, status}: ItaskItem) => {
  
  return (
    <Paper variant={'outlined'}
      sx={{
        backgroundColor: status ? 'white': '#f3f7fa',
        p:2, mb:2, borderRadius:'16px'
        }}>
        <Box display={'flex'} alignItems={'center'}
             mb={1} pb={1} pt={1}
             borderBottom={'1px solid #e7e7e7'}
        >
          <Typography sx={{width:'80%'}} variant="h6">
            {title}
          </Typography>
          <Box sx={{width:'20%', textAlign:'end'}}>
             <Button 
                   variant="outlined" 
                   sx={{minWidth:'20px', p:'5px 7px'}}
                   onClick={() => todoStore.changeStatusTask(id)}
                   >
              {status ? <Check/> : 'done'} 
             </Button>
             <Button 
                   variant="outlined" 
                   sx={{minWidth:'20px', p:'5px 7px', ml:1}}
                   onClick={() => todoStore.deleteTask(id)}
                   >
              <Delete />
             </Button>
          </Box>
        </Box>
        <Typography>
          {body}
        </Typography>

      </Paper>
  )
}

export default TaskItem