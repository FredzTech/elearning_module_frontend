import React from "react";
import { NavigationBar, HomePageGrid } from "../components";
import { Complete } from "../components";
import { useState } from "react";
const HomePage = () => {
  let [view, setView] = useState(true);

  const showModal = () => {
    setView(true);
  };

  const hideModal = () => {
    setView(false);
  };

  // Used to treat event bubbling.
  const handleClose = (e) => {
    if (e.target.id === "container") {
      hideModal();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <HomePageGrid />
      <Complete view={view} hideModal={hideModal} handleClose={handleClose} />
    </div>
  );
};

export default HomePage;
