// import AboutMe from "../components/Home/AboutMe";
import MyStory from "../components/About/MyStory";


import { IconContext } from "react-icons";

import { GiTechnoHeart } from "react-icons/gi";
// Components:
import GlitchButton from "../components/GlitchButton";
import Education from "../components/Home/Education";
import FocusWork from "../components/About/FocusWork";
import HeroSection from "../components/About/HeroSection";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>

      {/* <HeroSection />  */}

        <MyStory />

        <div className="my-16 bg-fuchsia-600 px-4 py-8 text-center sm:my-20 sm:px-6 sm:py-10">
          <strong className="text-xl text-black/80 sm:text-2xl">
            "At 14, I wanted to help my dad’s business.
            Today, I build software that helps people at scale."
          </strong>
        </div>

        <Education />
        
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <Link to="/projects">
            <GlitchButton text={"View Projects"} Icon={<GiTechnoHeart />} color={"fuchsia"} />
          </Link>
        </div>

          <h2 className="mx-4 my-8 text-2xl text-cyan-300 sm:mx-6 lg:mx-8"> How I work </h2>
        <FocusWork />
        

    </div>
  )
}
