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
import Menu from '@mui/material/Menu';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import AddIcon from "@mui/icons-material/Add";
import IconsArray from "./icons";
import Colors from "./colors";
import NotesStore from "../../../store/notes"

const AddCategory = () => {
    const [open, setOpen] = useState(false)
    const [category, setCategory] = useState('')
    const [categoryIcon, setCategoryIcon] = useState(IconsArray[0])
    const [categoryIconIndex, setCategoryIconIndex] = useState(0)
    const [colorIcon, setColorIcon] = useState(() => Colors[0])

    function addNewCategory() {
        setOpen(false)
        const newCategory = {
            name: category,
            icon: categoryIconIndex,
            color: colorIcon,
            notes: []
        }
        NotesStore.setNotesArray(newCategory)
    }

    return (
        <>
            <Box onClick={() => setOpen(true)}
                 display={'flex'}
                 justifyContent={'flex-end'}
                 mt={2}>
                <Fab color="primary" aria-label="add" sx={{ml: 'auto'}}>
                    <AddIcon/>
                </Fab>
            </Box>
            <Dialog open={open}
                    onClose={() => setOpen(false)}
                    fullWidth={true}
                    maxWidth={'sm'}
            >
                <DialogTitle>
                    Create New Category
                </DialogTitle>
                <DialogContent>

                    <TextField
                        fullWidth
                        label={'Add Category'}
                        sx={{mt: 1}}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </DialogContent>
                <DialogActions sx={{p: '0 24px', pb: '20px', justifyContent: 'space-between'}}>
                    <Box display='flex' alignItems='center'>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <>
                                    <Button
                                        sx={{width: 30, minWidth: 30, height: 30, backgroundColor: colorIcon, mr: 1}}
                                        variant="contained" {...bindTrigger(popupState)}>
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        {
                                            Colors.map((e, index) =>
                                                <MenuItem key={e}
                                                          onClick={
                                                              () => {
                                                                  popupState.close();
                                                                  setColorIcon(e)
                                                              }
                                                          }
                                                          value={e} sx={
                                                    {
                                                        color: colorIcon,
                                                        justifyContent: 'center'
                                                    }}
                                                ><Box sx={{width: 20, height: 20, backgroundColor: e}}></Box>
                                                </MenuItem>
                                            )
                                        }
                                    </Menu>
                                </>
                            )}
                        </PopupState>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <>
                                    <Button sx={{
                                        width: 40,
                                        minWidth: 40,
                                        height: 40,
                                        backgroundColor: 'unset',
                                        color: colorIcon
                                    }} variant='text' {...bindTrigger(popupState)}>
                                        <SvgIcon sx={{fontSize: 40}}>{categoryIcon}</SvgIcon>
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        {
                                            IconsArray.map(
                                                (e, index) =>
                                                    <MenuItem key={index}
                                                              onClick={
                                                                  () => {
                                                                      popupState.close();
                                                                      setCategoryIcon(e)
                                                                      setCategoryIconIndex(index)
                                                                  }
                                                              }
                                                              value={index}
                                                              sx={{
                                                                  color: colorIcon,
                                                                  justifyContent: 'center'
                                                              }}>
                                                        {e}
                                                    </MenuItem>
                                            )
                                        }
                                    </Menu>
                                </>
                            )}
                        </PopupState>
                    </Box>
                    <Box>
                        <Button variant="outlined"
                                onClick={() => {
                                    addNewCategory();
                                }}>
                            Add
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddCategory