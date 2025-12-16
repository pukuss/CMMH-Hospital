import React, { useState } from 'react'
import useAccount from './accountContex'
import { Ban, Cross, CrossIcon, User2 } from 'lucide-react';
import { div } from 'framer-motion/client';


const Courses =[
        "NEET Course" , "mbbs"  , "d.farma" , "gnm nursing" 
    ]



    

    function EnrolForm() {
        const [BamkOffer, setBamkOffer] = useState(false)
        const [usedBankOffer ,setusedBankOffer ] = useState(false)

        const {user} = useAccount()
        // console.log(user);
        

    return (
        <>

            {/* From  */}
            <div className=' border bg-amber-900/0 flex justify-start w-full font-bold'>
                <form action="" className='w-full p-5 flex flex-col gap-6'>

    {/* -----------------------Name----------------------------- */}
                    <div className='  w-full flex justify-between items-center pl-2' >  {/* name  */}
                        <label htmlFor="username">Name : </label>
                        <input
                            className='border px-1 md:w-[25vw] w-[50vw] p-2'
                            type="text"
                            name=""
                            id="username" />
                    </div>
    {/*----------------- Addhar No ------------------------*/}
                    <div className=' w-full flex justify-between items-center pl-2 '>  
                        <label htmlFor="addhar"> Addhar No: </label>
                        <input
                            className='border px-1 md:w-[25vw] w-[50vw] p-2'
                            type="text"
                            inputMode='numeric'
                            maxLength={12}
                            placeholder="1234 5678 9012"
                            id="addhar" />
                    </div>
    {/*---------------------- Hospital Name------------------------------ */}
                    <div className=' w-full flex justify-between  items-center pl-2'>  
                        <label htmlFor="HSP">Hospital Name / ID : </label>
                        <input
                            className='border px-1 md:w-[25vw] w-[50vw] p-2'
                            type="text"
                            name=""
                            readOnly
                            value={"RG Kar Medicale College & Hospital "}
                            id="HSP" />
                    </div>

        {/* ---------------------contact Number---------------------------- */}
                    <div className=' w-full flex justify-between items-center pl-2'>   {/* Hospital Name */}
                        <label htmlFor="call">Contact Number : </label>
                        <input
                            className='border px-1 md:w-[25vw] w-[50vw] p-2'
                            type="text"
                            name="number"
                            placeholder='Phone Number'
                            // value={}
                            id="call" />
                    </div>

    {/*----------------------- Gender------------------------  */}
                    <div className='flex justify-between  p-2 rounded-[10px] bg-gray-400/30'>
                        <div>
                            <label htmlFor="">Gender :</label>
                        </div>

                        <div className='flex gap-4'>
                            <div className='flex gap-1.5'>
                                <label htmlFor="male">Male</label>
                                <input type="radio" name="" id="" />
                            </div>
                            <div className='flex gap-1.5'>
                                <label htmlFor="female">Female</label>
                                <input type="radio" name="" id="" />
                            </div>
                            <div className='flex gap-1.5'>
                                <label htmlFor="custom">Custom</label>
                                <input type="radio" name="" id="" />
                            </div>
                            
                        </div>
                    </div>


    {/* ------------------Courses----------------------- */}
                    <div className='flex justify-end gap-[10vw] items-center'>
                        <label htmlFor="course">Courses : </label>
                        
                        <select
                            className='bg-green-500/20 rounded-[7px] p-1.5 transition-all delay-300 hover:border border-green-400'
                            onClick={()=>{
                                if(!usedBankOffer)
                                    setBamkOffer(true)
                                    setusedBankOffer(true)
                                
                            }}
                            name="" id="course">

                                {Courses.map((element)=>(
                                    <option
                                    className='font-bold bg-gray-700 rounded-2xl hover:bg-green-500/30'
                                    key={element} 
                                    value={element}>
                                    {element.toUpperCase()}</option>
                                ))}                            
                        </select>
                    </div>

                    { BamkOffer && (
                        <div className='border h-20 border-purple-500 bg-purple-500/10 rounded-[10px]'>
                            <div className='flex  justify-between'>
                                <div className='flex gap-2 px-4 p-1 rounded-lg bg-green-400/20  md:w-1/2 w-[50vw] m-1 text-[12px]'>
                                <span className='text-yellow-400 '>Get Descount</span>
                                <span className='text-green-600'>UP-TO</span>
                                <span>2,000₹  to  25,000</span>
                            </div >
                            <Ban onClick={()=> {if(BamkOffer) setBamkOffer(false)}  }
                             size={25} color='red' className='m-1 ' />
                            </div>
                        </div>
                    )}

    




                </form>
            </div>
        </>
    )
}

export default EnrolForm
export {Courses}