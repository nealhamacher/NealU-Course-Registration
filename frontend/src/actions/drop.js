import axios from 'axios'
import { terminal } from 'virtual:terminal'

/**
 * Removes a course from a students course list
 * @param student Student from the database dropping the course 
 * @returns N/A
 */
const dropCourse = async ({student, course}) => {
  try {
    const url = `http://localhost:8000/students/dropCourse/${student.id}`;

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const success = await axios.patch(url, course, config);
    if (success) {
      student.courses = student.courses.filter(c => c != course) //Open seat in database
    };
    return;
  } catch (error) {
    throw Error(error)
  }
}

/**
 * Opens a seat in the dropped course
 * @param course The course to open a seat in
 * @returns N/A 
 */
const freeSeat = async ({course}) => {
  try {
    const url = `http://localhost:8000/courses/drop/${course.id}`;

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const _ = await axios.patch(url, {}, config);
    course.capacity += 1;
    return;
  } catch (error) {
    throw Error(error);
  }
}

const drop = async ({student, courseToDrop, forceUpdate}) => {
  try {
    await dropCourse({student: student, course: courseToDrop});
    await freeSeat({course: courseToDrop});
    forceUpdate();
    
  } catch (error) {
    console.error(`Error dropping course: ${error.message}`);
  }
}

export default drop;