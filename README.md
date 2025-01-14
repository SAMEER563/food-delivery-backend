# Food Delivery Backend

This is the backend for a food delivery application built using **Node.js**, **Express.js**, **Axios**, **JWT**, and **Bcrypt**. The backend handles user authentication, restaurant and menu management, order processing, and more. It communicates with a front-end application to facilitate a seamless food delivery experience.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

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
- **MongoDB** (optional): NoSQL database for storing application data.

## Installation

### Prerequisites

Ensure that you have the following installed:

- Node.js: [Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): Comes with Node.js

### Steps

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/food-delivery.git
    ```

2. Navigate to the project directory:
    ```bash
    cd food-delivery
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
    MONGO_URI=mongodb://localhost:27017/food-delivery
    ```

5. Start the server:
    ```bash
    npm start
    ```

Your server should now be running on `http://localhost:5000`.

## Usage

The backend exposes a set of API endpoints for interacting with the system. You can use Postman or any HTTP client to test the routes.

- **Authentication**
    - **POST** `/api/auth/register`: Register a new user (provides a JWT on success).
    - **POST** `/api/auth/login`: Login an existing user and get a JWT.
    - **POST** `/api/auth/refresh`: Refresh JWT token using a valid refresh token.

- **Restaurants**
    - **GET** `/api/restaurants`: Get all restaurants.
    - **POST** `/api/restaurants`: Create a new restaurant (Admin only).
    - **GET** `/api/restaurants/:id`: Get details of a specific restaurant.
    - **PUT** `/api/restaurants/:id`: Update restaurant details (Admin only).
    - **DELETE** `/api/restaurants/:id`: Delete a restaurant (Admin only).

- **Menu**
    - **GET** `/api/menu/:restaurantId`: Get all menu items for a specific restaurant.
    - **POST** `/api/menu/:restaurantId`: Add a new menu item (Admin only).
    - **PUT** `/api/menu/:id`: Update a menu item (Admin only).
    - **DELETE** `/api/menu/:id`: Delete a menu item (Admin only).

- **Orders**
    - **GET** `/api/orders`: Get all orders (Admin only).
    - **POST** `/api/orders`: Create a new order.
    - **GET** `/api/orders/:id`: Get details of a specific order.

## Contributing

We welcome contributions to improve the project. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes and commit them (`git commit -m 'Add feature xyz'`).
4. Push to your forked repository (`git push origin feature-xyz`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
