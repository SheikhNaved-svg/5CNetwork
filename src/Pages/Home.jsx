import { useEffect } from "react";
import React,{Suspense} from "react";
const HomeComp = React.lazy(() =>import("../Components/HomeComp"));
const HomeComptwo = React.lazy(()=> import("../Components/HomeComptwo"));
const HorizontalLine = React.lazy(()=> import("../Components/HorizontalLine"));
const HomeCompthree = React.lazy(()=> import("../Components/Homecompthree"));
const HomeCompfour = React.lazy(()=> import("../Components/HomeCompfour"));
const HomeCompfive = React.lazy(()=> import("../Components/HomeCompfive"));



export default function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="font-custom">
      <Suspense fallback={<div>loader...</div>}>
      {/*hero section*/}
      <HomeComp />
      {/*introduction*/}
      <HomeComptwo />
      {/*horizontal line*/}
      <HorizontalLine />
      {/*features*/}
      <HomeCompthree />
      {/*leadership team*/}
      <HomeCompfour />
      {/*people reviews*/}
      <HomeCompfive />
      </Suspense>
     
    </div>
  );
}
