import BookDemo from "../buttons/BookDemo";
import InnerserviceCard from "../Components/InnerserviceCard";
import { doc ,doc2,doc3,ring} from "../assets/assets";
import gsap from 'gsap';
import {useRef,useEffect} from 'react'
export default function InnerServices() {
    const slider=useRef(null)

    useEffect(()=>{    
          const animation=gsap.to(slider.current,{duration:10,y:'-190%',ease:"linear",delay:2,repeat:-1})

            return()=>{
                animation.kill();
            }
    },[])
  return (
    <div className="font-custom">
        {/*hero*/}
      <div className="w-full  flex justify-center lg:px-[24px]   ">
        <div className="pt-40 2xl:pt-64 pb-16 px-10 md:px-20 lg:px-40 2xl:px-80 w-full h-full flex flex-col items-center gap-10 text-white bg-custom-gradient  lg:rounded-b-[40px]">
          <h1 className="text-[48px] font-medium leading-[60px] tracking-[0.5px] text-center">
          Remote Radiology Interpretation
          </h1>
          <p className="text-[16px] 2xl:text-2xl leading-6 tracking-[0.5px] text-justify lg:text-center">
          Radio diagnosis has become increasingly indispensable today. While diagnostic imaging centres have blossomed all over the country, there is a huge deficiency of qualified and experienced radiologists to review and provide radiology interpretation services.
          </p>
          <BookDemo />
        </div> 
      </div>
        {/*next*/}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full px-5 lg:px-12 xl:px-20 2xl:px-40 custom-lg:px-60 py-16 2xl:py-20">
        <div className="flex flex-col gap-10 w-full md:w-[50%] text-[#000000] leading-[24px] text-[16px] 2xl:text-xl">
            <p>The challenges are even more for the centre in tier 2 or tier 3 cities. For tier 1 cities it is particularly challenging for sub-specialties reporting such as cardio-vascular radiology, neuro-radiology, oncology, etc., As a result, 5C Network’s remote reporting radiology interpretation services have become a need of the hour.</p>
            <p>Remote radiology reporting provides interpretation of diagnostic images such as X-Ray, MRI, CT, PET CT by a seasoned radiologist who is not physically present at the diagnostic centre where the images are acquired. The images are acquired along with clinical history of the patient and digitally transferred to the radiologist at remote location for an accurate interpretation and reporting. </p>
            <p>The reports are stored and digitally transferred to the diagnostic centres in less than a few hours. </p>
            <p>The 500+ strong network of highly competent radiologists at 5C Network is the answer to this conundrum.</p>
        </div>

        {/*slider*/}
        <div className="w-full md:w-[50%]  h-[420px] custom-lg:h-[500px] overflow-y-hidden flex justify-center ">
        <div ref={slider} className="flex flex-col gap-5 pt-24">
        <img className="rounded-[40px] w-full  h-[300px] custom-lg:h-[400px]" src={doc} alt='error'  loading='lazy'/>
        <img className="rounded-[40px] w-full  h-[300px]  custom-lg:h-[400px]" src={doc2} alt='error'  loading='lazy' />
        <img className="rounded-[40px] w-full  h-[300px]  custom-lg:h-[400px]" src={doc3} alt='error'  loading='lazy' />
        <img className="rounded-[40px] w-full  h-[300px]  custom-lg:h-[450px]" src={doc} alt='error'  loading='lazy'/>
        </div>
       </div>
      </div>

      {/*horizontal line*/}
        <div className="px-5 md:px-10 xl:px-20 2xl:px-40 custom-lg:px-60">
      <div className="w-full  h-[2px] bg-custom-gradient4"></div>
      </div>


    {/*services*/}
        <div className="py-16 px-5 lg:px-20 2xl:px-40 custom-lg:px-60 flex flex-col gap-16">
            <h1  className='font-semibold text-[36px]    leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2  lg:text-center '>As India’s largest radiology interpretation platform, 5C Network is well-equipped to provide the following services:</h1>
            <div className="grid  gap-y-10 gap-x-10 custom-lg:gap-x-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   
                   
                   
                <InnerserviceCard title={'24 by 7 Teleradiology'} content={'Get radiology interpretations by qualified radiologist to plan out your patient’s treatment outcomes, 24/ 7. No matter where you are in the country, get a diagnostic imaging interpretation within just a few hours.'}/>
                <InnerserviceCard title={'Panel of Expert Radiologists'} content={'Interpreting images of complex cases are don’t but panel of sub-specialties including neuroradiologist, cardio-vascular radiologist, women’s imaging specialist, etc.The qualified and highly experienced panel of radiologists is prepared to interpret any such report you might have.'}/>
                <InnerserviceCard title={'Artificial Intelligence'} content={'At 5C Network, we have partnered with multiple AI partners with sophisticated Deep Learning Technology. Our partner’s robust AI algorithm are built using millions of real-life images to assist doctors in interpreting. The AI reporting augmented with radiologist experience is producing highly accurate reports.'}/>
                <InnerserviceCard title={'Multiple Modalities'} content={'5C Network extend remote radiologist interpretation services to the following modalities; X-Ray, CT, MRI, Mammogram, Nuclear Medicine. Our experts from across sub-specialties can interpret any body part from these modalities to give accurate and timely diagnosis.'}/>
                <div className="flex flex-col items-center justify-center gap-5">
                        <p className="leading-[24px] tracking-[0.5px] text-center text-[#010101]">Lörem ipsum fyngen plankning. Triage plötslig sportbarnsdöd mamorel utom ongar. </p>
                        <BookDemo />
                </div>
                <InnerserviceCard title={'Accurate Reporting'} content={'Going beyond 5C Network have incorporated 500+ templates and 100+ macros with additional check points to significantly prevent human-error while reporting. 5C Network has one of the best DICOM viewers that helps radiologist to reconstruct images in all possible way and also to annotate.'}/>
                <InnerserviceCard title={'Nighthawk & Emergency Services'} content={'An emergency can come unannounced, even in the middle of the night. 5C Network empowers diagnostic imaging centres with the capability to providing Nighthawk & Emergency Services'}/>
                <InnerserviceCard title={'Second Opinion'} content={'A second opinion from one of our experts might be the difference between good and best treatment that you can provide to your patient. Discuss the diagnosis and prognosis with a 5C Network’s expert make a more confident treatment plan for your patients.'}/>
                <InnerserviceCard title={'Collaborate with Experts'} content={'An accurate and timely diagnosis is the first step to the best treatment and outcome for your patients. Radiologist in 5C Network have access to collaborate with sub-specialists in real-time, at any time of the day or night, to report an accurate diagnosis.'}/>
                <InnerserviceCard title={'COVID Ready'} content={'During the testing times of COVID-19, 5C Network was  (and is) at the forefront of providing rapid, timely and accurate diagnosis of chest X-rays and HRCT thorax. Over 3,50,000 chest X-Rays & HRCT thorax were interpreted for healthcare providers and diagnostic centres from all over the country.'}/>
                <InnerserviceCard title={'Stringent Quality Check Process'} content={'At 5C Network, we understand the importance of each speck on a diagnostic imaging. Backed by a mistake-proofing design and highly sophisticated process, we deliver accurate interpretations on time, everytime.'}/>
                <InnerserviceCard title={'Unlimited Storage'} content={'Storing diagnostic images needs a lot of digital space, safe and secure way of healthcare data storage adds more cost. 5C Network provides unlimited storage to all its clients to store their images and retrieve it when needed. This also enables you to go back and review old images in case of certain medical conditions where comparison and monitoring are needed'}/>
                </div>
        </div>


    </div>
  );
}
