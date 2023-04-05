import React, {useEffect, useState} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import {Box, Typography} from "@mui/material";
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ThemeStore from '../../store/theme'
import {observer} from "mobx-react-lite";
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';


const data = [
    {icon: <Dns/>, label: 'Todo list', path: '/'},
    {icon: <People/>, label: 'My Profile', path: '/profile'},
    {icon: <PermMedia/>, label: 'Themes', path: '/themes'},
    {icon: <TextSnippetRoundedIcon/>, label: 'Notes', path: '/notes'},
];



const Sidebar = observer( () => {
    return (
        <Box>
            <Box sx={{
                width: '60px',
                height: '60px',
                mb: 4,
                background: `linear-gradient(90deg, ${ThemeStore.activeTheme.palette.primary.light} 50%, rgba(255,255,255,1) 50%)`,
                borderRadius: '50%'
            }}></Box>

            {data.map((item) => (
                <NavLink
                     key={item.label}
                     to={item.path}
                     style={({isActive})=> ({display:'block', backgroundColor: isActive  ? ThemeStore.activeTheme.palette.primary.light : ''})}
                >
                    <ListItemButton
                        key={item.label}
                        sx={{py: 0, minHeight: 32, p: 1, color: 'rgba(255,255,255,.8)'}}
                    >
                        <ListItemIcon sx={{color: 'inherit'}}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{fontSize: 17, fontWeight:'500'}}
                        />
                    </ListItemButton>
                </NavLink>
            ))}
        </Box>
    )
})

export default Sidebar