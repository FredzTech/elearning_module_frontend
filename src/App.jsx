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
  NotFound,
  CoursePage,
  AdminPage,
  AdminDashboard,
  StudentsPageAdmin,
  TutorsPageAdmin,
} from "./pages";
import {
  Footer,
  LogInForm,
  NavigationBar,
  CourseForm,
  ChapterForm,
  LessonForm,
  ResourcesForm,
  UnitForm,
  TutorForm,
  StudentForm,
} from "./components";
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
            <Route path="login" element={<LogInPage />}></Route>
            <Route path="register" element={<RegistrationPage />}></Route>
            <Route exact path="/newCourses" element={<ChapterPage />}></Route>
            <Route exact path="/unit" element={<UnitPage />}></Route>
            <Route exact path="/units" element={<UnitsPage />}></Route>
            <Route exact path="/modals" element={<ModalTriggerPage />}></Route>
            <Route exact path="/draft" element={<DraftPage />}></Route>
            <Route
              exact
              path="/tutor/dashboard"
              element={<TutorPage />}
            ></Route>
            <Route
              exact
              path="/tutor/units"
              element={<TutorUnitsPage />}
            ></Route>
            <Route exact path="/tutor/unit" element={<TutorUnitPage />}></Route>

            {/* FORMS SETUP */}
            <Route
              exact
              path="/tutor/chapter"
              element={<ChapterForm />}
            ></Route>
            <Route exact path="/tutor/course" element={<CourseForm />}></Route>
            <Route exact path="/tutor/lesson" element={<LessonForm />}></Route>
            <Route exact path="/tutor/unitForm" element={<UnitForm />}></Route>
            <Route
              exact
              path="/tutor/tutor-reg"
              element={<TutorForm />}
            ></Route>
            <Route
              exact
              path="/tutor/student-reg"
              element={<StudentForm />}
            ></Route>
            <Route
              exact
              path="/tutor/resources"
              element={<ResourcesForm />}
            ></Route>

            <Route exact path="admin" element={<AdminPage />}>
              <Route
                exact
                path="dashboard"
                element={<AdminDashboard />}
              ></Route>
              <Route
                exact
                path="students"
                element={<StudentsPageAdmin />}
              ></Route>
              <Route exact path="tutors" element={<TutorsPageAdmin />}></Route>
            </Route>
          </Routes>
        </ModalProvider>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
