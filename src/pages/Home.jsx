import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from "react-router-dom";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Hero1 from '../assets/Images/hero1.png';
const Home = () => {
    return (
        <div>
            {/* secttion1 */}
            <div className='relative flex flex-row w-11/12  text-white justify-between items-center'>
                <div className='flex flex-col justify-between items-center w-[80%]'>
                    <Link to={"/signup"}>
                    <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>

                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900' >
                            <p>Become an Instructor</p>
                            <FaArrowRightLong />
                        </div>

                    </div>
                    </Link>
                    <div className='text-center text-4xl font-semibold mt-7 '>
                        Elevate Your Skill 
                        <HighlightText text={"Anytime Anywhere"} />
                    </div>
                    <div className='w-[90%] text-center text-sm font-bold text-richblack-300 mt-4'>
                    Wherever you are, whenever you’re ready—our online coding courses offer the flexibility to learn at your own speed. Enjoy hands-on projects, fun quizzes, and personalized instructor feedback along the way!—all designed to help you succeed!
                    </div>
                    <div className='flex flex-row gap-7 mt-8'>
                        <CTAButton active={true} linkto={"/signup"}>
                            Learn More
                        </CTAButton>
                        
                        <CTAButton active={false} linkto={"/login"}>
                            Book a Demo
                        </CTAButton>
                    </div>
                </div>
                <div className='w-[800px] mt-24'>
                    <img src={Hero1} alt='' className='object-cover w-full  '/> 
                </div>
            </div>

            {/* secttion2 */}
            {/* secttion3 */}
            {/* Footer */}
        </div>
    )

}
export default Home