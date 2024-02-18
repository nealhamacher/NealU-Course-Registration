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

    const success = await axios.patch(url, course, config);
    if (success) { //Add course to front-end object and sort
      student.courses.push(course);
      student.courses.sort((a,b) => a.id > b.id); 
    };

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

const enroll = async ({student, courseToEnroll, forceUpdate}) => {
  try {
    await addCourse({student: student, course: courseToEnroll});
    await takeSeat({ course: courseToEnroll });
    forceUpdate();

  } catch (e) {
    terminal.log(e.message);
  }
}

export default enroll;