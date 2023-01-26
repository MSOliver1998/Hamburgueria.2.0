import {GlobalStyle} from './styles/index.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
)
