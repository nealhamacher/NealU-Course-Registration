import axios from 'axios'
import terminal from 'virtual:terminal'

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
    const success = await axios.patch(url, course, config); //Drop course in db
    //Drop course in front-end
    if (success.status == 200) {
      student.courses = student.courses.filter(c => c.id != course.id)
      return;
    } else {
      throw Error("Error from back-end when removing course")
    }

  } catch (error) {
    throw Error(error)
  }
}

/**
 * Opens a seat in the dropped course
 * @param course The course to open a seat in
 * @returns N/A 
 */
const freeSeat = async ({course, courseList}) => {
  try {
    const url = `http://localhost:8000/courses/drop/${course.id}`;

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const success = await axios.patch(url, {}, config);
    if (success.status == 200) {
      const targetCourse = courseList.find(c => c.id == course.id);
      targetCourse.capacity +=1;
      return;
    } else {
      throw Error(`Error from back-end when freeing seat in database`)
    }
  } catch (error) {
    throw Error(error);
  }
}

/**
 * Removes a student from a course and frees up a seat
 * @param {} student to enroll, course to drop, list of courses, and cue to
 *                   trigger rerender of react elements
 */
const drop = async ({student, courseToDrop, courseList, triggerUpdate}) => {
  try {
    await dropCourse({student: student, course: courseToDrop});
    await freeSeat({course: courseToDrop, courseList: courseList});
    triggerUpdate();
    
  } catch (error) {
    console.error(`Error dropping course: ${error.message}`);
  }
}

export default drop;