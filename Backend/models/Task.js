// const mongoose = require("mongoose");

// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   status: {
//     type: String,
//     default: "pending"
//   }
// });

// // 🔴 THIS LINE IS CRITICAL
// const Task = mongoose.model("Task", taskSchema);

// module.exports = Task;


const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: String,
    default: "pending"
  },

  // 🔥 REQUIRED
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema);
