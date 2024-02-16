import { getStudentsFromRepo } from "../repositories/student.repository.js";

const getStudents = async (req, res) => {
    try {
        const students = await getStudentsFromRepo();
        res.status(200).send(students);
    } catch (e) {
        res.status(500).send(`Database error while getting students: ${e.message}`)
    }
};

export { getStudents };