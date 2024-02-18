import { getCoursesFromRepo, addCourseToRepo, enrollInCourseInRepo, 
    unenrollFromCourseInRepo } from "../repositories/course.repository.js";

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

const enrollInCourse = async (req, res) => {
    const id = { id : req.params.id };
    try {
        const course = await enrollInCourseInRepo(id);
        if (course) {
            res.status(200).send(course);
        } else {
            res.status(404).send("Could not enroll, course is full")
        }
    } catch (e) {
        res.status(500).send(`Error while adding course: ${e.message}`)
    }
}

const unenrollFromCourse = async (req, res) => {
    const id = { id : req.params.id };
    try {
        const course = await unenrollFromCourseInRepo(id);
        if (course) {
            res.status(200).send(course);
        } else {
            res.status(404).send("Could not unenroll, check course ID")
        }
    } catch (e) {
        res.status(500).send(`Error while adding course: ${e.message}`)
    }
}

export { getCourses, addCourse, enrollInCourse, unenrollFromCourse };