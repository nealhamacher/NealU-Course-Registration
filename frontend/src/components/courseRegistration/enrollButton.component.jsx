import Button from 'react-bootstrap/Button';
import enroll from '../../actions/enroll';


const EnrollButton = ({ student, course, enrolledCourses }) => {

  const enrolled = enrolledCourses.includes(course._id)
  
  const conflict = false


  if(enrolled) {
    return(
      <Button variant='warning'>Enrolled</Button>
    )
  }
  if(course.capacity < 1) {
    return(
      <Button variant='secondary'>Course Full</Button>
    )
  }
  if(conflict) {
    return(
      <Button variant='danger'>Conflict</Button>
    )
  }
  return (
    <Button variant='primary' onClick={() => enroll({student: student, courseToEnroll: course._id})}>
      Enroll
    </Button>
  )
}

export default EnrollButton;