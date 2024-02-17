import { getCoursesFromRepo, addCourseToRepo } from "../repositories/course.repository.js";

const getCourses = async (req, res) => {
    try {
        const courses = await getCoursesFromRepo();
        res.status(200).send(courses);
    } catch (e) {
        res.status(500).send(`Error while getting courses: ${e.message}`);
    }
};

const addCourse = async (req, res) => {
    const info = req.body;
    try {
        const course = await addCourseToRepo(info);
        res.status(200).send(course);
    } catch (e) {
        res.status(500).send(`Error while adding course: ${e.message}`);
    }
};

export { getCourses, addCourse };