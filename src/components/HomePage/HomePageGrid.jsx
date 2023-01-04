import React from "react";
import { HomePageCard } from "../../components";
import cardImage from "../../assets/course-display.png";

const HomePageGrid = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.`;

  return (
    <main className="grid grid-cols-5 gap-7">
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />{" "}
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />{" "}
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />{" "}
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />{" "}
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />{" "}
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />{" "}
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />{" "}
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />{" "}
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
      <HomePageCard
        text={text}
        heading="discrete mathematics"
        src={cardImage}
      />
    </main>
  );
};

export default HomePageGrid;
