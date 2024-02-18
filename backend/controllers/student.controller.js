import { getStudentsFromRepo , addStudentToRepo, addCourseToStudentInRepo, 
    dropCourseFromStudentInRepo } from "../repositories/student.repository.js";

const getStudents = async (req, res) => {
    try {
        const students = await getStudentsFromRepo();
        res.status(200).send(students);
    } catch (e) {
        res.status(500).send(`Error while getting students: ${e.message}`)
    }
};

const addStudent = async (req, res) => {
    const info = req.body;
    try {
        const student = await addStudentToRepo(info);
        res.status(200).send(student);
    } catch (e) {
        res.status(500).send(`Error while adding students: ${e.message}`);
    }    
    
};

const addCourseToStudent = async (req, res) => {
    const id = { id : req.params.id };
    const course = req.body.course;
    try {
        const student = await addCourseToStudentInRepo (
            id,
            course
        );
        if (student) {
            res.status(200).send(student);
        }
        else {
            res.status(404).send("Student not found, check id #");
        }
    } catch (e) {
        res.status(500).send(`Error when adding course: ${e.message}`);
    }
};

const dropCourseFromStudent = async (req, res) => {
    const id = { id: req.params.id};
    const course = req.body.course
    try {
        const student = await dropCourseFromStudentInRepo (
            id,
            course
        );
        if (student) {
            res.status(200).send(student);
        }
        else {
            res.status(404).send("Student not found, check id #");
        }
    } catch (e) {
        res.status(500).send(`Error when adding course: ${e.message}`);
    }
};

export { getStudents, addStudent, addCourseToStudent, dropCourseFromStudent};