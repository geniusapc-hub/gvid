import { createTheme } from '@mui/material/styles';
import { green, purple, white} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fffff",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme