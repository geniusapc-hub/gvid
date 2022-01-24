import * as React from 'react';
import {AppBar, Avatar, Box, Toolbar,IconButton, Typography,InputBase } from '@mui/material';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import moment from "moment";

export default function PrimarySearchAppBar() {
  const today = moment().format('h:mm a . ddd MMM DD')
  
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>       
          <Box sx={{ display: { xs: 'flex' } }}>
            <Avatar alt="logo" src="gvid.png" sx={{display:"flex"}}/>
            <Typography sx={{display:{xs:"none", sm:"flex"}, marginTop:"auto"}} gutterBottom>Genius Vid</Typography> 
          </Box>

          <Box sx={{background:"white", flexGrow: 1 }} />
          
          <Box sx={{ display: { xs: 'flex' },  flexDirection:"row" }}>
            <Typography  
              sx={{ display: { xs: 'none', md: 'flex' },  
              marginTop:"auto",
              marginBottom:"auto"}} 
            >
              {today}
            </Typography>
            <IconButton
              size="large"
              aria-label="feedback"
            >
               <FeedbackOutlinedIcon/>
            </IconButton>
            
            <IconButton
              size="large"
              aria-label="help"
            >
               <HelpOutlineOutlinedIcon/>
            </IconButton>

            <Avatar alt="Profile Picure"
              sx={{marginLeft:"50px", marginTop:"auto",  marginBottom:"auto", width: 24, height: 24 }}
            >
                P
              </Avatar>

          </Box>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
