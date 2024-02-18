import mongoose from "mongoose";

const StudentCourseSchema = mongoose.Schema(
    {
        "id" : { type: Number, required: true },
        "name": { type: String, required: true },
        "dept": { type: String, required: true },
        "time": { type: Number, required: true }
    }
);

const StudentSchema = mongoose.Schema (
    {
        "id": { type: Number, required: true },
        "name": { type: String, required: true },
        "email": { type: String, required: true },
        "address": { type: String, required: true },
        "courses": [{ type: StudentCourseSchema }]
    }
);

const Student = mongoose.model("student", StudentSchema);

export default Student;