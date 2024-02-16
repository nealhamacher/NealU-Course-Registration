import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./database/database.js";
import studentRouter from "./routes/student.route.js";
import courseRouter from "./routes/course.route.js";

const app = express();
const port = 8000;

connectDB();

app.use(cors({origin: "*", methods: ["GET", "POST", "PATCH", "PUT", "DELETE"]}));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Backend is running" });
    console.log("Backend is running");
});

app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.listen(port, () => {
    console.log(`Backend listening on port #${port}`);
});