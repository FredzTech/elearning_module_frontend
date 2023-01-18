import "./App.css";
import {
  HomePage,
  UnitPage,
  LogInPage,
  RegistrationPage,
  PricingPage,
  ChapterPage,
  ModalTriggerPage,
  UnitsPage,
  TutorPage,
  TutorUnitPage,
  TutorUnitsPage,
  
  UserPage,
  NotFound,
  CoursePage,
} from "./pages";
import { Navbar } from "./components/NavigationBar";
import {
  Footer,
  CourseForm,
  ChapterForm,
  LessonForm,
  ResourcesForm,
  UnitForm,
  TestForm,
  TutorForm,
  StudentForm,
} from "./components";
import { ModalProvider } from "./components/modals";
import { AuthContextProvider } from "./Authentication";
import  {AdminRoute}  from "./Authentication/AdminRoute";
import { AdminDashboard } from "./components/Admin/AdminDashboard";
import Users from "./pages/UserPage";
import { Routes, Route } from "react-router-dom";
import IdleTimer  from "./Authentication/IdleTimer";
import Forbidden from "./pages/403";
function App() {
  return (
    <div className="flex flex-col  items-center justify-center">
      <AuthContextProvider>
       
        <Navbar />
        <ModalProvider>
          <IdleTimer>
         {/* <AdminRoute exact path="users" element={<Users/>} /> */}
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
          {/* admin routes */}
          <Route exact path="/admin" >
            <Route exact path="users" element={<Users/>}/>
            <Route exact path="dashboard" element={<AdminDashboard/>}/>
            <Route exact path="forbidden" element={<Forbidden />}/>
            <Route exact path="unitForm" element={<UnitForm />}/>
            <Route exact path="chapter" element={<ChapterForm />}/>
            <Route exact path="tutor-reg" element={<TutorForm />}/>
          </Route>
          
   
          {/* tutor routes */}
          <Route exact path="/tutor">
            <Route exact path="dashboard" element={<TutorPage />}/>
            <Route exact path="units" element={<TutorUnitsPage />}/>
            <Route exact path="unit" element={<TutorUnitPage />}/>
            <Route exact path="course" element={<CourseForm />}/>
            <Route exact path="lesson" element={<LessonForm />}/>
            <Route exact path="resources" element={<ResourcesForm />}/>
          </Route>
        
          
        </Routes>
          </IdleTimer>
        </ModalProvider>
        <Footer />
                     </AuthContextProvider>
    </div>
  );
}

export default App;
