
export default function AboutMissionethics(){
    return(
        <div className="md:flex-row flex flex-col gap-6 pb-10 md:gap-10 md:justify-between px-5 custom-sm:px-10 lg:px-14 xl:px-20 2xl:px-40 custom-lg:px-60">
        <div className="flex flex-col items-start gap-2 lg:gap-6">
          <h1 className=" font-semibold text-[36px] text-center   leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
            Vision 
          </h1>
          <p className="text-[16px] custom-lg:text-[20px] text-[#121212] leading-[24.56px] lg:text-start">
            Non sagittis sed quam sed turpis ac faucibus at eu. Dignissim nibh
            orci nisl vitae at. Eu cras etiam nascetur in.
          </p>
        </div>

        <div className="hidden md:block lg:px-20 2xl:px-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1"
            height="186"
            viewBox="0 0 1 186"
            fill="none"
          >
            <line
              x1="0.5"
              y1="185.394"
              x2="0.5"
              y2="3.05176e-05"
              stroke="url(#paint0_linear_319_1989)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_319_1989"
                x1="1"
                y1="-0.0749985"
                x2="1"
                y2="185.394"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2D5980" stopOpacity="0" />
                <stop offset="0.5" stopColor="#2D5980" />
                <stop offset="1" stopColor="#2D5980" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="w-full mt-4 md:hidden h-[2px] bg-custom-gradient4"></div>

        <div className="flex flex-col items-start gap-2 lg:gap-6">
          <h1 className="font-semibold text-[36px]  text-center  leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
            Ethics
          </h1>
          <p className="text-[#121212] text-[16px] custom-lg:text-[20px] leading-[24.56px]  lg:text-start">
            Non sagittis sed quam sed turpis ac faucibus at eu. Dignissim nibh
            orci nisl vitae at. Eu cras etiam nascetur in.
          </p>
        </div>
      </div>
    )
}