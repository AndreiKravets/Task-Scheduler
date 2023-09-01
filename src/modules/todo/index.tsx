import { Paper } from "@mui/material";
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";


const Todo = () => {
  return (
    <Paper variant={'outlined'}
      sx={{
        p: '22px',
        pb: '0px',
        borderRadius:'10px',
        boxShadow:'4px 4px 14px -10px grey'
      }}
    >
      <TaskForm />
      <TaskList />
    </Paper>
  )
}

export default Todo