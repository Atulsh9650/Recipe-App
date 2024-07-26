import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import store from './store/store.ts'

const theme=createTheme({
  palette:{
    primary:{
      main:'#212121'
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
    <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
