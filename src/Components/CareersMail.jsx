import { bw2 } from "../assets/assets";
export default function CareersMail(){
    return(
        <div className="w-full font-custom flex flex-col md:flex-row gap-10 xl:px-20 custom-lg:px-60  py-10 lg:py-20 custom-lg:py-40 ">
        {/*left*/}
        <div className="w-full md:w-[50%] px-5 lg:px-10 custom-lg:px-0 flex flex-col items-start gap-16">
          <div className="flex w-full flex-col items-start gap-5">
            <h1 className="font-semibold text-[36px] text-center   leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
              Send your CV
            </h1>
            <p className="leading-[24px] text-[#2D5980]">
              Can’t see the right role for you?<br></br>
              We still want to hear from you.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <h3 className="text-[24px] leading-[36px] text-[#000000]">
              Mail us now!
            </h3>
            <a
              href="mailto:hr@5cnetwork.com"
              className="text-[#2D5980] underline"
            >
              hr@5cnetwork.com
            </a>
          </div>
        </div>
        {/*right*/}
        <div className="px-5 md:px-0 md:w-[50%] flex justify-end ">
          <img
            className="rounded-[25px]"
            src={bw2}
            alt="image"
            width="100%"
            loading="lazy"
          />
        </div>
      </div>
    )
}