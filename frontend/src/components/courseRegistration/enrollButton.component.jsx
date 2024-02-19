import Button from 'react-bootstrap/Button';
import enroll from '../../actions/enroll';

import './courseRegistration.styles.css'

/**
 * Enrollment button for course registration
 * @param {*} student to enroll, course to enroll in, list of course, and update
 *            cue
 * @returns Conditional button showing enrollment status
 */
const EnrollButton = ({ student, course, enrolledCourses, triggerUpdate }) => {
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
          courseToEnroll: course, triggerUpdate: triggerUpdate})}>
        Enroll
      </Button>
    )
  }
}

export default EnrollButton;