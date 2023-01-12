import React from "react";
import { ChapterCard, TutorCard } from "../components";
const DraftPage = () => {
  return (
    <div className="w-full relative h-full flex flex-col border-2 border-red-500">
      <header className="bg-primary h-[300px] relative flex items-center justify-center">
        <h1 className="text-white font-bold text-center text-4xl uppercase">
          DISCRETE MATHEMATICS
        </h1>
      </header>
      <section className="relative w-full h-full bg-secondary">
        {/* When this is absolute the parent collapses. */}
        <div className="relative top-[-50px] flex gap-10 w-full h-full px-20 ">
          <main className="relative main-content w-2/3   flex flex-col gap-10 items-center justify-start">
            <section>
              <ChapterCard
                number={"01"}
                heading={"Intro to discrete mathematics"}
                summary={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem nam ipsum doloribus nihil pariatur fugit id nemo doloremque quisquam corrupti, est non veritatis, ullam impedit obcaecati dolorum placeat iure."
                }
              />

              <ChapterCard
                number={"02"}
                heading={"Intro to discrete mathematics"}
                summary={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem nam ipsum doloribus nihil pariatur fugit id nemo doloremque quisquam corrupti, est non veritatis, ullam impedit obcaecati dolorum placeat iure."
                }
              />
              <ChapterCard
                number={"03"}
                heading={"Intro to discrete mathematics"}
                summary={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem nam ipsum doloribus nihil pariatur fugit id nemo doloremque quisquam corrupti, est non veritatis, ullam impedit obcaecati dolorum placeat iure."
                }
              />
              <ChapterCard
                number={"04"}
                heading={"Intro to discrete mathematics"}
                summary={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem nam ipsum doloribus nihil pariatur fugit id nemo doloremque quisquam corrupti, est non veritatis, ullam impedit obcaecati dolorum placeat iure."
                }
              />
            </section>
          </main>
          <aside className="relative  w-1/3 h-full ">
            <TutorCard />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default DraftPage;
