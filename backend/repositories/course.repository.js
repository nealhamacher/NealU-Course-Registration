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

const enrollInCourseInRepo = async (id) => {
    try {
        let course = await Course.findOne(id);
        if (course.capacity < 1) {
            return null;
        }
        const newCapacity = course.capacity - 1;
        course = await Course.findOneAndUpdate(
            id,
            { capacity: newCapacity}
        );
        return course;
    } catch (e) {
        throw Error(e.message)
    }
}

const unenrollFromCourseInRepo = async (id) => {
    try {
        let course = await Course.findOne(id);
        const newCapacity = course.capacity + 1;
        course = await Course.findOneAndUpdate(
            id,
            { capacity: newCapacity}
        );
        return course;
    } catch (e) {
        throw Error(e.message)
    }    
}

export { getCoursesFromRepo, addCourseToRepo, enrollInCourseInRepo, 
    unenrollFromCourseInRepo };