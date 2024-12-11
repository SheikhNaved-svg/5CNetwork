import { useEffect,useRef } from "react";
import gsap from 'gsap';
export default function CareersCulture(){
    const aniRef = useRef(null);
    useEffect(() => {
        const time = setTimeout(() => {
          gsap.from([...aniRef.current.children].slice(1), {
            duration: 2,
            stagger: 1,
            opacity: 0,
            repeat: -1,
          });
        }, 1000);
    
        return () => {
          clearTimeout(time);
        };
      }, []);
    return(
        <div className="w-full font-custom py-10 px-5 lg:px-10 custom-lg:px-60 2xl:px-40 flex flex-col gap-10 lg:items-center lg:flex-row">
        {/*left*/}
        <div className="w-full flex flex-col gap-5 items-start lg:w-[40%] lg:pr-10 2xl:pr-32 custom-lg:pr-52">
          <h1 className=" font-semibold text-[36px]  leading-[54px] tracking-[0.5px] text-center text-transparent bg-clip-text bg-custom-gradient2">
            Driving our culture
          </h1>
          <p className="text-[14px] leading-[21px] text-[#2D5980]">
            Lörem ipsum fyngen plankning. Triage plötslig sportbarnsdöd mamorel
            utom ongar. Diheten trelingar geonde polyrörade. Per täns. Visual
            search kontragt om filotes. Gigarade sosade inaskad teskap. Padda
            nevis såväl som hemitår, inte heterotesa. Div piligen,
            åsiktstaliban. Du kan vara drabbad.{" "}
          </p>
        </div>
        {/*right*/}
        <div className="relative h-[600px] w-full  lg:w-[60%]">
          <div
            ref={aniRef}
            className="w-full absolute   h-[600px] flex flex-col items-center justify-around "
          >
            <h3 className="font-semibold text-[24px] md:text-[36px] leading-[54px] tracking-[0.5px] text-[#000000]">
              Truthful <span className="font-normal">to the core</span>
            </h3>
            <h3 className="font-semibold text-[24px] md:text-[36px] leading-[54px] tracking-[0.5px] text-[#000000]">
              Limitless <span className="font-normal">thinking</span>
            </h3>
            <h3 className="font-normal text-[24px] md:text-[36px] leading-[54px] tracking-[0.5px]">
              Forward with{" "}
              <span className="font-semibold text-[24px]  md:text-[36px] leading-[54px] tracking-[0.5px] text-[#000000]">
                courage
              </span>
            </h3>
            <h3 className="font-semibold text-[24px] md:text-[36px] leading-[54px] tracking-[0.5px] text-[#000000]">
              Knowledge <span className="font-normal">is power</span>
            </h3>
          </div>

          <div className="w-full absolute h-[600px] flex flex-col justify-between">
            <div className="w-full h-[2px] bg-custom-gradient4"></div>
            <div className="w-full h-[2px] bg-custom-gradient4"></div>
            <div className="w-full h-[2px] bg-custom-gradient4"></div>
            <div className="w-full h-[2px] bg-custom-gradient4"></div>
            <div className="w-full h-[2px] bg-custom-gradient4"></div>
          </div>
        </div>
      </div>

    )
}