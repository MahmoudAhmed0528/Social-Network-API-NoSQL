# Social Network API

## Description

A social network API built with Express.js and MongoDB, allowing users to share thoughts, react to friends' thoughts, and create a friend list.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Models](#models)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MahmoudAhmed0528/Social-Network-API-NoSQL.git
   ```

2. Navigate to the project's root directory:

   ```bash
   cd Social-Network-API-NoSQL
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

```bash
npm start
```

2. Open Insomnia or your preferred API testing tool.
3. Test the API routes as described in the API Routes section.

## API Routes

. GET /api/users: Get all users.
. GET /api/users/:id: Get a single user by ID with thoughts and friend data.
. POST /api/users: Create a new user.
. PUT /api/users/:id: Update a user by ID.
. DELETE /api/users/:id: Delete a user by ID.

For more detailed API routes, refer to the controller and router files in the `./controllers` and `./routes` directories.

## Models

### User Model

. `username`: String, unique, required, trimmed.
. `email`: String, required, unique, must match a valid email address.
. `thoughts`: Array of `_id` values referencing the `Thought` model.
. `friends`: Array of `_id` values referencing the `User` model (self-reference).

### Thought Model

. `thoughtText`: String, required, max length 280.
. `createdAt`: Date, default value is the current timestamp.
. `username`: String, required.
. `reactions`: Array of nested documents using the `reactionSchema`.

### Reaction Schema

. `reactionId`: ObjectId, default value is a new ObjectId.
. `reactionBody`: String, required, max length 280.
. `username`: String, required.
. `createdAt`: Date, default value is the current timestamp.

## Walkthrough Video

[Social-Network-API-NoSQL](https://www.youtube.com/watch?v=OCT335K5VYk)

## Contributing

If you'd like to contribute to the project, please open an issue or submit a pull request.

## Questions

If you have any questions, feel free to reach out:

. GitHub: MahmoudAhmed0528

. Email: mahmood.adel@hotmail.com
