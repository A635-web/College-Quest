# **College Club Application System**

### **Overview**
The College Club Application System is a web application designed to streamline the process of applying to college clubs. Built using the MERN stack (MongoDB, Express.js, React, Node.js), it enables students to easily apply to clubs and allows coordinators to manage applications efficiently.

### **Features**
- **User Authentication**: Secure signup and login using JWT.
- **Student Dashboard**: View available clubs and submit applications.
- **Coordinator Dashboard**: Manage club applications with options to accept or reject.
- **Concurrency Handling**: Pessimistic locking mechanism to ensure data integrity during concurrent operations (future prospect)

### **Tech Stack**
- **Frontend**: React.js
  - Responsive UI for students and coordinators.
  - State management with React Hooks.
- **Backend**: Node.js with Express.js
  - RESTful APIs for handling data flow.
  - JWT-based authentication for secure access.
- **Database**: MongoDB
  - Flexible schema design to store users, clubs, and applications.
  - Pessimistic locking to manage concurrent operations.
- **Others**:
  - **Axios** for API requests.
  - **Mongoose** for MongoDB object modeling.
