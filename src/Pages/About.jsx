import React,{Suspense, useEffect } from "react";

const AboutHero = React.lazy(()=> import("../Components/AboutHero"));
const AboutMission = React.lazy(()=> import("../Components/AboutMission"));
const AboutMissionethics = React.lazy(() => import("../Components/AboutVisionethics"));
const AboutHowitwork = React.lazy(() => import("../Components/AboutHowitwork"));
const AboutEmployee = React.lazy(() => import("../Components/AboutEmployee"));
const AboutAward = React.lazy(() => import("../Components/AboutAward"));
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-custom">
      <Suspense fallback={<div>loader</div>} >
      {/*hero*/}
      <AboutHero />
      {/*whats our mission*/}
      <AboutMission />
      {/*vision and ethics */}
      <AboutMissionethics />
      {/*how does it work*/}
      <AboutHowitwork />
      {/*employees*/}
      <AboutEmployee />
      {/*award*/}
      <AboutAward />
      </Suspense>
    </div>
  );
}
