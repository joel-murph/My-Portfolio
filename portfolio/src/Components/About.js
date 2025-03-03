import React from "react";
import AboutImage from "../assets/about.png";

export default function About() {
  const config = {
    line1:
      "Hi, Im a Web Developer.I built beautiful responsive websites with React js.",
    line2:
      "Im Proficient in Frontend Technologies like HTML, Css3, Bootstrap, TailWindcss, Javascript, React js and Backend in Python, SQL.",
  };
  return (
    <section id="about" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className=" md:w-1/2 py-5">
        <img src={AboutImage} alt="About" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl color-1 border-b-4 mb-5 font-bold border-color-1 w-[170px]">
            About Me
          </h1>
          <p className="color-1 text-xl pb-5">{config.line1}</p>
          <p className="color-1 text-xl pb-5">{config.line2}</p>
        </div>
      </div>
    </section>
  );
}
