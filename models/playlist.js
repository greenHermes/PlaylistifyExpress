var mongoose = require("mongoose");


var PlaylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
    unique: false,
    sparse: false
  },
  // username: {type: String, required: true, index: true, unique: false, sparse: false},
  image: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  songs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Song'}]
});

PlaylistSchema.plugin(require("mongoose-beautiful-unique-validation"));

module.exports = mongoose.model("Playlist", PlaylistSchema);
