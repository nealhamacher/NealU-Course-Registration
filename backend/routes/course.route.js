import express from "express";
import { getCourses, addCourse, enrollInCourse, unenrollFromCourse } 
    from "../controllers/course.controller.js";

const router = express.Router();

router.get("/", getCourses);
router.post("/", addCourse);
router.patch("/enroll/:id", enrollInCourse);
router.patch("/drop/:id", unenrollFromCourse);

export default router;