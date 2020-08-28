const { Schema, model } = require("mongoose");

const TaskSchema = Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = model('tasks', TaskSchema);