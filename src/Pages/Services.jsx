import { useEffect } from "react"
import { nurse,sc2,sc3,sc4 } from "../assets/assets"
import { useNavigate } from "react-router-dom"
import ServicesCard from "../Components/ServicesCard";
import BookDemo from '../buttons/BookDemo.jsx'

export default function Services(){
    const navigate=useNavigate();
    useEffect(()=>{
        window.scrollTo(0,0)
},[])

   
   
    return(
        
        <div className="font-custom">
            {/*hero*/}
             <div className="w-full  flex justify-center lg:px-[24px]  ">
                <div className="pt-40 2xl:pt-64 pb-16 px-10 md:px-20 lg:px-40 2xl:px-80 w-full h-full flex flex-col gap-10 text-white bg-custom-gradient  lg:rounded-b-[40px]">
                <h1 className="text-[48px] font-medium leading-[60px] tracking-wide text-center">
                Services
                </h1>
                <p className="text-[16px] 2xl:text-2xl leading-6 tracking-wide text-justify lg:text-center">
                Lörem ipsum fyngen plankning. Triage plötslig sportbarnsdöd mamorel utom ongar. Diheten trelingar geonde polyrörade. Per täns. Visual search kontragt om filotes. Gigarade sosade inaskad teskap. Padda nevis såväl som hemitår, inte heterotesa. Div piligen, åsiktstaliban. Du kan vara drabbad. 
                </p> 
            </div>
        </div>


        {/*upper two card*/}
        <div className=" px-5 w-full md:px-10 lg:px-20 2xl:px-28 custom-lg:px-60 py-10 2xl:py-20 flex flex-col lg:flex-row gap-10 custom-lg:gap-20 ">
           <div className="lg:w-[50%]">
                <ServicesCard image={nurse} title={'Remote Radiology Interpretation'} />
            </div>  
            <div className="lg:w-[50%]">
                <ServicesCard image={sc2} title={'lorem ipsum'} />
            </div>
        </div>


        <div className="px-5 lg:px-40 2xl:px-60 custom-lg:px-96 flex flex-col items-center gap-10">
            <div className="flex flex-col gap-5 text-center 2xl:text-xl">
            <p>Every dream has its roots in reality. Kalyan, one of our co-founders, from personal experience decided to set on this path of not having any patient left without an accurate and timely diagnosis. He believes that the transition of India using advanced high-tech will be instrumental in assisting healthcare professionals to make better decisions contributing to the dream of healthier India, one image at a time.</p>
            <p>Syed Ahmed, our co-founder, 5C Network is well on its way realize this enormous mission with a team of 300+ expert radiologist experts and presence in 1000+ hospitals throughout the nation.</p>
            <p>We invite healthcare organizations to be a part of it. Let’s make India healthier together!</p>
            </div>

            {/*bookdemo button*/}
            <BookDemo />
        </div>

        {/*lower two card*/}
        <div className=" px-5 w-full md:px-10 lg:px-20 2xl:px-28 custom-lg:px-60 py-10 2xl:py-20 flex flex-col lg:flex-row gap-10 custom-lg:gap-20 ">
           <div className="lg:w-[50%]">
               <ServicesCard image={sc3} title={'lorem ipsum'} />
           </div>  
           <div className="lg:w-[50%]">
               <ServicesCard image={sc4} title={'lorem ipsum'} />
           </div>
       </div>
    </div>
    )
} 