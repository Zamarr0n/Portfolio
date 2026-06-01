import React from 'react'
import GlitchButton from "../../components/GlitchButton";
import { GiTechnoHeart } from "react-icons/gi";

export default function HeroSection() {
  return (
    <div>
          <section className="mx-4 my-6 grid grid-cols-1 items-center gap-8 sm:mx-6 lg:mx-8 lg:grid-cols-2 lg:gap-10">
        
                <div className="order-2 lg:order-1">
                  <img src="https://images.pexels.com/photos/33607952/pexels-photo-33607952.png" alt="" className="w-full rounded-2xl object-cover" />
                </div>
        
                <div className="order-1 lg:order-2">
                  <h2 className="mb-5 text-2xl text-cyan-300 sm:text-3xl"> SOFTWARE DEVELOPER </h2>
                  <p>
                    Focused on modern web experiences, software development with / and AI integrations
                  </p>
                  <p>
                    •JavaScript • TypeScript • Python • React • AI 
                  </p>
                  <div className="mt-5">
                    <GlitchButton text={"See Projects"} Icon={<GiTechnoHeart />} color={"cyan"} />
                  </div>
                </div>
        
              </section>
    </div>
  )
}
