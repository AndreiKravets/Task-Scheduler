import { Add } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from '@mui/material';
import React, { useState } from 'react';
import { INote } from '../models';
import { notesStore } from '../../../store/notes';
import { useParams } from 'react-router-dom';



const AddNote = () => {
 
  const { noteCategory } = useParams()

  const [open, setOpen] = useState(false)
  const [note, setNote] = useState('')

  function addNewNote(){
    setOpen(false)
    const noteUrl = note.trim().replaceAll(' ', '-').toLowerCase()
    console.log(noteUrl);
    
    const newNote:INote = {
      parent: noteCategory||'',
      noteUrl:noteUrl,
      title: note,
      body:'',
      date: new Date().toLocaleString()
    }
    notesStore.addNote(newNote)
  }

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        mt={2}
      >
        <Fab color='primary' aria-label='add'
          onClick={() => setOpen(true)}
        >
          <Add />
        </Fab>
      </Box>

      <Dialog open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth={'sm'}
      >
        <DialogTitle>
          Create New Note
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label={'Add Note'}
            margin='dense'
            onChange={e => setNote(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{p:'0 24px', pb:'20px'}}>
          <Button variant="outlined"
            onClick={() => {
              addNewNote()
            }}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default AddNote