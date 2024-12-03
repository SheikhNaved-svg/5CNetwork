import Three from "../svg/Three";

export default function InnerserviceCard({title,content}){
    return(
        <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center"> 
            <div>
                <Three />
            </div>
            <div className="text-[20px] leading-[30px] text-[#2C2B2B]">{title}</div>
        </div>
        <p className="leading-[21px] text-[#2D5980]">{content}</p>
    </div>
    )
}