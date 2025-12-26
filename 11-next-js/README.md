### Next.js Fundamentals

1. What is Next.js?
2. How is Next.js different from React?
3. What problems does Next.js solve?
4. What are the main features of Next.js?
5. What is the difference between a library and a framework?
6. Is Next.js a framework or a library?
7. What companies use Next.js in production?
8. What is Vercel and how does it relate to Next.js?
9. What are the different rendering strategies in Next.js?
10. What is the difference between CSR, SSR, SSG, and ISR?
11. What is hydration in Next.js?
12. What happens during the hydration process?
13. What is the difference between Next.js and Create React App?
14. What is the difference between Next.js and Gatsby?
15. What is the difference between Next.js and Remix?
16. When should you use Next.js vs plain React?
17. What are the benefits of using Next.js?
18. What are the drawbacks of using Next.js?
19. What is the minimum React version required for Next.js 14?
20. How do you create a new Next.js project?
21. What is the `create-next-app` command?
22. What is the default folder structure of a Next.js project?
23. What is the `pages` directory?
24. What is the `app` directory?
25. What is the difference between the Pages Router and App Router?
26. Can you use both Pages Router and App Router in the same project?
27. What is the `public` directory used for?
28. What is the `next.config.js` file?
29. What is the `package.json` file in a Next.js project?
30. How do you run a Next.js development server?

---

### Pages Router (Legacy)

31. What is the Pages Router in Next.js?
32. How does file-based routing work in the Pages Router?
33. How do you create a route in the Pages Router?
34. What is the `pages/index.js` file?
35. How do you create a dynamic route in the Pages Router?
36. What is the syntax for dynamic routes? (e.g., `[id].js`)
37. How do you access route parameters in the Pages Router?
38. What is the `useRouter` hook?
39. What is `router.query`?
40. What is `router.pathname`?
41. What is `router.push()`?
42. What is `router.replace()`?
43. What is the difference between `push` and `replace`?
44. How do you create nested routes in the Pages Router?
45. How do you create a catch-all route?
46. What is the syntax for catch-all routes? (e.g., `[...slug].js`)
47. What is an optional catch-all route? (e.g., `[[...slug]].js`)
48. How do you create a 404 page in the Pages Router?
49. What is the `pages/404.js` file?
50. How do you create a custom error page?
51. What is the `pages/_error.js` file?
52. What is the `pages/_app.js` file?
53. What is the purpose of `_app.js`?
54. How do you add global CSS in `_app.js`?
55. What is the `pages/_document.js` file?
56. What is the difference between `_app.js` and `_document.js`?
57. When should you use `_document.js`?
58. How do you add custom `<head>` tags in the Pages Router?
59. What is the `next/head` component?
60. How do you set the page title in Next.js?

---

### App Router (Next.js 13+)

61. What is the App Router in Next.js?
62. When was the App Router introduced?
63. What are the benefits of the App Router over the Pages Router?
64. How does file-based routing work in the App Router?
65. What is the `app` directory?
66. What is a route segment in the App Router?
67. What is the `page.js` file?
68. What is the `layout.js` file?
69. What is the `loading.js` file?
70. What is the `error.js` file?
71. What is the `not-found.js` file?
72. What is the `route.js` file?
73. What is the difference between `page.js` and `layout.js`?
74. How do you create a route in the App Router?
75. How do you create nested routes in the App Router?
76. How do you create a dynamic route in the App Router?
77. What is the syntax for dynamic routes in the App Router? (e.g., `[id]`)
78. How do you access route parameters in the App Router?
79. What are the `params` prop?
80. What are the `searchParams` prop?
81. How do you create a catch-all route in the App Router?
82. What is the syntax for catch-all routes? (e.g., `[...slug]`)
83. How do you create parallel routes?
84. What is the `@folder` syntax for parallel routes?
85. How do you create intercepting routes?
86. What is the `(..)folder` syntax for intercepting routes?
87. What are route groups?
88. What is the `(folder)` syntax for route groups?
89. How do you create a private folder in the App Router?
90. What is the `_folder` naming convention?

---

### Layouts and Templates

91. What is a layout in Next.js?
92. What is the root layout?
93. Is the root layout required?
94. What must the root layout include?
95. How do you create nested layouts?
96. Do layouts preserve state across navigation?
97. What is the `children` prop in layouts?
98. How do you create a shared layout for multiple pages?
99. What is a template in Next.js?
100. What is the `template.js` file?
101. What is the difference between layout and template?
102. When should you use a template instead of a layout?
103. Do templates preserve state across navigation?
104. How do you create a loading UI?
105. What is the `loading.js` file?
106. How does `loading.js` work with Suspense?
107. What is instant loading state?
108. How do you create a custom error UI?
109. What is the `error.js` file?
110. What props does the error component receive?
111. What is the `reset` function in error boundaries?
112. How do you create a global error handler?
113. What is the `global-error.js` file?
114. How do you create a custom 404 page in the App Router?
115. What is the `not-found.js` file?
116. What is the `notFound()` function?
117. How do you programmatically trigger a 404?
118. What is the `default.js` file?
119. When do you need a `default.js` file?
120. What is the order of precedence for special files?

---

### Server Components vs Client Components

121. What are React Server Components?
122. What are Client Components?
123. What is the difference between Server Components and Client Components?
124. What is the default component type in the App Router?
125. How do you create a Client Component?
126. What is the `'use client'` directive?
127. Where should you place the `'use client'` directive?
128. What is the `'use server'` directive?
129. What are the benefits of Server Components?
130. What are the limitations of Server Components?
131. Can you use hooks in Server Components?
132. Can you use `useState` in Server Components?
133. Can you use `useEffect` in Server Components?
134. Can you use event handlers in Server Components?
135. What can you do in Server Components that you can't do in Client Components?
136. Can you access the database directly in Server Components?
137. Can you use environment variables in Server Components?
138. What is the difference between server-side environment variables and client-side environment variables?
139. How do you pass data from Server Components to Client Components?
140. Can you import a Server Component inside a Client Component?
141. Can you import a Client Component inside a Server Component?
142. What is the composition pattern for mixing Server and Client Components?
143. How do you pass Server Components as children to Client Components?
144. What happens when you import a Server Component in a Client Component?
145. What is the boundary between Server and Client Components?
146. How do you decide when to use Server vs Client Components?
147. What are the performance implications of Client Components?
148. What is the bundle size impact of Client Components?
149. Can you use third-party libraries in Server Components?
150. What libraries require the `'use client'` directive?

---

### Data Fetching in Next.js

151. What are the different ways to fetch data in Next.js?
152. What is the difference between data fetching in Pages Router and App Router?
153. What is `getStaticProps`?
154. When does `getStaticProps` run?
155. What is the return value of `getStaticProps`?
156. What is the `revalidate` option in `getStaticProps`?
157. What is `getServerSideProps`?
158. When does `getServerSideProps` run?
159. What is the difference between `getStaticProps` and `getServerSideProps`?
160. What is `getStaticPaths`?
161. When do you need `getStaticPaths`?
162. What is the `fallback` option in `getStaticPaths`?
163. What is the difference between `fallback: false`, `fallback: true`, and `fallback: 'blocking'`?
164. What is `getInitialProps`?
165. Should you use `getInitialProps` in new projects?
166. How do you fetch data in the App Router?
167. Can you use `async/await` directly in Server Components?
168. How do you fetch data in Server Components?
169. 
```jsx
async function Page() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  return <div>{json.title}</div>;
}
```
Is this valid in the App Router?
170. What is the `fetch` API in Next.js?
171. How is Next.js `fetch` different from native `fetch`?
172. What is request memoization in Next.js?
173. What is data caching in Next.js?
174. What are the caching options for `fetch`?
175. What is `cache: 'force-cache'`?
176. What is `cache: 'no-store'`?
177. What is the `next.revalidate` option?
178. What is the difference between `revalidate` and `cache`?
179. How do you opt out of caching?
180. What is the `revalidatePath` function?
181. What is the `revalidateTag` function?
182. How do you use cache tags?
183. What is on-demand revalidation?
184. How do you fetch data in Client Components?
185. Can you use `useEffect` for data fetching in the App Router?
186. Should you use React Query with Next.js App Router?
187. What is the recommended way to fetch data in Client Components?
188. What is streaming in Next.js?
189. How do you implement streaming?
190. What is the `Suspense` component?

---

### Rendering Strategies

191. What is Client-Side Rendering (CSR)?
192. What is Server-Side Rendering (SSR)?
193. What is Static Site Generation (SSG)?
194. What is Incremental Static Regeneration (ISR)?
195. What is the difference between SSR and SSG?
196. When should you use SSR?
197. When should you use SSG?
198. When should you use ISR?
199. What is the benefit of SSG over SSR?
200. What is the benefit of SSR over SSG?
201. What is the `revalidate` option in ISR?
202. How does ISR work?
203. What happens when you visit a page during revalidation?
204. What is stale-while-revalidate?
205. What is on-demand ISR?
206. How do you trigger on-demand revalidation?
207. What is Partial Prerendering (PPR)?
208. What is the difference between PPR and ISR?
209. What is Static Rendering in the App Router?
210. What is Dynamic Rendering in the App Router?
211. How does Next.js decide between Static and Dynamic Rendering?
212. What makes a route dynamic?
213. What are dynamic functions?
214. What is `cookies()`?
215. What is `headers()`?
216. What is `searchParams`?
217. How do you force dynamic rendering?
218. How do you force static rendering?
219. What is the `dynamic` route segment config?
220. What are the values for `dynamic`? ('auto', 'force-dynamic', 'force-static', 'error')

---

### Routing and Navigation

221. What is the `Link` component in Next.js?
222. How is `Link` different from an `<a>` tag?
223. What is client-side navigation?
224. How does Next.js prefetch pages?
225. What is the `prefetch` prop on `Link`?
226. When does prefetching happen?
227. How do you disable prefetching?
228. What is the `useRouter` hook in the App Router?
229. How do you navigate programmatically in the App Router?
230. What is `router.push()`?
231. What is `router.replace()`?
232. What is `router.refresh()`?
233. What is `router.back()`?
234. What is `router.forward()`?
235. What is the `usePathname` hook?
236. What is the `useSearchParams` hook?
237. What is the `useParams` hook?
238. How do you access query parameters in the App Router?
239. How do you update query parameters without navigation?
240. What is shallow routing?
241. Does shallow routing exist in the App Router?
242. How do you scroll to top after navigation?
243. What is the `scroll` option in `router.push()`?
244. How do you preserve scroll position?
245. What is route prefetching?
246. What is the difference between automatic and manual prefetching?
247. How do you manually prefetch a route?
248. What is the `router.prefetch()` method?
249. How do you handle navigation loading states?
250. What is the `useSelectedLayoutSegment` hook?

---

### API Routes

251. What are API Routes in Next.js?
252. How do you create an API route?
253. What is the `pages/api` directory?
254. What is the structure of an API route handler?
255. 
```js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello' });
}
```
Explain this API route.
256. What is the `req` object in API routes?
257. What is the `res` object in API routes?
258. How do you handle different HTTP methods in API routes?
259. How do you access query parameters in API routes?
260. How do you access request body in API routes?
261. How do you set response status codes?
262. How do you send JSON responses?
263. How do you create dynamic API routes?
264. What is the syntax for dynamic API routes?
265. How do you access dynamic parameters in API routes?
266. What are Route Handlers in the App Router?
267. What is the `route.js` file?
268. How do you create a Route Handler?
269. 
```js
export async function GET(request) {
  return Response.json({ message: 'Hello' });
}
```
Explain this Route Handler.
270. What HTTP methods can you export from Route Handlers?
271. What is the difference between API Routes and Route Handlers?
272. How do you access request data in Route Handlers?
273. What is the `request` object in Route Handlers?
274. How do you access query parameters in Route Handlers?
275. How do you access request body in Route Handlers?
276. How do you set response headers in Route Handlers?
277. How do you set cookies in Route Handlers?
278. How do you handle CORS in API routes?
279. How do you implement authentication in API routes?
280. Can you use middleware with API routes?

---

### Middleware

281. What is Middleware in Next.js?
282. What is the `middleware.js` file?
283. Where should you place the middleware file?
284. What is the structure of a middleware function?
285. 
```js
export function middleware(request) {
  return NextResponse.next();
}
```
Explain this middleware.
286. What is `NextResponse`?
287. What is `NextResponse.next()`?
288. What is `NextResponse.redirect()`?
289. What is `NextResponse.rewrite()`?
290. What is the difference between redirect and rewrite?
291. How do you access request data in middleware?
292. How do you access cookies in middleware?
293. How do you set cookies in middleware?
294. How do you access headers in middleware?
295. How do you set headers in middleware?
296. What is the `matcher` config in middleware?
297. How do you specify which routes middleware should run on?
298. 
```js
export const config = {
  matcher: '/dashboard/:path*',
};
```
What does this matcher do?
299. Can you use multiple matchers?
300. How do you exclude routes from middleware?
301. What are the limitations of middleware?
302. Can you use Node.js APIs in middleware?
303. What runtime does middleware use?
304. What is the Edge Runtime?
305. What is the difference between Edge Runtime and Node.js Runtime?
306. Can you access the database in middleware?
307. How do you implement authentication in middleware?
308. How do you implement rate limiting in middleware?
309. How do you implement redirects in middleware?
310. How do you implement A/B testing with middleware?

---

### Image Optimization

311. What is the `next/image` component?
312. Why should you use `next/image` instead of `<img>`?
313. What are the benefits of using `next/image`?
314. How does Next.js optimize images?
315. What is automatic image optimization?
316. What image formats does Next.js support?
317. What is the `src` prop in `next/image`?
318. What is the `alt` prop and why is it required?
319. What is the `width` prop?
320. What is the `height` prop?
321. What is the `fill` prop?
322. When should you use `fill` instead of `width` and `height`?
323. What is the `sizes` prop?
324. What is the `quality` prop?
325. What is the default image quality?
326. What is the `priority` prop?
327. When should you use `priority`?
328. What is the `loading` prop?
329. What is lazy loading?
330. What is the `placeholder` prop?
331. What is the `blurDataURL` prop?
332. How do you create blur placeholders?
333. What is the `loader` prop?
334. How do you use a custom image loader?
335. What is the `unoptimized` prop?
336. When would you use `unoptimized`?
337. What is the `onLoad` callback?
338. What is the `onError` callback?
339. How do you style `next/image`?
340. What is the `className` prop?
341. What is the `style` prop?
342. What is the difference between `layout="fill"` (old) and `fill` prop (new)?
343. What are the image configuration options in `next.config.js`?
344. What is the `images.domains` config?
345. What is the `images.remotePatterns` config?
346. What is the difference between `domains` and `remotePatterns`?
347. What is the `images.formats` config?
348. What is the `images.deviceSizes` config?
349. What is the `images.imageSizes` config?
350. How do you serve images from external URLs?

---

### Font Optimization

351. What is `next/font`?
352. What are the benefits of using `next/font`?
353. How does Next.js optimize fonts?
354. What is the `next/font/google` module?
355. How do you use Google Fonts in Next.js?
356. 
```js
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```
Explain this code.
357. How do you apply a font to your app?
358. What is the `className` property of a font?
359. What is the `style` property of a font?
360. What is the `variable` option?
361. How do you use CSS variables with fonts?
362. What is the `next/font/local` module?
363. How do you use local fonts?
364. What is the `src` option for local fonts?
365. What is the `weight` option?
366. What is the `style` option?
367. What is the `subsets` option?
368. What is the `display` option?
369. What are the values for `display`? ('auto', 'block', 'swap', 'fallback', 'optional')
370. What is the `preload` option?
371. What is the `fallback` option?
372. What is the `adjustFontFallback` option?
373. How do you use multiple fonts?
374. How do you use variable fonts?
375. What is font subsetting?
376. How does Next.js prevent layout shift with fonts?
377. What is FOUT (Flash of Unstyled Text)?
378. What is FOIT (Flash of Invisible Text)?
379. How does `next/font` prevent FOUT and FOIT?
380. What is self-hosting fonts?

---

### Metadata and SEO

381. What is metadata in Next.js?
382. How do you set metadata in the Pages Router?
383. How do you set metadata in the App Router?
384. What is the `metadata` export?
385. 
```js
export const metadata = {
  title: 'My Page',
  description: 'Page description',
};
```
Where can you use this?
386. What is static metadata?
387. What is dynamic metadata?
388. What is the `generateMetadata` function?
389. 
```js
export async function generateMetadata({ params }) {
  return {
    title: `Post ${params.id}`,
  };
}
```
Explain this function.
390. What metadata fields can you set?
391. What is the `title` field?
392. What is the `description` field?
393. What is the `keywords` field?
394. What is the `openGraph` field?
395. What is Open Graph metadata?
396. How do you set Open Graph images?
397. What is the `twitter` field?
398. What is Twitter Card metadata?
399. What is the `robots` field?
400. What is the `viewport` field?
401. What is the `icons` field?
402. How do you set a favicon?
403. What is the `manifest` field?
404. What is a web app manifest?
405. What is the `metadataBase` config?
406. How do you set canonical URLs?
407. What is the `alternates` field?
408. How do you set language alternates?
409. What is the `verification` field?
410. How do you verify your site with Google?
411. What is the `generator` field?
412. What is the `applicationName` field?
413. What is the `authors` field?
414. What is the `creator` field?
415. What is the `publisher` field?
416. What is the `formatDetection` field?
417. How do you generate dynamic sitemaps?
418. What is the `sitemap.xml` route?
419. How do you generate dynamic robots.txt?
420. What is the `robots.txt` route?

---

### Styling in Next.js

421. What are the different ways to style Next.js applications?
422. What is CSS Modules in Next.js?
423. How do you use CSS Modules?
424. What is the naming convention for CSS Module files?
425. How do you import CSS Modules?
426. What is global CSS in Next.js?
427. Where should you import global CSS?
428. Can you import global CSS in components?
429. What is Tailwind CSS?
430. How do you set up Tailwind CSS in Next.js?
431. What is the `tailwind.config.js` file?
432. What is the `postcss.config.js` file?
433. What is CSS-in-JS?
434. What CSS-in-JS libraries work with Next.js?
435. What is styled-components?
436. How do you use styled-components with Next.js?
437. What is the styled-components compiler?
438. What is Emotion?
439. What is Sass/SCSS in Next.js?
440. How do you use Sass in Next.js?
441. Do you need to configure Sass?
442. What is the `next/font` integration with Tailwind?
443. How do you implement dark mode in Next.js?
444. What is the `next-themes` library?
445. How do you use CSS variables?
446. What is the `style` prop in Next.js?
447. What are inline styles?
448. Should you use inline styles?
449. How do you conditionally apply classes?
450. What is the `clsx` library?

---

### Environment Variables

451. What are environment variables in Next.js?
452. How do you define environment variables?
453. What is the `.env` file?
454. What is the `.env.local` file?
455. What is the `.env.development` file?
456. What is the `.env.production` file?
457. What is the order of precedence for env files?
458. How do you access environment variables?
459. What is `process.env.VARIABLE_NAME`?
460. What is the `NEXT_PUBLIC_` prefix?
461. When should you use `NEXT_PUBLIC_`?
462. What is the difference between server-side and client-side environment variables?
463. Can you access server-side environment variables in Client Components?
464. Can you access client-side environment variables in Server Components?
465. How do you expose environment variables to the browser?
466. Should you commit `.env.local` to Git?
467. What should you add to `.gitignore`?
468. How do you use environment variables in `next.config.js`?
469. What is the `env` config option?
470. How do you validate environment variables?
471. What is the `@t3-oss/env-nextjs` library?
472. How do you use different env variables for different environments?
473. How do you set environment variables in Vercel?
474. How do you set environment variables in production?
475. What is the `.env.example` file?
476. How do you handle secrets in Next.js?
477. Should you store API keys in environment variables?
478. What is the difference between build-time and runtime environment variables?
479. Can you change environment variables at runtime?
480. How do you debug environment variable issues?

---

### Performance Optimization

481. How do you optimize performance in Next.js?
482. What is code splitting in Next.js?
483. Does Next.js do automatic code splitting?
484. What is route-based code splitting?
485. What is dynamic imports in Next.js?
486. How do you use `next/dynamic`?
487. 
```js
const DynamicComponent = dynamic(() => import('./Component'));
```
What does this do?
488. What is the `ssr` option in `dynamic()`?
489. What is the `loading` option in `dynamic()`?
490. When should you use dynamic imports?
491. What is bundle analysis?
492. What is the `@next/bundle-analyzer` package?
493. How do you analyze your bundle size?
494. What is tree shaking?
495. Does Next.js support tree shaking?
496. What is the `sideEffects` field in `package.json`?
497. What is lazy loading?
498. How do you lazy load images?
499. How do you lazy load components?
500. What is the `loading` prop in `next/image`?
501. What is prefetching?
502. How does Next.js prefetch pages?
503. What is the `prefetch` prop on `Link`?
504. What is the Intersection Observer API?
505. How do you optimize fonts?
506. What is font subsetting?
507. How do you optimize third-party scripts?
508. What is the `next/script` component?
509. What is the `strategy` prop in `next/script`?
510. What are the script loading strategies? ('beforeInteractive', 'afterInteractive', 'lazyOnload')
511. What is the `onLoad` callback in `next/script`?
512. How do you optimize CSS?
513. Does Next.js minify CSS?
514. What is critical CSS?
515. How do you inline critical CSS?
516. What is the `optimizeFonts` config?
517. What is the `swcMinify` config?
518. What is SWC?
519. What is the difference between Babel and SWC?
520. What is the `compiler` config in `next.config.js`?

---

### Caching in Next.js

521. What is caching in Next.js?
522. What are the different types of caching in Next.js?
523. What is Request Memoization?
524. How does Request Memoization work?
525. What is Data Cache?
526. How does Data Cache work?
527. What is Full Route Cache?
528. What is Router Cache?
529. What is the difference between Data Cache and Full Route Cache?
530. How long does the Router Cache last?
531. What is the `cache` option in `fetch()`?
532. What is `cache: 'force-cache'`?
533. What is `cache: 'no-store'`?
534. What is the `next.revalidate` option?
535. How do you revalidate cached data?
536. What is time-based revalidation?
537. What is on-demand revalidation?
538. What is the `revalidatePath` function?
539. What is the `revalidateTag` function?
540. How do you use cache tags?
541. 
```js
fetch('https://api.example.com', {
  next: { tags: ['posts'] }
});
```
What does this do?
542. How do you invalidate cache by tag?
543. What is the `unstable_cache` function?
544. How do you cache function results?
545. What is the `unstable_noStore` function?
546. How do you opt out of caching?
547. What is the difference between `cache: 'no-store'` and `revalidate: 0`?
548. How do you clear the cache?
549. What is the `.next/cache` directory?
550. How do you disable caching in development?

---

### Server Actions

551. What are Server Actions?
552. What is the `'use server'` directive?
553. Where can you use Server Actions?
554. How do you create a Server Action?
555. 
```js
async function createPost(formData) {
  'use server';
  // server-side logic
}
```
Is this valid?
556. How do you call a Server Action from a Client Component?
557. How do you use Server Actions with forms?
558. What is the `action` prop in forms?
559. How do you access form data in Server Actions?
560. What is the `FormData` API?
561. How do you handle form submission with Server Actions?
562. How do you show loading states with Server Actions?
563. What is the `useFormStatus` hook?
564. What is the `useFormState` hook?
565. How do you handle errors in Server Actions?
566. How do you return data from Server Actions?
567. Can you return JSX from Server Actions?
568. What is the `redirect()` function?
569. How do you redirect after a Server Action?
570. What is the `revalidatePath()` function?
571. How do you revalidate data after a Server Action?
572. Can you call Server Actions from event handlers?
573. How do you pass arguments to Server Actions?
574. What is the `.bind()` method for Server Actions?
575. How do you create reusable Server Actions?
576. Where should you define Server Actions?
577. Can you export Server Actions?
578. What is the `'use server'` file directive?
579. How do you create a file with only Server Actions?
580. What are the security implications of Server Actions?
581. How do you validate input in Server Actions?
582. Should you trust client-side data in Server Actions?
583. How do you handle authentication in Server Actions?
584. What is the size limit for Server Actions?
585. Can you use Server Actions with API Routes?
586. What is the difference between Server Actions and API Routes?
587. When should you use Server Actions vs API Routes?
588. What is progressive enhancement with Server Actions?
589. How do you make forms work without JavaScript?
590. What is the `useOptimistic` hook?

---

### Authentication in Next.js

591. How do you implement authentication in Next.js?
592. What are the different authentication strategies?
593. What is session-based authentication?
594. What is token-based authentication?
595. What is JWT authentication?
596. How do you store authentication tokens?
597. Should you use localStorage for tokens?
598. What are httpOnly cookies?
599. How do you set httpOnly cookies in Next.js?
600. What is NextAuth.js?
601. What is Auth.js?
602. What is the difference between NextAuth.js and Auth.js?
603. How do you set up NextAuth.js?
604. What is the `[...nextauth].js` file?
605. What are providers in NextAuth.js?
606. What is the credentials provider?
607. What is the Google provider?
608. What is the GitHub provider?
609. How do you configure OAuth providers?
610. What is the `session` callback?
611. What is the `jwt` callback?
612. How do you access session data?
613. What is the `useSession` hook?
614. What is the `getSession` function?
615. What is the `getServerSession` function?
616. How do you protect pages with authentication?
617. How do you implement protected routes?
618. How do you redirect unauthenticated users?
619. How do you implement role-based access control?
620. What is middleware authentication?
621. How do you check authentication in middleware?
622. What is the `signIn` function?
623. What is the `signOut` function?
624. How do you implement custom login pages?
625. How do you handle authentication errors?
626. What is the `pages` option in NextAuth?
627. How do you customize the sign-in page?
628. What is database session storage?
629. What is JWT session storage?
630. What is the difference between database and JWT sessions?

---

### Database Integration

631. How do you connect to a database in Next.js?
632. What databases can you use with Next.js?
633. What is Prisma?
634. How do you set up Prisma with Next.js?
635. What is the `prisma/schema.prisma` file?
636. How do you run Prisma migrations?
637. How do you use Prisma Client in Next.js?
638. Where should you instantiate Prisma Client?
639. What is the Prisma Client singleton pattern?
640. What is connection pooling?
641. Why is connection pooling important in serverless?
642. What is the connection limit issue in serverless?
643. How do you handle database connections in Server Components?
644. Can you query the database in Server Components?
645. Should you query the database in Client Components?
646. What is Drizzle ORM?
647. What is the difference between Prisma and Drizzle?
648. What is Supabase?
649. How do you use Supabase with Next.js?
650. What is PlanetScale?
651. What is Neon?
652. What is Vercel Postgres?
653. How do you use Vercel Postgres?
654. What is the `@vercel/postgres` package?
655. What is MongoDB with Next.js?
656. How do you use Mongoose with Next.js?
657. What is Firebase with Next.js?
658. What is the Firebase Admin SDK?
659. How do you use Firebase in Server Components?
660. What is the difference between Firebase Client SDK and Admin SDK?

---

### Testing Next.js Applications

661. How do you test Next.js applications?
662. What testing frameworks work with Next.js?
663. What is Jest?
664. How do you set up Jest with Next.js?
665. What is the `jest.config.js` file?
666. What is `next/jest`?
667. How do you configure Jest for Next.js?
668. What is React Testing Library?
669. How do you test components in Next.js?
670. How do you test Server Components?
671. How do you test Client Components?
672. How do you test API Routes?
673. How do you test Route Handlers?
674. How do you mock `fetch` in tests?
675. What is MSW (Mock Service Worker)?
676. How do you use MSW with Next.js?
677. What is Playwright?
678. How do you set up Playwright with Next.js?
679. What is end-to-end testing?
680. How do you write E2E tests for Next.js?
681. What is Cypress?
682. How do you use Cypress with Next.js?
683. How do you test authentication flows?
684. How do you test protected routes?
685. How do you test forms?
686. How do you test Server Actions?
687. How do you test middleware?
688. What is snapshot testing?
689. Should you use snapshot testing in Next.js?
690. How do you test image optimization?

---

### Deployment

691. How do you deploy a Next.js application?
692. What is Vercel?
693. How do you deploy to Vercel?
694. What is the Vercel CLI?
695. How do you connect a Git repository to Vercel?
696. What is automatic deployment?
697. What are preview deployments?
698. What is production deployment?
699. How do you set environment variables in Vercel?
700. What is the Vercel dashboard?
701. How do you deploy to Netlify?
702. How do you deploy to AWS?
703. What is AWS Amplify?
704. How do you deploy to AWS Amplify?
705. How do you deploy to a VPS?
706. What is the `next build` command?
707. What is the `next start` command?
708. What is the `.next` directory?
709. What is the `out` directory?
710. What is static export?
711. How do you export a Next.js app as static HTML?
712. What is the `output: 'export'` config?
713. What features are not supported with static export?
714. Can you use Server Components with static export?
715. Can you use API Routes with static export?
716. How do you deploy to GitHub Pages?
717. What is the `basePath` config?
718. What is the `assetPrefix` config?
719. How do you deploy to a subdirectory?
720. What is Docker?
721. How do you containerize a Next.js app?
722. What is a Dockerfile for Next.js?
723. 
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```
Explain this Dockerfile.
724. What is the `standalone` output mode?
725. What is the `output: 'standalone'` config?
726. How do you optimize Docker images for Next.js?
727. What is multi-stage Docker builds?
728. How do you deploy with Docker Compose?
729. What is Kubernetes?
730. How do you deploy Next.js to Kubernetes?

---

### Configuration

731. What is `next.config.js`?
732. What is the structure of `next.config.js`?
733. What is the `reactStrictMode` config?
734. Should you enable `reactStrictMode`?
735. What is the `images` config?
736. What is the `env` config?
737. What is the `basePath` config?
738. What is the `assetPrefix` config?
739. What is the `trailingSlash` config?
740. What is the `pageExtensions` config?
741. What is the `poweredByHeader` config?
742. What is the `compress` config?
743. What is the `generateEtags` config?
744. What is the `distDir` config?
745. What is the `output` config?
746. What are the output modes? ('standalone', 'export')
747. What is the `typescript` config?
748. What is the `eslint` config?
749. What is the `compiler` config?
750. What is the `experimental` config?
751. What experimental features are available?
752. What is the `serverActions` experimental config?
753. What is the `serverComponentsExternalPackages` config?
754. What is the `redirects` config?
755. How do you configure redirects?
756. 
```js
async redirects() {
  return [
    {
      source: '/old-path',
      destination: '/new-path',
      permanent: true,
    },
  ];
}
```
Explain this redirect configuration.
757. What is the `rewrites` config?
758. What is the difference between redirects and rewrites?
759. How do you configure rewrites?
760. What is the `headers` config?
761. How do you set custom headers?
762. What is the `webpack` config?
763. How do you customize webpack configuration?
764. Should you customize webpack?
765. What is the `turbo` config?
766. What is Turbopack?
767. How do you enable Turbopack?
768. What is the difference between webpack and Turbopack?
769. What is the `modularizeImports` config?
770. What is the `transpilePackages` config?

---

### Internationalization (i18n)

771. What is internationalization (i18n)?
772. Does Next.js support i18n?
773. What is the `i18n` config in `next.config.js`?
774. What is the `locales` option?
775. What is the `defaultLocale` option?
776. What is the `domains` option for i18n?
777. How do you detect user locale?
778. What is locale detection?
779. How do you access the current locale?
780. What is `router.locale`?
781. How do you switch between locales?
782. How do you create locale-specific routes?
783. What is the locale prefix in URLs?
784. What is sub-path routing?
785. What is domain routing?
786. How do you translate content?
787. What is the `next-i18next` library?
788. How do you set up `next-i18next`?
789. What is the `next-intl` library?
790. What is the difference between `next-i18next` and `next-intl`?
791. How do you handle translations in Server Components?
792. How do you handle translations in Client Components?
793. What is the `useTranslation` hook?
794. How do you organize translation files?
795. What is the JSON format for translations?
796. How do you handle pluralization?
797. How do you handle date and number formatting?
798. What is the `Intl` API?
799. How do you set the HTML lang attribute?
800. How do you handle RTL (right-to-left) languages?

---

### Advanced Patterns

801. What is Partial Prerendering (PPR)?
802. How does PPR work?
803. What is the benefit of PPR?
804. How do you enable PPR?
805. What is Streaming SSR?
806. How do you implement streaming?
807. What is the `Suspense` component?
808. How do you use `Suspense` in the App Router?
809. What is selective hydration?
810. What is progressive hydration?
811. What is islands architecture?
812. Does Next.js use islands architecture?
813. What is the difference between islands and Server Components?
814. What is edge rendering?
815. What is the Edge Runtime?
816. What is the Node.js Runtime?
817. What is the difference between Edge and Node.js Runtime?
818. How do you specify the runtime?
819. What is the `runtime` route segment config?
820. What are the values for `runtime`? ('nodejs', 'edge')
821. What are the limitations of Edge Runtime?
822. Can you use Node.js APIs in Edge Runtime?
823. What is edge middleware?
824. What is edge API routes?
825. What is the `@vercel/og` library?
826. How do you generate Open Graph images dynamically?
827. What is the `ImageResponse` API?
828. How do you create dynamic OG images?
829. What is parallel routes?
830. How do you implement parallel routes?
831. What is the `@folder` convention?
832. What is the `default.js` file for parallel routes?
833. What are intercepting routes?
834. How do you implement intercepting routes?
835. What is the `(..)` convention?
836. When would you use intercepting routes?
837. What is the modal pattern with intercepting routes?
838. How do you implement a photo gallery with intercepting routes?
839. What are route groups?
840. How do you create route groups?
841. What is the `(folder)` convention?
842. What are the use cases for route groups?
843. How do you organize routes with route groups?
844. Can route groups affect the URL?
845. How do you create multiple root layouts?
846. What is the `loading.js` file?
847. How does `loading.js` work with Suspense?
848. What is instant loading state?
849. How do you create skeleton UIs?
850. What is optimistic UI?

---

### Error Handling

851. How do you handle errors in Next.js?
852. What is the `error.js` file?
853. How does error boundary work in the App Router?
854. What props does the error component receive?
855. What is the `error` prop?
856. What is the `reset` prop?
857. How do you recover from errors?
858. What is the `global-error.js` file?
859. When do you need `global-error.js`?
860. What is the difference between `error.js` and `global-error.js`?
861. How do you handle errors in Server Components?
862. How do you handle errors in Client Components?
863. How do you handle errors in API Routes?
864. How do you handle errors in Server Actions?
865. What is the `notFound()` function?
866. When should you use `notFound()`?
867. What is the `not-found.js` file?
868. How do you create custom 404 pages?
869. What is error logging?
870. How do you log errors in production?
871. What is Sentry?
872. How do you integrate Sentry with Next.js?
873. What is error monitoring?
874. How do you track errors in production?
875. What is the `onError` callback in `next.config.js`?
876. How do you handle API errors?
877. How do you show error messages to users?
878. What is graceful error handling?
879. How do you prevent error boundaries from catching all errors?
880. What errors are not caught by error boundaries?

---

### Security

881. What are common security concerns in Next.js?
882. What is XSS (Cross-Site Scripting)?
883. How does Next.js prevent XSS?
884. What is CSRF (Cross-Site Request Forgery)?
885. How do you prevent CSRF in Next.js?
886. What is the SameSite cookie attribute?
887. What is Content Security Policy (CSP)?
888. How do you implement CSP in Next.js?
889. How do you set security headers?
890. What is the `headers` config in `next.config.js`?
891. What is the `X-Frame-Options` header?
892. What is the `X-Content-Type-Options` header?
893. What is the `Strict-Transport-Security` header?
894. What is HTTPS?
895. Should you enforce HTTPS?
896. How do you handle secrets in Next.js?
897. Should you commit secrets to Git?
898. What is the `.env.local` file for?
899. How do you validate user input?
900. Should you trust client-side data?
901. How do you sanitize user input?
902. What is SQL injection?
903. How do you prevent SQL injection?
904. What is the principle of least privilege?
905. How do you implement rate limiting?
906. What is the `@upstash/ratelimit` library?
907. How do you implement rate limiting in middleware?
908. What is authentication vs authorization?
909. How do you implement authorization?
910. What is role-based access control (RBAC)?

---

### Monitoring and Analytics

911. How do you monitor Next.js applications?
912. What is Web Vitals?
913. What are Core Web Vitals?
914. What is LCP (Largest Contentful Paint)?
915. What is FID (First Input Delay)?
916. What is CLS (Cumulative Layout Shift)?
917. How do you measure Web Vitals in Next.js?
918. What is the `reportWebVitals` function?
919. How do you send Web Vitals to analytics?
920. What is Vercel Analytics?
921. How do you set up Vercel Analytics?
922. What is the `@vercel/analytics` package?
923. What is Google Analytics?
924. How do you integrate Google Analytics with Next.js?
925. What is the `next/script` component for analytics?
926. Where should you load analytics scripts?
927. What is the `strategy` prop for scripts?
928. What is error tracking?
929. What is performance monitoring?
930. What is real user monitoring (RUM)?
931. What is synthetic monitoring?
932. How do you track page views?
933. How do you track custom events?
934. What is A/B testing?
935. How do you implement A/B testing in Next.js?
936. What is feature flags?
937. How do you implement feature flags?
938. What is the Vercel Toolbar?
939. What is the Next.js Speed Insights?
940. How do you debug performance issues?

---

### Best Practices

941. What are Next.js best practices?
942. Should you use the App Router or Pages Router?
943. When should you use Server Components?
944. When should you use Client Components?
945. How do you minimize client-side JavaScript?
946. What is the "use client" boundary?
947. How do you optimize the "use client" boundary?
948. Should you fetch data in Server Components or Client Components?
949. What is the recommended data fetching pattern?
950. Should you use `useEffect` for data fetching?
951. How do you handle loading states?
952. How do you handle error states?
953. What is the loading.js pattern?
954. What is the error.js pattern?
955. How do you organize your project structure?
956. What is the recommended folder structure?
957. Should you use `src` directory?
958. How do you organize components?
959. How do you organize utilities?
960. How do you organize types?
961. What is code colocation?
962. Should you colocate components with routes?
963. How do you name files and folders?
964. What is the naming convention for components?
965. Should you use default exports or named exports?
966. How do you handle constants?
967. How do you handle configuration?
968. What is the single responsibility principle?
969. How do you make components reusable?
970. What is composition over inheritance?
971. How do you avoid prop drilling?
972. When should you use Context?
973. When should you use state management libraries?
974. What is the recommended state management approach?
975. How do you handle forms?
976. Should you use form libraries?
977. What is the recommended form library?
978. How do you validate forms?
979. How do you handle file uploads?
980. What is the recommended approach for authentication?
981. How do you structure database queries?
982. Should you use an ORM?
983. What is the recommended ORM?
984. How do you handle database migrations?
985. How do you handle API versioning?
986. How do you document your API?
987. Should you use TypeScript?
988. What are the benefits of TypeScript with Next.js?
989. How do you type Server Components?
990. How do you type Client Components?
991. How do you type Server Actions?
992. What is the recommended testing strategy?
993. What should you test?
994. How much test coverage should you aim for?
995. How do you handle accessibility?
996. What is semantic HTML?
997. How do you test accessibility?
998. What is the recommended deployment platform?
999. How do you optimize for production?
1000. What is the deployment checklist?
