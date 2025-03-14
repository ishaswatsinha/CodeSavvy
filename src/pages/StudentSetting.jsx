import { useState } from "react";

export default function EditSetting() {
  const [formData, setFormData] = useState({
    name: "Your Name",
    displayName: "",
    profession: "",
    dob: "",
    gender: "Male",
    phone: "",
    about: "",
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 w-full min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-4xl bg-[#FFFFEE] p-6 rounded-lg shadow-md relative">
        <button 
          className="absolute top-4 left-4 text-gray-500 text-sm cursor-pointer hover:underline"
          onClick={() => window.history.back()}
        >
          &larr; Back
        </button>
        <h2 className="text-2xl font-semibold text-center">Edit Profile</h2>

        {/* Profile Section */}
        <div className="flex flex-col items-center mt-4">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
            <img src="/avatar.png" alt="Profile" className="w-full h-full rounded-full" />
          </div>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-4 text-xl font-semibold text-center bg-yellow-100 px-4 py-2 rounded-lg border focus:outline-none"
          />
        </div>

        {/* Profile Information Section */}
        <h2 className="text-lg font-bold text-blue-800 mt-6">Profile Information</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Display Name</label>
            <input type="text" name="displayName" value={formData.displayName} onChange={handleChange} className="w-full p-2 border-2 border-dashed border-red-400 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">Profession</label>
            <input type="text" name="profession" value={formData.profession} onChange={handleChange} className="w-full p-2 border-2 border-dashed border-red-400 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border-2 border-dashed border-red-400 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <div className="flex gap-4">
              {["Male", "Female", "Other"].map((option) => (
                <label key={option} className="flex items-center gap-1">
                  <input type="radio" name="gender" value={option} checked={formData.gender === option} onChange={handleChange} className="accent-yellow-500" />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border-2 border-dashed border-red-400 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">About</label>
            <textarea name="about" value={formData.about} onChange={handleChange} className="w-full p-2 border-2 border-dashed border-red-400 rounded-md"></textarea>
          </div>
        </div>

        {/* Password Section */}
        <h2 className="text-lg font-bold text-blue-800 mt-6">Password</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Current Password</label>
            <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} className="w-full p-2 border-2 border-dashed border-red-400 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">Change Password</label>
            <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} className="w-full p-2 border-2 border-dashed border-red-400 rounded-md" />
          </div>
        </div>

        {/* Save Button */}
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 w-full">
          Save Changes
        </button>
      </div>
    </div>
  );
}
