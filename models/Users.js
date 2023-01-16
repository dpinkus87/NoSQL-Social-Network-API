const { Schema, model } = require('mongoose');
 const validateEmail = function(email) {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email); 
 };

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      Unique: true,
      required: true,
      Trim: true
    },
    email: {
      type: String,
      required: true,
      Unique: true,
      validate: [validateEmail, "Please enter a valid email"],
    }, {
    // TODO  * `thoughts`* Array of `_id` values referencing the `Thought` model
    thoughts: [id]
    },
    {
    // TODO: * `friends` * Array of `_id` values referencing the `User` model (self-reference)

      friends: 
    },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);


// TODO Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

userSchema
.virtual('friendLength').get(function () {
  return `${this.friends.length}`;
}) 

const User = model('user', userSchema);

module.exports = User;









