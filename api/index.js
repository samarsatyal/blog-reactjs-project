const express = require("express");
const app = express();
const dotenv = require("dotenv"); // contains the url to connect to mongodb
const mongoose = require("mongoose");
const multer = require("multer"); // for users to be able to upload images
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const PORT = 4000; //APIs PORT
const path = require("path");

/* Contains mongo url
---------------------*/
dotenv.config();

/* Required for using json format through this application (ex. from Postman)
----------------------------*/
app.use(express.json());

/*To make the images folder public so that application can access it
-----------------------------------*/
app.use("/images", express.static(path.join(__dirname, "/images")));

/* Mongo connection
--------------------*/
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MONGO_DB"))
  .catch((err) => console.log(err));

/* Image storage
-----------------*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images"); //stores the uploaded files in the 'img' folder
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name); //filename is taken from the actual name of the uploaded file
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Image file uploaded.");
});

/* Routes
-----------*/
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, () => {
  console.log(`Your server is running on ${PORT}`);
});
