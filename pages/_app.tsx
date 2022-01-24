import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import theme from "../theme/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return( 
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>;
      </>
  )

}

export default MyApp
