// GENERAL COMPONENTS
import LogInButton from "./LogInButton";
import LogInForm from "./LogInForm";
import RegistrationButton from "./RegistrationButton";
import RegistrationForm from "./RegistrationForm";
import NavigationBar from "./NavigationBar";
import NavBtn from "./NavBtn";

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
  AccordionOld,
  UnitsCard,
  UnitNav,
  QuillEditorStudent,
  TutorCard,
} from "./UnitPage";

import { Button, CustomNav } from "./CustomForm";
// Form are to be consumed internally hence no need for importation in this file.
import {
  ChapterModal,
  CourseModal,
  LessonModal,
  ResourcesModal,
  UnitModal,
} from "./TutorPage/Modals";
import {
  Accordion,
  SideNavNew,
  TutorAccordion,
  TutorSideNav,
} from "./TutorPage/Accordion";
import {
  QuillEditorTutor,
  TutorCardHome,
  TutorSideBar,
} from "./TutorPage/General";
import { CourseForm, TestForm } from "./TutorPage/Forms";

import Footer from "./Footer";

export {
  LogInButton,
  LogInForm,
  RegistrationButton,
  RegistrationForm,
  NavigationBar,
  NavBtn,
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
  AccordionOld,
  ChapterModal,
  CourseModal,
  LessonModal,
  ResourcesModal,
  UnitModal,
  Accordion,
  SideNavNew,
  UnitsCard,
  UnitNav,
  QuillEditorTutor,
  QuillEditorStudent,
  TutorSideBar,
  TutorAccordion,
  TutorSideNav,
  TutorCardHome,
  LandingSection,
  Footer,
  CourseForm,
  TestForm,
};
