import {certificate,frame1,frame2,frame3,frame4,frame5,emp1,emp2,emp3,emp4,emp5,emp6,emp7,emp8,emp9,emp10,emp11,emp12} from '../assets/assets'
import {useRef,useEffect} from 'react';
import gsap from 'gsap';

export default function About(){
    const frameref=useRef(null)
    const blueball=useRef(null)
    const whiteball=useRef(null)

    useEffect(()=>{
      window.scrollTo(0,0)
},[])
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
      
      
    
           


    return (
      <div>
        <div className="w-full font-custom  flex justify-center lg:px-[24px]  ">
          <div className="pt-40 2xl:pt-64 pb-16 px-10 md:px-20 lg:px-40 2xl:px-80 w-full h-full flex flex-col gap-10 text-white bg-custom-gradient   lg:rounded-b-[40px]">
            <h1 className="text-[48px] font-medium leading-[60px] tracking-[0.5px] text-[#FFFFFF] text-center">
              About Us
            </h1>
            <p className="text-[16px] 2xl:text-2xl leading-6 tracking-[0.5px] text-justify lg:text-center">
              An increasing dependence on radiology for diagnosis, therapeutics,
              monitoring and prognosis has placed an immense burden on radiology
              fraternity. While the number of diagnostic centres and hospitals
              providing radiology services is increasing, there is a shortage of
              radiology experts, especially sub-specialists such as cardio
              vascular radiologist, neuro radiologist etc.
            </p>
          </div>
        </div>

        {/*whats our mission*/}
        <div className="px-5   custom-sm:px-10 custom-lg:px-60 2xl:px-40  py-20   flex flex-col lg:flex-row w-full items-center lg:items-start lg:justify-between 2xl:justify-between  custom-lg:justify-between ">
          {/*left*/}
          <div className="  w-full    custom-sm:w-[500px] h-[300px] md:h-[320px] md:w-[625px]  lg:w-[50%]  2xl:h-[400px]  relative flex flex-col items-center justify-end ">
            <div
              ref={frameref}
              className=" relative w-full h-full  overflow-hidden rounded-[20px]"
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

        

       
        {/*vision and ethics */}
        <div className="md:flex-row flex flex-col gap-6 pb-10 md:gap-10 md:justify-between px-5 custom-sm:px-10 lg:px-14 xl:px-20 2xl:px-40 custom-lg:px-60">
          <div className="flex flex-col items-start gap-2 lg:gap-6">
            <h1 className=" font-semibold text-[36px] text-center   leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
              Vision 
            </h1>
            <p className="text-[16px] custom-lg:text-[20px] text-[#121212] leading-[24.56px] lg:text-start">
              Non sagittis sed quam sed turpis ac faucibus at eu. Dignissim nibh
              orci nisl vitae at. Eu cras etiam nascetur in.
            </p>
          </div>

          <div className="hidden md:block lg:px-20 2xl:px-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="186"
              viewBox="0 0 1 186"
              fill="none"
            >
              <line
                x1="0.5"
                y1="185.394"
                x2="0.5"
                y2="3.05176e-05"
                stroke="url(#paint0_linear_319_1989)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_319_1989"
                  x1="1"
                  y1="-0.0749985"
                  x2="1"
                  y2="185.394"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2D5980" stop-opacity="0" />
                  <stop offset="0.5" stop-color="#2D5980" />
                  <stop offset="1" stop-color="#2D5980" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="w-full mt-4 md:hidden h-[2px] bg-custom-gradient4"></div>

          <div className="flex flex-col items-start gap-2 lg:gap-6">
            <h1 className="font-semibold text-[36px]  text-center  leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
              Ethics
            </h1>
            <p className="text-[#121212] text-[16px] custom-lg:text-[20px] leading-[24.56px]  lg:text-start">
              Non sagittis sed quam sed turpis ac faucibus at eu. Dignissim nibh
              orci nisl vitae at. Eu cras etiam nascetur in.
            </p>
          </div>
        </div>


        {/*how does it work*/}
        <div className="px-5 lg:px-14 2xl:px-40 custom-lg:px-60">
          <h1 className="font-semibold text-[36px]  text-center  leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
            How does It Works?
          </h1>
          <p className="text-[14px] 2xl:text-[16px] py-10 leading-[21px] tracking-[0.5px] flex flex-col gap-5">
            <div>
              The images acquired at diagnostic centers or hospitals are
              uploaded and transferred digitally to a radiologist expert through
              our system. These radiologists at 5C Network utilize their
              experience and several AI-aided algorithms for interpretation and
              reporting. This remote radiology reporting technique minimizes the
              turnaround time to as low as 24 minutes (yes, we are faster than
              pizza delivery!) maintaining the accuracy of the result.
            </div>

            <div>
              For this we are continuously expanding our network of expert
              radiologists that are available to diagnose images and help guide
              treatment plans for patients. Our radiologists are available 24 by
              7, even on holidays and festivals, so that no patient has to wait
              for a diagnosis and treatment.
            </div>

            <div>
              We believe that a dynamic environment striving to keep up with
              novel advancements is what keeps the momentum going. Our
              comprehensive yet simple workflow allows us to devise a flawless
              plan and produce accurate and timely results, image after image.
              5C Network offers a simple yet sophisticated interface for our
              associates and allows them to adjust to our digital ecosystem with
              ease. The result is smooth operations no matter where our partner
              radiologist is in the country.
            </div>
          </p>
        </div>

        {/*employees*/}
        <div className="py-10 w-full px-5 md:px-10 lg:px-20 2xl:px-40 custom-lg:px-60 lg:flex-row lg:items-center flex flex-col gap-10 ">
          <div className="flex flex-col gap-7 lg:w-[50%] lg:pr-20 2xl:pr-40">
            <h1 className="font-semibold text-[36px]    leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2 text-center lg:text-start">
              Here it from <br className="hidden lg:block"></br>
              our Employees
            </h1>
            <p className="leading-5 text-[#121212] 2xl:text-xl md:text-center lg:text-start">
              Non sagittis sed quam sed turpis ac faucibus at eu. Dignissim nibh
              orci nisl vitae at. Eu cras etiam nascetur in.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8 2xl:gap-10 lg:w-[50%] 2xl:px-20">
            <div className="grid  grid-cols-3 2xl:gap-y-8 md:grid-cols-6 gap-4 px-5 custom-sm:px-20 md:px-32 lg:px-0">
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp1}
                alt="image"
                loading='lazy'
              />
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp2}
                alt="image"
                loading='lazy'
              />
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp3}
                alt="image"
                loading='lazy'
              />
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp4}
                alt="image" 
                loading='lazy'
              />
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp5}
                alt="noimage"
                loading='lazy'
              />
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp6}
                alt="image"
                loading='lazy'
              />
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp7}
                alt="noimage"
                loading='lazy'
              />
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp8}
                alt="image"
                loading='lazy'
              />
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp9}
                alt="image"
                loading='lazy'
              />
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp10}
                alt="image"
                loading='lazy'
              />
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp11}
                alt="image"
                loading='lazy'
              />
              <img
                className="rounded-full filter grayscale hover:grayscale-0 duration-300"
                width="85"
                src={emp12}
                alt="image"
                loading='lazy'
              />
            </div>

            <div className="text-[24px] font-medium leading-8 tracking-[2%]">
              Non sagittis sed quam sed turpis ac faucibus at eu. Dignissim nibh
              orci nisl vitae at. Eu cras etiam nascetur in.
            </div>

            <div className="text-[14px] 2xl:text-[20px] leading-5 text-[#2D5980]">
              - Sanjana Samsung
            </div>
          </div>
        </div>

        {/*award*/}
        <div className="py-20  flex flex-col gap-10 2xl:gap-20">
          <h1 className="font-semibold text-[36px]    leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2 text-center ">
            Awards & Recognitions
          </h1>
          <div className="">
            <div className="grid md:grid-cols-2 justify-items-center w-full lg:grid-cols-3 gap-y-7 lg:px-20 2xl:px-40">
              <div className="w-[309px] 2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
              <div className="w-[309px]  2xl:w-[400px] h-[308px] 2xl:h-[400px]">
                <img src={certificate} alt="error"  loading='lazy' width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}