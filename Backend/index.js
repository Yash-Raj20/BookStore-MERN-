import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.mongoConnectionURL;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("Error: ", error);
  }
};

connectDB();

async function startServer() {
  await connectDB();
  app.use("/books", bookRoute);
  app.use("/users", userRoute);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startServer();