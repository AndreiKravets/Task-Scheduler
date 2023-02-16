import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Box, Fab, Stack} from "@mui/material";
import NotesStore from "../../store/notes";
import {ICategory} from "../../store/notes";
import {CategoryNotes} from "./components/category";
import AddIcon from '@mui/icons-material/Add';


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
            <Box display={'flex'} justifyContent={'flex-end'} mt={2}>
                <Fab color="primary" aria-label="add" sx={{ml:'auto'}}>
                    <AddIcon />
                </Fab>
            </Box>

        </>
    )
})

export default Notes