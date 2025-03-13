import React from 'react';
import FoundingStory from '../components/core/AboutPage/FoundingStory';
import OurTeam from '../components/core/HomePage/OurTeam';
import ContactForm from '../components/core/AboutPage/GITForm';
import ReviewPage from '../components/common/Review';
import Footer from '../components/common/Footer';




const About = () => {
    return (
        <div className='w-full bg-white text-richblack-900 mx-auto relative flex flex-col w-11/12 items-center justify-between text-white'>
            <h1>About Page</h1>
            <FoundingStory/>

            

            {/* Team section */}
            <OurTeam/>
          
            {/* form section */}
            <ContactForm/>

            {/* Reviews section */}
            <ReviewPage/>

            {/* Footer section */}

            <div className='min-w-full  bg-white footer-bg'>
                <Footer/>
            </div>

              
        </div>
    )
}
export default About;