# Neal Univeristy Course Registration System  
A course registration system for 

## To Run
<ol>
<li>Download the repository. NPM and MongoDB are also required.</li>
<li>Add the files in the data folder to a MongoDB database named <strong>nealu</strong></li>
  <ol>
  <li>courses.json -> into collection <strong>courses</strong> (nealu.courses) or post to http://localhost:8000/students/ for post route in backend</li>
  <li>students.json -> into collection <strong>students</strong> (nealu.students) or post to http://localhost:8000/courses for post route in back-end</li>
  </ol>
<li>Run npm install in both the frontend and back end directories.</li>
<li>Start the backend with <strong>npm start</strong> from the backend directory. By default it runs on port 8000.
<li>Start the frontend with <strong>npm run dev</strong> or <strong>npm start</strong> from the frontend directory. The default port for the front-end is port 3000</li>
<li>Navigate to <strong>http://localhost:3000/</strong> in a web browser</li>
