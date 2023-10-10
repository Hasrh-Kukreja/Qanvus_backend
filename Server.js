const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const ProductRoutes = require('./Routes/ProductRoutes');
const RegisterRoutes = require('./Routes/RegisterRoutes');

dotenv.config();

const cors = require("cors");
const app = express();
app.use(cors());
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads')); // Serve uploaded files statically
app.use('/api', ProductRoutes);
app.use('/api', RegisterRoutes);

//mongoose connectivity
mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log("db is connected");
  })
  .catch((e) => {
    console.log(`${e}`);
  });
  // const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
  //   expiresIn: "1h", // Adjust the expiration time as needed
  // });

//Listen Server
app.listen(process.env.PORT, () => {
  console.log("server is running at 8000");
});