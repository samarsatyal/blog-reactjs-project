const express = require("express");
const app = express();
const dotenv = require("dotenv"); // contains the url to connect to mongodb
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const PORT = 4000;

dotenv.config();
app.use(express.json()); //this line is required to send a json object through this application.

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
  })
  .then(console.log("Connected to MONGO_DB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`Your server is running on ${PORT}`);
});
