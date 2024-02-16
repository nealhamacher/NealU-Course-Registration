import Student from "../models/student.model.js";

const getStudentsFromRepo = async () => {
    try {
        const students = await Student.find().sort("id");
        return students;
    } catch (e) {
        throw Error("Error while getting students")
    }
}

export { getStudentsFromRepo };