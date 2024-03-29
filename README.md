# MERN Task Management Application

A MERN application for task management.

## Table of Contents

- [Installation and setup](#installation-and-setup)
- [Prerequisites](#prerequisites)
- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev-dependencies](#dev-dependencies)
- [Backend API](#backend-api)
- [frontend pages](#frontend-pages)
- [npm scripts](#npm-scripts)
- [Useful Links](#useful-links)
- [Contact](#contact)



## Installation and Setup

1. Clone Repository

   ```sh
   git clone https://github.com/champalalsuthar/MERN-task-manager-main.git
   ```

2. Change Directory 
   ```sh
   cd MERN-task-manager-main
   ```

3. Install all the dependencies

   ```sh
   npm run install-all
   ```

4. Create a file named ".env" inside the backend folder. Add data from .env.example file and substitute your credentials there.

5. Start the application

   ```sh
   npm run dev
   ```

6. Go to http://localhost:3000

## Prerequisites

- Node.js must be installed on the system.
- You should have a MongoDB database.
- You should have a code editor (preferred: VS Code)


## Features
### User-side features

- Login 
- Signup
- Logout
- Add tasks
- Update tasks
- View tasks
- Delete tasks

### Developer-side features

- Fully Responsive Navbar
- Toasts for success and error messages
- Form validations in frontend and backend
- Token based Authentication
- Use of 404 page for wrong urls
- Custom Loaders
- Global user state using Redux
- Use of layout component for pages
- No external CSS files needed (made using Tailwind CSS)
- Usage of Tooltips
- Dynamic document titles
- Redirect to previous page after login
- Use of various React hooks
- Routes protection
- Custom hook also used (useFetch)
- Middleware for verifying the user in backend
- Use of different HTTP status codes for sending responses
- Standard pratices followed

## Tools and Technologies

- HTML
- CSS
- Javascript
- Tailwind CSS
- React
- Redux
- Node.js
- Express.js
- Mongodb

## Dependencies

Following are the major dependencies of the project:

- react
- react-dom
- react-redux
- react-router-dom
- react-toastify
- axios
- redux
- redux-thunk
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken(JWT)
- mongoose

## Dev-dependencies

Following are the major dev-dependencies of the project:

- nodemon
- concurrently


## Backend API

<pre>
- POST     /api/auth/signup
- POST     /api/auth/login
- GET      /api/tasks
- GET      /api/tasks/:taskId
- POST     /api/tasks
- PUT      /api/tasks/:taskId
- DELETE   /api/tasks/:taskId
- GET      /api/profile
</pre>

## Frontend pages

<pre>
- /                 Home Screen (Public home page for guests and private dashboard (tasks) for logged-in users)
- /signup           Signup page
- /login            Login page
- /tasks/add        Add new task
- /tasks/:taskId    Edit a task
</pre>

## npm scripts

At root:

- `npm run dev`: Starts both backend and frontend
- `npm run dev-server`: Starts only backend
- `npm run dev-client`: Starts only frontend
- `npm run install-all`: Installs all dependencies and dev-dependencies required at root, at frontend and at backend.

Inside frontend folder:

- `npm start`: Starts frontend in development mode
- `npm run build`: Builds the frontend for production to the build folder
- `npm test`: Launches the test runner in the interactive watch mode
- `npm run eject`: This will remove the single build dependency from the frontend.

Inside backend folder:

- `npm run dev`: Starts backend using nodemon.
- `npm start`: Starts backend without nodemon.

## Useful Links

- This project

  - Github Repo: https://github.com/champalalsuthar/MERN-task-manager-main

## Contact

- Email: champalaljangid9292@gmail.com
- Linkedin: https://www.linkedin.com/in/champa-lal-suthar-325040253/
