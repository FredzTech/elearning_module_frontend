import "./App.css";
import { HomePage, CoursePage, UnitPage } from "./pages";
import { NavigationBar } from "./components";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import RegistrationPage from "./pages/RegistrationPage";
import PricingPage from "./pages/PricingPage";
function App() {
  // const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
  //         quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
  //         nihil.`;
  // console.log(text);
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/pricing" element={<PricingPage />}></Route>
        <Route exact path="/login" element={<LogInPage />}></Route>
        <Route exact path="/register" element={<RegistrationPage />}></Route>
        <Route exact path="/courses" element={<CoursePage />}></Route>
        <Route exact path="/units" element={<UnitPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
