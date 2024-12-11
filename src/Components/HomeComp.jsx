import PlayIcon from "../svg/PlayIcon";
import Form from "../Components/Form";
import { pic1 } from "../assets/assets";
export default function HomeComp(){
    return(
        <div className="font-custom scroll-smooth   w-full md:flex md:justify-center ">
        {/*lg*/}
        <div
          style={{ backgroundImage: `url(${pic1})` }}
          className=" hidden lg:block  lg:w-[96%]      bg-cover bg-center lg:rounded-b-[40px] "
        >
          <div className="bg-custom-gradient h-full   screen-full  rounded-b-[40px]">
            <div className="w-full  h-full pt-28 2xl:pt-48 pb-20 2xl:pb-40 flex justify-between  px-12 xl:px-20 2xl:px-40">
              {/*left*/}
              <div className=" w-[60%] pt-16 flex flex-col gap-7 custom-lg:gap-12 2xl:pr-40 custom-lg:pl-20">
                <div className="font-medium text-[48px] leading-[59.23px] tracking-[.5px]  text-white">
                  We raised Series A to Revolutionise the Radiology Experience!
                </div>
                <div className="text-white hidden font-normal text-[12px] leading-[18px] tracking-[0.75px]">
                  5C Network is India’s largest and most trusted radiology
                  interpretation platform. We are the market leaders in
                  teleradiology services, generating over 1Mn reports per year.
                </div>
                <a
                  className="flex gap-3  w-[220px] 2xl:w-[310px]  items-center"
                  href="https://www.youtube.com/watch?v=QRVRVRE6Nck"
                >
                 <PlayIcon />
                  
                  <div className="text-[#CACACA] underline font-medium 2xl:text-2xl">
                    Watch How We Work
                  </div>
                </a>
              </div>
              {/*right*/}
              <div className="  2xl:w-[40%]">
              
                <Form />
              </div>
            </div>
          </div>
        </div>

        {/*sm and md*/}
        <div className="   w-full  text-white bg-custom-gradient lg:hidden">
          <div className=" w-full flex flex-col gap-10 md:gap-16 pt-24 md:pt-36 px-10 md:px-20 custom-sm:px-12 ">
            <div className="text-[40px] custom-sm:text-[10vw] md:text-[50px] text-start   font-medium tracking-[0.5px] ">
              We raised Series A to Revolutionis the Radiology Experience!
            </div>
            <div className="leading-7 tracking-wide text-[12px]">
              5C Network is India’s largest and most trusted radiology
              interpretation platform. We are the market leaders in
              teleradiology services, generating over 1Mn reports per year.
            </div>
            
             
              <a className="flex gap-2 items-center" href="https://www.youtube.com/watch?v=QRVRVRE6Nck">
              <div><PlayIcon /></div>
              <span  className="underline text-xl">Watch How We Work</span>
              </a>
          
          </div>
          {/*form*/}
          <Form />
        </div>
      </div>
    )
}