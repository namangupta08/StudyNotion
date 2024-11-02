import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress  from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div>
        <div className='flex flex-col gap-5 mt-[80px] '>
            <div className='text-4xl font-semibold text-center'>
                Your swiss knife for <HighlightText text={"learning any language"}/>
            </div>

            <div className='text-center w-[70%] mx-auto font-bold text-richblack-700 text-base'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>

            <div className='flex flex-row items-center justify-center'>
                <img
                    src={know_your_progress}
                    alt='Know Your Progress'
                    className='object-contain lg:-mr-32'
                />
                 <img
                    src={compare_with_others}
                    alt='compare_with_others'
                    className='object-contain lg:-mb-10 lg:-mt-0 -mt-12'
                />
                 <img
                    src={plan_your_lesson}
                    alt='plan_your_lesson'
                    className='object-contain lg:-ml-36 lg:-mt-5 -mt-16'
                />
                
            </div>
            
            <div className='w-fit mx-auto lg:mb-20 mb-8 mt-5'>
                <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
            </div>

        </div>

    </div>
  )
}

export default LearningLanguageSection
