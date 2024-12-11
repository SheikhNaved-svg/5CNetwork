
export default function HomeCompfive(){
    return(
        <div className="px-5 custom-sm:px-10 lg:px-20 2xl:px-40 custom-lg:px-60 py-20 flex flex-col gap-10">
        <div className="font-semibold text-[36px]  leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
          What do people have to say about 5C?
        </div>

        <div className="flex  w-full lg:flex-row xl:px-20  flex-col gap-5 lg:gap-10 2xl:gap-20 custom-lg:gap-40">
          {/*first reveiw*/}
          <div className="w-full lg:w-[50%]  flex flex-col custom-sm:flex-row custom-sm:items-center gap-2">
            <div className="custom-sm:w-[30%] custom-lg:w-[150px] ">
              <div className="font-semibold leading-6 tracking-[0.5px] text-[#010529]">
                Jain Diagnostics
              </div>
              <div className="text-[12px] leading-[18px] tracking-[0.5px] opacity-40">
                Bangalore,india
              </div>
            </div>

            <div className="custom-sm:w-[70%] text-[14px] leading-[21px] text-[#2D5980]">
              The quality of reporting is up to the mark, and everything about
              the process is already described.Technical problems are dealt with
              within minimal time as per the requirements of the clients. My
              favourite part is the fact that some of the top radiologists in
              the industry are always available for discussions and ready to
              work. We enjoy every bit of working with 5C Network, and their
              services-are truly unparalleled - reliable, rapid, and convenient.
              What else can we ask for.
            </div>
          </div>
          {/*second review*/}
          <div className="w-full  lg:w-[50%] flex flex-col custom-sm:flex-row custom-sm:items-center gap-2">
            <div className="custom-sm:w-[30%] custom-lg:w-[150px]">
              <div className="font-semibold leading-6 tracking-[0.5px] text-[#010529]">
                LN Diagnostics
              </div>
              <div className="text-[12px] leading-[18px] tracking-[0.5px] opacity-40">
                Bangalore,india
              </div>
            </div>

            <div className="custom-sm:w-[70%] text-[14px] leading-[21px] text-[#2D5980]">
              In our experience, 5C Network delivered exactly what we were
              looking for - punctuality and quality. We were stunned to receive
              CT scan results within a mere 45 minutes. We heartily thank them
              for their services that keep aiding us in our treatment processes.
              So many milestones lie ahead, keep it up!
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end gap-4 custom-lg:pr-20">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g filter="url(#filter0_b_66_2620)">
                <circle cx="16" cy="16" r="16" fill="#2D5980" />
                <circle
                  cx="16"
                  cy="16"
                  r="15.5294"
                  stroke="white"
                  strokeWidth="0.941177"
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.8967 16.2337C21.8967 16.518 21.6663 16.7484 21.382 16.7484L12.3305 16.7484L16.0842 20.5021C16.2852 20.7031 16.2852 21.029 16.0842 21.23C15.8832 21.431 15.5573 21.431 15.3563 21.23L10.724 16.5977C10.5229 16.3967 10.5229 16.0708 10.724 15.8698L15.3563 11.2374C15.5573 11.0364 15.8832 11.0364 16.0842 11.2374C16.2852 11.4384 16.2852 11.7643 16.0842 11.9653L12.3305 15.719L21.382 15.719C21.6663 15.719 21.8967 15.9495 21.8967 16.2337Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_66_2620"
                  x="-25.6"
                  y="-25.6"
                  width="83.2"
                  height="83.2"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.8" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_66_2620"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_66_2620"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g filter="url(#filter0_b_66_2623)">
                <circle cx="16" cy="16" r="16" fill="#2D5980" />
                <circle
                  cx="16"
                  cy="16"
                  r="15.5294"
                  stroke="white"
                  strokeWidth="0.941177"
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.573 16.234C10.573 15.9498 10.8034 15.7193 11.0877 15.7193L20.1392 15.7193L16.3855 11.9656C16.1845 11.7646 16.1845 11.4387 16.3855 11.2377C16.5865 11.0367 16.9124 11.0367 17.1134 11.2377L21.7458 15.8701C21.9468 16.0711 21.9468 16.397 21.7458 16.598L17.1134 21.2303C16.9124 21.4314 16.5865 21.4314 16.3855 21.2303C16.1845 21.0293 16.1845 20.7035 16.3855 20.5024L20.1392 16.7488L11.0877 16.7488C10.8034 16.7488 10.573 16.5183 10.573 16.234Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_66_2623"
                  x="-25.6"
                  y="-25.6"
                  width="83.2"
                  height="83.2"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.8" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_66_2623"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_66_2623"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    )
}