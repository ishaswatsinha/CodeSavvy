import React from "react";

const reviews = [
  {
    name: "Cody Fisher",
    email: "tim.jennings@example.com",
    review: "Everyone’s on the same page. Many of our people are not very organized naturally, so Learn codings is a godsend!",

    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Esther Howard",
    email: "felicia.reid@example.com",
    review:
      "Everyone’s on the same page. Many of our people are not very organized naturally, so Learn codings is a godsend!",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Eleanor Pena",
    email: "nathan.roberts@example.com",
    review:
      "I would recommend Learn codings for anyone trying to get the word out about their business. It has saved me so much time!",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    review:
      "Learn codings made everything so much easier. It’s the best decision we’ve made for our workflow!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@example.com",
    review:
      "Absolutely amazing! The tools provided have streamlined our processes greatly.",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    review:
      "I can’t imagine going back to the old way of doing things. This has been a game-changer!",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
];

const ReviewCard = ({ name, email, review, rating, image }) => {
  return (
    <div className="bg-[#161D29] text-white p-7 rounded-lg w-89 h-90 shadow-lg border border-gray-600">
      <div className="flex items-center gap-2 mb-5">
        <img src={image} alt={name} className="w-8 h-8 rounded-full" />
        <div>
          <h3 className="font-semibold text-md">{name}</h3>
          <p className="text-gray-400 text-xs">{email}</p>
        </div>
      </div>
      <p className="text-sm mb-2 text-gray-300">{review}</p>
      <div className="flex items-center gap-1 text-sm">
        <span className="text-yellow-500 font-bold">{rating}</span>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-500"}>★</span>
        ))}
      </div>
    </div>
  );
};

const ReviewPage = () => {
  return (
    <div className="grid grid-cols-3 gap-4 gap-y-10 p-6 bg-white min-h-screen place-items-center">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewPage;