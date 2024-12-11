import ServicesCard from "../Components/ServicesCard";
import { nurse,sc2 } from "../assets/assets"
export default function ServicesUppertwocard(){
    return(
        <div className=" px-5 w-full md:px-10 lg:px-20 2xl:px-28 custom-lg:px-60 py-10 2xl:py-20 flex flex-col lg:flex-row gap-10 custom-lg:gap-20 ">
        <div className="lg:w-[50%]">
             <ServicesCard image={nurse} title={'Remote Radiology Interpretation'} />
         </div>  
         <div className="lg:w-[50%]">
             <ServicesCard image={sc2} title={'lorem ipsum'} />
         </div>
     </div>
    )
}