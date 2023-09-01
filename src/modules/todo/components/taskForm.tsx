import { Box, Button, ButtonGroup } from "@mui/material"
import AddTask from "./addTask"
import { observer } from "mobx-react-lite"
import { todoStore } from "../../../store/todo"




const TaskForm = observer(() => {

  const buttons = [
    <Button variant={todoStore.filterTasks == null ? 'contained' : 'outlined'} key='all' onClick={() => {todoStore.filteredTasks(null)}}>All</Button>,
    <Button variant={todoStore.filterTasks == true ? 'contained' : 'outlined'} key='active' onClick={() => {todoStore.filteredTasks(true)}}>Active</Button>,
    <Button variant={todoStore.filterTasks == false ? 'contained' : 'outlined'} key='done' onClick={() => {todoStore.filteredTasks(false)}}>Done</Button>,
  ]

  return (
    <Box
     display={'flex'}
     justifyContent={'space-between'}
    >
      <ButtonGroup sx={{height:'40px'}}>
        {buttons}
      </ButtonGroup>
      <AddTask />
    </Box>
  )
})

export default TaskForm