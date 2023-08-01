### Conceptual Exercise
What is RESTful routing?
RESTful routing is an approach to defining API endpoints in a web application following the principles of Representational State Transfer (REST), using standard HTTP methods and URLs to perform CRUD (Create, Read, Update, Delete) operations on resources.

What is a resource?
A resource is an object or entity that is exposed and can be interacted with through an API. It can be any data or functionality that the application exposes to clients.

When building a JSON API, why do you not include routes to render a form that when submitted creates a new user?
In a JSON API, forms are typically not used because JSON APIs are designed to be consumed by machines, not web browsers. Instead, API clients send JSON payloads to create new resources.

What does idempotent mean? Which HTTP verbs are idempotent?
Idempotent means that making multiple identical requests will have the same result as a single request. In HTTP, GET, HEAD, PUT, and DELETE are idempotent methods.

What is the difference between PUT and PATCH?
PUT is used to update an entire resource, replacing it with the new representation, while PATCH is used to make partial updates to a resource, modifying only the specified fields.

What is one-way encryption?
One-way encryption, also known as hashing, is a cryptographic process that transforms data (e.g., passwords) into fixed-length, irreversible strings of characters, making it computationally infeasible to reverse the process and retrieve the original data.

What is the purpose of a salt when hashing a password?
A salt is random data that is added to the input of a password before hashing. It enhances security by preventing attackers from using precomputed tables (rainbow tables) to crack hashed passwords.

What is the purpose of the Bcrypt module?
The Bcrypt module is used for hashing passwords securely. It employs the bcrypt algorithm, which includes the use of salting and a cost factor to slow down the hashing process and make it more resistant to brute-force attacks.

What is the difference between authorization and authentication?
Authentication is the process of verifying the identity of a user, typically through credentials like a username and password. Authorization, on the other hand, is the process of determining what actions and resources a user is allowed to access after they have been authenticated.