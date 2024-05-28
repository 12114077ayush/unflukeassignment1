
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Content from './components/content/Content'

function App() {


  return (
    <BrowserRouter>
      <div className='dashboard bg-primary min-h-screen flex gap-14'>
        <Sidebar />
        <div className="dashbard-content bg-slate-100 flex-1 p-6 rounded-3xl mt-6 mr-3 mb-6">
          <Content />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
