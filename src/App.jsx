import "./App.css";
import {
  HomePage,
  UnitPage,
  PricingPage,
  ChapterPage,
  UnitsPage,
  TutorPage,
  TutorUnitPage,
  TutorUnitsPage,
  NotFound,
  AdminDashboard,
  StudentsPageAdmin,
  TutorsPageAdmin,
  CourseAdminPage,
  TutorLayoutPage,
  AdminLayout,
} from "./pages";
import { Navbar } from "./components/NavigationBar";
import {
  Footer,
  CourseForm,
  ChapterForm,
  LessonForm,
  ResourcesForm,
  UnitForm,
  RequireAuth,
} from "./components";
import { ModalProvider } from "./components/modals";
import Users from "./pages/UserPage";
import { Routes, Route } from "react-router-dom";
import IdleTimer from "./Authentication/IdleTimer";
import Forbidden from "./pages/403";
import {
  AdminLoginPage,
  TutorLoginForm,
  StudentLoginForm,
  StudentRegistrationForm,
  TutorRegistrationForm,
} from "./components/Logins-Registration";
import CoursesAdminPage from "./pages/Admin/CourseAdminPage";

function App() {
  // AUTHENTICATION ROUTES
  // {
  //   student:"2000",
  //   admin :"2001",
  //   tutor:"2002",
  // }
  return (
    <div className="flex flex-col w-screen h-full ">
      {/* <AuthContextProvider> */}
      <Navbar className="flex" />

      {/* <div className=" flex flex-1 "> */}
      <ModalProvider>
        {/* <IdleTimer> */}
        <Routes>
          <Route element={<RequireAuth allowedRoles={[2000, 2001, 2002]} />}>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/pricing" element={<PricingPage />}></Route>
            <Route exact path="*" element={<NotFound />}></Route>
            <Route path="student-login" element={<StudentLoginForm />}></Route>
            <Route path="tutor-login" element={<TutorLoginForm />}></Route>
            <Route path="admin-login" element={<AdminLoginPage />}></Route>
            <Route
              path="register"
              element={<StudentRegistrationForm />}
            ></Route>
            <Route exact path="/units" element={<ChapterPage />}></Route>
            <Route exact path="/unit" element={<UnitPage />}></Route>
            <Route exact path="/courses" element={<UnitsPage />}></Route>
          </Route>
          {/* admin routes */}
          <Route exact path="/admin" element={<AdminLayout />}>
            <Route element={<RequireAuth allowedRoles={[2001]} />}>
              <Route exact path="users" element={<Users />} />
              <Route exact path="dashboard" element={<AdminDashboard />} />
              <Route exact path="forbidden" element={<Forbidden />} />
              <Route exact path="course-form" element={<CourseForm />} />
              <Route exact path="unit-form" element={<UnitForm />} />
              <Route
                exact
                path="tutor-reg"
                element={<TutorRegistrationForm />}
              />
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
              <Route
                exact
                path="courses"
                element={<CoursesAdminPage />}
              ></Route>
            </Route>
          </Route>
          {/* tutor routes */}
          <Route exact path="/tutor" element={<TutorLayoutPage />}>
            <Route element={<RequireAuth allowedRoles={[2002]} />}>
              <Route exact path="dashboard" element={<TutorPage />} />
              <Route exact path="units" element={<TutorUnitsPage />} />
              <Route exact path="chapter" element={<ChapterForm />} />
              <Route exact path="lesson" element={<LessonForm />} />
              <Route exact path="resources" element={<ResourcesForm />} />
            </Route>
          </Route>
          <Route element={<RequireAuth allowedRoles={[2002]} />}>
            <Route exact path="/tutor/unit" element={<TutorUnitPage />} />
          </Route>
          {/* <Route exact path="admin" element={<AdminPage />}></Route> */}
        </Routes>
        {/* </IdleTimer> */}
      </ModalProvider>
      {/* </div> */}
      {/* </AuthContextProvider> */}
      <Footer />
    </div>
  );
}

export default App;
