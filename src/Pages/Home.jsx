import { pic1, pic2, pic3, person1, person2 } from "../assets/assets";
import Form from "../Components/Form";
import { useEffect,useState } from "react";
import HomepageCard from "../Components/HomepageCard";
import PlayIcon from "../svg/PlayIcon";
export default function Home() {
  
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <>
      {/*homepage container*/}
      <div className="font-custom scroll-smooth  w-full md:flex md:justify-center ">
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

      {/*introduction*/}
      <div className=" px-7 lg:flex py-14 lg:px-20 2xl:px-40 custom-lg:px-60">
        {/*left*/}
        <div className="flex flex-col items-start gap-5 2xl:gap-10 lg:w-[60%] lg:pr-10">
          <div className="font-semibold text-center text-[36px]  leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
            Introduction
          </div>
          <div className="flex flex-col text-[14px] leading-[21px] text-[#000000] text-justify lg:text-start gap-5 2xl:gap-10 custom-lg:text-2xl font-normal">
            <div>
              5C Network is India’s largest and most trusted radiology
              interpretation platform. We are the market leaders in
              tele-radiology services, generating over 1Mn reports per year. As
              a Network of over 400 highly competitive radiologists, 5C Network
              offers tele-radiology reporting services for all types of
              modalities including, XRAY, CT, MRI, NM and Mammography. Created
              with healthcare infrastructure reformation in mind, 5C Network is
              one of the fastest-growing online tele-radiology reporting
              platforms in India with 1000+ clients, 5+ AI partners and
              counting.
            </div>

            <div>
              Our team of professionals is highly experienced, featuring some of
              the finest minds in healthcare and technology. Not only do we
              function with experience but also keep a curious eye on ongoing
              health-tech advancements, to deliver the best tele-reporting
              infrastructure.
            </div>

            <div>
              We focus on the integral pillars of healthcare as we cater to
              diagnostic imaging. Simply put, we tick all the checkboxes
              reiterating the fact of accurate, timely, and quality diagnosis of
              a potential illness. We also understand proper diagnosis is the
              first and most important step for outcome-driven healthcare
              delivery.
            </div>

            <div>
              5C Network has been at the forefront of India’s fight against
              Covid-19. 5C Network is the largest source of Covid diagnosis and
              scoring in India having reported over 10,00,000 Chest X-Rays and
              HRCT Thorax Scans.
            </div>
          </div>
        </div>
        {/*right*/}
        <div className="lg:w-[40%]  flex md:justify-center custom-lg:justify-center gap-5 md:gap-10 lg:gap-7 custom-lg:gap-10 pt-20 lg:pl-10  ">
          <div className=" w-[50%] md:w-[270px] lg:w-[194px] 2xl:w-[211px] custom-lg:w-[275px] h-full pt-36 custom-lg:pt-44  ">
            <img
              className="rounded-3xl"
              src={pic2}
              width="100%"
              alt="image"
              loading="lazy"
            />
          </div>

          <div className=" w-[50%] md:w-[270px] lg:w-[194px] 2xl:w-[211px] custom-lg:w-[275px] h-full">
            <img
              className="rounded-3xl"
              src={pic3}
              width="100%"
              alt="image"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/*horizontal line*/}
      <div className="px-5 lg:px-10 2xl:px-40 custom-lg:px-60">
        <div className="w-full h-[2px] bg-custom-gradient4"></div>
      </div>

      {/*features*/}
      <div className="w-full pt-12 custom-lg:pt-20 ">
        <div className="text-center  font-semibold text-[36px]  leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
          Features that are a part of 5C Network
        </div>
        {/*card container*/}
        <div className="px-7 lg:px-10 xl:px-20  2xl:px-40 custom-lg:px-60 py-16 w-full  grid md:grid-cols-2 lg:grid-cols-3  gap-10 2xl:gap-24  ">
          <HomepageCard title={"Teleradiology"} content={ "Get radiology interpretation drawn out by the top radiologists in the country without having to go anywhere."}/>
          <HomepageCard
            title={"Our Quality Process"}
            content={
              " Mistake proof design and sophisticated process to ensure we deliver the radiology interpretation on time and accurate at every stage."
            }
          />
          <HomepageCard
            title={"Artificial Intelligence"}
            content={
              "AI built with deep learning technology and trained using millions of real-time images can identify and localize abnormalities on X-Rays, MRI & CT Scans."
            }
          />
          <HomepageCard
            title={"Collaboration"}
            content={
              "Real-time collaboration between sub-specialist to report the right diagnosis and thereby to deliver the right medical intervention to the patients."
            }
          />
          <HomepageCard
            title={"Second Opinion"}
            content={
              "A second opinion from our experts can provide a deeper understanding of the diagnosis and prognosis and enable the healthcare team to make informed decisions about the patient's medical care."
            }
          />
          <HomepageCard
            title={"Nighthawk"}
            content={
              "5C Network provides 11 pm to 7 am tele radiology coverage across subspecialties and modalities for healthcare providers and diagnostic imaging centres."
            }
          />
        </div>
      </div>

      {/*leadership team*/}
      <div className="w-full flex justify-center">
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
      {/*people reviews*/}
      <div className="px-5 custom-sm:px-10 lg:px-20 2xl:px-40 custom-lg:px-60 py-20 flex flex-col gap-10">
        <div className="font-semibold text-[36px]  leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
          What do people have to say about 5C?
        </div>

        <div className="flex  w-full lg:flex-row xl:px-20  flex-col gap-5 lg:gap-10 2xl:gap-20 custom-lg:gap-40">
          {/*first reveiw*/}
          <div className="w-full lg:w-[50%]  flex flex-col custom-sm:flex-row custom-sm:items-center gap-2">
            <div className="custom-sm:w-[30%] custom-lg:w-[150px] ">
              <div className="font-semibold leading-6 tracking-[0.5px] text-[#010529]">
                Jain Diagnostics
              </div>
              <div className="text-[12px] leading-[18px] tracking-[0.5px] opacity-40">
                Bangalore,india
              </div>
            </div>

            <div className="custom-sm:w-[70%] text-[14px] leading-[21px] text-[#2D5980]">
              The quality of reporting is up to the mark, and everything about
              the process is already described.Technical problems are dealt with
              within minimal time as per the requirements of the clients. My
              favourite part is the fact that some of the top radiologists in
              the industry are always available for discussions and ready to
              work. We enjoy every bit of working with 5C Network, and their
              services-are truly unparalleled - reliable, rapid, and convenient.
              What else can we ask for.
            </div>
          </div>
          {/*second review*/}
          <div className="w-full  lg:w-[50%] flex flex-col custom-sm:flex-row custom-sm:items-center gap-2">
            <div className="custom-sm:w-[30%] custom-lg:w-[150px]">
              <div className="font-semibold leading-6 tracking-[0.5px] text-[#010529]">
                LN Diagnostics
              </div>
              <div className="text-[12px] leading-[18px] tracking-[0.5px] opacity-40">
                Bangalore,india
              </div>
            </div>

            <div className="custom-sm:w-[70%] text-[14px] leading-[21px] text-[#2D5980]">
              In our experience, 5C Network delivered exactly what we were
              looking for - punctuality and quality. We were stunned to receive
              CT scan results within a mere 45 minutes. We heartily thank them
              for their services that keep aiding us in our treatment processes.
              So many milestones lie ahead, keep it up!
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end gap-4 custom-lg:pr-20">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g filter="url(#filter0_b_66_2620)">
                <circle cx="16" cy="16" r="16" fill="#2D5980" />
                <circle
                  cx="16"
                  cy="16"
                  r="15.5294"
                  stroke="white"
                  stroke-width="0.941177"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.8967 16.2337C21.8967 16.518 21.6663 16.7484 21.382 16.7484L12.3305 16.7484L16.0842 20.5021C16.2852 20.7031 16.2852 21.029 16.0842 21.23C15.8832 21.431 15.5573 21.431 15.3563 21.23L10.724 16.5977C10.5229 16.3967 10.5229 16.0708 10.724 15.8698L15.3563 11.2374C15.5573 11.0364 15.8832 11.0364 16.0842 11.2374C16.2852 11.4384 16.2852 11.7643 16.0842 11.9653L12.3305 15.719L21.382 15.719C21.6663 15.719 21.8967 15.9495 21.8967 16.2337Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_66_2620"
                  x="-25.6"
                  y="-25.6"
                  width="83.2"
                  height="83.2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.8" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_66_2620"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_66_2620"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g filter="url(#filter0_b_66_2623)">
                <circle cx="16" cy="16" r="16" fill="#2D5980" />
                <circle
                  cx="16"
                  cy="16"
                  r="15.5294"
                  stroke="white"
                  stroke-width="0.941177"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.573 16.234C10.573 15.9498 10.8034 15.7193 11.0877 15.7193L20.1392 15.7193L16.3855 11.9656C16.1845 11.7646 16.1845 11.4387 16.3855 11.2377C16.5865 11.0367 16.9124 11.0367 17.1134 11.2377L21.7458 15.8701C21.9468 16.0711 21.9468 16.397 21.7458 16.598L17.1134 21.2303C16.9124 21.4314 16.5865 21.4314 16.3855 21.2303C16.1845 21.0293 16.1845 20.7035 16.3855 20.5024L20.1392 16.7488L11.0877 16.7488C10.8034 16.7488 10.573 16.5183 10.573 16.234Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_66_2623"
                  x="-25.6"
                  y="-25.6"
                  width="83.2"
                  height="83.2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.8" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_66_2623"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_66_2623"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
