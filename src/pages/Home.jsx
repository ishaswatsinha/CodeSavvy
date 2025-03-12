import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import {Link} from "react-router-dom";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Hero1 from '../assets/Images/hero1.png';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
// import LottieAnimation from '../components/core/HomePage/LottieAnimation';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LanguageToolkit from '../components/core/HomePage/LanguageToolkit';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import OurTeam from '../components/core/HomePage/OurTeam';
import Footer from '../components/common/Footer'
const Home = () => {
    return (
        <div>

            {/* SECTION-1 --> BLUE-PART*/}
            <div className=' mx-auto relative flex flex-col w-11/12 items-center justify-between text-white'>
                {/* Elevate Your Skill Part */}
                <div className='flex lg:flex-row flex-col justify-between items-center '>
                    <div className='flex flex-col justify-between items-center '>
                        <Link to={"/signup"}>
                        <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>

                            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900' >
                                <p>Become an Instructor</p>
                                <FaArrowRight />
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
                    <div className='w-[80%] mt-24  '>
                        <img src={Hero1} alt='' className='object-cover w-full  '/> 
                        {/* <LottieAnimation /> */}
                    </div>
                </div>
                {/*Code Block section1 */}
                <div className='w-11/12' >
                <CodeBlocks 
                    position={'lg:flex-row'}
                    heading={
                        <div className='lg:text-4xl  font-semibold sm:w-full'>
                            Turn Potential
                            <HighlightText text={"into Power "} />
                            with our online courses
                        </div>
                    }
                    subheading={
                        "Designed and Taught by industry veterans with extensive coding experience, our courses are thoughtfully designed to share their passion and insights with you."
                    }
                    ctabtn1={
                        {
                            btnText: "try it yourself",
                            linkTo: "/login",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "learn more",
                            linkTo: "/signup",
                            active: false,
                        }
                    }
                    codeblock=
                    {
                        // `<!DOCTYPE html>\n<html>\n<head>
                        // <title>CodeSavvy</title>
                        // <linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a><a href="two/">Two</a>
                        // <a href="three/">Three</a>\n</nav>`
                        `<!DOCTYPE html>\n<html>\n<head>
                        <title>CodeSavvy</title>
                        <linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1> Namastey ji !!! </h1>\n<h2> Welcome to CodeSavvy 🙏 </h2>\n<a href="two/">Two</a>
                        <a href="three/">Three</a>\n</body>`
                    }
                    codeColor={"text-yellow-25"}
                    backgroundGradient={"grad"}

                />
                </div>
                {/* Code Block section2 */}
                <div className='w-11/12'>
                <CodeBlocks 
                    position={'lg:flex-row-reverse'}
                    heading={
                        <div className='lg:text-4xl  font-semibold sm:w-full'>
                            Start
                            <HighlightText text={"Coding "} />
                            in Seconds
                        </div>
                    }
                    subheading={
                        "Get your hands dirty! With Our hands-on learning method has you coding and building from the very first step."
                    }
                    ctabtn1={
                        {
                            btnText: "Lession",
                            linkTo: "/login",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "learn more",
                            linkTo: "/signup",
                            active: false,
                        }
                    }
                    codeblock=
                    {`<!DOCTYPE html>\n<html>\n<head>
                        <title>CodeSavvy</title>
                        <linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a></h1>\n<nav><a href="one/">One</a><a href="two/">Two</a>
                        <a href="three/">Three</a>\n</nav>`
                    }
                    codeColor={"text-yellow-25"}
                    backgroundGradient={"grad2"}
                />
                </div>
                {/* TimelineSection */}
                <TimelineSection/>
            </div>


            {/* SECTION-2 --> ORANGE-PART  */}
            <div className='bg-orange text-richblack-700'>
                <div className=' w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                    <div className='h-[150px]'></div>
                    <div className='flex flex-row gap-7 text-white'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3'>
                                Full Catalog 
                            </div>
                            <FaArrowRight />
                        </CTAButton>
                        <CTAButton active={false} linkto={"/login"}>
                        <div> 
                                Learn More
                            </div>     
                        </CTAButton>
                    </div>
                </div>
                
                {/* OUR-TEAM SECTION */}
                <OurTeam/>
                
            </div>

            {/* Section 3 --> WHITE-PART */}
            <div className=' bg-white w-full  '>
                <div className='Toolkit-bg w-full p-24'>
                    <div className=' mx-auto relative flex flex-col w-11/12 items-center justify-center text-richblack-900'>
                    <LanguageToolkit/>
                    </div>
                </div>
                <div className='mx-auto relative flex flex-col w-11/12 items-center justify-center text-richblack-900'>
                    <InstructorSection/>
                </div>
            </div>
            

            

            
            <div className='min-w-full  bg-white footer-bg'>
                <Footer/>
            </div>
            
        </div>
    )

}
export default Home