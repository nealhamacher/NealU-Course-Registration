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

    const _ = await axios.patch(url, course, config); //Open seat in database
    student.courses = student.courses.filter(c => c != course) //Add seat in fe
    return;
  } catch (e) {
    terminal.log(e.message)
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
  } catch (e) {
    throw Error(e);
  }
}

const drop = async ({student, courseToDrop}) => {
  try {
    await dropCourse({student: student, course: courseToDrop});
    await freeSeat({course: courseToDrop});
    
  } catch (e) {
    terminal.log(e.message);
  }
}

export default drop;