// 1. What is a REST API?

    /* 
        - A RESTful API (Representational State Transfer API) is a web service that follows REST principles,
        allowing applications to communicate over HTTP. REST APIs use standard HTTP methods like GET, POST, PUT, DELETE,
        and PATCH to perform operations on resources, typically represented in JSON format.
    */

    /* REST vs. Other Architectures:

        /** 
            REST vs. SOAP → REST is lightweight, uses JSON, and follows HTTP conventions, 
            whereas SOAP is more complex, relies on XML, and has a strict protocol.
        **/

        /** 
            REST vs. GraphQL → REST exposes multiple endpoints for different resources, while GraphQL provides a flexible single endpoint
            allowing clients to request specific data.
        **/

// 2. Why is structuring a REST API important?

    /* 
        -A well-structured REST API ensures scalability, maintainability, and readability of the code. 
        Without proper structure, the codebase can become difficult to manage as the application grows.
    */

    /* Best Practices for Structuring a REST API:

        /** Use MVC Architecture → Separate concerns using Models, Controllers, and Routes. **/

        /** Modularize Code → Organize business logic into services instead of cluttering controllers. **/

        /** Use Middleware → Implement authentication, validation, and logging as reusable middleware. **/

        /** Follow RESTful Naming Conventions → Use plural nouns and meaningful endpoint paths:
            ✅ /users → Get all users
            ✅ /users/:id → Get a specific user
            ❌ /getUsers, /update-user (Avoid verbs in URLs)
        **/

        /** Error Handling → Implement proper HTTP status codes and standardized error responses. **/

        /** Validation → Use tools like Joi or express-validator to validate user input. **/

        /** Rate Limiting & Security → Prevent abuse using tools like express-rate-limit and JWT Authentication. **/


// 3. What is MVC (Model-View-Controller) architecture?

    /* 
        -MVC is a design pattern that separates concerns in an application:

            Model → Defines the database schema and handles data logic.
            View → (Not relevant in APIs, used in frontend apps).
            Controller → Manages requests and communicates between the model and routes.

        Example in a REST API:

            userModel.js → Defines a User schema in MongoDB.
            userController.js → Implements business logic like creating users.
            userRoutes.js → Defines API endpoints like GET /users, POST /users.

        This separation makes the API organized, scalable, and maintainable.
    */


// 4. Explain the role of middleware in a REST API.

    /* 
        -Middleware functions in Express.js intercept HTTP requests before they reach controllers. They can:

            Authenticate users (e.g., JWT authentication middleware).
            Validate request data (e.g., using express-validator).
            Log requests (e.g., using morgan).
            Handle errors globally.
    */

    /* Example Middleware in Express:

        const authMiddleware = (req, res, next) => {
            if (!req.headers.authorization) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            next();
        };
        
        app.use(authMiddleware);

    */

// 5. What is CRUD in REST APIs?

    /* 
        - CRUD refers to the four basic operations a REST API performs on data:

            Create → POST /users → Adds a new user.
            Read → GET /users/:id → Retrieves a user.
            Update → PUT /users/:id → Updates user data.
            Delete → DELETE /users/:id → Removes a user.

        - Each of these operations corresponds to an HTTP method, making APIs intuitive and easy to use.
    */