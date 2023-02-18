import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Box, Fab, Paper, Stack} from "@mui/material";
import NotesStore from "../../store/notes";
import {ICategory} from "../../store/notes";
import {CategoryNotes} from "./components/category";
import AddIcon from '@mui/icons-material/Add';
import AddCategory from "./components/add-category";
import {NavLink} from "react-router-dom";



const Notes = observer(() => {

    return (
        <>
           <Box display={'flex'} flexWrap={"wrap"} width={'auto'} sx={{m:'-5px'}}  >
               {
                   NotesStore.notesArray.map((e: ICategory) => (
                       <Paper key={e.name} sx={{width:'20%', minHeight:'150px', p:4, m:'5px', flexGrow:'1', cursor:'pointer', borderRadius: '10px'}}>
                       <NavLink  to={`/notes/${e.name}`}>
                           <CategoryNotes  name={e.name} icon={e.icon} color={e.color} notes={e.notes}/>
                       </NavLink>
                       </Paper>
               ))
               }
           </Box>
         <AddCategory />
        </>
    )
})

export default Notes