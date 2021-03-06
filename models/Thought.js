const { Schema, model } = require('mongoose');
const moment = require('moment');  
// brought in moment to generate date and time
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
    reactionBody: {
    type: String,
    required: true,
    maxLength: 280
  },
  username: {
    type: String,
    required: true
  },
   createdAt: {
  type: Date,
  default:Date.now,
  get: (createdVal) => moment(createdVal).format('D/M/YYYY hh:mm A'),
},
},
{
  toJSON: {
    getters: true,
  },
}
);

// Schema for what makes up a thought
const thoughtSchema = new Schema({
  thoughtText:{
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
  });
  thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;

  });

  
// Initialize the thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
