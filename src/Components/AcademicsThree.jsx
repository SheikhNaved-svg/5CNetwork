import {two } from "../assets/assets"
import FiveCrise from "../buttons/fiveCrise"
export default function AcademicsThree(){
    return(
        <div className="px-5 lg:px-10 xl:px-20 2xl:px-40 custom-lg:px-60 py-20 flex flex-col-reverse lg:flex-row lg:items-center gap-10 lg:gap-0 w-full">
        {/*content*/}

        <div className="w-full lg:w-[50%] flex flex-col  gap-5 custom-lg:gap-10">
           <div className="text-[16px] font-normal leading-[24px] text-[#2D5980]">02.</div>
           <h1 className="font-medium text-[32px] leading-6 text-[#000000]">Fellowship Program</h1>
           <div className="flex flex-col gap-5 text-[16px] font-normal leading-6 text-[#000000]">
            <p>Owing to the success of academic initiatives, 5C will soon organise a fellowship program under 5C-RAISE from 2022 onwards. The duration of this program will be a minimum of 6 months. This fellowship will deal with all the training associated with AI tools, the software employed for tele-radiology and efficient interpretation of images.</p>
            <p>Lastly, as a service to the medical fraternity who we work hand-in-glove with, we have set up centers of excellence in neurology, cardiology, oncology and mammography. The sub-specialists from these fields will deliver sessions to train budding radiologists.</p>
           </div>
          <FiveCrise />

         </div>
       {/*image*/}
         <div className="w-full flex justify-center lg:justify-end lg:w-[50%]">
           <img className="rounded-2xl sm:w-[500px] w-full lg:w-[90%] xl:w-[510px] xl:h-[510px] 2xl:w-[80%]" src={two} alt='noimage' loading="lazy" />
         </div>

        

     </div>
    )
}