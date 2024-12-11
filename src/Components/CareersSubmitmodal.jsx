import { useState } from "react";
export default function CareersSubmitmodal({modal2,setModal2}){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("+91");

    function submitHandler(e) {
        e.preventDefault();
        console.log("hello");
      }

      function changeHandler(e) {}


    return(
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
    )
}