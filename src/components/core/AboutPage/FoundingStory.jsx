import React from 'react';

const FoundingStory = () => {
    return (
        <>
        <div className='flex flex-row items-center p-10 text-richblack-900'>
            <div className='w-[50%] gap-5 flex flex-col'>
                <div className='text-4xl '>
                    Our Founding Story
                </div>
                <div className='text-base font-semibold text-richblack-300'>
                    Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                    As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                </div>
            </div>
            <div className='w-[50%] flex justify-center'>
                <img src='/path-to-your-image.jpg' alt='Founding Story' className='w-full h-auto rounded-lg' />
            </div>
        </div>

        <div className='flex flex-row items-center p-10 text-richblack-900 gap-10'>
            {/* Vision Section */}
            <div className='w-[50%] flex flex-col gap-5'>
                <div className='text-4xl'>
                    Our Vision
                </div>
                <div className='text-base font-semibold text-richblack-300'>
                    With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                </div>
            </div>
            
            {/* Mission Section */}
            <div className='w-[50%] flex flex-col gap-5'>
                <div className='text-4xl'>
                    Our Mission
                </div>
                <div className='text-base font-semibold text-richblack-300'>
                    Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                </div>
            </div>
        </div>

        {/* Statistics Section */}
        <div className='bg-richblack-900 text-white py-10 px-5 flex justify-around border-t-2 border-yellow-500 w-full'>
            <div className='text-center'>
                <div className='text-3xl font-bold'>5K+</div>
                <div className='text-base text-richblack-300'>Happy Students</div>
            </div>
            <div className='text-center'>
                <div className='text-3xl font-bold'>10+</div>
                <div className='text-base text-richblack-300'>Mentors</div>
            </div>
            <div className='text-center'>
                <div className='text-3xl font-bold'>200+</div>
                <div className='text-base text-richblack-300'>Courses</div>
            </div>
            <div className='text-center'>
                <div className='text-3xl font-bold'>50+</div>
                <div className='text-base text-richblack-300'>Awards</div>
            </div>
        </div>
        </>
    )
}
export default FoundingStory;
