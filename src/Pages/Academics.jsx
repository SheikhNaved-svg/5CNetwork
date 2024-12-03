import { one,two } from "../assets/assets"
import {useEffect} from 'react';
export default function Academics(){
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return(
   <div className="font-custom">
        <div className="w-full  flex justify-center lg:px-[24px] custom-lg:px-[70px]  ">
          <div className="pt-40 2xl:pt-64 pb-16 px-10 md:px-20 lg:px-40 2xl:px-80 w-full h-full flex flex-col items-center gap-10 text-white bg-custom-gradient  lg:rounded-b-[40px]">
            <h1 className="text-[48px] font-medium leading-[60px] tracking-wide text-center">
            Academics
            </h1>
            <p className="text-[16px] 2xl:text-2xl leading-6 tracking-[0.5px] text-justify lg:text-center">
            5C Network is a leading teleradiology service provider in India known to provide accurate results promptly to thousands of hospitals and diagnostic centers. 
            </p> 
           
          </div>
        </div>
        {/*next*/}
        <div className=" leading-[24px] text-[#000000] px-5 lg:px-10 xl:px-20 2xl:px-40 custom-lg:px-96 py-16 flex flex-col gap-5 lg:text-center">
          <p>With Radiology becoming more and more sub specialized and physicians expecting detailed reports from experienced specialists, 5C felt the necessity to play a role in upskilling passionate and ambitious radiologists across India, given that many of India’s leading Radiologists are on 5C Network. </p>
          <p>India has some of the world’s most talented Radiologists and 5C Network has launched multiple academic programs to enhance their skills and prove their excellence by offering a suitable platform.</p>
          <p>Our first academic program was Academic Friday, where the radiologists discuss rare and unique cases. This program is conducted weekly on a digital platform and is free of cost for the participating radiologists.</p>
        </div>

        <div className="px-5 lg:px-10 xl:px-20 2xl:px-40 ">
        <div className="w-full h-[2px] bg-custom-gradient4"></div>
        </div>

        {/*next*/}
        <div className="px-5 lg:px-10 xl:px-20 2xl:px-40 custom-lg:px-60 pt-20 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0 w-full">
          {/*image*/}
            <div className="w-full flex justify-center lg:justify-start  lg:w-[50%]">
              <img className="rounded-2xl sm:w-[500px] w-full lg:w-[90%]  xl:w-[510px] xl:h-[510px] 2xl:w-[80%] " src={one} alt='noimage' loading="lazy" />
            </div>

            {/*content*/}

            <div className="w-full lg:w-[50%] flex flex-col  gap-5 custom-lg:gap-10">
              <div className="text-[16px] font-normal leading-[24px] text-[#2D5980]">01.</div>
              <h1 className="font-medium text-[32px] leading-6 text-[#000000]">5C RAISE Program</h1>
              <div className="flex flex-col gap-5 text-[16px] font-normal leading-6 text-[#000000]">
                <p>Seeing the enthusiasm in the radiology fraternity towards this educational initiative, in December 2021, we started 5C-RAISE. RAISE stands for Radiology Academy of Informatics and Specialist Education, and its objective is to give Radiologist’s access to the very best in the business through a series of Masterclasses. Each masterclass is conducted by a renowned expert or a panel of senior expert radiologists. The aim of this program is to hone the skills of budding radiologists and pass on the invaluable experience of senior experts on the 5C platform.</p>
                <p>The 5C-RAISE program utilizes a state-of-the-art learning management system (LMS) for enhancing the learner's learning process.</p>
                <p>Currently, our masterclass program has a capacity of 20 radiologists per batch, and are usually filled up in 24-48 hours of launch. The batches are kept small to promote personal interaction and doubt solving amongst the radiologist.</p>
              </div>
              <button className="text-[#FFFFFF] bg-[#2D5980] rounded-[8px] w-[117px] h-[40px] font-semibold text-[14px] leading-6 hover:bg-white hover:text-black border-2 border-[#2D5980] hover:border-black duration-300">5C Raise</button>

            </div>

        </div>

        <div className="px-5 lg:px-10 xl:px-20 2xl:px-40 custom-lg:px-60 py-20 flex flex-col-reverse lg:flex-row lg:items-center gap-10 lg:gap-0 w-full">
           {/*content*/}

           <div className="w-full lg:w-[50%] flex flex-col  gap-5 custom-lg:gap-10">
              <div className="text-[16px] font-normal leading-[24px] text-[#2D5980]">02.</div>
              <h1 className="font-medium text-[32px] leading-6 text-[#000000]">Fellowship Program</h1>
              <div className="flex flex-col gap-5 text-[16px] font-normal leading-6 text-[#000000]">
               <p>Owing to the success of academic initiatives, 5C will soon organise a fellowship program under 5C-RAISE from 2022 onwards. The duration of this program will be a minimum of 6 months. This fellowship will deal with all the training associated with AI tools, the software employed for tele-radiology and efficient interpretation of images.</p>
               <p>Lastly, as a service to the medical fraternity who we work hand-in-glove with, we have set up centers of excellence in neurology, cardiology, oncology and mammography. The sub-specialists from these fields will deliver sessions to train budding radiologists.</p>
              </div>
              <button className="text-[#FFFFFF] bg-[#2D5980] rounded-[8px] w-[117px] h-[40px] font-semibold text-[14px] leading-6 hover:bg-white hover:text-black border-2 border-[#2D5980] hover:border-black duration-300">5C Raise</button>

            </div>
          {/*image*/}
            <div className="w-full flex justify-center lg:justify-end lg:w-[50%]">
              <img className="rounded-2xl sm:w-[500px] w-full lg:w-[90%] xl:w-[510px] xl:h-[510px] 2xl:w-[80%]" src={two} alt='noimage' loading="lazy" />
            </div>

           

        </div>

   </div>
  )
}