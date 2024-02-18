import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import drop from '../../actions/drop';
import { terminal } from 'virtual:terminal'

import './studentDetails.styles.css';

const StudentDetails = ({ student, forceUpdate }) => {
  if(student == "") {
    return (
      <div className="student-details-blank">
        <h2>Select a student to display information</h2>
      </div>
    )
  }
  else {
    const printList = () => {
      student.courses.forEach(element => {terminal.log(element)}
      )
    };
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
                <th>ID</th>
                <th>Course Name</th>
                <th>Department</th>
                <th>Time</th>
                <th>Drop Course</th>
              </tr>
            </thead>
            <tbody className='enrolled-table-body'>
              {student.courses.map(course => (
                <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.dept}</td>
                <td>{course.time}:00</td>
                <td><Button variant='warning' 
                    onClick={() => drop({student: student, courseToDrop: course, forceUpdate: forceUpdate})}>
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
