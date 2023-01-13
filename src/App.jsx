import "./App.css";
import {
  HomePage,
  UnitPage,
  LogInPage,
  RegistrationPage,
  PricingPage,
  DraftPage,
  ChapterPage,
  ModalTriggerPage,
  UnitsPage,
  TutorPage,
  TutorUnitPage,
  TutorUnitsPage,
  UserPage,
  CoursePage,
  NotFound
} from "./pages";
import { Footer , LogInForm, NavigationBar } from "./components";
import { ModalProvider } from "./components/modals";
import { AuthContextProvider } from "./context";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col  items-center justify-center">
      
      <AuthContextProvider>
       
        <NavigationBar />
         <ModalProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/pricing" element={<PricingPage />}></Route>
          <Route exact path="/courses" element={<CoursePage />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
          <Route  path="login" element={<LogInPage/>}></Route>
          <Route path="register" element={<RegistrationPage />}></Route> 
          <Route exact path="/newCourses" element={<ChapterPage />}></Route>
          <Route exact path="/unit" element={<UnitPage />}></Route>
          <Route exact path="/units" element={<UnitsPage />}></Route>
          <Route exact path="/modals" element={<ModalTriggerPage />}></Route>
          <Route exact path="/draft" element={<DraftPage />}></Route>
          <Route exact path="/tutor/dashboard" element={<TutorPage />}></Route>
          <Route exact path="/tutor/units" element={<TutorUnitsPage />}></Route>
          <Route exact path="/tutor/unit" element={<TutorUnitPage />}></Route>
        </Routes>
        </ModalProvider>
        <Footer />
        
      </AuthContextProvider>
        
    </div>
  );
}

export default App;
