import React from "react";
import WebsiteImage from "../assets/games Ecommerce (1).jpeg";
// import WebsiteImage2 from "../assets/food-ecommerce.jpg";
import WebsiteImage3 from "../assets/games Wiki.jpeg";
export default function Projects() {
  const config = {
    projects: [
      {
        image: WebsiteImage, // Use the imported image directly
        description:
          "A Mini Games-Ecommerce Website built with React JS and API with all Functionality",
        link: "https://melodic-pothos-803df2.netlify.app",
      },
      // {
      //   image: WebsiteImage2, // Use the imported image directly
      //   description: "A Register and Login page with Javascript Authentication",
      // },
      {
        image: WebsiteImage3, // Use the imported image directly
        description:
          "A Games info Website using Html, Css , Bootstrap (Responsive)",
        link: "https://gamezwiki.netlify.app/",
      },
    ],
  };

  return (
    <section
      id="project"
      className="flex flex-col py-20 px-5 justify-center bg-primary"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white border-b-4 mb-5 font-bold border-primary w-[140px]">
            Projects
          </h1>
          <p className="text-white">
            These are some of my Projects. They are built using Front-End Technologies. Check them out.
          </p>
        </div>
      </div>
      <div className="w-full btn-hover ">
        <div className="flex flex-col md:flex-row px-10 gap-5 justify-evenly">
          {config.projects.map((project, index) => (
            <a rel="noreferrer" target="_blank" href={project.link}>
              <div key={index} className="relative">
                <img
                  className="rounded-2xl h-[200px] w-[400px] box-shadow  "
                  src={project.image}
                  alt={project.description}
                />
                <div className="project-description">
                  <p className="text-center px-5 py-5 text-white">
                    {project.description}
                  </p>
                  <div className="flex justify-center">
                    <a
                      rel="noreferrer"
                      className="btn-1 text-white"
                      target="_blank"
                      href={project.link}
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
