import { group } from "../assets/assets";

export default function CareersLifeat5c(){
    return(
        <div className="w-full font-custom py-20 px-5 lg:px-10 2xl:px-40 custom-lg:px-60 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-20">
        {/*left*/}
        <div className="flex flex-col items-start gap-7 w-full lg:w-[60%]">
          <h1 className=" font-semibold text-[36px] text-center   leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
            Life At 5C
          </h1>
          <div className="flex flex-col gap-5">
            <p>
              Someone wise said that a picture speaks a thousand words. In
              healthcare, a diagnostic image indeed does. At 5C Network, we are
              channelizing these images and words towards transformation of the
              healthcare landscape of India.
            </p>
            <p>
              Delayed and missed diagnosis are some of the leading causes of the
              rising healthcare burden in India. In many cases, the price is
              loss of life or severe disability. To improve healthcare outcomes,
              we first need to know what's wrong. The right diagnosis is 3/4th
              the treatment. 5C Network is democratizing access to timely and
              accurate diagnosis, one specialty at a time. We are building the
              diagnostic operating ecosystem, starting with radiology.
            </p>
            <p>
              Large hospitals are now using technology for demand generation,
              logistics and data warehousing. The time for tech becoming a
              keystone in clinical workflows has arrived. Building the diagnosis
              stack of the future will be a massive feat, and we are first
              building a team that is energized towards this goal.
            </p>
            <p>
              We are looking at passionate and dedicated individuals to be a
              part of this revolutionary journey. Young and agile, 5C Network is
              set to soar its wings in the coming years and if you are someone
              who thrives in a fast-paced and rapidly evolving growth process,
              then 5C Network is the place for you.
            </p>
          </div>
        </div>
        {/*right logo*/}
        <div className="w-full flex justify-center lg:w-[40%] ">
          <img src={group} alt="image" loading="lazy" />
        </div>
      </div>
    )
}