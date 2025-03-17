import React from 'react';
const CourseCard = ({cardData,currentCard,setCurrentCard})=>
    {
    return(
        <div className='flex flex-col items-center text-center'>
            <h3 className='bg-white w-[360px] h-16 flex items-center justify-center font-semibold text-2xl'>{cardData.heading}</h3>

            <button
                className={` flex flex-col w-[300px] p-5 gap-1 -translate-y-4
                ${currentCard === cardData.heading? 
                "bg-richblack-25 text-richblack-700 " :
                "bg-richblack-700 text-richblue-100"
                }`}
                onClick={()=>{setCurrentCard(cardData.heading)}}
            >
                <div className=' flex flex-col text-center p-2 border-b-2 border-richblack-100 border-dashed'>
                <p className={` text-xl font-bold text-left mb-2 ${currentCard===cardData.heading?"text-black":"text-richblue-5 "}`}>
                    {cardData.heading}
                </p>
                <p className=" text-left mb-6 text-base ">
                    {cardData.description}
                </p>
                </div>

                <div className=' flex justify-between w-full p-3'>
                <p>{cardData.level}</p>
                <p>{cardData.lessionNumber} Lessons</p>
                </div>

            </button>
        </div>
    )
}

export default CourseCard;