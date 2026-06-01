import { GiTechnoHeart } from "react-icons/gi";
import { IoMdInformationCircle } from "react-icons/io";
import { RiCodeView } from "react-icons/ri";
import { LuBrainCircuit } from "react-icons/lu";
import { FaRobot } from "react-icons/fa";
import { IconContext } from "react-icons";
import GlitchButton from "../GlitchButton";
import heroImage from "../../images/Hero_Image.png";

import {Link} from "react-router-dom";

export default function HeroSection() {

  return (
    <div>

            <section className="mx-4 my-6 flex flex-col-reverse items-center gap-10 sm:mx-6 lg:mx-8 lg:flex-row lg:justify-between">
        
            <div className="w-full lg:w-1/2">
              <div className="">
              <small className="text-[#00F5FF] font-bold"> FULL-STACK DEVELOPER </small>
              <h1 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl"> SOFTWARE THAT <strong className="text-[#2563EB]">SOLVES.</strong> <br /> CODE THAT <strong className="text-[#8B5CF6]">SCALES.</strong> <br /> IMPACT THAT <strong className="text-[#FF2BD6]">MATTERS.</strong></h1>
              </div>
        
              <div className="mt-4">
                <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                  I build scalable, clean, and efficient web applications with Python, JavaScript, and TypeScript. <br />
                  I specialize in building real solutions and harnessing the power of artificial intelligence.
                </p>
              </div>
        
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
              
              <div>
                <Link to="/projects">
                  <GlitchButton text="View Projects" Icon={<GiTechnoHeart  />} color="cyan" />
                </Link>
              </div>
        
              <div>
                  <Link to="/about">
                    <GlitchButton text="Learn More" Icon={<IoMdInformationCircle />} color="fuchsia" />
                  </Link>
              </div>
              
              </div>
        
              {/* Hero Seccion Icons */}
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
        
                <div className="">
                  <div className="flex justify-center">
                  <IconContext.Provider value={{ size: "2.5em", className: "text-fuchsia-300"}}>
                  <RiCodeView />
                  </IconContext.Provider>
                  </div>
                  <div className="text-center">
                      <small>CLEAN AND SCALABLE CODE </small>
                  </div>
                </div>
        
                <div >
                  <div className="flex justify-center">
                  <IconContext.Provider value={{ size: "2.5em", className: "text-fuchsia-300"}}>
                  <LuBrainCircuit />
                  </IconContext.Provider>
                  </div>
                  <div className="text-center">
                      <small> SMART SOLUTIONS </small>
                  </div>
                </div>
        
                <div>
                  <div className="flex justify-center">
                  <IconContext.Provider value={{ size: "2.5em", className: "text-cyan-300"}}>
                  <FaRobot />
                  </IconContext.Provider>
                  </div>
                  <div className="text-center">
                      <small> AI INTEGRATED INTO REAL PRODUCTS </small>
                  </div>
                </div>
        
              </div>
              </div>
        
              {/* Hero Image */}
              <div className="w-full lg:w-[55%] lg:max-w-3xl">
        
                <div className="relative mx-auto w-full max-w-140 md:max-w-4xl lg:max-w-5xl overflow-hidden">
                  <img 
                src={heroImage} 
                alt="Hero_Image" 
                className="h-auto w-full object-cover object-center"  
                />
                </div>
              </div>
        
            </section>
    </div>
  )
}
