<Tabs defaultActiveKey="student-details" fill>
<Tab eventKey="student-details" title="Student Info">
  <div className='content'>
    <StudentDetails student={selectedStudent} forceUpdate={forceUpdate}/>
  </div>
</Tab>
<Tab eventKey="course-registration" title="Course Registration">
  <div className='content'>
    <CourseRegistration courseList={courses} student={selectedStudent} />
  </div>
</Tab>
</Tabs>