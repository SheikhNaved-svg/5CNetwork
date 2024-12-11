import { useParams } from "react-router-dom";
import data from "../data/data";
import { useEffect } from "react";
import IbHero from "../Components/IbHero";
import IbContent from "../Components/IbContent";
import HorizontalLine from "../Components/HorizontalLine";
import IbReadmore from "../Components/IbReadmore";
export default function InnerBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const blogdata = data.find((item) => item.id === parseInt(id));

  if (!blogdata) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        Blog Not found!
      </div>
    );
  }
  return (
    <div className="font-custom  ">
      {/*hero*/}
      <IbHero />
      {/*content*/}
      <IbContent />
      {/*line*/}
      <HorizontalLine />
      {/*readmore*/}
      <IbReadmore />

     
    </div>
  );
}
