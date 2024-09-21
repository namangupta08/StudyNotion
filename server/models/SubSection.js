const mongoose = require("mongoose");

const subSection = mongoose.Schema({
  title: {
    type: String,
  },
  timeDuration: {
    type: String,
  },
  description: {
    type: String,
  },
  vedioUrl: {
    type: String,
  },
});

module.exports = mongoose.model("SubSection", subSection);
