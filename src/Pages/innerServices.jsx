import React,{Suspense} from 'react';
const IsHero = React.lazy(() => import("../Components/IsHero"));
const IsSlider = React.lazy(() => import("../Components/IsSlider"));
const HorizontalLine = React.lazy(() => import("../Components/HorizontalLine"));
const IsServices = React.lazy(() => import("../Components/IsServices"));
export default function InnerServices() {
  return (
    <div className="font-custom">
      <Suspense fallback={<div>Loading...</div>}>
      {/*hero*/}
      <IsHero />
      {/*slider*/}
      <IsSlider />
      {/*horizontal line*/}
      <HorizontalLine />
      {/*services*/}
      <IsServices />
      </Suspense>
    </div>
  );
}
