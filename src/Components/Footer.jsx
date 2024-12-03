import { NavLink } from "react-router-dom"

export default function Footer(){
    return(
       
      <div className="w-full font-custom flex flex-col gap-7 text-white bg-custom-gradient3 px-5 lg:px-20 py-8">

        <div className=" md:flex-row lg:justify-around flex flex-col gap-10">
            {/*first*/}
            <div className="flex flex-col gap-5">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="108" height="50" viewBox="0 0 108 50" fill="none">
<path d="M19.3845 19.1376L42.6361 24.4871L41.217 20.3748L20.4433 17.5339L19.3845 19.1376Z" fill="white"/>
<path d="M13.6337 17.8142L14.5489 16.7282L5.86646 15.5417L6.09556 16.0803L13.6337 17.8142Z" fill="white"/>
<path d="M27.2764 3.69189L6.01221 28.9285L10.0337 30.8688L27.8346 3.91594L27.2764 3.69189Z" fill="white"/>
<path d="M41.5216 21.5825L21.0793 44.2675L23.962 45.6592L42.0799 21.8077L41.5216 21.5825Z" fill="white"/>
<path d="M6.13687 15.9724L27.6579 4.39369L27.4388 3.18848L5.84326 15.6633L6.13687 15.9724Z" fill="white"/>
<path d="M22.5439 44.9352L9.04588 27.1472L6.9873 29.2541L22.2893 45.2365L22.5439 44.9352Z" fill="white"/>
<path d="M7.88953 36.5316C12.2468 36.5316 15.7791 33.1276 15.7791 28.9284C15.7791 24.7293 12.2468 21.3252 7.88953 21.3252C3.53226 21.3252 0 24.7293 0 28.9284C0 33.1276 3.53226 36.5316 7.88953 36.5316Z" fill="white"/>
<path d="M27.55 7.60212C29.7286 7.60212 31.4948 5.90033 31.4948 3.80106C31.4948 1.70179 29.7286 0 27.55 0C25.3714 0 23.6052 1.70179 23.6052 3.80106C23.6052 5.90033 25.3714 7.60212 27.55 7.60212Z" fill="white"/>
<path d="M5.99785 18.5219C7.55429 18.5219 8.81602 17.3063 8.81602 15.8068C8.81602 14.3074 7.55429 13.0918 5.99785 13.0918C4.44142 13.0918 3.17969 14.3074 3.17969 15.8068C3.17969 17.3063 4.44142 18.5219 5.99785 18.5219Z" fill="white"/>
<path d="M41.8011 27.6691C45.2248 27.6691 48.0002 24.9944 48.0002 21.6949C48.0002 18.3954 45.2248 15.7207 41.8011 15.7207C38.3775 15.7207 35.6021 18.3954 35.6021 21.6949C35.6021 24.9944 38.3775 27.6691 41.8011 27.6691Z" fill="white"/>
<path d="M22.6366 49.8498C25.4374 49.8498 27.7079 47.6613 27.7079 44.9617C27.7079 42.262 25.4374 40.0735 22.6366 40.0735C19.8357 40.0735 17.5652 42.262 17.5652 44.9617C17.5652 47.6613 19.8357 49.8498 22.6366 49.8498Z" fill="white"/>
<path d="M84.8448 17.6006H74.7681L74.4836 21.6334L78.0084 22.0204C80.833 22.3004 82.8327 23.0424 84.0077 24.2464C85.1826 25.4512 85.7705 27.1173 85.7705 29.2469C85.7705 31.4193 85.135 33.1611 83.8658 34.473C82.5958 35.7849 80.3705 36.4412 77.1893 36.4412C74.8156 36.4412 72.0853 36.204 69 35.7313L69.4985 31.9249C72.1329 32.1827 74.2458 32.312 75.8364 32.312C77.118 32.312 78.0854 32.1942 78.7381 31.9571C79.3907 31.7207 79.8294 31.3551 80.0557 30.8601C80.2812 30.366 80.3943 29.6775 80.3943 28.7955C80.3943 27.9786 80.2098 27.3712 79.8425 26.9727C79.4744 26.5749 78.9218 26.2949 78.1871 26.1343C77.4508 25.9729 76.2759 25.8276 74.6623 25.699L71.6713 25.3762C71.149 25.3334 70.7276 25.1399 70.407 24.7956C70.0864 24.4522 69.938 24.0429 69.9618 23.5694L70.566 13.7942H85.0227L84.8448 17.6006Z" fill="white"/>
<path d="M103.307 13.5686C104.339 13.6765 105.448 13.87 106.636 14.1492L106.173 17.8271C104.25 17.72 101.947 17.6656 99.2654 17.6656C98.0552 17.6656 97.1164 17.8806 96.4523 18.3105C95.7874 18.7412 95.3184 19.4717 95.0462 20.5044C94.7731 21.537 94.637 23.0103 94.637 24.9242C94.637 26.8389 94.7731 28.3114 95.0462 29.3441C95.3192 30.3768 95.7874 31.108 96.4523 31.5379C97.1164 31.9686 98.0544 32.1828 99.2654 32.1828C101.069 32.1828 102.499 32.1667 103.556 32.1346C104.612 32.1025 105.651 32.0214 106.672 31.8929L107.135 35.5378C105.971 35.8607 104.803 36.0917 103.627 36.2316C102.452 36.3716 100.998 36.4412 99.2654 36.4412C96.7016 36.4412 94.6723 36.0702 93.1768 35.3282C91.6812 34.5863 90.6006 33.3822 89.9365 31.7154C89.2715 30.0494 88.9395 27.7851 88.9395 24.925C88.9395 22.0649 89.2715 19.8014 89.9365 18.1346C90.6006 16.4685 91.6812 15.2637 93.1768 14.5217C94.6723 13.7797 96.7016 13.4087 99.2654 13.4087C100.927 13.4072 102.274 13.4607 103.307 13.5686Z" fill="white"/>
                  </svg>
                  </div>
          
            <div className=" text-[14px] leading-[21px] text-[#FFFFFF] w-full md:max-w-[350px]">
            Lörem ipsum pobesk dygnis. Gädaren anar och behet och reskap. Morotsaktivism häliga makrogt. Mona löns. Branded content kreativ skolgång eller kåren. Visaboss nysade. Polybor mobilblottare, biodevis. Pore homokompetens. 

            </div>
            </div>

            {/*second*/}
            <div className="flex justify-between md:gap-5 lg:gap-10 2xl:gap-14 custom-lg:gap-20 lg:justify-between">
                    <div className="flex flex-col gap-5">
                    <div className="text-[14px] leading-[21px] opacity-60 font-medium ">Links</div>
                      <div className="text-[14px] leading-[21px] text-[#FFFFFF] font-medium flex flex-col gap-3">
                         <NavLink to='/about'>About Us</NavLink>
                            <NavLink to='/services'>Services</NavLink>
                          <NavLink to='/blogs'>Blogs</NavLink>
                           <NavLink to='/academics'>Academics</NavLink>
                         <NavLink to='/careers'>Careers</NavLink>
                     </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="text-[14px] leading-[21px] opacity-60 font-medium">Get In Touch</div>
                    <div className="font-medium text-[12px] leading-[18px">Phone Number <br></br>
                    <span className="font-medium text-[14px] leading-[21px]">+91-9587274858</span></div>
                    <div className="font-medium text-[14px] leading-[21px]"><div>Email Id</div>
                       <div>communication@5cnetwork.com</div></div>
                    

                  </div>

            </div>
            {/*third*/}
            <div className="flex justify-between gap-10 pr-20 md:pr-0   md:gap-5 lg:gap-10 2xl:gap-14 custom-lg:gap-20">
              <div className="flex flex-col gap-5">
                <div className="text-[14px] leading-[21px] opacity-60 font-medium">Legal</div>
                <div className="text-[14px] leading-[21px] font-medium flex flex-col gap-3">
                  <NavLink to=''>Terms of Services</NavLink>
                <NavLink to=''>Privacy Policy</NavLink>
                 </div>

              </div>


              <div className="flex flex-col gap-5">
                <div className="text-[14px] leading-[21px] opacity-60 font-medium">Our Socials</div>
                <div className="flex gap-4">
                  <a href='https://www.linkedin.com/company/5c-network/' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M15.2477 9.64101V15.2478H11.9657V9.98288C11.9657 8.68375 11.4871 7.79487 10.3247 7.79487C9.43581 7.79487 8.88881 8.41025 8.68368 8.95725C8.6153 9.16238 8.54693 9.43588 8.54693 9.77775V15.2478H5.26491C5.26491 15.2478 5.33328 6.35899 5.26491 5.4701H8.54693V6.83761C8.95718 6.15386 9.77769 5.1966 11.4871 5.1966C13.6067 5.1966 15.2477 6.63249 15.2477 9.64101ZM1.84614 0.752197C0.752128 0.752197 0 1.50433 0 2.46158C0 3.41884 0.683753 4.17097 1.77776 4.17097C2.94014 4.17097 3.6239 3.41884 3.6239 2.46158C3.69227 1.43595 3.00852 0.752197 1.84614 0.752197ZM0.205126 15.2478H3.48715V5.4701H0.205126V15.2478Z" fill="white"/>
</svg></a>
                  <a href='https://x.com/5C_Network' ><svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
<g clip-path="url(#clip0_319_1949)">
<path d="M16.185 2.02737C15.5882 2.29175 14.9551 2.46529 14.307 2.54222C14.9821 2.13756 15.5005 1.49676 15.7446 0.733264C15.1028 1.11413 14.4006 1.38248 13.6683 1.52671C13.0719 0.891268 12.2221 0.494141 11.2817 0.494141C9.47587 0.494141 8.01181 1.95814 8.01181 3.7638C8.01181 4.0201 8.04076 4.26962 8.09648 4.50899C5.37903 4.37259 2.96974 3.07089 1.35701 1.09266C1.07562 1.57558 0.914377 2.13731 0.914377 2.73646C0.914377 3.87088 1.49167 4.87163 2.36898 5.45802C1.84973 5.44175 1.34192 5.30151 0.887918 5.049C0.887731 5.06269 0.887731 5.07639 0.887731 5.09015C0.887731 6.67436 2.0148 7.99592 3.51055 8.29631C3.02906 8.42725 2.52401 8.44642 2.03398 8.35233C2.45003 9.65136 3.6576 10.5966 5.08836 10.6231C3.96931 11.5 2.55941 12.0228 1.02756 12.0228C0.763594 12.0228 0.503366 12.0073 0.247559 11.9771C1.69456 12.9048 3.41325 13.4461 5.25975 13.4461C11.2741 13.4461 14.5628 8.46377 14.5628 4.14299C14.5628 4.00118 14.5597 3.86017 14.5534 3.71997C15.1935 3.25721 15.746 2.68405 16.185 2.02737Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_319_1949">
<rect width="15.939" height="13.0114" fill="white" transform="translate(0.247559 0.494263)"/>
</clipPath>
</defs>
</svg></a>
                  <a href='https://www.facebook.com/5cnetwork?checkpoint_src=any' ><svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
<path d="M7.70443 0H5.14734C3.62987 0 1.94202 0.638225 1.94202 2.83785C1.94943 3.60429 1.94202 4.33831 1.94202 5.1644H0.186523V7.95792H1.99635V16H5.322V7.90485H7.51704L7.71564 5.15656H5.26469C5.26469 5.15656 5.27018 3.934 5.26469 3.57897C5.26469 2.70972 6.16917 2.7595 6.22358 2.7595C6.65399 2.7595 7.49086 2.76076 7.70569 2.7595V0H7.70443Z" fill="white"/>
</svg></a>
                  
                </div>
              </div>
            </div>

            </div>

            {/*line*/}
            <div className=" lg:px-10 2xl:px-40 custom-lg:px-60">
      <div className="w-full h-[2px] bg-custom-gradient4"></div>
      </div>

        {/*copywrite*/}
        <div className="text-[12px] leading-[16.86px] text-[#FFFFFF] 2xl:px-20 custom-lg:px-64">© Copyrights 2016 - 2023 5C Network Private limited.   All Right Reserved</div>
      </div>
    )
}