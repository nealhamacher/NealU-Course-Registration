import mongoose from "mongoose";

const StudentSchema = mongoose.Schema (
    {
        "id": { type: Number, required: true },
        "name": { type: String, required: true },
        "email": { type: String, required: true },
        "address": { type: String, required: true }
    }
);

const Student = mongoose.model("Student", StudentSchema);

export default Student;