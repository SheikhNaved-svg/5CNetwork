import BookDemo from "../buttons/BookDemo";
export default function IsHero(){
    return(
        <div className="w-full  flex justify-center lg:px-[24px]   ">
        <div className="pt-40 2xl:pt-64 pb-16 px-10 md:px-20 lg:px-40 2xl:px-80 w-full h-full flex flex-col items-center gap-10 text-white bg-custom-gradient  lg:rounded-b-[40px]">
          <h1 className="text-[48px] font-medium leading-[60px] tracking-[0.5px] text-center">
          Remote Radiology Interpretation
          </h1>
          <p className="text-[16px] 2xl:text-2xl leading-6 tracking-[0.5px] text-justify lg:text-center">
          Radio diagnosis has become increasingly indispensable today. While diagnostic imaging centres have blossomed all over the country, there is a huge deficiency of qualified and experienced radiologists to review and provide radiology interpretation services.
          </p>
          <BookDemo />
        </div> 
      </div>
    )
}