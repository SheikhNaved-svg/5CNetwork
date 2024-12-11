import React,{Suspense, useEffect, useRef, useState } from "react";
const CareersHero = React.lazy(() => import("../Components/CareersHero"));
const CareersLifeat5c = React.lazy(() => import("../Components/CareersLifeat5c"));
const HorizontalLine = React.lazy(() => import("../Components/HorizontalLine"));
const CareersWegivebest = React.lazy(() => import("../Components/CareersWegivebest"));
const CareersCulture = React.lazy(() => import("../Components/CareersCulture"));
const CareersVacancies = React.lazy(() => import("../Components/CareersVacancies"));
const CareersApplymodal = React.lazy(() => import("../Components/CareersApplymodal"));
const CareersSubmitmodal = React.lazy(() => import("../Components/CareersSubmitmodal"));
const CareersMail = React.lazy(() => import("../Components/CareersMail"));
export default function Careers() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const vacanciesRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function scrollTo() {
    vacanciesRef.current.scrollIntoView();
  }
  return (
    <div className="scroll-smooth font-custom ">
      <Suspense fallback={<div>loader..</div>}>
      {/*hero*/}
      <CareersHero scrollTo={scrollTo} />
      {/*life at 5C*/}
      <CareersLifeat5c />
      {/*horizontal line*/}
      <HorizontalLine />
      {/*careerwegivebest */}
      <CareersWegivebest />
      {/*drivingourculture*/}
      <CareersCulture />
      {/*vacancies*/}
      <div ref={vacanciesRef}>
        <CareersVacancies setModal={setModal} />
      </div>
      {/*modal applynow*/}
      <CareersApplymodal
        modal={modal}
        setModal={setModal}
        setModal2={setModal2}
      />
      {/*modal submit*/}
      <CareersSubmitmodal modal2={modal2} setModal2={setModal2} />
      {/*next mail*/}
      <CareersMail />
      </Suspense>
    </div>
  );
}
