// GENERAL COMPONENTS

import LogInForm from "./Logins-Registration/StudentLoginForm";
import RequireAuth from "./RequireAuth";
import AlertBox from "./AlertBox";
import TutorAccordion from "./SideNav/TutorAccordion";
import Accordion from "./SideNav/Accordion";
// HOMEPAGE COMPONENTS

// COURSE PAGE COMPONENTS
import HomePageCard from "./HomePage/HomePageCard";
import HomePageGrid from "./HomePage/HomePageGrid";
import LandingSection from "./HomePage/LandingSection";
import Chapter from "./CoursePage/Chapter";
import Pointer from "./CoursePage/Pointer";
import SubNav from "./CoursePage/SubNav";
import CourseHeading from "./CoursePage/CourseHeading";

// UNIT PAGE COMPONENTS
import {
  VideoComponent,
  ChapterCard,
  UnitsCard,
  UnitNav,
  QuillEditorStudent,
  TutorCard,
} from "./UnitPage";

import { Button, CustomNav } from "./CustomForm";
// TUTOR PAGE

import {
  QuillEditorTutor,
  TutorCardHome,
  TutorSideBar,
} from "./TutorPage/General";
import {
  CourseForm,
  TestForm,
  ChapterForm,
  LessonForm,
  ResourcesForm,
  UnitForm,
} from "./TutorPage/Forms";

// LOGINS-REGISTRATION COMPONENTS.
import {
  AdminLoginPage,
  TutorLoginForm,
  StudentLoginForm,
  StudentRegistrationForm,
  TutorRegistrationForm,
} from "./Logins-Registration";

import Footer from "./Footer";
import {
  AdminButton,
  AdminCard,
  AdminSideNav,
  CoursesTable,
  PaymentsTable,
  StudentsTable,
  NavigateBtn,
  StatusPill,
  CTAButton,
  TutorsAdminTable,
  StudentsAdminTable,
  CoursesAdminTable,
  CourseAdminCard,
  PageTitle,
  UnitsAdminTable,
  CTAUnitButtonAdmin,
  AdminNavItem,
} from "./AdminPage";

export {
  LogInForm,
  HomePageCard,
  HomePageGrid,
  Chapter,
  Pointer,
  SubNav,
  CourseHeading,
  VideoComponent,
  Button,
  CustomNav,
  ChapterCard,
  TutorCard,
  UnitsCard,
  UnitNav,
  QuillEditorTutor,
  QuillEditorStudent,
  TutorSideBar,
  TutorCardHome,
  LandingSection,
  Footer,
  CourseForm,
  TestForm,
  ChapterForm,
  LessonForm,
  ResourcesForm,
  UnitForm,
  AlertBox,
  AdminButton,
  AdminCard,
  AdminSideNav,
  CoursesTable,
  PaymentsTable,
  StudentsTable,
  NavigateBtn,
  StatusPill,
  TutorsAdminTable,
  CTAButton,
  StudentsAdminTable,
  CoursesAdminTable,
  PageTitle,
  UnitsAdminTable,
  CourseAdminCard,
  CTAUnitButtonAdmin,
  AdminNavItem,
  RequireAuth,
  AdminLoginPage,
  TutorLoginForm,
  StudentLoginForm,
  StudentRegistrationForm,
  TutorRegistrationForm,
  TutorAccordion,
  Accordion,
};
