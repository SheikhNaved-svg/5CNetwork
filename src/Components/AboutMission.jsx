import {frame1,frame2,frame3,frame4,frame5} from '../assets/assets'
import {useRef,useEffect} from 'react';
import gsap from 'gsap';
export default function AboutMission(){
    const frameref=useRef(null)
    const blueball=useRef(null)
    const whiteball=useRef(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
          if (frameref.current) {
            gsap.from([...frameref.current.children], {
              duration: 1,
              opacity: 0,
              stagger: 1.8,
              repeat: -1,
              
            });
          }
          const tl=gsap.timeline({repeat:-1});
          tl.to(blueball.current,{duration:1.8,x:'157%'})
          tl.to(blueball.current,{duration:1.8,x:'314%'})
          tl.to(blueball.current,{duration:1.8,x:'471%'})
          tl.to(blueball.current,{duration:1.8,x:'628%'})
          tl.to(blueball.current,{duration:1.8,x:'0%',ease:"power4.out"})

          if (whiteball.current) {
            const whiteBallChildren = [...whiteball.current.children];
            const tl2 = gsap.timeline({ repeat: -1 });
            tl2.to(whiteBallChildren, {
              duration: 1.8,
              x: "-157%",
              stagger: 1.8,
            });
            tl2.to([...whiteball.current.children],{duration:1.8,x:'0%',ease:"power4.out"})
          }
        }, 0);
      
        return () => clearTimeout(timeout); 
      }, []);
      
    return(
        <div className="px-5   custom-sm:px-10 custom-lg:px-60 2xl:px-40  py-20   flex flex-col lg:flex-row w-full items-center lg:items-start lg:justify-between 2xl:justify-between  custom-lg:justify-between ">
        {/*left*/}
        <div className="  w-full  h-[400px] lg:w-[50%]">
          <div
            ref={frameref}
            className=" relative w-full h-[300px] overflow-hidden rounded-[20px]"
          >
            <div className="absolute w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={frame1}
                alt="image"
                loading='lazy'
              />
            </div>
            <div className="absolute w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={frame2}
                alt="image"
                loading='lazy'
              />
            </div>
            <div className="absolute w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={frame3}
                alt="image"
                loading='lazy'
              />
            </div>
            <div className="absolute w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={frame4}
                alt="image"
                loading='lazy'
              />
            </div>
            <div className="absolute w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={frame5}
                alt="image"
                loading='lazy'
              />
            </div>
          </div>

          <div className=" w-full flex justify-center gap-[6px] py-10">
            <div ref={blueball}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
              >
                <circle cx="5.5" cy="5" r="5" fill="#2D5980" />
              </svg>
            </div>

            <div ref={whiteball} className="flex flex-row gap-[6px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                >
                  <circle cx="5.5" cy="5" r="5" fill="#D9D9D9" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                >
                  <circle cx="5.5" cy="5" r="5" fill="#D9D9D9" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                >
                  <circle cx="5.5" cy="5" r="5" fill="#D9D9D9" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                >
                  <circle cx="5.5" cy="5" r="5" fill="#D9D9D9" />
                </svg>
              </div>
            </div>

          </div>


        </div>

        {/*right*/}
        <div className="w-full  lg:w-[40%]  flex flex-col gap-7">
          <h1 className="font-semibold text-[36px]  text-center lg:text-start leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
            What ‘s our Mission?
          </h1>
          <p className="font-normal leading-6 tracking-[0.5px] text-justify lg:text-start 2xl:text-xl flex flex-col gap-5">
            <div>
              We at 5C Network are bringing together the 5 stakeholders of
              radio-diagnosis: the
              <span className="text-[#2D5980] font-medium">
                Doctor, Radiologist, Patient, Technologist, and Hospital or
                Imaging Centre
              </span>
              to provide a solution and facilitate effortless functioning.
            </div>

            <div>
              Harnessing the power of technology, we are trying to ensure that
              no radiology image is left unattended in the country for longer
              than 2-3 hours.
            </div>
          </p>
        </div>
      </div>

    )
}