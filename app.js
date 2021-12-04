require('dotenv').config();

const express = require('express');

const app = express();

// middleware

app.use(express.json());

// Routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

// Import and apply task router
const tasksRouter = require('./routers/tasks');
app.use('/api/v1/task', tasksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
