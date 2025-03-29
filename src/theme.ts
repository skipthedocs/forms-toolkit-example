import { createTheme } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[800],
    },
    secondary: {
      main: grey[600],
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
});

export default theme;
