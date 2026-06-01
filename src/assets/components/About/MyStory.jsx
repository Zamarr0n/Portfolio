import { TbTargetArrow } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdRocketLaunch } from "react-icons/md";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

// components 
import GlitchButton from "../GlitchButton";
import IconsComponentCard from "../IconsComponentCard";

// image:
import AboutMeDirection from "../../images/AboutMeDirection.png";

export default function MyStory() {
  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div>

        <section className="mx-4 flex flex-col gap-8 pt-5 pb-6 sm:mx-6 xl:mx-8 xl:flex-row xl:items-start">
                <div className=" w-full xl:w-1/3 ">
                  <h2 className="text-[#00F5FF]  text-3xl "> My Story </h2>
                  
                  <p className="mb-5">
                    My journey into software development started when I was 14 years old. 
                    My dad needed software for his business, and I became curious about how technology could solve real problems. 
                    That curiosity became the starting point of everything.
                  </p>
                  
                  <p className="mb-5">
                    I began learning web development through HTML, CSS, and JavaScript, building websites and exploring how digital experiences were created. 
                    Over time, I discovered Python and became fascinated by artificial intelligence and process automation, 
                    which opened a completely new perspective on what software could achieve.
                  </p>
        
                  <p className="mb-5">
                    At 18, I decided to pursue a career in Software Development, 
                    where I strengthened my knowledge in JavaScript and Python while also learning technologies like C#. 
                    More importantly, I found myself surrounded by teammates and developers from around the world, collaborating, 
                    building ideas, and growing deeper into the tech industry.
                  </p>
        
                  <p className="mb-5">
                    Today, as I approach the completion of my Computer Science journey, I continue focusing on creating impactful digital solutions, 
                    combining modern web development with AI integration, problem solving, and continuous learning.
                  </p>
                  <div className="cursor-pointer" onClick={handleCvDownload}>
                    <GlitchButton
                      text="Download my CV"
                      Icon={<FaDownload />}
                      color="fuchsia"
                    />
                  </div>
                </div>
                
                <div className="w-full xl:w-1/3">
                  <div>
                    <img src={AboutMeDirection} alt="About Me Direction" />
                  </div>
                </div>
        
                <div className="w-full xl:w-1/3">
        
                <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                  
                  <div className="group flex items-center gap-4 rounded-xl border border-fuchsia-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-fuchsia-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)]">
                  <IconsComponentCard icon={
                      <IconContext.Provider value={{ size: "2em", color: "fuchsia" }}>
                      <TbTargetArrow />
                      </IconContext.Provider>
                      } title="Purpose" description="Every line of code has a purpose" />
                  </div>
                  
                  <div className="group flex items-center gap-4 rounded-xl border border-fuchsia-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-fuchsia-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)]">
                    <IconsComponentCard icon={
                      <IconContext.Provider value={{ size: "2em", color: "fuchsia" }}>
                      <RiTeamFill />
                      </IconContext.Provider>
                      } title="Collaboration" description="I believe in teamwork and sharing knowledge" color="fuchsia"  />
                  </div>
                    
                  
                  <div className="group flex items-center gap-4 rounded-xl border border-fuchsia-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-fuchsia-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)]" >
                    <IconsComponentCard icon={
                      <IconContext.Provider value={{ size: "2em", color: "fuchsia" }}>
                      <IoDiamond />
                      </IconContext.Provider>
                      } title="Quality" description="I write clean, clear, and maintainable code "  />
                  </div>
                  
                <div className="group flex items-center gap-4 rounded-xl border border-fuchsia-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-fuchsia-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)]">
                    <IconsComponentCard icon={
                      <IconContext.Provider value={{ size: "2em", color: "fuchsia" }}>
                      <IoShieldCheckmark />
                      </IconContext.Provider>
                      } title="Integrity" description="I build with ethics, responsibility, and commitment"  />
                </div>
                  
                  <div className="group flex items-center gap-4 rounded-xl border border-fuchsia-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-fuchsia-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)] ">
                    <IconsComponentCard icon={
                      <IconContext.Provider value={{ size: "2em", color: "fuchsia" }}>
                      <MdRocketLaunch />
                      </IconContext.Provider>
                      } title="Continuous Improvement" description="I learn every day and apply what I learn"  />                     
                  </div>
                    
                  <div className="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)] ">
                    {/* color="cyan" */}
                    <IconsComponentCard icon={
                      <IconContext.Provider value={{ size: "3em", color: "cyan" }}>
                      <MdOutlineMilitaryTech />
                      </IconContext.Provider>
                      } title="Innovation" description="I explore new technologies, such as AI, to create better solutions"   />
                  </div>
                    
                  
                </div>
                </div>
        
              </section>

    </div>
  )
}
