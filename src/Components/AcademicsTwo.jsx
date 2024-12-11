import { one} from "../assets/assets"
import FiveCrise from "../buttons/fiveCrise"
export default function AcademicsTwo(){
    return(
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
           <FiveCrise />

          </div>

      </div>
    )
}