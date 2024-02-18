import Button from 'react-bootstrap/Button';
import enroll from '../../actions/enroll';

import './courseRegistration.styles.css'


const EnrollButton = ({ student, course, enrolledCourses, forceUpdate }) => {
  const enrolled = enrolledCourses.some(enrolled => enrolled._id == course._id);
  const conflict = enrolledCourses.some(enrolled => enrolled.time == course.time);

  if(enrolled) {
    return(
      <Button variant='warning'>Enrolled</Button>
    )
  }
  else if(course.capacity < 1) {
    return(
      <Button variant='secondary'>Full</Button>
    )
  }
  else if(conflict) {
    return(
      <Button variant='danger'>Conflict</Button>
    )
  }
  else {
    return (
      <Button variant='primary' onClick={() => enroll({student: student, 
          courseToEnroll: course, forceUpdate: forceUpdate})}>
        Enroll
      </Button>
    )
  }
}

export default EnrollButton;