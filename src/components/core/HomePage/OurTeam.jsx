import React from 'react';
import Member1 from '../../../assets/Images/instructor3.png'
import Member2 from '../../../assets/Images/favicon.png';
import Member3 from '../../../assets/Images/Member3.png'
const OurTeam =()=>{
    return(
        <div className='w-11/12 max-w-maxContent flex text-richblack-900 flex-col items-center justify-between gap-5 mx-auto mt-20'>

            <div className='text-base  rounded-full bg-white p-2 px-4 '>OUR TEAM</div>
            <div className='text-4xl font-bold'>We have experienced Team</div>
            {/* Member Section */}
            <div className='  gap-24 flex flex-row items-center justify-center p-28'>
                {/* MEMBER--> 1 */}
                <div className='flex flex-col gap-2 items-center justify-center text-center'>
                    <div className='  bg-yellow-50 rounded-full flex items-center justify-center  w-[150px] h-[150px] border-4 border-white overflow-hidden'>
                        <img src={Member3} alt="Cofounder1" />
                    </div>
                    <h2 className='font-semibold text-xl mt-2'>Divyanshu Raj</h2>
                    <p className='text-base  rounded-full bg-white p-2 px-4 mt-2'>Co-Founder</p>
                </div>
                {/* MEMBER--> 2 */}
                <div className='flex flex-col gap-2 items-center justify-center text-center'>
                    <div className=' object-cover rounded-full flex items-center justify-center  w-[300px] h-[300px] border-4 border-white overflow-hidden'>
                    <img src={Member2} alt="Founder" />
                    </div>
                    
                    <h2 className='font-semibold text-3xl mt-2'>Shaswat Sinha</h2>
                    <p className='text-base rounded-full bg-white px-4 p-2 mt-2'>Founder</p>  
                    
                </div>
                {/* MEMBER--> 3 */}
                <div className='flex flex-col gap-2 items-center justify-center text-center'>
                    <div className='bg-yellow-50 rounded-full flex items-center justify-center   w-[150px] h-[150px] border-4 border-white object-cover overflow-hidden'>
                    <img src={Member1} alt="Cofounder2" />
                    </div>
                    <h2 className='font-semibold text-xl mt-2'>Rupa Kumari</h2>
                    <p className='text-base rounded-full bg-white p-2 px-4 mt-2'>Co-Founder</p> 
                </div>
            </div>
        </div>
    )
}

export default OurTeam;