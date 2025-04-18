import logo from "../../assets/anuj.jpg";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import Buttons from "../button/Buttons";
import Header from "../header/Header";
import React, { useState, useEffect } from "react";
import Slider from "../HomePage/Slider";
// import "bootstrap/dist/css/bootstrap.min.css";

// import { auth, db } from "../../firebaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc, getDoc } from "firebase/firestore";

// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

import Footer from "../footer/Footer";
import DoctorQueryForm from "./DoctorQueryForm";
import ChatBot from "./ChatBot";
import ReviewSection from "../service/ReviewSection";
// import ReviewLogin from "../service/ReviewLogin";
// import ClintDetails from "../doctors/ClintDetails";
import ClientDashboard from "../doctors/ClintDetails";

function Home() {
  const [user, setUser] = useState(null);
  return (
    <>
      <div className="bg-gray-800">
        <div className="fixed w-full  z-50">
          <Header />
          <ChatBot />
        </div>
        <section className="relative">
          <video
            className="w-full h-screen lg:hidden md:hidden"
            loop
            autoPlay
            muted
            src="https://videos.pexels.com/video-files/6390390/6390390-uhd_1440_2560_25fps.mp4"
          ></video>
          <div className="hidden lg:block md:block lg:w-full lg:h-screen">
            <Slider />
          </div>

          <div className="">
           <div className="absolute top-72">
        
           <ClientDashboard
            client={{
              name: "Dr. Anuj Saini",
              email: "alex.johnson@example.com",
              // phone: "+1 234 567 890",
              specialization: "Orthopedic Physiotherapy",
              experience: 10,
              address: "Lucknow UP"
            }} 
           />
           </div>
            <div className="absolute top-36 text-center left-auto text-4xl px-3 font-serif ">
              <motion.h
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 8 }}
                transition={{ duration: 2 }}
                className="text-green-500"
              >
                Physiotherapy care to help you move better and live better
              </motion.h>
            </div>

            <div className="mx-4 text-green-600 flex  space-x-10 absolute top-[95%] lg:top-96 lg:right-16">
              <div className="outline outline-1 text-xl font-semibold hover:cursor-pointer hover:bg-green-700 hover:text-black px-1 text-center z-40">
                <DoctorQueryForm />
              </div>

              <div className="text-center outline outline-1 rounded-lg text-xl font-semibold hover:cursor-pointer px-2 hover:bg-green-700 hover:text-black pt-2">
                <a href="https://www.google.com/maps/@26.848692,80.9425127,10z?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">
                  Locations{" for Visit"}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ................................................ */}
        <div className="lg:flex lg:my-20 md:mt-28 ">
          <section className="  lg:px-5 lg:my-auto lg:w-1/2  md:flex text-left sm:text-center">
            <div className="lg: text-gray-200 flex flex-col justify-center items-center  mt-0.5 p-7">
              <h1 className="text-4xl py-10 font-semibold ">
                Where Does It Physiotherapy ?
              </h1>
              <p className="pb-1 text-lg">
                Physiotherapy is a healthcare profession focused on restoring
                mobility, reducing pain, and enhancing physical function through
                personalized exercises, manual therapy, and rehabilitation
                techniques.
              </p>
              {/* <div className="mt-16 rounded-md p-2 w-32 text-center  bg-green-600">
                <button>All Service</button>
              </div> */}
            </div>
          </section>

          {/* .....................png.................. */}
          <section className="lg:h-[850px] lg:w-[570px] sm:mt-12 sm:w-[768px] max-sm:w-[390px] m-auto">
            <div className="flex justify-center items-center relative">
              <img
                className="lg:h-[850px] lg:w-[570px] max-sm:w-[390px] sm:w-[768px] shadow-sm"
                src="https://www.spiveyortho.com/wp-content/themes/spivey/assets/media/skeleton.jpg"
              />

              <ul>
                <li>
                  <NavLink to="/head" title="Navigate to Head">
                    <div className="absolute left-[35px] sm:left-[230px] lg:left-[100px] lg:top-[70px] sm:top-[90px] top-[40px] font-serif flex items-center">
                      <h1 className="hover:text-green-500 mx-1 ">Head</h1>
                      <div className="h-[1.5px] w-36 sm:w-[200px] bg-green-400  ml-2"></div>
                      <div>
                        <p className=" size-4 rounded-full bg-red-700 animate-pulse "></p>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/neck">
                    <div className="text-black absolute left-[90px] sm:left-[210px] sm:top-[150px] lg:left-[150px] lg:top-[130px] top-[70px] font-serif flex items-center">
                      <h1 className="hover:text-green-500">Neck</h1>

                      <div className="h-[1.5px] w-[95px] sm:w-[210px] lg:w-[160px] bg-green-400 ml-2"></div>
                      <div>
                        <p className="size-4 rounded-full bg-red-700 animate-pulse"></p>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shoulder">
                    <div className="text-black absolute left-[20px] lg:left-[70px] sm:left-[60px] top-[95px] sm:top-[200px] lg:top-40 font-serif flex items-center">
                      {" "}
                      <h1 className="hover:text-green-500">Shoulder</h1>
                      <div className="h-[1.5px] w-[95px] sm:w-[250px] lg:w-[160px] bg-green-400 ml-2"></div>
                      <div>
                        <p className="size-4 rounded-full bg-red-700 animate-pulse"></p>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/back">
                    <div className="text-black absolute left-[30px] lg:left-[90px] sm:left-[80px] lg:top-64 top-[170px] sm:top-[330px] font-serif flex items-center ">
                      <h1 className="hover:text-green-500">Back</h1>

                      <div
                        className="h-[1.5px] w-[100px]
                    sm:w-[220px] lg:w-[150px] bg-green-400 ml-2"
                      ></div>
                      <div>
                        <p className="size-4 rounded-full bg-red-700 animate-pulse"></p>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/wrist">
                    <div className="text-black absolute right-[5px] sm:left-[130px] top-[220px] lg:top-[305px] lg:left-[110px] sm:top-[370px] font-serif flex items-center ">
                      <div>
                        <p className="size-4 rounded-full bg-red-700 animate-pulse"></p>
                      </div>
                      <div className="h-[1.5px] w-[25px] sm:w-[80px] bg-green-400"></div>

                      <h1 className="hover:text-green-500 lg:hover:text-green-500">
                        Wrist
                      </h1>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hip">
                    <div className="text-black absolute left-[40px] sm:left-[80px] top-[230px] sm:bottom-[260px] font-serif flex items-center ">
                      <h1 className="hover:text-green-500">Hip</h1>

                      <div className="h-[1.5px] w-[80px] sm:w-[200px] lg:w-[125px] bg-green-400 ml-2"></div>
                      <div>
                        <p className="size-4 rounded-full bg-red-700 animate-pulse"></p>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ankle">
                    <div className="text-black absolute left-[40px] sm:left-[75px] lg:bottom-[85px] bottom-[45px] sm:bottom-[100px] font-serif flex items-center ">
                      <p className="size-4 rounded-full bg-red-700 animate-pulse"></p>
                      <div className="h-[1.5px] w-[90px] sm:w-[150px] bg-green-400"></div>

                      <h1 className="hover:text-green-500">Ankle</h1>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/foot">
                    <div className="text-black absolute left-[160px] sm:left-[330px] lg:left-[250px] lg:bottom-[240px] bottom-[130px] sm:bottom-[230px] font-serif flex items-center">
                      <div>
                        <p className=" ml-2 size-4 rounded-full bg-red-700 animate-pulse"></p>
                      </div>
                      <div className="h-[1.5px] w-[90px] sm:w-[100px] bg-green-400"></div>

                      <h1 className="hover:text-green-500 ml-1">Foot</h1>
                    </div>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/knee">
                    <div className="text-black absolute right-[5px] sm:right-[50px] lg:top-[440px] lg:left-[420px] bottom-[240px] sm:bottom-[490px] font-serif flex items-center ">
                      <div>
                        <p
                          className=" size-4
                       rounded-full bg-red-700 animate-pulse"
                        ></p>
                      </div>
                      <div className="h-[1.5px] w-[45px] sm:w-[95px] bg-green-400"></div>

                      <h1 className="hover:text-green-500 ml-1">Knee</h1>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/elbow">
                    <div className="text-black absolute right-[10px] sm:right-[75px] top-48 lg:top-[330px] lg:left-[400px] sm:top-[390px] font-serif flex items-center ">
                      <div>
                        <p className=" size-4 rounded-full bg-red-700 animate-pulse"></p>
                      </div>
                      <div className="h-[1.5px] w-[55px] sm:w-[110px] bg-green-400"></div>

                      <h1 className="hover:text-green-500 ml-1">Elbow</h1>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Location 
        section................................ */}

        <section
          className=" lg:w-5/6 lg:mx-auto
        lg:h-[30rem] text-gray-900 h-1/2 sm:mt-[150px] mt-24 relative flex flex-col items-center justify-center"
        >
          <svg
            className="animate-bounce w-1/5 lg:w-52 absolute -top-10 left-50 z-30"
            data-slot="icon"
            fill="none"
            stroke-width=".6"
            stroke="blue"
            viewBox="0 -4 26 26"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11.5a3 3 3 1 1-6 0 3 3 0 0 1 6 0Z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            ></path>
          </svg>

          <div className="text-gray-200 p-0 sm:p-0 sm:mt-[70px] sm:w-8/12 flex flex-col items-center">
            <div className=" my-5 sm:my-10 font-serif text-3xl sm:text-4xl text-center ">
              <p>Can Treat Your Immediate Needs</p>
              <p>Physiotherapy</p>
            </div>
            <div className="text-wrap text-center font-sans sm:text-2xl">
              <p>
                Physiotherapy, on the other hand, typically focuses on
                rehabilitation and long-term recovery through exercises and
                therapy.
              </p>
            </div>

            <div className="w-44 text-center my-10">
              <a
                href="https://www.google.com/maps/@26.848692,80.9425127,10z?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif "
              >
                <Buttons />
              </a>
            </div>
          </div>
        </section>
          <ReviewSection user={user}/>
        <Footer />
      </div>
    </>
  );
}

export default Home;
