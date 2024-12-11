import {emp1,emp2,emp3,emp4,emp5,emp6,emp7,emp8,emp9,emp10,emp11,emp12} from '../assets/assets'
export default function AboutEmployee(){
    return(
        <div className="py-10  w-full px-5 md:px-10 lg:px-20 2xl:px-40 custom-lg:px-60 lg:flex-row lg:items-center flex flex-col gap-10 ">
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

        <div className="flex items-center md:items-stretch  flex-col gap-6 lg:gap-8 2xl:gap-10 lg:w-[50%] 2xl:px-20">
          <div className="grid  grid-cols-3 2xl:gap-y-8 md:grid-cols-6 gap-4 px-5  md:px-32 lg:px-0">
            <img
              className="rounded-full filter grayscale hover:grayscale-0 duration-300"
              width="85px"
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
    )
}