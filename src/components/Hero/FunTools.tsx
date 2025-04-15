"use client";

import { useState } from "react";
import Spinning3DObject from "./3dVectors";
import styles from "./SelectedWork.module.scss";
import GroqPage from "./GroqPage";
const components = [
  () => <div className="w-full h-full"><Spinning3DObject /></div>,
  () => <div className="flex items-center justify-center  text-white text-2xl w-full h-full"><GroqPage></GroqPage></div>
];

const componentTitles = [
  () => <h1 className="text-2xl">interactive linear algebra vector visualization with 3js</h1>,
  () => <h1 className="text-2xl">a chatgpt w-rapper for synonyms</h1>
];


export default function ScrollableShowcase() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? components.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % components.length);
  };

  const ActiveComponent = components[index];
  const ActiveTitle = componentTitles[index];

  return (
    <div className={styles.funtools}>
    <div className={styles.showcaseContainer}>
    <div className="flex flex-col h-full justify-end items-start mt-[1vh]">
  <div className="flex row mb-[1vh] justify-center items-baseline">
    <h1 className="text-4xl font-thin mr-[4vw]">Fun tool:</h1>
    <ActiveTitle />
  </div>
</div>
      <div className="relative w-full h-[80vh] border border-gray-700 rounded-3xl shadow-lg overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition"
        >
          ←
        </button>

        <div className="h-full w-full">
          <ActiveComponent />
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition"
        >
          →
        </button>
      </div>
      <ActiveTitle />
    </div>
    </div>
  );
}