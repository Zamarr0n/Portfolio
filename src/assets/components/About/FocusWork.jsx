import IconsComponentCard from "../../components/IconsComponentCard";

import { IconContext } from "react-icons";
// Iconos
import { BsSearch } from "react-icons/bs";
import { FaFileCode } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { BiCloudUpload } from "react-icons/bi";
import { GiTechnoHeart } from "react-icons/gi";

// Components:
import GlitchButton from "../../components/GlitchButton";

export default function FocusWork() {
  return (
    <div>

         <div className="mx-4 my-10 grid grid-cols-1 gap-5 sm:mx-6 sm:grid-cols-2 xl:mx-8 xl:grid-cols-3 2xl:grid-cols-5">
                  
                  <div className="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)] ">
                    <IconsComponentCard 
                icon={
                <IconContext.Provider value={{ size: "4em", color: "cyan"}}>
                  <BsSearch />
                </IconContext.Provider>
              }
                title={"01.- Understand"}
                description={"I analyze the problem, needs, and goals "}
                />
                  </div>
        
                  <div className="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)] ">
                    <IconsComponentCard 
                icon={
                <IconContext.Provider value={{ size: "4em", color: "cyan"}}>
                  <FaFileCode />
                </IconContext.Provider>
              }
                title={"02.- Plan"}
                description={"I design the architecture and the best approach "}
                />
                  </div>
        
                  <div className="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)] "  >
                    <IconsComponentCard 
                icon={
                <IconContext.Provider value={{ size: "4em", color: "cyan"}}>
                  <FaLaptopCode />
                </IconContext.Provider>
              }
                title={"03.- Build"}
                description={"I build efficient and scalable solutions "}
                />
                  </div>
        
                  <div className="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)] "  >
                    <IconsComponentCard 
                icon={
                <IconContext.Provider value={{ size: "4em", color: "cyan"}}>
                  <GiChemicalDrop />
                </IconContext.Provider>
              }
                title={"04.- Test"}
                description={"I test, optimize, and ensure quality "}
                />
                  </div>
        
                  <div className="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)] ">
                    <IconsComponentCard 
                icon={
                <IconContext.Provider value={{ size: "4em", color: "cyan"}}>
                  <BiCloudUpload />
                </IconContext.Provider>
              
              }
                title={"05.- Deliver"}
                description={"I deploy and support the product to create impact "}
                />
                  </div>
                  
        
                </div>

    </div>
  )
}
