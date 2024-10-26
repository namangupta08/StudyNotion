import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from '../components/core/HomePage/Button';
function Home() {
  return (
    <div>
      {/* Section1 */}

      <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent text-white justify-between items-center gap-8">
        <Link to={"/signup"}>
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition duration-200 hover:scale-95 w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[8px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor </p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-8">
          Empower your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="text-center w-[90%] text-lg font-bold text-richblue-200 mt-2">
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>

        <div className='flex flex-row gap-7 mt-5 mb-6'>
        <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>

                <CTAButton active={false} linkto={"/login"}> 
                    Book a Demo
                </CTAButton>
        </div>





      </div>

      {/* Section2 */}

      {/* Section3 */}

      {/* Footer */}
    </div>
  );
}

export default Home;
