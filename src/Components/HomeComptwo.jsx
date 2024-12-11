import { pic2, pic3} from "../assets/assets";
export default function HomeComptwo(){
    return(
        <div className="font-custom px-7 lg:flex py-14 lg:px-20 2xl:px-40 custom-lg:px-60">
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
    )
}