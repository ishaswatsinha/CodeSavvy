import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProfilePage from "./pages/StudentProfile";
import EditSetting from "./pages/StudentSetting";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/common/Navbar";
import { useState } from "react";
import ContactPage from "./pages/ContactUs";
import ForgotPassword from "./pages/ForgotPassword";
import OpenRoute from "./components/core/Auth/OpenRoute"
import VerifyEmail from "./pages/VerifyEmail";
import UpdatePassword from "./pages/UpdatePassword";

import CourseDetails from "./pages/CourseDetails";
import AddCourse from "./components/core/Dashboard/AddCourse/index";
// import MyCourses from "./components/core/Dashboard/MyCourses/MyCourses";
// import EditCourse from "./components/core/Dashboard/EditCourse.jsx/EditCourse";
// import InstructorDashboard from "./components/core/Dashboard/InstructorDashboard/InstructorDashboard";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/About" element={<About />} />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />        
        
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route path="/StudentProfile" element={< ProfilePage/>} />
        <Route path="/StudentSetting" element={< EditSetting/>} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />  
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />  

        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />  
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/StudentProfile" element={<ProfilePage />} />
        <Route path="/StudentSetting" element={<EditSetting />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />

        <>
          <Route path="dashboard/add-course" element={<AddCourse />} />

          {/* <Route path="dashboard/my-courses" element={<MyCourses />} /> */}

          {/* <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />*/}
          
          {/* <Route path="dashboard/instructor"element={<InstructorDashboard />} />*/}
          
        </>
      </Routes>
    </div>
  );
}

export default App;
