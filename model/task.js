const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'must provide title'],
    trim: true,
    maxlength: [40, 'title can not be more than 20 characters'],
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
})

module.exports = mongoose.model('Task', TaskSchema)