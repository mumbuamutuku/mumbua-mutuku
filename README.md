# Contact Management System

This is a simple Contact Management System built using Express.js and MongoDB. It allows users to manage their contacts by providing basic CRUD (Create, Read, Update, Delete) operations.

## Features

- User Authentication: Users can register and log in to manage their contacts.
- Create Contacts: Users can add new contacts with a name, email, and phone number.
- List Contacts: Users can view a list of all their contacts.
- View Contact: Users can view details of a specific contact.
- Update Contact: Users can edit the information of a specific contact.
- Delete Contact: Users can remove a contact from their list.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js: Make sure you have Node.js installed on your computer. You can download it [here](https://nodejs.org/).
- MongoDB: You need a MongoDB instance, either locally or remotely. You can set up a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Change the directory:

    ```bash
    cd contact-management-system
3. Install the dependencies:

    ```bash
    npm install
    
4. Create a .env file in the project root and configure the following variables:

    ```makefile
    PORT=5001
    CONNECTION_STRING=your-mongodb-connection-string
    ACCESS_TOKEN_SECRET=your-secret-key

5. Start the development server:

    ```bash
    npm run dev

The application should now be running on http://localhost:5001.

# API Endpoints

## Authentication

`POST /api/users/register`: Register a new user.
`POST /api/users/login`: Log in with an existing user.
`GET /api/users/current`: Gets the current user information


## Contacts

`GET /api/contacts`: Get all contacts (requires authentication).
`POST /api/contacts`: Create a new contact (requires authentication).
`GET /api/contacts/:id`: Get a specific contact (requires authentication).
`PUT /api/contacts/:id`: Update a specific contact (requires authentication).
`DELETE /api/contacts/:id`: Delete a specific contact (requires authentication).

## Usage

1. Register a user by sending a POST request to /api/users/register.
2. Log in with the registered user by sending a POST request to /api/users/login.
3. Use the provided JWT token for authentication when making requests to contact-related endpoints.
4. Create, read, update, or delete contacts as needed.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are highly appreciated.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
MUMBUA MUTUKU 

## Acknowledgments
Special thanks to the Express.js and MongoDB communities for their excellent resources and documentation.

Enjoy managing your contacts with this simple Contact Management System!