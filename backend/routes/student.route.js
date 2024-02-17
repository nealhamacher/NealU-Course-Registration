import express from "express";
import { getStudents, addStudent, addCourseToStudent, dropCourseFromStudent
    } from "../controllers/student.controller.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.patch("/addCourse/:id", addCourseToStudent);
router.patch("/dropCourse/:id", dropCourseFromStudent);

export default router;