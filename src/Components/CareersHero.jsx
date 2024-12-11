
export default function CareersHero({scrollTo}){
    return(
        <div className="w-full font-custom  flex justify-center lg:px-[24px] custom-lg:px-[70px]  ">
        <div className="pt-40 2xl:pt-64 pb-16 px-10 md:px-20 lg:px-40 2xl:px-80 w-full h-full flex flex-col items-center gap-10 text-white bg-custom-gradient  lg:rounded-b-[40px]">
          <h1 className="text-[48px] font-medium leading-[60px] tracking-wide text-center">
            Career
          </h1>
          <p className="text-[16px] 2xl:text-2xl leading-6 tracking-wide text-justify lg:text-center">
            We’re always looking for creative & talented people to work with us.
          </p>
          <button
            onClick={scrollTo}
            className="bg-[#2D5980] text-[#FFFFFF] hover:text-black hover:bg-[#FFFFFF] hover:border-black border-2 border-[#2D5980]  duration-300 text-[#FFFFF] rounded-[8px] w-[138px] h-[40px] flex justify-center items-center font-semibold text-[14px] leading-[24px]"
          >
            View Positions
          </button>
        </div>
      </div>
    )
}