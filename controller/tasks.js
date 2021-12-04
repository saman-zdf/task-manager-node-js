const getAllTasks = (req, res) => {
  res.json({ success: true, data: ['task 1', 'task 2'] });
};

const createTask = (req, res) => {
  res.json(req.body);
};

const singleTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.json({ id: req.params.id });
};

const deleteTask = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getAllTasks,
  createTask,
  singleTask,
  updateTask,
  deleteTask,
};
