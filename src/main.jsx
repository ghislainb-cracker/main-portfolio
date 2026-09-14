import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './context/ThemeContext.jsx'

export default function Main() {
  return (
    <ThemeProvider>
      <Analytics />
      <App />
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Main />)