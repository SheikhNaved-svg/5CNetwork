import {useState} from 'react'

export default function Form() {
    const [name,setName]=useState("")
    const [number,setNumber]=useState("");
    const [email,setEmail]=useState("");
    const [cname,setCname]= useState("")
    const [checkbox,setCheckbox]=useState([])

    function checkboxHandler(e){
      setCheckbox((prev)=>[...prev,e.target.name])

      console.log(checkbox)
    }

    const submitHandler=(e)=>{
        e.preventDefault()
       
    }
  return (
    <div className="   px-7 lg:pr-0  py-24 lg:py-0 custom-sm:flex justify-center custom-sm:w-full">
      <div className="w-full   custom-sm:w-[400px] lg:w-[341px] py-8    rounded-3xl  bg-[#D9D9D9]  bg-opacity-20 backdrop-blur-custom shadow-inset-light">
        <form onSubmit={submitHandler} className=" flex flex-col gap-8 lg:gap-4 items-center   rounded-2xl ">
          <div className="text-[24px]  leading-6 font-medium text-white">Book Demo</div>

          <div className="flex flex-col gap-2 pt-4 ">
            <input
              className="bg-transparent placeholder:text-[12px] text-white placeholder:font-medium border-b-2 focus:outline-none py-2  placeholder-white-50" 
              type="text"
              placeholder="Name Please"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              className="bg-transparent placeholder:text-[12px] text-white border-b-2 focus:outline-none py-2 placeholder-white-50 placeholder:font-medium "
              type="text"
              placeholder="Contact No."
              value={number}
              onChange={(e)=>setNumber(e.target.value)}
            />
            <input
              className="bg-transparent placeholder:text-[12px] text-white border-b-2 focus:outline-none py-2 placeholder-white-50 placeholder:font-medium"
              type="email"
              placeholder="Email Id."
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4 font-medium text-white  leading-4">
            <div className="text-[14px] text-center leading-3 font-medium pt-3 pb-1">
              Your Booking Demo As
            </div>

            <div className='flex gap-3 '>
            <div className="flex gap-1 items-center ">
              <input
                className="appearance-none w-5 h-5 lg:w-4 lg:h-4 border-2 border-white rounded-full bg-white checked:bg-[#2D5980]"
                type="checkbox"
                onChange={(e)=>checkboxHandler(e)}
                name='Radiologist'
              />
              <label className="font-medium text-[12px]  leading-4 ">Radiologist</label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                className="appearance-none border-2 border-white w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-white checked:bg-[#2D5980]"
                type="checkbox"
              />
              <label className="font-medium text-[12px] leading-4">Diagnostic Centre</label>
            </div>
            </div>

            <div className="flex gap-1 items-center">
              <input
                className="appearance-none border-2  border-white w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-white checked:bg-[#2D5980]"
                type="checkbox"
              />
              <label className="font-medium text-[12px] leading-4">Hospital/Chain Of Hospitals</label>
            </div>
          </div>

          <input
            className="placeholder-white-50 placeholder:text-[12px] text-white placeholder:font-medium py-2 focus:outline-0 border-b-2 bg-transparent"
            type="text"
            placeholder="Company Name"

            value={cname}
            onChange={(e)=>setCname(e.target.value)}
          />
          <button type='submit'  className="bg-white hover:text-white hover:bg-[#2D5980] duration-500 ease-in-out text-[14px]  font-semibold leading-6 text-black px-8 py-2 rounded-xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
