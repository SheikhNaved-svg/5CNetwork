import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function BookDemo() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function bookdemo() {
    navigate("/");
  }
  return (
    <button
      onClick={bookdemo}
      className="bg-[#2D5980] text-[#FFFFFF] hover:text-black hover:bg-[#FFFFFF] hover:border-black border-2 border-[#2D5980]  duration-300 text-[#FFFFF] rounded-[8px] w-[140px] h-[48px] flex justify-center items-center font-semibold text-[16.8px] 2xl:text-xl leading-[28.8px]"
    >
      Book Demo
    </button>
  );
}
