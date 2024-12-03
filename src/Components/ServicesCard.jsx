
import { useNavigate } from "react-router-dom"
export default function ServicesCard({image,title}){
    const navigate=useNavigate();
    function clickhandler(){
        navigate('/innerservices')

    }
    return(
        <div className="relative w-full h-[350px] 2xl:h-[450px] custom-lg:h-[550px] group">
        <img className="group-hover:brightness-[.4] brightness-[.7] duration-500  w-full h-[100%]  rounded-[20px]" src={image} alt='error'  loading='lazy'  />
        <h3 className="group-hover:hidden px-5 md:px-20 lg:px-5 duration-500  w-full h-full absolute z-10 top-0 flex justify-center items-center  text-center font-semibold text-[32px] leading-[39.49px] tracking-[0.5px] text-white">{title}</h3>
        <div className="w-[100%]">
        <div className="hidden  top-0 md:px-20 lg:px-5  absolute w-full h-full duration-500  group-hover:flex flex-col gap-5 justify-center items-center ">
            <h3 className="text-center font-semibold text-[32px] leading-[39.49px] tracking-[0.5px] text-white px-5">{title}</h3>
            <p className='font-medium px-10 text-[#FFFFFF] text-[14px] leading-[17.28px] tracking-[0.5px] text-center'>Lörem ipsum bioterrorism plande. Reling egolen: tredingar dulögen. Apotologi eurogt. </p>
            <button onClick={clickhandler} className="bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#2D5980] duration-300 text-[#010101] rounded-[8px] w-[117px] h-[40px] flex justify-center items-center font-semibold text-[14px] leading-[24px]">Learn more</button>
            </div>
        </div>
    </div>
    )
}