

//libraries about the timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
//to put the varela round
import { createTheme, ThemeProvider } from '@mui/material';

//icon
import DirectionsBikeRoundedIcon from '@mui/icons-material/DirectionsBikeRounded';


// to aling the timeline
import  { timelineItemClasses } from '@mui/lab/TimelineItem'; 

// SR7 image
import SR7picture from '../../assets/images/picture_SR_4.jpg'
import './asideMenu.component.css'

// itemData interface
import {ItemDataInterface} from '../../shared/interfaces/itemData/item-data.Interface';



const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'cursive',
      ].join(','),
    },});
  
  
const personalData:ItemDataInterface[]=[
    {
        nameValue:"Name",
        value:"Stiven Rojas",
        colorIcon:"primary",
        emoji:'🚵'
    },
    {
        nameValue:"Birthday",
        value:"19 November 1985",
        colorIcon:"secondary",
        emoji:'🎊'
    },
    {
        nameValue:"Email",
        value:"sorojasp@udistrital.edu.co",
        colorIcon:"primary",
        emoji:'📧'

    }
    ,
    {
        nameValue:"Cellphone",
        value:"+573114606066",
        colorIcon:"secondary",
        emoji:'📱'

    }
]


export const AsideMenuComponent = ()=>{



    return(
        <>
        <div className='component' >


        <div style={{padding:'5px'}}>
        <p><strong>👨🏻‍💻Stiven Rojas</strong></p>
        <p>Fullstack developer</p>
        </div>

        <img  src={SR7picture} width={312} alt="stiven"/>
        {

        
        //image sizes: 220 312
        }


        


        <ThemeProvider theme={theme}>
            <Timeline  sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                        },
                        }}>

                <TimelineItem>
                        <TimelineSeparator  >
                        <TimelineConnector/>
                        <TimelineDot color="secondary" >
                            <DirectionsBikeRoundedIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                    </TimelineItem>

                {
                    personalData.map((item:ItemDataInterface)=>
                    
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot color={item.colorIcon}/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            
                            <strong>
                                
                                {item.nameValue}: 
                            </strong> 
                            <br></br>
                            {item.value}
                        </TimelineContent>
                    </TimelineItem>)
                }
                
                
            </Timeline>
        </ThemeProvider>
         

        </div>
        </>
    )


}


 