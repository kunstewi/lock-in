## Apache Kafka Fundamentals

### Kafka Basics

1. What is Apache Kafka?
2. Who created Kafka and when?
3. What company originally developed Kafka?
4. What is the main purpose of Kafka?
5. What are the primary use cases for Kafka?
6. What is event streaming?
7. What is a distributed streaming platform?
8. What is the difference between Kafka and traditional message queues?
9. What is the difference between Kafka and RabbitMQ?
10. What is the difference between Kafka and Redis Pub/Sub?
11. When should you use Kafka?
12. When should you NOT use Kafka?
13. What are the advantages of Kafka?
14. What are the disadvantages of Kafka?
15. What is the CAP theorem and how does Kafka relate to it?
16. Is Kafka AP or CP in CAP theorem?
17. What is eventual consistency in Kafka?
18. What is the default port for Kafka?
19. What is the default port for Zookeeper?
20. What is Apache ZooKeeper?

---

### Kafka Architecture

21. What are the main components of Kafka architecture?
22. What is a Kafka broker?
23. What is a Kafka cluster?
24. What is a Kafka topic?
25. What is a Kafka partition?
26. What is a Kafka producer?
27. What is a Kafka consumer?
28. What is a consumer group?
29. What is Zookeeper's role in Kafka?
30. What is KRaft (Kafka Raft)?
31. What is the difference between Zookeeper-based and KRaft-based Kafka?
32. What is a Kafka controller?
33. What is a leader in Kafka?
34. What is a follower in Kafka?
35. What is replication in Kafka?
36. What is the replication factor?
37. What is ISR (In-Sync Replicas)?
38. What is a Kafka offset?
39. What is offset management?
40. What is a Kafka message?

---

### Kafka Topics and Partitions

41. How do you create a Kafka topic?
42. 
```bash
kafka-topics.sh --create --topic my-topic --bootstrap-server localhost:9092 --partitions 3 --replication-factor 2
```
Explain this command.

43. What is the `--partitions` parameter?
44. What is the `--replication-factor` parameter?
45. How many partitions should a topic have?
46. What factors determine the number of partitions?
47. What is partition key?
48. How does Kafka decide which partition to send a message to?
49. What is the default partitioning strategy?
50. What is round-robin partitioning?
51. What is key-based partitioning?
52. What is custom partitioning?
53. Can you change the number of partitions after topic creation?
54. Can you decrease the number of partitions?
55. What is partition rebalancing?
56. What is a partition leader?
57. What is partition replica?
58. What happens if a partition leader fails?
59. What is leader election?
60. What is the preferred leader?

---

### Kafka Producers

61. What is a Kafka producer?
62. How do you create a Kafka producer in Node.js?
63. 
```javascript
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();
```
Explain this code.

64. What is `clientId`?
65. What is `brokers`?
66. How do you send a message to Kafka?
67. 
```javascript
await producer.connect();
await producer.send({
  topic: 'my-topic',
  messages: [
    { key: 'user-123', value: 'Hello Kafka' }
  ]
});
```
Explain this code.

68. What is the message key?
69. What is the message value?
70. Why is the message key important?
71. What is message ordering in Kafka?
72. Does Kafka guarantee message ordering?
73. What is the ordering guarantee within a partition?
74. What is the ordering guarantee across partitions?
75. What is idempotent producer?
76. 
```javascript
const producer = kafka.producer({
  idempotent: true
});
```
What does this do?

77. What problem does idempotent producer solve?
78. What is producer acknowledgment?
79. What is `acks` configuration?
80. 
```javascript
await producer.send({
  topic: 'my-topic',
  messages: [{ value: 'Hello' }],
  acks: 1
});
```
What does `acks: 1` mean?

81. What is `acks: 0`?
82. What is `acks: -1` or `acks: all`?
83. What is the trade-off between different acks values?
84. What is producer retry?
85. What is `retries` configuration?
86. What is producer timeout?
87. What is batching in Kafka producer?
88. What is `batch.size`?
89. What is `linger.ms`?
90. 
```javascript
const producer = kafka.producer({
  batch: { size: 16384 },
  linger: { ms: 10 }
});
```
Explain this configuration.

91. What is compression in Kafka?
92. What compression algorithms does Kafka support?
93. 
```javascript
await producer.send({
  topic: 'my-topic',
  messages: [{ value: 'Hello' }],
  compression: 'gzip'
});
```
What does this do?

94. When should you use compression?
95. What is the trade-off of compression?
96. What is producer buffer memory?
97. What happens if producer buffer is full?
98. What is `max.in.flight.requests.per.connection`?
99. What is producer transaction?
100. What is exactly-once semantics?

---

### Kafka Consumers

101. What is a Kafka consumer?
102. How do you create a Kafka consumer in Node.js?
103. 
```javascript
const consumer = kafka.consumer({ 
  groupId: 'my-group' 
});

await consumer.connect();
await consumer.subscribe({ 
  topic: 'my-topic',
  fromBeginning: true 
});
```
Explain this code.

104. What is `groupId`?
105. What is `fromBeginning`?
106. What happens if you don't specify `fromBeginning`?
107. How do you consume messages?
108. 
```javascript
await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      key: message.key.toString(),
      value: message.value.toString(),
      offset: message.offset
    });
  }
});
```
Explain this code.

109. What is `eachMessage`?
110. What is `eachBatch`?
111. When should you use `eachBatch` instead of `eachMessage`?
112. What is consumer group?
113. How do consumer groups work?
114. What is consumer group rebalancing?
115. When does rebalancing happen?
116. What is the impact of rebalancing?
117. What is partition assignment?
118. What is the partition assignment strategy?
119. What is range assignment strategy?
120. What is round-robin assignment strategy?
121. What is sticky assignment strategy?
122. What is cooperative sticky assignment?
123. How many consumers can read from a partition?
124. What happens if you have more consumers than partitions?
125. What happens if you have more partitions than consumers?
126. What is offset commit?
127. What is auto-commit?
128. 
```javascript
const consumer = kafka.consumer({
  groupId: 'my-group',
  autoCommit: true,
  autoCommitInterval: 5000
});
```
What does this do?

129. What is manual commit?
130. 
```javascript
await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    // Process message
    await consumer.commitOffsets([{
      topic,
      partition,
      offset: (parseInt(message.offset) + 1).toString()
    }]);
  }
});
```
Why commit `offset + 1`?

131. What is the difference between auto-commit and manual commit?
132. What is at-least-once delivery?
133. What is at-most-once delivery?
134. What is exactly-once delivery?
135. How do you achieve exactly-once semantics?
136. What is consumer lag?
137. How do you monitor consumer lag?
138. What causes consumer lag?
139. How do you reduce consumer lag?
140. What is consumer heartbeat?

---

### Kafka Message Format

141. What is the structure of a Kafka message?
142. What is message key?
143. What is message value?
144. What is message timestamp?
145. What is message header?
146. 
```javascript
await producer.send({
  topic: 'my-topic',
  messages: [{
    key: 'user-123',
    value: JSON.stringify({ name: 'John', age: 30 }),
    headers: {
      'correlation-id': 'abc-123',
      'source': 'api-gateway'
    },
    timestamp: Date.now()
  }]
});
```
Explain this message structure.

147. What data formats can you use for message value?
148. Should you use JSON or Avro?
149. What is Avro?
150. What is schema registry?
151. What is the purpose of schema registry?
152. What is schema evolution?
153. What is backward compatibility?
154. What is forward compatibility?
155. What is message serialization?
156. What is message deserialization?
157. What is the maximum message size in Kafka?
158. What is `message.max.bytes`?
159. What happens if you send a message larger than the limit?
160. How do you handle large messages?

---

### Kafka Performance and Optimization

161. What makes Kafka fast?
162. What is zero-copy in Kafka?
163. What is sequential I/O?
164. Why is sequential I/O faster than random I/O?
165. What is page cache?
166. How does Kafka use page cache?
167. What is log compaction?
168. 
```bash
kafka-topics.sh --create --topic my-topic --config cleanup.policy=compact
```
What does this do?

169. What is the difference between `delete` and `compact` cleanup policy?
170. When should you use log compaction?
171. What is retention policy?
172. What is `retention.ms`?
173. What is `retention.bytes`?
174. 
```bash
kafka-topics.sh --create --topic my-topic --config retention.ms=604800000
```
How long is this retention period?

175. What is segment in Kafka?
176. What is `segment.ms`?
177. What is `segment.bytes`?
178. What is the relationship between segments and retention?
179. What is Kafka throughput?
180. How do you increase Kafka throughput?
181. What is the role of partitions in performance?
182. What is the role of replication in performance?
183. What is the trade-off between durability and performance?
184. What is producer batching and how does it improve performance?
185. What is consumer batching?
186. What is parallel processing in Kafka?
187. How do you scale Kafka consumers?
188. How do you scale Kafka producers?
189. What is broker load balancing?
190. What is partition reassignment?

---

### Kafka Use Cases and Patterns

191. What is event sourcing?
192. How is Kafka used in event sourcing?
193. What is CQRS (Command Query Responsibility Segregation)?
194. How does Kafka support CQRS?
195. What is Change Data Capture (CDC)?
196. How is Kafka used for CDC?
197. What is Kafka Connect?
198. What is the difference between Kafka Connect and custom consumers?
199. What is a Kafka connector?
200. What is a source connector?
201. What is a sink connector?
202. Give examples of popular Kafka connectors.
203. What is Kafka Streams?
204. What is the difference between Kafka Streams and Kafka consumer?
205. What is stream processing?
206. What is stateless processing?
207. What is stateful processing?
208. What is windowing in stream processing?
209. What is tumbling window?
210. What is hopping window?
211. What is sliding window?
212. What is session window?
213. What is stream-table join?
214. What is KTable in Kafka Streams?
215. What is KStream in Kafka Streams?
216. What is the difference between KStream and KTable?
217. What is log aggregation with Kafka?
218. How do you implement a microservices event bus with Kafka?
219. What is the saga pattern?
220. How does Kafka support distributed transactions?

---

### Kafka in Node.js (KafkaJS)

221. What is KafkaJS?
222. How do you install KafkaJS?
223. 
```javascript
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092', 'kafka2:9092', 'kafka3:9092'],
  retry: {
    initialRetryTime: 100,
    retries: 8
  }
});
```
Explain this configuration.

224. What is the `retry` configuration?
225. How do you handle producer errors?
226. 
```javascript
try {
  await producer.send({
    topic: 'my-topic',
    messages: [{ value: 'Hello' }]
  });
} catch (error) {
  console.error('Error producing message:', error);
}
```
What errors can occur?

227. How do you handle consumer errors?
228. What is graceful shutdown?
229. 
```javascript
const errorTypes = ['unhandledRejection', 'uncaughtException'];
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

errorTypes.forEach(type => {
  process.on(type, async () => {
    await consumer.disconnect();
    process.exit(0);
  });
});

signalTraps.forEach(type => {
  process.once(type, async () => {
    await consumer.disconnect();
    process.exit(0);
  });
});
```
Why is this important?

230. How do you implement dead letter queue with Kafka?
231. 
```javascript
await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    try {
      await processMessage(message);
    } catch (error) {
      await producer.send({
        topic: 'dead-letter-queue',
        messages: [{
          key: message.key,
          value: message.value,
          headers: {
            ...message.headers,
            'error': error.message,
            'original-topic': topic
          }
        }]
      });
    }
  }
});
```
Explain this pattern.

232. What is message retry with exponential backoff?
233. How do you implement idempotent message processing?
234. What is message deduplication?
235. How do you handle out-of-order messages?
236. What is the transactional outbox pattern?
237. How do you implement request-response pattern with Kafka?
238. What is correlation ID?
239. How do you implement Kafka health checks?
240. How do you monitor Kafka in production?

---

### Kafka Operations and Administration

241. How do you install Kafka?
242. How do you start Kafka?
243. 
```bash
# Start Zookeeper
bin/zookeeper-server-start.sh config/zookeeper.properties

# Start Kafka
bin/kafka-server-start.sh config/server.properties
```
Explain these commands.

244. How do you list all topics?
245. 
```bash
kafka-topics.sh --list --bootstrap-server localhost:9092
```
What does this do?

246. How do you describe a topic?
247. 
```bash
kafka-topics.sh --describe --topic my-topic --bootstrap-server localhost:9092
```
What information does this show?

248. How do you delete a topic?
249. What is `delete.topic.enable`?
250. How do you consume messages from the command line?
251. 
```bash
kafka-console-consumer.sh --topic my-topic --from-beginning --bootstrap-server localhost:9092
```
What does this do?

252. How do you produce messages from the command line?
253. 
```bash
kafka-console-producer.sh --topic my-topic --bootstrap-server localhost:9092
```
How do you use this?

254. How do you check consumer group status?
255. 
```bash
kafka-consumer-groups.sh --describe --group my-group --bootstrap-server localhost:9092
```
What information does this show?

256. What is LAG in consumer group output?
257. How do you reset consumer group offset?
258. 
```bash
kafka-consumer-groups.sh --reset-offsets --group my-group --topic my-topic --to-earliest --execute --bootstrap-server localhost:9092
```
What does this do?

259. What is `--to-earliest`?
260. What is `--to-latest`?
261. What is `--shift-by`?
262. How do you increase replication factor?
263. How do you add a new broker to the cluster?
264. How do you remove a broker from the cluster?
265. What is broker decommissioning?
266. What is partition reassignment?
267. How do you monitor Kafka performance?
268. What metrics should you monitor?
269. What is JMX in Kafka?
270. What tools can you use to monitor Kafka?

---

### Kafka with Docker

271. How do you run Kafka with Docker?
272. 
```yaml
version: '3'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - "2181:2181"

  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
```
Explain this Docker Compose configuration.

273. What is `KAFKA_BROKER_ID`?
274. What is `KAFKA_ZOOKEEPER_CONNECT`?
275. What is `KAFKA_ADVERTISED_LISTENERS`?
276. What is `KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR`?
277. Why is it set to 1 in development?
278. How do you run a Kafka cluster with Docker?
279. 
```yaml
kafka1:
  image: confluentinc/cp-kafka:latest
  environment:
    KAFKA_BROKER_ID: 1
    KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka1:9092

kafka2:
  image: confluentinc/cp-kafka:latest
  environment:
    KAFKA_BROKER_ID: 2
    KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka2:9092

kafka3:
  image: confluentinc/cp-kafka:latest
  environment:
    KAFKA_BROKER_ID: 3
    KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka3:9092
```
What does this create?

280. How do you persist Kafka data in Docker?

---

### Kafka Security

281. What are the security features in Kafka?
282. What is authentication in Kafka?
283. What is SASL (Simple Authentication and Security Layer)?
284. What SASL mechanisms does Kafka support?
285. What is SSL/TLS in Kafka?
286. How do you enable SSL in Kafka?
287. What is authorization in Kafka?
288. What is ACL (Access Control List)?
289. How do you create ACLs in Kafka?
290. 
```bash
kafka-acls.sh --add --allow-principal User:alice --operation Read --topic my-topic --bootstrap-server localhost:9092
```
What does this do?

291. What operations can you control with ACLs?
292. What is encryption at rest?
293. What is encryption in transit?
294. Does Kafka support encryption at rest natively?
295. How do you implement end-to-end encryption?
296. What is the performance impact of encryption?
297. What is quota management in Kafka?
298. How do you set quotas for producers?
299. How do you set quotas for consumers?
300. What is the purpose of quotas?

---

## Docker Swarm

### Docker Swarm Fundamentals

301. What is Docker Swarm?
302. What is container orchestration?
303. What is the difference between Docker Swarm and Kubernetes?
304. When should you use Docker Swarm over Kubernetes?
305. When should you use Kubernetes over Docker Swarm?
306. What are the advantages of Docker Swarm?
307. What are the disadvantages of Docker Swarm?
308. What is a swarm?
309. What is a node in Docker Swarm?
310. What is a manager node?
311. What is a worker node?
312. What is the difference between manager and worker nodes?
313. How many manager nodes should you have?
314. What is quorum in Docker Swarm?
315. What is the Raft consensus algorithm?
316. How does Raft work in Docker Swarm?
317. What happens if you lose quorum?
318. What is a service in Docker Swarm?
319. What is a task in Docker Swarm?
320. What is the difference between a service and a task?

---

### Docker Swarm Setup

321. How do you initialize a Docker Swarm?
322. 
```bash
docker swarm init
```
What does this command do?

323. What is the swarm join token?
324. How do you get the join token for workers?
325. 
```bash
docker swarm join-token worker
```
What does this show?

326. How do you get the join token for managers?
327. How do you join a worker node to the swarm?
328. 
```bash
docker swarm join --token SWMTKN-1-xxx 192.168.1.100:2377
```
Explain this command.

329. What is port 2377?
330. How do you promote a worker to manager?
331. 
```bash
docker node promote node-1
```
What does this do?

332. How do you demote a manager to worker?
333. How do you list all nodes?
334. 
```bash
docker node ls
```
What information does this show?

335. What is node availability?
336. What does `Active` availability mean?
337. What does `Drain` availability mean?
338. What does `Pause` availability mean?
339. How do you drain a node?
340. 
```bash
docker node update --availability drain node-1
```
What does this do?

---

### Docker Swarm Services

341. How do you create a service?
342. 
```bash
docker service create --name web --replicas 3 -p 80:80 nginx
```
Explain this command.

343. What is `--replicas`?
344. What is the difference between `docker run` and `docker service create`?
345. How do you list services?
346. 
```bash
docker service ls
```
What does this show?

347. How do you inspect a service?
348. 
```bash
docker service ps web
```
What information does this show?

349. How do you scale a service?
350. 
```bash
docker service scale web=5
```
What does this do?

351. How do you update a service?
352. 
```bash
docker service update --image nginx:1.20 web
```
What does this do?

353. What is rolling update?
354. How does Docker Swarm perform rolling updates?
355. What is `--update-parallelism`?
356. What is `--update-delay`?
357. 
```bash
docker service update --update-parallelism 2 --update-delay 10s web
```
Explain this update strategy.

358. How do you rollback a service?
359. 
```bash
docker service rollback web
```
What does this do?

360. How do you remove a service?
361. What is service mode?
362. What is replicated mode?
363. What is global mode?
364. 
```bash
docker service create --mode global --name monitoring node-exporter
```
What does global mode do?

365. When should you use global mode?
366. What is service placement?
367. What are placement constraints?
368. 
```bash
docker service create --constraint 'node.role==worker' --name app nginx
```
What does this do?

369. What are placement preferences?
370. How do you spread services across availability zones?

---

### Docker Swarm Networking

371. What is overlay network in Docker Swarm?
372. How do you create an overlay network?
373. 
```bash
docker network create --driver overlay my-network
```
What does this do?

374. What is the ingress network?
375. What is the docker_gwbridge network?
376. What is service discovery in Docker Swarm?
377. How does DNS-based service discovery work?
378. 
```bash
docker service create --name web --network my-network nginx
docker service create --name api --network my-network node-app
```
Can `web` service reach `api` service by name?

379. What is the routing mesh?
380. How does the routing mesh work?
381. 
```bash
docker service create --name web --replicas 3 -p 80:80 nginx
```
If you have 5 nodes, can you access the service from any node?

382. What is VIP (Virtual IP)?
383. What is DNSRR (DNS Round Robin)?
384. 
```bash
docker service create --endpoint-mode dnsrr --name web nginx
```
What does this do?

385. When should you use DNSRR instead of VIP?
386. What is load balancing in Docker Swarm?
387. How does Docker Swarm load balance requests?
388. What is external load balancer?
389. How do you integrate Docker Swarm with external load balancer?
390. What is published port mode?

---

### Docker Swarm Volumes and Storage

391. How do you use volumes with Docker Swarm?
392. 
```bash
docker service create --mount type=volume,source=my-vol,target=/data nginx
```
Explain this command.

393. What is the problem with volumes in Swarm?
394. What is a volume driver?
395. What are some popular volume drivers for Swarm?
396. What is NFS volume?
397. How do you use NFS with Docker Swarm?
398. What is bind mount in Swarm?
399. 
```bash
docker service create --mount type=bind,source=/host/path,target=/container/path nginx
```
What is the limitation of bind mounts in Swarm?

400. What is tmpfs mount?

---

### Docker Swarm Secrets and Configs

401. What are Docker secrets?
402. How do you create a secret?
403. 
```bash
echo "mypassword" | docker secret create db_password -
```
What does this do?

404. How do you use a secret in a service?
405. 
```bash
docker service create --secret db_password --name app my-app
```
Where is the secret available in the container?

406. How do you access secrets in your application?
407. 
```javascript
const fs = require('fs');
const password = fs.readFileSync('/run/secrets/db_password', 'utf8');
```
Explain this code.

408. How do you update a secret?
409. Can you update a secret in place?
410. How do you rotate secrets?
411. What are Docker configs?
412. What is the difference between secrets and configs?
413. How do you create a config?
414. 
```bash
docker config create nginx_config nginx.conf
```
What does this do?

415. How do you use a config in a service?
416. 
```bash
docker service create --config source=nginx_config,target=/etc/nginx/nginx.conf nginx
```
Explain this command.

417. How do you update a config?
418. What is the advantage of configs over bind mounts?
419. Can you use secrets and configs together?
420. How are secrets stored?

---

### Docker Stack

421. What is Docker Stack?
422. What is the difference between Docker Compose and Docker Stack?
423. How do you deploy a stack?
424. 
```bash
docker stack deploy -c docker-compose.yml my-stack
```
What does this do?

425. 
```yaml
version: '3.8'
services:
  web:
    image: nginx
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
    ports:
      - "80:80"
    networks:
      - webnet

networks:
  webnet:
    driver: overlay
```
Explain this stack file.

426. What is the `deploy` section?
427. What is `update_config`?
428. What is `restart_policy`?
429. What restart conditions are available?
430. What is `on-failure`?
431. What is `any`?
432. How do you list stacks?
433. 
```bash
docker stack ls
```
What does this show?

434. How do you list services in a stack?
435. 
```bash
docker stack services my-stack
```
What does this show?

436. How do you remove a stack?
437. 
```bash
docker stack rm my-stack
```
What happens to the services?

438. Can you use Docker Compose v2 features with Stack?
439. What Stack-specific features are available?
440. How do you use secrets in a stack file?

---

### Docker Swarm High Availability

441. What is high availability in Docker Swarm?
442. How many manager nodes for HA?
443. What is the recommended number of managers?
444. Why use odd number of managers?
445. What is split-brain problem?
446. How does Raft prevent split-brain?
447. What happens if a manager node fails?
448. What happens if all manager nodes fail?
449. How do you recover from manager failure?
450. What is node failure detection?
451. What is heartbeat in Docker Swarm?
452. What is the default heartbeat interval?
453. How do you backup Docker Swarm?
454. What should you backup?
455. How do you restore Docker Swarm?
456. What is disaster recovery plan?
457. What is multi-datacenter deployment?
458. Can you run Docker Swarm across multiple regions?
459. What are the challenges of multi-region Swarm?
460. What is the recommended topology for HA?

---

### Docker Swarm Monitoring and Logging

461. How do you monitor Docker Swarm?
462. What metrics should you monitor?
463. What is Prometheus?
464. How do you integrate Prometheus with Docker Swarm?
465. What is cAdvisor?
466. How do you deploy cAdvisor in Swarm?
467. What is Grafana?
468. How do you visualize Swarm metrics?
469. What is centralized logging?
470. How do you collect logs from Swarm services?
471. What is the ELK stack?
472. How do you deploy ELK in Swarm?
473. What is Fluentd?
474. What is the logging driver?
475. 
```bash
docker service create --log-driver json-file --log-opt max-size=10m nginx
```
What does this do?

476. What logging drivers are available?
477. What is the `json-file` driver?
478. What is the `syslog` driver?
479. What is the `gelf` driver?
480. How do you view service logs?

---

### Docker Swarm Security

481. What are security best practices for Docker Swarm?
482. What is mutual TLS in Swarm?
483. How does Swarm secure node communication?
484. What is certificate rotation?
485. How often does Swarm rotate certificates?
486. How do you change certificate rotation period?
487. What is the swarm CA?
488. How do you use external CA?
489. What is node authorization?
490. How do you secure the Docker daemon?
491. What is the Docker socket?
492. Why is exposing Docker socket dangerous?
493. How do you implement RBAC in Swarm?
494. What is the principle of least privilege?
495. How do you scan images for vulnerabilities?
496. What is Docker Content Trust?
497. How do you enable image signing?
498. What is network segmentation?
499. How do you isolate services in Swarm?
500. What is the security impact of using host network mode?

---

### Docker Swarm vs Kubernetes

501. What are the main differences between Swarm and Kubernetes?
502. Which is easier to set up?
503. Which is more feature-rich?
504. Which has better community support?
505. Which is better for small teams?
506. Which is better for large enterprises?
507. What is the learning curve difference?
508. What is the ecosystem difference?
509. Can you migrate from Swarm to Kubernetes?
510. What is Kompose?
511. How does service discovery differ?
512. How does load balancing differ?
513. How does auto-scaling differ?
514. Does Swarm support HPA (Horizontal Pod Autoscaling)?
515. What is the equivalent of Kubernetes Deployment in Swarm?
516. What is the equivalent of Kubernetes StatefulSet in Swarm?
517. What is the equivalent of Kubernetes DaemonSet in Swarm?
518. Does Swarm have namespaces?
519. How does configuration management differ?
520. What is the future of Docker Swarm?

---

### Practical Scenarios

521. You have a Node.js app that needs to process Kafka messages. Design the architecture.

522. You need to deploy a microservices application with 5 services using Docker Swarm. How do you ensure high availability?

523. Your Kafka consumer is lagging. What steps do you take to diagnose and fix?

524. You need to perform a zero-downtime deployment of a service in Docker Swarm. How?

525. Design a logging architecture for a Swarm cluster with 10 services.

526. How do you implement blue-green deployment in Docker Swarm?

527. Your Kafka cluster is running out of disk space. What do you do?

528. How do you implement canary deployment in Docker Swarm?

529. You need to process 1 million events per day with Kafka. How many partitions do you create?

530. Design a disaster recovery plan for a production Swarm cluster.

531. How do you handle database migrations in a Swarm environment?

532. Your application needs to send emails when Kafka messages are received. Design the system.

533. How do you implement circuit breaker pattern with Kafka consumers?

534. You need to ensure exactly-once processing of Kafka messages. How?

535. Design a multi-tenant Kafka architecture.

536. How do you implement rate limiting for Kafka producers?

537. Your Swarm cluster has uneven load distribution. How do you fix it?

538. How do you implement health checks for services in Swarm?

539. Design a CI/CD pipeline for deploying to Docker Swarm.

540. How do you handle secrets rotation in a production Swarm cluster?

541. You need to migrate from RabbitMQ to Kafka. What's your strategy?

542. How do you implement request tracing across microservices in Swarm?

543. Design a monitoring and alerting system for Kafka.

544. How do you handle schema changes in Kafka messages?

545. Your Swarm cluster needs to scale from 3 to 20 nodes. What challenges do you face?

546. How do you implement data retention policies in Kafka?

547. Design a fault-tolerant event processing system with Kafka.

548. How do you test Kafka consumers locally?

549. How do you implement graceful shutdown for Swarm services?

550. Design a complete microservices platform using Kafka and Docker Swarm.

---

