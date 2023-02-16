import React, {useEffect, useState} from 'react';
import {Box, Fab, IconButton, Paper} from "@mui/material";
import Calendar from 'react-calendar';
import TodosList from "../../store/todo";
import {observer} from "mobx-react-lite";
import {styled} from "@mui/material";
import ThemeStore from '../../store/theme'



const TodoCalendar = observer(() => {
    const CustomCalendar: any = styled(Calendar)`
      .react-calendar__tile--now {
        background: ${ThemeStore.activeTheme.palette.primary.light } !important;
      }
    `;

    const [value, onChange] = useState(() => new Date());

    useEffect(() => {
        TodosList.setCountDate(value.toDateString())
    }, [])

    return (
        <Paper variant={"outlined"} square={true}
               sx={{p: '20px', pt: '25px', borderRadius: '10px', boxShadow: '4px 4px 14px -10px grey'}}
               >
            <CustomCalendar
                locale={'en'}
                onChange={() => onChange(value)}
                onClickDay={(e :any) => (TodosList.setCountDate(e.toDateString()))}
                 />
        </Paper>
    )
})

export default TodoCalendar