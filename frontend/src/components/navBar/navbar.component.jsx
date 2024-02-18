import Dropdown from 'react-bootstrap/Dropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './navbar.styles.css'

const NavBar = ({ studentList, selectedStudent, setSelectedStudent}) => {

  let shownStudent = ""
  if (selectedStudent == "") {
    shownStudent = "Select Student"
  }
  else {
    shownStudent = selectedStudent.name
  }

  return (
    <div className='navbar'>
      <h1>Neal University Online Registration System</h1>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {shownStudent}
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown'>
          {studentList.map(student => (
          <Dropdown.Item onClick={()=>setSelectedStudent(student)}>{student.name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Tabs defaultActiveKey="student-details" fill>
        <Tab eventKey="student-details" title="Student Info"></Tab>
        <Tab eventKey="course-registration" title="Course Registration"></Tab>
      </Tabs>
    </div>
  );
}

export default NavBar;