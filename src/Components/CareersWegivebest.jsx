import CareerCard from "../Components/CareerCard";
export default function CareersWegivebest(){
    return(
        <div className="px-5 font-custom lg:px-10 2xl:px-40 custom-lg:px-60 py-20 flex flex-col gap-20">
        <h1 className="text-center  font-semibold text-[36px]   leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
          To get the best, we give the best
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  gap-y-10 gap-x-10 custom-lg:gap-x-28">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>
    )
}