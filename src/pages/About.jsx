import React from 'react';
import FoundingStory from '../components/core/AboutPage/FoundingStory';


const About = () => {
    return (
        <div className='w-full bg-white text-richblack-900 mx-auto relative flex flex-col w-11/12 items-center justify-between text-white'>
            <h1>About Page</h1>
            <FoundingStory/>
        </div>
    )
}
export default About;