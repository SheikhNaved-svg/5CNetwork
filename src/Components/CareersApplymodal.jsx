
export default function CareersApplymodal({modal,setModal,setModal2}){
    return(
        <div
        className={`${
          modal ? "flex" : "hidden"
        } z-[999] w-full h-screen  justify-center items-center fixed top-0  `}
      >
        <div className="bg-white flex flex-col justify-center font-custom shadow-xl w-full h-full xl:w-[1200px] 2xl:h-[650px] md:h-[600px] lg:h-[550px] z-10 p-5 md:p-10 lg:px-20 rounded-[25px]">
          <div className="flex justify-between">
            <h1 className="font-medium text-[30px] md:text-[36px] leading-[41.08px] text-[#0E0E0E]">
              DevOps Engineer
            </h1>
            <button onClick={() => setModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  d="M2.90791 28.0693L0.10791 25.2693L11.3079 14.0693L0.10791 2.86934L2.90791 0.0693359L14.1079 11.2693L25.3079 0.0693359L28.1079 2.86934L16.9079 14.0693L28.1079 25.2693L25.3079 28.0693L14.1079 16.8693L2.90791 28.0693Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          <div className="text-[16px] leading-[18.24px] pt-5 pb-8 text-[#0E0E0E] flex gap-2">
            Development
            <div className="pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="15"
                viewBox="0 0 11 15"
                fill="none"
              >
                <path
                  d="M5.50008 7.21525C5.03043 7.21525 4.58001 7.02868 4.24791 6.69659C3.91582 6.36449 3.72925 5.91407 3.72925 5.44442C3.72925 4.97476 3.91582 4.52434 4.24791 4.19225C4.58001 3.86015 5.03043 3.67358 5.50008 3.67358C5.96974 3.67358 6.42015 3.86015 6.75225 4.19225C7.08435 4.52434 7.27092 4.97476 7.27092 5.44442C7.27092 5.67697 7.22511 5.90724 7.13612 6.12209C7.04713 6.33693 6.91669 6.53215 6.75225 6.69659C6.58781 6.86102 6.3926 6.99146 6.17775 7.08045C5.9629 7.16945 5.73263 7.21525 5.50008 7.21525ZM5.50008 0.486084C4.18505 0.486084 2.92388 1.00848 1.99401 1.93835C1.06414 2.86821 0.541748 4.12939 0.541748 5.44442C0.541748 9.16317 5.50008 14.6528 5.50008 14.6528C5.50008 14.6528 10.4584 9.16317 10.4584 5.44442C10.4584 4.12939 9.93602 2.86821 9.00615 1.93835C8.07628 1.00848 6.81511 0.486084 5.50008 0.486084Z"
                  fill="black"
                />
              </svg>
            </div>{" "}
            Bangalore
          </div>

          <div className="leading-[22.16px] text-[#000000] font-normal text-[16px] custom-lg:pr-40 2xl:pr-32">
            Lorem ipsum dolor sit amet consectetur. Quis tellus pulvinar sed
            placerat netus morbi. Proin leo vitae volutpat elit sed amet
            fermentum. A imperdiet et eu ut nibh nisl id nulla aliquam.
          </div>


          <div className="flex flex-col gap-5 max-h-500:gap-3 pt-10 max-h-500:pt-8">
            <h1 className="text-[24px] leading-[27.37px] text-[#0E0E0E]">
              Roles & Responsibilities
            </h1>
            <ul className="list-disc list-inside leading-[22.16px] text-[#000000] px-3">
              <li>Lorem ipsum dolor sit amet</li>
              <li>consectetur. Enim hac vitae sed</li>
              <li> massa luctus ac vitae. Augue et metu</li>
              <li>s a tortor consequat. Elit tincidunt </li>
              <li>odio imperdiet pellentesque diam</li>
            </ul>
          </div>



          <div className="flex flex-col gap-5 pt-10 max-h-500:pt-7">
            <h1 className="text-[24px] leading-[27.37px] text-[#0E0E0E]">
              Are you Match?
            </h1>
            <button
              onClick={() => {
                setModal(false);
                setModal2(true);
              }}
              className="w-[147px] h-[50.26px] hover:text-white hover:bg-[#2D5980] hover:border-[#2D5980] duration-300 font-semibold text-[17.59px] leading-[30.15px] flex justify-center items-center  text-black rounded-[10px] border-[1.26px] border-black"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

    )
}