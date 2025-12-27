### Monorepo Fundamentals

1. What is a monorepo?
2. What is the difference between a monorepo and a polyrepo (multi-repo)?
3. What are the main advantages of using a monorepo?
4. What are the main disadvantages or challenges of using a monorepo?
5. What is code sharing in a monorepo context?
6. What is atomic commits in monorepos?
7. What is a workspace in a monorepo?
8. What is a package in a monorepo?
9. What is the difference between a workspace and a package?
10. What are some famous companies that use monorepos? (Google, Facebook, Microsoft)
11. What is the difference between a monolith and a monorepo?
12. Can you have microservices in a monorepo?
13. What is the monorepo vs microservices debate?
14. What is code colocation?
15. What is dependency management in monorepos?
16. What is the phantom dependency problem?
17. What is dependency hoisting?
18. What is the node_modules structure in a monorepo?
19. What is a root package.json vs workspace package.json?
20. What is the difference between internal packages and external packages?

---

### Monorepo Tools & Solutions

21. What are the popular monorepo tools? (Turborepo, Nx, Lerna, Rush, Bazel)
22. What is npm workspaces?
23. What is yarn workspaces?
24. What is pnpm workspaces?
25. What is the difference between npm, yarn, and pnpm workspaces?
26. What is Lerna? What problem does it solve?
27. Is Lerna still actively maintained?
28. What is Nx? How is it different from Turborepo?
29. What is Bazel? When would you use it?
30. What is Rush? What makes it unique?
31. What is the difference between package managers (npm/yarn/pnpm) and build tools (Turborepo/Nx)?
32. Can you use Turborepo with npm workspaces?
33. Can you use Turborepo with yarn workspaces?
34. Can you use Turborepo with pnpm workspaces?
35. What is the recommended package manager for Turborepo?
36. What is the `workspaces` field in package.json?
37. How do you define workspaces in package.json?
38. What is the glob pattern for workspaces?
39. 
```json
{
  "workspaces": ["packages/*", "apps/*"]
}
```
What does this configuration do?
40. What is the `private: true` field in root package.json? Why is it required?

---

### Turborepo Fundamentals

41. What is Turborepo?
42. Who created Turborepo? (Jared Palmer, now owned by Vercel)
43. What problems does Turborepo solve?
44. What is the main feature of Turborepo?
45. What is task caching in Turborepo?
46. What is remote caching in Turborepo?
47. What is task orchestration?
48. What is incremental builds?
49. What is the difference between Turborepo and Lerna?
50. What is the difference between Turborepo and Nx?
51. When should you choose Turborepo over Nx?
52. What is Vercel Remote Cache?
53. What is the `turbo.json` file?
54. What is the purpose of `turbo.json`?
55. Where should `turbo.json` be located?
56. What is a pipeline in Turborepo?
57. What is a task in Turborepo?
58. What is task dependency in Turborepo?
59. What is parallel execution in Turborepo?
60. What is the Turborepo CLI?

---

### Installing & Setting Up Turborepo

61. How do you install Turborepo globally?
62. How do you install Turborepo as a dev dependency?
63. What is the `turbo` command?
64. How do you create a new Turborepo project?
65. What is the `npx create-turbo@latest` command?
66. What templates are available with create-turbo?
67. What is the basic structure of a Turborepo project?
68. What is the `apps/` directory?
69. What is the `packages/` directory?
70. What is the difference between apps and packages?
71. How do you add a new app to a Turborepo?
72. How do you add a new package to a Turborepo?
73. What is the naming convention for internal packages?
74. What is the `@repo/` prefix?
75. How do you reference an internal package?
76. 
```json
{
  "dependencies": {
    "@repo/ui": "*"
  }
}
```
What does the `*` version mean in a monorepo?
77. What is the `workspace:*` protocol in pnpm?
78. How do you install dependencies in a Turborepo?
79. Should you run `npm install` in the root or in individual packages?
80. What is the `--filter` flag in pnpm?

---

### turbo.json Configuration

81. What is the structure of `turbo.json`?
82. What is the `pipeline` field in turbo.json?
83. What is the `$schema` field in turbo.json?
84. 
```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {},
    "dev": {},
    "lint": {}
  }
}
```
Explain this basic turbo.json configuration.
85. What is a task definition in the pipeline?
86. How do you define a task in turbo.json?
87. What is the `outputs` field in a task?
88. What is the `cache` field in a task?
89. What is the `dependsOn` field in a task?
90. What is the `inputs` field in a task?
91. What is the `outputMode` field in a task?
92. What is the `persistent` field in a task?
93. What is the `env` field in a task?
94. What is the `passThroughEnv` field in a task?
95. 
```json
{
  "build": {
    "outputs": ["dist/**", ".next/**"],
    "dependsOn": ["^build"]
  }
}
```
Explain this task configuration.
96. What does `^build` mean in dependsOn?
97. What is the caret (^) symbol in task dependencies?
98. What is the difference between `"dependsOn": ["build"]` and `"dependsOn": ["^build"]`?
99. 
```json
{
  "test": {
    "dependsOn": ["build"],
    "outputs": ["coverage/**"]
  }
}
```
What does this configuration mean?
100. How do you make a task depend on multiple tasks?

---

### Running Tasks with Turborepo

101. How do you run a task with Turborepo?
102. What is the `turbo run` command?
103. What is the shorthand for `turbo run build`?
104. 
```bash
turbo build
```
What does this command do?
105. How does Turborepo know which packages to build?
106. What is task discovery in Turborepo?
107. How do you run a task in a specific package?
108. What is the `--filter` flag?
109. 
```bash
turbo build --filter=web
```
What does this command do?
110. How do you run a task in multiple specific packages?
111. What is the filter syntax?
112. How do you filter by package name pattern?
113. 
```bash
turbo build --filter=@repo/*
```
What does this do?
114. How do you run tasks in parallel?
115. What is the `--parallel` flag?
116. What is the `--concurrency` flag?
117. How do you limit the number of parallel tasks?
118. 
```bash
turbo build --concurrency=3
```
What does this do?
119. What is the `--continue` flag?
120. What happens if a task fails by default?

---

### Caching in Turborepo

121. What is caching in Turborepo?
122. How does Turborepo cache work?
123. What is a cache hit?
124. What is a cache miss?
125. What determines if a task is cached?
126. What is a task hash?
127. What inputs are used to calculate the task hash?
128. What is the `inputs` field used for?
129. What is the default inputs for a task?
130. How do you specify custom inputs?
131. 
```json
{
  "build": {
    "inputs": ["src/**/*.ts", "package.json"]
  }
}
```
What does this configuration do?
132. What is the `outputs` field used for?
133. What happens if you don't specify outputs?
134. Where is the cache stored locally?
135. What is the `.turbo` directory?
136. What is inside the `.turbo/cache` directory?
137. How do you clear the local cache?
138. What is the `--force` flag?
139. 
```bash
turbo build --force
```
What does this do?
140. What is the `--no-cache` flag?
141. What is the difference between `--force` and `--no-cache`?
142. How do you disable caching for a specific task?
143. 
```json
{
  "dev": {
    "cache": false
  }
}
```
What does this do?
144. What tasks should not be cached?
145. Should you cache the `dev` task?
146. What is cache restoration?
147. What is the FULL TURBO message?
148. What does it mean when you see "cache hit, replaying logs"?
149. How does Turborepo replay logs from cache?
150. What is the performance benefit of caching?

---

### Remote Caching

151. What is remote caching?
152. Why use remote caching?
153. What is Vercel Remote Cache?
154. What is the benefit of remote caching in CI/CD?
155. What is the benefit of remote caching for teams?
156. How do you enable remote caching?
157. What is the `turbo login` command?
158. How do you authenticate with Vercel?
159. What is the `turbo link` command?
160. How do you link a project to Vercel?
161. What is a Vercel token?
162. How do you use a token for authentication?
163. What is the `TURBO_TOKEN` environment variable?
164. What is the `TURBO_TEAM` environment variable?
165. How do you configure remote caching in CI?
166. 
```bash
turbo build --token=$TURBO_TOKEN --team=$TURBO_TEAM
```
What does this command do?
167. What is a custom remote cache?
168. Can you use your own remote cache server?
169. What is the `--api` flag?
170. What is the remote cache API?
171. How do you implement a custom remote cache?
172. What is the cache artifact format?
173. What is cache signature verification?
174. What are the security considerations for remote caching?
175. Should you cache sensitive data?
176. How do you exclude sensitive files from cache?
177. What is the `.gitignore` and cache relationship?
178. What is the `globalDependencies` field?
179. 
```json
{
  "globalDependencies": [".env", "tsconfig.json"]
}
```
What does this do?
180. How do you invalidate the entire cache?

---

### Task Dependencies & Orchestration

181. What is task orchestration?
182. What is the task dependency graph?
183. How does Turborepo determine task order?
184. What is topological ordering?
185. What is the `dependsOn` field?
186. How do you make a task depend on another task in the same package?
187. 
```json
{
  "deploy": {
    "dependsOn": ["build", "test"]
  }
}
```
What does this mean?
188. How do you make a task depend on a task in dependencies?
189. What does `^build` mean?
190. 
```json
{
  "build": {
    "dependsOn": ["^build"]
  }
}
```
Explain this configuration.
191. What is the execution order with `^build`?
192. Can you have circular dependencies?
193. What happens if you create a circular dependency?
194. How do you depend on a specific package's task?
195. What is the `package#task` syntax?
196. 
```json
{
  "deploy": {
    "dependsOn": ["@repo/ui#build"]
  }
}
```
What does this do?
197. What is the difference between task-level and package-level dependencies?
198. How do you run tasks in a specific order?
199. What is the `--graph` flag?
200. How do you visualize the task dependency graph?

---

### Environment Variables

201. How do you handle environment variables in Turborepo?
202. What is the `env` field in turbo.json?
203. What is the `passThroughEnv` field?
204. What is the difference between `env` and `passThroughEnv`?
205. 
```json
{
  "build": {
    "env": ["NODE_ENV", "API_URL"]
  }
}
```
What does this do?
206. Why do you need to declare environment variables?
207. What happens if you use an undeclared environment variable?
208. How do environment variables affect caching?
209. What is the `globalEnv` field?
210. 
```json
{
  "globalEnv": ["CI", "VERCEL"]
}
```
What does this do?
211. What is the difference between `env` and `globalEnv`?
212. How do you use `.env` files in a monorepo?
213. Where should you place `.env` files?
214. What is the `.env.local` file?
215. How do you load environment variables in different packages?
216. What is the `dotenv` package?
217. How do you share environment variables across packages?
218. What is the security concern with environment variables in monorepos?
219. Should you commit `.env` files?
220. What is the `.env.example` pattern?

---

### Package Dependencies & Internal Packages

221. What is an internal package?
222. What is an external package?
223. How do you create a shared UI component library?
224. How do you create a shared utilities package?
225. How do you create a shared TypeScript config package?
226. What is `@repo/ui` convention?
227. How do you export components from an internal package?
228. What is the `main` field in package.json?
229. What is the `exports` field in package.json?
230. 
```json
{
  "name": "@repo/ui",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```
Explain this package.json configuration.
231. How do you import from an internal package?
232. 
```js
import { Button } from '@repo/ui';
```
How does this import work in a monorepo?
233. What is the `paths` field in tsconfig.json?
234. How do you configure TypeScript for monorepo imports?
235. What is TypeScript project references?
236. How do you set up TypeScript project references?
237. What is the `references` field in tsconfig.json?
238. What is the `composite` flag in tsconfig.json?
239. How do you build TypeScript packages in the correct order?
240. What is the `tsc --build` command?

---

### Code Sharing & Reusability

241. What are the benefits of code sharing in monorepos?
242. How do you share React components across apps?
243. How do you share utility functions across packages?
244. How do you share TypeScript types across packages?
245. How do you share ESLint configuration?
246. How do you share Prettier configuration?
247. How do you share Tailwind CSS configuration?
248. How do you share tsconfig.json?
249. What is a shared config package?
250. 
```
packages/
  eslint-config/
    index.js
  tsconfig/
    base.json
    nextjs.json
    react.json
```
Explain this structure.
251. How do you extend a shared ESLint config?
252. 
```json
{
  "extends": ["@repo/eslint-config"]
}
```
What does this do?
253. How do you extend a shared tsconfig?
254. 
```json
{
  "extends": "@repo/tsconfig/nextjs.json"
}
```
What does this do?
255. What is the DRY principle in monorepos?
256. How do you avoid code duplication?
257. What is the single source of truth concept?
258. How do you version internal packages?
259. Should internal packages have version numbers?
260. What is the `*` version in dependencies?

---

### Building & Bundling

261. How do you build packages in a Turborepo?
262. What is the build order?
263. How does Turborepo determine build order?
264. What build tools can you use? (tsup, esbuild, rollup, webpack)
265. What is tsup?
266. How do you configure tsup for a package?
267. 
```json
{
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts"
  }
}
```
What does this script do?
268. What is the `--format` flag in tsup?
269. What is the `--dts` flag?
270. What is CommonJS (cjs) format?
271. What is ESM (ES Modules) format?
272. Should you build both CJS and ESM?
273. What is the `type: "module"` field in package.json?
274. What is dual package publishing?
275. How do you configure package.json for dual packages?
276. 
```json
{
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    }
  }
}
```
Explain this configuration.
277. What is the `exports` field?
278. What is the `module` field?
279. What is tree shaking?
280. How do you enable tree shaking?

---

### Development Workflow

281. How do you run dev servers in a monorepo?
282. How do you run multiple dev servers simultaneously?
283. What is the `--parallel` flag for dev tasks?
284. 
```bash
turbo dev --parallel
```
What does this do?
285. What is the `persistent` field in turbo.json?
286. 
```json
{
  "dev": {
    "cache": false,
    "persistent": true
  }
}
```
Why is `persistent: true` used for dev tasks?
287. How do you watch for changes in internal packages?
288. What is hot module replacement (HMR) in monorepos?
289. How do you enable HMR for internal packages?
290. What is the `--watch` flag?
291. How do you debug in a monorepo?
292. How do you set up VS Code for monorepo debugging?
293. What is the workspace concept in VS Code?
294. How do you configure launch.json for multiple apps?
295. What is the `--filter` flag for running specific apps?
296. 
```bash
turbo dev --filter=web
```
What does this do?
297. How do you run tasks in a specific scope?
298. What is the `--scope` flag? (deprecated in favor of --filter)
299. How do you exclude packages from a task?
300. What is the `--ignore` flag?

---

### Testing in Monorepos

301. How do you set up testing in a Turborepo?
302. What testing frameworks work with Turborepo? (Jest, Vitest, Playwright)
303. How do you run tests across all packages?
304. 
```bash
turbo test
```
What does this do?
305. How do you run tests in a specific package?
306. Should you cache test results?
307. 
```json
{
  "test": {
    "outputs": ["coverage/**"],
    "dependsOn": ["^build"]
  }
}
```
Explain this test configuration.
308. What is the `coverage/**` output?
309. How do you generate code coverage in a monorepo?
310. How do you aggregate coverage from multiple packages?
311. What is the `--coverage` flag in Jest/Vitest?
312. How do you set up end-to-end testing?
313. Where should E2E tests live in a monorepo?
314. How do you test internal packages?
315. What is the test pyramid in monorepos?
316. How do you run tests in CI/CD?
317. How do you parallelize tests in CI?
318. What is the `--continue` flag for tests?
319. How do you handle test failures?
320. What is watch mode for tests?

---

### Linting & Formatting

321. How do you set up ESLint in a Turborepo?
322. How do you share ESLint configuration?
323. What is the `@repo/eslint-config` package?
324. How do you run linting across all packages?
325. 
```bash
turbo lint
```
What does this do?
326. Should you cache lint results?
327. What is the `--fix` flag?
328. How do you auto-fix lint errors?
329. How do you set up Prettier in a monorepo?
330. Where should the Prettier config be located?
331. How do you format code across all packages?
332. What is the `format` script?
333. How do you integrate Prettier with ESLint?
334. What is `eslint-config-prettier`?
335. How do you run lint-staged in a monorepo?
336. What is Husky?
337. How do you set up pre-commit hooks?
338. Where should Husky be configured in a monorepo?
339. How do you run lint-staged only on changed files?
340. What is the `--filter` with git changes?

---

### CI/CD with Turborepo

341. How do you set up CI/CD for a Turborepo?
342. What is the benefit of Turborepo in CI?
343. How do you use remote caching in CI?
344. What environment variables are needed for CI?
345. 
```yaml
env:
  TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}
  TURBO_TEAM: ${{ secrets.TURBO_TEAM }}
```
What does this GitHub Actions configuration do?
346. How do you run only affected tasks in CI?
347. What is the `--filter` with git diff?
348. 
```bash
turbo build --filter=[HEAD^1]
```
What does this do?
349. How do you detect changed packages?
350. What is the `--since` flag?
351. How do you run tasks only for changed packages?
352. What is the benefit of running only affected tasks?
353. How do you parallelize CI jobs?
354. What is the `--concurrency` flag in CI?
355. How do you split tests across multiple CI jobs?
356. What is test sharding?
357. How do you cache node_modules in CI?
358. What is the GitHub Actions cache action?
359. How do you combine GitHub Actions cache with Turborepo cache?
360. What is the `--output-logs` flag?

---

### Deployment & Publishing

361. How do you deploy apps from a Turborepo?
362. How do you deploy to Vercel from a monorepo?
363. What is the Vercel monorepo support?
364. How do you configure Vercel for a specific app?
365. What is the `vercel.json` file?
366. How do you set the root directory in Vercel?
367. What is the `buildCommand` in Vercel?
368. 
```json
{
  "buildCommand": "cd ../.. && turbo build --filter=web"
}
```
Explain this Vercel configuration.
369. How do you deploy to Netlify from a monorepo?
370. How do you configure the base directory in Netlify?
371. How do you publish npm packages from a monorepo?
372. What is the `changeset` tool?
373. How do you use changesets with Turborepo?
374. What is semantic versioning in monorepos?
375. How do you version multiple packages together?
376. What is a fixed versioning strategy?
377. What is an independent versioning strategy?
378. How do you create a changeset?
379. 
```bash
npx changeset
```
What does this command do?
380. How do you publish packages with changesets?

---

### Performance & Optimization

381. How do you measure Turborepo performance?
382. What is the `--summarize` flag?
383. What is the `--dry-run` flag?
384. How do you profile task execution?
385. What is the task execution timeline?
386. How do you optimize cache hit rate?
387. What is cache effectiveness?
388. How do you reduce build times?
389. What is incremental building?
390. How do you optimize the dependency graph?
391. What is the impact of task dependencies on performance?
392. How do you minimize task dependencies?
393. What is the `--concurrency` optimization?
394. How many concurrent tasks should you run?
395. What is the CPU vs I/O bound tasks consideration?
396. How do you optimize Docker builds with Turborepo?
397. What is the layer caching in Docker?
398. How do you use Turborepo with Docker?
399. What is the `turbo prune` command?
400. How do you create a pruned workspace for Docker?

---

### Advanced Turborepo Features

401. What is the `turbo prune` command?
402. How does `turbo prune` work?
403. 
```bash
turbo prune --scope=web
```
What does this do?
404. What is the output of `turbo prune`?
405. What is the `out/` directory?
406. How do you use pruned workspace in Docker?
407. What is the benefit of pruning for Docker builds?
408. What is the `--docker` flag in `turbo prune`?
409. What is the `globalDependencies` field?
410. How do you specify global dependencies?
411. What files should be global dependencies?
412. What is the `globalEnv` field?
413. What is the `outputMode` field?
414. What are the output modes? (full, hash-only, new-only, errors-only, none)
415. 
```json
{
  "build": {
    "outputMode": "new-only"
  }
}
```
What does this do?
416. What is the `--output-logs` flag?
417. What are the output log modes? (full, hash-only, new-only, errors-only, none)
418. How do you suppress task output?
419. What is the `--log-order` flag?
420. What are the log order modes? (auto, grouped, stream)

---

### Turborepo with Different Frameworks

421. How do you use Turborepo with Next.js?
422. How do you configure multiple Next.js apps?
423. What is the Next.js cache in Turborepo?
424. How do you handle `.next` directory in outputs?
425. 
```json
{
  "build": {
    "outputs": [".next/**", "!.next/cache/**"]
  }
}
```
Explain this configuration.
426. How do you use Turborepo with Vite?
427. How do you configure Vite apps in a monorepo?
428. What is the `dist` directory in Vite?
429. How do you use Turborepo with React?
430. How do you use Turborepo with Vue?
431. How do you use Turborepo with Svelte?
432. How do you use Turborepo with Node.js backends?
433. How do you use Turborepo with Express?
434. How do you use Turborepo with NestJS?
435. How do you use Turborepo with tRPC?
436. What is a full-stack monorepo?
437. How do you structure a full-stack Turborepo?
438. 
```
apps/
  web/          # Next.js frontend
  api/          # Express backend
packages/
  ui/           # Shared UI components
  database/     # Prisma schema
  types/        # Shared TypeScript types
```
Explain this structure.
439. How do you share types between frontend and backend?
440. What is the `@repo/types` package?

---

### Troubleshooting & Debugging

441. How do you debug Turborepo issues?
442. What is the `--verbose` flag?
443. What is the `--dry-run` flag?
444. How do you see what Turborepo will do without running it?
445. What is the `--graph` flag?
446. How do you visualize the task graph?
447. What is the task graph output format?
448. How do you debug cache issues?
449. What is a cache miss?
450. Why might you get unexpected cache misses?
451. How do you debug task dependencies?
452. What is the `--dry=json` flag?
453. How do you inspect the task hash?
454. What inputs affect the task hash?
455. How do you debug environment variable issues?
456. What is the error "Environment variable not found"?
457. How do you fix undeclared environment variables?
458. What is the `--force` flag used for?
459. How do you bypass the cache?
460. What is the `.turbo` directory?
461. Should you commit `.turbo` to git?
462. What should be in `.gitignore` for Turborepo?
463. 
```
.turbo
node_modules
dist
.next
```
What should be ignored in a Turborepo?
464. How do you clean the cache?
465. How do you reset Turborepo state?
466. What is the `turbo daemon` command?
467. What is the Turborepo daemon?
468. How do you restart the daemon?
469. What is the `turbo daemon stop` command?
470. What is the `turbo daemon start` command?

---

### Migration & Adoption

471. How do you migrate from Lerna to Turborepo?
472. How do you migrate from Nx to Turborepo?
473. How do you migrate a polyrepo to a monorepo?
474. What are the steps to adopt Turborepo in an existing project?
475. How do you gradually adopt Turborepo?
476. Can you use Turborepo with an existing workspace setup?
477. How do you migrate from npm to pnpm?
478. How do you migrate from yarn to pnpm?
479. What is the `pnpm import` command?
480. How do you convert package-lock.json to pnpm-lock.yaml?
481. What are the breaking changes when migrating?
482. How do you handle different Node.js versions in packages?
483. What is the `engines` field in package.json?
484. How do you enforce Node.js version?
485. What is the `.nvmrc` file?
486. How do you use nvm with monorepos?
487. What is Volta?
488. How do you use Volta for version management?
489. What is the `volta` field in package.json?
490. How do you ensure consistent tooling across team members?

---

### Best Practices

491. What are the best practices for structuring a Turborepo?
492. How should you organize apps vs packages?
493. What should go in the `apps/` directory?
494. What should go in the `packages/` directory?
495. Should you have a `libs/` directory?
496. How do you name internal packages?
497. What is the `@repo/` namespace convention?
498. Should you use scoped packages?
499. How do you handle shared assets (images, fonts)?
500. Where should shared assets be stored?
501. How do you import shared assets?
502. What is the best practice for TypeScript configuration?
503. Should you have a root tsconfig.json?
504. How do you extend base TypeScript configs?
505. What is the best practice for ESLint configuration?
506. Should you have a root .eslintrc?
507. How do you handle different linting rules for different packages?
508. What is the best practice for environment variables?
509. Should you have a root .env file?
510. How do you handle secrets in monorepos?
511. What is the best practice for git commits?
512. Should you use conventional commits?
513. What is the commit message format?
514. How do you enforce commit message format?
515. What is commitlint?
516. How do you set up commitlint in a monorepo?
517. What is the best practice for versioning?
518. Should internal packages have versions?
519. How do you handle breaking changes?
520. What is the best practice for documentation?

---

### Comparison: Turborepo vs Nx

521. What is the main difference between Turborepo and Nx?
522. Which is faster: Turborepo or Nx?
523. Which is easier to set up: Turborepo or Nx?
524. What is the learning curve comparison?
525. What is code generation in Nx?
526. Does Turborepo have code generation?
527. What is the plugin ecosystem in Nx?
528. Does Turborepo have plugins?
529. What is affected command in Nx?
530. Does Turborepo have affected detection?
531. What is the `--filter` equivalent in Nx?
532. What is the caching comparison?
533. What is the remote caching comparison?
534. Which has better CI/CD integration?
535. Which is better for large enterprises?
536. Which is better for small teams?
537. What is the community size comparison?
538. What is the documentation quality comparison?
539. Which is more opinionated?
540. When should you choose Turborepo over Nx?

---

### Real-World Scenarios

541. How do you structure a monorepo with 3 Next.js apps and shared components?
542. How do you structure a monorepo with frontend and backend?
543. How do you handle database migrations in a monorepo?
544. Where should Prisma schema live?
545. How do you share Prisma client across packages?
546. How do you handle API types in a full-stack monorepo?
547. How do you implement a design system in a monorepo?
548. How do you version a design system?
549. How do you document components in a monorepo?
550. What is Storybook in monorepos?
551. How do you set up Storybook in a Turborepo?
552. How do you deploy multiple apps independently?
553. How do you handle feature flags in a monorepo?
554. How do you implement A/B testing across apps?
555. How do you handle analytics in a monorepo?
556. How do you share analytics utilities?
557. How do you handle authentication across apps?
558. How do you share auth logic?
559. How do you handle different environments (dev, staging, prod)?
560. How do you manage environment-specific configurations?

---

### Code Snippets & Practical Questions

561. 
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    },
    "lint": {},
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```
Explain this complete turbo.json configuration.

562. 
```bash
turbo build --filter=web --force
```
What does this command do?

563. 
```bash
turbo build --filter=...web
```
What does the `...` syntax mean?

564. 
```bash
turbo build --filter=web...
```
What does this filter do?

565. 
```bash
turbo build --filter=[origin/main]
```
What does this do?

566. Write a turbo.json configuration for a monorepo with build, test, lint, and dev tasks where test depends on build.

567. How do you configure a shared UI package that exports React components?

568. 
```json
{
  "name": "@repo/ui",
  "main": "./src/index.tsx",
  "types": "./src/index.tsx"
}
```
What's wrong with this configuration?

569. How do you set up a shared TypeScript config package?

570. 
```json
{
  "extends": "@repo/tsconfig/base.json",
  "compilerOptions": {
    "outDir": "dist"
  }
}
```
Explain this tsconfig.json.

571. How do you create a package.json script that runs build in all packages?

572. 
```json
{
  "scripts": {
    "build": "turbo build",
    "dev": "turbo dev --parallel",
    "lint": "turbo lint",
    "test": "turbo test"
  }
}
```
Explain these root package.json scripts.

573. How do you configure outputs for a Next.js app?

574. 
```json
{
  "build": {
    "outputs": [".next/**", "!.next/cache/**"],
    "dependsOn": ["^build"]
  }
}
```
Why exclude `.next/cache/**`?

575. How do you run a task only in packages that have changed since the last commit?

576. 
```bash
turbo build --filter=[HEAD^1]
```
Explain this command.

577. How do you configure Turborepo to use pnpm?

578. What is the difference between these two commands?
```bash
pnpm install
turbo build
```
vs
```bash
pnpm install && turbo build
```

579. How do you add a new dependency to a specific package in a monorepo?

580. 
```bash
pnpm add react --filter=web
```
What does this do?

581. How do you add a dev dependency to the root?

582. 
```bash
pnpm add -D turbo -w
```
What does the `-w` flag mean?

583. How do you link a local package as a dependency?

584. 
```json
{
  "dependencies": {
    "@repo/ui": "workspace:*"
  }
}
```
Explain this dependency declaration.

585. How do you configure environment variables for caching?

586. 
```json
{
  "pipeline": {
    "build": {
      "env": ["NEXT_PUBLIC_API_URL"],
      "outputs": [".next/**"]
    }
  }
}
```
What does the `env` field do here?

587. How do you create a Dockerfile for a Turborepo app?

588. 
```dockerfile
FROM node:18-alpine AS base
RUN npm install -g pnpm turbo

FROM base AS pruner
WORKDIR /app
COPY . .
RUN turbo prune --scope=web --docker

FROM base AS builder
WORKDIR /app
COPY --from=pruner /app/out/json/ .
RUN pnpm install
COPY --from=pruner /app/out/full/ .
RUN turbo build --filter=web

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/apps/web/.next ./apps/web/.next
CMD ["pnpm", "start", "--filter=web"]
```
Explain this multi-stage Dockerfile for Turborepo.

589. How do you set up GitHub Actions for a Turborepo?

590. 
```yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm turbo build test lint
        env:
          TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}
          TURBO_TEAM: ${{ secrets.TURBO_TEAM }}
```
Explain this GitHub Actions workflow.

591. How do you configure remote caching without Vercel?

592. What is the structure of a custom remote cache server?

593. How do you implement cache warming?

594. What is the `--remote-only` flag?

595. How do you debug why a task is not being cached?

596. 
```bash
turbo build --dry=json
```
What information does this provide?

597. How do you configure different outputs for different environments?

598. Can you have environment-specific turbo.json files?

599. How do you handle monorepo versioning with changesets?

600. 
```bash
npx changeset version
npx changeset publish
```
What do these commands do?

---

### Final Advanced Challenges

601. Design a monorepo structure for a SaaS application with web app, mobile app (React Native), admin dashboard, marketing site, and shared packages.

602. Implement a custom Turborepo task that runs only on packages that have failing tests.

603. Create a CI/CD pipeline that deploys only the apps that have changed.

604. Design a caching strategy for a monorepo with 50+ packages.

605. Implement a custom remote cache server using S3 and CloudFront.

606. Create a script that automatically generates a dependency graph visualization.

607. Implement a pre-commit hook that runs linting only on changed packages.

608. Design a migration strategy from a polyrepo to a Turborepo monorepo.

609. Create a custom Turborepo plugin for code generation.

610. Implement a system for tracking build times and cache hit rates over time.
