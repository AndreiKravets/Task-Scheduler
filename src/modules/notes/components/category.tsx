import React from "react";
import {Icon, Paper, SvgIcon, Typography} from "@mui/material";
import {ICategory} from "../../../store/notes";
import IconsArray from "./icons";

const CategoryNotes = ({name, notes, icon, color}: ICategory) =>{
    return(
        <Paper sx={{width:'20%', minHeight:'150px', p:4, m:'5px', flexGrow:'1', cursor:'pointer', borderRadius: '10px'}}>
            <SvgIcon  sx={{color:color, fontSize:'45px', mb:4}}>{IconsArray[icon]}</SvgIcon>
            <Typography variant={"h5"} fontWeight={'600'}>
                {name}

            </Typography>
            <Typography variant={'h6'} color={'#a6a1a1'}>
                {notes.length} Notes
            </Typography>
        </Paper>
    )
}

export {CategoryNotes}