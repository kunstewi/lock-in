### Docker Fundamentals

1. What is Docker?
2. What problem does Docker solve?
3. What is containerization?
4. What is the difference between virtualization and containerization?
5. What is a Virtual Machine (VM)?
6. How is Docker different from a Virtual Machine?
7. What are the benefits of using Docker?
8. What are the drawbacks of using Docker?
9. What is a container?
10. What is a Docker image?
11. What is the difference between a Docker image and a Docker container?
12. What is the Docker Engine?
13. What are the components of Docker Engine?
14. What is the Docker daemon?
15. What is the Docker client?
16. What is the Docker CLI?
17. What is Docker Desktop?
18. What operating systems does Docker support?
19. Can you run Docker on Windows?
20. Can you run Docker on macOS?
21. What is Docker Hub?
22. What is a container registry?
23. What is the difference between Docker Hub and a private registry?
24. What is the Docker architecture?
25. What is the client-server architecture in Docker?
26. What is a Docker host?
27. What is the Docker REST API?
28. What is containerd?
29. What is runc?
30. What is the OCI (Open Container Initiative)?

---

### Docker Installation and Setup

31. How do you install Docker on Linux?
32. How do you install Docker on macOS?
33. How do you install Docker on Windows?
34. What is WSL2 (Windows Subsystem for Linux)?
35. Why do you need WSL2 for Docker on Windows?
36. How do you verify Docker installation?
37. What is the `docker --version` command?
38. What is the `docker info` command?
39. What information does `docker info` provide?
40. How do you start the Docker daemon?
41. How do you stop the Docker daemon?
42. What is the Docker daemon socket?
43. What is `/var/run/docker.sock`?
44. How do you run Docker without sudo on Linux?
45. What is the `docker` user group?
46. What are the security implications of adding a user to the docker group?
47. How do you configure Docker daemon?
48. What is the `daemon.json` file?
49. Where is the Docker configuration file located?
50. How do you set Docker daemon options?
51. What is the Docker data directory?
52. Where does Docker store images and containers?
53. How do you change the Docker data directory?
54. What is Docker context?
55. How do you manage multiple Docker hosts?
56. What is the `docker context` command?
57. How do you switch between Docker contexts?
58. What is Docker Buildx?
59. What is the difference between `docker build` and `docker buildx`?
60. How do you enable experimental features in Docker?

---

### Docker Images

61. What is a Docker image?
62. What is an image layer?
63. How are Docker images structured?
64. What is the layered filesystem in Docker?
65. What is the Union File System (UnionFS)?
66. What is the benefit of layered images?
67. How do you list Docker images?
68. What is the `docker images` command?
69. What is the `docker image ls` command?
70. What information is shown in `docker images`?
71. What is an image ID?
72. What is an image tag?
73. What is the `latest` tag?
74. Should you use the `latest` tag in production?
75. How do you pull a Docker image?
76. What is the `docker pull` command?
77. 
```bash
docker pull nginx:1.21
```
What does this command do?
78. How do you pull all tags of an image?
79. What is the default registry for `docker pull`?
80. How do you pull from a private registry?
81. How do you push a Docker image?
82. What is the `docker push` command?
83. How do you tag a Docker image?
84. What is the `docker tag` command?
85. 
```bash
docker tag myapp:latest myregistry.com/myapp:v1.0
```
Explain this command.
86. How do you remove a Docker image?
87. What is the `docker rmi` command?
88. What is the `docker image rm` command?
89. How do you remove all unused images?
90. What is the `docker image prune` command?
91. What is a dangling image?
92. How do you remove dangling images?
93. How do you inspect a Docker image?
94. What is the `docker inspect` command?
95. What is the `docker history` command?
96. What does `docker history` show?
97. How do you see the layers of an image?
98. How do you search for images on Docker Hub?
99. What is the `docker search` command?
100. How do you filter search results?
101. What is image digest?
102. What is the difference between tag and digest?
103. How do you pull an image by digest?
104. What is a multi-architecture image?
105. What is a manifest list?
106. How do you build multi-architecture images?
107. What is the `--platform` flag?
108. How do you save a Docker image to a file?
109. What is the `docker save` command?
110. How do you load a Docker image from a file?
111. What is the `docker load` command?
112. What is the difference between `docker save` and `docker export`?
113. How do you export a container filesystem?
114. What is the `docker export` command?
115. How do you import a container filesystem?
116. What is the `docker import` command?
117. What is the difference between `docker load` and `docker import`?
118. How do you reduce Docker image size?
119. What is image optimization?
120. What is the `.dockerignore` file?

---

### Dockerfile

121. What is a Dockerfile?
122. What is the purpose of a Dockerfile?
123. What is the basic structure of a Dockerfile?
124. What is the `FROM` instruction?
125. 
```dockerfile
FROM node:18-alpine
```
What does this instruction do?
126. Can you have multiple `FROM` instructions?
127. What is a multi-stage build?
128. What is the `RUN` instruction?
129. What is the difference between `RUN` and `CMD`?
130. 
```dockerfile
RUN npm install
```
What does this do?
131. How do you run multiple commands in a single `RUN` instruction?
132. Why should you combine `RUN` commands?
133. What is the `COPY` instruction?
134. What is the `ADD` instruction?
135. What is the difference between `COPY` and `ADD`?
136. Which should you prefer: `COPY` or `ADD`?
137. 
```dockerfile
COPY package*.json ./
```
What does this do?
138. What is the `WORKDIR` instruction?
139. What happens if the directory doesn't exist?
140. 
```dockerfile
WORKDIR /app
```
What does this do?
141. What is the `CMD` instruction?
142. What is the difference between shell form and exec form?
143. 
```dockerfile
CMD ["npm", "start"]
```
What form is this?
144. 
```dockerfile
CMD npm start
```
What form is this?
145. Can you have multiple `CMD` instructions?
146. What is the `ENTRYPOINT` instruction?
147. What is the difference between `CMD` and `ENTRYPOINT`?
148. How do `CMD` and `ENTRYPOINT` work together?
149. 
```dockerfile
ENTRYPOINT ["node"]
CMD ["app.js"]
```
What will be executed?
150. What is the `ENV` instruction?
151. How do you set environment variables in Dockerfile?
152. 
```dockerfile
ENV NODE_ENV=production
```
What does this do?
153. What is the `ARG` instruction?
154. What is the difference between `ARG` and `ENV`?
155. When are `ARG` variables available?
156. How do you pass build arguments?
157. What is the `--build-arg` flag?
158. 
```bash
docker build --build-arg VERSION=1.0 .
```
Explain this command.
159. What is the `EXPOSE` instruction?
160. 
```dockerfile
EXPOSE 3000
```
What does this do?
161. Does `EXPOSE` actually publish the port?
162. What is the `VOLUME` instruction?
163. What does `VOLUME` do?
164. Should you use `VOLUME` in Dockerfile?
165. What is the `USER` instruction?
166. Why should you use a non-root user?
167. 
```dockerfile
USER node
```
What does this do?
168. What is the `LABEL` instruction?
169. How do you add metadata to an image?
170. What is the `HEALTHCHECK` instruction?
171. How do you define a health check in Dockerfile?
172. What is the `SHELL` instruction?
173. What is the `ONBUILD` instruction?
174. When is `ONBUILD` triggered?
175. What is the `STOPSIGNAL` instruction?
176. What is the build context?
177. What is the `.` in `docker build .`?
178. How do you specify a different Dockerfile?
179. What is the `-f` flag in `docker build`?
180. How do you name an image during build?
181. What is the `-t` flag in `docker build`?
182. 
```bash
docker build -t myapp:v1.0 .
```
Explain this command.
183. What is the `--no-cache` flag?
184. When should you use `--no-cache`?
185. What is the `--target` flag?
186. How do you build a specific stage in multi-stage builds?
187. What is the `--platform` flag in `docker build`?
188. How do you build for different architectures?
189. What is BuildKit?
190. How do you enable BuildKit?
191. What are the benefits of BuildKit?
192. What is the `DOCKER_BUILDKIT=1` environment variable?
193. What is the `--progress` flag?
194. What is the `--secret` flag in BuildKit?
195. How do you use secrets during build?
196. What is the `--ssh` flag in BuildKit?
197. How do you use SSH keys during build?
198. What is the `--cache-from` flag?
199. How do you use external cache?
200. What is the `--cache-to` flag?

---

### Docker Containers

201. What is a Docker container?
202. How do you create a container?
203. What is the `docker create` command?
204. What is the `docker run` command?
205. What is the difference between `docker create` and `docker run`?
206. 
```bash
docker run nginx
```
What does this command do?
207. What is the `-d` flag in `docker run`?
208. What is detached mode?
209. What is the `-it` flag?
210. What is interactive mode?
211. What is a TTY?
212. 
```bash
docker run -it ubuntu bash
```
Explain this command.
213. What is the `--name` flag?
214. How do you name a container?
215. What is the `-p` flag?
216. How do you publish ports?
217. 
```bash
docker run -p 8080:80 nginx
```
Explain this port mapping.
218. What is the `-P` flag?
219. What is the difference between `-p` and `-P`?
220. What is the `-v` flag?
221. How do you mount volumes?
222. 
```bash
docker run -v /host/path:/container/path nginx
```
Explain this volume mount.
223. What is the `--mount` flag?
224. What is the difference between `-v` and `--mount`?
225. What is the `-e` flag?
226. How do you set environment variables?
227. 
```bash
docker run -e NODE_ENV=production myapp
```
What does this do?
228. What is the `--env-file` flag?
229. How do you load environment variables from a file?
230. What is the `--rm` flag?
231. What does `--rm` do?
232. When should you use `--rm`?
233. What is the `--restart` flag?
234. What are the restart policies?
235. What is `--restart=always`?
236. What is `--restart=unless-stopped`?
237. What is `--restart=on-failure`?
238. What is the difference between `always` and `unless-stopped`?
239. What is the `--network` flag?
240. How do you connect a container to a network?
241. What is the `--link` flag?
242. Should you use `--link`? Why or why not?
243. What is the `--hostname` flag?
244. What is the `--add-host` flag?
245. What is the `--dns` flag?
246. What is the `--cpus` flag?
247. How do you limit CPU usage?
248. What is the `--memory` flag?
249. How do you limit memory usage?
250. 
```bash
docker run --memory=512m --cpus=1 myapp
```
Explain this command.
251. How do you list running containers?
252. What is the `docker ps` command?
253. How do you list all containers (including stopped)?
254. What is the `docker ps -a` command?
255. How do you start a stopped container?
256. What is the `docker start` command?
257. How do you stop a running container?
258. What is the `docker stop` command?
259. What is the difference between `docker stop` and `docker kill`?
260. What signal does `docker stop` send?
261. What signal does `docker kill` send?
262. How do you restart a container?
263. What is the `docker restart` command?
264. How do you pause a container?
265. What is the `docker pause` command?
266. What is the difference between pause and stop?
267. How do you unpause a container?
268. What is the `docker unpause` command?
269. How do you remove a container?
270. What is the `docker rm` command?
271. How do you remove a running container?
272. What is the `-f` flag in `docker rm`?
273. How do you remove all stopped containers?
274. What is the `docker container prune` command?
275. How do you view container logs?
276. What is the `docker logs` command?
277. What is the `-f` flag in `docker logs`?
278. What is the `--tail` flag?
279. What is the `--since` flag?
280. How do you execute a command in a running container?
281. What is the `docker exec` command?
282. 
```bash
docker exec -it mycontainer bash
```
What does this do?
283. What is the difference between `docker run` and `docker exec`?
284. How do you attach to a running container?
285. What is the `docker attach` command?
286. What is the difference between `docker exec` and `docker attach`?
287. How do you copy files to/from a container?
288. What is the `docker cp` command?
289. 
```bash
docker cp mycontainer:/app/file.txt ./
```
What does this do?
290. How do you inspect a container?
291. What is the `docker inspect` command?
292. How do you view container stats?
293. What is the `docker stats` command?
294. What metrics does `docker stats` show?
295. How do you view container processes?
296. What is the `docker top` command?
297. How do you view container port mappings?
298. What is the `docker port` command?
299. How do you rename a container?
300. What is the `docker rename` command?

---

### Docker Volumes

301. What is a Docker volume?
302. Why do we need volumes?
303. What is the problem with container filesystems?
304. What happens to data when a container is removed?
305. What are the types of mounts in Docker?
306. What is a bind mount?
307. What is a volume mount?
308. What is a tmpfs mount?
309. What is the difference between bind mounts and volumes?
310. When should you use bind mounts?
311. When should you use volumes?
312. How do you create a volume?
313. What is the `docker volume create` command?
314. 
```bash
docker volume create myvolume
```
What does this do?
315. How do you list volumes?
316. What is the `docker volume ls` command?
317. How do you inspect a volume?
318. What is the `docker volume inspect` command?
319. How do you remove a volume?
320. What is the `docker volume rm` command?
321. How do you remove all unused volumes?
322. What is the `docker volume prune` command?
323. How do you mount a volume to a container?
324. 
```bash
docker run -v myvolume:/app/data nginx
```
Explain this volume mount.
325. How do you use the `--mount` syntax for volumes?
326. 
```bash
docker run --mount source=myvolume,target=/app/data nginx
```
Explain this.
327. What is an anonymous volume?
328. How do you create an anonymous volume?
329. What is a named volume?
330. What is the difference between anonymous and named volumes?
331. Where are volumes stored on the host?
332. What is the Docker volume driver?
333. What is the `local` volume driver?
334. What are third-party volume drivers?
335. How do you use a different volume driver?
336. What is the `--driver` flag?
337. How do you share volumes between containers?
338. Can multiple containers use the same volume?
339. What is the `--volumes-from` flag?
340. How do you backup a volume?
341. How do you restore a volume?
342. What is the best practice for volume backups?
343. How do you migrate data between volumes?
344. What is a read-only volume?
345. How do you mount a volume as read-only?
346. 
```bash
docker run -v myvolume:/app/data:ro nginx
```
What does `:ro` mean?
347. What is the difference between `:ro` and `:rw`?
348. How do you populate a volume with data from the image?
349. What happens if you mount a volume to a non-empty directory?
350. How do you use volumes with Docker Compose?

---

### Docker Networking

351. What is Docker networking?
352. What is a Docker network?
353. What are the network drivers in Docker?
354. What is the `bridge` network driver?
355. What is the `host` network driver?
356. What is the `none` network driver?
357. What is the `overlay` network driver?
358. What is the `macvlan` network driver?
359. What is the default network in Docker?
360. What is the `docker0` bridge?
361. How do you list Docker networks?
362. What is the `docker network ls` command?
363. How do you create a network?
364. What is the `docker network create` command?
365. 
```bash
docker network create mynetwork
```
What does this do?
366. How do you specify a network driver?
367. What is the `--driver` flag?
368. How do you remove a network?
369. What is the `docker network rm` command?
370. How do you remove all unused networks?
371. What is the `docker network prune` command?
372. How do you inspect a network?
373. What is the `docker network inspect` command?
374. How do you connect a container to a network?
375. What is the `docker network connect` command?
376. How do you disconnect a container from a network?
377. What is the `docker network disconnect` command?
378. How do containers communicate on the same network?
379. What is container name resolution?
380. Can containers ping each other by name?
381. What is the embedded DNS server in Docker?
382. How does DNS resolution work in Docker networks?
383. What is the difference between bridge and host networking?
384. When should you use host networking?
385. What are the security implications of host networking?
386. What is port mapping?
387. How does port mapping work?
388. What is NAT (Network Address Translation)?
389. How do you publish a port?
390. What is the `-p` flag?
391. 
```bash
docker run -p 8080:80 nginx
```
Explain this port mapping.
392. How do you publish all exposed ports?
393. What is the `-P` flag?
394. How do you map to a specific host interface?
395. 
```bash
docker run -p 127.0.0.1:8080:80 nginx
```
What does this do?
396. What is the overlay network?
397. When do you use overlay networks?
398. What is Docker Swarm?
399. How do overlay networks work across hosts?
400. What is the macvlan network?
401. When would you use macvlan?
402. What is the ipvlan network?
403. What is the difference between macvlan and ipvlan?
404. How do you create a custom bridge network?
405. What is the `--subnet` flag?
406. What is the `--gateway` flag?
407. How do you assign a static IP to a container?
408. What is the `--ip` flag?
409. How do you configure DNS in Docker?
410. What is the `--dns` flag?
411. How do you add custom DNS servers?
412. What is the `/etc/resolv.conf` file in containers?
413. How do you add host entries?
414. What is the `--add-host` flag?
415. How do you inspect container network settings?
416. What is the `NetworkSettings` in `docker inspect`?
417. How do you troubleshoot network issues?
418. What tools can you use inside containers for debugging?
419. How do you test connectivity between containers?
420. What is network isolation?

---

### Docker Compose

421. What is Docker Compose?
422. What problem does Docker Compose solve?
423. What is the difference between Docker and Docker Compose?
424. What is a `docker-compose.yml` file?
425. What is the structure of a Compose file?
426. What is the `version` field in docker-compose.yml?
427. What is the `services` section?
428. What is a service in Docker Compose?
429. 
```yaml
services:
  web:
    image: nginx
    ports:
      - "8080:80"
```
Explain this Compose file.
430. How do you define a service with a Dockerfile?
431. What is the `build` key?
432. 
```yaml
services:
  app:
    build: ./app
```
What does this do?
433. How do you specify a different Dockerfile?
434. What is the `context` and `dockerfile` keys?
435. What is the `image` key?
436. What is the `container_name` key?
437. What is the `ports` key?
438. How do you map ports in Compose?
439. What is the `volumes` key?
440. How do you define volumes in Compose?
441. What is the `environment` key?
442. How do you set environment variables?
443. What is the `env_file` key?
444. How do you load environment variables from a file?
445. What is the `depends_on` key?
446. How do you define service dependencies?
447. Does `depends_on` wait for the service to be ready?
448. What is the `command` key?
449. How do you override the default command?
450. What is the `entrypoint` key?
451. What is the `restart` key?
452. What are the restart policies in Compose?
453. What is the `networks` key?
454. How do you define custom networks in Compose?
455. What is the `volumes` top-level key?
456. How do you define named volumes?
457. 
```yaml
volumes:
  db-data:
```
What does this do?
458. What is the `networks` top-level key?
459. How do you define custom networks?
460. How do you start services with Docker Compose?
461. What is the `docker-compose up` command?
462. What is the `-d` flag in `docker-compose up`?
463. How do you build images with Compose?
464. What is the `--build` flag?
465. How do you rebuild images?
466. What is the `docker-compose build` command?
467. How do you stop services?
468. What is the `docker-compose stop` command?
469. How do you stop and remove containers?
470. What is the `docker-compose down` command?
471. What is the difference between `stop` and `down`?
472. How do you remove volumes with `down`?
473. What is the `-v` flag in `docker-compose down`?
474. How do you view logs?
475. What is the `docker-compose logs` command?
476. How do you follow logs in real-time?
477. What is the `-f` flag in `docker-compose logs`?
478. How do you view logs for a specific service?
479. How do you list running services?
480. What is the `docker-compose ps` command?
481. How do you execute a command in a service?
482. What is the `docker-compose exec` command?
483. 
```bash
docker-compose exec web bash
```
What does this do?
484. How do you run a one-off command?
485. What is the `docker-compose run` command?
486. What is the difference between `exec` and `run`?
487. How do you scale services?
488. What is the `docker-compose scale` command?
489. What is the `--scale` flag in `docker-compose up`?
490. How do you view service configuration?
491. What is the `docker-compose config` command?
492. How do you validate a Compose file?
493. What is the `docker-compose pull` command?
494. How do you pull images for all services?
495. What is the `docker-compose push` command?
496. How do you override Compose files?
497. What is the `-f` flag in docker-compose?
498. What is `docker-compose.override.yml`?
499. How do you use multiple Compose files?
500. What is the order of precedence for Compose files?
501. What is the `extends` key?
502. How do you extend services?
503. What is the `profiles` key?
504. How do you use profiles in Compose?
505. What is the `--profile` flag?
506. What is the `healthcheck` key?
507. How do you define health checks in Compose?
508. What is the `deploy` key?
509. What is the `resources` key?
510. How do you limit resources in Compose?

---

### Multi-Stage Builds

511. What is a multi-stage build?
512. Why use multi-stage builds?
513. How do you create a multi-stage build?
514. 
```dockerfile
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```
Explain this multi-stage build.
515. What is the `AS` keyword?
516. How do you name a build stage?
517. What is the `--from` flag in `COPY`?
518. How do you copy files from a previous stage?
519. Can you copy from any stage?
520. How do you build a specific stage?
521. What is the `--target` flag?
522. What are the benefits of multi-stage builds?
523. How do multi-stage builds reduce image size?
524. What is the builder pattern?
525. How do you use external images in multi-stage builds?
526. 
```dockerfile
COPY --from=nginx:latest /etc/nginx/nginx.conf /nginx.conf
```
What does this do?
527. How many stages can you have?
528. Can you go back to a previous stage?
529. What is the final stage?
530. What gets included in the final image?
531. How do you optimize multi-stage builds?
532. What is the order of stages?
533. How do you use build arguments with multi-stage builds?
534. How do you use different stages for different environments?
535. What is a development stage vs production stage?
536. How do you debug multi-stage builds?
537. How do you see intermediate images?
538. What happens to intermediate stages?
539. Are intermediate stages cached?
540. How do you leverage cache in multi-stage builds?

---

### Docker Registry

541. What is a Docker registry?
542. What is Docker Hub?
543. What is a private registry?
544. Why use a private registry?
545. What is Docker Registry (the software)?
546. How do you run a local registry?
547. 
```bash
docker run -d -p 5000:5000 --name registry registry:2
```
What does this do?
548. How do you push to a private registry?
549. How do you pull from a private registry?
550. What is image naming for private registries?
551. 
```bash
docker tag myapp localhost:5000/myapp
```
What does this do?
552. What is registry authentication?
553. How do you login to a registry?
554. What is the `docker login` command?
555. Where are registry credentials stored?
556. What is the `~/.docker/config.json` file?
557. How do you logout from a registry?
558. What is the `docker logout` command?
559. What is Amazon ECR (Elastic Container Registry)?
560. What is Google Container Registry (GCR)?
561. What is Azure Container Registry (ACR)?
562. What is GitHub Container Registry (GHCR)?
563. What is GitLab Container Registry?
564. How do you authenticate with ECR?
565. What is the ECR credential helper?
566. How do you use service accounts with GCR?
567. What is registry mirroring?
568. What is a pull-through cache?
569. How do you configure a registry mirror?
570. What is the `registry-mirrors` config?
571. What is image signing?
572. What is Docker Content Trust?
573. How do you enable Content Trust?
574. What is the `DOCKER_CONTENT_TRUST` environment variable?
575. What is Notary?
576. What is image scanning?
577. What is vulnerability scanning?
578. What tools can scan Docker images?
579. What is Trivy?
580. What is Clair?
581. How do you scan images for vulnerabilities?
582. What is the `docker scan` command?
583. What is image garbage collection?
584. How do you clean up old images in a registry?
585. What is registry storage?
586. Where does a registry store images?
587. How do you configure registry storage?
588. What is the S3 storage driver?
589. How do you backup a registry?
590. How do you migrate between registries?

---

### Docker Security

591. What are the security concerns with Docker?
592. What is container isolation?
593. How does Docker isolate containers?
594. What are Linux namespaces?
595. What are cgroups?
596. What is the difference between namespaces and cgroups?
597. What namespaces does Docker use?
598. What is the PID namespace?
599. What is the network namespace?
600. What is the mount namespace?
601. What is the user namespace?
602. What is the IPC namespace?
603. What is the UTS namespace?
604. Why shouldn't you run containers as root?
605. How do you run containers as a non-root user?
606. What is the `USER` instruction in Dockerfile?
607. What is user namespace remapping?
608. How do you enable user namespace remapping?
609. What is the `--userns-remap` flag?
610. What are Linux capabilities?
611. What capabilities does Docker drop by default?
612. What is the `--cap-add` flag?
613. What is the `--cap-drop` flag?
614. 
```bash
docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE nginx
```
Explain this command.
615. What is the `--privileged` flag?
616. What does `--privileged` do?
617. Should you use `--privileged` in production?
618. What is AppArmor?
619. What is SELinux?
620. How does Docker use AppArmor/SELinux?
621. What is Seccomp?
622. What is the default Seccomp profile?
623. How do you use a custom Seccomp profile?
624. What is the `--security-opt` flag?
625. What is the read-only root filesystem?
626. How do you make the root filesystem read-only?
627. What is the `--read-only` flag?
628. What is the `--tmpfs` flag?
629. How do you handle writable directories with read-only root?
630. What is Docker secrets?
631. How do you manage secrets in Docker?
632. Should you put secrets in environment variables?
633. Should you put secrets in Dockerfile?
634. What is the `docker secret` command?
635. How do you create a secret?
636. How do you use secrets in services?
637. What is the difference between secrets and configs?
638. What is the `docker config` command?
639. What is image scanning?
640. How do you scan images for vulnerabilities?
641. What is the principle of least privilege?
642. How do you minimize the attack surface?
643. What is a minimal base image?
644. What is Alpine Linux?
645. What is Distroless?
646. What are the benefits of Alpine images?
647. What are the benefits of Distroless images?
648. What is the `scratch` image?
649. When would you use `scratch`?
650. How do you audit Docker security?
651. What is Docker Bench for Security?
652. How do you use Docker Bench?
653. What is the CIS Docker Benchmark?
654. What are the common security best practices?
655. How do you secure the Docker daemon?
656. What is TLS for Docker daemon?
657. How do you enable TLS?
658. What is the `--tlsverify` flag?
659. How do you restrict access to the Docker socket?
660. What is the risk of exposing `/var/run/docker.sock`?

---

### Docker Performance

661. How do you optimize Docker performance?
662. What factors affect container performance?
663. How do you limit container resources?
664. What is the `--memory` flag?
665. What is the `--memory-swap` flag?
666. What is the `--memory-reservation` flag?
667. What is the `--oom-kill-disable` flag?
668. What happens when a container runs out of memory?
669. What is the OOM killer?
670. How do you limit CPU usage?
671. What is the `--cpus` flag?
672. What is the `--cpu-shares` flag?
673. What is the difference between `--cpus` and `--cpu-shares`?
674. What is the `--cpuset-cpus` flag?
675. How do you pin containers to specific CPUs?
676. What is the `--cpu-quota` flag?
677. What is the `--cpu-period` flag?
678. How do you limit disk I/O?
679. What is the `--blkio-weight` flag?
680. What is the `--device-read-bps` flag?
681. What is the `--device-write-bps` flag?
682. How do you monitor container performance?
683. What is the `docker stats` command?
684. What metrics does `docker stats` show?
685. How do you monitor multiple containers?
686. What is cAdvisor?
687. What is Prometheus?
688. How do you export Docker metrics to Prometheus?
689. What is the Docker metrics endpoint?
690. How do you enable the metrics endpoint?
691. What is container overhead?
692. How much overhead do containers have?
693. What is the performance difference between containers and VMs?
694. How do you optimize image size?
695. Why is image size important?
696. How does image size affect performance?
697. What is layer caching?
698. How do you optimize layer caching?
699. What is the order of Dockerfile instructions?
700. Why should you copy package files before source code?
701. 
```dockerfile
COPY package*.json ./
RUN npm install
COPY . .
```
Why is this order better?
702. What is the `--no-cache` flag?
703. When should you use `--no-cache`?
704. How do you reduce the number of layers?
705. Should you combine `RUN` commands?
706. What is the `&&` operator in Dockerfile?
707. How do you clean up in the same layer?
708. 
```dockerfile
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
```
Why clean up in the same `RUN`?
709. What is the `.dockerignore` file?
710. How does `.dockerignore` improve performance?
711. What should you add to `.dockerignore`?
712. How do you optimize startup time?
713. What is the cold start problem?
714. How do you reduce cold start time?
715. What is the `--init` flag?
716. What does the init process do?
717. How do you handle zombie processes?
718. What is PID 1 in containers?
719. What is the PID 1 problem?
720. How do you properly handle signals?

---

### Docker Logging

721. How does Docker handle logs?
722. What is the logging driver?
723. What are the available logging drivers?
724. What is the `json-file` logging driver?
725. What is the `syslog` logging driver?
726. What is the `journald` logging driver?
727. What is the `gelf` logging driver?
728. What is the `fluentd` logging driver?
729. What is the `awslogs` logging driver?
730. How do you configure the logging driver?
731. What is the `--log-driver` flag?
732. 
```bash
docker run --log-driver=syslog myapp
```
What does this do?
733. How do you set logging options?
734. What is the `--log-opt` flag?
735. How do you limit log size?
736. What is the `max-size` log option?
737. What is the `max-file` log option?
738. 
```bash
docker run --log-opt max-size=10m --log-opt max-file=3 myapp
```
Explain this.
739. Where are container logs stored?
740. What is the log file location for `json-file` driver?
741. How do you view container logs?
742. What is the `docker logs` command?
743. What is the `-f` flag in `docker logs`?
744. What is the `--tail` flag?
745. What is the `--since` flag?
746. What is the `--until` flag?
747. How do you view logs with timestamps?
748. What is the `-t` flag?
749. How do you configure logging in docker-compose.yml?
750. 
```yaml
services:
  app:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
```
Explain this configuration.
751. How do you send logs to a centralized system?
752. What is ELK stack?
753. What is Elasticsearch?
754. What is Logstash?
755. What is Kibana?
756. How do you send Docker logs to ELK?
757. What is Fluentd?
758. How do you use Fluentd with Docker?
759. What is the difference between Fluentd and Logstash?
760. How do you parse JSON logs?
761. How do you add metadata to logs?
762. What is structured logging?
763. Should you log to stdout/stderr?
764. Why is logging to stdout/stderr recommended?
765. How do you handle multi-line logs?
766. What is log rotation?
767. How does Docker handle log rotation?
768. How do you prevent logs from filling up disk?
769. What happens when log files get too large?
770. How do you debug logging issues?

---

### Docker Orchestration

771. What is container orchestration?
772. Why do we need orchestration?
773. What is Docker Swarm?
774. What is Kubernetes?
775. What is the difference between Docker Swarm and Kubernetes?
776. What is a Docker Swarm cluster?
777. What is a Swarm node?
778. What is a manager node?
779. What is a worker node?
780. How do you initialize a Swarm?
781. What is the `docker swarm init` command?
782. How do you join a node to a Swarm?
783. What is the `docker swarm join` command?
784. What is a join token?
785. How do you get the join token?
786. What is a Swarm service?
787. How do you create a service?
788. What is the `docker service create` command?
789. 
```bash
docker service create --replicas 3 --name web nginx
```
Explain this command.
790. What is a replica?
791. How do you scale a service?
792. What is the `docker service scale` command?
793. How do you update a service?
794. What is the `docker service update` command?
795. What is rolling update?
796. How do you configure update behavior?
797. What is the `--update-parallelism` flag?
798. What is the `--update-delay` flag?
799. How do you rollback a service?
800. What is the `docker service rollback` command?
801. How do you list services?
802. What is the `docker service ls` command?
803. How do you inspect a service?
804. What is the `docker service inspect` command?
805. How do you view service logs?
806. What is the `docker service logs` command?
807. What is a stack?
808. How do you deploy a stack?
809. What is the `docker stack deploy` command?
810. How do you use docker-compose.yml with Swarm?
811. What is the difference between Compose and Stack?
812. What is the `deploy` key in docker-compose.yml?
813. How do you configure replicas in a stack?
814. How do you configure placement constraints?
815. What is the `placement` key?
816. How do you remove a stack?
817. What is the `docker stack rm` command?
818. What is service discovery in Swarm?
819. How do containers find each other in Swarm?
820. What is the Swarm routing mesh?
821. How does load balancing work in Swarm?
822. What is ingress networking?
823. What is overlay networking in Swarm?
824. How do you create an overlay network?
825. What is a Docker secret in Swarm?
826. How do you create a secret?
827. What is the `docker secret create` command?
828. How do you use secrets in services?
829. What is a Docker config in Swarm?
830. What is the difference between secrets and configs?

---

### Docker Best Practices

831. What are Docker best practices?
832. Should you use official images?
833. Why use official images?
834. How do you verify official images?
835. Should you pin image versions?
836. Why avoid the `latest` tag?
837. How do you keep images up to date?
838. What is image scanning?
839. How often should you rebuild images?
840. Should you run one process per container?
841. Why is one process per container recommended?
842. How do you handle multiple processes?
843. What is a sidecar container?
844. How do you minimize image size?
845. What is the benefit of smaller images?
846. Should you use Alpine images?
847. What are the trade-offs of Alpine?
848. Should you combine `RUN` commands?
849. How do you clean up in Dockerfile?
850. Should you remove package manager cache?
851. 
```dockerfile
RUN apt-get update && apt-get install -y curl \
    && rm -rf /var/lib/apt/lists/*
```
Why is this good practice?
852. Should you use `.dockerignore`?
853. What should be in `.dockerignore`?
854. Should you use multi-stage builds?
855. When should you use multi-stage builds?
856. Should you run containers as root?
857. How do you create a non-root user?
858. 
```dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
```
What does this do?
859. Should you use `COPY` or `ADD`?
860. When is `ADD` appropriate?
861. Should you use specific `COPY` commands?
862. 
```dockerfile
COPY package*.json ./
RUN npm install
COPY . .
```
Why is this better than copying everything first?
863. Should you use `CMD` or `ENTRYPOINT`?
864. When should you use `ENTRYPOINT`?
865. Should you use exec form or shell form?
866. What is the benefit of exec form?
867. Should you use health checks?
868. How do you define a health check?
869. Should you use labels?
870. What metadata should you add?
871. Should you expose ports in Dockerfile?
872. Is `EXPOSE` required?
873. Should you use volumes in Dockerfile?
874. What are the issues with `VOLUME` in Dockerfile?
875. Should you commit secrets to images?
876. How do you handle secrets?
877. Should you log to files or stdout?
878. Why log to stdout/stderr?
879. Should you use restart policies?
880. What restart policy should you use?
881. Should you limit container resources?
882. Why limit resources?
883. Should you use networks?
884. Why use custom networks?
885. Should you use Docker Compose for production?
886. What are the limitations of Compose?
887. Should you use orchestration?
888. When do you need orchestration?
889. Should you use CI/CD with Docker?
890. How do you integrate Docker with CI/CD?
891. Should you scan images in CI/CD?
892. How do you test Docker images?
893. Should you use linters for Dockerfile?
894. What is hadolint?
895. How do you lint Dockerfiles?
896. Should you version your images?
897. What tagging strategy should you use?
898. Should you use semantic versioning?
899. Should you monitor containers?
900. What should you monitor?

---

### Docker Troubleshooting

901. How do you troubleshoot Docker issues?
902. How do you check if Docker is running?
903. What is the `docker version` command?
904. What is the `docker info` command?
905. How do you view Docker daemon logs?
906. Where are Docker daemon logs located?
907. How do you debug container startup issues?
908. How do you view container logs?
909. What is the `docker logs` command?
910. How do you debug a failing container?
911. How do you inspect a container?
912. What is the `docker inspect` command?
913. How do you debug networking issues?
914. How do you test connectivity between containers?
915. How do you enter a running container?
916. What is the `docker exec` command?
917. How do you debug a container that exits immediately?
918. How do you override the entrypoint?
919. 
```bash
docker run -it --entrypoint /bin/sh myapp
```
What does this do?
920. How do you debug build failures?
921. How do you see build output?
922. What is the `--progress=plain` flag?
923. How do you debug layer caching issues?
924. How do you force rebuild without cache?
925. What is the `--no-cache` flag?
926. How do you debug volume issues?
927. How do you inspect volumes?
928. How do you check volume permissions?
929. How do you debug port mapping issues?
930. How do you check which ports are mapped?
931. What is the `docker port` command?
932. How do you debug "address already in use" errors?
933. How do you find which process is using a port?
934. How do you debug "permission denied" errors?
935. What causes permission denied in volumes?
936. How do you fix permission issues?
937. How do you debug "no space left on device" errors?
938. How do you check Docker disk usage?
939. What is the `docker system df` command?
940. How do you clean up Docker resources?
941. What is the `docker system prune` command?
942. What does `docker system prune` remove?
943. How do you remove all containers?
944. How do you remove all images?
945. How do you remove all volumes?
946. How do you remove all networks?
947. What is the `-a` flag in `docker system prune`?
948. What is the `--volumes` flag?
949. How do you debug DNS issues?
950. How do you check DNS resolution in containers?
951. How do you debug slow builds?
952. What causes slow Docker builds?
953. How do you optimize build performance?
954. How do you debug slow container startup?
955. How do you debug high CPU usage?
956. How do you debug high memory usage?
957. How do you debug container crashes?
958. What is the exit code?
959. What does exit code 137 mean?
960. What does exit code 1 mean?
961. What does exit code 0 mean?
962. How do you debug "container not found" errors?
963. How do you debug "image not found" errors?
964. How do you debug registry authentication issues?
965. How do you verify registry credentials?
966. How do you debug TLS errors?
967. How do you debug "connection refused" errors?
968. How do you check if a port is listening?
969. How do you use `netstat` in containers?
970. How do you use `curl` to test endpoints?
971. How do you install debugging tools in containers?
972. Should you install tools in production images?
973. How do you debug without installing tools?
974. What is the `docker cp` command for debugging?
975. How do you copy files from a container?
976. How do you debug multi-stage builds?
977. How do you inspect intermediate stages?
978. How do you debug Docker Compose issues?
979. How do you validate docker-compose.yml?
980. What is the `docker-compose config` command?
981. How do you debug service dependencies?
982. How do you debug environment variable issues?
983. How do you check environment variables in a container?
984. How do you debug health check failures?
985. How do you test health checks manually?
986. How do you debug Dockerfile syntax errors?
987. How do you validate a Dockerfile?
988. How do you debug "command not found" errors?
989. How do you check the PATH in containers?
990. How do you debug file not found errors?
991. How do you list files in a container?
992. How do you debug timezone issues?
993. How do you set timezone in containers?
994. How do you debug locale issues?
995. How do you debug signal handling?
996. How do you send signals to containers?
997. What is the `docker kill` command?
998. How do you debug zombie processes?
999. How do you check running processes in a container?
1000. What is the `docker top` command?
