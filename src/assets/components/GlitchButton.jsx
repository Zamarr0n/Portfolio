

import { IconContext } from "react-icons";

export default function GlitchButton({ text, Icon, color })  {
  let glitchBtnStyle = "";
  // const glitchBtnStyle ="group relative overflow-hidden rounded-md border border-[#00F5FF]/50 bg-[#0D1328] px-6 py-3 font-bold uppercase tracking-widest text-[#00F5FF] transition-all duration-300 hover:border-[#FF2BD6] hover:text-white hover:shadow-[0_0_25px_rgba(255,43,214,0.45)] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-[#00F5FF]/30 before:to-transparent before:opacity-0 before:transition-all before:duration-300 after:absolute after:inset-0 after:translate-x-full after:bg-gradient-to-r after:from-transparent after:via-[#FF2BD6]/30 after:to-transparent after:opacity-0 after:transition-all after:duration-300 hover:before:translate-x-full hover:before:opacity-100 hover:after:-translate-x-full hover:after:opacity-100 hover:animate-pulse"
  if( color === "cyan") {
    glitchBtnStyle = "cursor-pointer group relative w-full overflow-hidden rounded-md border border-[#00F5FF]/50 bg-[#0D1328] px-5 py-3 text-sm font-bold uppercase tracking-wide text-[#00F5FF] transition-all duration-300 hover:border-[#FF2BD6] hover:text-white hover:shadow-[0_0_25px_rgba(255,43,214,0.45)] sm:w-auto sm:px-6 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-[#00F5FF]/30 before:to-transparent before:opacity-0 before:transition-all before:duration-300 after:absolute after:inset-0 after:translate-x-full after:bg-gradient-to-r after:from-transparent after:via-[#FF2BD6]/30 after:to-transparent after:opacity-0 after:transition-all after:duration-300 hover:before:translate-x-full hover:before:opacity-100 hover:after:-translate-x-full hover:after:opacity-100 hover:animate-pulse"
  } else {
    glitchBtnStyle = "cursor-pointer group relative w-full overflow-hidden rounded-md border border-[#FF2BD6]/50 bg-[#0D1328] px-5 py-3 text-sm font-bold uppercase tracking-wide text-[#FF2BD6] transition-all duration-300 hover:border-[#00F5FF] hover:text-white hover:shadow-[0_0_25px_rgba(0,245,255,0.45)] sm:w-auto sm:px-6 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-[#FF2BD6]/30 before:to-transparent before:opacity-0 before:transition-all before:duration-300 after:absolute after:inset-0 after:translate-x-full after:bg-gradient-to-r after:from-transparent after:via-[#00F5FF]/30 after:to-transparent after:opacity-0 after:transition-all after:duration-300 hover:before:translate-x-full hover:before:opacity-100 hover:after:-translate-x-full hover:after:opacity-100 hover:animate-pulse"
  }
  return (
    <button className={glitchBtnStyle}>
      <span className=' relative z-10 transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px '>
        {text}
        <IconContext.Provider value={{ size: "1.5em", className: "inline-block ml-2"}}>
          {Icon}
        </IconContext.Provider>
      </span>
    </button>
  );
};
