import React from "react";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

function TimelineSection() {
  const timeline = [
    {
      Logo: logo1,
      heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: logo2,
      heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: logo3,
      heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: logo4,
      heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];
  return (
    <div>
      <div className="flex flex-row gap-20 item-center justify-evenly">
        {/* left box */}
        <div className="flex w-[45%] flex-col">
        {
                    timeline.map((ele , i) => {
                        return(
                            <div className="flex flex-col lg:gap-3" key={i}>
                                <div className="flex gap-6" key={i}>
                                    <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                                        <img src={ele.Logo} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[18px]">{ele.heading}</h2>
                                        <p className="text-base">{ele.Description}</p>
                                    </div>
                                </div>

                                <div
                                className={`hidden ${
                                    timeline.length - 1 === i ? "hidden" : "lg:block"
                                }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                                ></div>
                            </div>

                        

                        

                        )
                    })
                }
        </div>
        {/* right box */}

        <div className='relative w-fit h-fit shadow-yellow-200 shadow-[0px_0px_50px_0px] '>
                <img src={timelineImage} alt="timelineImage" className='object-cover h-[400px] lg:h-fit'/>
            

                <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
                                left-[50%]  translate-x-[-50%] translate-y-[-60%] shadow-caribbeangreen-500 shadow-[0px_10px_20px_0px]'>
                    <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold'>10</p>
                        <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                    </div>

                    <div className='flex gap-5 items-center px-7'>
                    <p className='text-3xl font-bold'>250</p>
                        <p className='text-caribbeangreen-300 text-sm'>Types of Courses</p>
                    </div>

                </div>
            </div>
      </div>
    </div>
  );
}

export default TimelineSection;
