const { Schema, model } = require('mongoose');

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {type: ObjectId,default: new.ObjectId},
    reactionBody: {type: String, required: true, maxLength: 280},
    username: [
      {type: String,required: true},
    ],
    createdAt: {type: Date, default: Date.now},
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Reaction = model('post', reactionSchema);

module.exports = Reaction;


// ** TODO Schema Settings **:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
