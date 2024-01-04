import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './Pages/MainPage'
import GlobalStyles from './styles/global.js'
// import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
      <GlobalStyles/>
      <MainPage />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
)
