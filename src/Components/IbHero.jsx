import { useParams } from "react-router-dom";
import data from "../data/data";

export default function IbHero(){
    const { id } = useParams();
    const blogdata = data.find((item) => item.id === parseInt(id));


    return(
        <div className="w-full   flex justify-center lg:px-[24px]  ">
        <div
          style={{ backgroundImage: `url(${blogdata.imageUrl})` }}
          className="h-[450px] xl:h-[550px] 2xl:h-[800px] w-full bg-center bg-cover rounded-b-[40px]"
        ></div>
      </div>
    )
}