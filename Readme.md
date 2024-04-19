# PeerBlend: P2P LendHub

PeerBlend is a peer-to-peer lending application designed to facilitate borrowing and lending between individuals. It provides a platform where users can request loans, approve or reject loan requests, and manage repayments seamlessly.

## Features

- **User Authentication**: Secure user registration and login using bcrypt for password hashing and JWT tokens for authentication.
- **Loan Management**: Users can request loans, approve or reject loan requests, and manage repayments.
- **Transaction Processing**: Logic for handling transactions between lenders and borrowers.
- **Security Measures**: Input validation, error handling, and authentication middleware to ensure security.
- **Database Integration**: MongoDB database integration using Mongoose for data modeling and management.
- **Middleware**: Logging, error handling, and other common tasks implemented as middleware.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KINDREW/peerblend.git
   ```

2. Install dependencies:

   ```bash
   cd peerblend
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Replace `your_mongodb_connection_string` and `your_jwt_secret_key` with your actual MongoDB connection string and JWT secret key respectively.

4. Run the application:

   ```bash
   node server.js
   ```

## Usage

- Register a new account or login if you already have one.
- Request loans, approve or reject loan requests, and manage repayments.
- Explore other features as needed.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.
