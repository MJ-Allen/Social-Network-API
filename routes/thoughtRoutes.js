const router = require('express').Router();



const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../controllers/thoughtController');

// get all thoughts
router
.route('/')
.get(getThoughts)
.post(createThought);

// get single thought, update thought and delete
router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// add reaction 
router
.route('/:thoughtId/reaction')
.post(addReaction)

// delete reaction
router
.route('/:thoughtId/reactions/reactionId')
.delete(deleteReaction);


module.exports = router;