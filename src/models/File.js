const mongoose = require('mongoose');

const { Schema } = mongoose;

const File = new Schema({
  title: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

// eslint-disable-next-line func-names
File.virtual('url').get(function () {
  const url = process.env.URL || 'http://localhost:8080';
  return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', File);
