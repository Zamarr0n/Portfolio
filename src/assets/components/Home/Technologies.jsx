import { BiLogoFirebase, BiLogoFlask, BiLogoPostgresql } from "react-icons/bi";
import { BsTypescript } from "react-icons/bs";
import { DiDjango } from "react-icons/di";
import { FaGithubSquare, FaNodeJs, FaReact, FaCode } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IconContext } from "react-icons";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { SiMysql, SiPostman, SiSqlite, SiSupabase } from "react-icons/si";
import { SlDocs } from "react-icons/sl";
import { TbTestPipeOff } from "react-icons/tb";
import {VscVscode} from "react-icons/vsc";

export default function Technologies() {
  return (
    <div>

        {/* Technologies & AI */}
            <section className="mx-4 my-8 sm:mx-6 lg:mx-8">
              
        
              <small className=" text-[#00F5FF] font-bold  ">
                TECHNOLOGIES & AI
              </small>
              <h2 className="text-2xl sm:text-3xl">
                Technologies I use to build modern solutions
              </h2>
        
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        
                <div className="rounded-xl border border-cyan-500/20 bg-[#080D1F] p-4">
                <h3 className="text-center">
                  Languages
                </h3>
                <div className="flex justify-between gap-5">
        
                  <div>
                    <div className="flex justify-center">
                      <IconContext.Provider value={{ size: "2em"}}>
                      <IoLogoPython />
                    </IconContext.Provider>
                    </div>
                    <p className="text-center"> Python </p>
                  </div>
        
                  <div>
                    <div className="flex justify-center">
                    <IconContext.Provider value={{ size: "2em"}}>
                      <IoLogoJavascript />
                    </IconContext.Provider>
                    </div>
                    <p className="text-center">JavaScript</p>
                  </div>
        
                  <div>
                    <div className="flex justify-center">
                    <IconContext.Provider value={{ size: "2em"}}>
                      <BsTypescript />
                    </IconContext.Provider>
        
                    </div>
                    <p className="text-center"> TypeScript </p>
                  </div>
        
                </div>
                </div>
        
                <div className="rounded-xl border border-cyan-500/20 bg-[#080D1F] p-4">
        
                <h3 className="text-center"> Backend </h3>
                <div className="flex justify-between gap-5">
                  
                <div>
                    <div className="flex justify-center">
                    <IconContext.Provider value={{ size: "2em"}}>
                      <DiDjango />
                    </IconContext.Provider>
                  </div>
                  <p className="text-center"> Django </p>
                </div>
        
                <div>
                  <div className="flex justify-center">
                    <IconContext.Provider value={{ size: "2em"}}>
                      <FaNodeJs />
                    </IconContext.Provider>
                  </div>
                  <p className="text-center"> Node.js </p>
                </div>
        
                <div>
                  <div className="flex justify-center">
                    <IconContext.Provider value={{ size: "2em"}}>
                      <BiLogoFlask />
                    </IconContext.Provider>
                  </div>
                  <p className="text-center"> Flask </p>
                </div>
        
                </div>
        
                </div>
        
                <div className="rounded-xl border border-cyan-500/20 bg-[#080D1F] p-4">
                  <h3 className="text-center">
                    Frontend
                  </h3>
                  <div className="">
                    <div className="flex justify-center">
                      <IconContext.Provider value={{ size: "2em"}}>
                        <FaReact />
                      </IconContext.Provider>
                    </div>
                    <p className="text-center"> React </p>
                  </div>
                </div>
        
        
                <div className="rounded-xl border border-cyan-500/20 bg-[#080D1F] p-4">
        
                <h3 className="text-center">Databases</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    
                  <div className="">
                    <div className="flex justify-center">
                      <IconContext.Provider value={{ size: "2em"}}>
                        <SiMysql />
                      </IconContext.Provider>
                    </div>
                    <p className="text-center"> MySQL</p>
                  </div>
        
                  <div className="">
                    <div className="flex justify-center">
                      <IconContext.Provider value={{ size: "2em"}}>
                        <BiLogoPostgresql />
                      </IconContext.Provider>
                    </div>
                    <p className="text-center"> PostgreSQL</p>
                  </div>
        
                  <div className="">
                    <div className="flex justify-center">
                      <IconContext.Provider value={{ size: "2em"}}>
                        <SiSqlite />
                      </IconContext.Provider>
                    </div>
                    <p className="text-center"> SQLite</p>
                  </div>
        
                  <div className="">
                    <div className="flex justify-center">
                      <IconContext.Provider value={{ size: "2em"}}>
                        <BiLogoFirebase />
                      </IconContext.Provider>
                    </div>
                    <p className="text-center">
                      Firebase
                    </p>
                  </div>
                </div>
                <div className="">
                    <div className="flex justify-center">
                      <IconContext.Provider value={{ size: "2em"}}>
                        <SiSupabase />
                      </IconContext.Provider>
                    </div>
                    <p className="text-center"> SupaBase </p>
                  </div>
        
                </div>
        
                {/* Integracion de IA */}
                <div className="rounded-xl border border-cyan-500/20 bg-[#080D1F] p-4">
                  <div className="flex justify-center">
                    <IconContext.Provider value={{ size: "4em", color:"cyan"}}>
                      <LuBrainCircuit />
                    </IconContext.Provider>
                  </div>
                  <h3 className=" text-[#00F5FF] font-bold text-center ">
                    AI Integration
                  </h3>
                  <div>
                    <ul>
                      <li>OpenAI API</li>
                      <li>AI Agents</li>
                      <li>Automation (Implementing AI)</li>
                      <li>Data analysis</li>
                      <li>LangChain</li>
                    </ul>
                  </div>
                </div>
        
                {/* Herramientas */}
                <div className="rounded-xl border border-cyan-500/20 bg-[#080D1F] p-4 ">
                  <h3 className="text-center"> Tools </h3>
        
                  <div className="mx-auto mt-3 flex w-fit items-center justify-center gap-5">
                    <div>
                      <IconContext.Provider value={{ size: "1.5em"}}>
                        <FaGithubSquare />
                      </IconContext.Provider>
                    </div>
                    <p> GitHub / Git </p>
                  </div>
        
                  <div className="mx-auto mt-2 flex w-fit items-center justify-center gap-5">
                    <div>
                      <IconContext.Provider value={{ size: "1.5em"}}>
                        <VscVscode />
                      </IconContext.Provider>
                    </div>
                    <p>VSCode</p>
                  </div>
        
                  <div className="mx-auto mt-2 flex w-fit items-center justify-center gap-5">
                    <div>
                      <IconContext.Provider value={{ size: "1.5em"}}>
                      <GiArtificialIntelligence />
                      </IconContext.Provider>
                    </div>
                    <p> AI Agents </p>
                  </div>
        
                  <div className="mx-auto mt-2 flex w-fit items-center justify-center gap-5">
                    <div>
                      <IconContext.Provider value={{ size: "1.5em"}}>
                        <SiPostman />
                      </IconContext.Provider>
                    </div>
                    <p> Postman </p>
                  </div>
                    
                  </div>
        
                {/* PRACTICAS */}
                <div className="rounded-xl border border-cyan-500/20 bg-[#080D1F] p-4">
        
                  <h3 className="text-center"> Practices </h3>
        
                  <div className="mt-3">
                    <ul className="space-y-2">
                      <li className="mx-auto flex w-fit items-center justify-center gap-5">
                        <div>
                          <IconContext.Provider value={{ size: "1.5em"}}>
                            <FaCode/>
                          </IconContext.Provider>
                        </div>
                        <p>
                          Clean Code
                        </p>
                      </li>
        
                      <li className="mx-auto flex w-fit items-center justify-center gap-5">
                        <div>
                          <IconContext.Provider value={{ size: "1.5em"}}>
                            <TbTestPipeOff />
                          </IconContext.Provider>
                        </div>
                        <p>
                          Testing
                        </p>
                      </li>
        
                      <li className="mx-auto flex w-fit items-center justify-center gap-5">
                        <div>
                          <IconContext.Provider value={{ size: "1.5em"}}>
                            <FaGithubSquare />
                          </IconContext.Provider>
                        </div>
                        <p>
                          CI/CD - GitHub
                        </p>
                      </li>
        
                      <li className="mx-auto flex w-fit items-center justify-center gap-5">
                        <div>
                          <IconContext.Provider value={{ size: "1.5em"}}>
                            <SlDocs />
                          </IconContext.Provider>
                        </div>
                        <p>
                          Documentation
                        </p>
                      </li>
        
                    </ul>
                  </div>
        
                </div>  
        
              </div>
        
            </section>

    </div>
  )
}
