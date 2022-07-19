const { Schema, model } = require('mongoose');

// Schema for what makes up a thought
const thoughtSchema = new Schema({
  thoughttext:{
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default:Date.now,
    get: (createdVal) => moment(createdVal).format('D/M/YYYY hh:mm A'),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,

    },
    id: false,
  },
  );

// Initialize the thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
