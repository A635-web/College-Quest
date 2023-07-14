import React from 'react'
import Instructor from "../../assets/images/college11.jpeg";

import HighlightText from './Highlighted'
import CTAButton from "./Button"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-row gap-20 items-center'>

        <div className='w-[50%]'>
            <img
                src={Instructor}
                alt=""
                className='shadow-white'
            />
        </div>

        <div className='w-[50%] flex flex-col gap-10'>
            <div className='text-4xl font-semobold w-[50%]'>
                Become a
                <HighlightText text={"Candidate"} />
            </div>

            <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
               and Explore Your Interests,Attend Meetings and Events,Engage Actively and Take on Leadership Roles.Remember, college societies and clubs are not only about pursuing your passions but also about building friendships, expanding your horizons, and enjoying your college experience to the fullest. Make the most of this opportunity and cherish the memories you'll create along the way.
            </p>

            <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2 items-center'>
                        Start your Journey
                        <FaArrowRight />
                    </div>
                </CTAButton>
            </div>


        </div>

      </div>
    </div>
  )
}

export default InstructorSection
