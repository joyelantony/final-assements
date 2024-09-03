const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect(
    'mongodb+srv://jintojoseph:j0fcEYafZ3dFSk9N@cluster0.ympejbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
