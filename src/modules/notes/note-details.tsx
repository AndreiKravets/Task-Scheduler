import { Box, Paper, SvgIcon, Typography } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import { notesStore } from '../../store/notes';
import { toJS } from 'mobx'
import IconsArray from './components/icons';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import NoteBody from './components/note-body';



const NoteDetails = () => {

  const { noteCategory, noteDetails } = useParams()
  const category = toJS(notesStore.notesArray).filter((e) => (e.categoryUrl === noteCategory))[0]
  const note = category.notes.filter((e) => (e.noteUrl === noteDetails))[0]
  const indexNote = category.notes.findIndex((e) => (e.noteUrl === noteDetails))
  return (
    <Paper variant={'outlined'} square
      sx={{ p: '22px', borderRadius: '10px', position: 'relative', boxShadow: `4px 4px 14px -10px ${'grey'}` }}>
      <Box display={'flex'} alignItems={'center'}>
        <SvgIcon sx={{ color: category.color, fontSize: '36px', mr: 1 }}>
          {IconsArray[category.icon]}
        </SvgIcon>
        <Typography color={category.color} variant={'h5'} fontWeight={'600'} textTransform={'uppercase'}>
          {category.name}
        </Typography>
      </Box>
      <Box my={2}>
        <Typography variant={'h5'}>
          {note.title}
        </Typography>
      </Box>
      
      <NoteBody color={category.color} body={note.body} category={category.categoryUrl} name={note.noteUrl} />

      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={1} mt={3}>
        {
          category.notes[indexNote - 1]
            ?
            <NavLink to={`../${category.notes[indexNote - 1].noteUrl}`}>
              <Typography color={category.color} alignItems={'center'} display={'flex'} fontWeight={'600'} textTransform={'uppercase'}>
                <ChevronLeft /> Prev Note
              </Typography>
            </NavLink>
            :
            <Typography color={'grey'} alignItems={'center'} display={'flex'} fontWeight={'600'} textTransform={'uppercase'}>
              <ChevronLeft /> Prev Note
            </Typography>
        }
        {
          category.notes[indexNote + 1]
            ?
            <NavLink  to={`../${category.notes[indexNote + 1].noteUrl}`}>
              <Typography color={category.color} alignItems={'center'} display={'flex'} fontWeight={'600'} textTransform={'uppercase'}>
                Next Note <ChevronRight />
              </Typography>
            </NavLink>
            :
            <Typography color={'grey'} alignItems={'center'} display={'flex'} fontWeight={'600'} textTransform={'uppercase'}>
              Next Note <ChevronRight />
            </Typography>
        }
      </Box>
    </Paper>
  )
}
export default NoteDetails