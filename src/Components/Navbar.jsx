import { NavLink } from "react-router-dom"
import  {burgerbar,burgercross} from "../assets/assets.js"
import {useState,useRef} from 'react'
import { useLocation } from "react-router-dom"
import gsap from 'gsap'
import Logo from "../svg/Logo.jsx"

export default function Navbar(){
  const location = useLocation();
    const [toggle,setToggle]=useState(true)
    const aniRef=useRef(null);
    const anitwo=useRef(null)
    

    const textColor = {
      "/": "text-white",
      "/about": "text-black",
      "/services": "text-black",
      "/blogs": "text-black",
      "/academics": "text-black",
      "/careers": "text-black",
      
    };
  
    
    function handler() {
      const tl = gsap.timeline();

      tl.to(aniRef.current, {
        duration: 0.3,
        x: toggle ? "0%" : "100%",
        
      });

      tl.to(anitwo.current.children, {
        duration: 0.5,
        x: toggle ? "0%" : "100%",
        stagger: 0.2,
        opacity: toggle ? 1 : 0,
      });
    }

    
    return (
      <div className="font-custom ">
        {/*navbar container*/}
        <div
          className={` ${
            textColor[location.pathname] || "text-white"
          } font-custom flex items-center   w-full pr-7 pl-2 2xl:px-40   sm:px-16 justify-between top-4 z-50 fixed lg:absolute `}
        >


          {/*logo*/}
          <NavLink to="/">
            <Logo />
          </NavLink>



          {/*middle*/}
          <div className=" hidden lg:flex gap-10 text-[16px] font-medium 2xl:text-xl">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `duration-500 ${isActive ? "text-[#2D5980]" : ""}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `duration-500 ${isActive ? "text-[#2D5980]" : ""}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `duration-500 ${isActive ? "text-[#2D5980]" : ""}`
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/academics"
              className={({ isActive }) =>
                `duration-500 ${isActive ? "text-[#2D5980]" : ""}`
              }
            >
              Academics
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `duration-500 ${isActive ? "text-[#2D5980]" : ""}`
              }
            >
              Careers
            </NavLink>
          </div>

          <div className="flex items-center gap-3">

            
            {/*sign up*/}
            <NavLink
              to="/signin"
              className="bg-[#2D5980] hidden hover:bg-white hover:text-black duration-300   text-[#FFFFFF] rounded-lg font-semibold w-[117px] h-[40px] 2xl:text-xl lg:flex justify-center items-center"
            >
              Sign In
            </NavLink>

            {/*menu*/}
            <div
              className="lg:hidden z-[10]  "
              onClick={() => {
                setToggle(!toggle);
                handler();
              }}
            >
              {toggle ? (
                <img className=" w-[40px] " src={burgerbar} alt="noimage" />
              ) : (
                <img
                  className="bg-white rounded-full w-[40px] p-1"
                  src={burgercross}
                  alt="noimage"
                />
              )}
            </div>
          </div>

          {/*sidebar*/}
          <div
            ref={aniRef}
            className="bg-[#1B3363]  h-[2800px] w-full right-0 translate-x-[100%] lg:hidden  absolute"
          >
            <div
              ref={anitwo}
              onClick={() => {
                setToggle(!toggle);
                handler();
              }}
              className="text-white text-4xl  font-medium absolute w-full py-16 px-[15vw] flex flex-col  gap-5 top-[50%]"
            >
              <NavLink
                to="/about"
                className="translate-x-[160%] hover:text-gray-400 "
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className="translate-x-[160%] hover:text-gray-400"
              >
                Services
              </NavLink>
              <NavLink
                to="/blogs"
                className="translate-x-[160%] hover:text-gray-400"
              >
                Blogs
              </NavLink>
              <NavLink
                to="/academics"
                className="translate-x-[160%] hover:text-gray-400"
              >
                Academics
              </NavLink>
              <NavLink
                to="/careers"
                className="translate-x-[160%] hover:text-gray-400"
              >
                Careers
              </NavLink>
              <NavLink
                to="/signin"
                className="bg-white py-2 translate-x-[160%] mt-36 w-[120px] text-xl hover:text-white hover:bg-[#1B3363] flex justify-center items-center    text-[#1B3363] rounded-lg font-semibold"
              >
                Sign In
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}