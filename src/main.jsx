import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'

export default function Main() {
  return (
    <>
      <Analytics />
      <App />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Main />)