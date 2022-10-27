import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NewsProvider } from './context/NewsProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>
)
