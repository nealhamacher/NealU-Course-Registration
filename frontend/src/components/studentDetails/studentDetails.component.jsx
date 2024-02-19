import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import drop from '../../actions/drop';

import './studentDetails.styles.css';

const StudentDetails = ({ student, courseList, triggerUpdate }) => {
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
        <div className='student-hdr'>
        <h2>Student Information</h2>
        </div>
        <div className='student-section'>
        <h5>Name:</h5>
        <p>{student.name}</p>
        </div>
        <div className='student-section'>
        <h5>Student ID#:</h5>
        <p>{student.id}</p>
        </div>
        <div className='student-section'>
        <h5>Email:</h5>
        <p>{student.email}</p>
        </div>
        <div className='student-section'>
        <h5>Address:</h5>
        <p>{student.address}</p>
        </div>
        <div className='student-section'>
        <h5>Enrolled Courses:</h5>
        <div className='enrolled-table'>
          <Table striped bordered hover>
            <thead className='enrolled-table-hdr'>
              <tr>
                <th className='tcid'>ID</th>
                <th className='tcname'>Course Name</th>
                <th className='tcdept'>Department</th>
                <th className='tctime'>Time</th>
                <th className='tcdrop'>Drop</th>
              </tr>
            </thead>
            <tbody className='enrolled-table-body'>
              {student.courses.map(course => (
                <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.dept}</td>
                <td>{course.time}:00</td>
                <td className='td-btn'><Button variant='warning' 
                    onClick={() => drop({student: student, courseToDrop: course, 
                        courseList: courseList, triggerUpdate: triggerUpdate})}>
                  Drop
                </Button></td>
              </tr>
              ))}
              {(student.courses.length == 0) ? 
              <tr><td colSpan={5}>Not currently enrolled in any courses</td></tr> : <></>}
            </tbody>
          </Table>
        </div>
        </div>
      </div>
    )
  }
}


export default StudentDetails;
