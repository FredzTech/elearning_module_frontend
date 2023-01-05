import "./App.css";
import { NavigationBar, HomePageGrid } from "./components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogInPage from './pages/LogInPage'
import RegistrationPage from './pages/RegistrationPage'
 import PricingPage from './pages/PricingPage'

function App() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.`;
  console.log(text);

  return (
    <div className="App flex flex-col items-center justify-center gap-5">
      <NavigationBar />
      <HomePageGrid />
    
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
  );
}

export default App;
