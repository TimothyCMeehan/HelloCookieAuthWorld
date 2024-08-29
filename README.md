# HelloCookieAuthWorld

### Introduction

HelloCookieAuthWorld is a full-stack application that demonstrates the basic implementation of cookie-based authentication using a React frontend, an Express backend, and a MongoDB repository. This project serves as an introduction to cookie-based auth and is part of a broader series aimed at showcasing key components of modern web development.
### Features

* User Registration and Login
* Cookie-based Authentication for Session Management
* Protected Routes accessible only by authenticated users

### Screenshots

Will include some screenshots here once the project is up and running.

## Getting Started
### Prerequisites

* Node.js
* MongoDB

### Installation
1. Clone the repository:
    ```
    git clone https://github.com/TimothyCMeehan/HelloCookieAuthWorld.git
    cd HelloCookieAuthWorld
    ```
2. Install dependencies:

    * Frontend:
        ```
        cd frontend
        npm install
        ```
    * Backend:
        ```
        cd ../backend
        npm install
        ```
### Running the Application

1. Backend:
    ```
    cd backend
    npm start
    ```
2. Frontend:
    ```
    cd ../frontend
    npm start
    ```
## Project Structure

```
HelloCookieAuthWorld/
│
├── backend/                 # Express server
│   ├── controllers/         # Controllers for handling requests
│   ├── middleware/          # Authentication middleware
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   └── server.js            # Main server file
│
└── frontend/                # React frontend
    ├── public/              # Static files
    ├── src/                 # React components and pages
    └── package.json         # Frontend dependencies
```

## Usage

1. Register a new user: Open the app and fill out the registration form.
2. Login: Use your credentials to log in.
3. Access Protected Routes: Once logged in, try accessing routes that require authentication.

## Technical Details

* Cookies for Auth: Cookies are used to store session information securely in the user's browser.
* Protected Routes: Middleware checks if the user is authenticated before granting access to certain routes.

## Contributing

Feel free to fork this project, create a feature branch, and submit a pull request.
## License

This project is licensed under the MIT License.
