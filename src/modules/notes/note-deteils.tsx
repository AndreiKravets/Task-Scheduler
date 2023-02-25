import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import NoteStore from '../../store/notes';
import {ICategory, INote} from './models';
import {observer} from "mobx-react-lite";
import { toJS } from 'mobx'
import {Box, Paper, SvgIcon, Typography} from "@mui/material";
import IconsArray from "./components/icons";
import AddNote from "./components/add-note";

export interface INotePage{}
const NoteDatails: React.FunctionComponent<INotePage> = observer( () => {


    const [noteName, setNoteName] = useState('')
    const [currentNote, setCurrentNote] = useState<ICategory | undefined>( )
    const { name, note } = useParams();



    useEffect(() =>{
        if(name){
            const tempNote = NoteStore.notesArray.find((e: ICategory)=>{
                return  e.name.toLowerCase() == name
            })
            setCurrentNote(toJS(tempNote))
        }
    }, [NoteStore.notesArray])

    return(
        currentNote == undefined ? <>
                loading
            </> :
            <>
                <Paper variant={"outlined"} square={true} sx={{p:'22px', borderRadius:'10px',boxShadow:`4px 4px 14px -10px ${currentNote.color}`}}>
                    <Box display={'flex'} alignItems={'center'} mb={2}>
                        <SvgIcon  sx={{color:currentNote.color, fontSize:'30px', mr:1}}>{IconsArray[currentNote.icon]}</SvgIcon>
                        <Typography variant={"h6"} fontWeight={'600'} textTransform={'uppercase'} color={currentNote.color} sx={{fontWeight:'600'}}>
                            {name}
                        </Typography>
                    </Box>
                    {
                        currentNote.notes.map((e:INote)=>{
                            return(
                                <Paper key={e.title} variant={"outlined"} square={true} sx={{p:1, pl:2, mb:1, borderRadius:'6px'}}>
                                    <Typography variant={'h6'}>
                                        {e.title}
                                    </Typography>
                                </Paper>
                            )
                        })
                    }

                </Paper>
            </>
    )
})

export default NoteDatails