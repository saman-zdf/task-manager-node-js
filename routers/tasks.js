const express = require('express');

const router = express.Router();

const {
  getAllTasks,
  createTask,
  singleTask,
  updateTask,
  deleteTask,
  editTask,
} = require('../controller/tasks');

router.route('/').get(getAllTasks).post(createTask);
router
  .route('/:id')
  .get(singleTask)
  .patch(updateTask)
  .delete(deleteTask)
  .put(editTask);

module.exports = router;
