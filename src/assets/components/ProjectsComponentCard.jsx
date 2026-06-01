

export default function ProjectsComponentCard({ image, title, description, tech1, tech2, tech3, url, course }) {
  
  const cardsStyle ="group flex items-center gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)]"

    const showProject = () => {
      window.open(url, "_blank");
    };

    return (
    <>

    <div className='group h-full rounded-2xl border border-[#00F5FF]/20 bg-[#080D1F] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF2BD6]/60 hover:shadow-[0_0_30px_rgba(255,43,214,0.22)]'>
        <div className='relative w-full max-w-150 aspect-square overflow-hidden rounded-lg'>
            <img src={image} alt="card_Image" className="w-full h-full object-cover" />
        </div>
      <div className='mt-6'>
        <h3 className='text-xl sm:text-2xl'>{title} </h3>
        <small>{course}</small>
        <p className='mt-2 text-sm text-slate-200 sm:text-base'>
                {description}
            </p>
        </div>

        {/* card tech tags  */}
        <div className="my-6 flex flex-wrap gap-3">

          <div className={cardsStyle}>
            <p> {tech1} </p>
          </div>
          <div className={cardsStyle}>
            <p> {tech2} </p>
          </div>

          <div className={cardsStyle}>
            <p> {tech3} </p>
          </div>

        </div>

        <div>

          {/* <small onClick={showProject} className="flex justify-center">
            Ver proyecto
          </small> */}

          <div>
            {/* Icon */}
          </div>
        </div>

    </div>
    </>
  )
}
