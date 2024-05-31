Here's the updated README with the changes incorporated:

````markdown
# PeerBlend: P2P LendHub

PeerBlend is a peer-to-peer lending application designed to facilitate borrowing and lending between individuals. It provides a platform where users can request loans, approve or reject loan requests, and manage repayments seamlessly.

## Features

- **User Authentication**: Secure user registration and login using bcrypt for password hashing and JWT tokens for authentication.
- **Loan Management**: Users can request loans, approve or reject loan requests, and manage repayments.
- **Transaction Processing**: Logic for handling transactions between lenders and borrowers.
- **Security Measures**: Input validation, error handling, and authentication middleware to ensure security.
- **Database Integration**: MongoDB database integration using Mongoose for data modeling and management.
- **Middleware**: Logging, error handling, and other common tasks implemented as middleware.
- **Password Reset**: Ability for users to reset their passwords using a secure token-based mechanism.
- **Social Login**: Integration with Google and Facebook OAuth for seamless authentication.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KINDREW/peerblend.git
   ```
````

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
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   FACEBOOK_APP_ID=your_facebook_app_id
   FACEBOOK_APP_SECRET=your_facebook_app_secret
   FACEBOOK_REDIRECT_URI=your_facebook_redirect_uri
   ```

   Replace `your_mongodb_connection_string`, `your_jwt_secret_key`, `your_google_client_id`, `your_google_client_secret`, `your_facebook_app_id`, `your_facebook_app_secret`, and `your_facebook_redirect_uri` with your actual MongoDB connection string, JWT secret key, Google OAuth client ID and secret, and Facebook app ID, secret, and redirect URI respectively.

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

```

Feel free to modify it further if needed!
```
