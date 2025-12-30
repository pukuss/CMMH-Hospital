import React, { useState } from 'react'

function Hospitl_dashcomp() {
  
  const Item = ["🧭 Emergency" , "💉 Surgery", " 💅 Long-term care" ,"👩‍👧‍👦 Family treatment" ,"💜 Critical cases"];
  const [useItem , setUseItem] = useState(null)
  const [active , setActive] =  useState("")

  switch (useItem) {
    case 0:
      console.log("zero");
      break;
  
      case 1:
        console.log("one");
        break;
      
      case 2:
        console.log("two");
        break;
      
      case 3:
        console.log("three");
        break;
      
      case 4:
        console.log("four");
        break;
        
        

    default:
      break;
  }


  
  
  return (
    <>
        <div className='w-full border bg-black flex'>

          <div className='bg-gray-500  w-[30%] md:w-[25%] h-full p-2'>
                <div className='border h-full w-full not-md:text-[14px] gap-3  flex flex-col justify-center items-start '>
                    {Item.map((element,index)=>{ 
                        return <div
                          onClick={()=>{
                            console.log(index);
                            setUseItem(index)
                            
                          }}
                          className={`
                          bg-white/20 w-full p-1 font-alluser font-extrabold rounded-[5px] flex pl-2 cursor-pointer hover:bg-sky-300/50`}>
                        {element}
                        </div>
                    })}
                </div>
            </div>



            <div className='bg-amber-950 w-[70%] md:w-[85%] h-full'>
              {

              }
            </div>
        </div>
    </>
  )
}

export default Hospitl_dashcomp
