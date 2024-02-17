import Student from "../models/student.model.js";

const getStudentsFromRepo = async () => {
    try {
        const students = await Student.find().sort("id");
        return students;
    } catch (e) {
        throw Error(e.message)
    }
};

const addStudentToRepo = async (info) => {
    try {
        let student = await new Student(info);
        student = student.save();
        return student;
    } catch (e) {
        throw Error(e.message)
    }
};

const addCourseToStudentInRepo = async (id, course) => {
    try {
        let student = await Student.findOneAndUpdate(
            id,
            { $push: {courses : course}},
            { new: true },
        );
        return student;
    } catch (e) {
        throw Error(e.message)
    }
}

const dropCourseFromStudentInRepo = async (id, course) => {
    try {
        let student = await Student.findOne(id);
        let modCourses = student.courses.filter(c => c !== course);
        student = await Student.findOneAndUpdate(
            id,
            { courses: modCourses }
        );
        return student;
    } catch (e) {
        throw Error(e.message);
    }
}

export { getStudentsFromRepo, addStudentToRepo, addCourseToStudentInRepo, 
    dropCourseFromStudentInRepo };