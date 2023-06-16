import './App.css'


//import components 
import {AsideMenuComponent} from './components/asideMenu/asideMenu.component'
import ContentComponent from './components/content/content.component'
import HeaderComponent from './components/header/header.component'
function App() {
  

  return (
    <>
      <h1>My main component</h1>
      <AsideMenuComponent/>
      <ContentComponent/>   
      <HeaderComponent/>
    </>
  )
}

export default App
