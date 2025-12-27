### Monitoring Fundamentals

1. What is monitoring?
2. Why is monitoring important in production systems?
3. What is the difference between monitoring and observability?
4. What are the three pillars of observability?
5. What is metrics?
6. What is logs?
7. What is traces?
8. What is the difference between metrics and logs?
9. What is the difference between logs and traces?
10. What is application monitoring?
11. What is infrastructure monitoring?
12. What is the difference between application and infrastructure monitoring?
13. What is real-time monitoring?
14. What is historical monitoring?
15. What is proactive monitoring?
16. What is reactive monitoring?
17. What is the difference between proactive and reactive monitoring?
18. What is uptime monitoring?
19. What is performance monitoring?
20. What is security monitoring?
21. What is business monitoring?
22. What is synthetic monitoring?
23. What is real user monitoring (RUM)?
24. What is the difference between synthetic and real user monitoring?
25. What is APM (Application Performance Monitoring)?
26. What is the purpose of APM?
27. What is SLA (Service Level Agreement)?
28. What is SLO (Service Level Objective)?
29. What is SLI (Service Level Indicator)?
30. What is the difference between SLA, SLO, and SLI?

---

### Monitoring Metrics

31. What is a metric?
32. What are the types of metrics?
33. What is a counter metric?
34. What is a gauge metric?
35. What is a histogram metric?
36. What is a summary metric?
37. What is the difference between counter and gauge?
38. 
```
Counter: total_requests = 1000 (always increasing)
Gauge: current_users = 50 (can go up or down)
```
Explain the difference.

39. What is a time series?
40. What is time series data?
41. What is cardinality in metrics?
42. What is high cardinality?
43. What is the problem with high cardinality?
44. What is metric aggregation?
45. What is the average metric?
46. What is the percentile metric?
47. What is P50, P95, P99?
48. What is the difference between average and P95?
49. Why is P95 more useful than average?
50. 
```
Response times: [10ms, 15ms, 20ms, 500ms]
Average: 136.25ms
P95: 500ms
```
Which metric is more meaningful?

51. What is latency?
52. What is throughput?
53. What is error rate?
54. What is the difference between latency and throughput?
55. What is the RED method?
56. What does RED stand for?
57. What is Rate in RED?
58. What is Errors in RED?
59. What is Duration in RED?
60. What is the USE method?
61. What does USE stand for?
62. What is Utilization in USE?
63. What is Saturation in USE?
64. What is Errors in USE?
65. When should you use RED method?
66. When should you use USE method?
67. What is the Four Golden Signals?
68. What are the four golden signals?
69. What is traffic in golden signals?
70. What is saturation in golden signals?
71. What is CPU utilization?
72. What is memory utilization?
73. What is disk I/O?
74. What is network I/O?
75. What is response time?
76. What is request rate?
77. What is error rate percentage?
78. What is availability percentage?
79. What is uptime percentage?
80. How do you calculate uptime percentage?

---

### Logging Fundamentals

81. What is logging?
82. Why is logging important?
83. What is a log?
84. What is a log entry?
85. What is a log message?
86. What are the types of logs?
87. What is application log?
88. What is system log?
89. What is access log?
90. What is error log?
91. What is audit log?
92. What is the difference between application and system logs?
93. What is log level?
94. What are the common log levels?
95. What is DEBUG log level?
96. What is INFO log level?
97. What is WARN log level?
98. What is ERROR log level?
99. What is FATAL log level?
100. What is the hierarchy of log levels?
101. 
```
FATAL > ERROR > WARN > INFO > DEBUG
```
Explain this hierarchy.

102. When should you use DEBUG level?
103. When should you use INFO level?
104. When should you use WARN level?
105. When should you use ERROR level?
106. When should you use FATAL level?
107. What is structured logging?
108. What is unstructured logging?
109. What is the difference between structured and unstructured logging?
110. 
```
Unstructured: "User john logged in at 2024-01-01"
Structured: {"user": "john", "action": "login", "timestamp": "2024-01-01"}
```
Which is better and why?

111. What is JSON logging?
112. Why use JSON for logs?
113. What is log parsing?
114. What is the problem with unstructured logs?
115. What is log correlation?
116. What is correlation ID?
117. What is request ID?
118. How do you correlate logs across services?
119. What is distributed tracing?
120. What is trace ID?
121. What is span ID?
122. What is the difference between trace ID and span ID?
123. What is log aggregation?
124. What is centralized logging?
125. Why do you need centralized logging?
126. What is the problem with local logs?
127. What is log rotation?
128. What is log retention?
129. What is log archival?
130. How long should you retain logs?

---

### Logging in Node.js

131. How do you implement logging in Node.js?
132. What is console.log?
133. What is the problem with console.log in production?
134. What is Winston?
135. What is Pino?
136. What is Bunyan?
137. What is the difference between Winston and Pino?
138. 
```js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```
Explain this Winston configuration.

139. What is transport in Winston?
140. What is format in Winston?
141. What are the available transports in Winston?
142. What is File transport?
143. What is Console transport?
144. What is HTTP transport?
145. 
```js
logger.info('User logged in', { userId: 123, email: 'user@example.com' });
logger.error('Database connection failed', { error: err.message });
```
What is the benefit of this logging style?

146. What is log metadata?
147. How do you add metadata to logs?
148. What is Pino logger?
149. 
```js
const pino = require('pino');
const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty'
  }
});
```
What does this do?

150. What is pino-pretty?
151. What is the performance difference between Winston and Pino?
152. Why is Pino faster than Winston?
153. What is child logger?
154. 
```js
const childLogger = logger.child({ requestId: '123' });
childLogger.info('Processing request');
```
What is the benefit of child logger?

155. What is log context?
156. How do you maintain log context across async operations?
157. What is AsyncLocalStorage?
158. How do you use AsyncLocalStorage for logging?
159. What is Morgan?
160. What is Morgan used for?
161. 
```js
const morgan = require('morgan');
app.use(morgan('combined'));
```
What does this do?

162. What are the Morgan formats?
163. What is 'combined' format?
164. What is 'common' format?
165. What is 'dev' format?
166. What is 'tiny' format?
167. How do you create custom Morgan format?
168. What is Express middleware for logging?
169. 
```js
app.use((req, res, next) => {
  logger.info('Incoming request', {
    method: req.method,
    path: req.path,
    ip: req.ip
  });
  next();
});
```
What does this middleware do?

170. How do you log response time?
171. 
```js
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('Request completed', { duration });
  });
  next();
});
```
Explain this middleware.

172. What is error logging?
173. How do you log errors in Express?
174. 
```js
app.use((err, req, res, next) => {
  logger.error('Error occurred', {
    error: err.message,
    stack: err.stack,
    path: req.path
  });
  res.status(500).json({ error: 'Internal server error' });
});
```
What does this error handler do?

175. Should you log stack traces in production?
176. What is sensitive data in logs?
177. What should you NOT log?
178. Should you log passwords?
179. Should you log credit card numbers?
180. Should you log API keys?
181. How do you sanitize logs?
182. What is log masking?
183. 
```js
logger.info('User login', {
  email: 'user@example.com',
  password: '[REDACTED]'
});
```
What is this technique called?

184. What is log sampling?
185. When should you use log sampling?
186. What is the trade-off of log sampling?
187. What is log buffering?
188. What is the benefit of log buffering?
189. What is the risk of log buffering?
190. What happens to buffered logs on crash?

---

### Log Management and Analysis

191. What is log management?
192. What is ELK stack?
193. What does ELK stand for?
194. What is Elasticsearch?
195. What is Logstash?
196. What is Kibana?
197. How does ELK stack work?
198. What is the role of Elasticsearch in ELK?
199. What is the role of Logstash in ELK?
200. What is the role of Kibana in ELK?
201. What is Filebeat?
202. What is the difference between Logstash and Filebeat?
203. What is the EFK stack?
204. What is Fluentd?
205. What is the difference between Logstash and Fluentd?
206. What is log shipping?
207. How do you ship logs to centralized system?
208. What is log indexing?
209. How does Elasticsearch index logs?
210. What is full-text search in logs?
211. What is log querying?
212. How do you search logs in Kibana?
213. What is Kibana query language (KQL)?
214. 
```
status:500 AND path:/api/*
```
What does this query find?

215. What is log visualization?
216. What is log dashboard?
217. What is log alerting?
218. How do you set up alerts on logs?
219. What is log-based metric?
220. How do you create metrics from logs?
221. What is log pattern detection?
222. What is anomaly detection in logs?
223. What is log analysis?
224. What is the difference between monitoring and logging?
225. Can you use logs for monitoring?
226. What is the cost of logging?
227. What is log storage cost?
228. How do you optimize log storage?
229. What is log compression?
230. What is cold storage for logs?

---

### Prometheus Fundamentals

231. What is Prometheus?
232. Who created Prometheus?
233. What is the purpose of Prometheus?
234. What is the architecture of Prometheus?
235. What is pull-based monitoring?
236. What is push-based monitoring?
237. What is the difference between pull and push?
238. Does Prometheus use pull or push?
239. What is scraping in Prometheus?
240. What is a scrape interval?
241. What is a target in Prometheus?
242. What is an exporter in Prometheus?
243. What is the Prometheus data model?
244. What is a metric in Prometheus?
245. What is a label in Prometheus?
246. What is a time series in Prometheus?
247. 
```
http_requests_total{method="GET", status="200"} 1234
```
Explain this Prometheus metric.

248. What is the metric name?
249. What are the labels?
250. What is the value?
251. What is PromQL?
252. What is Prometheus Query Language?
253. What are the metric types in Prometheus?
254. What is Counter in Prometheus?
255. What is Gauge in Prometheus?
256. What is Histogram in Prometheus?
257. What is Summary in Prometheus?
258. What is the difference between Histogram and Summary?
259. When should you use Counter?
260. When should you use Gauge?
261. When should you use Histogram?
262. What is a bucket in Histogram?
263. What is quantile in Summary?
264. What is the Prometheus server?
265. What is the Prometheus storage?
266. What is TSDB (Time Series Database)?
267. How does Prometheus store data?
268. What is the retention period in Prometheus?
269. What is the default retention period?
270. How do you configure retention?

---

### Prometheus Configuration

271. How do you install Prometheus?
272. What is the Prometheus configuration file?
273. What is `prometheus.yml`?
274. 
```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['localhost:9100']
```
Explain this configuration.

275. What is `scrape_interval`?
276. What is `evaluation_interval`?
277. What is `scrape_configs`?
278. What is `job_name`?
279. What is `static_configs`?
280. What is `targets`?
281. How do you add multiple targets?
282. 
```yaml
- targets: ['localhost:9100', 'localhost:9101', 'localhost:9102']
```
What does this do?

283. What is service discovery in Prometheus?
284. What is static service discovery?
285. What is dynamic service discovery?
286. What is Kubernetes service discovery?
287. What is Consul service discovery?
288. What is DNS service discovery?
289. What is the benefit of service discovery?
290. What is relabeling in Prometheus?
291. What is metric relabeling?
292. What is target relabeling?
293. What is the Prometheus web UI?
294. What port does Prometheus run on?
295. What is the default port?
296. How do you access Prometheus UI?
297. What is the `/metrics` endpoint?
298. What is the `/targets` endpoint?
299. What is the `/graph` endpoint?
300. What is the `/alerts` endpoint?

---

### PromQL (Prometheus Query Language)

301. What is PromQL?
302. How do you query metrics in Prometheus?
303. 
```
http_requests_total
```
What does this query return?

304. 
```
http_requests_total{status="200"}
```
What does this query return?

305. What is label matching in PromQL?
306. What is exact match?
307. What is regex match?
308. 
```
http_requests_total{path=~"/api/.*"}
```
What does `=~` mean?

309. What is negative match?
310. 
```
http_requests_total{status!="200"}
```
What does this return?

311. What is range vector?
312. What is instant vector?
313. What is the difference between range and instant vector?
314. 
```
http_requests_total[5m]
```
What does this return?

315. What is the `[5m]` syntax?
316. What is rate function?
317. 
```
rate(http_requests_total[5m])
```
What does this calculate?

318. What is irate function?
319. What is the difference between rate and irate?
320. What is increase function?
321. 
```
increase(http_requests_total[1h])
```
What does this calculate?

322. What is sum function?
323. 
```
sum(http_requests_total)
```
What does this do?

324. What is aggregation in PromQL?
325. What is `by` clause?
326. 
```
sum(http_requests_total) by (status)
```
What does this do?

327. What is `without` clause?
328. What is avg function?
329. What is max function?
330. What is min function?
331. What is count function?
332. What is topk function?
333. 
```
topk(5, http_requests_total)
```
What does this return?

334. What is bottomk function?
335. What is histogram_quantile function?
336. 
```
histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))
```
What does this calculate?

337. What is the 95th percentile?
338. How do you calculate P99?
339. What is the `or` operator?
340. What is the `and` operator?
341. What is the `unless` operator?
342. What is arithmetic operation in PromQL?
343. 
```
(node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes * 100
```
What does this calculate?

344. What is memory utilization percentage?
345. What is CPU utilization calculation?
346. 
```
100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)
```
What does this calculate?

347. What is the `offset` modifier?
348. 
```
http_requests_total offset 1h
```
What does this do?

349. What is the `@` modifier?
350. What is recording rule?

---

### Prometheus Exporters

351. What is an exporter?
352. What is the purpose of exporters?
353. What is Node Exporter?
354. What metrics does Node Exporter provide?
355. How do you install Node Exporter?
356. What port does Node Exporter run on?
357. What is the default port for Node Exporter?
358. What is cAdvisor?
359. What is cAdvisor used for?
360. What is Blackbox Exporter?
361. What is the purpose of Blackbox Exporter?
362. What is the MySQL Exporter?
363. What is the PostgreSQL Exporter?
364. What is the Redis Exporter?
365. What is the Nginx Exporter?
366. How do you create a custom exporter?
367. What is the Prometheus client library?
368. What is `prom-client` for Node.js?
369. 
```js
const client = require('prom-client');
const register = new client.Registry();

const counter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'status']
});

register.registerMetric(counter);
```
Explain this code.

370. What is Registry in prom-client?
371. What is Counter in prom-client?
372. How do you increment a counter?
373. 
```js
counter.inc({ method: 'GET', status: '200' });
```
What does this do?

374. How do you create a Gauge?
375. 
```js
const gauge = new client.Gauge({
  name: 'active_connections',
  help: 'Number of active connections'
});

gauge.set(42);
```
What does this do?

376. How do you create a Histogram?
377. 
```js
const histogram = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration',
  buckets: [0.1, 0.5, 1, 2, 5]
});

histogram.observe(0.3);
```
Explain this code.

378. What are buckets in Histogram?
379. How do you choose bucket values?
380. How do you expose metrics endpoint?
381. 
```js
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});
```
What does this do?

382. What is the content type for Prometheus metrics?
383. What is the Prometheus text format?
384. What is default metrics?
385. 
```js
client.collectDefaultMetrics({ register });
```
What does this do?

386. What default metrics are collected?
387. What is process metrics?
388. What is Node.js specific metrics?
389. How do you measure response time?
390. 
```js
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    histogram.observe({ method: req.method, path: req.path }, duration);
  });
  next();
});
```
Explain this middleware.

---

### Prometheus Alerting

391. What is alerting in Prometheus?
392. What is Alertmanager?
393. What is the purpose of Alertmanager?
394. What is an alert rule?
395. How do you define alert rules?
396. 
```yaml
groups:
  - name: example
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status="500"}[5m]) > 0.05
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High error rate detected"
```
Explain this alert rule.

397. What is the `alert` field?
398. What is the `expr` field?
399. What is the `for` field?
400. What is the `labels` field?
401. What is the `annotations` field?
402. What is the purpose of `for` duration?
403. What is pending state in alerts?
404. What is firing state in alerts?
405. What is the difference between pending and firing?
406. How do you configure Alertmanager?
407. What is `alertmanager.yml`?
408. 
```yaml
route:
  receiver: 'email'
  group_by: ['alertname']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 4h

receivers:
  - name: 'email'
    email_configs:
      - to: 'team@example.com'
        from: 'alertmanager@example.com'
```
Explain this configuration.

409. What is `route` in Alertmanager?
410. What is `receiver` in Alertmanager?
411. What is `group_by`?
412. What is `group_wait`?
413. What is `group_interval`?
414. What is `repeat_interval`?
415. What is alert grouping?
416. Why is alert grouping important?
417. What is alert deduplication?
418. What is alert silencing?
419. How do you silence an alert?
420. What is alert inhibition?
421. What notification channels does Alertmanager support?
422. What is email notification?
423. What is Slack notification?
424. What is PagerDuty notification?
425. What is webhook notification?
426. How do you send alerts to Slack?
427. 
```yaml
receivers:
  - name: 'slack'
    slack_configs:
      - api_url: 'https://hooks.slack.com/services/XXX'
        channel: '#alerts'
```
What does this do?

428. What is alert routing?
429. How do you route different alerts to different receivers?
430. 
```yaml
route:
  routes:
    - match:
        severity: critical
      receiver: pagerduty
    - match:
        severity: warning
      receiver: slack
```
Explain this routing.

---

### Grafana Fundamentals

431. What is Grafana?
432. What is the purpose of Grafana?
433. What is Grafana used for?
434. What is the difference between Prometheus and Grafana?
435. What is data visualization?
436. What is a dashboard?
437. What is a panel in Grafana?
438. What is a data source in Grafana?
439. What data sources does Grafana support?
440. Can Grafana connect to Prometheus?
441. Can Grafana connect to Elasticsearch?
442. Can Grafana connect to MySQL?
443. What is the Grafana architecture?
444. What is the Grafana server?
445. What port does Grafana run on?
446. What is the default port for Grafana?
447. How do you install Grafana?
448. How do you access Grafana UI?
449. What is the default username and password?
450. How do you add a data source?
451. 
```
Configuration → Data Sources → Add data source → Prometheus
```
What is this process?

452. What is the Prometheus URL in Grafana?
453. 
```
http://localhost:9090
```
Is this a valid Prometheus URL?

454. What is the scrape interval in Grafana?
455. What is query editor in Grafana?
456. How do you write PromQL in Grafana?
457. What is the query inspector?
458. What is the time range selector?
459. What is auto-refresh in Grafana?
460. What is the refresh interval?

---

### Grafana Dashboards

461. What is a Grafana dashboard?
462. How do you create a dashboard?
463. What is a panel?
464. What are the types of panels?
465. What is a graph panel?
466. What is a stat panel?
467. What is a gauge panel?
468. What is a table panel?
469. What is a heatmap panel?
470. What is a bar chart panel?
471. When should you use a graph panel?
472. When should you use a stat panel?
473. When should you use a gauge panel?
474. What is a time series panel?
475. What is the difference between graph and time series panel?
476. How do you add a panel to dashboard?
477. How do you edit a panel?
478. What is panel title?
479. What is panel description?
480. What is the query in panel?
481. 
```
rate(http_requests_total[5m])
```
How do you use this in Grafana panel?

482. What is legend in Grafana?
483. What is legend format?
484. 
```
{{method}} - {{status}}
```
What does this legend format show?

485. What is the Y-axis configuration?
486. What is the X-axis configuration?
487. What is unit in Grafana?
488. What are the available units?
489. What is `bytes` unit?
490. What is `percent` unit?
491. What is `ops` (operations per second)?
492. What is threshold in Grafana?
493. How do you set thresholds?
494. 
```
Thresholds: 80 (yellow), 90 (red)
```
What does this mean?

495. What is value mapping?
496. What is the purpose of value mapping?
497. What is dashboard variable?
498. What is a template variable?
499. How do you create a variable?
500. 
```
Variable: instance
Query: label_values(up, instance)
```
What does this do?

501. How do you use variables in queries?
502. 
```
rate(http_requests_total{instance="$instance"}[5m])
```
What does `$instance` do?

503. What is multi-select variable?
504. What is the `All` option in variables?
505. What is dashboard row?
506. What is the purpose of rows?
507. What is dashboard annotation?
508. What is the purpose of annotations?
509. How do you add annotations?
510. What is dashboard link?
511. What is dashboard tags?
512. What is dashboard sharing?
513. How do you share a dashboard?
514. What is dashboard export?
515. What is dashboard import?
516. What is dashboard JSON?
517. How do you export dashboard as JSON?
518. How do you import dashboard from JSON?
519. What is Grafana dashboard library?
520. Where can you find pre-built dashboards?

---

### Grafana Alerting

521. What is Grafana alerting?
522. How is Grafana alerting different from Prometheus alerting?
523. Can you use both Grafana and Prometheus alerting?
524. How do you create an alert in Grafana?
525. What is alert rule in Grafana?
526. What is alert condition?
527. 
```
WHEN avg() OF query(A, 5m, now) IS ABOVE 80
```
Explain this alert condition.

528. What is the evaluation interval?
529. What is the `for` duration in Grafana alerts?
530. What is alert state?
531. What are the alert states in Grafana?
532. What is `OK` state?
533. What is `Pending` state?
534. What is `Alerting` state?
535. What is `No Data` state?
536. What is notification channel?
537. What notification channels does Grafana support?
538. How do you configure email notification?
539. How do you configure Slack notification?
540. How do you configure webhook notification?
541. What is alert notification template?
542. What is alert message customization?
543. What is alert testing?
544. How do you test an alert?
545. What is alert history?
546. Where can you view alert history?
547. What is alert silencing in Grafana?
548. What is alert grouping in Grafana?
549. What is unified alerting?
550. What is the difference between legacy and unified alerting?

---

### Grafana Advanced Features

551. What is Grafana organization?
552. What is multi-tenancy in Grafana?
553. What is Grafana user?
554. What are user roles in Grafana?
555. What is Admin role?
556. What is Editor role?
557. What is Viewer role?
558. What is the difference between Editor and Viewer?
559. What is Grafana team?
560. What is the purpose of teams?
561. What is dashboard permissions?
562. How do you set dashboard permissions?
563. What is folder in Grafana?
564. What is the purpose of folders?
565. What is Grafana playlist?
566. What is the purpose of playlists?
567. What is kiosk mode?
568. What is TV mode in Grafana?
569. What is snapshot in Grafana?
570. What is the purpose of snapshots?
571. How do you create a snapshot?
572. What is the difference between snapshot and export?
573. What is Grafana API?
574. What is the HTTP API?
575. How do you create dashboard via API?
576. What is API key in Grafana?
577. How do you generate API key?
578. What is provisioning in Grafana?
579. What is configuration as code?
580. How do you provision data sources?
581. 
```yaml
apiVersion: 1
datasources:
  - name: Prometheus
    type: prometheus
    url: http://localhost:9090
    isDefault: true
```
What does this provisioning file do?

582. How do you provision dashboards?
583. What is the provisioning directory?
584. What is Grafana plugin?
585. What types of plugins are available?
586. What is panel plugin?
587. What is data source plugin?
588. What is app plugin?
589. How do you install a plugin?
590. What is Grafana Cloud?
591. What is the difference between Grafana OSS and Grafana Cloud?
592. What is Grafana Loki?
593. What is Grafana Tempo?
594. What is Grafana Mimir?
595. What is the LGTM stack?
596. What does LGTM stand for?
597. What is Loki in LGTM?
598. What is Grafana in LGTM?
599. What is Tempo in LGTM?
600. What is Mimir in LGTM?

---

### New Relic Fundamentals

601. What is New Relic?
602. What is the purpose of New Relic?
603. What is APM in New Relic?
604. What is Infrastructure monitoring in New Relic?
605. What is Browser monitoring in New Relic?
606. What is Mobile monitoring in New Relic?
607. What is Synthetic monitoring in New Relic?
608. What is the difference between New Relic and Prometheus?
609. What is the difference between New Relic and Grafana?
610. Is New Relic a SaaS or self-hosted?
611. What is the New Relic agent?
612. What is the New Relic Node.js agent?
613. How do you install New Relic agent?
614. 
```bash
npm install newrelic
```
What does this do?

615. How do you configure New Relic?
616. What is `newrelic.js` configuration file?
617. 
```js
exports.config = {
  app_name: ['My Application'],
  license_key: 'your_license_key',
  logging: {
    level: 'info'
  }
};
```
Explain this configuration.

618. What is the license key?
619. Where do you get the license key?
620. What is app_name in New Relic?
621. How do you initialize New Relic?
622. 
```js
require('newrelic');
const express = require('express');
```
Why must New Relic be first?

623. What does the New Relic agent do?
624. What is automatic instrumentation?
625. What frameworks does New Relic auto-instrument?
626. Does New Relic instrument Express?
627. Does New Relic instrument database queries?
628. What is transaction in New Relic?
629. What is transaction trace?
630. What is the purpose of transaction traces?

---

### New Relic APM

631. What is Application Performance Monitoring?
632. What metrics does New Relic APM collect?
633. What is response time?
634. What is throughput in New Relic?
635. What is error rate in New Relic?
636. What is Apdex score?
637. How is Apdex calculated?
638. What is a satisfactory response time?
639. What is a tolerable response time?
640. What is a frustrated response time?
641. What is the Apdex threshold?
642. What is transaction breakdown?
643. What is the New Relic UI?
644. What is the APM Summary page?
645. What is the Transactions page?
646. What is the Databases page?
647. What is the External services page?
648. What is the Errors page?
649. What is error tracking in New Relic?
650. How does New Relic capture errors?
651. What is error rate percentage?
652. What is error trace?
653. What information is in error trace?
654. What is stack trace in New Relic?
655. What is slow transaction?
656. What is the slow transaction threshold?
657. What is transaction trace detail?
658. What is the waterfall view?
659. What is database query analysis?
660. What is slow query?
661. What is the N+1 query problem?
662. Can New Relic detect N+1 queries?
663. What is external service call?
664. What is external service monitoring?
665. What is service map?
666. What is distributed tracing in New Relic?
667. How does distributed tracing work?
668. What is trace ID in New Relic?
669. What is span in New Relic?
670. What is the difference between transaction trace and distributed trace?

---

### New Relic Custom Instrumentation

671. What is custom instrumentation?
672. Why do you need custom instrumentation?
673. How do you create custom transactions?
674. 
```js
const newrelic = require('newrelic');

newrelic.startWebTransaction('myTransaction', function() {
  // Your code
  newrelic.endTransaction();
});
```
What does this do?

675. What is custom metric?
676. How do you record custom metrics?
677. 
```js
newrelic.recordMetric('Custom/MyMetric', 42);
```
What does this do?

678. What is custom event?
679. How do you record custom events?
680. 
```js
newrelic.recordCustomEvent('Purchase', {
  userId: 123,
  amount: 99.99,
  product: 'Premium Plan'
});
```
What does this do?

681. What is custom attribute?
682. How do you add custom attributes?
683. 
```js
newrelic.addCustomAttribute('userId', 123);
```
What does this do?

684. What is the difference between metric and event?
685. When should you use custom metrics?
686. When should you use custom events?
687. What is New Relic Insights?
688. What is NRQL?
689. What does NRQL stand for?
690. 
```sql
SELECT count(*) FROM Transaction WHERE appName = 'MyApp'
```
What does this NRQL query do?

691. How is NRQL different from SQL?
692. What is the FROM clause in NRQL?
693. What event types are available?
694. What is Transaction event?
695. What is TransactionError event?
696. What is PageView event?
697. What is the WHERE clause in NRQL?
698. What is the FACET clause in NRQL?
699. 
```sql
SELECT average(duration) FROM Transaction FACET appName
```
What does this do?

700. What is the TIMESERIES clause?
701. 
```sql
SELECT count(*) FROM Transaction TIMESERIES
```
What does this do?

---

### New Relic Dashboards and Alerts

702. What is a New Relic dashboard?
703. How do you create a dashboard?
704. What is a widget in New Relic?
705. What types of widgets are available?
706. What is billboard widget?
707. What is line chart widget?
708. What is table widget?
709. How do you add a widget?
710. What is the data source for widgets?
711. How do you use NRQL in widgets?
712. What is dashboard sharing?
713. What is dashboard export?
714. What is alerting in New Relic?
715. What is an alert policy?
716. What is an alert condition?
717. How do you create an alert?
718. What is the alert threshold?
719. 
```
Alert when: Response time > 2 seconds for at least 5 minutes
```
Explain this alert condition.

720. What is critical threshold?
721. What is warning threshold?
722. What is the difference between critical and warning?
723. What is incident in New Relic?
724. What is incident lifecycle?
725. What are incident states?
726. What is open incident?
727. What is acknowledged incident?
728. What is closed incident?
729. What is notification channel in New Relic?
730. What notification channels are supported?
731. How do you configure email notification?
732. How do you configure Slack notification?
733. How do you configure PagerDuty integration?
734. What is webhook notification?
735. What is runbook URL?
736. What is the purpose of runbook URL?
737. What is incident intelligence?
738. What is alert correlation?
739. What is anomaly detection in New Relic?
740. What is baseline alerting?

---

### New Relic Infrastructure Monitoring

741. What is Infrastructure monitoring?
742. What is the Infrastructure agent?
743. How do you install Infrastructure agent?
744. What metrics does Infrastructure agent collect?
745. What is CPU metrics?
746. What is memory metrics?
747. What is disk metrics?
748. What is network metrics?
749. What is process monitoring?
750. What is the Processes page?
751. What is host monitoring?
752. What is the Hosts page?
753. What is inventory in New Relic?
754. What is the Inventory page?
755. What is events in Infrastructure?
756. What is the Events page?
757. What is integration in New Relic?
758. What is on-host integration?
759. What is cloud integration?
760. What is AWS integration?
761. How do you integrate AWS with New Relic?
762. What AWS services can New Relic monitor?
763. What is EC2 monitoring?
764. What is RDS monitoring?
765. What is Lambda monitoring?
766. What is ELB monitoring?
767. What is Azure integration?
768. What is GCP integration?
769. What is Kubernetes integration?
770. What is Docker integration?
771. What is the Kubernetes cluster explorer?
772. What is container monitoring?
773. What is pod monitoring?
774. What is node monitoring in Kubernetes?
775. What is log forwarding in New Relic?
776. What is New Relic Logs?
777. How do you send logs to New Relic?
778. What is logs in context?
779. What is the benefit of logs in context?
780. How does New Relic correlate logs with APM?

---

### Monitoring Best Practices

781. What is the golden rule of monitoring?
782. What should you monitor?
783. What should you NOT monitor?
784. What is alert fatigue?
785. What causes alert fatigue?
786. How do you prevent alert fatigue?
787. What is actionable alert?
788. What is non-actionable alert?
789. Should every alert require action?
790. What is the difference between alert and notification?
791. What is on-call rotation?
792. What is incident response?
793. What is incident postmortem?
794. What is the purpose of postmortem?
795. What is SRE (Site Reliability Engineering)?
796. What is error budget?
797. What is the relationship between SLO and error budget?
798. What is monitoring as code?
799. What is infrastructure as code for monitoring?
800. How do you version control dashboards?
801. How do you version control alerts?
802. What is monitoring coverage?
803. What is the 4 golden signals coverage?
804. What is end-to-end monitoring?
805. What is black box monitoring?
806. What is white box monitoring?
807. What is the difference between black box and white box?
808. What is health check endpoint?
809. 
```js
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});
```
What is this endpoint for?

810. What should a health check include?
811. What is readiness check?
812. What is liveness check?
813. What is the difference between readiness and liveness?
814. What is dependency health check?
815. 
```js
app.get('/health', async (req, res) => {
  const dbHealthy = await checkDatabase();
  const redisHealthy = await checkRedis();
  
  if (dbHealthy && redisHealthy) {
    res.status(200).json({ status: 'healthy' });
  } else {
    res.status(503).json({ status: 'unhealthy' });
  }
});
```
What does this health check do?

816. What is monitoring overhead?
817. What is the performance impact of monitoring?
818. How do you minimize monitoring overhead?
819. What is sampling in monitoring?
820. What is the trade-off of sampling?
821. What is cardinality explosion?
822. How do you prevent cardinality explosion?
823. What is metric aggregation strategy?
824. What is the retention strategy?
825. How long should you retain metrics?
826. How long should you retain logs?
827. What is hot storage?
828. What is cold storage?
829. What is the cost of monitoring?
830. How do you optimize monitoring costs?
831. What is the ROI of monitoring?
832. What is observability maturity model?
833. What are the levels of observability maturity?
834. What is reactive monitoring?
835. What is proactive monitoring?
836. What is predictive monitoring?
837. What is AIOps?
838. What is the role of AI in monitoring?
839. What is anomaly detection?
840. What is trend analysis?
841. What is capacity planning with monitoring?
842. How do you use monitoring data for capacity planning?
843. What is performance optimization with monitoring?
844. How do you identify performance bottlenecks?
845. What is the monitoring feedback loop?
846. What is continuous improvement?
847. What is monitoring documentation?
848. What should you document?
849. What is runbook?
850. What should a runbook include?
851. What is monitoring training?
852. Why is team training important?
853. What is monitoring culture?
854. What is blameless postmortem?
855. What is the purpose of blameless culture?
856. What is monitoring evolution?
857. How should monitoring evolve with the system?
858. What is the future of monitoring?
859. What is unified observability?
860. What is OpenTelemetry?
861. What is the purpose of OpenTelemetry?
862. What is the difference between OpenTelemetry and Prometheus?
863. What is vendor lock-in in monitoring?
864. How do you avoid vendor lock-in?
865. What is multi-cloud monitoring?
866. What is hybrid cloud monitoring?
867. What is edge monitoring?
868. What is IoT monitoring?
869. What is serverless monitoring?
870. What are the challenges of serverless monitoring?
871. What is cold start monitoring?
872. What is function duration monitoring?
873. What is monitoring for microservices?
874. What are the challenges of microservices monitoring?
875. What is service mesh observability?
876. What is Istio telemetry?
877. What is distributed tracing importance?
878. What is trace sampling?
879. What is head-based sampling?
880. What is tail-based sampling?
881. What is the difference between head and tail sampling?
882. What is monitoring automation?
883. What is auto-remediation?
884. What is self-healing system?
885. What is chaos engineering?
886. What is the relationship between monitoring and chaos engineering?
887. What is observability-driven development?
888. What is the shift-left approach?
889. What is monitoring in CI/CD?
890. What is deployment monitoring?
891. What is canary deployment monitoring?
892. What is blue-green deployment monitoring?
893. What is rollback based on monitoring?
894. What is feature flag monitoring?
895. What is A/B testing monitoring?
896. What is business metrics monitoring?
897. What is revenue monitoring?
898. What is user engagement monitoring?
899. What is conversion rate monitoring?
900. What is the holistic view of monitoring?
