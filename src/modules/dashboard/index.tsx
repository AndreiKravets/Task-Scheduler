import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import {Avatar, Box, colors} from "@mui/material";
import TodosList from "../../store/todo";
import {observer} from "mobx-react-lite";


const Dashboard = observer(() => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '2px solid',
            borderColor: 'secondary.light',
            justifyContent: 'space-between',
            pb: 2,
            mb:1
        }}>
            <Typography
                variant="h5"
                component="h2"
                sx={{
                    color: 'secondary.main'
                }}>
                {TodosList.currentDate}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pr: '24px'
                }}>
                <Avatar
                    sx={{
                        bgcolor: 'secondary.main',
                        width: 56,
                        height: 56,
                        mr: 2,
                        color:'background.default',
                        fontWeight:'600'
                    }}>AK</Avatar>
                <Typography
                    variant='h5'
                    component='p'
                    color={'secondary.main'}>
                    Andrey Kravets
                </Typography>
            </Box>

        </Box>

    )
})

export default Dashboard