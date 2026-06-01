import React from "react";



const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <>
        <footer className="border-t border-fuchsia-500/20 bg-black px-4 py-8 text-fuchsia-500 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
                <div className="space-y-2">
                    <strong className="block text-base text-fuchsia-500 sm:text-lg">Let&apos;s build something amazing together!</strong>
                    <p className="text-sm font-bold sm:text-base text-white">{currentYear} - Emilio Zamarron Portfolio</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:min-w-[20rem] md:gap-6">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-fuchsia-400">
                            Email
                        </p>
                        <small className="break-all text-slate-300 sm:text-sm">
                            emilio.zamarrons@gmail.com
                        </small>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-fuchsia-400">GitHub</p>
                        <small className="text-slate-300 sm:text-sm">
                            Zamarr0n
                        </small>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;




