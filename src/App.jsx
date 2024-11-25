import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex flex-col bg-richblack-900 w-screen min-h-screen font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="update-password/:id" element={<UpdatePassword />} />
        <Route path="verify-email" element={<VerifyEmail />} />

        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
      element={
        
          <Dashboard />
        
      }
    >
      {/* <Route path="dashboard/my-profile" element={<MyProfile />} />
      
      <Route path="dashboard/Settings" element={<Settings />} /> */}
      </Route>
      </Routes>
    </div>
  );
}

export default App;
