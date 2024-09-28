const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const CategorysDetails = await Category.create({
      name: name,
      description: description,
    });

    console.log(CategorysDetails);

    return res.status(200).json({
      success: true,
      message: "Categorys Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

exports.showAllCategories = async (req, res) => {
  try {
    const allCategorys = await Category.find({}, { name: true, description: true });
    return res.status(200).json({
        success: true,
        message: "All Category returned successfully",
      });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};