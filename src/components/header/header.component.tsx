
import { NavLink } from 'react-router-dom';

const HeaderComponent = ()=>{

    return(
        <>
            <h1> HEADER</h1>
            <nav className="navigation-bar">
                    <NavLink to="backround" >Go to Background</NavLink>
                    <NavLink to="career" >Go to Career</NavLink>
            </nav>
        </>

    )



}


export default HeaderComponent