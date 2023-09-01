import { Box, Paper, SvgIcon, Typography } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import { notesStore } from '../../store/notes';
import Colors from './components/colors';
import AddNote from './components/add-note';
import { INote } from './models';
import { observer } from 'mobx-react';
import { toJS } from 'mobx'
import { Delete } from '@mui/icons-material';


const Note = observer(() => {

  const { noteCategory } = useParams()
  const currentCategory = toJS(notesStore.notesArray).filter((e) => e.categoryUrl == noteCategory)[0]

  return (
    <Paper variant={'outlined'} square={true} sx={{ p: '22px', borderRadius: '10px', boxShadow: `4px 4px 14px -10px ${currentCategory.color}` }}>
      <Box display={'flex'} alignItems={'center'} mb={2}>
        <Typography color={currentCategory.color} variant={'h5'} textTransform={'uppercase'} fontWeight={'600'}>
          {currentCategory.name}
        </Typography>
      </Box>
      {
        currentCategory.notes.map((e: INote) => (
          <Box position={'relative'}>
            <NavLink key={e.title} to={`./${e.noteUrl}`}>
              <Paper variant={'outlined'} sx={{ p: 1, pl: 2, mb: 1, borderRadius: '6px' }}>
                <Typography variant={'h6'}>
                  {e.title}
                </Typography>
              </Paper>
            </NavLink>
            <SvgIcon onClick={() => notesStore.delNote(currentCategory.categoryUrl, e.noteUrl)}
              sx={{ color: '#a6a1a1', fontSize: '25px', position: 'absolute',top:'13px', right: '15px' }}>
              <Delete />
            </SvgIcon>
          </Box>
        ))
      }
      <AddNote />
    </Paper>
  )
})
export default Note