import Table from 'react-bootstrap/Table';
import EnrollButton from './enrollButton.component';

import './courseRegistration.styles.css'

/**
 * React component for course list and registration main view
 * @param courseList list of courses from database
 * @param student current student from database 
 * @returns React code
 */
const CourseRegistration = ({ courseList, student, triggerUpdate }) => {
  if(!student) {
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
                <th className='tcid'>ID</th>
                <th className='tcname'>Course Name</th>
                <th className='tcdept'>Dept</th>
                <th className='tctime'>Time</th>
                <th className='tcseats'>Seats Left</th>
                <th className='tcenroll'>Enroll</th>
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
                  <td className='td-btn'>
                    <EnrollButton student={student} course={course} 
                      enrolledCourses={student.courses}
                      triggerUpdate={triggerUpdate} />
                  </td>
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

