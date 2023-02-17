import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Box, Fab, Stack} from "@mui/material";
import NotesStore from "../../store/notes";
import {ICategory} from "../../store/notes";
import {CategoryNotes} from "./components/category";
import AddIcon from '@mui/icons-material/Add';
import AddCategory from "./components/add-category";


const dataNotes: ICategory[] = NotesStore.notesArray

const Notes = observer(() => {
    const [notes, setNotes] = useState(()=> dataNotes)

    useEffect(()=>{

    },[])
    return (
        <>
           <Box display={'flex'} flexWrap={"wrap"} width={'auto'} sx={{m:'-5px'}}  >
               {
                   notes.map((e: ICategory) => (
                   <CategoryNotes key={e.name} name={e.name} icon={e.icon} color={e.color} notes={e.notes}/>
               ))
               }
           </Box>
         <AddCategory />

        </>
    )
})

export default Notes