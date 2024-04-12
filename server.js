import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import PostRouter from "./routes/PostRouters.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/v1/", PostRouter);

// connect database
connectDB();

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
