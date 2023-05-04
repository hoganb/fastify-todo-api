# fastify-todo-api

This is a RESTful Todo API built with Fastify, a popular web framework for Node.js, and uses in-memory as a data storage. The API provides basic CRUD (Create, Read, Update, Delete) operations for Todo items.

## Requirements

To run this application, you'll need to have the following installed on your machine:

- Node.js (v16 or higher)

## Getting started

1. Clone this repository:

```bash
git clone https://github.com/hoganb/fastify-todo-api.git
```

2. Navigate to the project directory:

```bash
cd fastify-todo-api
```

3. Install the dependencies:

```bash
npm ci
```

4. Start the server:

```bash
npm start
```

The server will start running at **http://localhost:3000**.

## API endpoints

The following endpoints are available:

| Method     | URL          | Description              |
| ---------- | ------------ | ------------------------ |
| **GET**    | `/todos`     | Get all Todo items       |
| **GET**    | `/todos/:id` | Get a Todo item by id    |
| **POST**   | `/todos`     | Create a new Todo item   |
| **PUT**    | `/todos/:id` | Update a Todo item by id |
| **DELETE** | `/todos/:id` | Delete a Todo item by id |

# Features

- **Fastify framework**: Designed for high performance and can handle a large number of requests, making the API scalable
- **TypeScript**: The project is written in TypeScript, which provides static type checking and improves code maintainability
- **RESTful API**: The API follows REST (Representational State Transfer) principles and uses HTTP methods like GET, POST, PUT, and DELETE to manage Todo items
- **CRUD operations**: The API supports basic CRUD (Create, Read, Update, Delete) operations for Todo items
- **In-memory storage**: The API uses in-memory storage to store and retrieve data for Todo items
- **Input/Output Validation**: Using `@sinclair/typebox` JSON Schema
- **Error handling**: For invalid requests and missing resources, to provide a better user experience using `@fastify/sensible`
- **Swagger/OpenAPI**: Documentation using `@fastify/swagger` and `@fastify/swagger-ui`
- **Nodemon**: For developer efficiency by automatically restarting the server on changes
- **Logging**: Requests & responses using built-in `pino` logger

# Next Steps

- Implement unit tests using `jest` from files `/test/**/*.test.ts` (utilize `fastify-mock`)
- Implement integration tests using `jest` from files `/test/**/*.integration.test.ts` (utilize `supertest`)
- API security: rate limiting, authentication, authorization, CORS, CSRF protection, helmet
- API tracing using tools like `opentracing`
- Handle aborted requests
- Graceful service termination

# Skills

Requires a good understanding of the Node.js runtime environment, as well as proficiency in TypeScript and the Fastify web framework. Some of the skills required and developed in this project include:

- Knowledge of Node.js and its ecosystem
- Understanding of TypeScript and its features
- Proficiency in the Fastify web framework and its APIs
- Understanding of in-memory storage and its limitations
- Proficiency in using npm as a package manager
- Familiarity with RESTful APIs and CRUD operations
- Knowledge of error handling and testing practices in web applications
- Familiarity with Git and version control
