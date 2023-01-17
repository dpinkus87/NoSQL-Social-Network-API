const {Thought, User} = require('../models');


module.exports = 
{
// Get all thoughts
getThoughts(req, res) {
    Thought.find()
     .select('-__v')
     .then((thought) => res.json(thought))
     .catch((err) => res.status(500).json(err))
  },

// get a thought by ID
getThoughtbyID(req, res) {
    Thought.findOne({_id: req.params.thoughtId})
    .select('-__v')
    .then((thought) => 
    !thought
    ? res.status(404).json({message: "No thought found!"})
        : res.json(thought)
)
    .catch((err) => res.status(500).json(err))
},

// create new thought

createThought(req, res) {
    Thought.create(req.body)
    .then(({ _id }) => {
        return User.findOneAndUpdate(
            { username: req.body.username},
            { $push: {thought: _id}},
            { new: true},
        )
    })
    .then((user) => {
    !user
    ? res.status(404).json({message: "No user found!"})
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err))
    }
},

// update thought
updateThought(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.userId},
        { $set: req.body},
        { runValidators}
    )
    select('-_v')
    .then((user) => 
    !user
    ? res.status(404).json({message: "No user found!"})
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err))
},

// delete a thought
deleteUser(req, res) {
    Thought.findOneAndDelete({ _id: req.params.userId})
    select('-_v')
    .then((thought) => 
    !thought
    ? res.status(404).json({message: "No thoughts found!"})
    : thoughts.deleteMany({ _id: { $in: username}})
    )
},

//  create a reaction
createReaction(res, req) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId},
        { $addToSet: { reactions: req.body}},
        { runValidators: true, new: true }
    )

}

// delete a reaction
deleteReaction(req, res) {
    Thought.findOneAndDelete(
        { _id: req.params.userId},
        { $pull: {friends: req.params.friendId}},
        { new: true, runValidators: true},
        )
        select('-_v')
    .then((user) => 
    !user
    ? res.status(404).json({message: "No user found!"})
    : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},


};