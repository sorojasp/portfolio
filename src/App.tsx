import './App.css'


//import components 
import {AsideMenuComponent} from './components/asideMenu/asideMenu.component'
import ContentComponent from './components/content/content.component'

// imports grid library
import Grid from '@mui/material/Grid';


function App() {
  

  return (
    <>
      <Grid container spacing={0.3}>
        <Grid item xs={0.5} md={0.5}>
          
        </Grid> 

        
        <Grid item xs={1} md={2}>
          <AsideMenuComponent/>
        </Grid>

        <Grid item xs={9} md={7}>
          <ContentComponent/>
        </Grid> 

        <Grid item xs={0.5} md={0.5}>
          
        </Grid> 
        
          

       
      </Grid>
    </>
  )
}

export default App
