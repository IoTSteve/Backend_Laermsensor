const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  dev_id: {
    type: String,
    required: true
  },
  payload_fields: {
    type: String,
    required: true
  },
  metadata: {
    type: String
  },
  ts: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model('posts', PostSchema)