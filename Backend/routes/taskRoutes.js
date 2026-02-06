


// const express = require("express");
// const router = express.Router();

// const Task = require("../models/Task");


// // CREATE
// router.post("/", async (req, res) => {
//   const task = await Task.create(req.body);
//   res.json(task);
// });


// // READ
// router.get("/", async (req, res) => {
//   const tasks = await Task.find();
//   res.json(tasks);
// });


// // ✅ ADD THIS (UPDATE)
// router.put("/:id", async (req, res) => {
//   const updated = await Task.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );

//   res.json(updated);
// });


// // DELETE
// router.delete("/:id", async (req, res) => {
//   await Task.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted" });
// });


// module.exports = router;


const express = require("express");
const router = express.Router();

const Task = require("../models/Task");
const auth = require("../middleware/auth");


// CREATE (protected)
router.post("/", auth, async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.user
  });

  res.json(task);
});


// READ (only my tasks)
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
});


// UPDATE
router.put("/:id", auth, async (req, res) => {
  const updated = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
});


// DELETE
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
