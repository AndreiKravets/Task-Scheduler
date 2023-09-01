import { Box, Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import { profileStore } from '../../store/profile';


const Profile = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  return (
    <Paper variant={'outlined'}
      sx={{
        p: '22px',
        borderRadius: '10px',
        boxShadow: '4px 4px 14px -10px grey'
      }}
    >
      <TextField
        fullWidth
        label={'First Name'}
        margin='dense'
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        fullWidth
        label={'Last Name'}
        margin='dense'
        onChange={e => setLastName(e.target.value)}
      />
      <Box display={'flex'} justifyContent={'flex-end'} mt={2}>
        <Button variant="outlined"
          sx={{ height: '40px' }}
          onClick={() => profileStore.saveUser(firstName, lastName)}
        >
          Save
        </Button>
      </Box>
    </Paper>
  )
}
export default Profile