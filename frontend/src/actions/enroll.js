import axios from 'axios';

/**
 * Adds a course to a students list of courses
 * @param {student, course} student to enroll and course to add
 * @returns N/A
 */
const addCourse = async({student, course}) => {
  try {
    //Add in database
    const url = `https://neal-university.onrender.com/students/addCourse/${student.id}`;

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const success = await axios.patch(url, course, config);

    if (success.status == 200) { //Add course to front-end object and sort
      student.courses.push(course);
      student.courses.sort((a,b) => a.id > b.id); 

    } else {
      throw Error("Error adding course to student")
    };
    return;
  } catch (error) {
    throw Error(error);
  }
}

/**
 * Reduces the available seats in a course by one
 * @param {course} course to take a seat in
 * @returns 
 */
const takeSeat = async({course}) => {
  try {
    //Update on back-end/database
    const url = `https://neal-university.onrender.com/courses/enroll/${course.id}`;

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const success = await axios.patch(url, {}, config);
    
    //Update in front-end
    if (success.status == 200) {
      course.capacity -= 1;
      return;
    } else {
      throw Error("Error taking seat in course");
    }
    
  } catch (error) {
    throw Error(error);
  }
}

/**
 * Enrolls a student in a course
 * @param {*} student to enroll, course to enroll in, cue to trigger component 
 *            rerender
 */
const enroll = async ({student, courseToEnroll, triggerUpdate}) => {
  try {
    await takeSeat({ course: courseToEnroll });
    await addCourse({student: student, course: courseToEnroll});
    triggerUpdate();

  } catch (error) {
    console.error(`Error when enrolling: ${error.message}`);
  }
}

export default enroll;