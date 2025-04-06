import React from 'react'
import ContactUsForm from '../components/contactUs/ContactUsForm'

const ContactUs = () => {
  return (
    <div>
        <div className='mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-center gap-10 text-white lg:flex-row '>
       
        <div className='lg:w-[60%]'>
            <div className='border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col'>
                <h1 className='text-4xl leading-10 font-semibold text-richblack-5'>
                Got a Idea? We've got the skills. Let's team up
                </h1>
                <p className='text-lg font-medium'>Tell us more about yourself and what you're got in mind.</p>
                <div className='mt-7'>
                    <ContactUsForm/>
                </div>
            </div>
        </div>
        </div>
        <div className='relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
                    <h1 className='text-center text-4xl font-semibold mt-8'>
                        Reviews from other leraners
                    </h1>
        </div>
    </div>
  )
}

export default ContactUs