const {User} = require('../models');

const userController = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.deleteOne({_id: req.params.userId})
          .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  addFriend( {params}, res) {
    User.findOneAndUpdate(
      {_id: params.id}, {$addToSet: {friends: params.friendsId} },
      {new: true}
    )
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({message: "No user with this ID!"});
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => res.json(err));
  
  },
  deleteFriend( {params}, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $addToSet: { friends: params.friendsId } },
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({message: 'No user with this ID!'});
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = userController;


