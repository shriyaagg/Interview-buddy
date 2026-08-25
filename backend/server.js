import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./src/config/database.js";
import authRouter from "./src/routes/auth.routes.js";
import interviewRouter from "./src/routes/interview.routes.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());
constport = process.env.PORT || 3000;

connectDB();

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});