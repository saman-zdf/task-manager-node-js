const Task = require('../models/task');
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    // different syntax to get all task
    // res.status(200).json({ tasks });
    // res.status(200).json({ tasks, amount: tasks.length });
    res
      .status(200)
      .json({ success: true, data: { tasks: tasks, length: tasks.length } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const singleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      // we set errors here if the id has the same legth but with different character, we can send a custom error message
      return res.status(404).json({ msg: `No taks with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    // if the actual syntax is not the same length of the original id, it will send a generic message
    res.status(500).json({ error: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No taks with id: ${taskID}` });
    }
    // defferent way of sending response
    // res.status(200).json({ task });
    res.status(200).json({ task: null, success: true });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
// update with patch
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    // to update the sigle item, in this case task we need to pass three arguments, id, req.body, and optional object which will return the updated version of the task and another bulit-in method properties call runValidator which will apply all the validation to the item.
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No taks with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Update with put
const editTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No taks with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  singleTask,
  updateTask,
  deleteTask,
  editTask,
};
