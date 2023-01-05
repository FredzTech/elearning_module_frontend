import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogInPage from './pages/LogInPage'
import RegistrationPage from './pages/RegistrationPage'
 import PricingPage from './pages/PricingPage'

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<PricingPage/>}></Route>
          <Route exact path='/login' element={<LogInPage/>}></Route>
          <Route exact path='/register' element={<RegistrationPage/>}></Route>
        </Routes>
      </Router>
      {/* <RegistrationPage/> */}
      {/* <PricingPage/> */}
      {/* <LogInPage/> */}

    </div>
  )
}

export default App
