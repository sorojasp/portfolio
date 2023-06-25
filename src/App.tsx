import './App.css'


//import components 
import {AsideMenuComponent} from './components/asideMenu/asideMenu.component'
import ContentComponent from './components/content/content.component'

// imports grid library
import Grid from '@mui/material/Grid';


function App() {
  

  return (
    <>
      <Grid container spacing={0.5}>

        <Grid item xs={1} md={0}>
          
        </Grid>

        <Grid item xs={2} md={2}>
          <AsideMenuComponent/>
        </Grid>

        <Grid item xs={8} md={7}>
          <ContentComponent/>
        </Grid>   

        <Grid item xs={1} md={0}>
        </Grid> 
       
      </Grid>
    </>
  )
}

export default App
