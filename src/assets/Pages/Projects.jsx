import technologies_Image from "../images/technologies.png";
import Education from "../components/Home/Education";
import BYU_logo from "../images/BYU_logo.png";
import harvard_logo from "../images/Harvard-Emblem.png";
import Boot_dev from "../images/bot_logo.png";
import Technologies from "../components/Home/Technologies";

// icons 
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { BsTypescript } from "react-icons/bs";
import { FaReact} from "react-icons/fa";
import { IconContext } from "react-icons";

// components
import ProjectCard from "../components/ProjectCard";
import ColorTabs from "../components/Projects/ColorTabs";

export default function Projects() {
  const technologies = ["Python", "JavaScript", "TypeScript", "React"];

  const technologyInfo = {
    "Python": { description: "A versatile and easy-to-learn programming language used in web development, data science, artificial intelligence, automation, and more.", icon: <IoLogoPython /> },
    "JavaScript": { description: "An essential programming language for web development, used to create interactivity in websites and web applications.", icon: <IoLogoJavascript /> },
    "TypeScript": { description: "A superset of JavaScript that adds static typing, improving the scalability and maintainability of large projects.", icon: <BsTypescript /> },
    "React": { description: "A JavaScript library for building interactive and reusable user interfaces, widely used in frontend development.", icon: <FaReact /> },
  }
  const TechInPorfolio = ["Python", "JavaScript", "TypeScript", "React", "Django", "Flask", "C++", "C#" ];
  return (
    <>

        {/* Hero section */}
      <section className="mx-4 my-8 grid grid-cols-1 items-center gap-8 sm:mx-6 lg:mx-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">
            Real solutions, code that creates <br />
            <strong className="text-cyan-300">impact</strong>.
          </h2>

          <p>
            Every project I build is designed to solve real problems,
            apply best practices, and keep learning along the way.
          </p>
        </div>

        <div>
          <img src={technologies_Image} alt="Technologies" />
        </div>
      </section>

      {/* Projects */}
      <section>

        <div className="mx-4 my-8 flex justify-center sm:mx-6 lg:mx-8">

          <ColorTabs className="w-full " />

        </div>





        <h2 className="mx-4 my-8 text-2xl font-bold text-cyan-300 sm:mx-6 sm:text-3xl lg:mx-8 ">
          Technologies I'm Proficient with: 
        </h2>

        <div className="mx-4 grid grid-cols-1 gap-5 sm:mx-6 sm:grid-cols-2 xl:mx-8 xl:grid-cols-4">
        
        {technologies.map((tech) => (
          <div key={tech} className="border border-fuchsia-500/25 bg-[#080D1F] p-5 rounded-xl transition-all duration-300 hover:border-fuchsia-400/70 hover:bg-fuchsia-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)]">
            
            <IconContext.Provider value={{ size: "5em", className: "text-cyan-500 pb-2" }}>
              {technologyInfo[tech].icon}
            </IconContext.Provider>

            <h3 className="flex items-center gap-2"> {tech}</h3>
            <p>{technologyInfo[tech].description}</p>
          </div>
        ))}

        </div>

      </section>

      {/* Education */}
      <section>
        {/* <Education /> */}

        {/* Beginning of the Education cards  */}
        <h2 className="mx-4 my-8 text-2xl font-bold text-cyan-300 sm:mx-6 lg:mx-8">My Education</h2>

        <div className="mx-4 grid grid-cols-1 gap-6 sm:mx-6 xl:mx-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="border border-cyan-500/25 bg-[#080D1F] p-5 rounded-xl transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)] ">
            <div className=" flex justify-center ">
              <div className=" flex justify-center mt-1 h-24 w-50 shrink-0 self-center sm:mt-5 sm:h-32 sm:w-32 lg:h-50 lg:w-70">
                <img
                  src={BYU_logo}
                  alt="BYU Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div>
              <h4>Brigham Young University - Idaho</h4>
              <strong className="text-cyan-500">
                Bachelor of Science in Computer Science
              </strong>
              <br />
              <small>Rexburg, Idaho, USA</small>
              <br />
              <small className="text-fuchsia-500 font-bold">In progress</small>

              <p>
                Solid training in data structures, algorithms, software
                development, databases, systems, artificial intelligence,
                and computer science.
              </p>

              <div>
                <small>What I'm learning:</small>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
                  <div className="">
                    <small className="border border-cyan-600 p-3 rounded-md text-center ">
                      Data Structures
                    </small>
                  </div>

                  <div>
                    <small className="border border-cyan-600 p-3 rounded-md text-center">
                      Algorithms
                    </small>
                  </div>

                  <div>
                    <small className="border border-cyan-600 p-3 rounded-md text-center">
                      Software Development
                    </small>
                  </div>

                  <div>
                    <small className="border border-cyan-600 p-3 rounded-md text-center">
                      Web Development
                    </small>
                  </div>

                  <div>
                    <small className="border border-cyan-600 p-3 rounded-md text-center">
                      Databases
                    </small>
                  </div>

                  <div>
                    <small className="border border-cyan-600 p-3 rounded-md text-center">
                      etc.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* certificaciones */}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-fuchsia-300">
              Featured Certifications
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
              <div className="border border-fuchsia-500/25 bg-[#080D1F] p-5 rounded-xl transition-all duration-300 hover:border-fuchsia-400/70 hover:bg-fuchsia-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)]">
                <div className="mt-1 h-24 w-50 shrink-0 self-center sm:mt-5 sm:h-32 sm:w-50 lg:h-36 lg:w-70 mb-5">
                  <img src={harvard_logo} alt="Harvard Logo" />
                </div>
                <div>
                  <h2 className="text-1xl font-bold mb-2">
                    CS50's Introduction to Computer Science - Harvard University
                  </h2>
                  <p>
                    Foundations in computer science and problem solving.
                  </p>
                  <small className="text-cyan-300 font-bold">2022</small>
                </div>
              </div>

              <div className="border border-fuchsia-500/25 bg-[#080D1F] p-5 rounded-xl transition-all duration-300 hover:border-fuchsia-400/70 hover:bg-fuchsia-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)]">
                <div className="mt-1 h-24 w-50 shrink-0 self-center sm:mt-5 sm:h-32 sm:w-50 lg:h-36 lg:w-70 mb-5">
                  <img src={harvard_logo} alt="Harvard Logo" />
                </div>
                <div>
                  <h2 className="text-1xl font-bold mb-2">
                    CS50's Web Programming with Python and JavaScript - Harvard
                    University
                  </h2>
                  <p>
                    Full-stack web development with Python, JavaScript, HTML, CSS,
                    Flask, Django, SQL, and more.
                  </p>
                  <small className="text-cyan-300 font-bold">2023</small>
                </div>
              </div>

              <div className="border border-fuchsia-500/25 bg-[#080D1F] p-5 rounded-xl transition-all duration-300 hover:border-fuchsia-400/70 hover:bg-fuchsia-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)]">
                <div className="mt-1 h-24 w-50 shrink-0 self-center sm:mt-5 sm:h-32 sm:w-50 lg:h-36 lg:w-60 mb-5">
                  <img src={Boot_dev} alt="Boot.dev Logo" />
                </div>
                <div>
                  <h2 className="text-1xl font-bold mb-2">
                    AI Agent Development with Python - Boot.dev
                  </h2>
                  <p>
                    AI agent development with Python for applications and
                    real-world tasks, using large language models (LLMs) and
                    other AI technologies.
                  </p>
                  <small className="text-cyan-300 font-bold">2025</small>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section>
        {/* Technology stack */}
        <Technologies />
        </section>
    </>
  );
}
