import EducationCards from "../EducationCards";
import BYU_Logo from "../../images/BYU_logo.png";
import Harvard_Logo from "../../images/Harvard-Emblem.png";
import Boot_dev from "../../images/bot_logo.png";
import React from 'react'

export default function Education() {
  return (
    <div>

        {/* Education cards */}
            <section className="mx-4 my-10 sm:mx-6 lg:mx-8">
              <div className="">
        
                <small className=" text-[#00F5FF] font-bold ">
                  EDUCATION & CERTIFICATIONS
                </small>
                <h3 className="text-2xl sm:text-3xl">
                  Learning that drives my growth
                </h3>
        
              </div>
        
        
              {/* Education Cards  */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
        
              <EducationCards 
              educationType="University Education" 
              Logo={BYU_Logo} 
              schoolName="BYU - Idaho" 
              degree="CS50's Introduction to Computer Science" 
              universityInfo="Bringham Young University - Idaho Rexburg, Idaho, USA." 
              description="Focus on software development, data structures, algorithms, web development, and systems." 
              date="2022 - Present" 
              />
        
        
              <EducationCards 
              educationType="Certification" 
              Logo={Harvard_Logo} 
              schoolName="Harvard University" 
              degree="CS50's Introduction to Computer Science" 
              universityInfo="Harvard University - Cambridge, Massachusetts, USA." 
              description="Introductory course in computer science and programming covering algorithms, data structures, security, web development, and more." 
              date="2020" 
              />
        
              <EducationCards 
              educationType="Certification" 
              Logo={Harvard_Logo} 
              schoolName="Harvard University" 
              degree="CS50 - Web Programming with Python and JavaScript" 
              universityInfo="Harvard University - Cambridge, Massachusetts, USA." 
              description="Advanced web development course covering HTML, CSS, JavaScript, Python, Django, APIs, CI/CD, testing, and deployment." 
              date="2023"
              />
        
              <EducationCards 
              educationType="Certification" 
              Logo={Boot_dev} 
              schoolName="Boot.dev" 
              degree="AI Agent Development with Python" 
              universityInfo="Boot.dev - Online" 
              description="Advanced course on AI agent development covering Python, APIs, and deployment." 
              date="2025"
              />
        
        
            </div>
        
            </section>

    </div>
  )
}
