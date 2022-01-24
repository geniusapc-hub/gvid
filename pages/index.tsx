import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Button,
  Container,
  Grid, 
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';

import KeyboardIcon from '@mui/icons-material/Keyboard';
import AppBar from "../components/AppBar/Appbar"
import Carousel from "../components/Carousel/Carousel"

const Home: NextPage = () => {
  const home = {
    title: " Premium video meetings \n  Now free for everyone",
    improvement: `We re-engineered the service we built for secure business meetings 
                    Genius Vid, to make it free and available for all`,

    "New-Meeting": "New Meeting",
    "JOIN-MEETING-TEXT": "Enter a code or link"
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Gvid</title>
      </Head>
      <AppBar />

      <Grid container className={styles.main} component={"main"} spacing={2} >
        <Grid item xs={12} sm={6}>
          <Container>
            <Typography variant="h3" component={"h1"} sx={{ marginBottom: "16px" }}>
              {home.title}
            </Typography>
            <Typography mb="40px" >
              {home.improvement}
            </Typography>
            <Button className={styles.button} variant="outlined">{home["New-Meeting"]}</Button>


            <FormControl sx={{ ml: 5, }} variant="outlined">
              <OutlinedInput
                id="keybord"
                sx={{ height: "48px", width: '250px' }}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="keyboard"
                      edge="start"
                    >
                      <KeyboardIcon />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder={home["JOIN-MEETING-TEXT"]}
                notched={false}
              />
            </FormControl>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Carousel />
        </Grid>

      </Grid>
    </div>
  )
}

export default Home
