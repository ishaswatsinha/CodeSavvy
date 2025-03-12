import React from 'react';
import HighlightText from './HighlightText';
import img1 from '../../../assets/Images/Know_your_progress.svg'

import img2 from '../../../assets/Images/Compare_with_others.svg'

import img3 from '../../../assets/Images/Plan_your_lessons.svg'

const LanguageToolkit = () =>{
    return (
        <div className='mb-20'>
            <div className='flex items-center flex-col gap-5'>
                <div className='text-4xl text-center font-semibold w-[70%] '>
                Your ultimate toolkit for
                <HighlightText text={"learning any language effortlessly!"} />
                </div>
                <div className='text-center text-richblack-600 mx-auto text-base font-medium  w-[80%]'>
                Unlock your coding potential with CodeSavvy! 🚀 your ultimate learning companion. From foundational concepts to advanced techniques, our intuitive platform ensures a seamless and effective learning experience. Elevate your coding skills with structured courses, interactive exercises, and expert guidance.
                </div>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <div className='translate-x-28'>
                    <img src={img1} alt="" />
                </div>
                <div className='translate-x-2'>
                    <img src={img2} alt="" />
                </div>
                <div className='-translate-x-32'>
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    )
}
export default LanguageToolkit;