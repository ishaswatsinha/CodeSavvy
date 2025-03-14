import "./App.css"
import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProfilePage from "./pages/StudentProfile";
import EditSetting from "./pages/StudentSetting";


function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/StudentProfile" element={< ProfilePage/>} />
        <Route path="/StudentSetting" element={< EditSetting/>} />
      </Routes>
    </div>
  );
  
}

export default App
