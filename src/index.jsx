import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "./Components/ThemeContext";
import Context from './Components/utils/Context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <ThemeProvider> */}
    <Context>
      <App/>
    </Context>
    {/* </ThemeProvider>       */}
    </BrowserRouter>
  </React.StrictMode>,
)




