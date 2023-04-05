import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Box, Button, MenuItem, SvgIcon, Typography} from "@mui/material";
import {IBodyItem, IBody} from "../models";
import NoteStore from '../../../store/notes'
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import TodoStore from "../../../store/todo";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import Colors from "./colors";

export interface IBodyVariant {
    variants: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline"
}
const NoteBody = observer(({body, color, category, name} :IBody ) => {

    const variants: IBodyItem[] = [
        {
          variant:  "h6",
            content: 'text'
        },
        {
          variant:  "body1",
            content: 'small text'
        },
        {
          variant:  "h4",
            content: 'title'
        },
        {
          variant:  "h5",
            content: 'subtitle'
        }
        ]

     const [edit, setEdit] = useState(true)
     const [content, setContent] = useState<IBodyItem[]>(() => body)
     const [colorIcon, setColorIcon] = useState(() => Colors[0])
     const [variant, setVariant] = useState<IBodyItem>( () => variants[0])


    function addContent(){

         const body:IBodyItem ={
            variant: "body1",
             content: '',
             color:Colors[0]
         }
        setContent([...content,body])
    }


    function changeNote(value:string, index:number){
         const body:IBodyItem[] = [...content]
        body[index].content = value
        body[index].variant = variant.variant
        // body[index].color = colorIcon
        setContent(body)
    }
    function changeColor(color:string, index:number){
        const body:IBodyItem[] = [...content]
        body[index].color = color
        setContent(body)
    }
    function changeVariant(variant:"button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" , index:number){
        const body:IBodyItem[] = [...content]
        body[index].variant = variant
        setContent(body)
    }
    return(
        <>
            <Box position={"absolute"} right={'25px'} top={'25px'} display={"flex"}>
            <Box onClick={() => setEdit(!edit)}
                display={'flex'} alignItems={'center'} justifyContent={"flex-end"} sx={{cursor:'pointer'}} mb={2}>
                <SvgIcon sx={{
                    color: color,
                    fontSize: '28px',
                    mr: 0.2
                }}><EditIcon/></SvgIcon>
                <Typography variant={"h5"} fontWeight={'600'} color={color}>
                   edit
                </Typography>
            </Box>
                {  !edit ? <Box
                onClick={() => (NoteStore.saveNote(category, name, content), setEdit(!edit))}
                 display={'flex'} ml={1} alignItems={'center'} justifyContent={"flex-end"} sx={{cursor:'pointer'}} mb={2}>
                <SvgIcon sx={{
                    color: color,
                    fontSize: '28px',
                    mr: 0.2
                }}><SaveIcon/></SvgIcon>
                <Typography variant={"h5"} fontWeight={'600'} color={color}>
                    save
                </Typography>
            </Box>: ''}
            </Box>
            {
                edit ?
                    <Box>
                        {
                            content.map((e: IBodyItem, index) => {
                                return (
                                    <Typography key={index} variant={e.variant} color={e.color}>
                                        {e.content}
                                    </Typography>
                                )

                            })
                        }

                    </Box>
                 :
                    <Box>
                        {
                            content.map((e: IBodyItem, index) => (
                                <Box key={index}>
                                <TextField
                                    onChange={e => changeNote(e.target.value, index)}
                                    sx={{width: '100%'}}
                                    defaultValue={e.content}
                                    multiline
                                />
                                    <Box display='flex' alignItems='center'>
                                        <PopupState variant="popover" popupId="color-menu">
                                            {(popupState) => (
                                                <>
                                                    <Button
                                                        sx={{width: 30, minWidth: 30, height: 30, backgroundColor: e.color, mr: 1}}
                                                        variant="contained" {...bindTrigger(popupState)}>
                                                    </Button>
                                                    <Menu {...bindMenu(popupState)}>
                                                        {
                                                            Colors.map((e) =>
                                                                <MenuItem key={e}
                                                                          onClick={
                                                                              () => {
                                                                                  popupState.close();
                                                                                  setColorIcon(e)
                                                                                  changeColor(e,index)
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
                                        <PopupState variant="popover" popupId="variant-menu">
                                            {(popupVariantState) => (
                                                <>
                                                    <Box
                                                        sx={{ backgroundColor:'white', color:e.color, mr: 1}}
                                                         {...bindTrigger(popupVariantState)}>
                                                        <Typography>
                                                            {variant.content}
                                                        </Typography>

                                                    </Box>
                                                    <Menu {...bindMenu(popupVariantState)}>
                                                        {
                                                            variants.map((e) =>
                                                                <MenuItem key={e.variant}
                                                                          onClick={
                                                                              () => {
                                                                                  popupVariantState.close();
                                                                                  changeVariant(e.variant,index)
                                                                              }
                                                                          }
                                                                          value={e.content} sx={{
                                                                        color: colorIcon,
                                                                        justifyContent: 'center'
                                                                    }}
                                                                >
                                                                    <Box>
                                                                        <Typography variant={e.variant}>
                                                                            {e.content}
                                                                        </Typography>
                                                                    </Box>
                                                                </MenuItem>
                                                            )
                                                        }
                                                    </Menu>
                                                </>
                                            )}
                                        </PopupState>
                                    </Box>
                                </Box>
                            ))
                        }
                        <Box textAlign={"right"} mt={1} >
                            <SvgIcon sx={{
                                color: color,
                                fontSize: '32px',
                                mr: 0.2,
                                cursor: 'pointer'
                            }}><AddIcon onClick={addContent}/></SvgIcon>
                        </Box>
                    </Box>
            }
        </>
    )
})

export default NoteBody