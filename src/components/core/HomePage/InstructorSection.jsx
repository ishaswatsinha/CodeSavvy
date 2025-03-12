import React from 'react';
import instructorImg from '../../../assets/Images/InstructorImg.png'
import CTAButton from './Button'
import { FaArrowRight } from "react-icons/fa6";
import HighlightText from './HighlightText';

const InstructorSection = () =>{
    return(
        <div className='flex flex-row gap-14  mt-20 '>
            <div className='w-[50%]'>
                <div className='w-[500px] h-[500px]' >
                    <img src={instructorImg} alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-5 pt-24' >
                <h1 className='font-semibold text-4xl'>
                    Become an 
                    <HighlightText text={"instructor"}/>
                </h1>
                <p className='text-base font-semibold text-richblack-300'>
                Instructors worldwide inspire millions of students on CodeSavvy. With our powerful tools and resources, you can share your expertise, teach your passion, and make a lasting impact.
                </p>
                <div>
                <CTAButton  linkto='/instructors' >
                    <div className='flex flex-row gap-1 items-center'>
                        Start Today
                        <FaArrowRight/>
                    </div>
                </CTAButton>
                </div>
            </div>
            

        </div>
        
    )
}
export default InstructorSection;