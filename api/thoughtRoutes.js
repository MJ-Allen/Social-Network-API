const router = require('express').Router();



const {
    getThoughtById,
    getAllThoughts,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../');


router.route('/').get(getAllThoughts).post(createThought);
router.route('/:Id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reaction').post(addReaction).delete(deleteReaction);


module.exports = router;