import React, {useState} from "react";
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    Fab,
    FormControl,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    DialogActions, Button, SvgIcon
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotesStore from "../../../store/notes"


interface test {
    name: string|undefined
}
const AddNote = (name:test) => {
    const [open, setOpen] = useState(false)
    const [note, setNote] = useState('')

    function addNewNote() {
        setOpen(false)
        const newNote = {
            parent: name.name,
            title: note,
            description: '',
            date: new Date().toLocaleString()
        }
        NotesStore.setNote(newNote)
    }

    return(
        <>
            <Box onClick={() => setOpen(true)}
                 display={'flex'}
                 justifyContent={'flex-end'}
                 mt={2}>
                <Fab color="primary" aria-label="add" sx={{ml:'auto'}}>
                    <AddIcon />
                </Fab>
            </Box>
            <Dialog open={open}
                    onClose={() => setOpen(false)}
                    fullWidth={true}
                    maxWidth={'sm'}
            >
                <DialogTitle>
                    Create New Note
                </DialogTitle>
                <DialogContent>

                    <TextField
                        fullWidth
                        label={'Create Note'}
                        sx={{mt:1}}
                        onChange={(e) => setNote(e.target.value)}
                    />
                </DialogContent>
                <DialogActions sx={{p:'0 24px', pb:'20px'}}>
                    <Box>
                        <Button variant="outlined"
                                onClick={() => {
                                    addNewNote();
                                }}>
                            Add
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddNote