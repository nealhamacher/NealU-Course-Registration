# Neal University Course Registration System  
A course registration system for a fictional university.  Supports adding and dropping classes, and informs the user of scheduling conflicts or if a class is full. Built using MERN stack; vite and bootstrap were used in the front-end.  Designed to minimize back-and-forth between front-end and back-end, so most updates are sent to the back-end and then updated in the front-end (the original database is only queried when first visiting the front-end site, and there is no consideration for concurrent users).

## To Run
<ol>
<li>Download the repository. NPM and MongoDB are also required.</li>
<li>Add the files in the data folder to a MongoDB database named <strong>nealu</strong></li>
  <ol>
  <li>courses.json -> into collection <strong>courses</strong> (nealu.courses) or post objects ones at a time to http://localhost:8000/students/ for post route in backend</li>
  <li>students.json -> into collection <strong>students</strong> (nealu.students) or post objects one at a time to http://localhost:8000/courses for post route in back-end</li>
  </ol>
<li>Run npm install in both the frontend and back end directories.</li>
<li>Start the backend with <strong>npm start</strong> from the backend directory. By default the back-end runs on port 8000.
<li>Start the frontend with <strong>npm run dev</strong> or <strong>npm start</strong> from the frontend directory. The default port for the front-end is port 3000</li>
<li>Navigate to <strong>http://localhost:3000/</strong> in a web browser</li>
</ol>
