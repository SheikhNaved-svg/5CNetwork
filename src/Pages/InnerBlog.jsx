import { useParams } from "react-router-dom";
import data from "../data/data";
import React,{Suspense, useEffect } from "react";

const IbHero = React.lazy(()=> import("../Components/IbHero"));
const IbContent = React.lazy(()=> import("../Components/IbContent"));
const HorizontalLine = React.lazy(()=> import("../Components/HorizontalLine"));
const IbReadmore = React.lazy(() => import("../Components/IbReadmore"));
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
      <Suspense fallback={<div>loader..</div>}>
      {/*hero*/}
      <IbHero />
      {/*content*/}
      <IbContent />
      {/*line*/}
      <HorizontalLine />
      {/*readmore*/}
      <IbReadmore />
      </Suspense>

     
    </div>
  );
}
