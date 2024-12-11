import HomepageCard from "../Components/HomepageCard";
export default function HomeCompthree(){
    return(
        <div className="w-full pt-12 custom-lg:pt-20 ">
        <div className="text-center  font-semibold text-[36px]  leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
          Features that are a part of 5C Network
        </div>
        {/*card container*/}
        <div className="px-7 lg:px-10 xl:px-20  2xl:px-40 custom-lg:px-60 py-16 w-full  grid md:grid-cols-2 lg:grid-cols-3  gap-10 2xl:gap-24  ">
          <HomepageCard title={"Teleradiology"} content={ "Get radiology interpretation drawn out by the top radiologists in the country without having to go anywhere."}/>
          <HomepageCard
            title={"Our Quality Process"}
            content={
              " Mistake proof design and sophisticated process to ensure we deliver the radiology interpretation on time and accurate at every stage."
            }
          />
          <HomepageCard
            title={"Artificial Intelligence"}
            content={
              "AI built with deep learning technology and trained using millions of real-time images can identify and localize abnormalities on X-Rays, MRI & CT Scans."
            }
          />
          <HomepageCard
            title={"Collaboration"}
            content={
              "Real-time collaboration between sub-specialist to report the right diagnosis and thereby to deliver the right medical intervention to the patients."
            }
          />
          <HomepageCard
            title={"Second Opinion"}
            content={
              "A second opinion from our experts can provide a deeper understanding of the diagnosis and prognosis and enable the healthcare team to make informed decisions about the patient's medical care."
            }
          />
          <HomepageCard
            title={"Nighthawk"}
            content={
              "5C Network provides 11 pm to 7 am tele radiology coverage across subspecialties and modalities for healthcare providers and diagnostic imaging centres."
            }
          />
        </div>
      </div>

    )
}