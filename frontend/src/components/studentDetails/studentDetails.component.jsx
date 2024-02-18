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
        <h2>Student Information</h2>
        <h5>Name</h5>
        <p>{student.name}</p>
        <h5>Student ID#</h5>
        <p>{student.id}</p>
        <h5>Email</h5>
        <p>{student.email}</p>
        <h5>Address</h5>
        <p>{student.address}</p>
        <h5>Enrolled Courses</h5>
        <Table className='enrolled-table' striped bordered hover>
         <thead className='enrolled-table-hdr'>
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Department</th>
              <th>Time</th>
              <th>Drop Course</th>
              <th>TEST</th>
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
              <td><Button variant='danger' onClick={() => printList()} /></td>
            </tr>
          ))}
          {(student.courses.length == 0) ? 
            <tr><td colSpan={5}>Not currently enrolled in any courses</td></tr> : <></>}
          </tbody>
        </Table>
        </div>
    )
  }
}


export default StudentDetails;
