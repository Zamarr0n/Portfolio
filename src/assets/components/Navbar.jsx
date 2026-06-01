import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Logo from "../images/zamarron_logo.svg";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false); 

    const navItems = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/projects", label: "Projects" },
    ];

    const getNavLinkClass = ({ isActive }) =>
        isActive
            ? "relative text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-300 transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-fuchsia-400 after:shadow-[0_0_12px_rgba(255,43,214,0.75)]"
            : "text-sm font-semibold uppercase tracking-[0.22em] text-slate-300 transition-colors duration-300 hover:text-cyan-300";

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

    const closeMenu = () => {
        setMenuOpen(false);
    };

  return (
        <nav className="sticky top-0 z-50 border-b border-fuchsia-500/15 bg-[#050713]/90 text-white backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <NavLink to="/" className="flex items-center gap-3" onClick={closeMenu}>
                    <img src={Logo} alt="Zamarron logo" className="h-10 w-auto sm:h-11" />
                </NavLink>

                <ul className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink to={item.to} className={getNavLinkClass}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-cyan-400/30 bg-[#0D1328] p-2 text-cyan-300 transition-all duration-300 hover:border-fuchsia-400/60 hover:text-fuchsia-300 hover:shadow-[0_0_18px_rgba(255,43,214,0.35)] md:hidden"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <RiCloseLargeFill size={20} /> : <GiHamburgerMenu size={20} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="border-t border-fuchsia-500/15 bg-[#080D1F]/95 px-4 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] md:hidden">
                    <ul className="mx-auto flex max-w-6xl flex-col gap-3">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block rounded-xl border border-fuchsia-500/40 bg-fuchsia-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300"
                                              : "block rounded-xl border border-cyan-500/15 bg-white/2 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}