

export default function EducationCards({ educationType, Logo, schoolName, degree, universityInfo, description, date }) {
  const cardsStyle ="h-full gap-4 rounded-xl border border-cyan-500/25 bg-[#080D1F] px-4 py-4 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.25)] flex flex-col"

return (

    <>

    <div className={cardsStyle}>

    
            <div className="mb-5 ml-2">
            <p>
                {educationType}
            </p>
            </div>
    
            <div className="flex flex-1 flex-col gap-5 sm:flex-row">
            
            
            <div className="mt-1 h-24 w-24 shrink-0 self-center sm:mt-5 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
            <img src={Logo} alt={`${schoolName}_logo`} className="w-full h-full object-contain"  />
            </div>
    
            <div className="flex flex-col flex-1">
    
              {/* School Name */}
              <div className="mb-5">
                <h2 className="mb-2 text-xl sm:text-2xl"> {schoolName} </h2>
              {/* Degree */}
              <strong className="text-base sm:text-lg"> {degree} </strong>
              </div>
              {/* text */}
              <div className="mb-2">
                <p>
                {universityInfo}
              </p>
              </div>
    
              <p>
                {description}
              </p>
    
              
            </div>
          </div>
          {/* date */}
              <div className="mt-auto text-center border-t border-fuchsia-500/25 pt-3">
                <small className="text-sm">
                {date}
              </small>
              </div>
          </div>

    </>
  )
}
