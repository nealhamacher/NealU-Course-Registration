import React from 'react'
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import CourseRegistration from './components/courseRegistration/courseRegistration.component';
import NavBar from './components/navBar/navbar.component';
import Dropdown from 'react-bootstrap/Dropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './App.css'
import StudentDetails from './components/studentDetails/studentDetails.component';

const queryClient = new QueryClient();

function App() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("")
  
  /**
   * Gets courses from backend
   */
  useEffect (() => {
    const fetchCourses = async () => {
      const response = await axios.get("http://localhost:8000/courses");
      setCourses(response.data)
      console.log(response.data)
    };
    fetchCourses();
  }, [])

  /**
   * Gets students from backend
   */
  useEffect (() => {
    const fetchStudents = async () => {
      const response = await axios.get("http://localhost:8000/students");
      setStudents(response.data)
      console.log(response.data)
    };
    fetchStudents();
  }, [])

  //Controls which student name is shown when dropdown button is selected
  let shownStudent = ""
  if (selectedStudent == "") {
    shownStudent = "Select Student"
  }
  else {
    shownStudent = selectedStudent.name
  }

  return(
    <div className='App'>
      <div className='hdr'>
        <h1 className='hdr-main'>Neal University Online Registration System</h1>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {shownStudent}
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdown'>
            {students.map(student => (
            <Dropdown.Item onClick={()=>setSelectedStudent(student)}>{student.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
          <Tabs defaultActiveKey="student-details" fill>
            <Tab eventKey="student-details" title="Student Info">
              <StudentDetails student={selectedStudent} />
            </Tab>
            <Tab eventKey="course-registration" title="Course Registration">
              <CourseRegistration courseList={courses} student={selectedStudent} />
            </Tab>
          </Tabs>
      </div>

    </div>
  )
}

export default App

/*
function App() {
  const [courses, setCourses] = useState(-1);
  
  //const { status, courses, error, isFetching } = useCourses();

  return(
    <div className='App'>
      <QueryClientProvider client = {queryClient}>
        <Courses setCourses={setCourses} />
        <p>Hello</p>
      </QueryClientProvider>
    </div>
  )
}

function useCourses() {
  return useQuery({
    queryKey: ['course'],
    queryFn: async () => {
      const { courseData } = await axios.get("http://localhost:8000/courses")
      return courseData;
    }
  })
}

function Courses( {setCourses} ) {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useCourses()

  if (status) return "loading..."

  else if (error) return <span>Error: {error.message}</span>

  else return (
    <div> 
    {data.map (course => (
      <p>HELLO {course.id}</p>
    ))}</div>
  )
}

export default App;
*/