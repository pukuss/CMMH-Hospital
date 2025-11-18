import React, { useState } from 'react'
// import EGkarLogo_img from '../assets/RGKar_logo.png'
import {RG_Kar_Hospital_lgo , MenuBar} from '../assets/Assets'
// import Logo from '../assets/RGKar_Logo'

function Navbar() {
  const [open , setopen] = useState(false)
  const menuclass = "font-bold text-[8px] hover:border hover:text-emerald-500 flex bg-linear-to-r from-slate-900 to-slate-700 p-2 cursor-pointer rounded-[10px]"
  const Dex_menu = "flex md:text-[8px] cursor-pointer flex-nowrap text-nowrap hover:text-amber-500 font-bold p-2 rounded-[10px]"
  
  return (
    <>
     <nav className=' relative w-screen h-18 flex m-auto justify-center items-center bg-[#16003B] '>
       <div className=' items-center   border-amber-950 h-full w-[1400px]  flex justify-between px-5 '> 
         
         <div className='border-r-10 border-amber-500 w-29 rounded-tr-full '>
          <div className='border-r-8  w-27 rounded-tr-full border-amber-50' >
            <div className='border-r-10 w-25 rounded-tr-full border-emerald-500 '>
            <img src={RG_Kar_Hospital_lgo} className='h-18  '/>
            </div>
            </div>
            </div>

         <ul className='md:flex md:flex-nowrap xl:gap-0 md:gap-0 hidden'>
          <li className={`${Dex_menu}`} >HOME</li>
          <li className={`${Dex_menu}`}>ADDMITION</li>
          <li className={`${Dex_menu}`}>ACADEMICS</li>
          <li className={`${Dex_menu}`}>HOSPITAL SERVICES</li>
          <li className={`${Dex_menu}`}>FOR NMC</li>
          <li className={`${Dex_menu}`}>ODER NOTICE</li>
          <li className={`${Dex_menu}`}>STUDENT CORNAR</li>
          <li className={`${Dex_menu}`}>CONTACT US</li>
          <li className={`${Dex_menu}`}>ABOUT US</li>
         </ul>
        
        <div>
          <button>LogIn</button>

        </div>



        <div className=''>
           <button
        onClick={()=> setopen(!open)}
         className='md:hidden outline-none block h-10 w-10' type="button"><img src={MenuBar} alt="" /></button>
        </div>
       </div> 

    
     </nav>

     {open && 
         <div className=' w-80 flex absolute right-2 top-20  '>
          <ul className=' gap-1 md:hidden w-full rounded-2xl p-5 flex flex-col justify-end bg-linear-to-r from-fuchsia-600 to-blue-400 pl-5'>
        <li className={`${menuclass} `}> HOME</li>
          <li className={`${menuclass} `}>ADDMITION</li>
          <li className={`${menuclass} `}>ACADEMICS</li>
          <li className={`${menuclass} `}>HOSPITAL SERVICES</li>
          <li className={`${menuclass} `}>FOR NMC</li>
          <li className={`${menuclass} `}>ODER NOTICE</li>
          <li className={`${menuclass} `}>STUDENT CORNAR</li>
          <li className={`${menuclass} `}>ABOUT US</li>
          <li className={`${menuclass} `}>CONTACT US</li>
         </ul>
         </div>
        
         }


    </>
  )
}

export default Navbar
