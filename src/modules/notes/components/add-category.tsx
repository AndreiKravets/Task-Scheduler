import { Add } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Menu, MenuItem, Popover, Stack, SvgIcon, TextField } from '@mui/material';
import React, { useState } from 'react';
import PopupState, { bindTrigger, bindPopover, bindMenu } from 'material-ui-popup-state';
import Colors from './colors';
import IconsArray from './icons';
import { notesStore } from '../../../store/notes';



const AddCategory = () => {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('')
  const [colorIcon, setColorIcon] = useState(Colors[0])
  const [categoryIcon, setCategoryIcon] = useState(IconsArray[0])
  const [categoryIconIndex, setCategoryIconIndex] = useState(0)

  function addNewCategory() {
    setOpen(false)
    let catUrl = category.trim().replaceAll(' ', '-').toLocaleLowerCase()
    notesStore.notesArray.map(e => (
      e.categoryUrl == catUrl 
      ?
      catUrl= catUrl+'-1'
      :
      false
    ))
    notesStore.addNoteCategory({
      icon: categoryIconIndex,
      categoryUrl: catUrl,
      name: category,
      color: colorIcon,
      notes: []
    })
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
          Create New Category
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label={'Add Category'}
            margin='dense'
            onChange={e => setCategory(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ p: '0 24px', pb: '20px', justifyContent: 'space-between' }}>
          <Stack direction={'row'} alignItems='center'>
            <PopupState variant="popover" popupId="popup-color-menu">
              {(popupState) => (
                <>
                  <Button {...bindTrigger(popupState)}
                    variant='contained'
                    sx={{
                      width: 30,
                      minWidth: 30,
                      height: 30,
                      backgroundColor: colorIcon,
                      mr: 1
                    }}
                  >
                  </Button>
                  <Menu {...bindMenu(popupState)} >
                    {
                      Colors.map(e =>
                        <MenuItem key={e}
                          onClick={
                            () => {
                              popupState.close()
                              setColorIcon(e)
                            }
                          }
                        >
                          <Box width={20} height={20} bgcolor={e}></Box>
                        </MenuItem>
                      )
                    }
                  </Menu>
                </>
              )}
            </PopupState>
            <PopupState variant="popover" popupId="popup-icon-menu">
              {(popupState) => (
                <>
                  <Button {...bindTrigger(popupState)}
                    variant='text'
                    sx={{
                      width: 40,
                      minWidth: 40,
                      height: 40,
                      backgroundColor: 'unset',
                      color: colorIcon
                    }}
                  >
                    <SvgIcon sx={{ fontSize: 40 }}>{categoryIcon}</SvgIcon>
                  </Button>
                  <Menu {...bindMenu(popupState)} >
                    {
                      IconsArray.map((e, index) =>
                        <MenuItem key={index}
                          onClick={
                            () => {
                              popupState.close()
                              setCategoryIcon(e)
                              setCategoryIconIndex(index)
                            }
                          }
                          sx={{
                            color: colorIcon
                          }}
                        >
                          {e}
                        </MenuItem>
                      )
                    }
                  </Menu>
                </>
              )}
            </PopupState>
          </Stack>
          <Button variant="outlined"
            onClick={() => {
              addNewCategory()
            }}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default AddCategory