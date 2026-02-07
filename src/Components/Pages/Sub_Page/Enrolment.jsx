import React, { useState } from 'react'
// import { EnrollProvider } from '../../Context/Enroll'
import { AccountProvider } from '../../page_comp/enroll/accountContex'
import { LucideSidebar, User2 } from 'lucide-react'



import Account from '../../page_comp/enroll/Account'
import EnrolForm from '../../page_comp/enroll/EnrolForm'

 
function Enrolment() {
  const [user , setuser] = useState("dsd")
  
  
  function GET_DETA_FROMENROLL(deta){
    console.log("parent deta", deta);
    
  }


// console.log(GET_DETA_FROMENROLL(User_Enroll_deta));

  return (
    <AccountProvider value={{user}} >
       <div className=' w-full h-full bg-cover bg-center relative top-10 md:top-16  ' style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/35360782/pexels-photo-35360782.jpeg')", 
      }}>
        {/* OPTIMISE AND COMPRESSS CODE =================================
        >>> ?w=1600&auto=compress&cs=tinysrgb */}
        <div 
        className='border max-w-[1600px] m-auto mb-50'>
            <div className='bg-gray-700/30  rounded-2xl flex justify-center not-md:flex-wrap not-sm:  md:m-15 sm:m-2 m-2 '>
            
            
            
            {/* WHITE SPACE AREA ----------------------------------->>>>>>>>>>>>>> */}
            <div className=' relative bg-black/80 backdrop-blur-sm bg-conic-180  w-full rounded-[10px_0px_0px_10px] not-md:rounded-[10px] hover:border-2 hover:border-indigo-700'>
              <div className=' absolute shadow-pink-400 shadow-[40px_50px_200px_70px] top-50 left-40 rounded-full ping-slow'></div>
                
                <div className=' border bg-white rounded-xl  h-10 m-2 font-extrabold flex justify-between px-5 items-center gap-3  text-[16px] md:text-2xl '>
                  <div className=' text-amber-400 relative z-40'
                  >
                    <span >ADDMITION</span> <span>OPEN</span> <span className='font-sans text-red-600'>NOW</span></div>
                  <div>{Account ? <User2 color='green' /> : <User2 />}</div>
                </div>
                
                
                
                <div className='w-full'>
                  <EnrolForm SEND_DETA={GET_DETA_FROMENROLL} />
                </div>


            </div>

            {/* BLACK SPACE AREA ======================================>>>>>>>>>>>>>> */}
            <div className='bg-black w-full rounded-[0px_10px_10px_0px] relative h-120' ></div>

            </div>
        </div>

      </div>




        
    </AccountProvider>
  )
}

export default Enrolment
