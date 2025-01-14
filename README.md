# Food Delivery Backend

This is the backend for a food delivery application built using **Node.js**, **Express.js**, **Axios**, **JWT**, and **Bcrypt**. The backend handles user authentication, restaurant and menu management, order processing, and more. It communicates with a front-end application to facilitate a seamless food delivery experience.


## Features

- User authentication and authorization (JWT-based)
- Password hashing with **Bcrypt**
- Role-based access (Admin, User)
- CRUD operations for restaurants, menus, and orders
- Integration with external services using **Axios**
- Data validation and error handling

## Technologies

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Web application framework for Node.js.
- **Axios**: Promise-based HTTP client for making requests.
- **JWT (JSON Web Tokens)**: Authentication mechanism for securely transmitting information.
- **Bcrypt**: Library for hashing and salting passwords.
- **MongoDB** : NoSQL database for storing application data.

## Installation

### Prerequisites

Ensure that you have the following installed:

- Node.js: [Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): Comes with Node.js

### Steps

1. Clone the repository to your local machine:
    ```bash
    https://github.com/SAMEER563/food-delivery-backend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd food-delivery-backend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file at the root of the project and add your environment variables (e.g., JWT secret, database URI).

    Example:
    ```env
    PORT=5000
    JWT_SECRET=your-jwt-secret
    MONGO_URI=your-mongoDB-string
    ```

5. Start the server:
    ```bash
    npm start
    ```

Your server should now be running on `http://localhost:5000`.

## Usage

The backend exposes a set of API endpoints for interacting with the system. You can use Postman or any HTTP client to test the routes.

- **Authentication**
    - **POST** `/register`: Register a new user (provides a JWT on success).
    - **POST** `/login`: Login an existing user and get a JWT.
    - **POST** `/admin/login`: Admin Login an existing user and get a JWT.


- **Menu**
    - **GET** `/menu`: Get all menu items for a specific restaurant.
    - **POST** `/menu`: Add a new menu item (Admin only).
    - **PUT** `/menu/:id`: Update a menu item (Admin only).
    - **DELETE** `/menu/:id`: Delete a menu item (Admin only).

- **Orders**
    - **GET** `/orders`: Get all orders (Admin only).
    - **POST** `/order`: Create a new order.
    - **GET** `/orders/:id`: Get details of a specific order.


