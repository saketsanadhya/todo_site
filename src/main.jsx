import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToDoContextProvider } from './context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ToDoContextProvider>
      <App />
  </ToDoContextProvider>
)
