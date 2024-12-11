import React,{Suspense, useEffect } from "react";


const ServicesHero = React.lazy(() => import("../Components/ServicesHero.jsx"));
const ServicesUppertwocard = React.lazy(() => import("../Components/ServiceUppertwocard.jsx"));
const ServiceBookdemo = React.lazy(() => import("../Components/ServiceBookdemo.jsx"));
const ServiceLowertwocard = React.lazy(() => import("../Components/ServiceLowertwocard.jsx"));
export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-custom">
      <Suspense fallback={<div>Loading...</div>} >
      {/*hero*/}
      <ServicesHero />
      {/*upper two card*/}
      <ServicesUppertwocard />
      {/*book demo*/}
      <ServiceBookdemo />
      {/*lower two card*/}
      <ServiceLowertwocard />
      </Suspense>
    </div>
  );
}
