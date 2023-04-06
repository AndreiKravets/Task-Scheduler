import React, {useState} from "react";
import MDEditor, { selectWord } from "@uiw/react-md-editor";
import {Box, SvgIcon, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import NoteStore from "../../../store/notes";
import SaveIcon from "@mui/icons-material/Save";
import Colors from "./colors";
import {observer} from "mobx-react-lite";
import {IBody, IBodyItem} from "../models";


const NoteBody = observer(({body, color, category, name} :IBody ) => {

    const [edit, setEdit] = useState(true)
    const [value, setValue] = useState(() => body)
    const [content, setContent] = useState(() => body)

    console.log(value)
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
                    onClick={() => (NoteStore.saveNote(category, name, value), setEdit(!edit))}
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
                    <MDEditor.Markdown source={value}/>
                      :
                    <MDEditor
                        value={value}
                        onChange={(val) => {
                            setValue(val!)
                        }}
                    />
            }
        </>
    )
}
)
export default NoteBody