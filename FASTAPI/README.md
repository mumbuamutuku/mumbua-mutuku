# FastAPI E-commerce Project

This is a FastAPI-based E-commerce project that allows users to create accounts, manage products, and perform various actions related to an online store. Users can register, log in, create, view, update, and delete products, as well as upload product images. Additionally, users can manage their businesses, view product details, and verify their email addresses.

## Features

- User Authentication: Users can register and log in to manage their accounts and products.
- User Verification: Email verification is implemented to ensure user authenticity.
- Product Management: Users can create, list, view, update, and delete products.
- Business Management: Users can update business information, including the business name, city, region, and logo.
- Image Upload: Users can upload product images, which are resized and saved for display.
- Product Details: Users can view detailed product information, including the associated business details.

## Getting Started

Follow these steps to get the project up and running on your local machine:

## Prerequisites

- Python: Make sure you have Python installed on your computer.

- Dependencies: Install project dependencies using pip install -r requirements.txt.

- SQLite Database: The project uses SQLite for simplicity. You can modify the database settings in the Tortoise configuration if needed.

- Create a .env file with the following configuration:

    ``` makefile
        EMAIL=your-email@gmail.com
        PASS=your-email-password
        SECRET=your-secret-key
    
## Installation

1. Clone the repository:

    ``` bash

        git clone <repository-url>

2. Change the directory:

    ``` bash

        cd fastapi-ecommerce-project

3. Install the dependencies:

    ``` bash

        pip install -r req.txt

4. Start the FastAPI development server:

    ``` bash

        uvicorn main:app --reload
The application should now be running on http://localhost:8000.

# API Endpoints

## Authentication

`POST /token`: Generate a token for user authentication.

`POST /user/me`: Get user details (requires authentication).

## User Registration and Verification

`POST /registration`: Register a new user with email verification.

`GET /verification`: Verify the user's email address by clicking on a verification link sent via email.

## Product Management

`POST /products`: Create a new product (requires authentication).

`GET /products`: Get a list of all products.

`GET /products/{id}`: Get details of a specific product.

`DELETE /product/{id}`: Delete a specific product (requires authentication).

`PUT /product/{id}`: Update a specific product (requires authentication).

## Business Management

`PUT /business/{id}`: Update business information (requires authentication).

## Image Upload

`POST /uploadfile/profile`: Upload a profile image (requires authentication).

`POST /uploadfile/product/{id}`: Upload a product image (requires authentication).

# Usage

- Register a new user by sending a POST request to /registration. You will receive an email for verification.

- Click on the verification link in the email to activate your account.

- Log in with your registered user by sending a POST request to /token. Use the access token for authentication.

- Manage products and businesses using the provided endpoints.

- Upload product images and profile images as needed.

# Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are highly appreciated.

# License

This project is licensed under the MIT License - see the LICENSE file for details.

# Authors

Mumbua Mutuku

### Enjoy using this FastAPI E-commerce project to create and manage your online store