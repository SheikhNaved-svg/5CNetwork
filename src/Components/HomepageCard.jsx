import Three from "../svg/Three";

export default function HomepageCard({title,content}){
    return(
        <div className="flex flex-col gap-2 ">
        <div className="flex gap-2 items-center">
          
          <div>
          <Three />
          </div>
          <div className="text-[20px] leading-[30px] text-[#2C2B2B] 2xl:text-[30px]">
            {title}
          </div>
        </div>
        <div className="text-[#2D5980] text-[14px] leading-[21px] 2xl:text-xl">
       {content}      </div>
    </div>
    )
}