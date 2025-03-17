import React from 'react'
import  {HomePageExplore} from "../../../data/homepage-explore";
import HighlightText from './HighlightText';
import { useState } from 'react';
import CourseCard from './CourseCard';


const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const CodeBeyond = ()=>{

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

    const handleTabClick = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
        console.log(result[0].courses);
    };

    return(
        <div className='flex flex-col items-center'>

            <div className='text-3xl font-semibold text-center lg:text-4xl text-richblack-900'>
            Code beyond 
                <HighlightText
                text={"boundaries"}
                />
            </div>
            <p className='text-center text-richblack-300 text-sm text-[16px] mt-3'>Create without limits— Create anything with code</p>

                <div className='mt-5 flex flex-row rounded-full bg-richblack-800 mb-3 border-richblack-100
                    px-1 py-1'>
                    {
                        tabsName.map( (element, index) => {
                            return (
                                <div 
                                className={` text-[13px] lg:text-[16px] flex flex-row items-center gap-2 
                                    ${currentTab === element 
                                    ? "bg-white text-richblack-900 font-medium"
                                    : "text-richblack-200" } rounded-full transition-all duration-200 cursor-pointer
                                    hover:bg-richblack-600 hover:text-richblack-5 text-center px-3 py-1 lg:px-7 lg:py-2`}
                                key={index}
                                onClick={() => handleTabClick(element)}
                                >
                                    {element}
                                </div>
                            )
                        })
                    }

                    </div>

      {/* course card */}

            <div className=' flex gap-9 w-full justify-center mt-5 flex-wrap  right-0 left-0 mr-auto ml-auto'>
                {
                    courses.map(  (element, index) => {
                        return (
                            <CourseCard
                            key={index}
                            cardData = {element}
                            currentCard = {currentCard}
                            setCurrentCard = {setCurrentCard}
                            />
                        )
                    } )
                }
            </div>
        </div>
        
    )
}

export default CodeBeyond;