
import { BiSolidRightArrowSquare } from "react-icons/bi";
import GlitchButton from "../GlitchButton";
import ProjectsComponentCard from "../ProjectsComponentCard";
import ProjectCard from "../ProjectCard";
import React from 'react'

import { FaReact} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
        {/* Projects */}
            <section className="mx-4 my-10 sm:mx-6 lg:mx-8">
        
              <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        
                <div>
                  <small className="font-bold text-[#00F5FF]">
                    PROYECTOS DESTACADOS
                  </small>
                  <h2 className="text-2xl sm:text-3xl">
                    Soluciones que he construido
                  </h2>
                </div>
                <div>
                  
                  <Link to="/projects">
                    <GlitchButton text="Ver todos los proyectos" Icon={<BiSolidRightArrowSquare />} />
                  </Link>
                </div>
              </div>

               <div className="mx-auto flex w-full max-w-5xl justify-center px-0 sm:px-4">
              
                        <div className="w-full">
                          <ProjectCard 
                        title=" BYU-Idaho "
                        description="This is the list of projects I have done for the CS50 course at Harvard University. Each project is designed to apply the concepts learned in the course and demonstrate my skills in computer science and programming."
                        image="https://www.thechurchnews.com/resizer/v2/MI2TD2HD25FTHENHO5BV3WM2VA.jpg?auth=a2f7ac8914fa3d6dace55af97ce04b9474fdcea14f4cc882810a0aa09008a685&focal=0%2C0&width=800&height=450"
                        course="Bachelor of Science in Computer Science - BYU-Idaho"
                        projects={[
                          "Project Detail 1", 
                          "Project Detail 2", 
                          "Project Detail 3"
                        ]}
                      />
                        </div>
              
              
                      </div>
              
                      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 ">
                        
              
                      <div>
                          
                          <ProjectCard 
                        title="Harvard University"
                        description="This is the list of projects I have done for the CS50 course at Harvard University. Each project is designed to apply the concepts learned in the course and demonstrate my skills in computer science and programming."
                        image="https://www.igniteastar.com/wp-content/uploads/2023/09/Capture.jpg"
                        course="CS50 - Introduction to Computer Science"
                        projects={[
                          "Scratch", 
                          "language C:", 
                          "Hello",
                          "Mario",
                          "Cash / Credit",
                          "Scrabble",
                          "Readability",
                          "Caesar / Substitution",
                          "Algorithms with language C:",
                          "Sort",
                          "Plurality / Runoff / Tideman",
                          "Managing Memory with language C:",
                          "Volume",
                          "Filter",
                          "Recover",
                          "Data Structures with language C:",
                          "Inheritance",
                          "Speller",
                          "Excercises with Python Language:",
                          "Hello",
                          "Mario",
                          "DNA",
                          "Excercises with SQL:",
                          "Movies",
                          "FiftyVille",
                          "Introduction to Front-end:",
                          "HomePage",
                          "Excercise with Flask",
                          "Finance",
                          "Final Project with Flask:",
                          "Harvard-blog",
                        ]}
                      />
                      
                      </div>
              
              
                      <div>
                          <ProjectCard 
                        title="Harvard University"
                        description="This is the list of projects I have done for the CS50 course at Harvard University. Each project is designed to apply the concepts learned in the course and demonstrate my skills in computer science and programming."
                        image="https://www.igniteastar.com/wp-content/uploads/2023/09/Capture.jpg"
                        course="CS50 - Web Programming With Python And JavaScript"
                        projects={[
                          "Html & CSS: ", 
                          " Search ", 
                          " Git: ",
                          " Wiki ",
                          " Python: ",
                          " Commarce ",
                          " Django: ",
                          " Mail ",
                          " SQL, Models, and Migrations: ",
                          " Network ",
                          " Javascript: ",
                          " Mail ",
                          " User Interfaces: ",
                          " Animation & Interactivity Excercises ",
                          " Testing, CI/CD: ",
                          " Testing Excercises ",
                          " Scalability and Security: ",
                          " Capstone Preparation ",
                          " Final Project: ",
                          " World News ",
                        ]}
                      />
                        </div>
              
              
              
                      </div>
        
              {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5" > */}
        
        
              {/* <ProjectsComponentCard 
                image="https://images.pexels.com/photos/34579318/pexels-photo-34579318.jpeg" 
                title="Coffe Tracker App" 
                description="Control de gastos en cafe y estimacion de cafeina en sangre." 
                tech1="React" 
                tech2="Firebase" 
                tech3="Chart.js" 
              />
        
               <ProjectsComponentCard 
                image="https://images.pexels.com/photos/34579318/pexels-photo-34579318.jpeg" 
                title="Coffe Tracker App" 
                description="Control de gastos en cafe y estimacion de cafeina en sangre." 
                tech1="React" 
                tech2="Firebase" 
                tech3="Chart.js" 
              />
        
               <ProjectsComponentCard 
                image="https://images.pexels.com/photos/34579318/pexels-photo-34579318.jpeg" 
                title="Coffe Tracker App" 
                description="Control de gastos en cafe y estimacion de cafeina en sangre." 
                tech1="React" 
                tech2="Firebase" 
                tech3="Chart.js" 
              />
        
               <ProjectsComponentCard 
                image="https://images.pexels.com/photos/34579318/pexels-photo-34579318.jpeg" 
                title="Coffe Tracker App" 
                description="Control de gastos en cafe y estimacion de cafeina en sangre." 
                tech1="React" 
                tech2="Firebase" 
                tech3="Chart.js" 
              />
        
               <ProjectsComponentCard 
                image="https://images.pexels.com/photos/34579318/pexels-photo-34579318.jpeg" 
                title="Coffe Tracker App" 
                description="Control de gastos en cafe y estimacion de cafeina en sangre." 
                tech1="React" 
                tech2="Firebase" 
                tech3="Chart.js" 
              /> */}

              {/* </div> */}
        
        
            </section>
    </div>
  )
}
