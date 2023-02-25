import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Box, Fab, Paper, Stack} from "@mui/material";
import NotesStore from "../../store/notes";
import {ICategory} from "./models";
import {CategoryNotes} from "./components/category";
import AddCategory from "./components/add-category";
import {NavLink} from "react-router-dom";



const Notes = observer(() => {

    return (
        <>
           <Box display={'flex'} flexWrap={"wrap"} width={'auto'} sx={{m:'-5px'}}  >
               {
                   NotesStore.notesArray.map((e: ICategory) => (
                       <Paper key={e.name} sx={{width:'30%', position:'relative', minHeight:'205px', m:'5px', flexGrow:'1', cursor:'pointer', borderRadius: '10px'}}>
                       <NavLink
                           to={`/notes/${e.name.toLowerCase()}`}
                           style={{
                               position:'absolute',
                               left:'0',
                               right:'0',
                               padding:'30px'
                           }}>
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