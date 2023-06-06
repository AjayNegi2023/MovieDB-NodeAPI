# MovieDB-NodeAPI
This backend application, built using Node.js, provides user registration and login functionality with secure password hashing using bcrypt and token-based authentication using JSON Web Tokens (JWT). It also includes a feature where users can create movie details,
with exclusive modification access granted to the admin.

## Features
## `User Registration` 
Users can register an account by providing necessary information such as username, email, and password. 
The passwords are securely hashed using bcrypt before storing them in the database.
![image](https://github.com/AjayNegi2023/MovieDB-NodeAPI/assets/108294989/de98ab54-0fe2-47c8-ab02-3084a8bdc0b6)

## `User Login`
Registered users can log in using their credentials.
The application verifies the user's password against the stored hash and generates a JWT for subsequent authenticated requests.
![image](https://github.com/AjayNegi2023/MovieDB-NodeAPI/assets/108294989/54f03747-abde-40d3-90da-d9e61c4a0cfc)

## `Movie Details Creation` 
Authenticated users can create and submit movie details, including the title, category and other relevant information.
![image](https://github.com/AjayNegi2023/MovieDB-NodeAPI/assets/108294989/f907b003-bb3c-4123-ad7c-1e5864c944ae)


## `Admin Access`
The application implements an admin role with elevated privileges. Only admin users have the authority to modify or delete movie details submitted by other users.


## Technologies Used
- Node.js
- Express.js
- MongoDB 
- Bcrypt (for password hashing)
- JSON Web Tokens (JWT) (for token-based authentication)

## Getting Started
# Prerequisites
To run the MovieDB-NodeAPI locally, you will need to have the following installed on your system:

- Node.js and npm (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

## Installation Instructions
### Clone the Repository
### `npm install`

### `npm start`
 start the server by running `npm start`
