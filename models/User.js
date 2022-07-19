const {Schema, model} = require('mongoose');



const userSchema = new Schema(
    {
      username: { 
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String, 
      unique: true,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/] 
      // assistance from classmate on the email regex
    },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
  
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
        }
      );

      userSchema
      .virtual('friendsCount')
      // Getter
      .get(function () {
        return this.friends.length;
      })
    
    // Initialize our User model
    const User = model('User', userSchema);
    
   
    

module.exports = User;