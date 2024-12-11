import {  person1, person2 } from "../assets/assets";
export default function HomeCompfour(){
    return(
        <div className="w-full flex justify-center font-custom">
        <div className="flex flex-col gap-10     w-full lg:w-[96%] lg:rounded-t-[40px] px-7  md:px-10 2xl:px-40 custom-lg:px-60 pt-16  lg:pt-12 bg-custom-gradient-vertical text-white">
          <div className="font-semibold text-[36px]  leading-[54px] tracking-[0.5px] text-center">
            Leadership Team
          </div>
          <div className="lg:text-center text-justify  text-[14px] font-normal leading-[21px]">
            Meet our leadership team that is diverse, enthused, innovative, and
            most importantly driven to make a change in the healthcare
            <br className="hidden lg:block"></br> industry. Let's learn more
            about each one of them.
          </div>
          <div className="w-full  pt-10 flex flex-col lg:flex-row gap-16 lg:gap-10 2xl:gap-20 custom-lg:gap-40 ">
            {/*left card*/}
            <div className="flex flex-col  lg:w-[50%] custom-sm:flex-row gap-10 lg:gap-5 w-full">
              <div className="w-full custom-sm:w-[193px] custom-sm:h-[237px] ">
                <img
                  className="rounded-2xl"
                  src={person1}
                  alt="image"
                  loading="lazy"
                  width="100%"
                />
              </div>

              <div className="flex flex-col gap-7 custom-sm:w-[calc(100%-193px)] ">
                <div>
                  <div className="font-semibold text-[24px] leading-9 tracking-[0.5px]">
                    Kalyan Sivasailam
                  </div>
                  <div className="font-normal text-[12px] 2xl:text-[16px] leading-[18px] tracking-[0.5px]">
                    Co-Founder & CEO @5C Network
                  </div>
                </div>

                <div className="text-justify lg:text-start font-normal text-[12px] 2xl:text-[16px] leading-[18px] tracking-[0.5px]">
                  Kalyan doesn’t believe in following the norms and has a unique
                  way of approaching problems. One of the primary career aims of
                  Kalyan is to make India healthier by making accurate and
                  timely diagnoses possible in every part of the country. He
                  sees 5C Network as getting prepared to lead the next big
                  health transformation in India.
                </div>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/kalyan-sivasailam-3925074a/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M27.2988 4.31035C28.0609 4.31035 28.7918 4.6131 29.3307 5.152C29.8696 5.69089 30.1724 6.4218 30.1724 7.18391V27.2989C30.1724 28.061 29.8696 28.7919 29.3307 29.3308C28.7918 29.8697 28.0609 30.1724 27.2988 30.1724H7.18387C6.42175 30.1724 5.69085 29.8697 5.15195 29.3308C4.61305 28.7919 4.3103 28.061 4.3103 27.2989V7.18391C4.3103 6.4218 4.61305 5.69089 5.15195 5.152C5.69085 4.6131 6.42175 4.31035 7.18387 4.31035H27.2988ZM26.5804 26.5805V18.9655C26.5804 17.7233 26.0869 16.5319 25.2085 15.6535C24.3301 14.7751 23.1388 14.2816 21.8965 14.2816C20.6752 14.2816 19.2528 15.0287 18.5632 16.1494V14.5546H14.5546V26.5805H18.5632V19.4971C18.5632 18.3908 19.454 17.4856 20.5603 17.4856C21.0938 17.4856 21.6054 17.6976 21.9826 18.0748C22.3599 18.452 22.5718 18.9636 22.5718 19.4971V26.5805H26.5804ZM9.88502 12.2989C10.5252 12.2989 11.1392 12.0445 11.5918 11.5919C12.0445 11.1392 12.2988 10.5252 12.2988 9.88506C12.2988 8.54885 11.2212 7.4569 9.88502 7.4569C9.24103 7.4569 8.62341 7.71272 8.16805 8.16809C7.71268 8.62346 7.45685 9.24107 7.45685 9.88506C7.45685 11.2213 8.54881 12.2989 9.88502 12.2989ZM11.8821 26.5805V14.5546H7.90226V26.5805H11.8821Z"
                        fill="#010101"
                      />
                    </svg>
                  </a>
                  <a href="https://x.com/KalSivasailam">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M32.4312 8.12643C31.3347 8.61149 30.172 8.93013 28.9814 9.07183C30.2358 8.3206 31.1744 7.13899 31.6222 5.74712C30.4441 6.44827 29.1524 6.93965 27.8076 7.20546C26.9033 6.2379 25.7047 5.59621 24.398 5.38015C23.0914 5.16409 21.75 5.38576 20.5824 6.0107C19.4148 6.63565 18.4863 7.62885 17.9414 8.8359C17.3964 10.043 17.2656 11.3962 17.5691 12.6853C15.1796 12.5658 12.842 11.945 10.7081 10.8633C8.57413 9.7816 6.69156 8.26317 5.18259 6.40661C4.64853 7.32392 4.36787 8.3667 4.36937 9.42816C4.36937 11.5115 5.43115 13.352 7.04179 14.4296C6.08779 14.3995 5.15479 14.1419 4.32052 13.6782V13.7514C4.32048 15.1392 4.80046 16.4842 5.67905 17.5584C6.55763 18.6326 7.78074 19.3699 9.14092 19.6451C8.25535 19.8854 7.32669 19.9207 6.42541 19.7486C6.80892 20.9431 7.55646 21.9877 8.56334 22.7362C9.57021 23.4847 10.786 23.8994 12.0404 23.9224C10.7937 24.9015 9.36634 25.6252 7.83979 26.0522C6.31324 26.4792 4.71749 26.6011 3.1438 26.4109C5.89053 28.1773 9.08791 29.115 12.3536 29.1121C23.4082 29.1121 29.4513 19.9555 29.4513 12.0144C29.4513 11.7557 29.4455 11.4942 29.434 11.2371C30.6099 10.387 31.6248 9.3327 32.4312 8.12643Z"
                        fill="#010101"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/*right card*/}
            <div className="flex  pb-10 flex-col custom-sm:flex-row gap-10 lg:gap-5 lg:w-[50%]">
              <div className="w-full custom-sm:w-[192px] custom-sm:h-[237px]">
                <img
                  className="rounded-2xl"
                  src={person2}
                  alt="image"
                  loading="lazy"
                  width="100%"
                />
              </div>
              <div className="flex flex-col gap-7 custom-sm:w-[calc(100%-193px)] ">
                <div>
                  <div className="font-semibold text-[24px] leading-9 tracking-[0.5px]">
                    Syed Ahmed
                  </div>
                  <div className="font-normal text-[12px] 2xl:text-[16px] leading-[18px] tracking-[0.5px]">
                    Co-Founder & CEO @5C Network
                  </div>
                </div>

                <div className="text-justify lg:text-start font-normal text-[12px] 2xl:text-[16px] leading-4 tracking-wide">
                  Currently serving as the Managing Director, Syed is also one
                  of the co-founders of 5C Network. With a wealth of
                  unparalleled experience across industries, Syed led the
                  tech-driven strategic initiative projects of several
                  technology companies including Mindlance India,
                  Hewlett-Packard, 3M. As per Syed, it’s his belief in the
                  strength of technology to change the world that keeps him
                  motivated every day.
                </div>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/syed-s-ahmed-06553114/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M27.2988 4.31035C28.0609 4.31035 28.7918 4.6131 29.3307 5.152C29.8696 5.69089 30.1724 6.4218 30.1724 7.18391V27.2989C30.1724 28.061 29.8696 28.7919 29.3307 29.3308C28.7918 29.8697 28.0609 30.1724 27.2988 30.1724H7.18387C6.42175 30.1724 5.69085 29.8697 5.15195 29.3308C4.61305 28.7919 4.3103 28.061 4.3103 27.2989V7.18391C4.3103 6.4218 4.61305 5.69089 5.15195 5.152C5.69085 4.6131 6.42175 4.31035 7.18387 4.31035H27.2988ZM26.5804 26.5805V18.9655C26.5804 17.7233 26.0869 16.5319 25.2085 15.6535C24.3301 14.7751 23.1388 14.2816 21.8965 14.2816C20.6752 14.2816 19.2528 15.0287 18.5632 16.1494V14.5546H14.5546V26.5805H18.5632V19.4971C18.5632 18.3908 19.454 17.4856 20.5603 17.4856C21.0938 17.4856 21.6054 17.6976 21.9826 18.0748C22.3599 18.452 22.5718 18.9636 22.5718 19.4971V26.5805H26.5804ZM9.88502 12.2989C10.5252 12.2989 11.1392 12.0445 11.5918 11.5919C12.0445 11.1392 12.2988 10.5252 12.2988 9.88506C12.2988 8.54885 11.2212 7.4569 9.88502 7.4569C9.24103 7.4569 8.62341 7.71272 8.16805 8.16809C7.71268 8.62346 7.45685 9.24107 7.45685 9.88506C7.45685 11.2213 8.54881 12.2989 9.88502 12.2989ZM11.8821 26.5805V14.5546H7.90226V26.5805H11.8821Z"
                        fill="#010101"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M32.4312 8.12643C31.3347 8.61149 30.172 8.93013 28.9814 9.07183C30.2358 8.3206 31.1744 7.13899 31.6222 5.74712C30.4441 6.44827 29.1524 6.93965 27.8076 7.20546C26.9033 6.2379 25.7047 5.59621 24.398 5.38015C23.0914 5.16409 21.75 5.38576 20.5824 6.0107C19.4148 6.63565 18.4863 7.62885 17.9414 8.8359C17.3964 10.043 17.2656 11.3962 17.5691 12.6853C15.1796 12.5658 12.842 11.945 10.7081 10.8633C8.57413 9.7816 6.69156 8.26317 5.18259 6.40661C4.64853 7.32392 4.36787 8.3667 4.36937 9.42816C4.36937 11.5115 5.43115 13.352 7.04179 14.4296C6.08779 14.3995 5.15479 14.1419 4.32052 13.6782V13.7514C4.32048 15.1392 4.80046 16.4842 5.67905 17.5584C6.55763 18.6326 7.78074 19.3699 9.14092 19.6451C8.25535 19.8854 7.32669 19.9207 6.42541 19.7486C6.80892 20.9431 7.55646 21.9877 8.56334 22.7362C9.57021 23.4847 10.786 23.8994 12.0404 23.9224C10.7937 24.9015 9.36634 25.6252 7.83979 26.0522C6.31324 26.4792 4.71749 26.6011 3.1438 26.4109C5.89053 28.1773 9.08791 29.115 12.3536 29.1121C23.4082 29.1121 29.4513 19.9555 29.4513 12.0144C29.4513 11.7557 29.4455 11.4942 29.434 11.2371C30.6099 10.387 31.6248 9.3327 32.4312 8.12643Z"
                        fill="#010101"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}