import React from 'react'
import ReactDOM from 'react-dom/client'
import VConsole from 'vconsole';
import App from './App'
import './index.css'

new VConsole();
console.log('ua', navigator.userAgent)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
