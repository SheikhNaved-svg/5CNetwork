import React,{Suspense, useEffect } from "react";
const AcademicsHero = React.lazy(() => import("../Components/AcademicsHero"));
const AcademicsOne = React.lazy(() => import("../Components/AcademicsOne"));
const HorizontalLine = React.lazy(() => import("../Components/HorizontalLine"));
const AcademicsTwo = React.lazy(() => import("../Components/AcademicsTwo"));
const AcademicsThree = React.lazy(() => import("../Components/AcademicsThree"));

export default function Academics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-custom scroll-smooth ">
      <Suspense fallback={<div>loader..</div>}>
      {/*hero*/}
      <AcademicsHero />
      {/*one*/}
      <AcademicsOne />
      {/*line*/}
      <HorizontalLine />
      {/*two*/}
      <AcademicsTwo />
      {/*three*/}
      <AcademicsThree />
      </Suspense>
    </div>
  );
}
