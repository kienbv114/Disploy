const mongoose = require('mongoose');

// Định nghĩa mô hình sinh viên
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  major: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
