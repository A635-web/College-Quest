import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import {Link} from "react-router-dom"
import HighlightText from "../../components/Core/Highlighted";
import CTAButton from "../../components/Core/Button"

import CodeBlocks from  "../../components/Core/CodeBlock";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import ExploreMore from  "../../components/Core/ExploreMore";
import TimelineSection from  "../../components/Core/TimelineSection";
import InstructorSection from  "../../components/Core/InstructorSection";
import LearningLanguageSection  from "../../components/Core/LearningLanguageSection";
import  Faq from "../../components/Core/Faq.jsx";

// import "./index.css";
import {FaArrowRight} from "react-icons/fa"
import videoUrl from "../../assets/images/video.mp4";

import { serverUnauth } from "../../helpers/apiCall";

import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomePage = () => {
  const navigate = useNavigate();
  const myRef = useRef(null);
  useEffect(() => {
    gsap.from(myRef.current, {
      duration: 1,
      ease: "power2.out",
      opacity: 0,
      y: "-30%",
    });

    AOS.init({ duration: 1200, delay: 500 });
    AOS.refresh();


  }, []);

  return (
    <div className={"bg-richblack-5"}>
     <Header />
   
   <div className={"bg-richblack-5"}>
   {/* section-2 */}

   <div className='text-center text-4xl font-semibold mt-7'>
            MNNIT ALLAHABAD
            <HighlightText text={""} />
        </div>

        <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
        HEY THERE, If you are worried about how to explore your college, which club or society will suit you and in various clubs which type of project you will do.
    So you are at the right place, here you can get all news about the hiring and recruitment process of our various societies and clubs.Here you can get many more things about your college...... 
  
        </div>

        <div className='flex flex-row gap-7 mt-8 justify-center'>
            <CTAButton active={true} linkto={"/signup"}> 
                Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}> 
                About 
            </CTAButton>
        </div>

        <div className='mx-3 my-12 shadow-blue-200 '>
            <video
            muted
            loop
            autoPlay
            >
            <source  src={videoUrl} type="video/mp4" />
            </video>
        </div>

        {/* Code Section 1 */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your Dreams
                        <HighlightText text={"with our Clubs"}/>
                        
                    </div>
                }
                subheading = {
                    " Clubs provide a great platform to usher-in the distinctive perspectives and life experiences that all students bring to the college. They indeed help in students’ transformation and holistic development in a big way. So it is that these clubs are especially aimed at helping students to get involved and find their own niche on their college campus."
                }
                ctabtn1={
                    {
                        btnText: "explore",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`Clubs at a college are attuned to help students \n get most out of their experience while they are\n enrolled at the college for their academic pursuits.\n These student clubs offer limitless opportunities for student leadership\n and participation beyond classroom\n setup and academic programme.`}
                codeColor={"text-black-25"}
            />
        </div>

                {/* Code Section 2 */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your Dreams
                        <HighlightText text={" with our Socities"}/>
                       
                    </div>
                }
                subheading = {
                    "    If you really want to experience college life, you should plan to make the most of your free time when you are not attending any lectures and classes. The activity-packed student lifestyle means that finding student organizations to match your interests is not likely to be difficult."
                }
                ctabtn1={
                    {
                        btnText: "explore",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={` Each college has its own selection of organizations which are operated by current students or alumni.\n Their activities may be based on the major fields of study at the institution, while many societies\n focus on particular interests of students.\n Take the chance to join or form student organizations that cover your interests, and explore opportunities to network, share and develop leadership skills.`}
                codeColor={"text-black-25"}
            />

        </div>
        {/* <ExploreMore /> */}
        </div>
   {/*Section 2  */}


  
                          
                              
                                
                          
                            
                      
                        
                            
                              
                            
                        
                    

              


          <div> 

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

                <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the Skills you need for 
                        <HighlightText text={"Join the society and club that is in demand"} />
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>
                    <div className='text-[16px]'>
                    The modern Era is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                    </div>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn more
                        </div>
                    </CTAButton>
                    </div>

                </div>
                
                

                <TimelineSection />

                {/* <LearningLanguageSection /> */}

            </div>

            

      </div>













          {/*section-3*/}
       <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

<InstructorSection />

<h2 className='text-center text-4xl font-semobold mt-10'></h2>
{/* Review Slider here */}
</div>
<section className="our-achievements mx-16 mt-12 mb-16">
         
         <div data-aos="fade-right" data-aos-delay="400" className="bg-richblack-5">
           <Faq/>
         </div>
         </section>

{/*Footer */}
<Footer />





</div>

        
)

     
  
      {/*Section 2  */}


      {/*Section 3 */}


      {/*Footer */}







}
 export default HomePage;




