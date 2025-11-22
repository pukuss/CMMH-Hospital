import React from "react";
import { RG_Kar_Hospital_lgo } from "../../assets/Assets";
import Logo from "../../assets/RGKar_Logo";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="m-auto">
        {/* Background video  */}
        <div className=" w-screen relative  shadow-emerald-400">
          <video
            autoPlay
            muted
            loop
            className="w-full object-cover h-screen "
            src="/bg video/bgvideo.mp4">
            fvbxcvb
          </video>
        </div>
        <div className=" absolute  w-screen top-10 md:top-18 m-auto">
          <div className=" m-auto border max-w-[1400px] w-full ">
            <div className="flex justify-between items-center pr-10">
              <span>
                <Logo />
              </span>
              <div className="flex flex-col justify-center items-start text-blue-700 text-3xl text-shadow-[0px_0px_1px] text-shadow-blue-400 font-bold italic">
                <span className=" not-md:text-[12px] font-bold">
                  RG Kar Medicale College & Hospital
                </span>

{/* addmition and exam > button? */}
                <div>
                  <Link className="relative inline-block text-[12px] group">
                    <span className="relative z-10 block not-md:px-3 not-md:py-1 px-5 py-2 overflow-hidden font-medium leading-tight text-gray-600 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 not-md:px-3 not-md:py-1 py-2 rounded-lg bg-amber-50"></span>
                      <span className="absolute left-0 w-48 bg-red-600 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 group-hover:-rotate-180 ease"></span>
                      <span className="relative after:content-['>'] ">
                        addmition & exam{" "}
                      </span>
                    </span>
                    <span
                      class="absolute bottom-0 right-0 w-full not-md:h-8 h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-emerald-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"></span>
                  </Link>
                </div>


              </div>
            </div>

            <div className="border">
              <div>Herovu</div>
            </div>


          </div>
        </div>



        {/* Main containar Of Home Page   */}
        <div className=" h-screen w-screen m-auto mt-5">
          <div className=" bg-[url('src/assets/images/background.jpg')] bg-cover bg-center  max-w-[1600px] m-auto">
            <div className="  flex flex-col items-start w-full">


              <span className="p-2 font-bold md:text-2xl  ">
                Information of NEET PG Admission-2025 of R. G. Kar Medical
                College
              </span>

              <div className="flex  gap-10 p-3 bg-amber-50/10 min-w-full rounded-[0px_15px_0px_0px]">
                
                <button className="  flex items-center justify-center not-md:text-[10px]  px-5 py-1.5 rounded-2xl border font-bold gap-2">
                  <img
                    src="/src/assets/icon/Student_icon.png"
                    className="h-5 "
                    alt=""
                  />{" "}
                  ACTIVITS
                </button>
                
                <button className="  shadow-sm shadow-black text-nowrap flex not-md:text-[10px] items-center justify-center  border  md:px-5 px-2 py-0 rounded-2xl bg-black font-bold gap-2">
                  STUDENT UNION 
                </button>
              </div>
            </div>

            <div className="h-[600px] w-full items-center gap-10 md:justify-between flex md:px-10 not-md:flex-col ">
              <div className="md:h-[400px]  md:max-w-[50%] flex items-center justify-center ">
                <img
                  className="animate-slideUp flex justify-center items-center md:h-[90%] w-full rounded-2xl border-b-blue-950 shadow-md shadow-blue-300"
                  src="/src/assets/images/admin.jpg"
                  alt="background img"
                />
              </div>
              
              <div className=" md:w-[60%] font-bold gap-5 flex flex-col ">
                <span className="text-[clamp(16px,3vw,32px)] ">R. G. Kar Medical College was established in 1886</span>
                <span className="not-md:text-[10px] text-gray-400">making it one
                of the oldest medical colleges in India. It was named after the
                renowned Indian philanthropist Dr. Radha Gobinda Kar. This
                college is affiliated with the West Bengal University of Health
                Sciences (WBUHS) and is recognized by the Medical Council of
                India (MCI) for undergraduate and postgraduate medical
                education. The college offers undergraduate (MBBS), postgraduate
                (MD/MS), post doctorate (DM/MCh), PG Diploma, Fellowship
                programs in various medical disciplines. It also provides
                opportunities for research and specialization in different
                fields of medicine. R. G. Kar Medical College is associated with
                R. G. Kar Medical College and Hospital, which is a major
                government teaching hospital in Kolkata. The hospital provides
                healthcare services to the community and serves as a training
                ground for medical students. This college campus is equipped
                with modern facilities, including classrooms, laboratories, a
                library, and accommodation for students and faculty. The
                institution emphasizes research and academic excellence. It has
                several departments and research centers dedicated to advancing
                medical knowledge and patient care. R. G. Kar Medical College
                has a rich history and has produced many accomplished medical
                professionals who have made significant contributions to the
                field of medicine.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
