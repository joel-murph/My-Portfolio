import React from "react";
import ResumeImage from "../assets/resume.jpg";
import resume from "../assets/Joel Murphy Resume-1.pdf"

export default function Resume() {
  return (
    <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className=" md:w-1/2 flex justify-center  md:justify-end py-5">
        <img className="w-[300px] rounded-2xl" src={ResumeImage} alt="About" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white border-b-4 mb-5 font-bold border-primary w-[130px]">Resume</h1>
          <p className="text-white pb-5">You can View my Resume <a className="btn" href={resume} download="Resume.pdf">Download</a></p>
        </div>
      </div>
    </section>
  );
}
