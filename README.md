always always always, from controller we pass the function to the router and from router we pass the function to the app, it just sepration of concern

# Validation:

In your schema you need to set your properties to the object, in the object you can pass some basic validator, but before validation you need to specify the type of your properties like: String, Boolean and etc; For having a better understanding of validation you can check the mongoose/docs/validation
[mongoose validation](https://mongoosejs.com/docs/validation.html)
` Example:

```js
const TaskSchema = new mongoose.Schema({
  // Your name property should be an object, pass the type, and the rest in bulit in validations
  name: {
    type: String,
    // for required you can only pass true or if you want to have a custom message you can pass an array, and have the custom message as a second item in your array
    required: [true, 'Must provide a name'],
    // trim will make sure there is no white space
    trim: true,
    maxlength: [20, 'name cannot be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    // for Boolean property you can set default to the false
    default: false,
  },
});
```
