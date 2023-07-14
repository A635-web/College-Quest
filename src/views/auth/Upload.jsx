import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Header from "../../components/shared/Header"
import Footer from "../../components/shared/Footer"
import CountryCode from "../../components/data/countrycode.json"
import Instructor from "../../assets/images/college11.jpeg";
import { ArrowRightIcon, BookOpenIcon } from "@heroicons/react/outline";
import CTAButton from "../../components/Core/Button"
// import {uploadFile} from "../../services/authService"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import { apiConnector } from "../../services/apiconnector"
// import { contactusEndpoint } from "../../services/apis"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()




  








   
























  const submitContactForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      setLoading(true)
      // const res = await apiConnector(
      //   "POST",
      //   contactusEndpoint.CONTACT_US_API,
      //   data
      //)

    


      // console.log("Email Res - ", res)
      setLoading(false)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    
     <div className="flex flex-col gap-y-3.5">


     <Header/>
<div className="flex flex-row space-between translate-x-5 gap-5">
<div className=" flex flex-col justify-center items-center gap-y-14 w-[48%] ">


  


<form
 className="flex flex-col gap-7 font-bold border-4 border-solid border-richblack-500 rounded-bl-lg border-b-caribbeangreen-700 bg-richblack-50 p-5 "
 onSubmit={handleSubmit(submitContactForm)}
>
 <div className=" flex flex-col gap-5 lg:flex-row">
   <div className=" flex flex-col gap-2 lg:w-[48%] ">
     <label htmlFor="firstname" className="lable-style">
       First Name
     </label>
     <input
       type="text"
       name="firstname"
       id="firstname"
       placeholder="Enter first name"
       className="form-style"
       {...register("firstname", { required: true })}
     />
     {errors.firstname && (
       <span className="-mt-1 text-[12px] text-yellow-100">
         Please enter your name.
       </span>
     )}
   </div>
   <div className="flex flex-col gap-2 lg:w-[48%]">
     <label htmlFor="lastname" className="lable-style">
       Last Name
     </label>
     <input
       type="text"
       name="lastname"
       id="lastname"
       placeholder="Enter last name"
       className="form-style"
       {...register("lastname")}
     />
   </div>
 </div>

 <div className="flex flex-col gap-2 lg:w-[96%]">
   <label htmlFor="email" className="lable-style">
     Email Address
   </label>
   <input
     type="email"
     name="email"
     id="email"
     placeholder="Enter email address"
     className="form-style"
     {...register("email", { required: true })}
   />
   {errors.email && (
     <span className="-mt-1 text-[12px] text-yellow-100">
       Please enter your Email address.
     </span>
   )}
 </div>

 <div className="flex flex-col gap-2 w-64">
   <label htmlFor="phonenumber" className="lable-style">
     Phone Number
   </label>

   <div className="flex gap-5">
     <div className="flex w-[81px] flex-col gap-2">
       <select
         type="text"
         name="firstname"
         id="firstname"
         placeholder="Enter first name"
         className="form-style"
         {...register("countrycode", { required: true })}
       >
         {CountryCode.map((ele, i) => {
           return (
             <option key={i} value={ele.code}>
               {ele.code} -{ele.country}
             </option>
           )
         })}
       </select>
     </div>
     <div className="flex w-[calc(100%-90px)] flex-col gap-2">
       <input
         type="number"
         name="phonenumber"
         id="phonenumber"
         placeholder="12345 67890"
         className="form-style"
         {...register("phoneNo", {
           required: {
             value: true,
             message: "Please enter your Phone Number.",
           },
           maxLength: { value: 12, message: "Invalid Phone Number" },
           minLength: { value: 10, message: "Invalid Phone Number" },
         })}
       />
     </div>
   </div>
   {errors.phoneNo && (
     <span className="-mt-1 text-[12px] text-yellow-100">
       {errors.phoneNo.message}
     </span>
   )}
 </div>

 <div className="flex flex-col gap-2 ">
   <label htmlFor="message" className="lable-style">
     Message
   </label>
   <textarea
     name="message"
     id="message"
     cols="30"
     rows="7"
     placeholder="Enter your message here"
     className="form-style"
     {...register("message", { required: true })}
   />
   {errors.message && (
     <span className="-mt-1 text-[12px] border border-black">
       Please enter your Message.
     </span>
   )}
 </div>
{/* 
 <div className=" APP flex justify-center items-center gap-y-3.5  py-3">
<form onSubmit={handleSubmit(onsubmit)}>
<input type="file" {...register("file")} />

<input type="submit" className="border border-solid bg-caribbeangreen-700 text-white w-54  rounded"  />
</form>
</div> */}




 <div className="flex justify-center items-center py-14">
{/* <button
   disabled={loading}
   type="submit"
   className={`rounded-md bg-caribbeangreen-700 px-6 py-3 text-center text-[13px] font-bold text-white w-64 flex justify-center items-center shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
    ${
      !loading &&
      "transition-all duration-200 hover:scale-95 hover:shadow-none"
    }  disabled:bg-richblack-500 sm:text-[16px] `}
    
 >
  Upload
 </button> */}

 <CTAButton active={true} linkto={"/fileUpload"}>
                        <div>
                          Go for Upload 
                        </div>
                    </CTAButton>


</div> 
 





</form>

</div>

<div className='relative shadow-blue-200 '>

<img  src={Instructor}
alt="timelineImage"
className='shadow-white object-cover h-fit'
/> 

<div className='absolute flex flex-row bg-caribbeangreen-700 text-white uppercase py-7
                left-[25%] translate-x-[-50%] translate-y-[-50%]'>
    <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
        <p className='text-3xl font-bold'>5+</p>
        <p className='text-caribbeangreen-300 text-sm'>more Clubs</p>
    </div>

    <div className='flex gap-5 items-center px-7'>
    <p className='text-3xl font-bold'>10+</p>
        <p className='text-caribbeangreen-300 text-sm'>more Socities</p>
    </div>

</div>

</div>



     </div>















     <section className="py-20 bg-white -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center mt-32">
          <div
            className="w-full md:w-5/12 px-4 mr-auto ml-auto"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-primary">
              <BookOpenIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Benefits of College-Solution
            </h3>
            <ul className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 list-disc">
              <li>Best possible club and society that suits you.</li>
              <li>You can become a member of Anokhi Pahel and 
                 can teach needy children.</li>
              <li>Detailed information on various clubs project.</li>
              <li>You can create a healthy environment with your seniors.</li>
              <li>Can Improve your skills like leadership and managning and all.</li>
              <li>Latest recruitment related updates .</li>
              {/* <l1>
                Live Chat feature to connect you live to the Counselling team
                through Whatsapp.
              </l1> */}
            </ul>
            <a
              href="/contact-us"
              className="font-bold text-gray-800 mt-8 flex gap-2 items-center mb-8"
              data-aos="fade-right"
              data-aos-offset="140"
            >
              Contact Us
              <ArrowRightIcon className="text-primary w-5 h-5" />
            </a>
          </div>

          <div
            className="w-full md:w-4/12 px-4 mr-auto ml-auto"
            data-aos="flip-up"
            data-aos-offset="200"
          >
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-primary">
              {/* <img
                alt="..."
                src={nikhilSirImage}
                className="w-full align-middle rounded-t-lg"
              /> */}
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{
                    height: "95px",
                    top: "-94px",
                  }}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-primary fill-current"
                  ></polygon>
                </svg>
                <div data-aos="fade-up" data-aos-offset="100">
                  <h4 className="text-xl font-bold text-white">
                    Aditya Dixit
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                   I Aditya dixit,a Btech Student at Motilal Nehru National Institue of Technology Allahabad.
                   Here, through this Web APP I and my teammates tried to solve the problem of getting more and more oppertunities 
                   for our college student to become an active member of clubs and socities of our college.
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>



























     <Footer/>

</div>
    

  )
}

export default ContactUsForm
























































