import { GiTechnoHeart } from "react-icons/gi";
import { IoMdInformationCircle } from "react-icons/io";
import { RiCodeView } from "react-icons/ri";
import { LuBrainCircuit } from "react-icons/lu";
import { FaRobot } from "react-icons/fa";
import { IconContext } from "react-icons";
import GlitchButton from "../GlitchButton";
import { FaDownload } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { RiFocus2Line } from "react-icons/ri";
import { MdEventAvailable } from "react-icons/md";
import IconsComponentCard from "../IconsComponentCard";
import Image from "../../images/aboutMe.png";

export default function AboutMe() {
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
      {/* About me little section */}
      <section className="mx-4 flex flex-col gap-8 pt-5 pb-6 sm:mx-6 xl:mx-8 xl:flex-row xl:items-start">
        {/* About Me - Text */}
        <div className="w-full xl:w-1/3">
          <small className="text-[#00F5FF] font-bold"> ABOUT ME </small>
          <h2 className="text-2xl sm:text-3xl">Developer with Purpose</h2>
          <div className="">
            <p className="mt-3 leading-relaxed text-slate-200">
              I am a software developer passionate about creating applications
              that combine technology, design, and logic to solve real
              problems. My strengths are Python, JavaScript, and TypeScript
              for modern and dynamic interfaces. I also integrate AI to take
              projects to the next level.
            </p>
          </div>

          <div className="pt-3 cursor-pointer" onClick={handleCvDownload}>
            <GlitchButton
              text="Download My CV"
              Icon={<FaDownload />}
              color="fuchsia"
            />
          </div>
        </div>

        {/* About Me - Image  */}
        <div className="w-full xl:w-1/3">
          <div className=" ">
            <img
              src={Image}
              alt="About me Image"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>

        {/* About me Icons */}
        <div className="w-full xl:w-1/3">
          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
            <div className="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)]">
              <IconsComponentCard
                icon={
                  <IconContext.Provider value={{ size: "2em", color: "cyan" }}>
                    <IoLocationSharp />
                  </IconContext.Provider>
                }
                title="Location"
                description="Mexico"
              />
            </div>

            <div className="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)]">
              <IconsComponentCard
                icon={
                  <IconContext.Provider value={{ size: "2em", color: "cyan" }}>
                    <FaBook />
                  </IconContext.Provider>
                }
                title="Learning"
                description="Constant and self-taught"
              />
            </div>

            <div className="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)]">
              <IconsComponentCard
                icon={
                  <IconContext.Provider value={{ size: "2em", color: "cyan" }}>
                    <GiGraduateCap />
                  </IconContext.Provider>
                }
                title="Education"
                description="BYU-Idaho - Computer Science "
              />
            </div>

            <div className="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)]">
              <IconsComponentCard
                icon={
                  <IconContext.Provider value={{ size: "2em", color: "cyan" }}>
                    <RiFocus2Line />
                  </IconContext.Provider>
                }
                title="Focus"
                description="Python, JavaScript, TypeScript + AI"
              />
            </div>

            <div className="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)]">
              <IconsComponentCard
                icon={
                  <IconContext.Provider value={{ size: "2em", color: "cyan" }}>
                    <MdEventAvailable />
                  </IconContext.Provider>
                }
                title="Availability"
                description=" Open to new opportunities "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
