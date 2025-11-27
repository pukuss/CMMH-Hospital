import React from 'react'

function RGKar_Logo() {
  return (
    <div>
      <svg width="250" className='not-md:w-[100px] not-md:h-[100px]' height="180" viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
  <rect x="12" y="12"  rx="26"
        fill="#ffffff" stroke="#0b6fc1" strokeWidth="4"/>

 
  <g transform="translate(115,165)">
    <circle cx="0" cy="0" r="85" fill="#0b6fc1"/>
    <rect x="-18" y="-42" width="36" height="85" rx="7" fill="#ffffff"/>
    <rect x="-42" y="-18" width="85" height="36" rx="7" fill="#ffffff"/>
  </g>

  <g fontFamily="Segoe UI, Arial">
    <text x="260" y="150"
          fontSize="35"
          fontWeight="700"
          fill="#0b2335">
          RG Kar Medical — Clone
    </text>

    <text x="260" y="185"
          fontSize="25"
          fill="#0b2335"
          opacity="0.75">
          Modern hospital identity • Clean UI
    </text>

    <text x="260" y="215"
          fontSize="20"
          fill="#0b2335"
          opacity="0.7">
          Educational / Portfolio Purpose Only
    </text>
  </g>
</svg>
    </div>
  )
}

export default RGKar_Logo
