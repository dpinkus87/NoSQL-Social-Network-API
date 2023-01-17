const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {type: Date, default: Date.now},
    userName: {type: String, required: true},
    
    // COMPLETED * Array of nested documents created with the `reactionSchema`
      reactions: [reactionSchema]
    },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// COMPLETED - Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

thoughtSchema
.virtual('totalReactions').get(function () {
  return this.reactions.length;
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought


