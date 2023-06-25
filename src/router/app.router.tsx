import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';

// import the components
import BackgroundComponent from '../components/content/background/background.component';
import WorkExperienceComponent from '../components/content/workExperience/workExperience.component';
import ContentComponent from '../components/content/content.component'
import SkillsComponent from '../components/content/skills/skills.content'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route  element={<ContentComponent />}/> 
                    <Route path="/" element ={<BackgroundComponent/>}></Route>
                    <Route path="backround" element ={<BackgroundComponent/>}></Route>
                    <Route path="career" element={<WorkExperienceComponent/>}></Route>
                    <Route path="skills" element={<SkillsComponent/>}></Route>
                
                </Route>

                
            </Routes>
        </BrowserRouter>
    )
}


export default AppRouter