# 03 Node Express - Solutions

### Node.js Fundamentals

1.  **What is Node.js? Is it a language, a library, or a runtime?**
    Node.js is a **runtime environment**. It's not a language (the language is JavaScript) nor a library. It's a program that runs on your computer and allows you to execute JavaScript code outside of a web browser, on the server-side.

2.  **Which engine does Node.js use to execute JavaScript?**
    Node.js uses the **V8 JavaScript engine**, which is the same engine that powers Google Chrome. V8 compiles JavaScript code into native machine code, which makes Node.js very performant.

3.  **Is Node.js single-threaded or multi-threaded? Explain how it handles multiple concurrent requests without blocking.**
    Node.js is **single-threaded**. This means it has one main thread of execution. However, it handles concurrency through its **event-driven, non-blocking I/O model**. When a request involves an I/O operation (like reading a file or querying a database), Node.js doesn't wait for it to complete. Instead, it registers a callback function and continues to process other requests. When the I/O operation is finished, the callback is placed in an event queue and executed by the event loop. This allows Node.js to handle thousands of concurrent connections efficiently without needing multiple threads.

4.  **Explain the Node.js Event Loop in detail. What are its different phases (Timers, Pending Callbacks, Idle/Prepare, Poll, Check, Close Callbacks)?**
    The event loop is the heart of Node.js's asynchronous nature. It's a loop that runs as long as there are events to process. It has several phases:
    *   **Timers:** Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
    *   **Pending Callbacks:** Executes I/O callbacks that were deferred to the next loop iteration.
    *   **Idle, Prepare:** Only used internally by Node.js.
    *   **Poll:** Retrieves new I/O events; executes I/O-related callbacks. This is where most of the work is done. If the poll queue is empty, it will wait for new events or move to the check phase if `setImmediate()` callbacks are present.
    *   **Check:** Executes callbacks scheduled by `setImmediate()`.
    *   **Close Callbacks:** Executes `close` event callbacks (e.g., `socket.on('close', ...)`).

5.  **What is Libuv and what is its role in Node.js architecture?**
    **Libuv** is a multi-platform C library that provides support for asynchronous I/O-based operations such as file systems, networking, and concurrency. It's a key part of the Node.js architecture. Libuv creates a thread pool to handle I/O operations, and the event loop is one of its components. This is how Node.js can be single-threaded in its JavaScript execution but still perform non-blocking I/O under the hood.

6.  **Explain the concept of "Non-blocking I/O" and "Asynchronous" programming.**
    *   **Non-blocking I/O:** In a non-blocking model, when a program makes a request that involves I/O, it doesn't wait for the operation to complete. It immediately continues with other tasks. The program is notified later when the I/O operation is done.
    *   **Asynchronous Programming:** This is a programming paradigm that uses non-blocking operations. Instead of writing code that runs sequentially, you write code that can execute out of order. This is typically achieved with callbacks, Promises, and async/await in JavaScript.

7.  **What is the difference between `process.nextTick()` and `setImmediate()`?**
    *   `process.nextTick()`: Callbacks passed to `process.nextTick()` are executed immediately after the current operation completes, before the event loop continues. If you recursively call `process.nextTick()`, you can block the event loop.
    *   `setImmediate()`: Callbacks passed to `setImmediate()` are executed in the "check" phase of the event loop. They will run after any I/O events in the current loop.

    In short, `nextTick` runs before the next event loop phase, while `setImmediate` runs in a specific phase of the event loop.

8.  **What is the difference between `setTimeout(fn, 0)` and `setImmediate()`?**
    *   `setTimeout(fn, 0)`: Schedules a callback to be executed in the "timers" phase of the event loop after a minimum of 0 milliseconds. However, the actual time can be longer, depending on the system's load.
    *   `setImmediate()`: Schedules a callback to be executed in the "check" phase of the event loop.

    The order in which they execute is not guaranteed and can depend on where they are called. If called from within an I/O cycle, `setImmediate` is always first. If not, the order is unpredictable.

9.  **What are `__dirname` and `__filename` global variables?**
    *   `__filename`: This variable holds the absolute path of the currently executing file, including the file name.
    *   `__dirname`: This variable holds the absolute path of the directory containing the currently executing file.

10. **Explain the module system in Node.js. Difference between `module.exports` and `exports`.**
    Node.js uses a module system to organize code into separate files. You can import functionality from one module into another.
    *   `module.exports`: This is an object that is returned when you `require()` a module. By default, it's an empty object. You can add properties to it or replace it with a new object or function.
    *   `exports`: This is a shorthand reference to `module.exports`. You can add properties to it (e.g., `exports.myFunction = ...`), but you cannot reassign it to a new object or function, because that would break the reference to `module.exports`. The module would still export an empty object.

11. **What are the differences between CommonJS (`require`) and ES Modules (`import/export`) in Node.js?**
    *   **Syntax:** CommonJS uses `require()` and `module.exports`. ES Modules use `import` and `export`.
    *   **Loading:** CommonJS modules are loaded **synchronously**. When you `require()` a module, Node.js stops execution until the module is loaded. ES Modules are loaded **asynchronously**, which can be more performant.
    *   **`this` context:** In CommonJS, `this` refers to the current module's exports. In ES Modules, `this` is `undefined` at the top level.
    *   **Tree Shaking:** ES Modules allow for static analysis, which enables "tree shaking" (removing unused code) by bundlers. This is not possible with CommonJS's dynamic nature.

12. **What is REPL in Node.js?**
    REPL stands for **Read-Eval-Print Loop**. It's an interactive shell for Node.js. You can start it by typing `node` in your terminal. It allows you to execute JavaScript code on the fly, test features, and debug code snippets.

13. **List some core modules of Node.js and their purposes (fs, path, os, http, events).**
    *   `fs` (File System): Provides an API for interacting with the file system (reading, writing, updating, deleting files).
    *   `path`: Provides utilities for working with file and directory paths.
    *   `os`: Provides information about the operating system, such as CPU architecture, free memory, and network interfaces.
    *   `http`: Allows you to create HTTP servers and clients.
    *   `events`: Provides the `EventEmitter` class, which is used to handle events in Node.js.

14. **Explain the `fs` (File System) module. What is the difference between `fs.readFile()` and `fs.readFileSync()`?**
    The `fs` module provides methods for working with the file system.
    *   `fs.readFile(path, callback)`: This is the **asynchronous** version. It reads the entire contents of a file. It doesn't block the event loop. The callback function is called when the file has been read.
    *   `fs.readFileSync(path)`: This is the **synchronous** version. It blocks the event loop until the file has been read. This can be useful for short scripts or configuration loading, but should be avoided in servers handling concurrent requests.

15. **What is a Buffer in Node.js? Why is it needed?**
    A **Buffer** is a global class in Node.js that is used to handle binary data directly. It is a raw, fixed-size chunk of memory allocated outside the V8 JavaScript engine. Buffers are needed because JavaScript traditionally has not handled binary data well. They are essential for working with things like file streams, network requests, and cryptography.

16. **What are Streams? Why are they useful for handling large amounts of data?**
    **Streams** are a way to handle reading or writing data in chunks, without loading the entire data into memory at once. They are useful for handling large amounts of data because they allow you to process data piece by piece, which is much more memory-efficient. For example, you can read a large file and send it over a network connection without ever having the full file content in memory.

17. **Name and explain the four types of streams in Node.js (Readable, Writable, Duplex, Transform).**
    *   **Readable:** A stream from which you can read data (e.g., `fs.createReadStream`).
    *   **Writable:** A stream to which you can write data (e.g., `fs.createWriteStream`).
    *   **Duplex:** A stream that is both readable and writable (e.g., a network socket).
    *   **Transform:** A type of duplex stream where the output is computed from the input. It can be used to modify or transform data as it is being read or written (e.g., for compression or encryption).

18. **What is the `.pipe()` method in streams? Give a code example.**
    The `.pipe()` method is a function on readable streams that takes a writable stream as an argument and automatically pipes the data from the readable stream to the writable stream. It handles backpressure automatically.

    ```javascript
    const fs = require('fs');

    const readableStream = fs.createReadStream('source.txt');
    const writableStream = fs.createWriteStream('destination.txt');

    readableStream.pipe(writableStream);
    ```

19. **What is the difference between `path.join()` and `path.resolve()`?**
    *   `path.join([...paths])`: Joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
    *   `path.resolve([...paths])`: Resolves a sequence of paths or path segments into an **absolute path**. It works from right to left, with each subsequent path prepended until an absolute path is constructed. If no absolute path is formed, it prepends the current working directory.

20. **Explain the `events` module and the `EventEmitter` class. How do you create and emit custom events?**
    The `events` module provides the `EventEmitter` class, which is central to Node.js's event-driven architecture. Many core Node.js objects (like streams and HTTP servers) inherit from `EventEmitter`.

    You can create your own class that extends `EventEmitter` and then create, listen for, and emit custom events.

    ```javascript
    const EventEmitter = require('events');

    class MyEmitter extends EventEmitter {}

    const myEmitter = new MyEmitter();

    // Listen for an event
    myEmitter.on('myEvent', (data) => {
      console.log('An event occurred:', data);
    });

    // Emit the event
    myEmitter.emit('myEvent', { message: 'Hello World' });
    ```

21. **What is "backpressure" in Node.js streams and how do you handle it?**
    Backpressure is a condition that occurs when a readable stream is producing data faster than a writable stream can consume it. This can lead to memory issues as the buffer of the writable stream grows. The `.pipe()` method handles this automatically by pausing the readable stream when the writable stream's buffer is full and resuming it when the buffer has been drained.

22. **How do you handle uncaught exceptions and unhandled promise rejections in Node?**
    *   **Uncaught Exceptions:** You can catch these at the process level using `process.on('uncaughtException', (err) => { ... });`. However, the recommended practice is to let the application crash and use a process manager like PM2 to restart it. Trying to continue running after an uncaught exception can leave the application in an unknown state.
    *   **Unhandled Promise Rejections:** You can catch these using `process.on('unhandledRejection', (reason, promise) => { ... });`. Similar to uncaught exceptions, it's often best to log the error and exit the process.

23. **What is the purpose of the `package.json` file? Explain `dependencies` vs `devDependencies`.**
    The `package.json` file is the manifest for a Node.js project. It contains metadata about the project (name, version, etc.) and lists the project's dependencies.
    *   `dependencies`: These are packages that are required for the application to run in production (e.g., `express`, `mongoose`). They are installed when you run `npm install`.
    *   `devDependencies`: These are packages that are only needed for development and testing (e.g., `jest`, `nodemon`). They are installed when you run `npm install` in a development environment, but are skipped when you run `npm install --production`.

24. **Explain the role of `package-lock.json`. Why should it be committed to version control?**
    The `package-lock.json` file records the exact versions of all dependencies (and their dependencies) that were installed for a project. This ensures that every developer on a team, as well as the production environment, will have the exact same versions of all packages, preventing "it works on my machine" problems. It should be committed to version control to guarantee consistent and reproducible builds.

25. **What is the difference between `npm install` and `npm ci`?**
    *   `npm install`: This command installs dependencies based on the `package.json` file, but it may update the `package-lock.json` file if new versions of packages are available that satisfy the version ranges in `package.json`.
    *   `npm ci`: This command (short for "clean install") installs dependencies based on the `package-lock.json` file. It provides a faster, more reliable build for continuous integration environments. It first deletes the `node_modules` directory to ensure a clean install.

26. **What is the `process` object? List some useful properties like `env`, `argv`, `pid`, `cwd()`.**
    The `process` object is a global object that provides information about, and control over, the current Node.js process.
    *   `process.env`: An object containing the user environment.
    *   `process.argv`: An array containing the command-line arguments passed when the Node.js process was launched.
    *   `process.pid`: The process ID of the current process.
    *   `process.cwd()`: The current working directory of the process.

27. **How do you pass command-line arguments to a Node.js script? How do you access them?**
    You pass command-line arguments to a Node.js script by adding them after the script name when you run it: `node my_script.js arg1 arg2`.
    You can access them using the `process.argv` array. `process.argv[0]` is the path to the `node` executable, `process.argv[1]` is the path to the script file, and subsequent elements are the arguments.

28. **What are Worker Threads? When should you use them instead of the main event loop?**
    **Worker Threads** are a module in Node.js that allows you to run JavaScript code in parallel in separate threads. You should use them for CPU-intensive tasks (e.g., complex calculations, image processing) that would otherwise block the main event loop and make the application unresponsive. For I/O-intensive tasks, the main event loop is usually sufficient.

29. **What is the `cluster` module and how does it help in utilizing multi-core systems?**
    The `cluster` module allows you to create child processes (workers) that share the same server port. This enables a Node.js application to take advantage of multi-core systems. A master process can fork multiple worker processes, and incoming connections are distributed among the workers, allowing the application to handle a greater load.

30. **Explain the difference between `spawn()`, `exec()`, and `fork()` in the `child_process` module.**
    *   `child_process.spawn()`: Spawns a new process. It's best for when you want to stream the data from the child process.
    *   `child_process.exec()`: Spawns a shell and runs a command within that shell. It buffers the output. It's more convenient for running simple commands.
    *   `child_process.fork()`: A special case of `spawn()` that creates a new Node.js process. It allows for communication between the parent and child processes through a built-in messaging system. This is what the `cluster` module uses.

---

### Express.js Fundamentals

31. **What is Express.js? Why is it often called a "minimalist" framework?**
    Express.js is a fast, unopinionated, and flexible web application framework for Node.js. It's called "minimalist" because it provides a thin layer of fundamental web application features, without obscuring Node.js features. It doesn't impose a strict project structure or enforce the use of specific components, giving developers the freedom to choose their own tools and architecture.

32. **How do you create a basic "Hello World" server using Express?**
    ```javascript
    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
    ```

33. **What is Middleware in Express? Explain the Request-Response cycle.**
    Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle. The request-response cycle is the process where an HTTP request is received by the server, passed through a series of middleware functions, and a response is sent back to the client. Each middleware can perform operations on the request or response, and then either end the cycle by sending a response or pass control to the next middleware in the stack using the `next()` function.

34. **What is the purpose of the `next()` function in middleware?**
    The `next()` function is used to pass control to the next middleware function in the stack. If a middleware function does not call `next()` and does not send a response, the request will be left hanging, and the client will eventually time out.

35. **What happens if you forget to call `next()` or send a response in a middleware function?**
    If you forget to call `next()` or send a response, the request will be stuck in that middleware function. The application will not move on to the next middleware or route handler, and the client will not receive a response, eventually leading to a timeout.

36. **Describe the different types of middleware:**
    *   **Application-level middleware:** Bound to an instance of `app` by using `app.use()` or `app.METHOD()`.
    *   **Router-level middleware:** Works in the same way as application-level middleware, but it is bound to an instance of `express.Router()`.
    *   **Error-handling middleware:** Has four arguments `(err, req, res, next)`. It's used to catch and handle errors that occur in the application.
    *   **Built-in middleware:** Middleware that comes with Express, such as `express.static`, `express.json`, and `express.urlencoded`.
    *   **Third-party middleware:** Middleware that is installed from npm, such as `cookie-parser`, `cors`, and `helmet`.

37. **How do you write an error-handling middleware? What are its 4 arguments?**
    Error-handling middleware is defined with four arguments: `(err, req, res, next)`. It must be defined after all other `app.use()` and routes calls.
    ```javascript
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });
    ```

38. **Explain the difference between `res.send()`, `res.json()`, and `res.end()`.**
    *   `res.send()`: A versatile method that can send various types of responses. It can send a string, an object (which it will serialize to JSON), an array, or a Buffer. It also sets the `Content-Type` header automatically.
    *   `res.json()`: Specifically for sending JSON responses. It ensures the response is properly formatted as JSON and sets the `Content-Type` header to `application/json`.
    *   `res.end()`: A low-level method used to end the response process without sending any data. It's useful for responding to requests where no body is needed.

39. **What is the difference between `res.redirect()` and `res.render()`?**
    *   `res.redirect([status,] path)`: Redirects the client to a different URL. The status code defaults to 302 "Found".
    *   `res.render(view [, locals] [, callback])`: Renders a view template (e.g., from a template engine like EJS or Pug) and sends the resulting HTML string to the client.

40. **How do you access "Route Parameters" (e.g., `/users/:id`)?**
    You can access route parameters through the `req.params` object. For a route defined as `/users/:id`, the `id` value can be accessed as `req.params.id`.
    ```javascript
    app.get('/users/:id', (req, res) => {
      res.send(req.params.id);
    });
    ```

41. **How do you access "Query Parameters" (e.g., `/search?q=term`)?**
    You can access query parameters through the `req.query` object. For a URL like `/search?q=term&page=2`, you can access the values as `req.query.q` and `req.query.page`.

42. **How do you access the "Request Body" in a POST/PUT request? Which built-in middleware is required for this?**
    You access the request body through the `req.body` object. To populate this object, you need to use middleware that can parse the incoming request body. The built-in `express.json()` middleware is used for parsing `application/json` content, and `express.urlencoded({ extended: true })` is used for parsing `application/x-www-form-urlencoded` content.

43. **What is `app.use()` and how is it different from `app.get()` or `app.post()`?**
    *   `app.use([path,] callback)` is used to mount middleware functions at a specified path. If no path is specified, the middleware is executed for every request.
    *   `app.get(path, callback)`, `app.post(path, callback)`, etc., are used to define route handlers for specific HTTP methods. They are more specific than `app.use()`. `app.use()` can handle all HTTP methods, while `app.get()` only handles GET requests.

44. **How do you serve static files (images, CSS, JS) in Express?**
    You use the built-in `express.static` middleware. You pass the name of the directory containing the static assets.
    ```javascript
    app.use(express.static('public'));
    ```
    Now, files in the `public` directory can be accessed directly from the root URL (e.g., `/style.css` for `public/style.css`).

45. **What is `Express.Router` and how does it help in organizing a complex application?**
    `Express.Router` is a mini Express application. It's a way to group related routes into a single module. This helps in organizing a complex application by breaking it down into smaller, more manageable pieces. You can define routes in separate files using `Express.Router`, and then mount the router in your main application file.

46. **How do you handle "404 Not Found" errors in Express?**
    You can handle 404 errors by adding a middleware function at the very end of your middleware stack, after all other routes. This middleware will catch any request that hasn't been handled by a previous route.
    ```javascript
    app.use((req, res, next) => {
      res.status(404).send("Sorry can't find that!");
    });
    ```

47. **What are Template Engines? Name some popular ones used with Express (EJS, Pug, Handlebars).**
    Template engines allow you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. Popular template engines for Express include **EJS**, **Pug** (formerly Jade), and **Handlebars**.

48. **How do you set up a template engine in Express (e.g., using `app.set('view engine', ...)`).**
    You use the `app.set()` method to configure the template engine.
    ```javascript
    // Set the view engine to ejs
    app.set('view engine', 'ejs');

    // Optionally, set the directory where the template files are located
    app.set('views', './views');
    ```

49. **What is CORS (Cross-Origin Resource Sharing)? How do you enable it in an Express app?**
    CORS is a security mechanism that allows a web page from one domain to access resources from another domain. By default, browsers block these cross-origin requests. To enable CORS in an Express app, you can use the `cors` third-party middleware.
    ```javascript
    const cors = require('cors');
    app.use(cors());
    ```

50. **What is the purpose of the `cookie-parser` middleware?**
    The `cookie-parser` middleware is used to parse the `Cookie` header and populate `req.cookies` with an object keyed by the cookie names. This makes it easy to read and use cookies in your application.
    ```javascript
    const cookieParser = require('cookie-parser');
    app.use(cookieParser());
    ```

51. **What is JWT (JSON Web Token)? How do you use it for authentication in Express?**
    JWT is a compact, URL-safe means of representing claims to be transferred between two parties. In an Express application, a typical authentication flow is:
    1.  A user logs in with their credentials.
    2.  The server verifies the credentials and, if they are correct, generates a JWT containing user information (the payload).
    3.  The server sends the JWT back to the client.
    4.  The client stores the JWT (e.g., in local storage or a cookie) and sends it in the `Authorization` header with subsequent requests.
    5.  A middleware on the server verifies the JWT on each protected route. If the token is valid, the user is authenticated, and the request is allowed to proceed.

52. **Explain the difference between Session-based and Token-based authentication.**
    *   **Session-based authentication:** The server creates a session for the user upon login and stores session data on the server. A session ID is sent to the client as a cookie. This is stateful, as the server needs to maintain the session state.
    *   **Token-based authentication (e.g., JWT):** The server creates a signed token that contains user data. The token is sent to the client and stored there. The client sends the token with each request. This is stateless, as the server does not need to store any session information. All the necessary information is in the token itself.

53. **What is Helmet.js and why should you use it in Express?**
    Helmet.js is a collection of middleware functions that help secure Express applications by setting various HTTP headers. It helps protect against common web vulnerabilities like Cross-Site Scripting (XSS), clickjacking, and other attacks. It's a good practice to use Helmet in all Express applications to establish a baseline of security.

54. **How do you implement rate limiting in an Express application?**
    You can implement rate limiting using third-party middleware like `express-rate-limit`. This middleware allows you to limit the number of requests a user can make to your API in a given amount of time.
    ```javascript
    const rateLimit = require('express-rate-limit');

    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    });

    app.use(limiter);
    ```

55. **What is the purpose of the `compression` middleware?**
    The `compression` middleware is used to compress response bodies for all requests that pass through it. It can significantly reduce the size of the response body, thereby improving the speed of your application. It uses Gzip compression.

56. **How do you handle asynchronous errors in Express routes (especially before Express 5)?**
    Before Express 5, if an error occurred in an asynchronous function (like inside a `.then()` block of a Promise), you had to explicitly pass the error to the `next()` function.
    ```javascript
    app.get('/', (req, res, next) => {
      someAsyncFunction()
        .then(result => res.send(result))
        .catch(err => next(err)); // Errors must be caught and passed to next()
    });
    ```
    In Express 5, this is handled automatically for Promise-based async functions.

57. **What is the difference between `req.params`, `req.query`, and `req.body`?**
    *   `req.params`: An object containing properties mapped to the named route "parameters". For example, if you have the route `/user/:name`, then the "name" property is available as `req.params.name`.
    *   `req.query`: An object containing a property for each query string parameter in the route. For example, for `/search?name=john`, `req.query.name` would be "john".
    *   `req.body`: An object containing the parsed request body. This is typically used with POST and PUT requests. You need middleware like `express.json()` to populate this object.

58. **How do you retrieve request headers in Express?**
    You can access request headers through the `req.headers` object. For a specific header, you can use `req.get('Header-Name')`.
    ```javascript
    const contentType = req.get('Content-Type');
    ```

59. **How do you set a custom response header?**
    You can set a custom response header using the `res.set()` or `res.header()` method.
    ```javascript
    res.set('X-Custom-Header', 'Hello World');
    ```

60. **What is the difference between `res.sendFile()` and `res.download()`?**
    *   `res.sendFile(path)`: Transfers the file at the given path. It sets the `Content-Type` response HTTP header field based on the filename’s extension.
    *   `res.download(path)`: Prompts the user to download the file. It sets the `Content-Disposition` header to "attachment", which tells the browser to prompt for download.

61. **What is a "Virtual Path Prefix" for static files?**
    A virtual path prefix is a path that you can define for your static files, which is not the same as the actual directory name on the file system. This can be useful for organizing your static assets.
    ```javascript
    app.use('/static', express.static('public'));
    ```
    Now, you would load the files that are in the `public` directory from the `/static` path prefix. For example, `/static/style.css` would load `public/style.css`.

62. **What does it mean to "Mount" a router?**
    "Mounting" a router means attaching an instance of `express.Router` to a specific path in your main application. This allows you to define all the routes for a particular part of your application in a separate file and then use them in your main app.
    ```javascript
    // in users.js
    const router = express.Router();
    router.get('/', ...);
    module.exports = router;

    // in app.js
    const usersRouter = require('./users.js');
    app.use('/users', usersRouter); // Mounting the router
    ```

63. **Explain how to handle "preflight" (OPTIONS) requests in CORS.**
    A preflight request is an OPTIONS request that is sent before certain types of cross-origin requests (e.g., those with methods other than GET, HEAD, POST, or with custom headers). The server needs to respond to the OPTIONS request with the correct CORS headers (`Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`) to let the browser know if the actual request is safe to send. The `cors` middleware handles this automatically.

64. **How do you debug an Express application using the `DEBUG` environment variable?**
    Express uses the `debug` module internally to log information about route matching, middleware functions, and other internal workings. You can enable these logs by setting the `DEBUG` environment variable when you start your application.
    ```bash
    DEBUG=express:* node index.js
    ```
    This will print detailed debug information from Express to the console.

65. **How do you implement logging in Express (e.g., using `morgan` or `winston`)?**
    You can use third-party middleware like `morgan` for simple request logging or `winston` for more advanced, configurable logging.
    *   **Morgan:** A popular HTTP request logger middleware.
        ```javascript
        const morgan = require('morgan');
        app.use(morgan('dev')); // 'dev' is a predefined format
        ```
    *   **Winston:** A more versatile logging library that can log to multiple transports (e.g., console, file, database).

---

### Advanced & Database Integration

66. **Explain the difference between SQL and NoSQL databases in the context of Node.js.**
    *   **SQL (Relational Databases):** like PostgreSQL, MySQL. They have a predefined schema (structured data). They are good for applications that require complex queries and transactions (e.g., financial systems). You typically use an ORM like Sequelize or Prisma to interact with them in Node.js.
    *   **NoSQL (Non-relational Databases):** like MongoDB, Redis. They have a dynamic schema (unstructured data). They are good for applications that require high scalability and flexibility (e.g., social media, IoT). You typically use an ODM like Mongoose for MongoDB.

67. **What is an ORM (Object-Relational Mapping) and an ODM (Object-Document Mapping)? Give examples (Sequelize, Prisma, Mongoose).**
    *   **ORM (Object-Relational Mapping):** A technique that lets you query and manipulate data from a relational (SQL) database using an object-oriented paradigm. It abstracts away the SQL queries. Examples: **Sequelize**, **Prisma**.
    *   **ODM (Object-Document Mapping):** Similar to an ORM, but for document-oriented (NoSQL) databases like MongoDB. It maps documents in the database to objects in the application. Example: **Mongoose**.

68. **How do you connect Express to MongoDB using Mongoose?**
    First, you install Mongoose (`npm install mongoose`). Then, you use `mongoose.connect()` to establish a connection to your MongoDB database.
    ```javascript
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      // we're connected!
    });
    ```

69. **What is a "Schema" and a "Model" in Mongoose?**
    *   **Schema:** A Mongoose schema defines the structure of the documents within a collection. It specifies the fields, their types, and any constraints.
    *   **Model:** A Mongoose model is a constructor function that is compiled from a schema definition. An instance of a model is a document that can be saved to the database. Models are responsible for creating and reading documents from the underlying MongoDB collection.

70. **What are Mongoose "Hooks" (Middleware)?**
    Mongoose middleware (also called pre and post hooks) are functions that are executed during the lifecycle of a Mongoose operation. For example, you can define a `pre('save')` hook that will run before a document is saved to the database. This is useful for tasks like hashing passwords or data validation.

71. **Explain "Population" in Mongoose (similar to Joins in SQL).**
    Population is the process of automatically replacing the specified paths in a document with document(s) from other collection(s). It's Mongoose's way of doing "joins". For example, if you have a `Post` schema with a reference to a `User` schema, you can use `.populate('author')` to fetch the full user document along with the post.

72. **How do you handle different environments (development, production) using `process.env.NODE_ENV`?**
    The `process.env.NODE_ENV` environment variable is commonly used to specify the environment in which an application is running. You can use this variable to load different configurations for each environment. For example, you might use a different database or logging level in production versus development.
    ```javascript
    if (process.env.NODE_ENV === 'production') {
      // Use production database
    } else {
      // Use development database
    }
    ```
    Libraries like `dotenv` are often used to manage environment variables.

73. **What is PM2 and why is it essential for production Node.js apps?**
    PM2 is a process manager for Node.js applications. It's essential for production because it provides features like:
    *   **Clustering:** It can automatically run your application in cluster mode to take advantage of multi-core CPUs.
    *   **Auto-restart:** It automatically restarts your application if it crashes.
    *   **Monitoring:** It provides a dashboard to monitor CPU and memory usage.
    *   **Log management:** It centralizes and manages logs from your application.

74. **Explain "Graceful Shutdown" of a Node.js server.**
    A graceful shutdown is the process of allowing a server to shut down cleanly, without abruptly terminating active connections. When a shutdown signal is received (e.g., `SIGINT` from Ctrl+C), the server should:
    1.  Stop accepting new connections.
    2.  Finish processing any ongoing requests.
    3.  Close the database connection and other resources.
    4.  Exit the process.
    This ensures that no requests are lost and the application shuts down in a predictable way.

75. **What is the purpose of `express-session` middleware?**
    The `express-session` middleware is used to create and manage sessions in an Express application. It creates a session for each user and stores session data on the server. It uses a cookie to send a session ID to the client. This allows you to store user-specific data between requests, which is necessary for features like user authentication.

76. **In a production environment, why should you avoid using the default in-memory session store? What are the alternatives (e.g., Redis)?**
    The default in-memory session store is not suitable for production because:
    *   It's not scalable: If you run your application in a cluster, each instance will have its own in-memory store, and sessions will not be shared.
    *   It's not persistent: If the server restarts, all session data is lost.
    Alternatives include using a database to store sessions, such as **Redis** (which is very fast and often preferred), MongoDB, or a traditional SQL database.

77. **What is Socket.io? How is it different from standard HTTP requests?**
    **Socket.io** is a library that enables real-time, bidirectional, and event-based communication between web clients and servers. It's different from standard HTTP requests in that it establishes a long-lived connection, allowing the server to push data to the client without the client having to poll for it. This is ideal for applications like chat, real-time notifications, and collaborative editing.

78. **Explain the "Microservices" architecture and how Node.js is well-suited for it.**
    **Microservices** is an architectural style that structures an application as a collection of small, independent services. Each service is responsible for a specific business capability and can be developed, deployed, and scaled independently. Node.js is well-suited for microservices because:
    *   It's lightweight and has a small footprint.
    *   It's fast and efficient for I/O-bound tasks, which are common in microservices.
    *   The large npm ecosystem provides many tools and libraries for building microservices.

79. **What is "Server-Side Rendering" (SSR) vs "Client-Side Rendering" (CSR)?**
    *   **Server-Side Rendering (SSR):** The server renders the HTML for a page and sends it to the browser. This is good for SEO and initial page load performance.
    *   **Client-Side Rendering (CSR):** The browser downloads a minimal HTML page and a JavaScript bundle. The JavaScript then renders the content of the page in the browser. This is common for Single-Page Applications (SPAs) and can provide a more interactive user experience after the initial load.

80. **What is the difference between `npm update` and `npm install`?**
    *   `npm install`: Installs dependencies based on `package.json` and `package-lock.json`. If a package is already installed, it won't be updated unless you specify a new version.
    *   `npm update`: Updates packages to their latest versions that are compatible with the version ranges specified in `package.json`. It will update the `package-lock.json` file.

81. **What is the purpose of `npx`?**
    `npx` is a package runner tool that comes with npm. It allows you to execute Node.js packages from the npm registry without having to install them globally or locally. This is useful for running one-off commands or using tools like `create-react-app`.

82. **What is a "Memory Leak" in Node.js? How can you detect it (e.g., using `--inspect` and Chrome DevTools)?**
    A memory leak is a situation where a program allocates memory but fails to release it when it's no longer needed. Over time, this can cause the application to consume more and more memory, eventually leading to a crash. You can detect memory leaks in Node.js by using the `--inspect` flag to open a debugging session and then using the Chrome DevTools to take heap snapshots and compare them over time to see which objects are not being garbage collected.

83. **Explain "SQL Injection" and how to prevent it in Node.js applications.**
    **SQL Injection** is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. This can be used to view, modify, or delete data. To prevent it, you should never concatenate user input directly into SQL queries. Instead, use **prepared statements** or **parameterized queries**, which are supported by most database libraries and ORMs.

84. **Explain "XSS" (Cross-Site Scripting) and how to prevent it in Express.**
    **XSS** is a vulnerability where an attacker injects malicious scripts into a web page viewed by other users. This can be used to steal cookies, session tokens, or other sensitive information. To prevent XSS in Express, you should:
    *   **Sanitize user input:** Use libraries like `DOMPurify` on the client-side and `express-validator` on the server-side.
    *   **Encode output:** When rendering user-generated content, make sure to properly encode it so that it's treated as text, not as HTML. Template engines like EJS do this by default.
    *   **Use Content Security Policy (CSP):** This is an HTTP header that tells the browser which sources of content are trusted.

85. **What is "Hashing" and how do you store passwords securely (e.g., using `bcrypt`)?**
    **Hashing** is the process of transforming a string of characters into a fixed-length value or key that represents the original string. It's a one-way process; you can't reverse a hash to get the original string. To store passwords securely, you should never store them in plain text. Instead, you should hash them using a strong, slow hashing algorithm like **bcrypt**. When a user tries to log in, you hash the password they provide and compare it to the stored hash.

---

### Code Snippets & Practical Questions

86. **`app.get('/user/:id', ...)` What will be the output if you visit `/user/42?name=admin`?**
    The output will be `42`. The route is defined to capture the `id` parameter from the URL path. The query string `?name=admin` is not captured by `req.params.id`.

87. **`fs.readFile(...)`, `setTimeout(...)`, `setImmediate(...)` What is the most likely order of logs?**
    The most likely order is:
    1.  `Start`
    2.  `End`
    3.  `Timeout`
    4.  `Immediate`
    5.  `File Read`

    `Start` and `End` are synchronous and run first. `setTimeout` and `setImmediate` are scheduled for the next tick of the event loop. `fs.readFile` is an I/O operation and will take the longest. The order of `Timeout` and `Immediate` is not guaranteed, but `setTimeout` often runs first if the timeout is 0.

88. **`app.get('/test', ...)` What is logged in the console when `/test` is visited?**
    The console will log:
    1.  `Step 1`
    2.  `Step 2`
    The request is passed from the first middleware to the second using `next()`.

89. **`app.use((req, res, next) => { ... });` Explain what this code block does.**
    This code block defines two middleware functions. The first one is a "catch-all" middleware that creates a 404 Not Found error and passes it to the `next()` function. The second middleware is an error-handling middleware (it has 4 arguments). It catches the error from the first middleware and sends a JSON response with the error message and status code. This is a common pattern for handling 404 errors and other errors in Express.

90. **`const buffer = Buffer.from('Node');` What will be the output format of `buffer.toJSON()`?**
    The output will be a JSON object representing the Buffer's data as an array of Unicode code points.
    ```json
    {
      "type": "Buffer",
      "data": [ 78, 111, 100, 101 ]
    }
    ```

91. **`fs.readFile(__filename, ...)` In this specific case (inside an I/O callback), which one will always run first and why?**
    `setImmediate` will always run first. When inside an I/O callback, the "check" phase (where `setImmediate` runs) is executed immediately after the I/O callback, before the "timers" phase (where `setTimeout` runs).

92. **How do you create a custom middleware that logs the request method and URL for every incoming request?**
    ```javascript
    const logRequest = (req, res, next) => {
      console.log(`${req.method} ${req.url}`);
      next();
    };

    app.use(logRequest);
    ```

93. **Write a small Express route that validates a "username" from `req.body` ensuring it is a string and has at least 5 characters.**
    ```javascript
    app.post('/users', (req, res) => {
      const { username } = req.body;

      if (typeof username !== 'string' || username.length < 5) {
        return res.status(400).json({
          error: 'Username must be a string with at least 5 characters.',
        });
      }

      // ... process the valid username
      res.status(201).send('User created');
    });
    ```

94. **How do you implement a "Global Error Handler" in Express?**
    You create a special middleware function that has four arguments: `(err, req, res, next)`. This middleware must be placed at the end of your middleware stack.
    ```javascript
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: 'Something went wrong!' });
    });
    ```

95. **`const myEmitter = new eventEmitter();` What is the output of this code?**
    The output will be:
    ```
    Hello Node Enthusiast
    ```
    The code creates an event emitter, registers a listener for the `greet` event, and then emits that event with the provided data.

96. **Explain the difference between `res.json(data)` and `res.send(data)` when `data` is an object.**
    When `data` is an object, both methods will send a JSON response. However, `res.json()` is more explicit and also ensures that the response will be formatted as JSON even if the object is `null` or `undefined`. `res.send()` is more versatile and can handle other data types as well. It's generally better to use `res.json()` when you know you are sending JSON.

97. **How do you set the HTTP status code of a response to 201 (Created) in Express?**
    You can use the `res.status()` method before sending the response.
    ```javascript
    res.status(201).json({ message: 'Resource created successfully' });
    ```

98. **What is the role of the `cluster.isMaster` (or `cluster.isPrimary`) property?**
    This property is a boolean that is `true` if the current process is the master process and `false` if it's a worker process. It's used to differentiate between the master and worker code in a clustered application. The master process is responsible for forking worker processes.

99. **`console.log(path.join('/a', 'b', 'c/d', '..'));` What is the output?**
    The output will be `/a/b/c`. `path.join` joins the path segments and then normalizes the result. The `..` goes up one level from `c/d`, resulting in `c`.

100. **Write a function that uses the `fs` module to check if a file exists asynchronously without using the deprecated `fs.exists()`.**
    You can use `fs.access()` to check for the existence of a file.
    ```javascript
    const fs = require('fs');

    function fileExists(filePath, callback) {
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          callback(false);
        } else {
          callback(true);
        }
      });
    }

    // Usage
    fileExists('my-file.txt', (exists) => {
      console.log(exists); // true or false
    });
    ```

---

### Deep Dive: Node.js Core & Express Internals

101. **What is the difference between `fs.promises.readFile()` and `fs.readFile()`?**
    *   `fs.readFile(path, callback)`: The traditional way of reading a file asynchronously in Node.js. It takes a callback function that is executed when the file has been read.
    *   `fs.promises.readFile(path)`: A more modern version that returns a Promise. This allows you to use `async/await` for cleaner asynchronous code, avoiding "callback hell".

102. **Explain the `util.promisify()` function and why it was widely used before `fs.promises`.**
    `util.promisify()` is a utility function that takes a function following the common Node.js callback-last error-first style (i.e., `(err, value) => ...`) and returns a version that returns promises. Before the `fs.promises` API was stabilized, `util.promisify()` was widely used to convert callback-based `fs` methods into promise-based functions so they could be used with `async/await`.

103. **What is the `buffer.alloc()` vs `buffer.allocUnsafe()`? Why is the latter "unsafe"?**
    *   `Buffer.alloc(size)`: Allocates a new Buffer of `size` bytes and initializes it with zeros. This is the "safe" method because it prevents the buffer from containing old, sensitive data from previous memory allocations.
    *   `Buffer.allocUnsafe(size)`: Allocates a new Buffer of `size` bytes but does **not** initialize it. The allocated memory segment is uninitialized and may contain old data. This is "unsafe" because it could potentially leak sensitive information if the buffer is not completely overwritten with new data. However, it is faster than `Buffer.alloc()` because it doesn't spend time zero-filling the memory.

104. **How do you convert a Buffer to a Base64 string?**
    You can use the `toString()` method on a Buffer instance and pass `'base64'` as the encoding.
    ```javascript
    const buffer = Buffer.from('Hello World');
    const base64String = buffer.toString('base64'); // SGVsbG8gV29ybGQ=
    ```

105. **Explain the `crypto` module. How do you generate a random string or a hash?**
    The `crypto` module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.
    *   **Random String:** You can use `crypto.randomBytes()` to generate cryptographically strong random data and then convert it to a string.
        ```javascript
        const randomString = crypto.randomBytes(16).toString('hex');
        ```
    *   **Hash:** You can use `crypto.createHash()` to create a hash of a given data.
        ```javascript
        const hash = crypto.createHash('sha256').update('my-password').digest('hex');
        ```

106. **What is the `zlib` module used for? How do you compress a file using streams?**
    The `zlib` module provides compression functionality implemented using Gzip and Deflate/Inflate. You can use it with streams to compress or decompress data.
    ```javascript
    const fs = require('fs');
    const zlib = require('zlib');

    const gzip = zlib.createGzip();
    const readable = fs.createReadStream('large-file.txt');
    const compressed = fs.createWriteStream('large-file.txt.gz');

    readable.pipe(gzip).pipe(compressed);
    ```

107. **Explain the `url` module. What is the difference between the legacy API and the WHATWG URL API?**
    The `url` module provides utilities for URL resolution and parsing.
    *   **Legacy API:** The original Node.js URL API (e.g., `url.parse()`). It's less consistent with browser APIs.
    *   **WHATWG URL API:** A more modern API that follows the WHATWG URL standard, which is the same standard implemented in modern browsers. It provides the `URL` and `URLSearchParams` classes. This API is generally preferred for new applications.

108. **What is the `querystring` module and how is it different from `URLSearchParams`?**
    *   `querystring`: The legacy module for parsing and formatting URL query strings.
    *   `URLSearchParams`: The modern, WHATWG standard way to work with query strings. It provides a more convenient and standard API. `URLSearchParams` is part of the `url` module and is also available globally in recent Node.js versions.

109. **How does Node.js handle circular dependencies between modules?**
    Node.js can handle circular dependencies, but it can lead to unexpected behavior. When module `A` requires module `B`, and module `B` requires module `A`, one of them will receive an incomplete version of the other's `module.exports` object. The first module to be fully loaded will be complete, but the other will have a partial view of the first. It's a situation that should generally be avoided by refactoring the code.

110. **What is the `vm` (Virtual Machine) module in Node.js?**
    The `vm` module provides APIs for compiling and running code within a V8 Virtual Machine context. This allows you to run code in a sandboxed environment, isolated from the main application's scope. It can be used for running untrusted code, but it's not a full security mechanism and should be used with care.

111. **Explain the `perf_hooks` module for performance measurement.**
    The `perf_hooks` module provides an implementation of a subset of the W3C Web Performance APIs. It allows you to measure the performance of your code with high-resolution time. You can mark start and end points in your code and then measure the duration between them.

112. **What are "Internal Slots" in Node.js modules?**
    This is a more advanced concept related to the internal implementation of JavaScript engines. Internal slots are properties of objects that are used by the JavaScript specification to store internal state. They are not directly accessible from JavaScript code. For example, an object's prototype is stored in an internal slot.

113. **How do you use the `v8` core module to get heap statistics?**
    The `v8` module exposes APIs that are specific to the version of V8 built with Node.js. You can use `v8.getHeapStatistics()` to get detailed information about the V8 heap, such as the total heap size, used heap size, and heap size limit. This can be useful for monitoring the memory usage of your application.

114. **What is the `async_hooks` module and what is its primary use case?**
    The `async_hooks` module provides an API to track the lifecycle of asynchronous resources in a Node.js application. Its primary use case is to build tools for monitoring and tracing asynchronous operations. For example, you could use it to implement a system for tracking a request through multiple asynchronous calls.

115. **Explain the `domain` module (deprecated) and what replaced it.**
    The `domain` module was used to intercept unhandled errors. It provided a way to handle multiple different I/O operations as a single group. It has been deprecated because it's a flawed error handling mechanism. The recommended approach now is to use `try...catch` blocks with `async/await` and to ensure that promises have a `.catch()` handler. For unhandled rejections and uncaught exceptions, you can use the `process.on()` handlers, but it's generally recommended to let the process crash and restart.

116. **What is the difference between `Resumable` and `Non-resumable` streams?**
    This is not a standard classification of streams in Node.js. Streams are generally classified as Readable, Writable, Duplex, and Transform.

117. **How do you implement a custom `Readable` stream?**
    You can implement a custom `Readable` stream by extending the `stream.Readable` class and implementing the `_read()` method.
    ```javascript
    const { Readable } = require('stream');

    class MyReadable extends Readable {
      constructor(options) {
        super(options);
        this.data = ['a', 'b', 'c'];
      }

      _read(size) {
        const chunk = this.data.shift();
        if (chunk) {
          this.push(chunk);
        } else {
          this.push(null); // No more data
        }
      }
    }
    ```

118. **What is the `highWaterMark` option in streams?**
    The `highWaterMark` is an option for streams that determines the maximum number of bytes (for binary streams) or objects (for object mode streams) that can be stored in the internal buffer before the stream stops reading from the underlying resource. It's a key part of how streams handle backpressure.

119. **Explain "Object Mode" in Node.js streams.**
    By default, streams operate on binary data (Buffers and strings). "Object Mode" is a mode for streams that allows them to work with JavaScript objects instead of binary data. You can enable it by setting `objectMode: true` in the stream's options.

120. **How do you use `pipeline()` from the `stream` module instead of `.pipe()`? Why is it better?**
    `stream.pipeline()` is a module method to pipe between streams forwarding errors and properly cleaning up and providing a callback when the pipeline is complete.
    ```javascript
    const { pipeline } = require('stream');
    pipeline(
      fs.createReadStream('archive.tar'),
      zlib.createGzip(),
      fs.createWriteStream('archive.tar.gz'),
      (err) => {
        if (err) {
          console.error('Pipeline failed.', err);
        } else {
          console.log('Pipeline succeeded.');
        }
      }
    );
    ```
    It's better than `.pipe()` for a few reasons:
    *   **Error Handling:** It forwards errors from all the streams in the pipeline to a single callback. With `.pipe()`, you have to handle errors for each stream separately.
    *   **Cleanup:** It automatically destroys all the streams in the pipeline when one of them errors, preventing memory leaks.

121. **In Express, what is `res.locals` and why is it useful for template engines?**
    `res.locals` is an object that provides a way to pass data through the request-response cycle. The properties of `res.locals` are local to the current request and are available in the templates rendered during that request. This is useful for passing request-level information, such as user data or settings, to your views without having to pass it to every `res.render()` call.

122. **What is `app.locals` and how is it different from `res.locals`?**
    `app.locals` is an object that contains properties that are local to the entire application. They are available in all templates rendered by the application. This is useful for providing helper functions or global data to your views. The main difference is scope: `app.locals` is application-wide, while `res.locals` is request-specific.

123. **Explain `req.xhr`. What does it detect?**
    `req.xhr` is a boolean property that is `true` if the request was made by a client-side library that sets the `X-Requested-With` header to `XMLHttpRequest`. This is a common way to detect AJAX requests from the server-side.

124. **What is `req.fresh` vs `req.stale`?**
    These properties are used for cache validation. They check the `Last-Modified` and `ETag` headers of the request against the `Last-Modified` and `ETag` headers of the response.
    *   `req.fresh`: `true` if the client's cache is fresh.
    *   `req.stale`: `true` if the client's cache is stale.

125. **How do you change the default "views" directory in Express?**
    You can use `app.set('views', path)` to change the default directory where Express looks for view templates.
    ```javascript
    app.set('views', path.join(__dirname, 'templates'));
    ```

126. **Explain `app.set('trust proxy', true)`. When do you need this?**
    When your Express application is running behind a reverse proxy (like Nginx or a load balancer), some of the request information (like the client's IP address) might be hidden by the proxy. By setting `app.set('trust proxy', true)`, you are telling Express to trust the `X-Forwarded-*` headers that the proxy sets. This allows you to get the correct IP address of the client from `req.ip`.

127. **How do you enable "Strict Routing" and "Case Sensitive Routing" in Express?**
    You can enable these settings using `app.enable()`.
    *   `app.enable('strict routing')`: When enabled, the router treats `/foo` and `/foo/` as different routes.
    *   `app.enable('case sensitive routing')`: When enabled, the router treats `/Foo` and `/foo` as different routes.

128. **What is the purpose of `res.vary()`?**
    `res.vary(field)` is used to add a field to the `Vary` response header. The `Vary` header tells caching servers that the response for a given URL can vary based on the value of a request header. For example, `res.vary('User-Agent')` would tell caches to store different versions of the page for different user agents.

129. **How do you use `res.format()` to send different responses based on the `Accept` header (JSON, HTML, Text)?**
    `res.format()` is a convenient method for sending different responses based on the client's `Accept` header. You provide an object with functions for each content type you want to support.
    ```javascript
    res.format({
      'text/plain': function(){
        res.send('hey');
      },

      'text/html': function(){
        res.send('<p>hey</p>');
      },

      'application/json': function(){
        res.send({ message: 'hey' });
      }
    });
    ```

130. **What is a "Sub-app" in Express? How do you mount one Express app inside another?**
    A "sub-app" is an instance of an Express application that can be used as middleware in another Express application. This is a way to create modular applications where different parts of the application are handled by separate, self-contained Express apps. You can mount a sub-app using `app.use()`.
    ```javascript
    const subApp = express();
    // ... configure subApp
    app.use('/api', subApp);
    ```

131. **How do you override the default Error Handler in Express?**
    You override the default error handler by creating your own custom error-handling middleware. This middleware must be the last middleware in your stack and must have the four-argument signature `(err, req, res, next)`.

132. **What is the difference between `res.location()` and `res.redirect()`?**
    *   `res.location(path)`: Sets the `Location` response header to the specified path. It does not actually redirect the client.
    *   `res.redirect(path)`: Sets the `Location` header and also sends a 302 (or other specified) status code, which causes the browser to redirect to the new URL.

133. **How do you use the `method-override` middleware and why?**
    HTML forms only support GET and POST methods. The `method-override` middleware allows you to use other HTTP verbs like PUT and DELETE. You can use a query parameter or a hidden form field to specify the desired method.
    ```javascript
    const methodOverride = require('method-override');
    app.use(methodOverride('_method')); // e.g., /users/1?_method=DELETE
    ```

134. **Explain the "Revealing Module Pattern" in the context of Node.js.**
    The Revealing Module Pattern is a way of structuring modules where you keep all your functions and variables private by default and then explicitly expose (reveal) only the ones you want to make public through an object returned from the module. This is the fundamental pattern of Node.js's CommonJS module system with `module.exports`.

135. **How do you secure Express cookies? (secure, httpOnly, sameSite flags).**
    You can secure cookies by setting options when you create them with `res.cookie()`.
    *   `secure: true`: The browser will only send the cookie over HTTPS.
    *   `httpOnly: true`: The cookie cannot be accessed by client-side JavaScript, which helps prevent XSS attacks.
    *   `sameSite: 'strict'` or `'lax'`: Helps prevent CSRF attacks by controlling when the browser sends the cookie.

136. **What is a "Signing" a cookie? How does it differ from encrypting?**
    *   **Signing:** A signed cookie has a signature attached to it. The server can use the signature to verify that the cookie has not been tampered with on the client-side. It does not hide the cookie's data.
    *   **Encrypting:** An encrypted cookie has its data scrambled. The server can decrypt it, but no one else can read it.
    The `cookie-parser` middleware can be used to sign and verify cookies.

137. **Explain `req.signedCookies`.**
    If you are using `cookie-parser` with a secret, `req.signedCookies` is an object that contains any signed cookies from the request. The middleware has verified the signature of these cookies. If the signature is invalid, the cookie will not be in this object.

138. **How do you implement a "Heartbeat" or "Health Check" endpoint?**
    A health check endpoint is a simple route that can be used by monitoring services to check if the application is running. It should be a lightweight route that doesn't perform any heavy operations.
    ```javascript
    app.get('/health', (req, res) => {
      res.status(200).send('OK');
    });
    ```

139. **What is the "Etag" header and how does Express handle it by default?**
    The `ETag` (entity tag) is an HTTP response header used for cache validation. It's a unique identifier for a specific version of a resource. By default, Express automatically generates `ETag` headers for static file responses. When a client makes a subsequent request for the same resource, it can send the `ETag` in the `If-None-Match` request header. If the `ETag` matches, the server can respond with a `304 Not Modified` status, saving bandwidth.

140. **How do you disable the `X-Powered-By` header in Express for security?**
    The `X-Powered-By` header reveals that your application is powered by Express, which can be a security risk. You can disable it using `app.disable()`.
    ```javascript
    app.disable('x-powered-by');
    ```
    The `helmet` middleware also disables this header by default.

141. **What is the difference between `app.param()` and standard middleware?**
    `app.param([name], callback)` is a special kind of middleware that is triggered only when a specific route parameter is present in a route. It allows you to run pre-conditions on the parameter before the main route handler is called. For example, you could use it to validate or load a user from the database based on an `:id` parameter.

142. **How do you handle "Long Polling" in Node.js?**
    Long polling is a technique where the client sends a request to the server, and the server holds the connection open until it has new data to send. Once the data is sent, the client immediately sends another request. In Node.js, you can implement this by simply not responding to a request until you have data. You can use an `EventEmitter` to signal when new data is available.

143. **Explain the "Request ID" pattern for logging and tracing.**
    The Request ID pattern involves generating a unique ID for every incoming request and then passing that ID through all the layers of your application (e.g., services, database calls). This ID is included in all log messages, which allows you to trace the entire lifecycle of a single request through your distributed system. This is invaluable for debugging in a microservices architecture.

144. **What is "Dependency Injection" and how can you implement it in an Express app?**
    Dependency Injection (DI) is a design pattern where the dependencies of a component are "injected" from an external source, rather than being created by the component itself. This leads to more modular and testable code. In an Express app, you can implement DI by:
    *   **Constructor Injection:** Passing dependencies to a class's constructor.
    *   **Function Injection:** Passing dependencies as arguments to a function.
    *   **Using a DI Container:** Using a library like `awilix` or `inversify` to manage dependencies.

145. **How do you test Express routes using `Supertest` and `Jest`?**
    `Jest` is a popular testing framework, and `Supertest` is a library for testing HTTP servers. You can use them together to write integration tests for your Express routes.
    ```javascript
    const request = require('supertest');
    const app = require('../app'); // Your Express app

    describe('GET /users', () => {
      it('should respond with a 200 status code', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
      });
    });
    ```

146. **Explain the concept of "Idempotency" in REST APIs.**
    An operation is idempotent if it can be performed multiple times without changing the result beyond the initial application. In REST APIs:
    *   `GET`, `PUT`, `DELETE` should be idempotent.
    *   `POST` is not idempotent (calling it multiple times will create multiple resources).
    This is an important principle for building reliable and predictable APIs.

147. **What is "HATEOAS" in the context of REST?**
    HATEOAS (Hypermedia as the Engine of Application State) is a constraint of the REST application architecture. It means that a client interacts with a network application entirely through hypermedia provided dynamically by application servers. In a HATEOAS-compliant API, the responses from the server should contain links to other actions that can be performed on the resource, making the API more self-discoverable.

148. **Explain the "Circuit Breaker" pattern in Node.js microservices.**
    The Circuit Breaker pattern is a design pattern used to detect failures and prevent a failing service from being constantly bombarded with requests. It works like an electrical circuit breaker. If a service fails a certain number of times, the circuit "opens," and for a period of time, all further calls to that service will fail immediately, without even trying to connect. After a timeout, the circuit goes into a "half-open" state and tries one more call. If that succeeds, the circuit closes. If it fails, the circuit opens again.

149. **What is "Service Discovery" and why is it needed?**
    In a microservices architecture, services need to be able to find and communicate with each other. Service Discovery is the process of how services locate each other on a network. Instead of hardcoding the IP addresses and ports of services, a service registry is used. Services register themselves with the registry when they start up, and other services can query the registry to find them.

150. **How do you optimize a Node.js application for a Docker container?**
    *   **Use a small base image:** Start with a minimal base image like `node:alpine`.
    *   **Use `.dockerignore`:** Exclude `node_modules`, logs, and other unnecessary files from the Docker build context.
    *   **Multi-stage builds:** Use a multi-stage build to separate the build environment from the production environment.
    *   **Run as a non-root user:** For security, create a non-root user to run the application.
    *   **Handle signals:** Ensure your application handles `SIGINT` and `SIGTERM` for graceful shutdown.
    *   **Cache dependencies:** Copy `package.json` and `package-lock.json` and run `npm install` before copying the rest of your code to take advantage of Docker's layer caching.

---

### Modern Node.js (v18+) & Advanced Architecture

151. **What is the built-in `fetch()` API introduced in Node.js 18? How does it differ from the browser's `fetch`?**
    Node.js 18 introduced a built-in `fetch()` API, which is based on the same `fetch` that is available in modern browsers. This allows you to make HTTP requests without needing to install a third-party library like `node-fetch` or `axios`. The Node.js version is very similar to the browser version, but there are some differences, such as the handling of headers and the fact that the Node.js version has access to the file system.

152. **Explain the Node.js Permission Model (`--allow-fs-read`, `--allow-net`, etc.) introduced in recent versions.**
    The Permission Model is an experimental feature in recent Node.js versions that allows you to restrict access to certain resources during execution. For example, you can use flags like `--allow-fs-read` to only allow reading from the file system, or `--allow-net` to only allow network requests. This is a security feature that can help to limit the impact of a potential vulnerability.

153. **What is the built-in Test Runner in Node.js (`node --test`)? How do you use it without external libraries like Jest?**
    Recent versions of Node.js include a built-in test runner. You can write your tests in a file and then run them from the command line using `node --test`. The test runner provides basic assertion functions and a simple way to structure your tests.
    ```javascript
    // my-test.js
    const assert = require('assert');
    const test = require('node:test');

    test('synchronous passing test', (t) => {
      assert.strictEqual(1, 1);
    });
    ```

154. **Explain the `util.parseArgs()` function for parsing command-line arguments.**
    `util.parseArgs()` is a built-in function for parsing command-line arguments. It provides a more structured way to handle arguments compared to manually parsing `process.argv`. You can define the expected arguments and their types, and the function will return a parsed object.

155. **What is `import.meta.url` in ES Modules and what is its equivalent in CommonJS?**
    *   `import.meta.url`: In an ES Module, `import.meta.url` is a string containing the file URL of the current module.
    *   Equivalent in CommonJS: The equivalent in a CommonJS module is `__filename`, which is a string containing the absolute file path of the current module.

156. **How do you use the built-in `.env` file support (`node --env-file=.env`) introduced in Node.js 20?**
    Node.js 20 introduced built-in support for `.env` files. You can use the `--env-file` flag to specify an environment file to load when you start your application. This loads the variables from the `.env` file into `process.env`.
    ```bash
    node --env-file=.env my-app.js
    ```

157. **Explain the "Single Executable Applications" (SEA) feature in Node.js.**
    Single Executable Applications is an experimental feature that allows you to bundle your Node.js application and the Node.js runtime into a single executable file. This makes it easier to distribute and run your application on systems that don't have Node.js installed.

158. **What is the `navigator` object in Node.js and why was it added?**
    The `navigator` object was added to Node.js for compatibility with browser APIs. It provides information about the environment in which the application is running. For example, `navigator.hardwareConcurrency` returns the number of CPU cores.

159. **How do you use `Aborting` in asynchronous operations using `AbortController`?**
    `AbortController` is a standard API for aborting asynchronous operations. You can create an `AbortController` and pass its `signal` to an asynchronous function (like `fetch`). If you later call `controller.abort()`, the asynchronous operation will be aborted. This is useful for canceling long-running requests.

160. **What are `AsyncLocalStorage` and `AsyncResource` from the `async_hooks` module? Use case?**
    *   `AsyncLocalStorage`: A class that allows you to create an asynchronous state that is shared across a sequence of asynchronous operations. This is useful for things like request context propagation in web applications, where you want to have access to request-specific data without having to pass it through every function call.
    *   `AsyncResource`: A class that helps with tracking the lifecycle of asynchronous resources. It's a lower-level API that `AsyncLocalStorage` is built on top of.

161. **Explain the "Clean Architecture" pattern in an Express application.**
    Clean Architecture is a software design philosophy that separates the concerns of a software system into distinct layers. In an Express application, this typically means:
    *   **Entities:** Core business objects.
    *   **Use Cases:** Application-specific business rules.
    *   **Interface Adapters:** (e.g., Controllers, Presenters, Gateways) Convert data from the format most convenient for the use cases and entities, to the format most convenient for some external agency such as the Database or the Web.
    *   **Frameworks & Drivers:** (e.g., Express, Databases) The outermost layer, which contains the frameworks and tools.
    The key rule is that dependencies can only point inwards. This makes the application more modular, testable, and independent of frameworks and external services.

162. **What is "Vertical Slice Architecture" vs "Layered Architecture"?**
    *   **Layered Architecture:** Organizes code by technical concern (e.g., UI, business logic, data access). This can lead to high coupling between layers.
    *   **Vertical Slice Architecture:** Organizes code by feature or use case. Each "slice" contains all the logic for a particular feature, from the UI to the database. This promotes high cohesion within a slice and low coupling between slices. It can be a more maintainable approach for complex applications.

163. **How do you implement "Global Dependency Injection" using a container or simple JS patterns?**
    You can use a Dependency Injection (DI) container library like `awilix` or `inversify`. These libraries provide a central "container" where you can register your services and their dependencies. The container is then responsible for creating instances of your services and injecting their dependencies.
    A simpler approach without a library is to create a container object yourself, where you manually instantiate and wire up your dependencies.

164. **What is "Command Query Responsibility Segregation" (CQRS) and is it relevant for Node apps?**
    CQRS is an architectural pattern that separates the models for reading data (queries) and writing data (commands). This means you might have a different data model and even a different database for reading and writing. CQRS can be relevant for complex Node.js applications where the read and write patterns are very different, as it can help to optimize both.

165. **Explain the "Backends for Frontends" (BFF) pattern.**
    The BFF pattern is an architectural pattern where you create a separate backend service for each frontend application (e.g., one for a web app, one for a mobile app). Each BFF is responsible for providing an API that is tailored to the specific needs of its frontend. This can simplify the frontend code and improve performance by avoiding over-fetching of data.

---

### Performance, Debugging & Monitoring

166. **How do you use the `--inspect` flag to debug a Node.js process using Chrome DevTools?**
    You can start your Node.js application with the `--inspect` flag: `node --inspect my-app.js`. This will start the debugger and print a WebSocket URL to the console. You can then open Chrome, go to `chrome://inspect`, and you will see your Node.js application listed. Clicking "inspect" will open the Chrome DevTools, where you can set breakpoints, step through code, and inspect variables.

167. **What are "Flame Graphs" and how do they help in finding performance bottlenecks?**
    A flame graph is a visualization of CPU usage over time. The y-axis shows the stack depth, and the x-axis shows the population of samples. The width of each function bar on the graph is proportional to the amount of time it was on the CPU. By looking for wide bars, you can quickly identify functions that are consuming a lot of CPU time and are therefore potential performance bottlenecks.

168. **Explain the difference between "Heap" and "Stack" memory in Node.js.**
    *   **Stack:** A region of memory where local variables and function call information are stored. It's a LIFO (Last-In, First-Out) data structure. Memory allocation and deallocation on the stack are very fast.
    *   **Heap:** A region of memory where objects and other complex data structures are stored. Memory allocation on the heap is more complex and slower than on the stack. The V8 garbage collector is responsible for cleaning up unused memory on the heap.

169. **How do you detect a memory leak using "Heap Snapshots"?**
    You can use the Chrome DevTools to take heap snapshots of your running Node.js application. The process is:
    1.  Take a heap snapshot at a baseline point in your application.
    2.  Perform some actions in your application that you suspect are causing a memory leak.
    3.  Take another heap snapshot.
    4.  Compare the two snapshots. The DevTools can show you which objects have been allocated between the two snapshots and are still present in the second one. A growing number of objects over time that are not being garbage collected is a sign of a memory leak.

170. **What is "Garbage Collection" (GC) trashing and how can it slow down your app?**
    Garbage collection is the process of reclaiming memory that is no longer being used by the application. "GC trashing" occurs when the garbage collector is running too frequently. This can happen if your application is allocating and deallocating memory at a very high rate. Each time the GC runs, it can pause the execution of your application, so if it's running too often, it can significantly slow down your application.

171. **How do you use `process.on('warning', ...)` to catch performance warnings?**
    You can listen for the `warning` event on the `process` object to catch warnings from Node.js. This can include performance-related warnings, such as memory leaks from too many event listeners being added to an `EventEmitter`.
    ```javascript
    process.on('warning', (warning) => {
      console.warn(warning.name);    // 'MaxListenersExceededWarning'
      console.warn(warning.message); // 'Possible EventEmitter memory leak detected...'
      console.warn(warning.stack);   // Stack trace
    });
    ```

172. **What are "Orphaned Promises" and how do they affect Node.js performance?**
    An orphaned promise is a promise that is never settled (neither resolved nor rejected). This can happen if there is a code path in an async function that doesn't lead to a `return` or a `throw`. Orphaned promises can cause memory leaks because the resources associated with the promise and its closure are never released.

173. **Explain the "Event Loop Lag". How do you measure it?**
    Event loop lag is the delay between when a task is scheduled to run in the event loop and when it actually runs. A high event loop lag indicates that the event loop is being blocked by long-running synchronous operations. You can measure it by using `setTimeout` to schedule a function to run after a short delay and then measuring the actual time it took to execute.
    ```javascript
    const start = process.hrtime();
    setTimeout(() => {
      const end = process.hrtime(start);
      console.log(`Event loop lag: ${end[0] * 1e9 + end[1]}ns`);
    }, 10);
    ```

174. **How do you optimize "Heavy Computation" in Node.js without blocking the event loop?**
    The best way to handle heavy computation is to move it off the main event loop. You can do this using:
    *   **Worker Threads:** The `worker_threads` module allows you to run CPU-intensive JavaScript code in a separate thread.
    *   **Child Processes:** You can use the `child_process` module to spawn a separate process to perform the computation.
    *   **Breaking up tasks:** For some tasks, you can break them up into smaller chunks and use `setImmediate` or `setTimeout` to process them asynchronously.

175. **What is the difference between `setImmediate` and `nextTick` in terms of the event loop starvation risk?**
    *   `process.nextTick()`: Callbacks passed to `nextTick` are executed immediately after the current operation, before the event loop continues. If you recursively call `nextTick`, you can block the event loop and cause "event loop starvation" because I/O and timer events will never get a chance to run.
    *   `setImmediate()`: Callbacks passed to `setImmediate` are executed in the "check" phase of the event loop. They will always allow I/O to be processed before they run, so they do not pose the same risk of event loop starvation.

---

### Security Hardening (OWASP for Node)

176. **What is "ReDoS" (Regular Expression Denial of Service) and how do you prevent it?**
    ReDoS is an attack where a specially crafted regular expression can take a very long time to evaluate, causing the server to become unresponsive. You can prevent it by:
    *   Avoiding complex regular expressions.
    *   Using libraries like `safe-regex` to detect vulnerable regular expressions.
    *   Setting a timeout for regex execution.

177. **Explain "Prototype Pollution" and how it can lead to Remote Code Execution (RCE).**
    Prototype Pollution is a vulnerability where an attacker can modify the `__proto__` property of an object, which can then affect all other objects that inherit from the same prototype. This can lead to RCE if an attacker can modify the prototype of a core object and then trigger a gadget that executes code. You can prevent it by validating and sanitizing user input, and by using `Object.create(null)` to create objects with no prototype.

178. **How do you prevent "Directory Traversal" attacks when serving files?**
    A directory traversal attack is where an attacker uses `../` to access files outside of the intended directory. To prevent this, you should:
    *   Sanitize user input to remove any `../` sequences.
    *   Use `path.resolve()` to resolve the file path and then check if the resolved path is within the intended directory.

179. **Explain "Broken Access Control" in an Express app and how to fix it.**
    Broken Access Control is a vulnerability where a user can access resources or perform actions that they are not authorized to. To fix this in an Express app, you should:
    *   Implement authentication to verify the user's identity.
    *   Implement authorization middleware to check if the authenticated user has the necessary permissions for the requested resource or action.
    *   Never trust user input to determine authorization.

180. **What is "Insecure Deserialization" in Node.js?**
    Insecure Deserialization is a vulnerability where an attacker can manipulate serialized data (like JSON or BSON) to cause the application to execute malicious code when the data is deserialized. To prevent this, you should:
    *   Avoid deserializing data from untrusted sources.
    *   Use safe deserialization libraries that do not execute code.
    *   Validate the data after deserialization.

181. **How does the `cors` package handle the `Origin` header?**
    The `cors` middleware checks the `Origin` header of the incoming request. If the origin is in the list of allowed origins, it will set the `Access-Control-Allow-Origin` header in the response to that origin. If the origin is not allowed, it will not set the header, and the browser will block the request.

182. **Explain the difference between "Blacklisting" and "Whitelisting" in security.**
    *   **Blacklisting:** A blacklist is a list of things that are not allowed. Everything else is allowed. This is generally less secure because it's hard to anticipate all possible malicious inputs.
    *   **Whitelisting:** A whitelist is a list of things that are allowed. Everything else is denied. This is generally more secure because it's a "default deny" approach.

183. **What is "CSRF" (Cross-Site Request Forgery) and how does the `csurf` library (or similar) prevent it?**
    CSRF is an attack where an attacker tricks a user into performing an unwanted action on a web application in which they're currently authenticated. The `csurf` library prevents this by creating a unique, secret token for each user session. This token is included in a hidden field in forms. When the user submits the form, the server checks if the token matches the one stored in the session. If it doesn't, the request is rejected.

184. **How do you secure a Node.js API against "Brute Force" attacks?**
    You can secure an API against brute force attacks by implementing rate limiting. This can be done using middleware like `express-rate-limit`, which limits the number of requests a user can make in a given amount of time. You can also implement account lockouts after a certain number of failed login attempts.

185. **Explain "Mass Assignment" vulnerability and how it relates to `req.body` in MongoDB/SQL.**
    A mass assignment vulnerability occurs when a program automatically binds incoming data from a request to variables or objects. In an Express app, this can happen if you take `req.body` and directly save it to a database model without filtering the properties. An attacker could add extra fields to the request body (like `isAdmin: true`) and have them saved to the database. To prevent this, you should always be explicit about which properties you are saving to the database.

---

### Scaling & DevOps

186. **What is "Stateful" vs "Stateless" architecture? Why is stateless preferred for scaling?**
    *   **Stateful:** A stateful application stores data about each client session on the server. This makes it difficult to scale horizontally, because if you have multiple servers, you need to make sure that a client's requests are always routed to the same server where their session data is stored.
    *   **Stateless:** A stateless application does not store any session data on the server. All the information needed to process a request is contained in the request itself (e.g., in a JWT). This is preferred for scaling because any server can handle any request, which makes it easy to add more servers to a load balancer.

187. **Explain "Sticky Sessions" and when they are necessary.**
    Sticky sessions (or session affinity) is a feature of load balancers that routes all requests from a single client to the same server. This is necessary for stateful applications that store session data on the server.

188. **How do you handle "Database Migrations" in a production Node.js environment?**
    Database migrations are a way to manage changes to your database schema over time in a structured and version-controlled way. You can use a library like `knex.js` or `db-migrate` to write migration scripts. These scripts can be run as part of your deployment process to update the database schema.

189. **What is "Blue-Green Deployment" and "Canary Release"?**
    *   **Blue-Green Deployment:** A deployment strategy where you have two identical production environments, "blue" and "green". At any given time, one of them is live. To deploy a new version, you deploy it to the inactive environment, test it, and then switch the router to point to the new environment. This allows for zero-downtime deployments and easy rollbacks.
    *   **Canary Release:** A deployment strategy where you release a new version of your application to a small subset of users first. If the new version is stable, you gradually roll it out to the rest of your users. This allows you to test new features in production with minimal risk.

190. **How do you implement "Automated API Documentation" using Swagger (OpenAPI)?**
    You can use a library like `swagger-jsdoc` and `swagger-ui-express` to generate interactive API documentation from comments in your code. You write JSDoc comments in your route files to describe your API endpoints, and then the library uses these comments to generate a Swagger/OpenAPI specification.

191. **Explain the role of an "API Gateway" (like Kong or Nginx) in front of Node.js services.**
    An API Gateway is a server that acts as a single entry point for all of your backend services. It can handle tasks like:
    *   **Routing:** Routing requests to the appropriate microservice.
    *   **Authentication and Authorization:** Authenticating clients and ensuring they have permission to access the requested service.
    *   **Rate Limiting:** Protecting your services from being overwhelmed with requests.
    *   **Caching:** Caching responses to improve performance.

192. **What are "Sidecar Containers" and "Service Meshes" (Istio/Linkerd)?**
    *   **Sidecar Container:** A container that runs alongside your main application container in the same pod (in Kubernetes). It can provide additional functionality to your application, such as logging, monitoring, or service discovery.
    *   **Service Mesh:** A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable. It provides features like service discovery, load balancing, encryption, and observability. Istio and Linkerd are popular service mesh implementations.

193. **How do you perform "Stress Testing" on a Node.js server (e.g., using `Autocannon` or `Artillery`)?**
    Stress testing is the process of putting a high load on your server to see how it performs. You can use tools like `autocannon` or `artillery` to send a large number of concurrent requests to your API and measure the response times and error rates. This helps you to identify performance bottlenecks and determine the capacity of your server.

194. **Explain "Log aggregation" (ELK Stack - Elasticsearch, Logstash, Kibana).**
    Log aggregation is the process of collecting logs from multiple services and storing them in a central location. The ELK Stack is a popular open-source solution for log aggregation:
    *   **Elasticsearch:** A search and analytics engine.
    *   **Logstash:** A data processing pipeline that ingests data from multiple sources, transforms it, and then sends it to a "stash" like Elasticsearch.
    *   **Kibana:** A visualization tool that lets you explore and visualize the data in Elasticsearch.

195. **What is "Distributed Tracing" (Jaeger/Zipkin) and why is it important for Node microservices?**
    Distributed tracing is a method for tracing the path of a request as it travels through a distributed system of microservices. It allows you to see how long a request spends in each service and to identify bottlenecks. This is very important for debugging and understanding the performance of a microservices architecture. Jaeger and Zipkin are popular open-source distributed tracing systems.

---

### Final Coding Challenges & Scenarios

196. **Write an Express middleware that measures the response time of every request and sends it as a `X-Response-Time` header.**
    ```javascript
    function responseTime(req, res, next) {
      const start = Date.now();
      res.on('finish', () => {
        const duration = Date.now() - start;
        res.setHeader('X-Response-Time', `${duration}ms`);
      });
      next();
    }

    app.use(responseTime);
    ```

197. **Use the `cluster` module to spawn workers equal to the number of CPU cores.**
    ```javascript
    const cluster = require('cluster');
    const http = require('http');
    const numCPUs = require('os').cpus().length;

    if (cluster.isMaster) {
      console.log(`Master ${process.pid} is running`);

      // Fork workers.
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }

      cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
      });
    } else {
      // Workers can share any TCP connection
      // In this case it is an HTTP server
      http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
      }).listen(8000);

      console.log(`Worker ${process.pid} started`);
    }
    ```

198. **Write a function that reads a 5GB file line-by-line using `readline` and `streams` without crashing.**
    ```javascript
    const fs = require('fs');
    const readline = require('readline');

    function processLargeFile(filePath) {
      const stream = fs.createReadStream(filePath);
      const rl = readline.createInterface({
        input: stream,
        crlfDelay: Infinity
      });

      rl.on('line', (line) => {
        // Process the line
        console.log(line);
      });

      rl.on('close', () => {
        console.log('Finished reading the file.');
      });
    }
    ```

199. **Create a simple "Broadcaster" using `EventEmitter` where one module sends data and multiple subscribers log it.**
    ```javascript
    // broadcaster.js
    const EventEmitter = require('events');
    const broadcaster = new EventEmitter();
    module.exports = broadcaster;

    // subscriber1.js
    const broadcaster = require('./broadcaster');
    broadcaster.on('message', (data) => {
      console.log('Subscriber 1 received:', data);
    });

    // subscriber2.js
    const broadcaster = require('./broadcaster');
    broadcaster.on('message', (data) => {
      console.log('Subscriber 2 received:', data);
    });

    // main.js
    require('./subscriber1');
    require('./subscriber2');
    const broadcaster = require('./broadcaster');

    broadcaster.emit('message', { hello: 'world' });
    ```

200. **Describe how you would build a "Real-time Notification System" using Node.js Redis Pub/Sub, and Socket.io.**
    1.  **Client-side:** A client (e.g., a web browser) would establish a WebSocket connection to the Node.js server using Socket.io.
    2.  **Node.js Server (Socket.io):** The Node.js server would have a Socket.io instance running. When a client connects, the server would subscribe that client to a specific Redis channel based on their user ID or some other identifier.
    3.  **Redis Pub/Sub:** Redis would be used as a message broker. When an event occurs in the application that needs to trigger a notification (e.g., a new message is received), the application would publish a message to the relevant Redis channel.
    4.  **Node.js Server (Redis Subscriber):** The Node.js server would also have a Redis client subscribed to the same channels. When it receives a message from a channel, it would use Socket.io to emit a WebSocket event to the specific client(s) associated with that channel.
    5.  **Client-side (Notification):** The client would listen for the WebSocket event and then display the notification to the user.
    This architecture is highly scalable because you can have multiple Node.js server instances, and they can all communicate through the central Redis Pub/Sub system.
