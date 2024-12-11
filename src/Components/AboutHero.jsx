export default function AboutHero(){
    return(
        <div className="w-full font-custom  flex justify-center lg:px-[24px]  ">
        <div className="pt-40 2xl:pt-64 pb-16 px-10 md:px-20 lg:px-40 2xl:px-80 w-full h-full flex flex-col gap-10 text-white bg-custom-gradient   lg:rounded-b-[40px]">
          <h1 className="text-[48px] font-medium leading-[60px] tracking-[0.5px] text-[#FFFFFF] text-center">
            About Us
          </h1>
          <p className="text-[16px] 2xl:text-2xl leading-6 tracking-[0.5px] text-justify lg:text-center">
            An increasing dependence on radiology for diagnosis, therapeutics,
            monitoring and prognosis has placed an immense burden on radiology
            fraternity. While the number of diagnostic centres and hospitals
            providing radiology services is increasing, there is a shortage of
            radiology experts, especially sub-specialists such as cardio
            vascular radiologist, neuro radiologist etc.
          </p>
        </div>
      </div>
    )
}