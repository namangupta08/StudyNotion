
const Section = require('../models/Section')
const Course = require('../models/Course')

exports.createSection = async (req,res) => {
    try {
        //data fetch
        const {sectionName , courseId} = req.body;

        //validate
        if (!sectionName || !courseId) {
			return res.status(400).json({
				success: false,
				message: "All feilds are required",
			});
		}

        //create section
        const newSection = await Section.create({sectionName});

        //push in inside course
        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            {
                $push:{
                    courseContent:newSection._id,
                }
            },
            {new:true}
        ).populate({
            path: "courseContent",
            populate: {
                path: "subSection",
            },
        })
        .exec();

        //response
        res.status(200).json({
			success: true,
			message: "Section created successfully",
			updatedCourse,
		});
    } catch (error) {
        // Handle errors
		res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
    }
}

exports.updateSection = async (req, res) => {
    try {
        //data fetch
        const { sectionName, sectionId,courseId } = req.body; 

        //data validation
        if (!sectionName || !sectionId) {
			return res.status(400).json({
				success: false,
				message: "Missing required properties",
			});
		}

        //update data

        const section = await Section.findByIdAndUpdate(sectionId , {sectionName} , {new:true})

    
        //response
        res.status(200).json({
			success: true,
			message: "Section updated successfully",
			updatedCourse,
		});
    } catch (error) {
        // Handle errors
		res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
    }
}

exports.deleteSection = async (req, res) => {
    try {
        const { sectionId, courseId }  = req.body;
		await Course.findByIdAndUpdate(courseId, {
			$pull: {
				courseContent: sectionId,
			}
		})
		const section = await Section.findById(sectionId);
		console.log(sectionId, courseId);
		if(!section) {
			return res.status(404).json({
				success:false,
				message:"Section not Found",
			})
		}

		//delete sub section
		await SubSection.deleteMany({_id: {$in: section.subSection}});

		await Section.findByIdAndDelete(sectionId);

		//find the updated course and return 
		const course = await Course.findById(courseId).populate({
			path:"courseContent",
			populate: {
				path: "subSection"
			}
		})
		.exec();

		res.status(200).json({
			success:true,
			message:"Section deleted",
			data:course
		});
    } catch (error) {
        console.error("Error deleting section:", error);
		res.status(500).json({
			success: false,
			message: "Internal server error",
		});
    }
}