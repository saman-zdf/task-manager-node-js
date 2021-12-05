// creatin a custom error class which get extended by javascript Error
class CustomAPIError extends Error {
  // constructor will have a message and status code,
  constructor(message, statusCode) {
    // since we extending we can use messges from Error with super key word to use from parent class
    super(message);
    // we ca create a custom status code
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

module.exports = {
  createCustomError,
  CustomAPIError,
};
