import express from "express";
import authRouter from "./routes/auth.routes.js";
import interviewRouter from "./routes/interview.routes.js";
import cors from "cors";
const app=express();
import cookieParser from "cookie-parser";

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());


app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);


export default app;