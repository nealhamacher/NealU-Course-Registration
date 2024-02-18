import axios from 'axios';

const enroll = async ({student, courseToEnroll}) => {
  try {
    const url = `http://localhost:8000/students/addCourse/${student.id}`;

    const postData = {course: courseToEnroll};
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const { data } = await axios.patch(url, postData, config);
    student.courses.push(courseToEnroll);
    return data.data;
  } catch (e) {
    terminal.log(e.message);
  }
}

export default enroll;