##PlacementCell
PlacementCell is a web application designed to streamline the process of managing student placements in an educational institution. It provides features for employee authentication, student management, interview scheduling, and report generation.

##Features
Sign Up / Sign In: Employees can sign up for new accounts or sign in to existing accounts to access the system.

Student Management: Users can add new students to the system, providing details such as name, email, college, contact number, and batch.

Interview Scheduling: Employees can schedule interviews with different companies for students, specifying the date, time, and company details.

Interview Result Updates: After conducting interviews, employees can update the result status of each student, indicating whether they were selected or not.

Report Generation: The application allows users to generate reports of students in CSV format, including details such as name, email, college, placement status, and interview results.

##Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Authentication: Passport.js
CSV Generation: fast-csv
Other Libraries: fs (file system)
Setup Instructions
Clone the repository: git clone https://github.com/srikanth141199/PlacementCell
Install dependencies: npm install
Set up environment variables (e.g., database connection URI, session secret)
Start the server: npm start
Access the application at http://localhost:3200

placement-cell/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── views/
│   └── report/
|        └── data.csv
├── config/
│   ├── mongoose.js
│   └── passport-local-strategy.js
├── .env
├── package.json
└── README.md


##How to Use
1. Sign Up / Sign In: Employees can sign up or sign in using their credentials.
2. Add New Student: Navigate to the student management section and fill in the required details to add a new student.
3. Schedule Interview: Select a student and specify the interview details to schedule an interview with a company.
4. Update Interview Result: After conducting the interview, update the result status of the student.
5. Generate Report: Download a CSV report of all students, including their details and interview results.