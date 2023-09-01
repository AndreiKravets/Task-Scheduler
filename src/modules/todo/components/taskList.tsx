import { Box } from "@mui/material"
import TaskItem from "./taskItem"
import { todoStore } from "../../../store/todo"
import { observer } from "mobx-react"
import { ItaskItem } from "../models"


const TaskList = observer(() => {

  return (
    <Box my={2.5}>
      {
        todoStore.todosArray.map((task: ItaskItem) => {
          if (todoStore.currentDate == task.date  && (todoStore.filterTasks == task.status || todoStore.filterTasks == null)) {
            return(
              <TaskItem title={task.title} body={task.body} key={task.id} id={task.id} status={task.status} />
            )
          }
        })
      }
    </Box>
  )
})

export default TaskList