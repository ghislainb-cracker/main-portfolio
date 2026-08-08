import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/next"


export default function Main(){
  return(
    <>
    <Analytics>
    <App/>
    </Analytics>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Main/>)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
