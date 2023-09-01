import { Box, Pagination, Paper, Stack, SvgIcon, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { notesStore } from "../../store/notes";
import { ICategory } from "./models";
import { NavLink } from "react-router-dom";
import CategoryNotes from "./components/category";
import AddCategory from "./components/add-category";
import { Delete } from "@mui/icons-material";
import { useState } from "react";
import { profileStore } from "../../store/profile";



const Notes = observer(() => {

  const [page, setPage] = useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const countNotes = profileStore.countNones
  const paginationCount = Math.ceil(notesStore.notesArray.length / countNotes)
  const pagination = []
  for (let i = 1; i <= paginationCount; i++) {
    pagination.push(i)
  }

  return (
    <>
      <Box display={'flex'} flexWrap={'wrap'} m={'-5px'}>
        {
          notesStore.notesArray.map((e: ICategory, index) => (
            index + 1 <= page * countNotes && index + 1 > (page - 1) * countNotes
              ?
              <Paper key={e.categoryUrl} sx={{ flexBasis: 'calc(33.3% - 10px)', m: '5px', position: 'relative', minHeight: '205px', flexGrow: '1', cursor: 'pointer', borderRadius: '10px' }}>
                <NavLink
                  to={`./${e.categoryUrl}`}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    padding: '30px'
                  }}
                >
                  <CategoryNotes name={e.name} color={e.color} icon={e.icon} notes={e.notes} categoryUrl={e.categoryUrl} />
                </NavLink>
                <SvgIcon onClick={() => notesStore.delCategory(e.categoryUrl)}
                  sx={{ color: '#a6a1a1', fontSize: '25px', position: 'absolute', bottom: '15px', right: '15px' }}>
                  <Delete />
                </SvgIcon>
              </Paper>
              : false
          ))
        }
      </Box>
      <AddCategory />
      {
        paginationCount > 1
          ?
          <Stack spacing={2} mt={4}>
            <Pagination sx={{ justifyContent: 'center', display: 'inline-flex' }} count={paginationCount} page={page} onChange={handleChange} variant="outlined" shape="rounded" color='secondary' />
          </Stack>
          : false
      }

    </>
  )
})

export default Notes