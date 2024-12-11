import Singlejob from "../Components/Singlejob";
export default function CareersVacancies({setModal}){
    return(
        <>
        <div
        
        className="w-full px-5 lg:px-10 2xl:px-40 custom-lg:px-60 pt-10 "
      >
        <h1 className=" font-semibold text-[36px]  leading-[54px] tracking-[0.5px] text-center text-transparent bg-clip-text font-custom bg-custom-gradient2">
          Our Current Vacancies
        </h1>
        <div className="hidden md:flex gap-10 custom-lg:gap-16 justify-center py-10 font-medium  leading-[24px] ">
          <h6>All</h6>
          <h6>Lorem Ipsum</h6>
          <h6>Lorem Ipsum</h6>
          <h6>Lorem Ipsum</h6>
          <h6>Lorem Ipsum</h6>
        </div>

        {/* */}
        <div className="hidden md:block">
          <div className="hidden md:flex w-full font-medium  py-10 border-b-2 border-[#CACACA]  text-[#000000] leading-[24px]">
            <div className="w-[50%] ">Title</div>
            <div className="w-[25%]">Service</div>
            <div className="w-[25%]">Location</div>
          </div>
        </div>
      </div>

      
      <div className=" px-5 md:px-10 2xl:px-40 custom-lg:px-60 py-10 md:py-0 flex flex-col gap-5 md:gap-0">
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
      </div>
      </>
    )
}