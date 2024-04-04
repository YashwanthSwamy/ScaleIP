# Venture Vista
**Created by:** Yashwanth

![Venture Vista](./images/app.png)


## User Service

Venture Vista's user service is developed using Node.js with Express framework and TypeScript. The code follows the clean architecture or vertical slice architecture, where each feature such as login, register, companies, investments has its own folder with controllers, middleware, service, and models. This architecture helps in organizing the codebase and making it more maintainable and scalable. TypeScript is used to add static typing to JavaScript, providing better code quality and developer experience.

The database connection is managed as an external dependency (`externalService` file), and the CQRS (Command Query Responsibility Segregation) pattern is followed for CRUD operations for database operations. CQRS helps in separating the read and write operations, leading to better performance and scalability of the application.

### Commands

1. `npm run build`: Build the server.
2. `npm run serve`: Run the server.

## Frontend Service

Venture Vista's frontend is developed using React, Tailwind CSS, and Syncfusion for charts. React is a popular JavaScript library for building user interfaces, Tailwind CSS is a utility-first CSS framework for rapidly building custom designs, and Syncfusion provides a rich set of UI components, including charts, for building interactive data visualizations.

### Commands

1. `npm install`: Install dependencies.
2. Create `.env` file using `.env.example`.
3. `npm run start`: Start the development server.


## Docker

Venture Vista is containerized using Docker. Docker containers provide a consistent environment for running applications, making it easier to deploy and manage them across different environments. Docker Compose is used to define and run multi-container Docker applications. 

The `docker-compose.yml` file defines the services required for Venture Vista, including the frontend, user service, and a PostgreSQL database. Use the following command to build all the required images and containers:

```bash
docker-compose up --build
