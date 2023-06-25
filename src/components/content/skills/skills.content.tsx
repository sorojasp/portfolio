//to put the varela round
import { createTheme, ThemeProvider } from '@mui/material';

// progress bar
import ProgressBar from "@ramonak/react-progress-bar";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Varela Round',
      'cursive',
    ].join(','),
  },});


export const SkillsComponent = ()=>{


    return(

      <>      
        <div className='skills'>


          <ThemeProvider theme={theme}>

            <p>Javascript</p> 
            <ProgressBar completed={60} animateOnRender={true} />

          </ThemeProvider>
        </div>
      </>

    )


}


export default SkillsComponent


 