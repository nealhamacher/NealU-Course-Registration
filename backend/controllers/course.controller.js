import { getCoursesFromRepo } from "../repositories/course.repository.js";

const getCourses = async (req, res) => {
    try {
        const courses = await getCoursesFromRepo();
        res.status(200).send(courses);
    } catch (e) {
        res.status(500).send(`Database error while getting courses: ${e.message}`);
    }
};

export { getCourses };