import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col bg-richblack-900 w-screen min-h-screen font-inter">
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
