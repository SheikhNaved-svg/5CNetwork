import IsHero from "../Components/IsHero";
import IsSlider from "../Components/IsSlider";
import HorizontalLine from "../Components/HorizontalLine";
import IsServices from "../Components/IsServices";
export default function InnerServices() {
  return (
    <div className="font-custom">
      {/*hero*/}
      <IsHero />
      {/*slider*/}
      <IsSlider />
      {/*horizontal line*/}
      <HorizontalLine />
      {/*services*/}
      <IsServices />
    </div>
  );
}
