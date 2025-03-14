import React, { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Pranay");
  const [lastName, setLastName] = useState("Gupta");
  const [email, setEmail] = useState("pranay@thecodehelp.in");
  const [phone, setPhone] = useState("(+91) 12345 67890");

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="text-sm text-gray-500">
        <span className="text-gray-600"><a href="./Home" className="text-blue-500 hover:underline">Home</a> / <a href="Home" className="text-blue-500 hover:underline">Dashboard</a> / <span className="text-yellow-500 font-semibold">My Profile</span></span>
      </div>
      <h1 className="text-3xl font-bold mt-4">My Profile</h1>
      
      {/* Profile Card */}
      <div className="bg-[#FFFFEE] p-6 rounded-lg shadow-md mt-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
          <div>
            <h2 className="text-xl font-semibold">Shaaswat Sinha</h2>
            <p className="text-gray-600">ssinha617@rku.ac.in</p>
          </div>
        </div>
        <button onClick={handleEditClick} className="bg-[#FFFFEE] px-4 py-2 rounded-lg font-medium shadow-md hover:bg-[#FFFFDD]">
          ✏️ {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      
      {/* Personal Details Card */}
      <div className="bg-[#FFFFEE]  p-6 rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Personal Details</h2>
          <button onClick={handleEditClick} className="bg-[#FFFFEE]  px-4 py-2 rounded-lg font-medium shadow-md hover:bg-[#FFFFDD]">
            ✏️ {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-500">First Name</p>
            {isEditing ? <input className="border p-1 w-full" value={firstName} onChange={(e) => setFirstName(e.target.value)} /> : <p className="text-gray-800">{firstName}</p>}
          </div>
          <div>
            <p className="text-gray-500">Last Name</p>
            {isEditing ? <input className="border p-1 w-full" value={lastName} onChange={(e) => setLastName(e.target.value)} /> : <p className="text-gray-800">{lastName}</p>}
          </div>
          <div>
            <p className="text-gray-500">Email</p>
            {isEditing ? <input className="border p-1 w-full" value={email} onChange={(e) => setEmail(e.target.value)} /> : <p className="text-gray-800">{email}</p>}
          </div>
          <div>
            <p className="text-gray-500">Phone Number</p>
            {isEditing ? <input className="border p-1 w-full" value={phone} onChange={(e) => setPhone(e.target.value)} /> : <p className="text-gray-400">{phone}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;