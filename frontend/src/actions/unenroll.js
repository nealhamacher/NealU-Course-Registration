import axios from 'axios'
import { terminal } from 'virtual:terminal'

const unenroll = async ({student, courseToDrop}) => {
  try {
    const url = `http://localhost:8000/students/dropCourse/${student.id}`;

    const postData = {course: courseToDrop};

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const { data } = await axios.patch(url, postData, config);
    student.courses = student.courses.filter((course) => course != courseToDrop)
    terminal.log(student.courses)
    return data.data;
  } catch (e) {
    terminal.log(e.message)
  }
}

export default unenroll;