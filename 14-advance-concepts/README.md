### Connection Pooling in Serverless Environments

1. What is connection pooling?
2. Why is connection pooling important in traditional server environments?
3. What is the problem with connection pooling in serverless environments?
4. What is a cold start in serverless functions?
5. What happens to database connections during a cold start?
6. Why do serverless functions create new database connections on each invocation?
7. What is connection exhaustion?
8. What is the maximum number of connections in PostgreSQL by default?
9. What happens when you exceed the maximum connection limit?
10. What is the "too many connections" error?
11. How do traditional connection pools work?
12. What is the difference between connection pooling in Express vs serverless?
13. What is a connection pool manager? (pg-pool, mysql2 pool)
14. Why doesn't traditional connection pooling work well in serverless?
15. What is the Lambda execution context?
16. How long does a Lambda execution context stay alive?
17. What is container reuse in AWS Lambda?
18. How can you leverage container reuse for connection pooling?
19. What is the global scope pattern in Lambda?
20. 
```js
let pool;

export const handler = async (event) => {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  // use pool
};
```
Explain this pattern. Does it solve the connection pooling problem?

21. What is Prisma Data Proxy?
22. How does Prisma Data Proxy solve connection pooling issues?
23. What is PgBouncer?
24. How does PgBouncer work?
25. What is the difference between session pooling and transaction pooling in PgBouncer?
26. What is statement pooling in PgBouncer?
27. Which pooling mode should you use for serverless? (session, transaction, statement)
28. What is Supabase connection pooling?
29. What is the difference between direct connection and pooled connection in Supabase?
30. What port does Supabase use for pooled connections?
31. What is Neon serverless driver?
32. How does Neon solve the connection pooling problem?
33. What is HTTP-based database access?
34. What is the `@neondatabase/serverless` package?
35. How does it work over HTTP/WebSockets?
36. What is PlanetScale?
37. How does PlanetScale handle connections in serverless?
38. What is the PlanetScale serverless driver?
39. What is connection string pooling?
40. What is the `?pgbouncer=true` parameter in connection strings?
41. 
```
DATABASE_URL="postgresql://user:pass@host:5432/db"
DATABASE_URL_POOLED="postgresql://user:pass@host:6543/db?pgbouncer=true"
```
Explain the difference between these two connection strings.

42. What is the Prisma connection limit recommendation for serverless?
43. What is the `connection_limit` parameter in Prisma?
44. 
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DATABASE_URL_UNPOOLED")
}
```
What is the `directUrl` field used for?

45. When should you use `directUrl` vs `url` in Prisma?
46. What is the recommended connection limit formula for serverless?
47. How do you calculate the right number of connections?
48. What is the impact of concurrent Lambda executions on connections?
49. What is RDS Proxy?
50. How does RDS Proxy solve connection pooling for serverless?
51. What is connection multiplexing?
52. What is the cost implication of RDS Proxy?
53. What is the cold start penalty with database connections?
54. How do you minimize connection overhead in serverless?
55. What is the `?connection_limit=1` parameter?
56. Should each Lambda have only 1 connection?
57. What is the trade-off between connection limit and performance?
58. What is connection timeout?
59. How do you configure connection timeout in Prisma?
60. What is idle connection cleanup?

---

### Docker Bind Mounts

61. What is a bind mount in Docker?
62. What is the difference between a volume and a bind mount?
63. When should you use bind mounts?
64. When should you use volumes?
65. What is the syntax for creating a bind mount?
66. 
```bash
docker run -v /host/path:/container/path nginx
```
Is this a bind mount or a volume?

67. 
```bash
docker run -v $(pwd):/app node
```
What does this command do?

68. What is the `--mount` syntax for bind mounts?
69. 
```bash
docker run --mount type=bind,source=/host/path,target=/container/path nginx
```
Explain this command.

70. What is the difference between `-v` and `--mount` syntax?
71. Which syntax is recommended for bind mounts?
72. What is the `readonly` option in bind mounts?
73. 
```bash
docker run -v $(pwd):/app:ro node
```
What does `:ro` mean?

74. What is the use case for read-only bind mounts?
75. What is the problem with file permissions in bind mounts?
76. What is the UID/GID mismatch issue?
77. How do file permissions work between host and container?
78. What is the `USER` instruction in Dockerfile?
79. How do you fix permission issues with bind mounts?
80. What is the `--user` flag in docker run?
81. 
```bash
docker run --user $(id -u):$(id -g) -v $(pwd):/app node
```
What does this command do?

82. What is the performance difference between bind mounts and volumes?
83. Are bind mounts slower than volumes?
84. What is the performance issue on macOS and Windows?
85. What is osxfs?
86. What is the performance impact of bind mounts on macOS?
87. How do you improve bind mount performance on macOS?
88. What is the `:cached` option?
89. What is the `:delegated` option?
90. What is the `:consistent` option?
91. 
```bash
docker run -v $(pwd):/app:cached node
```
What does `:cached` do?

92. What is the difference between `:cached` and `:delegated`?
93. Should you use these options on Linux?
94. What is the use case for bind mounts in development?
95. How do you use bind mounts for hot reload?
96. What is the typical development workflow with bind mounts?
97. 
```yaml
services:
  web:
    build: .
    volumes:
      - .:/app
      - /app/node_modules
```
Explain this docker-compose.yml configuration.

98. Why do we need the `/app/node_modules` volume?
99. What is an anonymous volume?
100. How does the anonymous volume prevent overwriting node_modules?
101. What is volume precedence in Docker?
102. What happens when you have overlapping volumes?
103. What is the bind mount use case in production?
104. Should you use bind mounts in production?
105. What are the security implications of bind mounts?
106. What is the `--mount` `bind-propagation` option?
107. What are the bind propagation modes? (rprivate, private, rshared, shared, rslave, slave)
108. What is the default bind propagation mode?
109. What is the `--mount` `consistency` option?
110. How do you bind mount a single file?
111. 
```bash
docker run -v $(pwd)/.env:/app/.env:ro node
```
What does this do?

112. What is the problem with bind mounting single files?
113. What happens if the file doesn't exist on the host?
114. How do you bind mount multiple directories?
115. What is the use case for bind mounting source code?
116. How do you exclude files from bind mounts?
117. What is the `.dockerignore` file?
118. Does `.dockerignore` affect bind mounts?
119. How do you watch for file changes with bind mounts?
120. What is nodemon with bind mounts?

---

### Authentication Using Cookies

121. What is cookie-based authentication?
122. What is the difference between cookie-based and token-based authentication?
123. What is a session cookie?
124. What is a persistent cookie?
125. What is the `Set-Cookie` header?
126. How do you set a cookie in Express?
127. 
```js
res.cookie('token', 'abc123', { httpOnly: true });
```
What does this code do?

128. What is the `httpOnly` flag?
129. Why is `httpOnly` important for security?
130. What is the `secure` flag?
131. What does `secure: true` do?
132. Should you use `secure: true` in development?
133. What is the `sameSite` attribute?
134. What are the `sameSite` values? (Strict, Lax, None)
135. What is the difference between `sameSite: 'Strict'` and `sameSite: 'Lax'`?
136. What is CSRF (Cross-Site Request Forgery)?
137. How does `sameSite` prevent CSRF attacks?
138. What is the `sameSite: 'None'` use case?
139. What is required when using `sameSite: 'None'`?
140. 
```js
res.cookie('token', 'abc123', {
  httpOnly: true,
  secure: true,
  sameSite: 'Strict',
  maxAge: 24 * 60 * 60 * 1000
});
```
Explain this cookie configuration.

141. What is the `maxAge` option?
142. What is the `expires` option?
143. What is the difference between `maxAge` and `expires`?
144. What is the `domain` option?
145. What is the `path` option?
146. What is the default path for cookies?
147. How do you read cookies in Express?
148. What is the `cookie-parser` middleware?
149. 
```js
app.use(cookieParser());
app.get('/profile', (req, res) => {
  const token = req.cookies.token;
});
```
Explain this code.

150. What is a signed cookie?
151. How do you sign cookies in Express?
152. What is the `secret` in cookie-parser?
153. 
```js
app.use(cookieParser('my-secret-key'));
res.cookie('user', 'john', { signed: true });
```
What does `signed: true` do?

154. How do you read signed cookies?
155. What is `req.signedCookies`?
156. What is the benefit of signed cookies?
157. Can signed cookies be read by the client?
158. What is the difference between signed and encrypted cookies?
159. How do you delete a cookie?
160. 
```js
res.clearCookie('token');
```
What does this do?

161. What is session-based authentication?
162. What is the `express-session` middleware?
163. How do you set up sessions in Express?
164. 
```js
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}));
```
Explain this session configuration.

165. What is the `resave` option?
166. What is the `saveUninitialized` option?
167. Where are sessions stored by default?
168. What is the problem with in-memory session storage?
169. What is a session store?
170. What are popular session stores? (Redis, MongoDB, PostgreSQL)
171. How do you use Redis as a session store?
172. What is `connect-redis`?
173. What is the session ID?
174. Where is the session ID stored?
175. What is the `connect.sid` cookie?
176. How does session-based authentication work?
177. What is the flow of session authentication?
178. What is the difference between stateless and stateful authentication?
179. Is cookie-based authentication stateless or stateful?
180. Is JWT authentication stateless or stateful?
181. What are the advantages of cookie-based authentication?
182. What are the disadvantages of cookie-based authentication?
183. What is the XSS (Cross-Site Scripting) risk with cookies?
184. How does `httpOnly` prevent XSS?
185. Can JavaScript access `httpOnly` cookies?
186. What is the CSRF risk with cookies?
187. How do you prevent CSRF attacks?
188. What is a CSRF token?
189. What is the `csurf` middleware?
190. How do you implement CSRF protection?
191. What is the double-submit cookie pattern?
192. What is cookie prefixing?
193. What is the `__Secure-` prefix?
194. What is the `__Host-` prefix?
195. What are the requirements for `__Host-` prefix?
196. How do you handle cookies in Next.js?
197. What is the `cookies()` function in Next.js App Router?
198. How do you set cookies in Next.js Server Actions?
199. How do you handle cookies in API routes?
200. What is the `Set-Cookie` header in Next.js?

---

### CSR vs SSG vs SSR vs ISR

201. What is CSR (Client-Side Rendering)?
202. What is SSR (Server-Side Rendering)?
203. What is SSG (Static Site Generation)?
204. What is ISR (Incremental Static Regeneration)?
205. What is the difference between CSR and SSR?
206. What is the difference between SSG and SSR?
207. What is the difference between SSG and ISR?
208. When should you use CSR?
209. When should you use SSR?
210. When should you use SSG?
211. When should you use ISR?
212. What is the performance difference between CSR and SSR?
213. What is Time to First Byte (TTFB)?
214. What is First Contentful Paint (FCP)?
215. What is Time to Interactive (TTI)?
216. Which rendering method has the best TTFB?
217. Which rendering method has the best FCP?
218. Which rendering method has the best TTI?
219. What is hydration?
220. What is the hydration process in SSR?
221. What is the hydration mismatch error?
222. What causes hydration mismatch?
223. How do you fix hydration mismatch?
224. What is the SEO benefit of SSR?
225. What is the SEO benefit of SSG?
226. Can CSR apps be SEO-friendly?
227. What is the problem with CSR for SEO?
228. What are web crawlers?
229. Do web crawlers execute JavaScript?
230. What is Googlebot?
231. Does Googlebot execute JavaScript?
232. What is the rendering budget?
233. What is the cost of SSR?
234. What is the cost of SSG?
235. What is the cost of CSR?
236. What is the server load comparison?
237. What is the build time for SSG?
238. What happens if you have 10,000 pages with SSG?
239. What is the stale-while-revalidate pattern?
240. How does ISR implement stale-while-revalidate?
241. What is the `revalidate` option in Next.js?
242. 
```js
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

export const revalidate = 60;
```
Explain this Next.js configuration.

243. What happens after 60 seconds with `revalidate: 60`?
244. What is on-demand revalidation?
245. How do you trigger on-demand revalidation in Next.js?
246. What is the `revalidatePath` function?
247. What is the `revalidateTag` function?
248. What is the difference between `revalidatePath` and `revalidateTag`?
249. What is the cache tag system in Next.js?
250. How do you use cache tags?
251. What is the `getStaticProps` function in Next.js Pages Router?
252. What is the `getServerSideProps` function?
253. What is the `getStaticPaths` function?
254. What is the difference between `getStaticProps` and `getServerSideProps`?
255. What is fallback in `getStaticPaths`?
256. What is `fallback: false`?
257. What is `fallback: true`?
258. What is `fallback: 'blocking'`?
259. What is the difference between `fallback: true` and `fallback: 'blocking'`?
260. When should you use each fallback option?
261. What is the App Router in Next.js 13+?
262. How is rendering different in App Router?
263. What are Server Components?
264. What are Client Components?
265. What is the `'use client'` directive?
266. What is the default rendering in App Router?
267. Are Server Components rendered on the server or client?
268. Can Server Components fetch data?
269. What is the `fetch` API in Server Components?
270. What is the `cache` option in fetch?
271. 
```js
const data = await fetch('https://api.example.com', {
  cache: 'force-cache'
});
```
What does `cache: 'force-cache'` do?

272. What is `cache: 'no-store'`?
273. What is the difference between `force-cache` and `no-store`?
274. What is the `next.revalidate` option?
275. 
```js
const data = await fetch('https://api.example.com', {
  next: { revalidate: 3600 }
});
```
What does this do?

276. What is the difference between page-level and fetch-level revalidation?
277. What is the `dynamic` route segment config?
278. What is `export const dynamic = 'force-static'`?
279. What is `export const dynamic = 'force-dynamic'`?
280. What is `export const dynamic = 'auto'`?

---

### Advanced Authentication Patterns

281. What is JWT (JSON Web Token)?
282. What is the structure of a JWT?
283. What are the three parts of a JWT?
284. What is the header in JWT?
285. What is the payload in JWT?
286. What is the signature in JWT?
287. How is a JWT signature created?
288. What is the algorithm used for JWT signing? (HS256, RS256)
289. What is the difference between HS256 and RS256?
290. What is symmetric vs asymmetric encryption?
291. When should you use HS256?
292. When should you use RS256?
293. How do you create a JWT in Node.js?
294. What is the `jsonwebtoken` library?
295. 
```js
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 123 }, 'secret', { expiresIn: '1h' });
```
Explain this code.

296. What is the `expiresIn` option?
297. How do you verify a JWT?
298. 
```js
const decoded = jwt.verify(token, 'secret');
```
What does this return?

299. What happens if the token is invalid?
300. What happens if the token is expired?
301. Where should you store JWT on the client?
302. Should you store JWT in localStorage?
303. What is the XSS risk with localStorage?
304. Should you store JWT in cookies?
305. What is the CSRF risk with cookies?
306. What is the httpOnly cookie + JWT pattern?
307. What is the access token + refresh token pattern?
308. What is an access token?
309. What is a refresh token?
310. What is the lifetime of an access token?
311. What is the lifetime of a refresh token?
312. How does the refresh token flow work?
313. Where should you store the refresh token?
314. What is token rotation?
315. What is the refresh token rotation pattern?
316. What is OAuth 2.0?
317. What is OpenID Connect (OIDC)?
318. What is the difference between OAuth and OIDC?
319. What is an OAuth provider?
320. What are popular OAuth providers? (Google, GitHub, Facebook)
321. What is NextAuth.js?
322. What is Auth.js (formerly NextAuth)?
323. How do you set up NextAuth in Next.js?
324. What is a session strategy in NextAuth?
325. What is the difference between JWT and database session strategy?
326. What is the `session` callback in NextAuth?
327. What is the `jwt` callback in NextAuth?
328. What is Clerk?
329. What is Supabase Auth?
330. What is Firebase Authentication?
331. What is the difference between authentication and authorization?
332. What is RBAC (Role-Based Access Control)?
333. What is ABAC (Attribute-Based Access Control)?
334. How do you implement RBAC?
335. What is a permission system?
336. What is the difference between roles and permissions?
337. What is middleware-based authentication?
338. How do you protect routes in Next.js?
339. What is the middleware.ts file in Next.js?
340. How do you implement authentication middleware?

---

### Advanced Database Concepts

341. What is database indexing?
342. What is a B-tree index?
343. What is a hash index?
344. When should you create an index?
345. What is the cost of indexing?
346. What is a composite index?
347. What is index selectivity?
348. What is a covering index?
349. What is the EXPLAIN command?
350. How do you analyze query performance?
351. What is a sequential scan?
352. What is an index scan?
353. Which is faster: sequential scan or index scan?
354. What is query optimization?
355. What is the N+1 query problem?
356. How do you solve the N+1 problem?
357. What is eager loading?
358. What is lazy loading?
359. What is the `include` option in Prisma?
360. 
```js
const users = await prisma.user.findMany({
  include: { posts: true }
});
```
What does this do?

361. What is the `select` option in Prisma?
362. What is the difference between `include` and `select`?
363. What is database normalization?
364. What is denormalization?
365. When should you denormalize?
366. What is a materialized view?
367. What is the difference between a view and a materialized view?
368. What is database sharding?
369. What is horizontal partitioning?
370. What is vertical partitioning?
371. What is read replica?
372. What is the primary-replica pattern?
373. What is eventual consistency?
374. What is strong consistency?
375. What is the CAP theorem?
376. What is ACID?
377. What is BASE?
378. What is a database transaction?
379. What is transaction isolation?
380. What are the isolation levels? (Read Uncommitted, Read Committed, Repeatable Read, Serializable)
381. What is a deadlock?
382. How do you prevent deadlocks?
383. What is optimistic locking?
384. What is pessimistic locking?
385. What is the `version` field pattern?
386. How do you implement optimistic locking in Prisma?
387. What is database migration?
388. What is the difference between schema migration and data migration?
389. How do you handle migrations in production?
390. What is zero-downtime migration?
391. What is the expand-contract pattern?
392. What is a blue-green deployment for databases?
393. What is database backup?
394. What is point-in-time recovery?
395. What is WAL (Write-Ahead Logging)?
396. What is database replication?
397. What is synchronous replication?
398. What is asynchronous replication?
399. What is the replication lag?
400. How do you handle replication lag?

---

### Caching Strategies

401. What is caching?
402. Why is caching important?
403. What is cache invalidation?
404. What is the cache invalidation problem?
405. What are the two hard things in computer science?
406. What is a cache hit?
407. What is a cache miss?
408. What is the cache hit ratio?
409. What is TTL (Time To Live)?
410. What is the LRU (Least Recently Used) eviction policy?
411. What is the LFU (Least Frequently Used) eviction policy?
412. What is the FIFO (First In First Out) eviction policy?
413. What is in-memory caching?
414. What is distributed caching?
415. What is Redis?
416. What is Memcached?
417. What is the difference between Redis and Memcached?
418. What data structures does Redis support?
419. What is the Redis STRING type?
420. What is the Redis HASH type?
421. What is the Redis LIST type?
422. What is the Redis SET type?
423. What is the Redis SORTED SET type?
424. How do you set a value in Redis?
425. 
```js
await redis.set('user:123', JSON.stringify(user), 'EX', 3600);
```
Explain this Redis command.

426. What is the `EX` option?
427. How do you get a value from Redis?
428. How do you delete a value from Redis?
429. What is the `DEL` command?
430. What is cache-aside pattern?
431. What is read-through caching?
432. What is write-through caching?
433. What is write-behind caching?
434. What is the difference between cache-aside and read-through?
435. When should you use each caching pattern?
436. What is the stale-while-revalidate pattern?
437. What is CDN caching?
438. What is edge caching?
439. What is browser caching?
440. What is the `Cache-Control` header?
441. What is `Cache-Control: max-age=3600`?
442. What is `Cache-Control: no-cache`?
443. What is `Cache-Control: no-store`?
444. What is the difference between `no-cache` and `no-store`?
445. What is the `ETag` header?
446. What is the `If-None-Match` header?
447. How does ETag-based caching work?
448. What is the `Last-Modified` header?
449. What is the `If-Modified-Since` header?
450. What is the 304 Not Modified response?
451. What is cache warming?
452. What is cache stampede?
453. How do you prevent cache stampede?
454. What is the lock pattern for cache?
455. What is cache tagging?
456. How do you invalidate related cache entries?
457. What is the cache key strategy?
458. How do you design good cache keys?
459. What is cache namespace?
460. What is the thundering herd problem?

---

### API Design & Best Practices

461. What is REST?
462. What are the REST constraints?
463. What is a RESTful API?
464. What are the HTTP methods? (GET, POST, PUT, PATCH, DELETE)
465. What is the difference between PUT and PATCH?
466. What is idempotency?
467. Which HTTP methods are idempotent?
468. What is the difference between POST and PUT?
469. What are HTTP status codes?
470. What is the 2xx status code range?
471. What is the 3xx status code range?
472. What is the 4xx status code range?
473. What is the 5xx status code range?
474. What is 200 OK?
475. What is 201 Created?
476. What is 204 No Content?
477. What is 400 Bad Request?
478. What is 401 Unauthorized?
479. What is 403 Forbidden?
480. What is 404 Not Found?
481. What is 409 Conflict?
482. What is 422 Unprocessable Entity?
483. What is 429 Too Many Requests?
484. What is 500 Internal Server Error?
485. What is 502 Bad Gateway?
486. What is 503 Service Unavailable?
487. What is API versioning?
488. What are the API versioning strategies?
489. What is URL versioning? (`/api/v1/users`)
490. What is header versioning?
491. What is query parameter versioning?
492. Which versioning strategy is most common?
493. What is pagination?
494. What is offset-based pagination?
495. What is cursor-based pagination?
496. What is the difference between offset and cursor pagination?
497. When should you use cursor pagination?
498. What is the `limit` and `offset` pattern?
499. What is the `next` and `previous` cursor pattern?
500. What is API rate limiting?
501. What is the token bucket algorithm?
502. What is the leaky bucket algorithm?
503. What is the fixed window algorithm?
504. What is the sliding window algorithm?
505. What is the `X-RateLimit-Limit` header?
506. What is the `X-RateLimit-Remaining` header?
507. What is the `X-RateLimit-Reset` header?
508. What is the `Retry-After` header?
509. What is API documentation?
510. What is OpenAPI (Swagger)?
511. What is the OpenAPI Specification?
512. What is Swagger UI?
513. What is API error handling?
514. What is a consistent error response format?
515. 
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "field": "email"
  }
}
```
Is this a good error response format?

516. What is the problem domain error vs system error?
517. What is request validation?
518. What is the `zod` library?
519. What is the `joi` library?
520. How do you validate request body?

---

### Performance Optimization

521. What is lazy loading?
522. What is code splitting?
523. What is dynamic import?
524. 
```js
const Component = lazy(() => import('./Component'));
```
What does this do in React?

525. What is the `React.lazy` function?
526. What is the `Suspense` component?
527. What is route-based code splitting?
528. What is component-based code splitting?
529. What is tree shaking?
530. What is dead code elimination?
531. What is bundle size optimization?
532. What is the `webpack-bundle-analyzer`?
533. What is minification?
534. What is uglification?
535. What is gzip compression?
536. What is brotli compression?
537. What is the difference between gzip and brotli?
538. What is image optimization?
539. What is the Next.js Image component?
540. What is lazy loading images?
541. What is the `loading="lazy"` attribute?
542. What is the Intersection Observer API?
543. What is prefetching?
544. What is the `<link rel="prefetch">` tag?
545. What is the `<link rel="preload">` tag?
546. What is the difference between prefetch and preload?
547. What is DNS prefetching?
548. What is preconnect?
549. What is the Critical Rendering Path?
550. What is render-blocking resources?
551. What is the `async` attribute for scripts?
552. What is the `defer` attribute for scripts?
553. What is the difference between `async` and `defer`?
554. What is the `font-display` CSS property?
555. What is FOIT (Flash of Invisible Text)?
556. What is FOUT (Flash of Unstyled Text)?
557. What is the `font-display: swap` strategy?
558. What is resource hints?
559. What is the Performance API?
560. What is the `performance.now()` method?
561. What are Web Vitals?
562. What is LCP (Largest Contentful Paint)?
563. What is FID (First Input Delay)?
564. What is CLS (Cumulative Layout Shift)?
565. What is a good LCP score?
566. What is a good FID score?
567. What is a good CLS score?
568. How do you measure Web Vitals?
569. What is Lighthouse?
570. What is the Chrome User Experience Report?
571. What is debouncing?
572. What is throttling?
573. What is the difference between debounce and throttle?
574. When should you use debounce?
575. When should you use throttle?
576. 
```js
const debouncedSearch = debounce((query) => {
  fetchResults(query);
}, 300);
```
Explain this code.

577. What is memoization?
578. What is the `useMemo` hook?
579. What is the `useCallback` hook?
580. When should you use `useMemo`?

---

### Security Best Practices

581. What is HTTPS?
582. What is TLS/SSL?
583. Why is HTTPS important?
584. What is a man-in-the-middle attack?
585. What is XSS (Cross-Site Scripting)?
586. What are the types of XSS? (Stored, Reflected, DOM-based)
587. How do you prevent XSS?
588. What is input sanitization?
589. What is output encoding?
590. What is Content Security Policy (CSP)?
591. What is the `Content-Security-Policy` header?
592. What is CSRF (Cross-Site Request Forgery)?
593. How do you prevent CSRF?
594. What is the SameSite cookie attribute?
595. What is SQL injection?
596. How do you prevent SQL injection?
597. What are prepared statements?
598. What is parameterized query?
599. What is NoSQL injection?
600. How do you prevent NoSQL injection?
601. What is the principle of least privilege?
602. What is defense in depth?
603. What is security by obscurity?
604. Why is security by obscurity bad?
605. What is CORS (Cross-Origin Resource Sharing)?
606. What is the Same-Origin Policy?
607. What is a CORS preflight request?
608. What is the `Access-Control-Allow-Origin` header?
609. What is the `Access-Control-Allow-Methods` header?
610. What is the `Access-Control-Allow-Headers` header?
611. What is the `Access-Control-Allow-Credentials` header?
612. What is the security risk of `Access-Control-Allow-Origin: *`?
613. What is password hashing?
614. What is bcrypt?
615. What is the salt in password hashing?
616. What is the cost factor in bcrypt?
617. How many rounds should you use for bcrypt?
618. What is argon2?
619. What is the difference between bcrypt and argon2?
620. What is password validation?
621. What is a strong password policy?
622. What is rate limiting for login attempts?
623. What is account lockout?
624. What is two-factor authentication (2FA)?
625. What is multi-factor authentication (MFA)?
626. What is TOTP (Time-based One-Time Password)?
627. What is the `speakeasy` library?
628. What is environment variable security?
629. Should you commit `.env` files?
630. What is the `.env.example` pattern?
631. What is secret management?
632. What are secret management tools? (AWS Secrets Manager, HashiCorp Vault)
633. What is the principle of least exposure?
634. What is security headers?
635. What is the `X-Frame-Options` header?
636. What is clickjacking?
637. What is the `X-Content-Type-Options` header?
638. What is MIME sniffing?
639. What is the `Strict-Transport-Security` header?
640. What is HSTS (HTTP Strict Transport Security)?

---

### Real-World Scenarios & Code Examples

641. 
```js
// Connection pooling in serverless
import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
```
Explain this pattern. Why is it different for production vs development?

642. 
```dockerfile
# Bind mount example
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
```
How would you use this with bind mounts for development?

643. 
```yaml
# docker-compose.yml
services:
  app:
    build: .
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "3000:3000"
```
Explain why we need both volume mounts.

644. 
```js
// Cookie authentication
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
  
  res.json({ message: 'Logged in successfully' });
});
```
Explain this login implementation.

645. 
```js
// Authentication middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

app.get('/profile', authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user);
});
```
Explain this authentication flow.

646. 
```js
// Next.js ISR
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export const revalidate = 3600; // Revalidate every hour

export default async function Post({ params }) {
  const post = await getPost(params.slug);
  return <div>{post.title}</div>;
}
```
Explain how ISR works in this example.

647. 
```js
// Redis caching
async function getUser(userId) {
  const cacheKey = `user:${userId}`;
  
  // Try cache first
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // Cache miss - fetch from database
  const user = await db.user.findUnique({ where: { id: userId } });
  
  // Store in cache
  await redis.set(cacheKey, JSON.stringify(user), 'EX', 3600);
  
  return user;
}
```
Explain this caching pattern.

648. 
```js
// N+1 problem
// Bad
const users = await prisma.user.findMany();
for (const user of users) {
  const posts = await prisma.post.findMany({ where: { authorId: user.id } });
  user.posts = posts;
}

// Good
const users = await prisma.user.findMany({
  include: { posts: true }
});
```
Explain the N+1 problem and the solution.

649. 
```js
// Debounce implementation
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const handleSearch = debounce((query) => {
  fetchSearchResults(query);
}, 300);
```
Explain how debounce works.

650. 
```js
// Rate limiting with Redis
async function checkRateLimit(userId) {
  const key = `rate_limit:${userId}`;
  const limit = 100; // 100 requests
  const window = 60; // per 60 seconds
  
  const current = await redis.incr(key);
  
  if (current === 1) {
    await redis.expire(key, window);
  }
  
  if (current > limit) {
    throw new Error('Rate limit exceeded');
  }
  
  return { remaining: limit - current };
}
```
Explain this rate limiting implementation.

---

### Advanced Concepts Integration

651. How do you combine SSR with Redis caching?
652. How do you implement authentication in a serverless environment?
653. How do you handle database connections in Docker containers?
654. What is the best practice for managing secrets in Docker?
655. How do you implement CSRF protection with cookie-based auth?
656. How do you optimize database queries in SSR pages?
657. What is the impact of connection pooling on serverless cold starts?
658. How do you implement session management in a distributed system?
659. What is the best caching strategy for SSG pages?
660. How do you handle cache invalidation in ISR?
661. What is the security consideration for bind mounts in production?
662. How do you implement rate limiting in a serverless API?
663. What is the best practice for error handling in SSR?
664. How do you optimize images in SSG?
665. What is the impact of hydration on performance?
666. How do you implement progressive enhancement?
667. What is the graceful degradation strategy?
668. How do you handle real-time updates with SSG?
669. What is the WebSocket consideration in serverless?
670. How do you implement optimistic UI updates?
671. What is the offline-first strategy?
672. How do you implement service workers with SSR?
673. What is the PWA (Progressive Web App) pattern?
674. How do you handle authentication state in SSR?
675. What is the flash of unauthenticated content problem?
676. How do you prevent layout shift in SSR?
677. What is the streaming SSR pattern?
678. How do you implement partial hydration?
679. What is islands architecture?
680. How do you optimize bundle size in SSR apps?
681. What is the code splitting strategy for SSR?
682. How do you implement A/B testing in SSG?
683. What is the edge computing pattern?
684. How do you use edge functions with SSR?
685. What is the middleware pattern in Next.js?
686. How do you implement geolocation-based rendering?
687. What is the personalization strategy in SSG?
688. How do you handle user-specific content in SSG?
689. What is the hybrid rendering approach?
690. How do you choose between SSR, SSG, and ISR for different pages?

---

### Final Advanced Challenges

691. Design a scalable authentication system using cookies, Redis sessions, and connection pooling for a serverless Next.js application.

692. Implement a caching strategy that combines CDN caching, Redis caching, and ISR for optimal performance.

693. Create a Docker development environment with bind mounts that supports hot reload for both frontend and backend.

694. Design a database architecture that handles connection pooling efficiently across 100+ concurrent serverless functions.

695. Implement a secure API with rate limiting, CSRF protection, and JWT-based authentication.

696. Create a hybrid rendering strategy that uses SSG for public pages, SSR for personalized pages, and CSR for interactive features.

697. Design a migration strategy from CSR to SSR without breaking existing functionality.

698. Implement a multi-tenant application with row-level security and connection pooling.

699. Create a performance monitoring system that tracks Web Vitals across SSR, SSG, and CSR pages.

700. Design a zero-downtime deployment strategy for a database-backed SSR application with connection pooling considerations.
