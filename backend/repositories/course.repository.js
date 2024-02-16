import Course from "../models/course.model.js";

const getCoursesFromRepo = async () => {
    try {
        const courses = await Course.find().sort("id");
        return courses;
    } catch (e) {
        throw Error("Error while getting courses");
    }
};

export { getCoursesFromRepo };