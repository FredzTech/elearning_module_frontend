import "./App.css";
import { NavigationBar, HomePageGrid } from "./components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogInPage from './pages/LogInPage'
import RegistrationPage from './pages/RegistrationPage'
 import PricingPage from './pages/PricingPage'

function App() {
  // const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
  //         quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
  //         nihil.`;
  // console.log(text);

  return (
  <div>
    {/* <div className="App flex flex-col items-center justify-center gap-5"> */}
      
      
     
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<HomePageGrid />}></Route>
          <Route exact path='/pricing' element={<PricingPage/>}></Route>
          <Route exact path='/login' element={<LogInPage/>}></Route>
          <Route exact path='/register' element={<RegistrationPage/>}></Route>
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
