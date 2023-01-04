import { useState } from "react";
import "./App.css";
import { NavigationBar, HomePageCard } from "./components";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center gap-5">
      <header className="w-full">
        <NavigationBar />
      </header>
      <main className="grid grid-cols-5 gap-7">
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
        <article>
          <HomePageCard />
        </article>
      </main>
    </div>
  );
}

export default App;
