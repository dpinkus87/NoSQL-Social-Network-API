const { Schema, Types } = require('mongoose');

const assignmentSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {type: Date, default: Date.now},
    userName: {type: String, required: true},
    {
    // TODO * Array of nested documents created with the `reactionSchema`
      reactions: [
        {type: Schema.Types.ObjectID,ref: }
      ]
    },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// TODO - Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

assignmentSchema
.virtual('friendLength').get(function () {
  return `${this.thoughText.length}`;
};

module.exports = assignmentSchema;


