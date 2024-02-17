import Course from "../models/course.model.js";

const getCoursesFromRepo = async () => {
    try {
        const courses = await Course.find().sort("id");
        return courses;
    } catch (e) {
        throw Error(e.message);
    }
};

const addCourseToRepo = async (info) => {
    try {
        let course = new Course(info);
        course = course.save();
        return course;
    } catch (e) {
        throw Error(e.message);
    }
};

export { getCoursesFromRepo, addCourseToRepo };