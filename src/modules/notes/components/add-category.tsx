import React, {useState} from "react";
import {Box, Dialog, DialogContent, DialogTitle, Fab, FormControl, TextField,InputLabel,Select,MenuItem} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconsArray from "./icons";
import Colors from "./colors";

const AddCategory = () => {
     const [open, setOpen] = useState(false)
     const [category, setCategory] = useState('')
     const [categoryIcon, setCategoryIcon] = useState(IconsArray[0])
     const [colorIcon, setColorIcon] = useState(() => Colors[0])

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
                    Create New Category {category} {categoryIcon} {colorIcon}
                </DialogTitle>
                <DialogContent>

                    <TextField
                        fullWidth
                        label={'Add Category'}
                        sx={{mt:1}}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <Box display='flex'>
                    <FormControl sx={{ mt: 2, minWidth: 160, border:'none'}}>
                        <InputLabel htmlFor="category-icon" variant='outlined'>Choose Icon</InputLabel>
                        <Select
                            autoFocus
                            sx={{color:colorIcon}}
                            value={categoryIcon}
                            onChange={(e) => setCategoryIcon(e.target.value)}
                            label="maxWidth"
                            inputProps={{
                                name: 'category-icon',
                                id: 'category-icon',
                            }}
                        >
                            {
                                IconsArray.map((e, index) =>  <MenuItem value={index} sx={{color:colorIcon, justifyContent:'center'}} >{e}</MenuItem>)
                            }

                        </Select>
                    </FormControl>

                        <FormControl sx={{ mt: 2, minWidth: 160, border:'none'}}>
                            <InputLabel htmlFor="color-icon" variant='outlined'>Choose Icon</InputLabel>
                            <Select
                                autoFocus
                                value={colorIcon}
                                onChange={(e) => setColorIcon(e.target.value)}
                                label="maxWidth"
                                inputProps={{
                                    name: 'color-icon',
                                    id: 'color-icon',
                                }}
                            >
                                {
                                    Colors.map((e, index) =>  <MenuItem value={e} sx={{color:colorIcon, justifyContent:'center'}} ><Box sx={{width:10, height:10, backgroundColor:e}}></Box></MenuItem>)
                                }

                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddCategory