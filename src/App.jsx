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
import { ModalProvider } from "./components/modals";
import { AuthContextProvider } from "./context";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      {/* // <div> */}
      <AuthContextProvider>
       
        <NavigationBar />
         <ModalProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/pricing" element={<PricingPage />}></Route>
          <Route exact path="/courses" element={<CoursePage />}></Route>
          <Route exact path="/units" element={<UnitPage />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
          <Route  path="login" element={<LogInPage/>}></Route>
          <Route path="register" element={<RegistrationPage />}></Route> 
          

        </Routes>
        </ModalProvider>
        <Footer />
        
      </AuthContextProvider>
        
    </div>
  );
}

export default App;
