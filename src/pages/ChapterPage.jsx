import React from "react";
import { ChapterCard, TutorCard } from "../components";
const ChapterPage = () => {
  return (
    <div className="w-full relative h-full flex flex-col ">
      <header className="bg-slate-400 h-[370px] relative flex items-center justify-center">
        <h1 className="text-white font-bold text-center text-4xl uppercase">
          DISCRETE MATHEMATICS
        </h1>
      </header>
      <section className="relative w-full h-full bg-secondary">
        {/* When this is absolute the parent collapses. */}
        <div className="relative top-[-70px] flex gap-10 w-full h-full px-20 ">
          <main className="relative main-content w-2/3   flex flex-col gap-10 items-center justify-start">
            <ChapterCard
              number={"01"}
              heading={"Intro to discrete mathematics"}
              summary={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem nam ipsum doloribus nihil pariatur fugi"
              }
            />

            <ChapterCard
              number={"02"}
              heading={"Intro to discrete mathematics"}
              summary={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem nam ipsum doloribus nihil pariatur fugi"
              }
            />
            <ChapterCard
              number={"03"}
              heading={"Intro to discrete mathematics"}
              summary={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem nam ipsum doloribus nihil pariatur fugi"
              }
            />
            <ChapterCard
              number={"04"}
              heading={"Intro to discrete mathematics"}
              summary={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem nam ipsum doloribus nihil pariatur fugi"
              }
            />
          </main>
          <aside className="relative  w-[320px] h-full ">
            <TutorCard />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ChapterPage;