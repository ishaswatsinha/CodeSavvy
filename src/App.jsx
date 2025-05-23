import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/common/Navbar";
// import { useState } from "react";
import ContactPage from "./pages/ContactUs";
import ForgotPassword from "./pages/ForgotPassword";
import OpenRoute from "./components/core/Auth/OpenRoute"
import VerifyEmail from "./pages/VerifyEmail";
import UpdatePassword from "./pages/UpdatePassword";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { ACCOUNT_TYPE } from "./utils/constants";
import PurchaseHistory from "./components/core/Dashboard/PurchaseHistory";
import EnrollledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart/index";
import { setProgress } from "./slices/loadingBarSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CourseDetails from "./pages/CourseDetails";
import AddCourse from "./components/core/Dashboard/AddCourse/index";
import MyCourses from "./components/core/Dashboard/MyCourses/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse.jsx/EditCourse";
import InstructorDashboard from "./components/core/Dashboard/InstructorDashboard/InstructorDashboard";
import { RiWifiOffLine } from "react-icons/ri";
import AdminPannel from "./components/core/Dashboard/AdminPannel";
import LoadingBar from "react-top-loading-bar";
// import ScrollToTop from "./components/ScrollToTop";
import Catalog from "./pages/Catalog";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";


function App() {
  console.log = function () {};
  const user = useSelector((state) => state.profile.user);
  const progress = useSelector((state) => state.loadingBar);
  const dispatch = useDispatch();
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <LoadingBar
        color="#FFD60A"
        height={1.4}
        progress={progress}
        onLoaderFinished={() => dispatch(setProgress(0))}
      />
      <NavBar setProgress={setProgress}></NavBar>
      {!navigator.onLine && (
        <div className="bg-red-500 flex text-white text-center p-2 bg-richblack-300 justify-center gap-2 items-center">
          <RiWifiOffLine size={22} />
          Please check your internet connection.
          <button
            className="ml-2 bg-richblack-500 rounded-md p-1 px-2 text-white"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      )}
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/catalog/:catalog" element={<Catalog />} />

        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/update-password/:id" element={<UpdatePassword />} />

        <Route path="/verify-email" element={<VerifyEmail />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/courses/:courseId" element={<CourseDetails />} />

        {/* <Route path="/search/:searchQuery" element={<SearchCourse />} /> */}

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="dashboard/cart" element={<Cart />} />
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrollledCourses />}
              />
              <Route
                path="dashboard/purchase-history"
                element={<PurchaseHistory />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
              <Route
                path="dashboard/instructor"
                element={<InstructorDashboard />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.ADMIN && (
            <>
              <Route path="dashboard/admin-panel" element={<AdminPannel />} />
            </>
          )}
        </Route>

        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="/dashboard/enrolled-courses/view-course/:courseId/section/:sectionId/sub-section/:subsectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;