const User = require('../models/User')

module.exports = 
{
// Get all users
getUsers(req, res) {
    User.find()
     .select('-__v')
     .then((user) => res.json(user))
     .catch((err) => res.status(500).json(err))
  },

// get a user by ID
getUserbyID(req, res) {
    User.findOne({_id: req.params.userId})
    .select('-__v')
    .then((user) => 
    !user
    ? res.status(404).json({message: "No user found!"})
        : res.json(user)
)
    .catch((err) => res.status(500).json(err))
},

// create new user

createUser(req, res) {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err))
},

// update user
updateUser(req, res) {
    User.findOneAndUpdate(
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

// delete a user
deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId})
    select('-_v')
    .then((user) => 
    !user
    ? res.status(404).json({message: "No user found!"})
    : thoughts.deleteMany({ _id: { $in: username}})
    )
},

// add a friend
addFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId},
        { $push: { friends: req.params.friendId}},
        { new: true, runValidators: true},
    )
    select('-_v')
    .then((user) => 
    !user
    ? res.status(404).json({message: "No user found!"})
    : thoughts.deleteMany({ _id: { $in: username}})
    )
    .catch((err) => res.status(500).json(err));
},


// delete a friend
deleteFriend(req, res) {
    User.findOneAndDelete(
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