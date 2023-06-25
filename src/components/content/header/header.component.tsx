
import { NavLink } from 'react-router-dom';
import './header.component.css';


const navlinkStyles={textDecoration: 'none', padding:'3px'}
const HeaderComponent = ()=>{

    return(
        <>
            
            <nav className="navigation-bar">
                    <NavLink to="backround" style={navlinkStyles} > Background</NavLink>
                    <NavLink to="career" style={navlinkStyles}  > Career</NavLink>
                    <NavLink to="career" style={navlinkStyles}  >Portfolio</NavLink>
                    <NavLink to="skills" style={navlinkStyles}  >Skills</NavLink>
                    <NavLink to="career" style={navlinkStyles}  >Contact</NavLink>
            </nav>
        </>

    )



}


export default HeaderComponent