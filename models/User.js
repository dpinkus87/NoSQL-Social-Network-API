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
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [validateEmail, "Please enter a valid email"],
    }, 

    thoughts: [{
      type: Schema.Types.ObjectID,
      ref: 'Thought',
    }]
    },
    {
      friends: [{
        type: Schema.Types.ObjectID,
        ref: 'User',}
      ]
    },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false
  }
);


// COMPLETED Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

userSchema
.virtual('friendLength').get(function () {
  return `${this.friends.length}`;
}) 

const User = model('User', userSchema);

module.exports = User;









