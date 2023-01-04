import "./App.css";
import { HomePage, CoursePage, UnitPage } from "./pages";
function App() {
  return (
    <div className="flex flex-col  gap-10 items-center justify-center">
      {/* SHOULD RETURN MY PAGES
       */}
      <HomePage />
      <CoursePage />
      <UnitPage />
    </div>
  );
}

export default App;
