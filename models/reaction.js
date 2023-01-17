const { Schema } = require('mongoose');

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {type: Schema.Types.ObjectId},
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

module.exports = reactionSchema;


// ** TODO Schema Settings **:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
