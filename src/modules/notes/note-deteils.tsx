import React, {useEffect, useState} from "react";
import {NavLink, useParams} from 'react-router-dom';
import NoteStore from '../../store/notes';
import {ICategory, INote} from './models';
import {observer} from "mobx-react-lite";
import {toJS} from 'mobx'
import {Box, Paper, SvgIcon, Typography} from "@mui/material";
import IconsArray from "./components/icons";
import NoteBody from "./components/note-body";

export interface INotePage {
}

const NoteDatails: React.FunctionComponent<INotePage> = observer(() => {


    const [noteName, setNoteName] = useState('')
    const [currentNote, setCurrentNote] = useState<ICategory | undefined>()
    const [indexNote, setIndexNote] = useState<number>(0)
    const {name, note} = useParams();
    useEffect(() => {
        if (name) {
            const tempNote = NoteStore.notesArray.find((e: ICategory) => {
                return e.name.toLowerCase() == name
            })
            setCurrentNote(toJS(tempNote))
            const tempNoteObj = toJS(tempNote)

            const tempIndexNote = tempNoteObj ? tempNoteObj.notes.findIndex((e: INote) => {
                return e.title.toLowerCase() == note
            }) : 0
            setIndexNote(tempIndexNote)
        }
    }, [note])

    return (
        currentNote == undefined ? <>
                loading
            </> :
            <>
                <Paper variant={"outlined"} square={true}
                       sx={{p: '22px', borderRadius: '10px', position:'relative', boxShadow: `4px 4px 14px -10px ${currentNote.color}`}}>
                    <Box display={'flex'} alignItems={'center'} >
                        <SvgIcon sx={{
                            color: currentNote.color,
                            fontSize: '36px',
                            mr: 1
                        }}>{IconsArray[currentNote.icon]}</SvgIcon>
                        <Typography variant={"h5"} fontWeight={'600'} textTransform={'uppercase'}
                                    color={currentNote.color}>
                            {name}
                        </Typography>
                    </Box>

                    <Paper elevation={0} square={false} sx={{p: 1, pl: 0, mb: 1, borderRadius: '6px'}}>
                        <Typography variant={'h6'}>
                            {currentNote.notes[indexNote].title}
                        </Typography>
                    </Paper>

                    <NoteBody body={currentNote.notes[indexNote].body} color={currentNote.color} category={name} name={currentNote.notes[indexNote].title} />

                    {currentNote.notes[indexNote - 1] ?
                        <NavLink to={`/notes/${name}/${currentNote.notes[indexNote - 1].title.toLowerCase()}`}>
                            <Typography variant={'h6'}>
                                {currentNote.notes[indexNote - 1].title}
                            </Typography>
                        </NavLink> : ''
                    }
                    {currentNote.notes[indexNote + 1] ?
                        <NavLink to={`/notes/${name}/${currentNote.notes[indexNote + 1].title.toLowerCase()}`}>
                            <Typography variant={'h6'}>
                                {currentNote.notes[indexNote + 1].title}
                            </Typography>
                        </NavLink> : ''
                    }
                </Paper>
            </>
    )
})

export default NoteDatails