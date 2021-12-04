const getAllTasks = (req, res) => {
  res.json({ success: true, data: ['task 1', 'task 2'] });
};

const createTask = (req, res) => {
  res.json({ success: true, data: 'Create task' });
};

const singleTask = (req, res) => {
  res.json({ success: true, data: 'Single task' });
};

const updateTask = (req, res) => {
  res.json({ success: true, data: 'Update task' });
};

const deleteTask = (req, res) => {
  res.json({ success: true, data: 'Delete task' });
};

module.exports = {
  getAllTasks,
  createTask,
  singleTask,
  updateTask,
  deleteTask,
};
