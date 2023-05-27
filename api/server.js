import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import user from "./routes/user.js";
import connectMongoDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";

// Initialization
const app = express();
dotenv.config();

app.use(cors());

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static Folder
app.use(express.static("api/public"));

// Api Routes
app.use("/api/v1/user", user);

// Error Handler
app.use(errorHandler);

// Listen Server Port
app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running on port : ${PORT}`.bgBlue.white);
});
