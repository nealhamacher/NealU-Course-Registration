import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import unenroll from '../../actions/unenroll';

const StudentDetails = ({ student }) => {
  if(student == "") {
    return (
      <div className="student-details-blank">
        <h2>Select a student to display information</h2>
      </div>
    )
  }
  else {
    return (
      <div className='student-details'>
        <h2>Student Information</h2>
        <h4>Name</h4>
        <p>{student.name}</p>
        <h4>Student ID#</h4>
        <p>{student.id}</p>
        <h4>Email</h4>
        <p>{student.email}</p>
        <h4>Address</h4>
        <p>{student.address}</p>
        <h4>Enrolled Courses</h4>
        <Table className='enrolled-table' striped bordered hover>
         <thead className='enrolled-table-hdr'>
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Department</th>
              <th>Time</th>
              <th> </th>
            </tr>
        </thead>
        <tbody className='enrolled-table-body'>
          {student.courses.map(course => (
            <tr>
              <td>{course}</td>
              <td>{course}</td>
              <td>{course}</td>
              <td>{course}:00</td>
              <td><Button variant='warning' 
                    onClick={() => unenroll({student: student, courseToDrop: course})}>
                  Unenroll
                  </Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
    )
  }
}


export default StudentDetails;
