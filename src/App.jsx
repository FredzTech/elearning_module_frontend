import "./App.css";
import {
  HomePage,
  CoursePage,
  UnitPage,
  LogInPage,
  RegistrationPage,
  PricingPage,
} from "./pages";
import { NavigationBar } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
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
