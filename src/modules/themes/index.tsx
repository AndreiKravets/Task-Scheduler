import { Box, Button } from "@mui/material";
import { purpleTheme, blueTheme, blackTheme, orangeTheme } from '../../themes';
import ThemeStore from "../../store/theme";


const data = [
  {
    name: 'perple',
    theme: purpleTheme
  },
  {
    name: 'orange',
    theme: orangeTheme
  },
  {
    name: 'blue',
    theme: blueTheme
  },
  {
    name: 'black',
    theme: blackTheme
  },
]

const Themes = () => {
  return (
    <>
      {
        data.map((item) => (
          <Box display={'block'} mb={3} key={item.name}>
            <Box border={'4px solid'} borderColor={item.theme.palette.primary.main} display={'inline-flex'} width={'100%'} mb={1}>
              <Box bgcolor={item.theme.palette.primary.light} width={'14.3%'} height={55}></Box>
              <Box bgcolor={item.theme.palette.primary.main} width={'14.3%'} height={55}></Box>
              <Box bgcolor={item.theme.palette.primary.dark} width={'14.3%'} height={55}></Box>
              <Box bgcolor={item.theme.palette.background.default} width={'14.3%'} height={55}></Box>
              <Box bgcolor={item.theme.palette.secondary.light} width={'14.3%'} height={55}></Box>
              <Box bgcolor={item.theme.palette.secondary.main} width={'14.3%'} height={55}></Box>
              <Box bgcolor={item.theme.palette.secondary.dark} width={'14.3%'} height={55}></Box>
            </Box>
            <Button variant='contained'
              sx={{
                backgroundColor: item.theme.palette.primary.main,
                width: 150,
                height: 40,
              }}
              onClick={() => ThemeStore.setActiveTheme(item.theme)}
            >
              {item.name}
            </Button>
          </Box>
        ))
      }
    </>
  )
}

export default Themes