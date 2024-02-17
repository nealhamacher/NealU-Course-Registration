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
import './App.css'

const queryClient = new QueryClient();

function App() {
  const [courses, setCourses] = useState([]);
  useEffect (() => {
    const fetchCourses = async () => {
      const response = await axios.get("http://localhost:8000/courses");
      setCourses(response.data)
      console.log(response.data)
    };

    fetchCourses();
  }, [])

  console.log(courses)

  return(
    <div className='App'>
      {courses.map (course => (
        <p>HELLO {course.id}</p>
      ))}</div>
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