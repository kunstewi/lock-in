### Node.js Fundamentals

1. What is Node.js? Is it a language, a library, or a runtime?
2. Which engine does Node.js use to execute JavaScript?
3. Is Node.js single-threaded or multi-threaded? Explain how it handles multiple concurrent requests without blocking.
4. Explain the Node.js Event Loop in detail. What are its different phases (Timers, Pending Callbacks, Idle/Prepare, Poll, Check, Close Callbacks)?
5. What is Libuv and what is its role in Node.js architecture?
6. Explain the concept of "Non-blocking I/O" and "Asynchronous" programming.
7. What is the difference between `process.nextTick()` and `setImmediate()`?
8. What is the difference between `setTimeout(fn, 0)` and `setImmediate()`?
9. What are `__dirname` and `__filename` global variables?
10. Explain the module system in Node.js. Difference between `module.exports` and `exports`. 
11. What are the differences between CommonJS (`require`) and ES Modules (`import/export`) in Node.js?
12. What is REPL in Node.js?
13. List some core modules of Node.js and their purposes (fs, path, os, http, events).
14. Explain the `fs` (File System) module. What is the difference between `fs.readFile()` and `fs.readFileSync()`?
15. What is a Buffer in Node.js? Why is it needed?
16. What are Streams? Why are they useful for handling large amounts of data?
17. Name and explain the four types of streams in Node.js (Readable, Writable, Duplex, Transform).
18. What is the `.pipe()` method in streams? Give a code example.
19. What is the difference between `path.join()` and `path.resolve()`?
20. Explain the `events` module and the `EventEmitter` class. How do you create and emit custom events?
21. What is "backpressure" in Node.js streams and how do you handle it?
22. How do you handle uncaught exceptions and unhandled promise rejections in Node?
23. What is the purpose of the `package.json` file? Explain `dependencies` vs `devDependencies`.
24. Explain the role of `package-lock.json`. Why should it be committed to version control?
25. What is the difference between `npm install` and `npm ci`?
26. What is the `process` object? List some useful properties like `env`, `argv`, `pid`, `cwd()`.
27. How do you pass command-line arguments to a Node.js script? How do you access them?
28. What are Worker Threads? When should you use them instead of the main event loop?
29. What is the `cluster` module and how does it help in utilizing multi-core systems?
30. Explain the difference between `spawn()`, `exec()`, and `fork()` in the `child_process` module.

---

### Express.js Fundamentals

31. What is Express.js? Why is it often called a "minimalist" framework?
32. How do you create a basic "Hello World" server using Express?
33. What is Middleware in Express? Explain the Request-Response cycle.
34. What is the purpose of the `next()` function in middleware?
35. What happens if you forget to call `next()` or send a response in a middleware function?
36. Describe the different types of middleware:
    - Application-level middleware
    - Router-level middleware
    - Error-handling middleware
    - Built-in middleware
    - Third-party middleware
33. How do you write an error-handling middleware? What are its 4 arguments?
34. Explain the difference between `res.send()`, `res.json()`, and `res.end()`.
35. What is the difference between `res.redirect()` and `res.render()`?
36. How do you access "Route Parameters" (e.g., `/users/:id`)?
37. How do you access "Query Parameters" (e.g., `/search?q=term`)?
38. How do you access the "Request Body" in a POST/PUT request? Which built-in middleware is required for this?
39. What is `app.use()` and how is it different from `app.get()` or `app.post()`?
40. How do you serve static files (images, CSS, JS) in Express?
41. What is `Express.Router` and how does it help in organizing a complex application?
42. How do you handle "404 Not Found" errors in Express?
43. What are Template Engines? Name some popular ones used with Express (EJS, Pug, Handlebars).
44. How do you set up a template engine in Express (e.g., using `app.set('view engine', ...)`).
45. What is CORS (Cross-Origin Resource Sharing)? How do you enable it in an Express app?
46. What is the purpose of the `cookie-parser` middleware?
47. How do you handle file uploads in Express? Which library is commonly used (e.g., Multer)?
48. What is the difference between `app.get()` and `app.all()`?
49. How do you implement "Route Chaining" (using `app.route()`)?
50. What is Environment Variable? How do you use the `dotenv` library in a Node/Express project?
51. What is JWT (JSON Web Token)? How do you use it for authentication in Express?
52. Explain the difference between Session-based and Token-based authentication.
53. What is Helmet.js and why should you use it in Express?
54. How do you implement rate limiting in an Express application?
55. What is the purpose of the `compression` middleware?
56. How do you handle asynchronous errors in Express routes (especially before Express 5)?
57. What is the difference between `req.params`, `req.query`, and `req.body`?
58. How do you retrieve request headers in Express?
59. How do you set a custom response header?
60. What is the difference between `res.sendFile()` and `res.download()`?
61. What is a "Virtual Path Prefix" for static files?
62. What does it mean to "Mount" a router?
63. Explain how to handle "preflight" (OPTIONS) requests in CORS.
64. How do you debug an Express application using the `DEBUG` environment variable?
65. How do you implement logging in Express (e.g., using `morgan` or `winston`)?

---

### Advanced & Database Integration

66. Explain the difference between SQL and NoSQL databases in the context of Node.js.
67. What is an ORM (Object-Relational Mapping) and an ODM (Object-Document Mapping)? Give examples (Sequelize, Prisma, Mongoose).
68. How do you connect Express to MongoDB using Mongoose?
69. What is a "Schema" and a "Model" in Mongoose?
70. What are Mongoose "Hooks" (Middleware)?
71. Explain "Population" in Mongoose (similar to Joins in SQL).
72. How do you handle different environments (development, production) using `process.env.NODE_ENV`?
73. What is PM2 and why is it essential for production Node.js apps?
74. Explain "Graceful Shutdown" of a Node.js server.
75. What is the purpose of `express-session` middleware?
76. In a production environment, why should you avoid using the default in-memory session store? What are the alternatives (e.g., Redis)?
77. What is Socket.io? How is it different from standard HTTP requests?
78. Explain the "Microservices" architecture and how Node.js is well-suited for it.
79. What is "Server-Side Rendering" (SSR) vs "Client-Side Rendering" (CSR)?
80. What is the difference between `npm update` and `npm install`?
81. What is the purpose of `npx`?
82. What is a "Memory Leak" in Node.js? How can you detect it (e.g., using `--inspect` and Chrome DevTools)?
83. Explain "SQL Injection" and how to prevent it in Node.js applications.
84. Explain "XSS" (Cross-Site Scripting) and how to prevent it in Express.
85. What is "Hashing" and how do you store passwords securely (e.g., using `bcrypt`)?

---

### Code Snippets & Practical Questions

86. 
```js
const express = require('express');
const app = express();
app.get('/user/:id', (req, res) => {
  res.send(req.params.id);
});
```
What will be the output if you visit `/user/42?name=admin`?

87.
```js
const fs = require('fs');
console.log('Start');
fs.readFile('data.txt', () => console.log('File Read'));
setTimeout(() => console.log('Timeout'), 0);
setImmediate(() => console.log('Immediate'));
console.log('End');
```
Assuming the file read takes some time, what is the most likely order of logs?

88.
```js
app.get('/test', (req, res, next) => {
  console.log('Step 1');
  next();
}, (req, res) => {
  console.log('Step 2');
  res.send('Success');
});
```
What is logged in the console when `/test` is visited?

89.
```js
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});
```
Explain what this code block does.

90.
```js
const buffer = Buffer.from('Node');
console.log(buffer.toJSON());
```
What will be the output format of `buffer.toJSON()`?

91. 
```js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
});
```
In this specific case (inside an I/O callback), which one will always run first and why?

92. How do you create a custom middleware that logs the request method and URL for every incoming request?

93. Write a small Express route that validates a "username" from `req.body` ensuring it is a string and has at least 5 characters.

94. How do you implement a "Global Error Handler" in Express?

95. 
```js
const eventEmitter = require('events');
const myEmitter = new eventEmitter();

myEmitter.on('greet', (name) => {
  console.log(`Hello ${name}`);
});

myEmitter.emit('greet', 'Node Enthusiast');
```
What is the output of this code?

96. Explain the difference between `res.json(data)` and `res.send(data)` when `data` is an object.

97. How do you set the HTTP status code of a response to 201 (Created) in Express?

98. What is the role of the `cluster.isMaster` (or `cluster.isPrimary`) property?

99. 
```js
const path = require('path');
console.log(path.join('/a', 'b', 'c/d', '..'));
```
What is the output?

100. Write a function that uses the `fs` module to check if a file exists asynchronously without using the deprecated `fs.exists()`.

---

### Deep Dive: Node.js Core & Express Internals

101. What is the difference between `fs.promises.readFile()` and `fs.readFile()`?
102. Explain the `util.promisify()` function and why it was widely used before `fs.promises`.
103. What is the `buffer.alloc()` vs `buffer.allocUnsafe()`? Why is the latter "unsafe"?
104. How do you convert a Buffer to a Base64 string?
105. Explain the `crypto` module. How do you generate a random string or a hash?
106. What is the `zlib` module used for? How do you compress a file using streams?
107. Explain the `url` module. What is the difference between the legacy API and the WHATWG URL API?
108. What is the `querystring` module and how is it different from `URLSearchParams`?
109. How does Node.js handle circular dependencies between modules?
110. What is the `vm` (Virtual Machine) module in Node.js?
111. Explain the `perf_hooks` module for performance measurement.
112. What are "Internal Slots" in Node.js modules?
113. How do you use the `v8` core module to get heap statistics?
114. What is the `async_hooks` module and what is its primary use case?
115. Explain the `domain` module (deprecated) and what replaced it.
116. What is the difference between `Resumable` and `Non-resumable` streams?
117. How do you implement a custom `Readable` stream?
118. What is the `highWaterMark` option in streams?
119. Explain "Object Mode" in Node.js streams.
120. How do you use `pipeline()` from the `stream` module instead of `.pipe()`? Why is it better?

121. In Express, what is `res.locals` and why is it useful for template engines?
122. What is `app.locals` and how is it different from `res.locals`?
123. Explain `req.xhr`. What does it detect?
124. What is `req.fresh` vs `req.stale`?
125. How do you change the default "views" directory in Express?
126. Explain `app.set('trust proxy', true)`. When do you need this?
127. How do you enable "Strict Routing" and "Case Sensitive Routing" in Express?
128. What is the purpose of `res.vary()`?
129. How do you use `res.format()` to send different responses based on the `Accept` header (JSON, HTML, Text)?
130. What is a "Sub-app" in Express? How do you mount one Express app inside another?
131. How do you override the default Error Handler in Express?
132. What is the difference between `res.location()` and `res.redirect()`?
133. How do you use the `method-override` middleware and why?
134. Explain the "Revealing Module Pattern" in the context of Node.js.
135. How do you secure Express cookies? (secure, httpOnly, sameSite flags).
136. What is a "Signing" a cookie? How does it differ from encrypting?
137. Explain `req.signedCookies`.
138. How do you implement a "Heartbeat" or "Health Check" endpoint?
139. What is the "Etag" header and how does Express handle it by default?
140. How do you disable the `X-Powered-By` header in Express for security?
141. What is the difference between `app.param()` and standard middleware?
142. How do you handle "Long Polling" in Node.js?
143. Explain the "Request ID" pattern for logging and tracing.
144. What is "Dependency Injection" and how can you implement it in an Express app?
145. How do you test Express routes using `Supertest` and `Jest`?
146. Explain the concept of "Idempotency" in REST APIs.
147. What is "HATEOAS" in the context of REST?
148. Explain the "Circuit Breaker" pattern in Node.js microservices.
149. What is "Service Discovery" and why is it needed?
150. How do you optimize a Node.js application for a Docker container?

---

### Modern Node.js (v18+) & Advanced Architecture

151. What is the built-in `fetch()` API introduced in Node.js 18? How does it differ from the browser's `fetch`?
152. Explain the Node.js Permission Model (`--allow-fs-read`, `--allow-net`, etc.) introduced in recent versions.
153. What is the built-in Test Runner in Node.js (`node --test`)? How do you use it without external libraries like Jest?
154. Explain the `util.parseArgs()` function for parsing command-line arguments.
155. What is `import.meta.url` in ES Modules and what is its equivalent in CommonJS?
156. How do you use the built-in `.env` file support (`node --env-file=.env`) introduced in Node.js 20?
157. Explain the "Single Executable Applications" (SEA) feature in Node.js.
158. What is the `navigator` object in Node.js and why was it added?
159. How do you use `Aborting` in asynchronous operations using `AbortController`?
160. What are `AsyncLocalStorage` and `AsyncResource` from the `async_hooks` module? Use case?

161. Explain the "Clean Architecture" pattern in an Express application.
162. What is "Vertical Slice Architecture" vs "Layered Architecture"?
163. How do you implement "Global Dependency Injection" using a container or simple JS patterns?
164. What is "Command Query Responsibility Segregation" (CQRS) and is it relevant for Node apps?
165. Explain the "Backends for Frontends" (BFF) pattern.

### Performance, Debugging & Monitoring

166. How do you use the `--inspect` flag to debug a Node.js process using Chrome DevTools?
167. What are "Flame Graphs" and how do they help in finding performance bottlenecks?
168. Explain the difference between "Heap" and "Stack" memory in Node.js.
169. How do you detect a memory leak using "Heap Snapshots"?
170. What is "Garbage Collection" (GC) trashing and how can it slow down your app?
171. How do you use `process.on('warning', ...)` to catch performance warnings?
172. What are "Orphaned Promises" and how do they affect Node.js performance?
173. Explain the "Event Loop Lag". How do you measure it?
174. How do you optimize "Heavy Computation" in Node.js without blocking the event loop?
175. What is the difference between `setImmediate` and `nextTick` in terms of the event loop starvation risk?

### Security Hardening (OWASP for Node)

176. What is "ReDoS" (Regular Expression Denial of Service) and how do you prevent it?
177. Explain "Prototype Pollution" and how it can lead to Remote Code Execution (RCE).
178. How do you prevent "Directory Traversal" attacks when serving files?
179. Explain "Broken Access Control" in an Express app and how to fix it.
180. What is "Insecure Deserialization" in Node.js?
181. How does the `cors` package handle the `Origin` header?
182. Explain the difference between "Blacklisting" and "Whitelisting" in security.
183. What is "CSRF" (Cross-Site Request Forgery) and how does the `csurf` library (or similar) prevent it?
184. How do you secure a Node.js API against "Brute Force" attacks?
185. Explain "Mass Assignment" vulnerability and how it relates to `req.body` in MongoDB/SQL.

### Scaling & DevOps

186. What is "Stateful" vs "Stateless" architecture? Why is stateless preferred for scaling?
187. Explain "Sticky Sessions" and when they are necessary.
188. How do you handle "Database Migrations" in a production Node.js environment?
189. What is "Blue-Green Deployment" and "Canary Release"?
190. How do you implement "Automated API Documentation" using Swagger (OpenAPI)?
191. Explain the role of an "API Gateway" (like Kong or Nginx) in front of Node.js services.
192. What are "Sidecar Containers" and "Service Meshes" (Istio/Linkerd)?
193. How do you perform "Stress Testing" on a Node.js server (e.g., using `Autocannon` or `Artillery`)?
194. Explain "Log aggregation" (ELK Stack - Elasticsearch, Logstash, Kibana).
195. What is "Distributed Tracing" (Jaeger/Zipkin) and why is it important for Node microservices?

### Final Coding Challenges & Scenarios

196. Write an Express middleware that measures the response time of every request and sends it as a `X-Response-Time` header.
197. Use the `cluster` module to spawn workers equal to the number of CPU cores.
198. Write a function that reads a 5GB file line-by-line using `readline` and `streams` without crashing.
199. Create a simple "Broadcaster" using `EventEmitter` where one module sends data and multiple subscribers log it.
200. Describe how you would build a "Real-time Notification System" using Node.js Redis Pub/Sub, and Socket.io.
