
export default function Singlejob({setModal,title,service,location}){
    return(
        <div onClick={()=>setModal(true)} className="hover:bg-[#2D5980] duration-300 relative md:hover:pb-16 md:hover:bg-white group p-4 md:p-0 md:py-10 md:flex bg-white rounded-lg md:rounded-none shadow-md md:shadow-none border border-gray-200 md:border-[#CACACA] md:border-0  md:border-b-2 md font-medium text-[#000000] leading-[24px]">
        <div className="flex justify-between items-center md:w-[50%]">
          <h3 className="text-lg md:text-[16px]  text-[#000000] group-hover:text-white leading-[24px] font-medium ">{title}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#2D5980] group-hover:text-white md:hidden"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L10 10.586 7.707 8.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="mt-2 md:mt-0 md:flex md:w-[50%]">
          <p className="text-sm text-gray-600  md:text-[16px] group-hover:text-white  md:text-[#000000] leading-[24px] font-medium  md:w-[50%]">
            <span className="font-medium md:hidden">Service: </span>
            {service}
            
          </p>
          <p className="text-sm md:flex justify-around text-gray-600 group-hover:text-white md:text-[16px]  md:text-[#000000] leading-[24px] font-medium  md:w-[50%]">
            <span className="font-medium md:hidden">Location: </span>
            {location} <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clip-path="url(#clip0_1579_226)">
<path d="M5 12H19" stroke="#2D5980" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 16L19 12" stroke="#2D5980" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8L19 12" stroke="#2D5980" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1579_226">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
                  </svg>
            
          </p>
        </div>

        <div className="w-full hidden md:flex rounded-full text-white items-center px-10 h-[50px]  top-10 group-hover:opacity-[10] opacity-0 duration-300 bg-[#2D5980] absolute">
              <div className="w-[50%]">{title}</div>
                  <div className="w-[25%]">{service}</div>
                  <div className="w-[25%] flex justify-around">{location}<svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20" fill="none">
<g clip-path="url(#clip0_226_686)">
<path d="M4 10H27" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.5 13.3333L27.8333 10" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.5 6.66675L27.8333 10.0001" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_226_686">
<rect width="31" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
                  </div>
              </div>
          
           </div>
    )
}