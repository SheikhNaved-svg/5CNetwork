import { certificate } from "../assets/assets"
export default function AboutAward(){
    return(
        <div className="py-20  flex flex-col gap-10 2xl:gap-20">
          <h1 className="font-semibold text-[36px]    leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2 text-center ">
            Awards & Recognitions
          </h1>
          <div className="">
            <div className="grid md:grid-cols-2 justify-items-center w-full lg:grid-cols-3 gap-y-7 lg:px-20 2xl:px-40">
              <div className="w-[309px] 2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
            </div>
          </div>
        </div>
    )
}