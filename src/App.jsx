import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Projects from "./assets/Pages/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  const PrimaryBtnStyles = "px-6 py-3 rounded-md bg-[#00F5FF] text-[#020617] font-semibold uppercase tracking-wide shadow-[0_0_20px_rgba(0,245,255,0.45)] hover:bg-[#22D3EE] transition-all duration-300";
  const SecondaryBtnStyles = "px-6 py-3 rounded-md border border-fuchsia-500/70 text-fuchsia-300 font-semibold tracking-wide uppercase hover:bg-fuchsia-500/10 hover:shadow-[0_0_24px_rgba(255,43,214,0.45)] transition-all duration-300"
  const CardBtnStyles = "px-5 py-2.5 rounded-md bg-slate-950/60 border border-cyan-400/40 text-cyan-300 font-medium tracking-wide hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_18px_rgba(0,245,255,0.35)] transition-all duration-300 backdrop-blur-md"
  const NavbarActiveStyles= "relative text-sm font-semibold uppercase tracking-widest text-fuchsia-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-fuchsia-400 after:shadow-[0_0_12px_rgba(255,43,214,0.9)]"
  const NavbarNormalSTyle = "text-sm font-semibold uppercase tracking-widest text-slate-300 hover:text-cyan-300 transition-colors duration-300"
  const GlitchBtnStyle ="group relative overflow-hidden rounded-md border border-[#00F5FF]/50 bg-[#0D1328] px-6 py-3 font-bold uppercase tracking-wides text-[#00F5FF] transition-all duration-300 hover:border-[#FF2BD6] hover:text-white hover:shadow-[0_0_25px_rgba(255,43,214,0.45)] before:absolute before:inset-0 before:-translate-x-full  before:bg-gradient-to-r before:from-transparent before:via-[#00F5FF]/30 before:to-transparent before:opacity-0 before:transition-all before:duration-300 after:absolute after:inset-0 after:translate-x-full after:bg-gradient-to-r after:from-transparent after:via-[#FF2BD6]/30 after:to-transparent. after:opacity-0 after:transition-all after:duration-300 hover:before:translate-x-full hover:before:opacity-100 hover:after:-translate-x-full hover:after:opacity-100 hover:animate-pulse"
  const CardsStyle ="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)]"
  
  return (
    <>
      
    <Navbar />

    <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
    </Routes>

      <Footer />

    </>
  );
}

export default App;
