# Neal University Course Registration System  
A course registration system for a fictional university.  Supports adding and dropping classes, and informs the user of scheduling conflicts or if a class is full. Built using MERN stack; vite and bootstrap were used in the front-end.  Designed to minimize back-and-forth between front-end and back-end, so most updates are sent to the back-end and then updated in the front-end (the original database is only queried when first visiting the front-end site, and there is no consideration for concurrent users).

## To Run (Latest Version)
The web app is deployed, click the github pages link on the right or navigate to https://nealhamacher.github.io/NealU-Course-Registration/   
Please note that, due to the backend taking some time to spin up after a period of activity, it may take ~1 minute for the student list dropdown to populate on the first visit.

## To Run (Local Version)
<ol>
  <li>Clone the repository onto your computer. NPM and MongoDB are also required.</li>
  <li>Run npm install in both the frontend and back end directories.</li>
  <li>Start the backend with <strong>npm start</strong> from the backend directory. By default the back-end runs on port 8000.
  <li>Add the files in the data folder to a MongoDB database named <strong>nealu</strong> (the uri for the database is <strong>mongodb://localhost:27017/nealu</strong> )</li>
    <ol>
      <li>courses.json -> into collection <strong>courses</strong> (nealu.courses) or use Postman to post objects ones at a time to http://localhost:8000/courses through backend</li>
      <li>students.json -> into collection <strong>students</strong> (nealu.students) or use Postman to post objects one at a time to http://localhost:8000/students through back-end</li>
    </ol>
  <li>Start the frontend with <strong>npm run dev</strong> or <strong>npm start</strong> from the frontend directory. The default port for the front-end is port 3000</li>
  <li>Navigate to <strong>http://localhost:3000/</strong> in a web browser</li>
</ol>

## Architecture  
### Front-end 
In the user interface there is:
<ol>
  <li>The top bar, consisting of the title and the student selection drop-down. Begin by selecting a student from the list</li>
  <li>The two tab headers, one for viewing a student's information and enrolled courses, the other for seeing course listings and registering in courses</li>
  <li>The student information tab, which shows the student's name, student ID#, email, address, and table of enrolled courses. Courses can be dropped by clicking on the yellow drop button in the table</li>
  <li>The course registration tab, which shows all available courses. Courses can be enrolled in by clicking the blue enroll button, which will then change colour to yellow to signify successful enrollment. If the course is full, the button will be greyed out. If the course time conflicts with a course already enrolled in, the button will be red. In these cases (enrolled, full, or conflict), clicking on the buttons does nothing </li>
</ol>
Behind the scenes, there is a main App.js file that contains the elements for the page (top bar and tabs). There are separate react components for the student detail tab, course registration tab, and buttons in the course registration table. Finally, there are action javascript files for enrolling and dropping courses. These actions send an update to the back-end, make changes to the objects in the front-end, and then signal the views to update.

### Back-end
The back-end has separate routes, controllers, repositories, and models for the student and course paths. In the student path, there are routes for getting all students, posting a new student, adding (via patch) a course, and dropping (via patch) a course. In the course path, there are routes for getting all courses, posting a new course, reducing (via patch) the seats available in a course, and increasing (via patch) the seats available in a course.

### Database Schema
The course schem holds a course's id#, name, department, start time, and remaining capacity. The student schema holds a student's id#, name, email, address, and a list of courses (which is a full copy of the course information minus the remaining capacity). 
