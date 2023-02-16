import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {purpleTheme, blueTheme, blackTheme, orangeTheme} from "../../themes";
import ThemeStore from '../../store/theme'


const Themes = () =>{
    return(
        <>
            <Box sx={{display:'block', mb:3}}>
                <Box sx={{border:'4px solid', borderColor:blackTheme.palette.primary.main, display:'inline-flex',width:'100%',mb:1}} >
                <Box sx={{backgroundColor: blackTheme.palette.primary.light, width:'14.28%', height:55}}></Box>
                <Box sx={{backgroundColor: blackTheme.palette.primary.main, width:'14.28%', height:55}}></Box>
                <Box sx={{backgroundColor: blackTheme.palette.primary.dark, width:'14.28%', height:55}}></Box>
                <Box sx={{backgroundColor: blackTheme.palette.background.default, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: blackTheme.palette.secondary.light, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: blackTheme.palette.secondary.main, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: blackTheme.palette.secondary.dark, width:'14.28%', height:55}}></Box>
                </Box>
                <Button variant="contained" sx={{backgroundColor: blackTheme.palette.primary.main, width:150, height:40}} onClick={() => ThemeStore.setActiveTheme(blackTheme)}>
                    black
                </Button>
            </Box>

            <Box sx={{display:'block', mb:3}}>
                <Box sx={{display:'inline-flex', border:'4px solid', borderColor:purpleTheme.palette.primary.main, width:'100%', mb:1}} >
                    <Box sx={{backgroundColor: purpleTheme.palette.primary.light, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: purpleTheme.palette.primary.main, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: purpleTheme.palette.primary.dark, width:'14.28%', height:55}}></Box>
                <Box sx={{backgroundColor: purpleTheme.palette.background.default, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: purpleTheme.palette.secondary.light, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: purpleTheme.palette.secondary.main, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: purpleTheme.palette.secondary.dark, width:'14.28%', height:55}}></Box>
                </Box>
                <Button variant="contained" sx={{backgroundColor: purpleTheme.palette.primary.main, width:150, height:40}} onClick={() => ThemeStore.setActiveTheme(purpleTheme)}>
                    purpure
                </Button>
            </Box>
            <Box sx={{display:'block', mb:3}}>
                <Box sx={{display:'inline-flex', border:'4px solid', borderColor:orangeTheme.palette.primary.main, width:'100%', mb:1}} >
                    <Box sx={{backgroundColor: orangeTheme.palette.primary.light, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: orangeTheme.palette.primary.main, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: orangeTheme.palette.primary.dark, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: orangeTheme.palette.background.default, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: orangeTheme.palette.secondary.light, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: orangeTheme.palette.secondary.main, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: orangeTheme.palette.secondary.dark, width:'14.28%', height:55}}></Box>
                </Box>
                <Button variant="contained" sx={{backgroundColor: orangeTheme.palette.primary.main, width:150, height:40}} onClick={() => ThemeStore.setActiveTheme(orangeTheme)}>
                    orange
                </Button>
            </Box>
            <Box sx={{display:'block', mb:3}}>
                <Box sx={{display:'inline-flex', border:'4px solid', borderColor:blueTheme.palette.primary.main, width:'100%', mb:1}} >
                    <Box sx={{backgroundColor: blueTheme.palette.primary.light, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: blueTheme.palette.primary.main, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: blueTheme.palette.primary.dark, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: blueTheme.palette.background.default, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: blueTheme.palette.secondary.light, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: blueTheme.palette.secondary.main, width:'14.28%', height:55}}></Box>
                    <Box sx={{backgroundColor: blueTheme.palette.secondary.dark, width:'14.28%', height:55}}></Box>
                </Box>
                <Button variant="contained" sx={{backgroundColor: blueTheme.palette.primary.main, width:150, height:40}} onClick={() => ThemeStore.setActiveTheme(blueTheme)}>
                    blue
                </Button>
            </Box>


        </>
    )
}

export default Themes