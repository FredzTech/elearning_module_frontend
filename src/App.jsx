import "./App.css";
import { HomePage, CoursePage, UnitPage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col  gap-10 items-center justify-center">
      {/* SHOULD RETURN MY PAGES
       */}
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/coursePage" element={<CoursePage />}></Route>
        <Route exact path="/unitPage" element={<UnitPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
