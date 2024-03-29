import mongoose from "mongoose";

const CourseSchema = mongoose.Schema(
    {
        "id" : { type: Number, required: true },
        "name": { type: String, required: true },
        "dept": { type: String, required: true },
        "time": { type: Number, required: true },
        "capacity": { type: Number, required: true}
    }
);

const Course = mongoose.model("course", CourseSchema);

export default Course;