import ServicesCard from "../Components/ServicesCard";
import {sc3,sc4 } from "../assets/assets"
export default function ServiceLowertwocard(){
    return(
        <div className=" px-5 w-full md:px-10 lg:px-20 2xl:px-28 custom-lg:px-60 py-10 2xl:py-20 flex flex-col lg:flex-row gap-10 custom-lg:gap-20 ">
        <div className="lg:w-[50%]">
            <ServicesCard image={sc3} title={'lorem ipsum'} />
        </div>  
        <div className="lg:w-[50%]">
            <ServicesCard image={sc4} title={'lorem ipsum'} />
        </div>
    </div>
    )
}