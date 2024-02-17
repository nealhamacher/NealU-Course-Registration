import mongoose from "mongoose";

const StudentSchema = mongoose.Schema (
    {
        "id": { type: Number, required: true },
        "name": { type: String, required: true },
        "email": { type: String, required: true },
        "address": { type: String, required: true },
        "courses": [{ type: mongoose.Schema.ObjectId, ref: "course"}]
    }
);

const Student = mongoose.model("student", StudentSchema);

export default Student;