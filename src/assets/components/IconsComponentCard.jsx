import React from 'react'

export default function IconsComponentCard({ icon, title, description }) {
  return (
    // <div className={`group flex items-center gap-4 rounded-xl border border-${color}-500/25 bg-[#080D1F] px-4 py-3 transition-all duration-300 hover:border-${color}-400/70 hover:bg-${color}-500/10 hover:shadow-[0_0_22px_rgba(245,0,255,0.25)] `}>
      <div className='flex items-center'>
          <div className='mr-5 flex justify-center items-center'>
              {icon}
          </div>
          <div>
              <h3 className='mb-1 text-lg sm:text-xl'>{title}</h3>
              <p className='text-sm sm:text-base'>{description}</p>
          </div>
      </div>
    // </div>
  )
}
