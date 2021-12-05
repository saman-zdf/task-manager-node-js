require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-hendler');
// middleware
app.use(express.json());
app.use(express.static('./public'));

// Import and apply task router
const tasksRouter = require('./routers/tasks');
app.use('/api/v1/tasks', tasksRouter);

// the error for route page not found has to be under routes always
app.use(notFound);

// handling error with mddleware
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
