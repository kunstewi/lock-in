### Operating System Fundamentals

1. What is an Operating System? What are its primary functions?
2. List and explain the main goals of an Operating System (Convenience, Efficiency, Ability to Evolve).
3. What are the different types of Operating Systems? (Batch, Time-Sharing, Distributed, Real-Time, Embedded)
4. What is the difference between a 32-bit and 64-bit Operating System?
5. What is the Kernel? What are its main responsibilities?
6. Explain the difference between Monolithic Kernel, Microkernel, and Hybrid Kernel architectures.
7. What are System Calls? How do they differ from regular function calls?
8. What is the difference between User Mode and Kernel Mode?
9. What is a Mode Switch? How is it different from a Context Switch?
10. What is the Bootstrap Program (Bootloader)? What does it do?
11. What is BIOS vs UEFI?
12. What is the difference between Firmware and Software?
13. What is an Interrupt? What are the different types of interrupts (Hardware, Software, Traps)?
14. Explain the Interrupt Handling mechanism in an OS.
15. What is an Interrupt Vector Table (IVT)?
16. What is DMA (Direct Memory Access)? Why is it important?
17. What is the difference between Polling and Interrupt-driven I/O?
18. What is a Device Driver? What role does it play in an OS?
19. What is the difference between Privileged and Non-Privileged instructions?
20. What is a Shell? What are the different types of shells (Bash, Zsh, PowerShell)?

---

### Process Management

21. What is a Process? How is it different from a Program?
22. What are the different states of a Process? (New, Ready, Running, Waiting, Terminated)
23. Draw and explain the Process State Diagram with all transitions.
24. What is a Process Control Block (PCB)? What information does it contain?
25. What is Process Scheduling? Why is it necessary?
26. What is a Scheduler? What are the different types of schedulers (Long-term, Short-term, Medium-term)?
27. What is the difference between Preemptive and Non-Preemptive Scheduling?
28. Explain the following CPU Scheduling Algorithms:
    - First-Come, First-Served (FCFS)
    - Shortest Job First (SJF)
    - Shortest Remaining Time First (SRTF)
    - Round Robin (RR)
    - Priority Scheduling
    - Multilevel Queue Scheduling
    - Multilevel Feedback Queue Scheduling
29. What is the Convoy Effect in FCFS scheduling?
30. What is Starvation in scheduling? Which algorithms can cause it?
31. What is Aging? How does it prevent starvation?
32. What is a Time Quantum (Time Slice) in Round Robin scheduling?
33. What happens if the Time Quantum is too large or too small in Round Robin?
34. What is Turnaround Time, Waiting Time, Response Time, and Throughput?
35. Calculate the average waiting time for the following processes using FCFS:
    ```
    Process | Burst Time
    P1      | 24
    P2      | 3
    P3      | 3
    ```
36. What is Context Switching? What causes it?
37. What is the overhead of Context Switching?
38. What information is saved during a Context Switch?
39. What is a Dispatcher? How is it different from a Scheduler?
40. What is Dispatch Latency?

---

### Threads

41. What is a Thread? How is it different from a Process?
42. What are the benefits of using Threads over Processes?
43. What is Multithreading? What are its advantages?
44. What is the difference between User-Level Threads and Kernel-Level Threads?
45. What are the advantages and disadvantages of User-Level Threads?
46. What are the advantages and disadvantages of Kernel-Level Threads?
47. What is a Hybrid Threading Model (Many-to-Many)?
48. Explain the One-to-One, Many-to-One, and Many-to-Many threading models.
49. What is Thread Pooling? What are its benefits?
50. What is a Race Condition? Give an example.
51. What is the Critical Section Problem?
52. What are the three requirements for a solution to the Critical Section Problem? (Mutual Exclusion, Progress, Bounded Waiting)
53. What is Mutual Exclusion?
54. What is a Semaphore? What are the two types (Binary and Counting)?
55. What is the difference between a Mutex and a Semaphore?
56. What is a Spinlock? When is it useful?
57. What is Busy Waiting? What are its disadvantages?
58. What is a Deadlock? What are the four necessary conditions for deadlock?
59. Explain the four Deadlock conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.
60. What are the methods to handle Deadlocks? (Prevention, Avoidance, Detection, Recovery)
61. What is the Banker's Algorithm? How does it prevent deadlock?
62. What is a Safe State vs Unsafe State in the context of deadlock?
63. What is Deadlock Detection? How is it implemented?
64. What is Deadlock Recovery? What are the methods?
65. What is a Livelock? How is it different from Deadlock?
66. What is Priority Inversion? How can it be solved?
67. What are Monitors in concurrent programming?
68. What is the Producer-Consumer Problem? How do you solve it using Semaphores?
69. What is the Readers-Writers Problem? Explain the solution.
70. What is the Dining Philosophers Problem? How do you prevent deadlock in it?

---

### Process Synchronization & IPC

71. What is Process Synchronization? Why is it needed?
72. What is Inter-Process Communication (IPC)? Why is it important?
73. What are the different IPC mechanisms? (Pipes, Message Queues, Shared Memory, Sockets, Signals)
74. What is a Pipe? What is the difference between Named Pipes and Unnamed Pipes?
75. What is Shared Memory? What are its advantages and disadvantages?
76. What is a Message Queue? How does it work?
77. What is a Socket? How is it used for IPC?
78. What are Signals in Unix/Linux? Give examples (SIGKILL, SIGTERM, SIGINT).
79. What is the difference between SIGKILL and SIGTERM?
80. What is a Signal Handler?
81. What is Memory Mapped I/O?
82. What is the difference between Synchronous and Asynchronous IPC?
83. What is a Blocking vs Non-Blocking system call?
84. What is the `fork()` system call? What does it return?
85. What is the `exec()` family of system calls?
86. What is the difference between `fork()` and `exec()`?
87. What is a Zombie Process? How do you prevent it?
88. What is an Orphan Process? What happens to it?
89. What is the `wait()` system call? Why is it used?
90. What is Copy-on-Write (COW) in process creation?

---

### Memory Management

91. What is Memory Management? What are its goals?
92. What is Logical Address vs Physical Address?
93. What is the Memory Management Unit (MMU)? What does it do?
94. What is Address Binding? What are the three types (Compile-time, Load-time, Execution-time)?
95. What is Static vs Dynamic Loading?
96. What is Static vs Dynamic Linking?
97. What is Swapping? Why is it used?
98. What is Contiguous Memory Allocation?
99. What is Fragmentation? What are the two types (Internal and External)?
100. What is the difference between Internal and External Fragmentation?
101. What is Compaction? When is it used?
102. What are the different memory allocation strategies? (First Fit, Best Fit, Worst Fit)
103. Explain First Fit, Best Fit, and Worst Fit algorithms with examples.
104. What is Paging? How does it solve fragmentation?
105. What is a Page? What is a Frame?
106. What is a Page Table? What information does it store?
107. What is the Page Table Entry (PTE)? What fields does it contain?
108. What is the difference between Logical and Physical addresses in Paging?
109. How do you calculate the physical address from a logical address in paging?
110. What is the size of a page table if the logical address space is 32-bit and page size is 4KB?
111. What is Internal Fragmentation in Paging?
112. What is a Translation Lookaside Buffer (TLB)? Why is it needed?
113. What is a TLB Hit vs TLB Miss?
114. What is the Effective Access Time with TLB?
115. What is a Multi-level Page Table? Why is it used?
116. What is an Inverted Page Table? What are its advantages?
117. What is Segmentation? How is it different from Paging?
118. What is a Segment Table?
119. What is Segmentation with Paging?
120. What is Virtual Memory? What are its benefits?
121. What is Demand Paging? How does it work?
122. What is a Page Fault? What happens when it occurs?
123. What is the Page Fault Service Routine?
124. What is Thrashing? What causes it?
125. How do you prevent Thrashing?
126. What is the Working Set Model?
127. What is Page Replacement? When is it needed?
128. Explain the following Page Replacement Algorithms:
    - FIFO (First-In-First-Out)
    - Optimal Page Replacement
    - LRU (Least Recently Used)
    - LFU (Least Frequently Used)
    - MFU (Most Frequently Used)
    - Second Chance (Clock) Algorithm
129. What is Belady's Anomaly? Which algorithm suffers from it?
130. Calculate the number of page faults for the reference string `7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2` using FIFO with 3 frames.
131. What is the difference between Global and Local Page Replacement?
132. What is Frame Allocation? What are the allocation algorithms (Equal, Proportional, Priority)?
133. What is the Buddy System in memory allocation?
134. What is Memory Leak? How does it affect system performance?
135. What is Garbage Collection? How does it work?
136. What is the difference between Stack and Heap memory?
137. What is Memory Protection? How is it implemented?
138. What is a Protection Bit in a page table?
139. What is a Valid-Invalid Bit in paging?
140. What is Memory Mapped Files?

---

### File Systems

141. What is a File? What are its attributes?
142. What is a File System? What are its functions?
143. What are the different file types? (Regular, Directory, Special files)
144. What is a Directory? What is a Directory Structure?
145. What are the different directory structures? (Single-level, Two-level, Tree-structured, Acyclic Graph, General Graph)
146. What is the difference between Absolute Path and Relative Path?
147. What is an Inode? What information does it store?
148. What is the difference between Hard Link and Soft Link (Symbolic Link)?
149. What happens when you delete a file that has hard links?
150. What is File Allocation? What are the methods? (Contiguous, Linked, Indexed)
151. Explain Contiguous File Allocation. What are its advantages and disadvantages?
152. Explain Linked File Allocation. What are its advantages and disadvantages?
153. Explain Indexed File Allocation. What are its advantages and disadvantages?
154. What is a File Allocation Table (FAT)?
155. What is the difference between FAT32, NTFS, and ext4 file systems?
156. What is Journaling in file systems? Why is it important?
157. What is a Journal in a journaling file system?
158. What is Free Space Management? What are the methods? (Bitmap, Linked List, Grouping, Counting)
159. What is Disk Formatting? What is the difference between Quick Format and Full Format?
160. What is a Boot Block?
161. What is a Superblock in Unix/Linux file systems?
162. What is File Descriptor? How is it different from an Inode?
163. What is the difference between `open()`, `read()`, `write()`, and `close()` system calls?
164. What is File Locking? What are the types (Shared and Exclusive)?
165. What is Access Control List (ACL)?
166. What are File Permissions in Unix/Linux? Explain `rwx` notation.
167. What does `chmod 755` mean?
168. What is the difference between `chmod` and `chown`?
169. What is RAID? What are the different RAID levels? (RAID 0, 1, 5, 6, 10)
170. What is the difference between RAID 0 and RAID 1?

---

### Disk Scheduling & I/O Management

171. What is Disk Scheduling? Why is it needed?
172. What is Seek Time, Rotational Latency, and Transfer Time?
173. What is Disk Access Time?
174. Explain the following Disk Scheduling Algorithms:
    - FCFS (First-Come, First-Served)
    - SSTF (Shortest Seek Time First)
    - SCAN (Elevator Algorithm)
    - C-SCAN (Circular SCAN)
    - LOOK
    - C-LOOK
175. What is the difference between SCAN and C-SCAN?
176. What is the difference between SCAN and LOOK?
177. Calculate the total head movement for the request queue `98, 183, 37, 122, 14, 124, 65, 67` using FCFS, starting at position 53.
178. What is Disk Formatting? What is the difference between Low-level and High-level formatting?
179. What is a Bad Block? How does the OS handle it?
180. What is Disk Caching? How does it improve performance?
181. What is a Buffer Cache?
182. What is I/O Scheduling?
183. What is the difference between Synchronous and Asynchronous I/O?
184. What is Blocking I/O vs Non-Blocking I/O?
185. What is I/O Multiplexing? (select, poll, epoll)
186. What is the difference between `select()`, `poll()`, and `epoll()`?
187. What is Buffering in I/O? Why is it used?
188. What is Spooling? How is it different from Buffering?
189. What is a Device Controller?
190. What is Memory-Mapped I/O vs Port-Mapped I/O?

---

### Protection & Security

191. What is the difference between Protection and Security in an OS?
192. What is the Principle of Least Privilege?
193. What is Authentication? What are the methods? (Password, Biometric, Two-Factor)
194. What is Authorization? How is it different from Authentication?
195. What is Access Control? What are the models? (DAC, MAC, RBAC)
196. What is Discretionary Access Control (DAC)?
197. What is Mandatory Access Control (MAC)?
198. What is Role-Based Access Control (RBAC)?
199. What is an Access Control Matrix?
200. What is a Capability List vs Access Control List?
201. What is Encryption? What is the difference between Symmetric and Asymmetric encryption?
202. What is a Virus? What are the different types?
203. What is a Worm? How is it different from a Virus?
204. What is a Trojan Horse?
205. What is Malware? What are the different types?
206. What is a Rootkit?
207. What is a Buffer Overflow attack? How can it be prevented?
208. What is SQL Injection in the context of OS security?
209. What is a Firewall? How does it protect a system?
210. What is Intrusion Detection System (IDS) vs Intrusion Prevention System (IPS)?

---

### Linux/Unix Specific

211. What is the Linux Kernel? What version is currently stable?
212. What is the difference between Linux and Unix?
213. What is a Linux Distribution? Name some popular ones (Ubuntu, Fedora, Debian, Arch).
214. What is the Linux File System Hierarchy? Explain `/bin`, `/etc`, `/home`, `/var`, `/tmp`, `/usr`.
215. What is the `/proc` directory? What information does it contain?
216. What is the `/dev` directory? What are device files?
217. What is the difference between `/bin` and `/sbin`?
218. What is the difference between `/usr/bin` and `/usr/local/bin`?
219. What is a Daemon in Linux? Give examples (sshd, httpd, cron).
220. What is `systemd`? How is it different from `init`?
221. What is a Runlevel in Linux?
222. What is the `ps` command? What does `ps aux` show?
223. What is the `top` command? How is it different from `htop`?
224. What is the `kill` command? What is the difference between `kill` and `kill -9`?
225. What is the `nice` and `renice` command? What do they do?
226. What is the `grep` command? Give examples of its usage.
227. What is the `find` command? How is it different from `locate`?
228. What is the `chmod` command? Explain with examples.
229. What is the `chown` command? Explain with examples.
230. What is the `df` command? What does it show?
231. What is the `du` command? What does it show?
232. What is the `mount` and `umount` command?
233. What is the `/etc/fstab` file? What is its purpose?
234. What is the `cron` daemon? How do you schedule tasks using crontab?
235. What is the `at` command? How is it different from `cron`?
236. What is the `tar` command? How do you create and extract tar archives?
237. What is the difference between `tar`, `gzip`, and `zip`?
238. What is the `ssh` command? How does SSH work?
239. What is the `scp` command? How do you copy files securely?
240. What is the `rsync` command? What are its advantages over `scp`?
241. What is the `awk` command? Give a simple example.
242. What is the `sed` command? Give a simple example.
243. What is a Pipe (`|`) in Linux? How is it used?
244. What is Redirection in Linux? Explain `>`, `>>`, `<`, `2>`.
245. What is the difference between `>` and `>>`?
246. What is `/dev/null`? When would you use it?
247. What is the `tee` command?
248. What is the `xargs` command?
249. What is the `which` command? How is it different from `whereis`?
250. What is the `alias` command? How do you create permanent aliases?

---

### Advanced OS Concepts

251. What is a Virtual Machine? How does it work?
252. What is a Hypervisor? What are the two types (Type 1 and Type 2)?
253. What is the difference between Full Virtualization and Para-virtualization?
254. What is Containerization? How is it different from Virtualization?
255. What is Docker? How does it use OS-level virtualization?
256. What is a Real-Time Operating System (RTOS)? What are its characteristics?
257. What is Hard Real-Time vs Soft Real-Time?
258. What is a Distributed Operating System? Give examples.
259. What is Distributed File System? (NFS, HDFS)
260. What is Distributed Shared Memory?
261. What is Remote Procedure Call (RPC)?
262. What is a Microkernel? What are its advantages?
263. What is an Exokernel?
264. What is the Difference between Microkernel and Monolithic Kernel?
265. What is Kernel Panic? What causes it?
266. What is a System Crash? How do you recover from it?
267. What is a Core Dump?
268. What is Logging in an OS? What is `syslog`?
269. What is Log Rotation?
270. What is Performance Monitoring? What tools are used? (vmstat, iostat, sar)

---

### Memory Management Advanced

271. What is Huge Pages (Large Pages)? Why are they used?
272. What is NUMA (Non-Uniform Memory Access)?
273. What is Memory Ballooning in virtualization?
274. What is Kernel Same-page Merging (KSM)?
275. What is the OOM Killer (Out of Memory Killer)?
276. What is the difference between Physical and Virtual Memory?
277. What is Resident Set Size (RSS)?
278. What is the difference between RSS and VSZ?
279. What is Memory Overcommitment?
280. What is the `mmap()` system call? What does it do?

---

### Process Scheduling Advanced

281. What is CPU Affinity? Why is it important?
282. What is Load Balancing in multi-processor systems?
283. What is Symmetric Multiprocessing (SMP)?
284. What is Asymmetric Multiprocessing?
285. What is Processor Affinity (Hard vs Soft)?
286. What is the Completely Fair Scheduler (CFS) in Linux?
287. What is the O(1) Scheduler? How does it work?
288. What is Real-Time Scheduling? What are the algorithms? (Rate Monotonic, Earliest Deadline First)
289. What is Priority Inheritance?
290. What is Gang Scheduling?

---

### File Systems Advanced

291. What is Copy-on-Write (COW) in file systems?
292. What is ZFS? What are its features?
293. What is Btrfs? How is it different from ext4?
294. What is a Snapshot in file systems?
295. What is Deduplication in file systems?
296. What is File System Compression?
297. What is the difference between Block Device and Character Device?
298. What is the Virtual File System (VFS) layer in Linux?
299. What is the Page Cache in Linux?
300. What is the Dentry Cache?

---

### Networking in OS

301. What is a Network Stack? What are the layers?
302. What is a Socket? What are the types (Stream, Datagram, Raw)?
303. What is the difference between TCP and UDP sockets?
304. What is the `bind()` system call?
305. What is the `listen()` and `accept()` system call?
306. What is the `connect()` system call?
307. What is Port Number? What is the range?
308. What is the difference between Well-Known Ports and Ephemeral Ports?
309. What is Network Address Translation (NAT)?
310. What is the `netstat` command? What information does it provide?
311. What is the `ifconfig` command? How is it different from `ip`?
312. What is the `ping` command? How does it work?
313. What is the `traceroute` command?
314. What is DNS? How does DNS resolution work in an OS?
315. What is the `/etc/hosts` file?
316. What is the `/etc/resolv.conf` file?
317. What is ARP (Address Resolution Protocol)?
318. What is the `arp` command?
319. What is a Network Interface Card (NIC)?
320. What is Packet Filtering?

---

### System Calls & APIs

321. What is a System Call Interface?
322. List common system calls in Unix/Linux for:
    - Process Control (fork, exec, wait, exit)
    - File Management (open, read, write, close)
    - Device Management (ioctl, read, write)
    - Information Maintenance (getpid, alarm, sleep)
    - Communication (pipe, shmget, mmap)
323. What is the `strace` command? How is it useful?
324. What is the `ltrace` command?
325. What is a Library Call vs System Call?
326. What is the C Standard Library (libc)?
327. What is POSIX? Why is it important?
328. What is the difference between `fork()` and `vfork()`?
329. What is the `clone()` system call in Linux?
330. What is the `execve()` system call?

---

### Performance & Optimization

331. What is CPU Utilization? How do you measure it?
332. What is I/O Wait Time?
333. What is System Load Average? How do you interpret it?
334. What is the `uptime` command?
335. What is the `vmstat` command? What information does it provide?
336. What is the `iostat` command?
337. What is the `sar` command?
338. What is Profiling? What tools are used? (gprof, perf)
339. What is the `perf` tool in Linux?
340. What is a Bottleneck in system performance?
341. How do you identify CPU-bound vs I/O-bound processes?
342. What is the difference between Latency and Throughput?
343. What is Caching? What are the different levels of cache (L1, L2, L3)?
344. What is Cache Coherence in multi-processor systems?
345. What is False Sharing in multi-core systems?
346. What is Prefetching?
347. What is Branch Prediction?
348. What is Speculative Execution?
349. What is the Meltdown and Spectre vulnerability?
350. What is ASLR (Address Space Layout Randomization)?

---

### Modern OS Features

351. What is Namespaces in Linux? What are the types?
352. What is cgroups (Control Groups)? What are they used for?
353. What is SELinux (Security-Enhanced Linux)?
354. What is AppArmor?
355. What is Seccomp (Secure Computing Mode)?
356. What is the difference between SELinux and AppArmor?
357. What is eBPF (Extended Berkeley Packet Filter)?
358. What is the io_uring interface in Linux?
359. What is the difference between epoll and io_uring?
360. What is Kernel Bypass? Why is it used?
361. What is DPDK (Data Plane Development Kit)?
362. What is User-Space File System (FUSE)?
363. What is the Linux Kernel Module? How do you load/unload modules?
364. What is the `lsmod` command?
365. What is the `modprobe` command?
366. What is the `insmod` and `rmmod` command?
367. What is the `/sys` directory in Linux?
368. What is the difference between `/proc` and `/sys`?
369. What is the `dmesg` command? What does it show?
370. What is the Kernel Ring Buffer?

---

### Debugging & Troubleshooting

371. What is a Segmentation Fault? What causes it?
372. What is a Core Dump? How do you analyze it?
373. What is the `gdb` debugger? How do you use it?
374. What is the `valgrind` tool? What is it used for?
375. What is a Memory Leak? How do you detect it?
376. What is the `lsof` command? What does it show?
377. What is the `fuser` command?
378. What is the `strace` command used for?
379. How do you debug a hanging process?
380. How do you debug high CPU usage?
381. How do you debug high memory usage?
382. What is the `pmap` command?
383. What is the `/proc/[pid]/maps` file?
384. What is the `/proc/[pid]/status` file?
385. What is the `pidstat` command?
386. What is the `mpstat` command?
387. What is System Monitoring? What tools are available?
388. What is the difference between Monitoring and Logging?
389. What is the `journalctl` command in systemd?
390. How do you view system logs in Linux?

---

### Practical Scenarios & Code

391. Write a C program that creates a child process using `fork()`. The parent should print "Parent Process" and the child should print "Child Process".

392. Write a C program that demonstrates the use of `exec()` family of functions.

393. Write a C program to create a thread using pthread library.

394. Write a C program to demonstrate the Producer-Consumer problem using semaphores.

395. Write a shell script that checks if a file exists and prints its size.

396. Write a shell script that takes a directory as input and counts the number of files in it.

397. Write a shell script to monitor CPU usage and send an alert if it exceeds 80%.

398. How would you find all processes consuming more than 50% CPU?

399. How would you find the top 10 memory-consuming processes?

400. How would you kill all processes with a specific name?

401. Explain the output of `ps aux | grep nginx`.

402. What does the command `find / -name "*.log" -mtime +7 -delete` do?

403. What does the command `tar -czf backup.tar.gz /home/user` do?

404. What is the difference between `kill -15` and `kill -9`?

405. How do you check disk usage of a specific directory?

406. How do you find files larger than 100MB in a directory?

407. How do you change file permissions to make a script executable?

408. What does `chmod 644 file.txt` do?

409. What does `chown user:group file.txt` do?

410. How do you create a symbolic link in Linux?

411. How do you find the process ID of a running process by name?

412. How do you check which ports are listening on your system?

413. How do you check the routing table in Linux?

414. How do you add a static route in Linux?

415. How do you check network connectivity to a remote host?

416. How do you download a file from the internet using command line?

417. What is the difference between `wget` and `curl`?

418. How do you compress and decompress files using `gzip`?

419. How do you search for a string in all files in a directory recursively?

420. How do you replace all occurrences of a string in a file using `sed`?

---

### Interview Scenarios

421. Your system is running slow. What steps would you take to diagnose the issue?

422. A process is consuming 100% CPU. How would you identify and resolve it?

423. Your disk is full. How would you find which files/directories are consuming the most space?

424. You cannot SSH into a remote server. What could be the possible reasons and how would you troubleshoot?

425. A critical process keeps crashing. How would you debug it?

426. You need to schedule a script to run every day at 2 AM. How would you do it?

427. How would you set up a web server (Apache/Nginx) on a Linux system?

428. How would you secure a Linux server? List at least 10 security measures.

429. How would you monitor system performance in real-time?

430. How would you recover data from a crashed system?

431. Explain how you would implement a backup strategy for a production server.

432. How would you handle a situation where the system runs out of memory?

433. How would you optimize a system for better I/O performance?

434. How would you migrate an application from one server to another with minimal downtime?

435. How would you set up a firewall on a Linux system?

436. How would you troubleshoot network connectivity issues?

437. How would you handle a kernel panic situation?

438. How would you implement log rotation for application logs?

439. How would you set up user permissions for a multi-user system?

440. How would you automate system administration tasks?

---

### Conceptual Deep Dive

441. Explain the complete boot process of a Linux system from power-on to login prompt.

442. Explain how virtual memory works in detail with page tables and TLB.

443. Explain the complete process of how a system call works from user space to kernel space and back.

444. Explain how the scheduler decides which process to run next in a multi-core system.

445. Explain how deadlock detection works using Resource Allocation Graph.

446. Explain the difference between process-based and thread-based parallelism.

447. Explain how copy-on-write works in process creation.

448. Explain how demand paging works and what happens during a page fault.

449. Explain the concept of locality of reference and how it affects system performance.

450. Explain how file systems maintain consistency after a crash (journaling).

---

### Comparison Questions

451. Compare and contrast Processes vs Threads.

452. Compare and contrast Paging vs Segmentation.

453. Compare and contrast Internal vs External Fragmentation.

454. Compare and contrast Preemptive vs Non-Preemptive Scheduling.

455. Compare and contrast User-Level Threads vs Kernel-Level Threads.

456. Compare and contrast Mutex vs Semaphore.

457. Compare and contrast Deadlock Prevention vs Deadlock Avoidance.

458. Compare and contrast Hard Link vs Soft Link.

459. Compare and contrast Contiguous vs Linked vs Indexed File Allocation.

460. Compare and contrast RAID 0 vs RAID 1 vs RAID 5.

461. Compare and contrast Monolithic Kernel vs Microkernel.

462. Compare and contrast Virtual Machine vs Container.

463. Compare and contrast Synchronous vs Asynchronous I/O.

464. Compare and contrast Polling vs Interrupt-driven I/O.

465. Compare and contrast Static vs Dynamic Linking.

466. Compare and contrast Compile-time vs Run-time address binding.

467. Compare and contrast First Fit vs Best Fit vs Worst Fit.

468. Compare and contrast FCFS vs Round Robin scheduling.

469. Compare and contrast LRU vs FIFO page replacement.

470. Compare and contrast Hard Real-Time vs Soft Real-Time systems.

---

### Algorithm Implementation

471. Implement the FCFS CPU scheduling algorithm and calculate average waiting time.

472. Implement the Round Robin scheduling algorithm with time quantum = 2.

473. Implement the Banker's Algorithm for deadlock avoidance.

474. Implement the FIFO page replacement algorithm.

475. Implement the LRU page replacement algorithm.

476. Implement the Producer-Consumer problem using semaphores in pseudocode.

477. Implement the Readers-Writers problem solution.

478. Implement the Dining Philosophers problem solution.

479. Implement First Fit memory allocation algorithm.

480. Implement the SCAN disk scheduling algorithm.

---

### True/False & Quick Answers

481. True or False: A process can have multiple threads, but a thread cannot have multiple processes.

482. True or False: Context switching between threads is faster than context switching between processes.

483. True or False: Virtual memory allows a program to execute even if it's not entirely in main memory.

484. True or False: Deadlock can occur with only two processes.

485. True or False: Round Robin scheduling is a preemptive algorithm.

486. True or False: FCFS scheduling can cause starvation.

487. True or False: Paging eliminates external fragmentation.

488. True or False: A hard link can point to a directory.

489. True or False: The kernel runs in user mode.

490. True or False: A zombie process consumes CPU resources.

491. What is the maximum number of processes that can exist in a system? (Theoretical)

492. What is the typical size of a page in modern systems?

493. What is the typical time quantum in Round Robin scheduling?

494. What is the maximum file size in ext4 file system?

495. What is the maximum number of hard links a file can have?

496. What is the default shell in most Linux distributions?

497. What is the default permission for a newly created file in Linux?

498. What is the root user's UID in Linux?

499. What is the process ID of the init/systemd process?

500. What is the maximum length of a filename in most Linux file systems?
