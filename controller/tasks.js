const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');

const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  // different syntax to get all task
  // res.status(200).json({ tasks });
  // res.status(200).json({ tasks, amount: tasks.length });
  res
    .status(200)
    .json({ success: true, data: { tasks: tasks, length: tasks.length } });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const singleTask = asyncWrapper(async (req, res, next) => {
  // try {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  // defferent way of sending response
  // res.status(200).json({ task });
  res.status(200).json({ task: null, success: true });
});
// update with patch
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  // to update the sigle item, in this case task we need to pass three arguments, id, req.body, and optional object which will return the updated version of the task and another bulit-in method properties call runValidator which will apply all the validation to the item.
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

// Update with put
const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  singleTask,
  updateTask,
  deleteTask,
  editTask,
};
