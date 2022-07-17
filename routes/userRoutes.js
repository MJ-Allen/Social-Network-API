const router = require('express').Router();



const {
    getUserById,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    addBuddy,
    deleteBuddy
} = require('../../');


router.route('/').get(getAllUsers).post(createUser);
router.route('/:Id').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/:userId/buddy/buddyId').post(addBuddy).delete(deleteBuddy);


module.exports = router;