import React from 'react';

const ContactForm = () => {
    return (
        <div className='bg-richblack-900 text-white p-10 rounded-lg max-w-xl mx-auto relative'>
            <form className='space-y-5'>
                <div className='flex gap-4'>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-sm mb-1'>Enter Your Name</label>
                        <input type='text' placeholder='Enter first name' className='p-3 rounded-lg bg-gray-800 text-white' />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-sm mb-1'>&nbsp;</label>
                        <input type='text' placeholder='Enter last name' className='p-3 rounded-lg bg-gray-800 text-white' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm mb-1'>Email Address</label>
                    <input type='email' placeholder='Enter email address' className='p-3 rounded-lg bg-gray-800 text-white' />
                </div>
                <div className='flex gap-4'>
                    <div className='flex flex-col w-1/4'>
                        <label className='text-sm mb-1'>Phone Number</label>
                        <select className='p-3 rounded-lg bg-gray-800 text-white'>
                            <option>+91</option>
                            <option>+1</option>
                            <option>+44</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-3/4'>
                        <label className='text-sm mb-1'>&nbsp;</label>
                        <input type='text' placeholder='Enter your phone number' className='p-3 rounded-lg bg-gray-800 text-white' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm mb-1'>Message</label>
                    <textarea placeholder='Enter message' className='p-3 h-24 rounded-lg bg-gray-800 text-white'></textarea>
                </div>
                <button className='w-full bg-green-400 text-white p-3 rounded-lg font-bold'>Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;