import axios from 'axios';

const addCourse = async({student, course}) => {
  try {
    const url = `http://localhost:8000/students/addCourse/${student.id}`;

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

const takeSeat = async({course}) => {
  try {
    const url = `http://localhost:8000/courses/enroll/${course.id}`;

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const success = await axios.patch(url, {}, config);
    
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