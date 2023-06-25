import React from 'react'
import ReactDOM from 'react-dom/client'


//import router
import AppRouter from './router/app.router.tsx'
//import font family
import "@fontsource/varela-round"; // Defaults to weight 400
import "@fontsource/varela-round/400.css"; // Specify weight
//import "@fontsource/varela-round/400-italic.css"; // Specify weight and style



import './index.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
)
