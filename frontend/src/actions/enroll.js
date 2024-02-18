import axios from 'axios';
import { terminal } from 'virtual:terminal'

const addCourse = async({student, course}) => {
  try {
    const url = `http://localhost:8000/students/addCourse/${student.id}`;

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const _ = await axios.patch(url, course, config);
    student.courses.push(course);
    
    return;
  } catch (e) {
    throw Error(e);
  }
}

const takeSeat = async({course}) => {
  try {
    const url = `http://localhost:8000/courses/enroll/${course.id}`;

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const _ = await axios.patch(url, {}, config);
    course.capacity -= 1;
    return;
  } catch (e) {
    throw Error(e);
  }
}

const enroll = async ({student, courseToEnroll}) => {
  try {
    await addCourse({student: student, course: courseToEnroll});
    await takeSeat({ course: courseToEnroll })

  } catch (e) {
    terminal.log(e.message);
  }
}

export default enroll;