import "./App.css";
import {
  HomePage,
  CoursePage,
  UnitPage,
  LogInPage,
  RegistrationPage,
  PricingPage,
  UserPage,
  NotFound
} from "./pages";
import { Footer , LogInForm, NavigationBar } from "./components";
import Modal from "./components/modals/Modal";
import { AuthContextProvider } from "./context";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <AuthContextProvider>
       
        <NavigationBar />
         <Modal>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/pricing" element={<PricingPage />}></Route>
          <Route exact path="/courses" element={<CoursePage />}></Route>
          <Route exact path="/units" element={<UnitPage />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
          <Route  path="login" element={<LogInPage/>}></Route>
          <Route path="register" element={<RegistrationPage />}></Route> 
          

        </Routes>
        </Modal>
        <Footer />
        
      </AuthContextProvider>
        
    </div>
  );
}

export default App;
