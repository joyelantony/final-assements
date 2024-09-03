//Write missing code here
const mongoose=require('mongoose');
const empSchema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

const empSchema=mongoose.model('employee',empSchema);
module.exports=empSchema