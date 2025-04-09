import React from "react";
import BannerVideo from "../assets/Images/banner.mp4";
import StoryImage from "../assets/Images/boxoffice.png";
import Footer from "../components/common/Footer";


const reviews = [
  {
    name: "Cody Fisher",
    email: "tim.jennings@example.com",
    review: "Coordination of activities improved tremendously with Learn codings.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Esther Howard",
    email: "felicia.reid@example.com",
    review: "Everyone’s on the same page. Many of our people are not very organized naturally, so Learn codings is a godsend!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Eleanor Pena",
    email: "nathan.roberts@example.com",
    review: "I would recommend Learn codings for anyone trying to get the word out about their business. It has saved me so much time!",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
  },
];

const Reviews = () => {
  return (
    <div className="py-12 bg-white text-center">
      <h2 className="text-2xl font-semibold text-indigo-700 italic mb-6">Reviews from other learners</h2>
      <div className="grid md:grid-cols-3 gap-6 px-8">
        {[...reviews, ...reviews].map((review, index) => (
          <div key={index} className="bg-[#161D29] text-white text-sm p-6 shadow-md">
            <div className="flex items-center gap-4 mb-3">
              <img
                src={review.image}
                alt={review.name}
                className="w-10 h-10 rounded-full border-2 border-gray-300"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-400">{review.email}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-3">{review.review}</p>
            <p className="font-bold text-yellow-400">4.5 ⭐⭐⭐⭐☆</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black text-white flex items-center justify-center">
        <video
          src={BannerVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 w-full text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold">Driving Innovation in Online Education for a</h2>
          <p className="text-blue-400 text-2xl md:text-3xl font-semibold">Brighter Future</p>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            StudyNation is at the forefront of transforming online education. We
            are passionate about creating a brighter future by offering
            cutting-edge learning experiences and building a thriving community.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white text-center px-8 border-b-2 border-black">
        <p className="text-2xl md:text-3xl font-light leading-relaxed">
          " We are passionate about revolutionizing the way we learn. Our
          innovative platform <span className="font-bold text-blue-500">combines technology, expertise</span>, and community to
          create an <span className="text-yellow-500 font-bold">unparalleled educational experience.</span> "
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-8 flex flex-col md:flex-row justify-center gap-16 text-center bg-white">
        <div className="md:w-1/2">
          <h2 className="text-red-500 text-4xl font-bold">Our Founding Story</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Our e-learning platform was born out of a shared vision and passion
            for transforming education. It all began with a group of educators,
            technologists, and lifelong learners who recognized the need for
            accessible, flexible, and high-quality learning opportunities in a
            rapidly evolving world.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={StoryImage} alt="Founding Story" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-8 flex flex-col md:flex-row justify-center gap-16 text-center bg-white">
        <div className="md:w-1/3">
          <h3 className="text-2xl font-semibold text-yellow-500">Our Vision</h3>
          <p className="mt-4 text-lg text-gray-600">
            With this vision in mind, we set out on a journey to create an
            e-learning platform that would revolutionize the way people learn.
          </p>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-2xl font-semibold text-blue-500">Our Mission</h3>
          <p className="mt-4 text-lg text-gray-600">
            Our mission goes beyond just delivering courses online. We wanted to
            create an ecosystem that fosters a culture of lifelong learning.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-12 text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <p className="text-4xl font-bold">5K+</p>
            <p className="text-gray-400 text-lg">Happy Students</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10+</p>
            <p className="text-gray-400 text-lg">Mentors</p>
          </div>
          <div>
            <p className="text-4xl font-bold">200+</p>
            <p className="text-gray-400 text-lg">Courses</p>
          </div>
          <div>
            <p className="text-4xl font-bold">50+</p>
            <p className="text-gray-400 text-lg">Awards</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
<section className="py-16 bg-[#E8B000] text-center border border-black">
  <div className="mb-6">
    <button className="px-4 py-2 bg-white text-black font-semibold rounded-full border border-black shadow-md">
      OUR TEAM
    </button>
  </div>

  <h2 className="text-4xl italic font-semibold text-black">We have experienced Team</h2>

  <div className="flex justify-center items-center gap-16 mt-10">
    {/* Team Member 1 */}
    <div className="text-center">
      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-300 mx-auto">
        <img src="https://your-image-url.com/image1.jpg" alt="Divyanshu Raj Verma" className="w-full h-full object-cover" />
      </div>
      <h4 className="mt-4 text-xl italic font-semibold text-black">Divyanshu Raj Verma</h4>
      <button className="mt-2 px-4 py-1 bg-black text-white rounded-full text-sm shadow-md">
        Co-Founder
      </button>
    </div>

    {/* Team Member 2 (Founder) */}
    <div className="text-center">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 mx-auto bg-white flex items-center justify-center">
        <img src="https://your-image-url.com/image2.jpg" alt="Shaswat Sinha" className="w-32 h-32 object-contain" />
      </div>
      <h4 className="mt-4 text-3xl italic font-semibold text-black">Shaswat Sinha</h4>
      <button className="mt-2 px-6 py-1 bg-black text-white rounded-full text-sm shadow-md">
        Founder
      </button>
    </div>

    {/* Team Member 3 */}
    <div className="text-center">
      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-300 mx-auto">
        <img src="https://your-image-url.com/image3.jpg" alt="Rupa Kumari" className="w-full h-full object-cover" />
      </div>
      <h4 className="mt-4 text-xl italic font-semibold text-black">Rupa Kumari</h4>
      <button className="mt-2 px-4 py-1 bg-black text-white rounded-full text-sm shadow-md">
        Co-Founder
      </button>
    </div>
  </div>
</section>

{/* Contact Section */}
<section className="bg-[#E8B000] relative py-16 text-center">
  <h2 className="text-4xl italic font-semibold text-white">Get in Touch</h2>
  <p className="text-white mt-2">We'd love to hear from you, Please fill out this form.</p>

  {/* Wave Background */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg viewBox="0 0 1440 320" className="w-full">
      <path fill="white" fillOpacity="1" d="M0,160L40,165.3C80,171,160,181,240,165.3C320,149,400,107,480,106.7C560,107,640,149,720,165.3C800,181,880,171,960,149.3C1040,128,1120,96,1200,106.7C1280,117,1360,171,1400,197.3L1440,224L1440,320L0,320Z"></path>
    </svg>
  </div>

  {/* Contact Form */}
  <div className="relative bg-black text-white max-w-lg mx-auto p-8 rounded-xl shadow-lg">
    {/* Name */}
    <div className="text-left">
      <label className="block text-sm font-medium">Enter Your Name</label>
      <div className="flex mt-1 space-x-2">
        <input type="text" placeholder="Enter first name" className="w-1/2 p-2 rounded-xl bg-white text-black outline-none" />
        <input type="text" placeholder="Enter last name" className="w-1/2 p-3 rounded-xl bg-white text-black outline-none" />
      </div>
    </div>

    {/* Email */}
    <div className="mt-4 text-left">
      <label className="block text-sm font-medium">Email Address</label>
      <input type="email" placeholder="Enter email address" className="w-full p-3 rounded-xl bg-white text-black outline-none" />
    </div>

    {/* Phone */}
    <div className="mt-4 text-left">
      <label className="block text-sm font-medium">Phone Number</label>
      <div className="flex mt-1">
        <select className="p-3 rounded-xl bg-white text-black outline-none">
          <option>+91</option>
          <option>+1</option>
          <option>+44</option>
        </select>
        <input type="tel" placeholder="Enter your phone number" className="flex-1 p-3 rounded-xl bg-white text-black outline-none ml-2" />
      </div>
    </div>

    {/* Message */}
    <div className="mt-4 text-left">
      <label className="block text-sm font-medium">Message</label>
      <textarea placeholder="Enter your message" rows="4" className="w-full p-3 rounded-xl bg-white text-black outline-none"></textarea>
    </div>

    {/* Submit Button */}
    <button className="w-full bg-[#00FF99] hover:bg-[#00CC77] text-white font-semibold py-3 rounded-xl shadow-md transition-all">
  Send Message
</button>
  </div>
</section>


      {/* Reviews Section */}
      <Reviews />

      <div className='min-w-full  bg-white footer-bg'>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
