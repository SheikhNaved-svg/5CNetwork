import data from "../data/data"
import { useState,useEffect,useRef } from "react"
import { NavLink } from "react-router-dom"
import gsap from 'gsap'
import Card from "../Components/Card"



export default function Blogs(){
    const [datas,setDatas]=useState(data)
    const arrowRef=useRef(null)
    const arrowRef2=useRef(null)
    const a = datas[0]?.content || "";

  
  const calculateReadTime = (text) => {
    const wordsPerMinute = 200; 
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  const readingTime = calculateReadTime(a);
  useEffect(()=>{
    window.scrollTo(0,0)
},[])

  useEffect(() => {
    const tl=gsap.timeline({repeat:-1});
    tl.to(arrowRef.current,{duration:.7,display:'none'})
    tl.to(arrowRef2.current,{duration:.7,display:'block'})
    tl.to(arrowRef2.current,{duration:.7,display:'none'})
    tl.to(arrowRef.current,{duration:.7,display:'block'})

    return ()=>{
        tl.kill();
    };
  }, []);
  
  
    return (
      <div className="font-custom">
        <div className="w-full  flex justify-center lg:px-[24px]  ">
          <div className="pt-40 2xl:pt-64 pb-16 px-10 md:px-20 lg:px-40 2xl:px-80 w-full h-full flex flex-col gap-10 text-white bg-custom-gradient  lg:rounded-b-[40px]">
            <h1 className="text-[48px] font-medium leading-[60px] tracking-wide text-center">
              Blogs
            </h1>
            <p className="text-[16px] 2xl:text-2xl leading-6 tracking-[0.5px] text-justify lg:text-center">
              Lörem ipsum fyngen plankning. Triage plötslig sportbarnsdöd
              mamorel utom ongar. Diheten trelingar geonde polyrörade. Per täns.
              Visual search kontragt om filotes. Gigarade sosade inaskad teskap.
              Padda nevis såväl som hemitår, inte heterotesa. Div piligen,
              åsiktstaliban. Du kan vara drabbad.
            </p>
          </div>
        </div>

        {/*large card*/}
        <div className="w-full  px-5 md:px-10 lg:px-20 2xl:px-40 custom-lg:px-60 py-16 ">
          <NavLink to={`/innerblog/${datas[0].id}`}>
            <div className=" border flex flex-col lg:flex-row lg:justify-center gap-10 lg:gap-14 custom-lg:gap-28  p-2 py-5 lg:py-2 2xl:p-5 rounded-2xl ">
              {/*left*/}
              <div className="w-full lg:w-[50%]    md:px-40 lg:px-0 ">
                <img
                  className="lg:h-full xl:h-[280px] rounded-[20px] 2xl:h-full custom-lg:h-[428px]"
                  src={datas[0].imageUrl}
                  alt="error"
                  loading="lazy"
                  width="100%"
                />
              </div>
              {/*right*/}
              <div className="md:px-10 lg:px-0 lg:w-[50%] lg:pr-10 2xl:flex 2xl:flex-col gap-6">
                <div className="flex gap-3">
                  <p className="text-[#2D5980] font-medium text-[12px] 2xl:text-[20px]  leading-[18px]">
                    {datas[0].author}
                  </p>{" "}
                  <p className="text-[12px] 2xl:text-[20px] text-[#6E6E6E] font-medium leading-[18px]">
                    {datas[0].date}
                  </p>
                </div>
                <h1 className="text-[24px] 2xl:text-[36px] font-semibold leading-[36px] text-[#2C2C2C]">
                  {datas[0].title}
                </h1>
                <p className="py-5 text-[14px] 2xl:text-[20px] leading-[21px] 2xl:leading-[30px] text-[#6E6E6E] flex flex-col gap-5">
                  <div>{datas[0].content.substring(0, 187)}</div>
                  <div>{datas[0].content.substring(187, 500)}</div>
                </p>
                <div className="flex justify-between">
                  <p className="font-medium text-[12px] 2xl:text-[20px] leading-5 text-[#6E6E6E]">
                    {readingTime} Min Read
                  </p>
                  <div className="flex items-center">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="54"
                        height="10"
                        viewBox="0 0 54 10"
                        fill="none"
                      >
                        <path
                          d="M0.0253906 9V0.544922H3.54688C5.46875 0.544922 6.57031 1.57031 6.57031 3.23438V3.24609C6.57031 4.33008 6.00781 5.26172 5.04102 5.64258L6.82227 9H4.81836L3.24219 5.90625H1.79492V9H0.0253906ZM1.79492 4.61719H3.35352C4.23828 4.61719 4.75977 4.11328 4.75977 3.28125V3.26953C4.75977 2.45508 4.21484 1.92773 3.33008 1.92773H1.79492V4.61719ZM10.8125 9.13477C8.84961 9.13477 7.66016 7.85156 7.66016 5.7832V5.77734C7.66016 3.72656 8.86133 2.4082 10.7422 2.4082C12.623 2.4082 13.7949 3.69727 13.7949 5.64844V6.18164H9.35352C9.37109 7.24219 9.93945 7.85742 10.8477 7.85742C11.5977 7.85742 12.0137 7.45898 12.1309 7.21289L12.1484 7.17773H13.7422L13.7305 7.23633C13.5312 8.04492 12.6992 9.13477 10.8125 9.13477ZM10.7715 3.69141C10.0273 3.69141 9.47656 4.19531 9.37109 5.10938H12.1543C12.0488 4.17188 11.5156 3.69141 10.7715 3.69141ZM16.9531 9.09961C15.7227 9.09961 14.8496 8.33789 14.8496 7.16602V7.1543C14.8496 5.99414 15.7461 5.31445 17.3516 5.2207L18.9102 5.12695V4.59375C18.9102 4.03711 18.5293 3.7207 17.8262 3.7207C17.2109 3.7207 16.8184 3.9375 16.6836 4.31836L16.6719 4.3418H15.0898L15.0957 4.28906C15.2305 3.1582 16.2969 2.4082 17.9199 2.4082C19.6309 2.4082 20.5977 3.2168 20.5977 4.59375V9H18.9102V8.14453H18.8047C18.4766 8.74219 17.7969 9.09961 16.9531 9.09961ZM16.5195 7.06055C16.5195 7.55273 16.9355 7.85156 17.5273 7.85156C18.3184 7.85156 18.9102 7.33008 18.9102 6.65039V6.17578L17.6094 6.25781C16.877 6.30469 16.5195 6.58008 16.5195 7.04883V7.06055ZM24.5762 9.09961C22.9648 9.09961 21.957 7.83984 21.957 5.77734V5.76562C21.957 3.69141 22.9414 2.44336 24.5762 2.44336C25.4609 2.44336 26.1816 2.87695 26.5039 3.58008H26.6094V0.0820312H28.3203V9H26.6094V7.99805H26.5039C26.1699 8.69531 25.4844 9.09961 24.5762 9.09961ZM25.1562 7.68164C26.0645 7.68164 26.627 6.9668 26.627 5.7832V5.77148C26.627 4.58789 26.0586 3.86133 25.1562 3.86133C24.2539 3.86133 23.6973 4.58789 23.6973 5.76562V5.77734C23.6973 6.9668 24.2539 7.68164 25.1562 7.68164ZM33.3535 9V0.544922H38.8906V2.00391H35.123V4.27148H38.5625V5.67188H35.123V9H33.3535ZM42.4883 9.13477C41.041 9.13477 40.2969 8.25586 40.2969 6.7207V2.54883H42.0078V6.32812C42.0078 7.24219 42.3535 7.7168 43.1621 7.7168C44.0059 7.7168 44.4629 7.14844 44.4629 6.27539V2.54883H46.1738V9H44.4629V8.00391H44.3574C44.0645 8.70703 43.4082 9.13477 42.4883 9.13477ZM47.9492 9V0.0820312H49.6602V9H47.9492ZM51.4883 9V0.0820312H53.1992V9H51.4883Z"
                          fill="#2D5980"
                        />
                      </svg>
                    </div>

                    <div ref={arrowRef} className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="20"
                        viewBox="0 0 31 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_164_1353)">
                          <path
                            d="M4 10H27"
                            stroke="#2D5980"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M24.5 13.3333L27.8333 10"
                            stroke="#2D5980"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M24.5 6.66663L27.8333 9.99996"
                            stroke="#2D5980"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_164_1353">
                            <rect width="31" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div ref={arrowRef2} className="hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_164_1346)">
                          <path
                            d="M4.16669 10H15.8334"
                            stroke="#2D5980"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 13.3333L15.8333 10"
                            stroke="#2D5980"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 6.66663L15.8333 9.99996"
                            stroke="#2D5980"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_164_1346">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        {/*testing*/}
       

        {/*horizontal line*/}
        <div className="w-full h-[2px] bg-custom-gradient4"></div>

        {/*small cards*/}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 2xl:gap-20 pt-16 px-5 lg:px-20 2xl:px-40 custom-lg:px-60">
          {datas.slice(1).map((item,index) => (
            <NavLink  to={`/innerblog/${item.id}`}>
              <Card
                author={item.author}
                date={item.date}
                title={item.title}
                content={item.content}
                image={item.imageUrl}
              />
            </NavLink>
          ))}
        </div>

          {/*pagination*/}
        <div className="flex gap-3 justify-center items-center w-full py-10">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
            >
              <circle cx="5.5" cy="5" r="5" fill="#2D5980" />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
            >
              <circle cx="5.5" cy="5" r="5" fill="#D9D9D9" />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
            >
              <circle cx="5.5" cy="5" r="5" fill="#D9D9D9" />
            </svg>
          </div>
        </div>
      </div>
    );
}