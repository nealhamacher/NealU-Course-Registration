import Button from 'react-bootstrap/Button';
import enroll from '../../actions/enroll';


const EnrollButton = ({ student, course, enrolledCourses }) => {

  const enrolled = enrolledCourses.includes(course._id)
  
  const conflict = false


  if(enrolled) {
    return(
      <Button variant='secondary'>Enrolled</Button>
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