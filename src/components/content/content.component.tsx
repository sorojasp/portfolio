import { Outlet } from 'react-router-dom';
import HeaderComponent from './header/header.component';
import './content.component.css'

const ContentComponent = ()=>{


    return(
        <>  

            <div className="content">
                
                <HeaderComponent/>

        
                <Outlet />
            </div>

        </>
    )




}


export default ContentComponent