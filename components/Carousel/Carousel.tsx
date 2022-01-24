import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Button, Typography, Paper,  MobileStepper, Box} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import images from "./carouselImages";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Arrow = ({direction, onClick, disabled}:{direction:string, onClick:()=>void, disabled:boolean})=>{
   return(
     <Box sx={{width:"10px"}}>
             <Button
             onClick={onClick}
             disabled={disabled}
              sx={{ minWidth:"5px",  width:"5px"}}
         >
             {(direction === "right") ? <KeyboardArrowRight  /> : <KeyboardArrowLeft /> }
         </Button>

     </Box>)
   

  //  )    
}

const Stepper = ({activeStep}:{activeStep:number})=>(     
    <MobileStepper
            variant="dots"
            steps={3}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={
                <Button >
                
                </Button>
            }
            backButton={
                <Button >
                </Button>
            }
    />
)



function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{display:"flex", flexDirection:"column",  alignItems:"center"}}>
        <Box sx={{ display:"flex", justifyContent:"center", alignItems:"center", width:"380px" }}>
           <Arrow   onClick={handleBack} disabled={activeStep === 0} direction={"left"}/> 
           <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >   
                {images.map((step, index) => (
                <div key={step.label} style={{display:"flex"}}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                        component="img"
                        sx={{
                        overflow: 'hidden',
                        width:"90%",
                        marginRight:"auto",
                        marginLeft:"auto"
                        }}
                        src={step.imgPath}
                        alt={step.label}
                    />
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
           <Arrow     onClick={handleNext} disabled={activeStep === maxSteps - 1}direction={"right"}/>      
        </Box>

           

      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography sx={{width:"380px", alignText:"center"}}>{images[activeStep].label}</Typography>
      </Paper>

      < Stepper activeStep={activeStep}/>
     
    
    </Box>
  );
}

export default SwipeableTextMobileStepper;
