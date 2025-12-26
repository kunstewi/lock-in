### PostgreSQL Fundamentals

1. What is PostgreSQL? What type of database is it?
2. What does RDBMS stand for?
3. What is the difference between PostgreSQL and MySQL?
4. What is the difference between PostgreSQL and MongoDB?
5. What are the main features of PostgreSQL?
6. What is ACID in databases?
7. Explain each property of ACID (Atomicity, Consistency, Isolation, Durability).
8. What is a relational database?
9. What is a table in PostgreSQL?
10. What is a row (tuple) in a database?
11. What is a column (attribute) in a database?
12. What is a schema in PostgreSQL?
13. What is a database in PostgreSQL?
14. What is the difference between a database and a schema?
15. How do you connect to PostgreSQL from the command line?
16. What is `psql`?
17. How do you list all databases in PostgreSQL?
18. How do you connect to a specific database?
19. How do you list all tables in a database?
20. How do you describe a table structure?
21. What is the default PostgreSQL port?
22. What is the default PostgreSQL superuser?
23. How do you create a new database?
24. How do you drop a database?
25. How do you create a new user/role?
26. What is the difference between a user and a role in PostgreSQL?
27. How do you grant privileges to a user?
28. How do you revoke privileges from a user?
29. What is a superuser in PostgreSQL?
30. What are the different privilege levels in PostgreSQL?

---

### Data Types

31. What are the main categories of data types in PostgreSQL?
32. What numeric data types does PostgreSQL support?
33. What is the difference between `INTEGER` and `BIGINT`?
34. What is the difference between `NUMERIC` and `DECIMAL`?
35. What is the difference between `REAL` and `DOUBLE PRECISION`?
36. When should you use `NUMERIC` vs `INTEGER`?
37. What is the `SERIAL` data type?
38. What is the difference between `SERIAL`, `BIGSERIAL`, and `SMALLSERIAL`?
39. What character/string data types does PostgreSQL support?
40. What is the difference between `CHAR`, `VARCHAR`, and `TEXT`?
41. When should you use `VARCHAR` vs `TEXT`?
42. What is the maximum length of `VARCHAR`?
43. What date/time data types does PostgreSQL support?
44. What is the difference between `DATE`, `TIME`, and `TIMESTAMP`?
45. What is the difference between `TIMESTAMP` and `TIMESTAMPTZ`?
46. Should you use `TIMESTAMP` or `TIMESTAMPTZ`? Why?
47. What is the `INTERVAL` data type?
48. What is the `BOOLEAN` data type?
49. What values can a `BOOLEAN` column store?
50. What is the `UUID` data type?
51. When should you use `UUID` vs `SERIAL` for primary keys?
52. What is the `JSON` data type?
53. What is the difference between `JSON` and `JSONB`?
54. When should you use `JSONB` over `JSON`?
55. What is the `ARRAY` data type?
56. How do you define an array column?
57. What is the `ENUM` data type?
58. How do you create a custom ENUM type?
59. What is the `BYTEA` data type?
60. What geometric data types does PostgreSQL support?

---

### Tables & Constraints

61. How do you create a table in PostgreSQL?
62. What is the basic syntax for `CREATE TABLE`?
63. What is a primary key?
64. How do you define a primary key?
65. Can a table have multiple primary keys?
66. What is a composite primary key?
67. What is a foreign key?
68. How do you define a foreign key?
69. What is referential integrity?
70. What are the different foreign key actions (`ON DELETE`, `ON UPDATE`)?
71. What does `ON DELETE CASCADE` do?
72. What does `ON DELETE SET NULL` do?
73. What does `ON DELETE RESTRICT` do?
74. What does `ON DELETE NO ACTION` do?
75. What is the difference between `RESTRICT` and `NO ACTION`?
76. What is a `UNIQUE` constraint?
77. How do you add a unique constraint?
78. What is a `NOT NULL` constraint?
79. What is a `CHECK` constraint?
80. 
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price NUMERIC(10, 2) CHECK (price > 0)
);
```
Explain all the constraints in this table.
81. What is a `DEFAULT` constraint?
82. How do you set a default value for a column?
83. How do you add a constraint to an existing table?
84. How do you drop a constraint?
85. How do you rename a table?
86. How do you add a column to an existing table?
87. How do you drop a column?
88. How do you rename a column?
89. How do you change the data type of a column?
90. What is `ALTER TABLE` used for?

---

### CRUD Operations

91. What does CRUD stand for?
92. How do you insert data into a table?
93. What is the syntax for `INSERT INTO`?
94. How do you insert multiple rows at once?
95. How do you insert data and return the inserted row?
96. What is the `RETURNING` clause?
97. How do you select all columns from a table?
98. How do you select specific columns?
99. How do you filter results using `WHERE`?
100. What comparison operators can you use in `WHERE`?
101. What is the difference between `=` and `LIKE`?
102. How do you use `LIKE` for pattern matching?
103. What wildcards can you use with `LIKE`?
104. What does `%` mean in `LIKE`?
105. What does `_` mean in `LIKE`?
106. What is `ILIKE` and how is it different from `LIKE`?
107. How do you use `IN` operator?
108. How do you use `BETWEEN` operator?
109. How do you use `IS NULL` and `IS NOT NULL`?
110. How do you combine conditions with `AND` and `OR`?
111. What is the precedence of `AND` vs `OR`?
112. How do you update data in a table?
113. What is the syntax for `UPDATE`?
114. How do you update multiple columns?
115. How do you update with a condition?
116. What happens if you forget the `WHERE` clause in `UPDATE`?
117. How do you delete data from a table?
118. What is the syntax for `DELETE`?
119. What is the difference between `DELETE` and `TRUNCATE`?
120. What is the difference between `TRUNCATE` and `DROP`?

---

### Querying & Filtering

121. How do you sort results in PostgreSQL?
122. What is the `ORDER BY` clause?
123. How do you sort in descending order?
124. How do you sort by multiple columns?
125. How do you limit the number of results?
126. What is the `LIMIT` clause?
127. What is the `OFFSET` clause?
128. How do you implement pagination using `LIMIT` and `OFFSET`?
129. How do you select distinct values?
130. What is the `DISTINCT` keyword?
131. What is the difference between `DISTINCT` and `DISTINCT ON`?
132. How do you count rows?
133. What aggregate functions does PostgreSQL support?
134. What does `COUNT()` do?
135. What does `SUM()` do?
136. What does `AVG()` do?
137. What does `MIN()` do?
138. What does `MAX()` do?
139. What is the difference between `COUNT(*)` and `COUNT(column_name)`?
140. What is the `GROUP BY` clause?
141. How do you use `GROUP BY` with aggregate functions?
142. 
```sql
SELECT category, COUNT(*) 
FROM products 
GROUP BY category;
```
What does this query do?
143. What is the `HAVING` clause?
144. What is the difference between `WHERE` and `HAVING`?
145. When do you use `WHERE` vs `HAVING`?
146. 
```sql
SELECT category, COUNT(*) as count
FROM products 
GROUP BY category
HAVING COUNT(*) > 5;
```
Explain this query.
147. Can you use `WHERE` and `HAVING` together?
148. What is the order of execution in a SQL query?
149. What is the `CASE` expression?
150. How do you use `CASE WHEN`?

---

### Joins

151. What is a JOIN in SQL?
152. What are the different types of JOINs?
153. What is an `INNER JOIN`?
154. What is a `LEFT JOIN` (or `LEFT OUTER JOIN`)?
155. What is a `RIGHT JOIN` (or `RIGHT OUTER JOIN`)?
156. What is a `FULL JOIN` (or `FULL OUTER JOIN`)?
157. What is a `CROSS JOIN`?
158. What is the difference between `INNER JOIN` and `LEFT JOIN`?
159. 
```sql
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```
What does this query return?
160. 
```sql
SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```
How is this different from the previous query?
161. What is a self-join?
162. When would you use a self-join?
163. What is the difference between explicit JOIN syntax and implicit JOIN (comma)?
164. Can you join more than two tables?
165. How do you join three tables?
166. What is a natural join?
167. Should you use natural joins? Why or why not?
168. What is the `USING` clause in joins?
169. What is the difference between `ON` and `USING`?
170. What is a subquery?
171. What is the difference between a JOIN and a subquery?
172. When should you use a JOIN vs a subquery?
173. What is a correlated subquery?
174. What is the performance difference between JOINs and subqueries?
175. What is a `WITH` clause (CTE)?

---

### Indexes

176. What is an index in PostgreSQL?
177. Why do we need indexes?
178. How do indexes improve query performance?
179. What are the drawbacks of indexes?
180. When should you create an index?
181. When should you NOT create an index?
182. How do you create an index?
183. What is the syntax for `CREATE INDEX`?
184. What is a unique index?
185. What is the difference between a unique index and a unique constraint?
186. What is a composite index (multi-column index)?
187. When should you use a composite index?
188. What is the order of columns in a composite index important?
189. What is a partial index?
190. When would you use a partial index?
191. What is a B-tree index?
192. What is a Hash index?
193. What is a GIN index?
194. What is a GiST index?
195. What is a BRIN index?
196. When should you use each type of index?
197. What is the default index type in PostgreSQL?
198. How do you check if an index is being used?
199. What is the `EXPLAIN` command?
200. What is the `EXPLAIN ANALYZE` command?
201. How do you read an execution plan?
202. What is a sequential scan?
203. What is an index scan?
204. What is a bitmap scan?
205. How do you drop an index?
206. Can you create an index concurrently?
207. What does `CREATE INDEX CONCURRENTLY` do?
208. How do you rebuild an index?
209. What is index bloat?
210. How do you monitor index usage?

---

### Transactions

211. What is a transaction in PostgreSQL?
212. Why do we need transactions?
213. How do you start a transaction?
214. What is the `BEGIN` command?
215. How do you commit a transaction?
216. How do you rollback a transaction?
217. What is the difference between `COMMIT` and `ROLLBACK`?
218. What is autocommit mode?
219. Is autocommit enabled by default in PostgreSQL?
220. What is a savepoint?
221. How do you create a savepoint?
222. How do you rollback to a savepoint?
223. What are isolation levels?
224. What are the four standard isolation levels?
225. What is `READ UNCOMMITTED`?
226. What is `READ COMMITTED`?
227. What is `REPEATABLE READ`?
228. What is `SERIALIZABLE`?
229. What is the default isolation level in PostgreSQL?
230. What is a dirty read?
231. What is a non-repeatable read?
232. What is a phantom read?
233. Which isolation level prevents which anomaly?
234. How do you set the isolation level?
235. What is a deadlock?
236. How does PostgreSQL handle deadlocks?
237. How can you prevent deadlocks?
238. What is optimistic locking?
239. What is pessimistic locking?
240. What is row-level locking?

---

### Views & Materialized Views

241. What is a view in PostgreSQL?
242. How do you create a view?
243. What is the difference between a view and a table?
244. Can you insert/update/delete data in a view?
245. What is an updatable view?
246. What conditions make a view updatable?
247. How do you drop a view?
248. What is a materialized view?
249. What is the difference between a view and a materialized view?
250. When should you use a materialized view?
251. How do you create a materialized view?
252. How do you refresh a materialized view?
253. What is `REFRESH MATERIALIZED VIEW`?
254. What is `REFRESH MATERIALIZED VIEW CONCURRENTLY`?
255. Can you create indexes on materialized views?
256. What are the use cases for materialized views?
257. What are the drawbacks of materialized views?
258. How do you drop a materialized view?
259. Can you have a materialized view of a materialized view?
260. What is the performance impact of materialized views?

---

### Functions & Stored Procedures

261. What is a function in PostgreSQL?
262. How do you create a function?
263. What languages can you use to write PostgreSQL functions?
264. What is PL/pgSQL?
265. What is the difference between a function and a stored procedure?
266. How do you call a function?
267. What is the `RETURNS` clause?
268. How do you return multiple values from a function?
269. What is `RETURNS TABLE`?
270. What is `RETURNS SETOF`?
271. How do you drop a function?
272. What are function parameters?
273. What is the difference between `IN`, `OUT`, and `INOUT` parameters?
274. What are default parameter values?
275. What is function overloading?
276. Can you have multiple functions with the same name?
277. What is a trigger?
278. When would you use a trigger?
279. What are the different types of triggers?
280. What is a `BEFORE` trigger?
281. What is an `AFTER` trigger?
282. What is an `INSTEAD OF` trigger?
283. How do you create a trigger?
284. What is a trigger function?
285. What special variables are available in trigger functions?
286. What is `NEW` in a trigger?
287. What is `OLD` in a trigger?
288. What is `TG_OP`?
289. How do you drop a trigger?
290. What are the performance implications of triggers?

---

### Advanced Queries

291. What is a Common Table Expression (CTE)?
292. How do you write a CTE using `WITH`?
293. What are the benefits of using CTEs?
294. What is a recursive CTE?
295. When would you use a recursive CTE?
296. 
```sql
WITH RECURSIVE numbers AS (
  SELECT 1 AS n
  UNION ALL
  SELECT n + 1 FROM numbers WHERE n < 10
)
SELECT * FROM numbers;
```
What does this query do?
297. What is a window function?
298. What is the difference between aggregate functions and window functions?
299. What is the `OVER` clause?
300. What is `PARTITION BY` in window functions?
301. What is `ORDER BY` in window functions?
302. What is `ROW_NUMBER()`?
303. What is `RANK()`?
304. What is `DENSE_RANK()`?
305. What is the difference between `RANK()` and `DENSE_RANK()`?
306. What is `LAG()`?
307. What is `LEAD()`?
308. What is `FIRST_VALUE()`?
309. What is `LAST_VALUE()`?
310. What is `NTILE()`?
311. What are frame clauses in window functions?
312. What is `ROWS BETWEEN`?
313. What is `RANGE BETWEEN`?
314. What is a lateral join?
315. What is the `LATERAL` keyword?
316. When would you use a lateral join?
317. What is `UNION`?
318. What is the difference between `UNION` and `UNION ALL`?
319. What is `INTERSECT`?
320. What is `EXCEPT`?

---

### JSON & JSONB

321. How do you store JSON data in PostgreSQL?
322. What operators can you use with JSON/JSONB?
323. What is the `->` operator?
324. What is the `->>` operator?
325. What is the difference between `->` and `->>`?
326. What is the `#>` operator?
327. What is the `#>>` operator?
328. How do you query nested JSON?
329. How do you check if a JSON key exists?
330. What is the `?` operator?
331. What is the `?&` operator?
332. What is the `?|` operator?
333. How do you create a GIN index on JSONB?
334. What is the `@>` operator (containment)?
335. What is the `<@` operator?
336. How do you update a JSONB field?
337. What is the `jsonb_set()` function?
338. How do you add a key to JSONB?
339. How do you remove a key from JSONB?
340. What is the `-` operator for JSONB?
341. How do you convert JSON to JSONB?
342. How do you convert JSONB to JSON?
343. What are the performance implications of JSON vs JSONB?
344. When should you use JSONB over a normalized table structure?
345. What are the limitations of using JSONB?

---

### Performance & Optimization

346. What is query optimization?
347. How do you identify slow queries?
348. What is the `pg_stat_statements` extension?
349. How do you enable query logging?
350. What is the `EXPLAIN` command used for?
351. What is the difference between `EXPLAIN` and `EXPLAIN ANALYZE`?
352. What is query planning?
353. What is the query planner?
354. What is the cost in an execution plan?
355. What is a sequential scan and when does it happen?
356. What is an index scan?
357. What is a bitmap heap scan?
358. What is a nested loop join?
359. What is a hash join?
360. What is a merge join?
361. Which join algorithm is fastest?
362. What is the `work_mem` parameter?
363. What is the `shared_buffers` parameter?
364. What is the `effective_cache_size` parameter?
365. How do you tune PostgreSQL for better performance?
366. What is `VACUUM`?
367. Why do you need to run `VACUUM`?
368. What is the difference between `VACUUM` and `VACUUM FULL`?
369. What is `ANALYZE`?
370. What does `VACUUM ANALYZE` do?
371. What is autovacuum?
372. Should you disable autovacuum?
373. What is table bloat?
374. How do you reduce table bloat?
375. What is connection pooling?
376. Why is connection pooling important?
377. What tools can you use for connection pooling? (PgBouncer, pgpool)
378. What is the maximum number of connections in PostgreSQL?
379. How do you increase the connection limit?
380. What are the drawbacks of too many connections?

---

### Backup & Recovery

381. Why is database backup important?
382. What are the different types of backups?
383. What is a logical backup?
384. What is a physical backup?
385. What is `pg_dump`?
386. How do you create a backup using `pg_dump`?
387. What is `pg_dumpall`?
388. What is the difference between `pg_dump` and `pg_dumpall`?
389. How do you restore a database from a backup?
390. What is `pg_restore`?
391. What is the difference between SQL dump and custom format?
392. What is continuous archiving?
393. What is Point-in-Time Recovery (PITR)?
394. What is Write-Ahead Logging (WAL)?
395. How does WAL work?
396. What is a WAL archive?
397. How do you configure WAL archiving?
398. What is a base backup?
399. How do you create a base backup?
400. What is `pg_basebackup`?
401. What is replication?
402. What is streaming replication?
403. What is logical replication?
404. What is the difference between physical and logical replication?
405. What is a primary server?
406. What is a standby server?
407. What is hot standby?
408. What is warm standby?
409. How do you set up replication?
410. What is failover?

---

### Security

411. How do you secure a PostgreSQL database?
412. What is authentication in PostgreSQL?
413. What is the `pg_hba.conf` file?
414. What authentication methods does PostgreSQL support?
415. What is password authentication?
416. What is MD5 authentication?
417. What is SCRAM authentication?
418. What is peer authentication?
419. What is trust authentication?
420. Should you use trust authentication in production?
421. What is SSL/TLS in PostgreSQL?
422. How do you enable SSL connections?
423. What are roles in PostgreSQL?
424. What is the difference between a role and a user?
425. How do you create a role?
426. How do you grant privileges?
427. What is the principle of least privilege?
428. What privileges can you grant?
429. What is `GRANT SELECT`?
430. What is `GRANT ALL PRIVILEGES`?
431. How do you revoke privileges?
432. What is row-level security (RLS)?
433. How do you enable row-level security?
434. What are policies in RLS?
435. How do you create a policy?
436. What is SQL injection?
437. How do you prevent SQL injection?
438. Should you use parameterized queries?
439. What is the danger of dynamic SQL?
440. How do you audit database access?

---

### Prisma Fundamentals

441. What is Prisma?
442. What is an ORM?
443. What problems does Prisma solve?
444. What are the main components of Prisma?
445. What is Prisma Client?
446. What is Prisma Migrate?
447. What is Prisma Studio?
448. How is Prisma different from other ORMs?
449. What databases does Prisma support?
450. How do you install Prisma?
451. How do you initialize Prisma in a project?
452. What is the `prisma` folder?
453. What is the `schema.prisma` file?
454. What is the Prisma schema language?
455. What are the main sections of a Prisma schema?
456. What is a datasource in Prisma?
457. What is a generator in Prisma?
458. What is a model in Prisma?
459. How do you define a model?
460. What is the `@id` attribute?
461. What is the `@unique` attribute?
462. What is the `@default` attribute?
463. What is `autoincrement()`?
464. What is `uuid()`?
465. What is `now()`?
466. What is the `@updatedAt` attribute?
467. What is the `@relation` attribute?
468. How do you define relationships in Prisma?
469. What is a one-to-one relationship?
470. What is a one-to-many relationship?
471. What is a many-to-many relationship?
472. How do you define a one-to-one relationship?
473. How do you define a one-to-many relationship?
474. How do you define a many-to-many relationship?
475. What is an implicit many-to-many relationship?
476. What is an explicit many-to-many relationship?
477. When should you use explicit vs implicit many-to-many?
478. What is the `@@id` attribute?
479. What is the `@@unique` attribute?
480. What is the `@@index` attribute?

---

### Prisma Client

481. What is Prisma Client?
482. How do you generate Prisma Client?
483. What is the `prisma generate` command?
484. How do you import Prisma Client?
485. How do you instantiate Prisma Client?
486. Should you create multiple instances of Prisma Client?
487. What is the recommended pattern for Prisma Client instantiation?
488. How do you create a record?
489. What is the `create()` method?
490. How do you create multiple records?
491. What is the `createMany()` method?
492. How do you read a single record?
493. What is the `findUnique()` method?
494. What is the `findFirst()` method?
495. What is the difference between `findUnique()` and `findFirst()`?
496. How do you read multiple records?
497. What is the `findMany()` method?
498. How do you filter results?
499. What is the `where` clause?
500. How do you use comparison operators in `where`?
501. What is `equals` in Prisma?
502. What is `not` in Prisma?
503. What is `in` in Prisma?
504. What is `notIn` in Prisma?
505. What is `lt`, `lte`, `gt`, `gte`?
506. What is `contains` in Prisma?
507. What is `startsWith` and `endsWith`?
508. What is `mode` in string filters?
509. How do you combine filters with `AND`, `OR`, `NOT`?
510. How do you sort results?
511. What is the `orderBy` clause?
512. How do you limit results?
513. What is the `take` clause?
514. What is the `skip` clause?
515. How do you implement pagination?
516. What is cursor-based pagination?
517. How do you select specific fields?
518. What is the `select` clause?
519. How do you include related data?
520. What is the `include` clause?
521. What is the difference between `select` and `include`?
522. Can you use `select` and `include` together?
523. How do you update a record?
524. What is the `update()` method?
525. How do you update multiple records?
526. What is the `updateMany()` method?
527. How do you upsert a record?
528. What is the `upsert()` method?
529. How do you delete a record?
530. What is the `delete()` method?
531. How do you delete multiple records?
532. What is the `deleteMany()` method?
533. How do you count records?
534. What is the `count()` method?
535. How do you aggregate data?
536. What is the `aggregate()` method?
537. What aggregations does Prisma support?
538. What is `_count`, `_sum`, `_avg`, `_min`, `_max`?
539. How do you group by in Prisma?
540. What is the `groupBy()` method?

---

### Prisma Migrations

541. What are database migrations?
542. Why do we need migrations?
543. What is Prisma Migrate?
544. How do you create a migration?
545. What is the `prisma migrate dev` command?
546. What does `prisma migrate dev` do?
547. What is a migration file?
548. Where are migration files stored?
549. What is the migration history?
550. What is the `_prisma_migrations` table?
551. How do you apply migrations in production?
552. What is the `prisma migrate deploy` command?
553. What is the difference between `migrate dev` and `migrate deploy`?
554. How do you reset the database?
555. What is the `prisma migrate reset` command?
556. What does `migrate reset` do?
557. How do you create an empty migration?
558. What is the `--create-only` flag?
559. How do you edit a migration before applying?
560. Can you modify migration files?
561. How do you resolve migration conflicts?
562. What is a baseline migration?
563. How do you handle existing databases?
564. What is the `prisma db pull` command?
565. What is introspection?
566. How do you introspect an existing database?
567. What is the difference between `db pull` and `db push`?
568. What is the `prisma db push` command?
569. When should you use `db push` vs `migrate dev`?
570. What are the risks of using `db push`?
571. How do you seed the database?
572. What is database seeding?
573. How do you create a seed file?
574. What is the `prisma db seed` command?
575. How do you configure the seed command?
576. What is schema drift?
577. How do you detect schema drift?
578. How do you fix schema drift?
579. What is the `prisma migrate diff` command?
580. How do you rollback a migration?

---

### Prisma Relations & Advanced Queries

581. How do you query related data?
582. What is nested reads?
583. How do you filter on related data?
584. How do you use `some`, `every`, `none` in relation filters?
585. What is the difference between `some` and `every`?
586. How do you create related records?
587. What is nested writes?
588. How do you use `create` in nested writes?
589. How do you use `connect` in nested writes?
590. How do you use `connectOrCreate`?
591. What is the difference between `create` and `connect`?
592. How do you update related records?
593. How do you use `update` in nested writes?
594. How do you use `disconnect` in nested writes?
595. How do you use `delete` in nested writes?
596. How do you use `set` in nested writes?
597. What is the difference between `disconnect` and `delete`?
598. How do you handle cascading deletes?
599. What is the `onDelete` attribute?
600. What are the different `onDelete` options?
601. What is `Cascade` in `onDelete`?
602. What is `SetNull` in `onDelete`?
603. What is `Restrict` in `onDelete`?
604. What is `NoAction` in `onDelete`?
605. How do you query many-to-many relationships?
606. How do you create records in many-to-many relationships?
607. How do you use explicit many-to-many relations?
608. What is a relation table?
609. How do you add extra fields to a many-to-many relation?
610. How do you query self-relations?

---

### Prisma with TypeScript

611. How does Prisma integrate with TypeScript?
612. What types does Prisma generate?
613. How do you type a Prisma model?
614. What is the `Prisma.UserCreateInput` type?
615. What is the `Prisma.UserUpdateInput` type?
616. What is the `Prisma.UserWhereInput` type?
617. What is the `Prisma.UserWhereUniqueInput` type?
618. How do you type a function that accepts Prisma input?
619. How do you type the return value of Prisma queries?
620. What is the `Prisma.PromiseReturnType` utility?
621. How do you extract types from Prisma Client?
622. What is the `Prisma.UserGetPayload` type?
623. How do you type a query result with includes?
624. How do you type a query result with selects?
625. How do you create custom types from Prisma models?
626. How do you extend Prisma models with additional fields?
627. How do you type middleware?
628. How do you type Prisma extensions?
629. What is type safety in Prisma?
630. How does Prisma ensure type safety?

---

### Prisma Advanced Features

631. What are Prisma middlewares?
632. How do you create a middleware?
633. What is the `$use()` method?
634. What are common use cases for middleware?
635. How do you implement soft deletes with middleware?
636. How do you log queries with middleware?
637. What is the execution order of multiple middlewares?
638. What are Prisma Client extensions?
639. How do you create a Prisma Client extension?
640. What is the `$extends()` method?
641. What can you extend with Prisma extensions?
642. How do you add custom methods to models?
643. How do you add custom query methods?
644. What are computed fields?
645. How do you add computed fields?
646. What is the `result` component in extensions?
647. What is the `query` component in extensions?
648. What is the `model` component in extensions?
649. What is the `client` component in extensions?
650. How do you share extensions across projects?

---

### Prisma Performance & Best Practices

651. How do you optimize Prisma queries?
652. What is the N+1 query problem?
653. How does Prisma solve the N+1 problem?
654. What is query batching?
655. What is the `findUnique` optimization?
656. Should you use `select` to limit fields?
657. How do you use indexes with Prisma?
658. How do you define indexes in the schema?
659. What is connection pooling in Prisma?
660. How do you configure connection pooling?
661. What is the connection limit?
662. What is Prisma Data Proxy?
663. When should you use Prisma Data Proxy?
664. What are the benefits of Prisma Data Proxy?
665. What is Prisma Accelerate?
666. What is query caching?
667. How does Prisma Accelerate improve performance?
668. What is the `cacheStrategy` option?
669. What are Prisma best practices?
670. Should you commit the Prisma Client to version control?
671. Should you commit migration files?
672. How do you handle Prisma Client in serverless environments?
673. What is the cold start problem?
674. How do you minimize cold starts with Prisma?
675. Should you use `prisma generate` in production?
676. How do you handle database connections in serverless?
677. What is the recommended connection pool size?
678. How do you handle transactions in Prisma?
679. What is the `$transaction()` method?
680. What are interactive transactions?

---

### Prisma with Frameworks

681. How do you use Prisma with Next.js?
682. How do you use Prisma with Express?
683. How do you use Prisma with NestJS?
684. How do you use Prisma with tRPC?
685. How do you use Prisma with GraphQL?
686. What is Prisma with Nexus?
687. What is Prisma with Apollo Server?
688. How do you use Prisma with REST APIs?
689. How do you structure a Prisma project?
690. Where should you place the Prisma Client instance?
691. How do you handle Prisma in API routes?
692. How do you handle errors in Prisma?
693. What errors can Prisma throw?
694. What is `PrismaClientKnownRequestError`?
695. What is `PrismaClientUnknownRequestError`?
696. What is `PrismaClientValidationError`?
697. How do you catch Prisma errors?
698. How do you handle unique constraint violations?
699. What is the error code for unique constraint violation?
700. How do you implement error handling middleware?

---

### Real-World Scenarios

701. How do you implement authentication with Prisma?
702. How do you store passwords securely?
703. How do you implement user sessions?
704. How do you implement role-based access control (RBAC)?
705. How do you implement multi-tenancy?
706. What is row-level security with Prisma?
707. How do you implement soft deletes?
708. How do you implement audit logs?
709. How do you implement full-text search?
710. How do you implement pagination?
711. How do you implement infinite scroll?
712. How do you implement sorting and filtering?
713. How do you implement search functionality?
714. How do you handle file uploads with Prisma?
715. How do you store file metadata?
716. How do you implement tags/categories?
717. How do you implement likes/favorites?
718. How do you implement comments system?
719. How do you implement notifications?
720. How do you implement real-time updates?
721. How do you handle time zones?
722. How do you implement data versioning?
723. How do you implement data archiving?
724. How do you migrate from another ORM to Prisma?
725. How do you migrate from Sequelize to Prisma?
726. How do you migrate from TypeORM to Prisma?
727. How do you test Prisma queries?
728. How do you mock Prisma Client?
729. How do you set up a test database?
730. How do you reset the database between tests?
