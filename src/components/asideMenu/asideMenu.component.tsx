
import DeleteIcon from '@mui/icons-material/Delete';
//libraries about the timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

//to put the varela round
import { createTheme, ThemeProvider } from '@mui/material';

// to aling the timeline
import  { timelineItemClasses } from '@mui/lab/TimelineItem'; 

// SR7 image
import SR7picture from '../../assets/images/picture_SR_4.jpg'



const theme = createTheme({
  typography: {
    fontFamily: [
      'Varela Round',
      'cursive',
    ].join(','),
  },});



import './asideMenu.component.css'

export const AsideMenuComponent = ()=>{



    return(
        <>
        <div className='component'>
       
        <p><strong>Stiven Rojas</strong></p>
        <p>Fullstack developer</p>

        <img  src={SR7picture} width={303} alt="stiven"/>


        <DeleteIcon></DeleteIcon>
        <ThemeProvider theme={theme}>
            <Timeline  sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                        },
                        }}>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><strong>Name: </strong> Stiven Rojas</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
            </Timeline>
        </ThemeProvider>
         

        </div>
        </>
    )


}


 