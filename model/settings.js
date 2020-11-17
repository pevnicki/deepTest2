const mongoose = require('mongoose');


const settingsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  role : {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  position:{
    building:{
      flore:{
        type:Number,
        required: true
      },
      room:{
        type:Number,
        required: true
      },
    }
  }

});


const Settings = mongoose.model('Settings', settingsSchema);
exports.Settings = Settings;

