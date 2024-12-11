import { doc ,doc2,doc3} from "../assets/assets";
import gsap from 'gsap';
import {useRef,useEffect} from 'react'

export default function IsSlider(){

    const slider = useRef(null);

    useEffect(() => {
      const animation = gsap.to(slider.current, {
        duration: 10,
        y: "-190%",
        ease: "linear",
        delay: 2,
        repeat: -1,
      });

      return () => {
        animation.kill();
      };
    }, []);
    return(
        <div className="flex flex-col md:flex-row items-center gap-10 w-full px-5 lg:px-12 xl:px-20 2xl:px-40 custom-lg:px-60 py-16 2xl:py-20">
        {/*left*/}
        <div className="flex flex-col gap-10 w-full md:w-[50%] text-[#000000] leading-[24px] text-[16px] 2xl:text-xl">
            <p>The challenges are even more for the centre in tier 2 or tier 3 cities. For tier 1 cities it is particularly challenging for sub-specialties reporting such as cardio-vascular radiology, neuro-radiology, oncology, etc., As a result, 5C Network’s remote reporting radiology interpretation services have become a need of the hour.</p>
            <p>Remote radiology reporting provides interpretation of diagnostic images such as X-Ray, MRI, CT, PET CT by a seasoned radiologist who is not physically present at the diagnostic centre where the images are acquired. The images are acquired along with clinical history of the patient and digitally transferred to the radiologist at remote location for an accurate interpretation and reporting. </p>
            <p>The reports are stored and digitally transferred to the diagnostic centres in less than a few hours. </p>
            <p>The 500+ strong network of highly competent radiologists at 5C Network is the answer to this conundrum.</p>
        </div>

        {/*right*/}
        <div className="w-full md:w-[50%]  h-[420px] custom-lg:h-[500px] overflow-y-hidden flex justify-center ">
        <div ref={slider} className="flex flex-col gap-5 pt-24">
        <img className="rounded-[40px] w-full  h-[300px] custom-lg:h-[400px]" src={doc} alt='error'  loading='lazy'/>
        <img className="rounded-[40px] w-full  h-[300px]  custom-lg:h-[400px]" src={doc2} alt='error'  loading='lazy' />
        <img className="rounded-[40px] w-full  h-[300px]  custom-lg:h-[400px]" src={doc3} alt='error'  loading='lazy' />
        <img className="rounded-[40px] w-full  h-[300px]  custom-lg:h-[450px]" src={doc} alt='error'  loading='lazy'/>
        </div>
       </div>
      </div>
    )
}