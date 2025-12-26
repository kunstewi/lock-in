### Database Fundamentals

1. What is a Database? What is the difference between a Database and a DBMS (Database Management System)?
2. What are the main differences between SQL and NoSQL databases? When would you use each?
3. What is ACID in databases? Explain each property (Atomicity, Consistency, Isolation, Durability).
4. What is BASE in NoSQL databases? How does it differ from ACID?
5. Explain the CAP theorem. What does it mean for distributed databases?
6. What is Database Normalization? Why is it important?
7. Explain the different Normal Forms (1NF, 2NF, 3NF, BCNF).
8. What is Denormalization? When and why would you denormalize a database?
9. What is a Primary Key? What are the characteristics of a good primary key?
10. What is a Foreign Key? How does it establish relationships between tables?
11. Explain the different types of relationships in databases (One-to-One, One-to-Many, Many-to-Many).
12. What is an Index in a database? How does it improve query performance?
13. What are the disadvantages of having too many indexes?
14. What is the difference between Clustered and Non-Clustered indexes?
15. What is a Composite Index? When would you use one?
16. What is a Transaction? Why are transactions important?
17. What is a Deadlock in databases? How can you prevent it?
18. What is Database Sharding? When would you implement it?
19. What is Database Replication? Explain Master-Slave and Master-Master replication.
20. What is a Connection Pool? Why is it important in Node.js applications?

---

### SQL Fundamentals

21. What does SQL stand for? Is SQL a programming language?
22. List the main categories of SQL commands (DDL, DML, DCL, TCL, DQL).
23. What is the difference between `DELETE`, `TRUNCATE`, and `DROP`?
24. What is the difference between `WHERE` and `HAVING` clauses?
25. Explain the difference between `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `FULL OUTER JOIN`.
26. What is a Self Join? Give an example use case.
27. What is a Cross Join? When would you use it?
28. What is the difference between `UNION` and `UNION ALL`?
29. What are Aggregate Functions? List common ones (COUNT, SUM, AVG, MIN, MAX).
30. What is the `GROUP BY` clause? How does it work with aggregate functions?
31. What is a Subquery? What is the difference between a Correlated and Non-Correlated subquery?
32. What is the difference between `IN` and `EXISTS` operators?
33. What is the `LIKE` operator? Explain wildcards (`%` and `_`).
34. What is the difference between `CHAR` and `VARCHAR` data types?
35. What are the different date/time data types in SQL?
36. What is `NULL` in SQL? How is it different from an empty string or zero?
37. What is the difference between `IS NULL` and `= NULL`?
38. What is `COALESCE()` function? How is it used?
39. What is the `CASE` statement in SQL? Give an example.
40. What are SQL Views? What are their advantages?
41. What is a Materialized View? How is it different from a regular view?
42. What are Stored Procedures? What are their benefits?
43. What are Triggers? When would you use them?
44. What is the difference between a Stored Procedure and a Function?
45. What are Constraints in SQL? List the common types (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT).
46. What is the `AUTO_INCREMENT` attribute?
47. What is the difference between `COMMIT` and `ROLLBACK`?
48. What are Savepoints in transactions?
49. What is the `EXPLAIN` command? Why is it useful?
50. What is Query Optimization? Name some techniques to optimize SQL queries.

---

### PostgreSQL Specific

51. What is PostgreSQL? How is it different from MySQL?
52. What are the advantages of PostgreSQL over other relational databases?
53. What is a Schema in PostgreSQL?
54. What are PostgreSQL Extensions? Name some popular ones (pg_trgm, uuid-ossp, PostGIS).
55. What is JSONB data type in PostgreSQL? How is it different from JSON?
56. How do you query JSONB data in PostgreSQL?
57. What are Array data types in PostgreSQL? Give an example.
58. What is the `SERIAL` data type? How is it different from `BIGSERIAL`?
59. What are PostgreSQL Sequences?
60. What is MVCC (Multi-Version Concurrency Control) in PostgreSQL?
61. What is the difference between `VACUUM` and `ANALYZE` in PostgreSQL?
62. What are CTEs (Common Table Expressions)? How do you use `WITH` clause?
63. What is a Recursive CTE? Give an example use case.
64. What are Window Functions in PostgreSQL? Give examples (ROW_NUMBER, RANK, DENSE_RANK).
65. What is the `RETURNING` clause in PostgreSQL?
66. What are PostgreSQL Roles and Privileges?
67. What is Row Level Security (RLS) in PostgreSQL?
68. What is the `pg_dump` and `pg_restore` command used for?
69. What is Write-Ahead Logging (WAL) in PostgreSQL?
70. What are Tablespaces in PostgreSQL?

---

### MongoDB Fundamentals

71. What is MongoDB? What type of database is it?
72. What is a Document in MongoDB?
73. What is a Collection in MongoDB? How is it different from a SQL table?
74. What is BSON? How is it different from JSON?
75. What is the `_id` field in MongoDB? Is it mandatory?
76. What is an ObjectId? How is it generated?
77. What are the advantages of MongoDB over relational databases?
78. What are the disadvantages or limitations of MongoDB?
79. When should you use MongoDB instead of a SQL database?
80. What is the maximum document size in MongoDB?
81. What is Embedded Document pattern in MongoDB?
82. What is Reference pattern in MongoDB? When would you use it over embedding?
83. What is the difference between Embedding and Referencing in MongoDB?
84. What are MongoDB Indexes? How do you create them?
85. What is a Compound Index in MongoDB?
86. What is a Text Index? When would you use it?
87. What is a Geospatial Index in MongoDB?
88. What is the Aggregation Pipeline in MongoDB?
89. Name and explain common aggregation stages ($match, $group, $project, $sort, $limit, $skip, $lookup).
90. What is the `$lookup` stage? How is it similar to SQL JOIN?
91. What is the difference between `find()` and `aggregate()` in MongoDB?
92. What are MongoDB Operators? List some query operators ($eq, $gt, $lt, $in, $regex).
93. What are Update Operators in MongoDB? ($set, $unset, $inc, $push, $pull).
94. What is Upsert in MongoDB?
95. What is the difference between `updateOne()`, `updateMany()`, and `replaceOne()`?
96. What is the difference between `deleteOne()` and `deleteMany()`?
97. What are MongoDB Transactions? When were they introduced?
98. What is a Replica Set in MongoDB?
99. What is Sharding in MongoDB? How does it work?
100. What is the Oplog in MongoDB?

---

### MongoDB with Node.js (Mongoose)

101. What is Mongoose? Why do we use it instead of the native MongoDB driver?
102. What is a Schema in Mongoose? How do you define one?
103. What is a Model in Mongoose? How is it created from a Schema?
104. What are SchemaTypes in Mongoose? List the common ones.
105. What is the difference between `Schema.Types.ObjectId` and `mongoose.Types.ObjectId`?
106. How do you define default values in a Mongoose schema?
107. What are Validators in Mongoose? How do you use built-in validators (required, min, max, enum)?
108. How do you create custom validators in Mongoose?
109. What are Mongoose Middleware (Hooks)? What are the types (pre and post)?
110. What is the difference between `pre('save')` and `post('save')` middleware?
111. What is the difference between document middleware and query middleware in Mongoose?
112. What are Virtual Properties in Mongoose? Give an example.
113. What is Population in Mongoose? How does it work?
114. What is the difference between `populate()` and manual referencing?
115. How do you populate nested references in Mongoose?
116. What is the `lean()` method in Mongoose? When should you use it?
117. What is the difference between `save()` and `create()` in Mongoose?
118. What is the difference between `findById()`, `findOne()`, and `find()`?
119. What is the difference between `findByIdAndUpdate()` and `updateOne()`?
120. What does the `new: true` option do in `findByIdAndUpdate()`?
121. What is the `runValidators` option in update operations?
122. What are Mongoose Plugins? How do you create and use them?
123. What is the `timestamps` option in Mongoose schemas?
124. What is the `toJSON` and `toObject` option in schemas?
125. How do you handle unique constraints in Mongoose?
126. What is the difference between `Schema.index()` and defining indexes in field definitions?
127. How do you create a compound index in Mongoose?
128. What is the `select()` method? How do you exclude fields from query results?
129. How do you exclude a field by default using schema options (`select: false`)?
130. What is the `discriminator()` method in Mongoose? What is it used for?
131. How do you handle MongoDB transactions using Mongoose?
132. What is a Session in Mongoose transactions?
133. How do you implement pagination in Mongoose?
134. What is the `countDocuments()` vs `estimatedDocumentCount()` method?
135. How do you perform case-insensitive searches in Mongoose?
136. What is the `$regex` operator? How do you use it safely?
137. How do you handle file uploads with MongoDB (GridFS)?
138. What is the difference between `mongoose.connect()` and `mongoose.createConnection()`?
139. How do you handle connection errors in Mongoose?
140. What are Mongoose connection events (connected, error, disconnected)?

---

### SQL with Node.js

141. What are the popular SQL libraries for Node.js? (mysql2, pg, better-sqlite3)
142. What is the difference between `mysql` and `mysql2` packages?
143. How do you establish a connection to a MySQL database in Node.js?
144. How do you establish a connection to a PostgreSQL database in Node.js using `pg`?
145. What is a Connection Pool? How do you create one using `mysql2` or `pg`?
146. Why should you use connection pools instead of creating new connections for each query?
147. How do you execute a simple SELECT query using `mysql2`?
148. How do you handle query results in callbacks vs Promises vs async/await?
149. What are Prepared Statements? Why are they important for security?
150. How do you use parameterized queries to prevent SQL injection?
151. What is SQL Injection? Give an example and how to prevent it.
152. How do you execute transactions using `mysql2` or `pg`?
153. How do you handle transaction rollback on errors?
154. What is the `pg` package's `query()` method? How does it work?
155. What is the difference between `pool.query()` and `client.query()` in `pg`?

---

### ORMs (Object-Relational Mapping)

156. What is an ORM? What problems does it solve?
157. What are the advantages of using an ORM?
158. What are the disadvantages of using an ORM?
159. Name popular ORMs for Node.js (Sequelize, TypeORM, Prisma, Knex).
160. What is Sequelize? What databases does it support?
161. What is a Model in Sequelize? How do you define one?
162. What are Sequelize data types?
163. How do you define associations in Sequelize (hasOne, hasMany, belongsTo, belongsToMany)?
164. What is the difference between `hasMany` and `belongsToMany`?
165. How do you perform CRUD operations in Sequelize?
166. What are Sequelize Hooks (beforeCreate, afterCreate, etc.)?
167. What are Migrations in Sequelize? Why are they important?
168. How do you create and run migrations in Sequelize?
169. What are Seeders in Sequelize?
170. What is Prisma? How is it different from traditional ORMs?
171. What is the Prisma Schema? How do you define models?
172. What is Prisma Client? How is it generated?
173. What is Prisma Migrate? How does it differ from Sequelize migrations?
174. What are the advantages of Prisma over Sequelize?
175. What is TypeORM? What makes it suitable for TypeScript projects?
176. What is a Query Builder? How is Knex.js different from ORMs?
177. When would you use a Query Builder instead of an ORM?
178. What is the N+1 query problem? How do ORMs help solve it?
179. How do you optimize ORM queries to avoid performance issues?
180. What is Lazy Loading vs Eager Loading in ORMs?

---

### Database Design & Best Practices

181. What is the difference between a Logical and Physical database design?
182. What is an Entity-Relationship Diagram (ERD)?
183. What is Cardinality in database relationships?
184. How do you model a Many-to-Many relationship in SQL?
185. What is a Junction Table (or Bridge Table)?
186. What is Referential Integrity? How do you maintain it?
187. What is the `ON DELETE CASCADE` constraint?
188. What is the difference between `ON DELETE CASCADE`, `ON DELETE SET NULL`, and `ON DELETE RESTRICT`?
189. How do you handle soft deletes in a database?
190. What is an Audit Trail? How do you implement it?
191. What is Database Versioning? Why is it important?
192. What are Database Migrations? How do they help in team development?
193. What is the difference between Schema Migration and Data Migration?
194. How do you handle database schema changes in production?
195. What is Blue-Green Deployment for databases?
196. What is a Read Replica? When would you use it?
197. What is Database Caching? Name some caching strategies (Redis, Memcached).
198. What is the difference between Write-Through and Write-Back caching?
199. What is Cache Invalidation? Why is it considered a hard problem?
200. What is the difference between Vertical and Horizontal Scaling for databases?

---

### Advanced Database Concepts

201. What is a Distributed Database?
202. What is Eventual Consistency?
203. What is Strong Consistency vs Eventual Consistency?
204. What is a Two-Phase Commit (2PC) protocol?
205. What is the Saga pattern in distributed transactions?
206. What is Database Partitioning? How is it different from Sharding?
207. What is Horizontal Partitioning vs Vertical Partitioning?
208. What is a Time-Series Database? Give examples (InfluxDB, TimescaleDB).
209. What is a Graph Database? Give examples (Neo4j, ArangoDB).
210. What is a Key-Value Store? Give examples (Redis, DynamoDB).
211. What is a Column-Family Store? Give examples (Cassandra, HBase).
212. What is a Document Store? How is MongoDB a document store?
213. What is Redis? Is it a database or a cache?
214. What are Redis data structures? (Strings, Lists, Sets, Sorted Sets, Hashes)
215. What is Redis Pub/Sub? How would you use it in a Node.js application?
216. What is the difference between Redis and Memcached?
217. What is ElasticSearch? When would you use it?
218. What is Full-Text Search? How does it differ from regular database queries?
219. What is Database Backup? What are the different types (Full, Incremental, Differential)?
220. What is Point-in-Time Recovery (PITR)?

---

### Performance & Optimization

221. What is Query Performance? How do you measure it?
222. What is the `EXPLAIN` plan? How do you read it?
223. What is a Table Scan vs Index Scan?
224. What is Query Caching?
225. What are Slow Query Logs? How do you use them?
226. What is Database Profiling?
227. What is Connection Pooling? What are the optimal pool size settings?
228. What is the N+1 Query Problem? How do you solve it?
229. What is Batch Processing? How does it improve performance?
230. What is Bulk Insert? How is it different from inserting one record at a time?
231. What is the difference between `INSERT` and `BULK INSERT`?
232. What is Database Denormalization for performance?
233. What is Partitioning for performance optimization?
234. What is Read-Write Splitting?
235. What is Database Load Balancing?
236. What is Connection Timeout? How do you configure it?
237. What is Statement Timeout? Why is it important?
238. What is Database Monitoring? What metrics should you monitor?
239. What is Query Response Time? What is an acceptable response time?
240. What are Database Bottlenecks? How do you identify them?

---

### Security

241. What is SQL Injection? How do you prevent it in Node.js?
242. What are Prepared Statements? How do they prevent SQL injection?
243. What is the principle of Least Privilege in database security?
244. What is Database Encryption? What is the difference between Encryption at Rest and Encryption in Transit?
245. What is TLS/SSL for database connections?
246. How do you securely store database credentials in a Node.js application?
247. What is the role of Environment Variables in database security?
248. What is Database Auditing?
249. What is Row-Level Security?
250. What is Column-Level Encryption?
251. What is Database Masking?
252. What is the difference between Authentication and Authorization in databases?
253. What are Database Roles and Permissions?
254. What is the `GRANT` and `REVOKE` command in SQL?
255. How do you implement database access control in a multi-tenant application?
256. What is NoSQL Injection? How is it different from SQL Injection?
257. How do you prevent NoSQL injection in MongoDB?
258. What is the danger of using `eval()` or `$where` in MongoDB queries?
259. What is Input Validation? Why is it important for database security?
260. What is Output Encoding in the context of database queries?

---

### Code Snippets & Practical Questions

261. 
```js
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb'
});

connection.query('SELECT * FROM users WHERE id = ' + userId, (err, results) => {
  console.log(results);
});
```
What is the security vulnerability in this code? How would you fix it?

262.
```js
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

async function findUser(username) {
  await client.connect();
  const db = client.db('myapp');
  const user = await db.collection('users').findOne({ username: username });
  return user;
}
```
What is missing in this code? What happens if this function is called multiple times?

263.
```js
const User = require('./models/User');

app.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ success: true });
});
```
What is the security vulnerability in this code (Mass Assignment)? How would you fix it?

264.
```js
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
```
Explain what each configuration option does.

265.
```js
User.findById(userId)
  .then(user => {
    return Post.find({ authorId: user._id });
  })
  .then(posts => {
    console.log(posts);
  });
```
How would you optimize this code to avoid the N+1 problem using Mongoose population?

266. Write a Mongoose schema for a `User` model with the following fields:
- username (String, required, unique, lowercase)
- email (String, required, unique, with email validation)
- password (String, required, minimum 8 characters)
- createdAt (Date, default to current date)
- isActive (Boolean, default true)

267. Write a SQL query to find all users who have made more than 5 orders in the last 30 days.

268. Write a MongoDB aggregation pipeline to group users by country and count how many users are in each country, sorted by count in descending order.

269. How do you implement pagination in a SQL query? Write an example for page 3 with 10 items per page.

270. How do you implement pagination in MongoDB? Write an example using `skip()` and `limit()`.

271.
```js
const schema = new mongoose.Schema({
  name: String,
  email: String
});

schema.pre('save', function(next) {
  console.log('Saving user:', this.name);
  next();
});
```
What is this code doing? When will the console.log execute?

272. Write a Mongoose query to find all posts created in the last 7 days, sorted by creation date (newest first), and populate the author's name and email.

273. Write a SQL query to create a `users` table with columns: id (primary key, auto-increment), username (unique, not null), email (unique, not null), password (not null), created_at (timestamp, default current timestamp).

274. Write a MongoDB query to update all users with `isActive: false` to `isActive: true` where their `lastLogin` is within the last 30 days.

275. How do you create a compound index in MongoDB on `{ email: 1, createdAt: -1 }`? Write the code.

276.
```js
const result = await User.findByIdAndUpdate(
  userId,
  { $inc: { loginCount: 1 } },
  { new: true }
);
```
Explain what this code does. What does `$inc` do? What does `new: true` do?

277. Write a SQL transaction that transfers money from one account to another. Include proper error handling and rollback.

278. Write a Mongoose middleware that automatically hashes a user's password before saving to the database.

279.
```js
const users = await User.find({ age: { $gte: 18 } }).lean();
```
What does `.lean()` do? When should you use it?

280. Write a PostgreSQL query using a CTE (Common Table Expression) to find employees and their managers.

281.
```js
db.collection('orders').aggregate([
  { $match: { status: 'completed' } },
  { $group: { _id: '$customerId', total: { $sum: '$amount' } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);
```
Explain what this aggregation pipeline does step by step.

282. How do you handle database connection errors in a Node.js application? Write example code with proper error handling.

283. Write a SQL query to find duplicate emails in a `users` table.

284. Write a MongoDB query to find all documents where an array field contains a specific value.

285. How do you implement soft delete in Mongoose? Write a schema with soft delete functionality.

286. Write a SQL query using `JOIN` to get all orders with customer information (customer name, email) from separate `orders` and `customers` tables.

287. Write a Mongoose virtual property that returns a user's full name from `firstName` and `lastName` fields.

288. How do you create a unique compound index in Mongoose on `email` and `tenantId`?

289. Write a PostgreSQL query to get the top 5 products by sales in each category.

290. Write code to implement database connection retry logic in Node.js.

---

### Real-World Scenarios

291. You have a `users` table with 10 million records. A query to find users by email is very slow. How would you optimize it?

292. Your application is experiencing slow database queries during peak hours. What steps would you take to diagnose and fix the issue?

293. You need to migrate from MySQL to PostgreSQL. What are the key considerations and steps?

294. How would you design a database schema for a social media application with users, posts, comments, and likes?

295. How would you implement a rating/review system in a database (e.g., for products)?

296. How would you design a database for a multi-tenant SaaS application?

297. Your MongoDB collection has grown to 100GB. Queries are becoming slow. What strategies would you use?

298. How would you implement a notification system using a database and Redis?

299. How would you design a database schema for an e-commerce application with products, categories, orders, and inventory?

300. You need to perform a large data migration (millions of records) with zero downtime. How would you approach this?

301. How would you implement a search functionality that searches across multiple fields (name, email, description) efficiently?

302. Your application needs to support multiple languages. How would you design the database schema for internationalization?

303. How would you implement a follower/following system (like Twitter) in a database?

304. How would you design a database for a booking/reservation system (e.g., hotel rooms, appointments)?

305. Your application needs to track changes to records over time (audit history). How would you implement this?

306. How would you implement a tagging system where items can have multiple tags and tags can be applied to multiple items?

307. How would you design a database for a messaging application with one-on-one and group chats?

308. Your application needs to generate reports from large datasets. How would you optimize this without impacting the main application performance?

309. How would you implement a recommendation system using a database?

310. How would you handle database schema versioning across multiple environments (dev, staging, production)?

311. You need to implement real-time analytics on user activity. What database architecture would you use?

312. How would you design a database for a content management system (CMS) with different content types?

313. Your application needs to support geographical queries (find nearby locations). How would you implement this?

314. How would you implement a queue system using a database?

315. How would you design a database schema for a learning management system (LMS) with courses, lessons, quizzes, and student progress?

---

### Testing & Debugging

316. How do you test database queries in a Node.js application?
317. What is Database Mocking? When would you use it?
318. What is the purpose of a Test Database?
319. How do you set up a separate test database for your Node.js tests?
320. What is Database Seeding in testing?
321. How do you reset the database state between tests?
322. What is the difference between Unit Testing and Integration Testing for database code?
323. How do you test database transactions?
324. What tools can you use to test MongoDB queries (MongoDB Compass, Studio 3T)?
325. What tools can you use to test SQL queries (pgAdmin, MySQL Workbench, DBeaver)?
326. How do you debug slow queries?
327. How do you use `console.log` to debug Mongoose queries?
328. What is the `debug` option in Mongoose? How do you enable it?
329. How do you log all SQL queries in `mysql2` or `pg`?
330. What is the purpose of database query logging in production?

---

### Modern Database Trends

331. What is Serverless Database? Give examples (AWS Aurora Serverless, MongoDB Atlas).
332. What is Database-as-a-Service (DBaaS)?
333. What is the difference between self-hosted and cloud-hosted databases?
334. What is AWS RDS? What databases does it support?
335. What is MongoDB Atlas? What are its advantages?
336. What is Supabase? How is it different from traditional databases?
337. What is Firebase Firestore? When would you use it?
338. What is PlanetScale? What makes it unique?
339. What is Neon? What is its serverless PostgreSQL offering?
340. What is CockroachDB? What problems does it solve?
341. What is EdgeDB? How is it different from traditional databases?
342. What is the JAMstack? How do databases fit into this architecture?
343. What is the difference between SQL and NewSQL databases?
344. What is a Multi-Model Database?
345. What is Database Observability?
346. What is Database GitOps?
347. What is Schema-as-Code?
348. What is the role of AI/ML in modern databases?
349. What is Vector Database? Give examples (Pinecone, Weaviate).
350. What are the emerging trends in database technology for 2024-2025?
