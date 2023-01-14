import React, { useState } from "react";
import { TutorSideBar, TutorCardHome, ChapterModal } from "../components";

const TutorPage = () => {
  const [chapterForm, setChapterForm] = useState(true);

  function showModal() {
    setChapterForm(true);
  }
  function hideModal() {
    setChapterForm(false);
  }
  function handleClose(e) {
    if (e.target.id == "container") {
      hideModal();
    }
  }
  return (
    <main className="flex flex-row w-full h-screen">
      <article className="h-full flex  flex-col rounded-lg w-1/4 px-2 py-2 ">
        <TutorSideBar />
      </article>
      <article className="h-full overflow-y-scroll debug w-3/4 p-10 grid grid-cols-3 gap-5  ">
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />

        {/* Action Buttons */}
        <button
          className="button w-48 h-16"
          onClick={() => {
            showModal();
          }}
        >
          View Chapter Form
        </button>

        <ChapterModal
          chapterForm={chapterForm}
          hideModal={hideModal}
          handleClose={handleClose}
        />
      </article>

      {/* Our Modals need to be on standby. */}
      {/* <article className="modals">
        <TestModal />
        <CourseModal />
        <ChapterModal />
        <LessonModal />
        <ResourcesModal />
        <UnitModal />
      </article> */}
    </main>
  );
};

export default TutorPage;
