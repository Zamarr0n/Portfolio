import { AiFillCode } from "react-icons/ai";
import { useState } from "react";

export default function ProjectCard({title, description, projects, course, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="relative overflow-hidden rounded-2xl border border-fuchsia-500/40 bg-[#0A0A0F]/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]">

      {/* Neon Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-400/10" />

      <div className="relative z-10">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-fuchsia-400">
            {title}
          </h3>

          <span className="rounded-md border border-cyan-400/30 px-2 py-1 text-xs text-cyan-300">
            {course}
          </span>
        </div>

        {/* Project Image */}
        <div className="mb-4 h-80 overflow-hidden rounded-xl border border-cyan-400/20 bg-black/40">
          <img
            src={image}
            alt="Project Preview"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Summary */}
        <p className="text-gray-300">
          {description}
        </p>

        {/* Technologies */}
        {/* 
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-fuchsia-500/30 px-3 py-1 text-xs text-fuchsia-300">
            React
          </span>

          <span className="rounded-full border border-cyan-500/30 px-3 py-1 text-xs text-cyan-300">
            Firebase
          </span>

          <span className="rounded-full border border-purple-500/30 px-3 py-1 text-xs text-purple-300">
            Tailwind
          </span>
        </div>
         */}

        {/* Dropdown Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-6 flex w-full items-center justify-between rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 px-4 py-3 text-fuchsia-300 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          <span>View Projects List </span>

          <span
  className={`transition-transform duration-300 ${
    isOpen ? "rotate-180" : ""
  }`}
>
  ▼
</span>
        </button>

        {/* Dropdown Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-xl border border-cyan-400/20 bg-black/30 p-4">

            <h4 className="mb-2 text-cyan-300 font-semibold">
              Project List:
            </h4>

            <ul className="space-y-2 text-sm text-gray-300">
                {projects.map((project, index) => (
                    <li key={index}>{project}</li>
                ))}
            </ul>
            
          </div>
        </div>

      </div>
    </div>
  );
}