import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

export default function Main(){
  return(
    <App/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Main/>)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
