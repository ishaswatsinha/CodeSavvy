import React from 'react';

const ContactUsForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-7">
        
        {/* Name Fields */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="firstname" className="lable-style">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              className="form-style"
            />
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="lastname" className="lable-style">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter last name"
              className="form-style"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="lable-style">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="form-style"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNo" className="lable-style">Phone Number</label>
          <div className="flex gap-5">
            <div className="flex w-[81px] flex-col gap-2">
              <select name="countrycode" id="countryCode" className="form-style">
                <option value="+91">+91 - India</option>
                <option value="+1">+1 - USA</option>
                <option value="+44">+44 - UK</option>
              </select>
            </div>
            <div className="flex w-[calc(100%-90px)] flex-col gap-2">
              <input
                type="tel"
                name="phoneNo"
                id="phonenumber"
                placeholder="12345 67890"
                className="form-style"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="lable-style">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Enter your message here"
            className="form-style"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] transition-all duration-200 hover:scale-95 hover:shadow-none disabled:bg-richblack-500 sm:text-[16px]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;