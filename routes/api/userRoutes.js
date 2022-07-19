const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');


router.route('/')
.get(getUsers)
.post(createUser);


router
.route('/:userId')
.get(getSingleUser);


router
.route('/:userId')
.get(getUsers)
.put(updateUser)
.delete(deleteUser)

router
.route('/:id/friends/:friendsId')
.post(addFriend)
.delete(deleteFriend);




module.exports = router;