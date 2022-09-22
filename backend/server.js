const express = require("express");
//const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

//app.use(cors());
dotenv.config();
connectDB();
const app = express();
//connectDB();

app.use(express.json()); //to accept JSON data

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
/*
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const SingleChat = chats.find((c) => c._id === req.params.id);
  res.send(SingleChat);
  //console.log(req.params.id);
});*/

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server started on PORT ${PORT}`));
