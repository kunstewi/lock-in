### Nginx Fundamentals

1. What is Nginx?
2. What does Nginx stand for?
3. Who created Nginx and when?
4. What is the main purpose of Nginx?
5. What are the primary use cases for Nginx?
6. What is the difference between Nginx and Apache?
7. What is the architecture of Nginx?
8. What is the event-driven architecture?
9. What is the master-worker process model in Nginx?
10. What is the role of the master process?
11. What is the role of worker processes?
12. How many worker processes should you configure?
13. What is the C10K problem?
14. How does Nginx solve the C10K problem?
15. What is asynchronous, non-blocking I/O?
16. How does Nginx handle concurrent connections?
17. What is the difference between Nginx and Node.js in handling concurrency?
18. What are the advantages of Nginx?
19. What are the disadvantages of Nginx?
20. When should you use Nginx?
21. What is Nginx Plus?
22. What is the difference between Nginx open source and Nginx Plus?
23. What is the default port for Nginx?
24. Where is the Nginx configuration file located?
25. What is the main configuration file called?
26. What is the `/etc/nginx/nginx.conf` file?
27. What is the `/etc/nginx/sites-available/` directory?
28. What is the `/etc/nginx/sites-enabled/` directory?
29. What is a symbolic link in Nginx configuration?
30. How do you enable a site in Nginx?

---

### Nginx Configuration

31. What is the basic structure of Nginx configuration?
32. What is a directive in Nginx?
33. What is a context in Nginx?
34. What are the main contexts in Nginx configuration?
35. What is the `http` context?
36. What is the `server` context?
37. What is the `location` context?
38. What is the `events` context?
39. 
```nginx
events {
    worker_connections 1024;
}
```
What does this configuration do?

40. What is `worker_connections`?
41. What is the maximum number of connections Nginx can handle?
42. 
```nginx
http {
    server {
        listen 80;
        server_name example.com;
        
        location / {
            root /var/www/html;
            index index.html;
        }
    }
}
```
Explain this configuration.

43. What is the `listen` directive?
44. What is the `server_name` directive?
45. What is the `location` directive?
46. What is the `root` directive?
47. What is the `index` directive?
48. How do you serve static files with Nginx?
49. What is the difference between `root` and `alias`?
50. 
```nginx
location /images/ {
    root /var/www;
}
```
What is the actual file path for `/images/logo.png`?

51. 
```nginx
location /images/ {
    alias /var/www/static/;
}
```
What is the actual file path for `/images/logo.png`?

52. What is location matching in Nginx?
53. What are the different types of location modifiers?
54. What is exact match location?
55. What is prefix match location?
56. What is regex match location?
57. 
```nginx
location = /api/health {
    return 200 "OK";
}
```
What does `=` mean?

58. 
```nginx
location ^~ /static/ {
    root /var/www;
}
```
What does `^~` mean?

59. 
```nginx
location ~ \.php$ {
    # PHP processing
}
```
What does `~` mean?

60. 
```nginx
location ~* \.(jpg|png|gif)$ {
    # Image processing
}
```
What does `~*` mean?

61. What is the order of precedence for location matching?
62. How do you reload Nginx configuration?
63. What is the command to test Nginx configuration?
64. What is `nginx -t`?
65. What is `nginx -s reload`?
66. What is the difference between `reload` and `restart`?
67. What is graceful reload?
68. How do you stop Nginx?
69. What is `nginx -s stop`?
70. What is `nginx -s quit`?

---

### Nginx as Reverse Proxy

71. What is a reverse proxy?
72. What is the difference between forward proxy and reverse proxy?
73. Why use Nginx as a reverse proxy?
74. How do you configure Nginx as a reverse proxy?
75. 
```nginx
location /api/ {
    proxy_pass http://localhost:3000;
}
```
What does this do?

76. What is the `proxy_pass` directive?
77. What happens to the URL path with `proxy_pass`?
78. 
```nginx
location /api/ {
    proxy_pass http://localhost:3000/;
}
```
What is the difference between this and without the trailing slash?

79. What is the `proxy_set_header` directive?
80. 
```nginx
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
```
Explain these proxy headers.

81. What is the `Host` header?
82. What is the `X-Real-IP` header?
83. What is the `X-Forwarded-For` header?
84. What is the `X-Forwarded-Proto` header?
85. Why are these headers important?
86. What is the `$host` variable?
87. What is the `$remote_addr` variable?
88. What is the `$proxy_add_x_forwarded_for` variable?
89. What is the `$scheme` variable?
90. What is WebSocket proxying?
91. How do you configure Nginx for WebSocket?
92. 
```nginx
location /ws/ {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```
Explain this WebSocket configuration.

93. What is the `Upgrade` header?
94. What is the `Connection` header?
95. Why do you need `proxy_http_version 1.1` for WebSocket?
96. What is connection timeout in Nginx?
97. What is `proxy_connect_timeout`?
98. What is `proxy_send_timeout`?
99. What is `proxy_read_timeout`?
100. 
```nginx
proxy_connect_timeout 60s;
proxy_send_timeout 60s;
proxy_read_timeout 60s;
```
When would you increase these values?

---

### Nginx Load Balancing

101. What is load balancing?
102. Why is load balancing important?
103. How does Nginx perform load balancing?
104. What is an upstream in Nginx?
105. 
```nginx
upstream backend {
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

server {
    location / {
        proxy_pass http://backend;
    }
}
```
Explain this load balancing configuration.

106. What is the `upstream` directive?
107. What are the load balancing algorithms in Nginx?
108. What is round-robin load balancing?
109. What is the default load balancing algorithm?
110. What is least connections load balancing?
111. 
```nginx
upstream backend {
    least_conn;
    server localhost:3000;
    server localhost:3001;
}
```
What does `least_conn` do?

112. What is IP hash load balancing?
113. 
```nginx
upstream backend {
    ip_hash;
    server localhost:3000;
    server localhost:3001;
}
```
What does `ip_hash` do?

114. When should you use `ip_hash`?
115. What is session affinity?
116. What is sticky session?
117. How does `ip_hash` provide session affinity?
118. What is the problem with `ip_hash`?
119. What is weighted load balancing?
120. 
```nginx
upstream backend {
    server localhost:3000 weight=3;
    server localhost:3001 weight=1;
}
```
Explain this weighted configuration.

121. When should you use weighted load balancing?
122. What is server backup?
123. 
```nginx
upstream backend {
    server localhost:3000;
    server localhost:3001 backup;
}
```
What does `backup` do?

124. What is server down?
125. 
```nginx
upstream backend {
    server localhost:3000;
    server localhost:3001 down;
}
```
What does `down` do?

126. What is health checking in Nginx?
127. What is passive health checking?
128. What is active health checking?
129. What is `max_fails`?
130. What is `fail_timeout`?
131. 
```nginx
upstream backend {
    server localhost:3000 max_fails=3 fail_timeout=30s;
}
```
Explain this health check configuration.

132. What happens when a server fails health checks?
133. What is the difference between Nginx open source and Nginx Plus health checks?
134. Can Nginx open source do active health checks?
135. What is the `keepalive` directive in upstream?
136. 
```nginx
upstream backend {
    server localhost:3000;
    keepalive 32;
}
```
What does this do?

137. Why is keepalive important for performance?
138. What is connection pooling?
139. How does Nginx handle upstream connection pooling?
140. What is the zone directive in upstream?

---

### Nginx Caching

141. What is caching in Nginx?
142. Why use Nginx for caching?
143. What is proxy caching?
144. How do you configure Nginx caching?
145. 
```nginx
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;

server {
    location / {
        proxy_cache my_cache;
        proxy_pass http://backend;
    }
}
```
Explain this caching configuration.

146. What is `proxy_cache_path`?
147. What is `levels=1:2`?
148. What is `keys_zone`?
149. What is `max_size`?
150. What is `inactive`?
151. What is the `proxy_cache` directive?
152. What is cache key?
153. What is the default cache key?
154. 
```nginx
proxy_cache_key "$scheme$request_method$host$request_uri";
```
What does this cache key include?

155. What is `proxy_cache_valid`?
156. 
```nginx
proxy_cache_valid 200 302 10m;
proxy_cache_valid 404 1m;
```
Explain this configuration.

157. What is cache bypass?
158. What is `proxy_cache_bypass`?
159. 
```nginx
proxy_cache_bypass $http_cache_control;
```
What does this do?

160. What is cache purging?
161. How do you purge cache in Nginx?
162. What is `proxy_cache_purge`?
163. What is the `X-Cache-Status` header?
164. 
```nginx
add_header X-Cache-Status $upstream_cache_status;
```
What values can `$upstream_cache_status` have?

165. What does `HIT` mean?
166. What does `MISS` mean?
167. What does `BYPASS` mean?
168. What does `EXPIRED` mean?
169. What does `STALE` mean?
170. What is cache locking?
171. What is the thundering herd problem?
172. How does `proxy_cache_lock` help?
173. What is microcaching?
174. When should you use microcaching?
175. 
```nginx
proxy_cache_valid 200 1s;
```
Is this microcaching?

176. What are the benefits of microcaching?
177. What is cache warming?
178. What is CDN?
179. How is Nginx caching different from CDN?
180. Should you use both Nginx caching and CDN?

---

### Nginx Security

181. What are common security practices for Nginx?
182. How do you hide Nginx version?
183. 
```nginx
server_tokens off;
```
What does this do?

184. What is rate limiting in Nginx?
185. How do you implement rate limiting in Nginx?
186. What is the `limit_req_zone` directive?
187. 
```nginx
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;

server {
    location /api/ {
        limit_req zone=mylimit burst=20;
    }
}
```
Explain this rate limiting configuration.

188. What is `$binary_remote_addr`?
189. What is the `zone` parameter?
190. What is the `rate` parameter?
191. What is the `burst` parameter?
192. What is `limit_req`?
193. What happens when rate limit is exceeded?
194. What HTTP status code is returned?
195. What is connection limiting?
196. What is `limit_conn_zone`?
197. 
```nginx
limit_conn_zone $binary_remote_addr zone=addr:10m;

server {
    location /download/ {
        limit_conn addr 1;
    }
}
```
What does this do?

198. What is the difference between `limit_req` and `limit_conn`?
199. What is SSL/TLS in Nginx?
200. How do you configure HTTPS in Nginx?
201. 
```nginx
server {
    listen 443 ssl;
    server_name example.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
}
```
Explain this SSL configuration.

202. What is the `ssl_certificate` directive?
203. What is the `ssl_certificate_key` directive?
204. What is Let's Encrypt?
205. How do you use Let's Encrypt with Nginx?
206. What is Certbot?
207. What is SSL/TLS protocol version?
208. 
```nginx
ssl_protocols TLSv1.2 TLSv1.3;
```
Why disable older protocols?

209. What is SSL cipher suite?
210. What is `ssl_ciphers`?
211. What is HTTP to HTTPS redirect?
212. 
```nginx
server {
    listen 80;
    server_name example.com;
    return 301 https://$server_name$request_uri;
}
```
What does this do?

213. What is HSTS (HTTP Strict Transport Security)?
214. 
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```
What does this header do?

215. What is the `max-age` parameter?
216. What is `includeSubDomains`?
217. What is the security risk of not using HTTPS?
218. What is man-in-the-middle attack?
219. What is XSS (Cross-Site Scripting)?
220. What is the `X-XSS-Protection` header?
221. What is clickjacking?
222. What is the `X-Frame-Options` header?
223. 
```nginx
add_header X-Frame-Options "SAMEORIGIN";
```
What does this do?

224. What is the `X-Content-Type-Options` header?
225. What is MIME type sniffing?
226. What is CORS in Nginx?
227. How do you configure CORS in Nginx?
228. 
```nginx
add_header Access-Control-Allow-Origin *;
add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
add_header Access-Control-Allow-Headers "Authorization, Content-Type";
```
Explain this CORS configuration.

229. What is the security risk of `Access-Control-Allow-Origin *`?
230. How do you restrict CORS to specific origins?

---

### Nginx Performance Optimization

231. What are common Nginx performance optimizations?
232. What is gzip compression?
233. How do you enable gzip in Nginx?
234. 
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
gzip_comp_level 6;
```
Explain this gzip configuration.

235. What is `gzip_types`?
236. What is `gzip_min_length`?
237. What is `gzip_comp_level`?
238. What is the trade-off of higher compression level?
239. What is Brotli compression?
240. What is the difference between gzip and Brotli?
241. What is static file caching?
242. 
```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```
What does this do?

243. What is the `expires` directive?
244. What is the `Cache-Control` header?
245. What is `immutable`?
246. What is buffer size tuning?
247. What is `client_body_buffer_size`?
248. What is `client_max_body_size`?
249. 
```nginx
client_max_body_size 100M;
```
When would you increase this?

250. What is `proxy_buffer_size`?
251. What is `proxy_buffers`?
252. What is `proxy_busy_buffers_size`?
253. What is sendfile?
254. 
```nginx
sendfile on;
tcp_nopush on;
tcp_nodelay on;
```
Explain these directives.

255. What is `tcp_nopush`?
256. What is `tcp_nodelay`?
257. What is the difference between `tcp_nopush` and `tcp_nodelay`?
258. What is open file cache?
259. 
```nginx
open_file_cache max=1000 inactive=20s;
open_file_cache_valid 30s;
open_file_cache_min_uses 2;
```
What does this do?

260. What is worker process optimization?
261. 
```nginx
worker_processes auto;
worker_cpu_affinity auto;
```
What do these directives do?

262. What is `worker_rlimit_nofile`?
263. What is the maximum number of open files?
264. What is access log optimization?
265. Should you disable access logs in production?
266. 
```nginx
access_log off;
```
What is the trade-off?

267. What is buffered logging?
268. 
```nginx
access_log /var/log/nginx/access.log combined buffer=32k flush=5s;
```
What does this do?

269. What is HTTP/2 in Nginx?
270. How do you enable HTTP/2?
271. 
```nginx
listen 443 ssl http2;
```
What does this do?

272. What are the benefits of HTTP/2?
273. What is server push in HTTP/2?
274. What is multiplexing in HTTP/2?
275. What is HTTP/3?
276. Does Nginx support HTTP/3?
277. What is the difference between HTTP/2 and HTTP/3?
278. What is monitoring Nginx performance?
279. What is the stub_status module?
280. 
```nginx
location /nginx_status {
    stub_status;
    allow 127.0.0.1;
    deny all;
}
```
What does this provide?

---

### Capacity Estimation Fundamentals

281. What is capacity estimation?
282. Why is capacity estimation important?
283. What is capacity planning?
284. What are the key metrics for capacity estimation?
285. What is QPS (Queries Per Second)?
286. What is RPS (Requests Per Second)?
287. What is TPS (Transactions Per Second)?
288. What is the difference between QPS and RPS?
289. What is DAU (Daily Active Users)?
290. What is MAU (Monthly Active Users)?
291. What is concurrent users?
292. What is the difference between total users and concurrent users?
293. What is peak load?
294. What is average load?
295. What is the peak-to-average ratio?
296. Why plan for peak load instead of average load?
297. What is the 80/20 rule in capacity planning?
298. What is headroom in capacity planning?
299. Why should you plan for 2x-3x expected capacity?
300. What is the cost of over-provisioning vs under-provisioning?

---

### Capacity Estimation Calculations

301. How do you estimate storage capacity?
302. 
```
Users: 1 million
Average data per user: 1 MB
```
What is the total storage needed?

303. How do you estimate storage with growth?
304. 
```
Current users: 1 million
Growth rate: 20% per year
Years: 3
Data per user: 1 MB
```
Calculate total storage needed.

305. How do you estimate bandwidth?
306. What is the formula for bandwidth calculation?
307. 
```
Requests per day: 100 million
Average response size: 10 KB
```
Calculate daily bandwidth.

308. How do you convert daily bandwidth to Mbps?
309. What is the formula: `Bandwidth (Mbps) = (Total bytes per second × 8) / 1,000,000`?
310. 
```
Peak QPS: 10,000
Average response size: 5 KB
```
Calculate peak bandwidth in Mbps.

311. How do you estimate database size?
312. 
```
Users: 10 million
Posts per user: 100
Average post size: 1 KB
```
Calculate database size.

313. How do you account for indexes in database size?
314. What is the typical index overhead?
315. How do you estimate cache size?
316. What is the 80/20 rule for caching?
317. 
```
Total data: 1 TB
Hot data: 20%
```
What cache size do you need?

318. How do you estimate CDN bandwidth?
319. 
```
Static assets per page: 2 MB
Page views per day: 10 million
```
Calculate daily CDN bandwidth.

320. How do you estimate video streaming bandwidth?
321. 
```
Video bitrate: 5 Mbps
Concurrent viewers: 10,000
```
Calculate total bandwidth needed.

322. How do you estimate server count?
323. 
```
Peak QPS: 100,000
QPS per server: 1,000
```
How many servers do you need?

324. How do you account for redundancy?
325. What is N+1 redundancy?
326. What is N+2 redundancy?
327. How do you estimate database connections?
328. 
```
Application servers: 10
Connections per server: 100
```
What is the total connection pool size needed?

329. How do you estimate memory requirements?
330. 
```
Concurrent connections: 10,000
Memory per connection: 1 MB
```
Calculate total memory needed.

331. How do you estimate for read-heavy vs write-heavy workloads?
332. What is read/write ratio?
333. How does read/write ratio affect capacity planning?
334. What is data retention policy?
335. How does retention policy affect storage capacity?
336. 
```
Daily data: 100 GB
Retention: 90 days
```
Calculate total storage needed.

337. How do you estimate backup storage?
338. What is the 3-2-1 backup rule?
339. How do you estimate disaster recovery capacity?
340. What is RTO (Recovery Time Objective)?
341. What is RPO (Recovery Point Objective)?

---

### Horizontal vs Vertical Scaling

342. What is scaling?
343. What is vertical scaling?
344. What is horizontal scaling?
345. What is the difference between horizontal and vertical scaling?
346. What is scaling up?
347. What is scaling out?
348. What are the advantages of vertical scaling?
349. What are the disadvantages of vertical scaling?
350. What is the maximum limit of vertical scaling?
351. What is the single point of failure in vertical scaling?
352. What are the advantages of horizontal scaling?
353. What are the disadvantages of horizontal scaling?
354. What is the complexity of horizontal scaling?
355. When should you use vertical scaling?
356. When should you use horizontal scaling?
357. Can you combine vertical and horizontal scaling?
358. What is diagonal scaling?
359. What is the cost comparison between vertical and horizontal scaling?
360. What is the performance comparison?
361. What is linear scalability?
362. Does horizontal scaling provide linear scalability?
363. What is the overhead of horizontal scaling?
364. What is network latency in horizontal scaling?
365. What is data consistency in horizontal scaling?
366. What is the CAP theorem?
367. How does CAP theorem relate to horizontal scaling?
368. What is stateless architecture?
369. Why is stateless important for horizontal scaling?
370. What is stateful architecture?
371. Can you horizontally scale stateful applications?
372. How do you handle sessions in horizontal scaling?
373. What is session affinity?
374. What is sticky session?
375. What is the problem with sticky sessions?
376. What is distributed session storage?
377. What is Redis for session storage?
378. What is database scaling?
379. Can you horizontally scale databases?
380. What is database sharding?
381. What is database replication?
382. What is read replica?
383. What is master-slave replication?
384. What is master-master replication?
385. What is the difference between sharding and replication?
386. What is the challenge of database sharding?
387. What is the shard key?
388. What is cross-shard queries?
389. What is the problem with cross-shard queries?
390. What is eventual consistency?

---

### Scaling Node.js Applications

391. What are the challenges of scaling Node.js?
392. What is single-threaded nature of Node.js?
393. What is the event loop in Node.js?
394. Can Node.js use multiple CPU cores?
395. What is the cluster module in Node.js?
396. How does the cluster module work?
397. 
```js
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Start server
  app.listen(3000);
}
```
Explain this clustering code.

398. What is the master process in cluster?
399. What is the worker process in cluster?
400. How many worker processes should you create?
401. What is `os.cpus().length`?
402. How does cluster distribute requests?
403. What is round-robin in cluster?
404. What happens when a worker crashes?
405. How do you handle worker crashes?
406. 
```js
cluster.on('exit', (worker, code, signal) => {
  console.log(`Worker ${worker.process.pid} died`);
  cluster.fork();
});
```
What does this do?

407. What is the difference between cluster and PM2?
408. What is PM2?
409. How do you use PM2 for clustering?
410. 
```bash
pm2 start app.js -i max
```
What does this command do?

411. What is the `-i` flag in PM2?
412. What does `max` mean in PM2?
413. What are the advantages of PM2 over cluster module?
414. What is process monitoring in PM2?
415. What is auto-restart in PM2?
416. What is zero-downtime deployment?
417. How does PM2 achieve zero-downtime deployment?
418. What is the `pm2 reload` command?
419. What is the difference between `pm2 restart` and `pm2 reload`?
420. What is worker threads in Node.js?
421. What is the difference between cluster and worker threads?
422. When should you use worker threads?
423. When should you use cluster?
424. What is CPU-intensive task?
425. How do you handle CPU-intensive tasks in Node.js?
426. Should you offload CPU-intensive tasks?
427. What is a job queue?
428. What is Bull queue?
429. What is Redis-backed queue?
430. How do you scale job processing?
431. What is horizontal scaling of Node.js with load balancer?
432. What is the architecture: Load Balancer → Multiple Node.js instances?
433. What is container-based scaling?
434. What is Docker for Node.js?
435. What is Kubernetes for Node.js?
436. What is the benefit of containerization?
437. What is microservices architecture?
438. How does microservices help with scaling?
439. What is the difference between monolith and microservices?
440. What is service-oriented architecture (SOA)?

---

### Auto Scaling Groups (ASG)

441. What is Auto Scaling?
442. What is an Auto Scaling Group (ASG)?
443. What is AWS Auto Scaling?
444. What is the purpose of Auto Scaling?
445. What are the benefits of Auto Scaling?
446. What is dynamic scaling?
447. What is scheduled scaling?
448. What is predictive scaling?
449. What is the difference between dynamic and scheduled scaling?
450. What is a launch template?
451. What is a launch configuration?
452. What is the difference between launch template and launch configuration?
453. What is the minimum size in ASG?
454. What is the maximum size in ASG?
455. What is the desired capacity in ASG?
456. 
```
Min: 2
Max: 10
Desired: 4
```
Explain this ASG configuration.

457. What is scaling policy?
458. What is target tracking scaling?
459. What is step scaling?
460. What is simple scaling?
461. What is the difference between target tracking and step scaling?
462. What is CPU utilization metric?
463. 
```
Target: Average CPU utilization = 70%
```
What does this scaling policy do?

464. What is scale-out?
465. What is scale-in?
466. What happens when CPU exceeds 70%?
467. What happens when CPU drops below 70%?
468. What is cooldown period?
469. Why is cooldown period important?
470. 
```
Cooldown: 300 seconds
```
What does this mean?

471. What is warmup time?
472. What is the difference between cooldown and warmup?
473. What is health check in ASG?
474. What is EC2 health check?
475. What is ELB health check?
476. What is the difference between EC2 and ELB health checks?
477. What is the health check grace period?
478. 
```
Health check grace period: 300 seconds
```
Why do you need this?

479. What happens when an instance fails health check?
480. What is instance termination?
481. What is instance replacement?
482. What is the termination policy?
483. What is the default termination policy?
484. What is the oldest instance termination policy?
485. What is the newest instance termination policy?
486. What is Availability Zone in ASG?
487. Why distribute instances across multiple AZs?
488. What is high availability?
489. What is fault tolerance?
490. What is the difference between high availability and fault tolerance?
491. What is elastic load balancer (ELB)?
492. How does ELB work with ASG?
493. What is the integration between ELB and ASG?
494. What is target group?
495. What is Application Load Balancer (ALB)?
496. What is Network Load Balancer (NLB)?
497. What is the difference between ALB and NLB?
498. When should you use ALB?
499. When should you use NLB?
500. What is connection draining?
501. What is deregistration delay?
502. 
```
Deregistration delay: 30 seconds
```
What does this do?

503. What is lifecycle hooks in ASG?
504. What is the launching lifecycle hook?
505. What is the terminating lifecycle hook?
506. Why use lifecycle hooks?
507. What is spot instance?
508. What is on-demand instance?
509. Can you use spot instances in ASG?
510. What is the cost benefit of spot instances?
511. What is the risk of spot instances?
512. What is mixed instance policy?
513. What is the combination of on-demand and spot instances?
514. What is instance weighting?
515. What is the cost optimization strategy for ASG?
516. What is monitoring ASG?
517. What is CloudWatch for ASG?
518. What metrics should you monitor?
519. What is scaling activity history?
520. What is the ASG event notification?

---

### Database Indexing Fundamentals

521. What is an index in a database?
522. Why do we need indexes?
523. What is the purpose of indexing?
524. What is the performance benefit of indexes?
525. What is the trade-off of using indexes?
526. What is the cost of indexes?
527. How do indexes affect write performance?
528. How do indexes affect read performance?
529. What is a table scan?
530. What is a full table scan?
531. What is the problem with full table scan?
532. How do indexes avoid full table scans?
533. What is the time complexity of table scan?
534. What is the time complexity of index lookup?
535. What is O(n) vs O(log n)?
536. What is the data structure used for indexes?
537. What is a B-Tree?
538. What is a B+ Tree?
539. What is the difference between B-Tree and B+ Tree?
540. Why do databases use B+ Tree for indexes?
541. What is a hash index?
542. What is the difference between B-Tree and hash index?
543. When should you use hash index?
544. When should you use B-Tree index?
545. What is a clustered index?
546. What is a non-clustered index?
547. What is the difference between clustered and non-clustered index?
548. How many clustered indexes can a table have?
549. How many non-clustered indexes can a table have?
550. What is a primary key index?
551. Is primary key automatically indexed?
552. What is a unique index?
553. What is the difference between primary key and unique index?
554. What is a composite index?
555. What is a multi-column index?
556. 
```sql
CREATE INDEX idx_name_age ON users(name, age);
```
What is this index?

557. What is the order of columns in composite index?
558. Does the order matter in composite index?
559. What is the leftmost prefix rule?
560. 
```sql
-- Index on (name, age)
SELECT * FROM users WHERE name = 'John';  -- Uses index?
SELECT * FROM users WHERE age = 25;       -- Uses index?
SELECT * FROM users WHERE name = 'John' AND age = 25;  -- Uses index?
```
Which queries use the index?

561. What is index selectivity?
562. What is cardinality in indexing?
563. What is high cardinality?
564. What is low cardinality?
565. Should you index low cardinality columns?
566. 
```sql
-- Column: gender (values: 'M', 'F')
CREATE INDEX idx_gender ON users(gender);
```
Is this a good index?

567. What is covering index?
568. What is index-only scan?
569. 
```sql
CREATE INDEX idx_name_email ON users(name, email);
SELECT name, email FROM users WHERE name = 'John';
```
Why is this efficient?

570. What is partial index?
571. What is filtered index?
572. 
```sql
CREATE INDEX idx_active_users ON users(name) WHERE active = true;
```
When is this useful?

573. What is expression index?
574. What is functional index?
575. 
```sql
CREATE INDEX idx_lower_email ON users(LOWER(email));
```
What does this do?

576. What is full-text index?
577. When do you need full-text index?
578. What is the difference between B-Tree and full-text index?
579. What is spatial index?
580. When do you use spatial index?

---

### Database Indexing in Practice

581. How do you create an index in SQL?
582. 
```sql
CREATE INDEX idx_email ON users(email);
```
What does this do?

583. How do you create a unique index?
584. 
```sql
CREATE UNIQUE INDEX idx_email ON users(email);
```
What is the difference?

585. How do you drop an index?
586. 
```sql
DROP INDEX idx_email;
```
What happens to queries after dropping index?

587. How do you view existing indexes?
588. 
```sql
-- PostgreSQL
\d users

-- MySQL
SHOW INDEX FROM users;
```
What do these commands show?

589. What is EXPLAIN in SQL?
590. What is query execution plan?
591. 
```sql
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';
```
What does this show?

592. What is index scan?
593. What is sequential scan?
594. What is bitmap scan?
595. How do you know if an index is being used?
596. What is query optimization?
597. What is the query optimizer?
598. How does the optimizer choose which index to use?
599. What is index statistics?
600. What is ANALYZE in SQL?
601. 
```sql
ANALYZE users;
```
What does this do?

602. What is index bloat?
603. What causes index bloat?
604. How do you fix index bloat?
605. What is REINDEX?
606. 
```sql
REINDEX INDEX idx_email;
```
When should you do this?

607. What is the impact of REINDEX?
608. What is index maintenance?
609. How often should you rebuild indexes?
610. What is index fragmentation?
611. What is the difference between index bloat and fragmentation?
612. What is index usage statistics?
613. How do you find unused indexes?
614. 
```sql
-- PostgreSQL
SELECT * FROM pg_stat_user_indexes WHERE idx_scan = 0;
```
What does this query show?

615. Should you drop unused indexes?
616. What is the storage cost of unused indexes?
617. What is index size?
618. How do you check index size?
619. 
```sql
-- PostgreSQL
SELECT pg_size_pretty(pg_relation_size('idx_email'));
```
What does this show?

620. What is the relationship between index size and performance?

---

### Advanced Indexing Concepts

621. What is index intersection?
622. Can the database use multiple indexes for one query?
623. 
```sql
-- Indexes: idx_name, idx_age
SELECT * FROM users WHERE name = 'John' AND age = 25;
```
Will it use both indexes?

624. What is index merge?
625. What is the cost of index merge?
626. Is composite index better than index merge?
627. What is index skip scan?
628. What is loose index scan?
629. What is index condition pushdown?
630. What is the benefit of index condition pushdown?
631. What is index hint?
632. 
```sql
SELECT * FROM users USE INDEX (idx_email) WHERE email = 'test@example.com';
```
What does this do?

633. Should you use index hints?
634. What is the problem with index hints?
635. What is index-organized table?
636. What is clustered index table?
637. What is heap table?
638. What is the difference between heap and index-organized table?
639. What is index compression?
640. What is prefix compression?
641. What is the benefit of index compression?
642. What is index caching?
643. What is buffer pool?
644. How are indexes cached in memory?
645. What is index warmup?
646. What is the cold cache problem?
647. What is index locking?
648. What is lock contention on indexes?
649. What is the concurrency issue with indexes?
650. What is index deadlock?
651. What is the write amplification problem?
652. 
```
1 row insert = 1 table write + N index writes
```
Explain this problem.

653. How many indexes is too many?
654. What is the guideline for number of indexes?
655. What is the index selection strategy?
656. How do you decide which columns to index?
657. What columns should always be indexed?
658. What columns should never be indexed?
659. Should you index foreign keys?
660. Should you index columns used in WHERE clause?
661. Should you index columns used in JOIN?
662. Should you index columns used in ORDER BY?
663. Should you index columns used in GROUP BY?
664. What is the impact of indexes on INSERT?
665. What is the impact of indexes on UPDATE?
666. What is the impact of indexes on DELETE?
667. What is the read/write ratio consideration?
668. Should you index heavily in read-heavy applications?
669. Should you minimize indexes in write-heavy applications?
670. What is the index maintenance overhead?
671. What is the index rebuild strategy?
672. What is online index creation?
673. 
```sql
CREATE INDEX CONCURRENTLY idx_email ON users(email);
```
What does CONCURRENTLY do?

674. What is the benefit of online index creation?
675. What is the cost of online index creation?
676. What is index monitoring?
677. What metrics should you monitor for indexes?
678. What is index hit ratio?
679. What is the ideal index hit ratio?
680. What is index tuning?

---

### Database Normalization Fundamentals

681. What is database normalization?
682. What is the purpose of normalization?
683. What problem does normalization solve?
684. What is data redundancy?
685. What is data anomaly?
686. What is insertion anomaly?
687. What is update anomaly?
688. What is deletion anomaly?
689. 
```
Table: Students
| StudentID | Name  | Course | Instructor |
|-----------|-------|--------|------------|
| 1         | John  | Math   | Dr. Smith  |
| 1         | John  | Physics| Dr. Jones  |
```
What anomalies exist here?

690. What is the update anomaly in this table?
691. What is functional dependency?
692. What is a determinant?
693. What is a dependent?
694. What is the notation for functional dependency?
695. What does `A → B` mean?
696. What is full functional dependency?
697. What is partial functional dependency?
698. What is transitive dependency?
699. What is a candidate key?
700. What is a primary key?
701. What is a composite key?
702. What is a surrogate key?
703. What is a natural key?
704. What is the difference between surrogate and natural key?
705. What are the normal forms?
706. How many normal forms are there?
707. What is 1NF?
708. What is 2NF?
709. What is 3NF?
710. What is BCNF?
711. What is 4NF?
712. What is 5NF?
713. Which normal form is most commonly used?
714. What is the goal of normalization?
715. What is the trade-off of normalization?
716. What is denormalization?
717. When should you denormalize?
718. What is the difference between normalized and denormalized?
719. What is the performance impact of normalization?
720. What is the storage impact of normalization?

---

### Normal Forms in Detail

721. What is First Normal Form (1NF)?
722. What are the rules of 1NF?
723. What is atomic value?
724. What is repeating group?
725. 
```
Table: Students (NOT in 1NF)
| StudentID | Name | Courses           |
|-----------|------|-------------------|
| 1         | John | Math, Physics     |
```
What is the problem?

726. How do you convert to 1NF?
727. 
```
Table: Students (1NF)
| StudentID | Name | Course  |
|-----------|------|---------|
| 1         | John | Math    |
| 1         | John | Physics |
```
Is this in 1NF?

728. What is Second Normal Form (2NF)?
729. What are the rules of 2NF?
730. What is partial dependency?
731. 
```
Table: Enrollments
| StudentID | CourseID | StudentName | CourseName | Grade |
|-----------|----------|-------------|------------|-------|
| 1         | 101      | John        | Math       | A     |
```
What is the problem with this table?

732. What is the partial dependency here?
733. How do you convert to 2NF?
734. 
```
Table: Students
| StudentID | StudentName |
|-----------|-------------|
| 1         | John        |

Table: Courses
| CourseID | CourseName |
|----------|------------|
| 101      | Math       |

Table: Enrollments
| StudentID | CourseID | Grade |
|-----------|----------|-------|
| 1         | 101      | A     |
```
Is this in 2NF?

735. What is Third Normal Form (3NF)?
736. What are the rules of 3NF?
737. What is transitive dependency?
738. 
```
Table: Students
| StudentID | Name | DepartmentID | DepartmentName |
|-----------|------|--------------|----------------|
| 1         | John | 10           | Computer Sci   |
```
What is the problem?

739. What is the transitive dependency here?
740. How do you convert to 3NF?
741. 
```
Table: Students
| StudentID | Name | DepartmentID |
|-----------|------|--------------|
| 1         | John | 10           |

Table: Departments
| DepartmentID | DepartmentName |
|--------------|----------------|
| 10           | Computer Sci   |
```
Is this in 3NF?

742. What is Boyce-Codd Normal Form (BCNF)?
743. What are the rules of BCNF?
744. What is the difference between 3NF and BCNF?
745. When is a table in 3NF but not BCNF?
746. 
```
Table: Teaching
| Professor | Subject | Student |
|-----------|---------|---------|
| Dr. Smith | Math    | John    |
```
Given: Each professor teaches only one subject, but a subject can be taught by multiple professors.
What is the problem?

747. How do you convert to BCNF?
748. What is Fourth Normal Form (4NF)?
749. What is multi-valued dependency?
750. What is the difference between 3NF and 4NF?
751. What is Fifth Normal Form (5NF)?
752. What is join dependency?
753. Is 5NF commonly used in practice?
754. What is the practical limit of normalization?
755. Should you always normalize to 5NF?
756. What is over-normalization?
757. What is the problem with too many joins?
758. What is the query performance impact of normalization?
759. What is the balance between normalization and performance?
760. When should you stop normalizing?

---

### Normalization in Practice

761. How do you normalize a database?
762. What is the step-by-step process?
763. What is the starting point for normalization?
764. What is an unnormalized table?
765. 
```
Orders Table (Unnormalized)
| OrderID | CustomerName | CustomerEmail | Products        | Prices    |
|---------|--------------|---------------|-----------------|-----------|
| 1       | John Doe     | john@mail.com | Laptop, Mouse   | 1000, 20  |
```
How do you normalize this?

766. What is the first step?
767. What is the result after 1NF?
768. What is the result after 2NF?
769. What is the result after 3NF?
770. What is the final schema?
771. How many tables should you have?
772. What is the relationship between tables?
773. What is a one-to-one relationship?
774. What is a one-to-many relationship?
775. What is a many-to-many relationship?
776. How do you implement one-to-many?
777. How do you implement many-to-many?
778. What is a junction table?
779. What is a bridge table?
780. 
```
Students ←→ Courses (many-to-many)
```
How do you implement this?

781. 
```
Table: Enrollments
| StudentID | CourseID |
|-----------|----------|
| 1         | 101      |
```
Is this a junction table?

782. What is referential integrity?
783. What is a foreign key?
784. How do you enforce referential integrity?
785. 
```sql
CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);
```
What does this do?

786. What is CASCADE in foreign key?
787. What is ON DELETE CASCADE?
788. What is ON UPDATE CASCADE?
789. 
```sql
FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
```
What happens when a student is deleted?

790. What is SET NULL in foreign key?
791. What is RESTRICT in foreign key?
792. What is the default foreign key action?
793. What is normalization vs denormalization trade-off?
794. When should you denormalize?
795. What is read-heavy vs write-heavy consideration?
796. What is the impact of joins on performance?
797. How many joins is too many?
798. What is the N+1 query problem?
799. How does normalization affect the N+1 problem?
800. What is eager loading?
801. What is lazy loading?
802. What is the relationship between normalization and caching?
803. What is materialized view?
804. How does materialized view help with normalization?
805. What is the difference between view and materialized view?
806. What is query optimization with normalized tables?
807. What is index strategy for normalized tables?
808. Should you index foreign keys?
809. What is the join performance consideration?
810. What is the storage savings from normalization?
811. What is the data integrity benefit of normalization?
812. What is the maintenance benefit of normalization?
813. What is the flexibility benefit of normalization?
814. What is the complexity cost of normalization?
815. What is the learning curve of normalization?
816. What is the development time impact?
817. What is the real-world normalization strategy?
818. What is the common practice in industry?
819. What is the typical normalization level?
820. Should you always aim for 3NF?

---

### Denormalization Strategies

821. What is denormalization?
822. Why would you denormalize?
823. What is the purpose of denormalization?
824. What is the trade-off of denormalization?
825. When is denormalization appropriate?
826. What is the performance benefit of denormalization?
827. What is the storage cost of denormalization?
828. What is data redundancy in denormalization?
829. What is the consistency problem with denormalization?
830. How do you maintain consistency in denormalized data?
831. What is eventual consistency?
832. What is the update strategy for denormalized data?
833. 
```
Normalized:
- Users table
- Orders table (with user_id)

Denormalized:
- Orders table (with user_id, user_name, user_email)
```
What is the trade-off?

834. What is the read performance benefit?
835. What is the write performance cost?
836. What happens when user email changes?
837. What is calculated field denormalization?
838. 
```
Normalized:
- Orders table
- OrderItems table
- Calculate total on query

Denormalized:
- Orders table (with total_amount column)
```
What is the benefit?

839. What is the maintenance strategy?
840. What is the trigger-based update?
841. 
```sql
CREATE TRIGGER update_order_total
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
  UPDATE orders SET total = (SELECT SUM(price) FROM order_items WHERE order_id = NEW.order_id);
END;
```
What does this do?

842. What is application-level update?
843. What is batch update strategy?
844. What is the cron job approach?
845. What is the real-time vs eventual consistency trade-off?
846. What is counter denormalization?
847. 
```
Users table: post_count column
```
Is this denormalization?

848. What is the benefit of counter denormalization?
849. What is the consistency challenge?
850. What is the race condition problem?
851. How do you handle concurrent updates?
852. What is atomic increment?
853. 
```sql
UPDATE users SET post_count = post_count + 1 WHERE id = 1;
```
Is this safe?

854. What is snapshot denormalization?
855. What is historical data denormalization?
856. What is the audit trail consideration?
857. What is the reporting database strategy?
858. What is OLTP vs OLAP?
859. What is the difference between OLTP and OLAP?
860. Should you denormalize OLTP databases?
861. Should you denormalize OLAP databases?
862. What is data warehouse?
863. What is the normalization strategy for data warehouse?
864. What is star schema?
865. What is snowflake schema?
866. What is the difference between star and snowflake schema?
867. What is fact table?
868. What is dimension table?
869. What is the denormalization in star schema?
870. What is the normalization in snowflake schema?
871. Which is better for analytics?
872. What is the query performance comparison?
873. What is the storage comparison?
874. What is the maintenance comparison?
875. What is the hybrid approach?
876. Can you mix normalized and denormalized tables?
877. What is the selective denormalization strategy?
878. What is the critical path optimization?
879. What is the hot table denormalization?
880. What is the cold table normalization?
881. What is the monitoring strategy?
882. How do you measure the impact of denormalization?
883. What metrics should you track?
884. What is the A/B testing approach?
885. What is the rollback strategy?
886. What is the migration strategy?
887. How do you migrate from normalized to denormalized?
888. How do you migrate from denormalized to normalized?
889. What is the data consistency verification?
890. What is the testing strategy?
891. What is the documentation importance?
892. What is the team communication?
893. What is the best practice for normalization?
894. What is the best practice for denormalization?
895. What is the decision framework?
896. What questions should you ask?
897. What is the performance requirement?
898. What is the consistency requirement?
899. What is the scalability requirement?
900. What is the final recommendation?
