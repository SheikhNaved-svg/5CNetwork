import { useEffect, useRef, useState } from "react";
import { bw2 } from "../assets/assets";
import gsap from "gsap";
import { group } from "../assets/assets";
import CareerCard from "../Components/CareerCard";
import Singlejob from "../Components/Singlejob";

export default function Careers() {

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("+91");
  const aniRef = useRef(null);
  const vacanciesRef = useRef(null);

  useEffect(() => {
    const time = setTimeout(() => {
      gsap.from([...aniRef.current.children].slice(1), {
        duration: 2,
        stagger: 1,
        opacity: 0,
        repeat: -1,
      });
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  useEffect(()=>{
        window.scrollTo(0,0)
},[])
  function submitHandler(e) {
    e.preventDefault();
    console.log("hello");
  }
  function scrollTo() {
    vacanciesRef.current.scrollIntoView();
  }

  function changeHandler(e) {}
  return (
    <div className="scroll-smooth">
      <div className="w-full font-custom  flex justify-center lg:px-[24px] custom-lg:px-[70px]  ">
        <div className="pt-40 2xl:pt-64 pb-16 px-10 md:px-20 lg:px-40 2xl:px-80 w-full h-full flex flex-col items-center gap-10 text-white bg-custom-gradient  lg:rounded-b-[40px]">
          <h1 className="text-[48px] font-medium leading-[60px] tracking-wide text-center">
            Career
          </h1>
          <p className="text-[16px] 2xl:text-2xl leading-6 tracking-wide text-justify lg:text-center">
            We’re always looking for creative & talented people to work with us.
          </p>
          <button
            onClick={scrollTo}
            className="bg-[#2D5980] text-[#FFFFFF] hover:text-black hover:bg-[#FFFFFF] hover:border-black border-2 border-[#2D5980]  duration-300 text-[#FFFFF] rounded-[8px] w-[138px] h-[40px] flex justify-center items-center font-semibold text-[14px] leading-[24px]"
          >
            View Positions
          </button>
        </div>
      </div>

      {/*life at 5C*/}

      <div className="w-full font-custom py-20 px-5 lg:px-10 2xl:px-40 custom-lg:px-60 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-20">
        {/*left*/}
        <div className="flex flex-col items-start gap-7 w-full lg:w-[60%]">
          <h1 className=" font-semibold text-[36px] text-center   leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
            Life At 5C
          </h1>
          <div className="flex flex-col gap-5">
            <p>
              Someone wise said that a picture speaks a thousand words. In
              healthcare, a diagnostic image indeed does. At 5C Network, we are
              channelizing these images and words towards transformation of the
              healthcare landscape of India.
            </p>
            <p>
              Delayed and missed diagnosis are some of the leading causes of the
              rising healthcare burden in India. In many cases, the price is
              loss of life or severe disability. To improve healthcare outcomes,
              we first need to know what's wrong. The right diagnosis is 3/4th
              the treatment. 5C Network is democratizing access to timely and
              accurate diagnosis, one specialty at a time. We are building the
              diagnostic operating ecosystem, starting with radiology.
            </p>
            <p>
              Large hospitals are now using technology for demand generation,
              logistics and data warehousing. The time for tech becoming a
              keystone in clinical workflows has arrived. Building the diagnosis
              stack of the future will be a massive feat, and we are first
              building a team that is energized towards this goal.
            </p>
            <p>
              We are looking at passionate and dedicated individuals to be a
              part of this revolutionary journey. Young and agile, 5C Network is
              set to soar its wings in the coming years and if you are someone
              who thrives in a fast-paced and rapidly evolving growth process,
              then 5C Network is the place for you.
            </p>
          </div>
        </div>
        {/*right logo*/}
        <div className="w-full flex justify-center lg:w-[40%] ">
          <img src={group} alt="image" loading="lazy" />
        </div>
      </div>
      
      {/*horizontal line*/}
      <div className="w-full h-[2px] bg-custom-gradient4"></div>

      {/*next */}

      <div className="px-5 font-custom lg:px-10 2xl:px-40 custom-lg:px-60 py-20 flex flex-col gap-20">
        <h1 className="text-center  font-semibold text-[36px]   leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
          To get the best, we give the best
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  gap-y-10 gap-x-10 custom-lg:gap-x-28">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>


      {/*next*/}
      <div className="w-full font-custom py-10 px-5 lg:px-10 custom-lg:px-60 2xl:px-40 flex flex-col gap-10 lg:items-center lg:flex-row">
        {/*left*/}
        <div className="w-full flex flex-col gap-5 items-start lg:w-[40%] lg:pr-10 2xl:pr-32 custom-lg:pr-52">
          <h1 className=" font-semibold text-[36px]  leading-[54px] tracking-[0.5px] text-center text-transparent bg-clip-text bg-custom-gradient2">
            Driving our culture
          </h1>
          <p className="text-[14px] leading-[21px] text-[#2D5980]">
            Lörem ipsum fyngen plankning. Triage plötslig sportbarnsdöd mamorel
            utom ongar. Diheten trelingar geonde polyrörade. Per täns. Visual
            search kontragt om filotes. Gigarade sosade inaskad teskap. Padda
            nevis såväl som hemitår, inte heterotesa. Div piligen,
            åsiktstaliban. Du kan vara drabbad.{" "}
          </p>
        </div>
        {/*right*/}
        <div className="relative h-[600px] w-full  lg:w-[60%]">
          <div
            ref={aniRef}
            className="w-full absolute   h-[600px] flex flex-col items-center justify-around "
          >
            <h3 className="font-semibold text-[24px] md:text-[36px] leading-[54px] tracking-[0.5px] text-[#000000]">
              Truthful <span className="font-normal">to the core</span>
            </h3>
            <h3 className="font-semibold text-[24px] md:text-[36px] leading-[54px] tracking-[0.5px] text-[#000000]">
              Limitless <span className="font-normal">thinking</span>
            </h3>
            <h3 className="font-normal text-[24px] md:text-[36px] leading-[54px] tracking-[0.5px]">
              Forward with{" "}
              <span className="font-semibold text-[24px]  md:text-[36px] leading-[54px] tracking-[0.5px] text-[#000000]">
                courage
              </span>
            </h3>
            <h3 className="font-semibold text-[24px] md:text-[36px] leading-[54px] tracking-[0.5px] text-[#000000]">
              Knowledge <span className="font-normal">is power</span>
            </h3>
          </div>

          <div className="w-full absolute h-[600px] flex flex-col justify-between">
            <div className="w-full h-[2px] bg-custom-gradient4"></div>
            <div className="w-full h-[2px] bg-custom-gradient4"></div>
            <div className="w-full h-[2px] bg-custom-gradient4"></div>
            <div className="w-full h-[2px] bg-custom-gradient4"></div>
            <div className="w-full h-[2px] bg-custom-gradient4"></div>
          </div>
        </div>
      </div>

      {/*vacancies*/}
      <div
        ref={vacanciesRef}
        className="w-full px-5 lg:px-10 2xl:px-40 custom-lg:px-60 pt-10 "
      >
        <h1 className=" font-semibold text-[36px]  leading-[54px] tracking-[0.5px] text-center text-transparent bg-clip-text font-custom bg-custom-gradient2">
          Our Current Vacancies
        </h1>
        <div className="hidden md:flex gap-10 custom-lg:gap-16 justify-center py-10 font-medium  leading-[24px] ">
          <h6>All</h6>
          <h6>Lorem Ipsum</h6>
          <h6>Lorem Ipsum</h6>
          <h6>Lorem Ipsum</h6>
          <h6>Lorem Ipsum</h6>
        </div>

        {/* */}
        <div className="hidden md:block">
          <div className="hidden md:flex w-full font-medium  py-10 border-b-2 border-[#CACACA]  text-[#000000] leading-[24px]">
            <div className="w-[50%] ">Title</div>
            <div className="w-[25%]">Service</div>
            <div className="w-[25%]">Location</div>
          </div>
        </div>
      </div>

      {/*jobs*/}
      <div className=" px-5 md:px-10 2xl:px-40 custom-lg:px-60 py-10 md:py-0 flex flex-col gap-5 md:gap-0">
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
        <Singlejob
          setModal={setModal}
          title={"DevOps Engineer"}
          service={"Development"}
          location={"Bangalore"}
        />
      </div>

      {/*modal applynow*/}
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

      {/*modal submit*/}
      <div
        className={`${
          modal2 ? "flex" : "hidden"
        } z-[999] w-full h-screen  justify-center items-center fixed top-0  `}
      >
        <div className="bg-white font-custom  flex flex-col justify-center shadow-xl h-full w-full xl:w-[1200px] 2xl:h-[650px] md:h-[600px] lg:h-[550px] z-10 p-10 lg:px-20 rounded-[25px]">
          <div className="flex justify-between">
            <h1 className="font-medium text-[30px] md:text-[36px] leading-[41.08px] text-[#0E0E0E]">
              DevOps Engineer
            </h1>
            <button onClick={() => setModal2(false)}>
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

          {/*details submit*/}
          <form
            onSubmit={submitHandler}
            className="w-full  md:px-10 py-10 max-h-500:py-5 flex flex-col gap-5 lg:gap-10"
          >
            <div className="flex flex-col gap-5 md:gap-32 md:flex-row  w-full">
              <div className="md:w-[50%]">
                <input
                  className="focus:outline-none focus:placeholder:text-gray-300 w-full  placeholder:text-[#6B5B6B] border-b-[1.25px] py-3 border-[#212121]"
                  type="text"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="md:w-[50%]">
                <input
                  className="focus:outline-none w-full focus:placeholder:text-gray-300 placeholder:text-[#6B5B6B] border-b-[1.25px] py-3 border-[#212121]"
                  type="text"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 md:gap-32 md:flex-row  w-full">
              <div className="md:w-[50%] relative">
                <input
                  className="focus:outline-none  pl-14 focus:placeholder:text-gray-300 w-full  placeholder:text-[#6B5B6B] border-b-[1.25px] py-3 border-[#212121]"
                  type="number"
                  placeholder="Phone*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <select
                  className="absolute top-3 left-0 focus:outline-none text-[#6B6B6B]"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                >
                  <option value="+91">+91</option>
                  <option value="+71">+71</option>
                  <option value="+81">+81</option>
                  <option value="+61">+61</option>
                </select>
              </div>
              <div className="md:w-[50%] pt-2 ">
                <label
                  className="leading-[16.1px] flex justify-center items-center h-[43px] w-full tracking-[-3%] text-[#6B6B6B] rounded-[10px] bg-[#EFEFEF]"
                  htmlFor="file"
                >
                  Click here to upload your CV.
                </label>
                <input
                  id="file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={changeHandler}
                  className="hidden"
                />
              </div>
            </div>

            <div className="flex w-full justify-center pt-10">
              <button
                type="submit"
                onClick={() => {
                  setModal2(false);
                }}
                className="w-[147px] h-[50.26px] hover:text-white hover:bg-[#2D5980] hover:border-[#2D5980] duration-300 font-semibold text-[17.59px] leading-[30.15px] flex justify-center items-center  text-black rounded-[10px] border-[1.26px] border-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/*next mail*/}
      <div className="w-full font-custom flex flex-col md:flex-row gap-10 xl:px-20 custom-lg:px-60  py-10 lg:py-20 custom-lg:py-40 ">
        {/*left*/}
        <div className="w-full md:w-[50%] px-5 lg:px-10 custom-lg:px-0 flex flex-col items-start gap-16">
          <div className="flex w-full flex-col items-start gap-5">
            <h1 className="font-semibold text-[36px] text-center   leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
              Send your CV
            </h1>
            <p className="leading-[24px] text-[#2D5980]">
              Can’t see the right role for you?<br></br>
              We still want to hear from you.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <h3 className="text-[24px] leading-[36px] text-[#000000]">
              Mail us now!
            </h3>
            <a
              href="mailto:hr@5cnetwork.com"
              className="text-[#2D5980] underline"
            >
              hr@5cnetwork.com
            </a>
          </div>
        </div>
        {/*right*/}
        <div className="px-5 md:px-0 md:w-[50%] flex justify-end ">
          <img
            className="rounded-[25px]"
            src={bw2}
            alt="image"
            width="100%"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
