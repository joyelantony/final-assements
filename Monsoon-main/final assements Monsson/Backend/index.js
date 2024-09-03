const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
//Write missing code here
const empSchema=require('./model/employee');
const empSchema = require("./model");
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code
app.get('/employee',async(req,res)=>{
  try{
      const data=await empSchema.find();
      res.send(data);
  }
  catch(error){
      console.log("Error occured")


  }
})

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
