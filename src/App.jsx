import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage'
import NavBar from './components/navbar'

function App() {

  return (
    <div>
      <LandingPage />
      <div className='main-content'>
        <NavBar />
      </div>
    </div>
  )
}

export default App
