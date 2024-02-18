import Table from 'react-bootstrap/Table';
import EnrollButton from './enrollButton.component';

import './courseRegistration.styles.css'

const CourseRegistration = ({ courseList, student, forceUpdate }) => {
  if(student == "") {
    return (
      <div className="course-registration-blank">
        <h2>Select a student to display course information</h2>
      </div>
    )
  }
  else {    
    return (
      <div className='course-registration'>
        <h2>Course Registration</h2>
        <h5>Offered Courses</h5>
        <div className='course-table'>
          <Table striped bordered hover>
            <thead className='course-table-hdr'>
              <tr>
                <th>ID</th>
                <th>Course Name</th>
                <th>Department</th>
                <th>Time</th>
                <th>Capacity</th>
                <th>Enroll in Course</th>
              </tr>
            </thead>
            <tbody className='course-table-body'>
              {courseList.map(course => (
                <tr>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.dept}</td>
                  <td>{course.time}:00</td>
                  <td>{course.capacity}</td>
                  <td><EnrollButton student={student} course={course} 
                                    enrolledCourses={student.courses}
                                    forceUpdate={forceUpdate} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}


export default CourseRegistration;

