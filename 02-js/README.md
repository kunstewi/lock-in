### Javascript Fundamentals

- [ ] 1. Explain the full process of how js gets executed in the browser and explain the high level architecture of v8 engine.

- [ ] 2. What can in-browser javascript do (5 points)

- [ ] 3. Explain what are AJAX and COMET and how do they work ?

- [ ] 4. What are cookies ? how do they work ? What does it mean by get or set cookies ?

- [ ] 5. What is the local storage and how that works ?

- [ ] 6. What do you mean by "same origin policy" ?

- [ ] 7. What if a script tag in the html file has 
```js
alert(1)
```
inside that and also it has 
```html
<script src="index.js"></script>
```
which js will run ?

- [ ] 8. What is "use strict" and how that works ?

- [ ] 9. What are primitive and non primitive data types ? give names of primitives and non primitives data types in js.

- [ ] 10. When should we use capital letters for constant variables and when we shouldn't ?

- [ ] 11. How many basic data types in js, and what ?

- [ ] 12. What if we try to do any number operation with NaN what the result would be ?

- [ ] 13. What is the range of numbers 'number' data type can hold ?

- [ ] 14. How to represent BigInt numbers ?

- [ ] 15. How null in javascript different compared to other languages like java or cpp ?

- [ ] 16. What is the meaning of data type undefined ?

- [ ] 17. Difference between primitive and non primitive values.

- [ ] 18. What symbol data type does ?

- [ ] 19. Difference between typeof(x) and typeof x syntax ?

20. 
```js
let name = "Ilya"; 
alert(`hello ${"name"}`);
```
what's the output ?

- [ ] 21. What is the prompt() function and what it does in js give one example and how is it different from alert(). what arguments the prompt() expects ?

- [ ] 22. What is the confirm() function and what it does in js give one example.

- [ ] 23. What do you mean by type conversion in js ? what type alert() converts to ?

- [ ] 24. How do we convert a value to a string in js ?

- [ ] 25. How do we convert a value to a number in js ?

- [ ] 26. What is the result of Number(null) and Number(undefined) ?

- [ ] 27. How can we do boolean type conversion in js and which value is considered true and which one false ?

- [ ] 28. "0" and "" true or false ?

- [ ] 29. What is an operand in js ?

- [ ] 30. What does it mean by an unary operator ?

- [ ] 31. What does it mean by a binary operator ?

- [ ] 32. Difference between negation operator and subtraction operator.

- [ ] 33. List all the math operation available in js ?

- [ ] 34. What if + binary operator is applied to strings ? what if only one is string and other is number ?

35. 
```js
alert('1' + 2 + 2);
```
what would be the result ?

36. 
```js
alert(2 + 2 + '1');
```
what would be the result ?

- [ ] 37. What is the difference between + and other operators in js ?

- [ ] 38. Difference between unary + and binary + ?

- [ ] 39. What the unary + does ?

40. 
```js
let apples = "2"; 
let oranges = "3"; 
alert(+apples + +oranges);
```
what would be the result ?

- [ ] 41. Organise them by their precedence from highest to lowest with their precedence number and also write all the operators which are present in them - Equality, Additive, Multiplicative, Exponentiation, Unary, Shift, Relational, Bitwise AND, Bitwise OR, Bitwise XOR, Logical AND, Logical OR, Assignment, Comma.

- [ ] 42. What if the precedence number is same for multiple operators in a same statement ?

- [ ] 43. What is associativity rule, what do we mean left to right associativity and right to left associativity explain which one are left to right and which one are right to left ? and what's the short trick to remember associativity rule for operators ?

- [ ] 44. Explain how assignment operators work ?

45. 
```js
let a = 1; 
let b = 2; 
let c = 3 - (a = b + 1);
```
what would be the result of a, b, c ?

- [ ] 46. What do you mean by assignment chaining give one example.

- [ ] 47. What's the associativity rule for chained assignments ?

- [ ] 48. What if we try to apply --, ++ operator on number instead of variables like 5++ or 4-- ?

- [ ] 49. What is the difference between ++, -- being placed at the beginning of a variable and at the end of the variable, like count++, ++count ?

50. 
```js
let counter = 1; 
let a = ++counter;

let counter2 = 1; 
let a2 = counter2++;
```
difference between these two.

- [ ] 51. What are bitwise operators ? List all the bitwise operators present in js and their function.

- [ ] 52. What is the comma operator and what it does ? give me one example where it's used ? why we shouldn't use it ?

53. 
```js
let a = 1, b = 1; 
let c = ++a; 
let d = b++;
```
final value of a,b,c,d ?

54. 
```js
let a = 2; 
let x = 1 + (a *= 2);
```
values of a and x ?

- [ ] 55.  
```js
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
" -9 " + 5
" -9 " - 5
null + 1
undefined + 1
"\t \n" - 2
```
give the result of each expression.

- [ ] 56.  
```js
let a = prompt("First number?", 1); 
let b = prompt("Second number?", 2); 
alert(a + b); // 12
```
why this code gives 12 and not 3 ? fix this. 

- [ ] 57. What are comparisons operator in js, list them all ?

- [ ] 58. What's the differnce between = and == in js ?

- [ ] 59. How string comparisons work, how js decides which string is bigger and which is small ?

- [ ] 60. Which is greater "a" or "A" in js ?

- [ ] 61. What if we compare string and number using comparison operators ?

- [ ] 62. What is the numerical value of true and false ?

- [ ] 63. What is the problem with == and === ?

- [ ] 64. What is the strict non equality operator and it's use ?

- [ ] 65. What if we compare null and zero using <, >, ==. What would be the result in each case ?

- [ ] 66. Why the value undefined shouldn't be compared to other values ?

- [ ] 67. What comparison operators return ?

- [ ] 68. Is null and undefined equal, if yes why so ?

- [ ] 69.  
```js
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
```
give result of each. 

- [ ] 70. What are logical operators in js ? How many, List them all.

- [ ] 71. Are the logical operators only applied to booleans ?

- [ ] 72. What do you mean by short circuit evaluation ? give example.

- [ ] 73. Whose precedence is higher || or && ?

- [ ] 74. How the ! operator work ?

- [ ] 75. When !! double not is used ?

- [ ] 76.  
```js
alert(alert(1) || 2 || alert(3));
```
explain result.

- [ ] 77.  
```js
alert(alert(1) && alert(2));
```
explain result.

- [ ] 78.  
```js
alert(null || 2 && 3 || 4);
```
explain result.

- [ ] 79. Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two variants: the first one using NOT !, the second one – without it.

- [ ] 80. Write the code which asks for a login with prompt following rules (Admin, TheMaster etc).

- [ ] 81. What is Nullish coalescing operator '??' and how that works ?

- [ ] 82. What is the result of a ?? b in words ?

- [ ] 83. Write this ?? operator using not equal and and operator.

- [ ] 84. What is the usecase of ?? ? 

- [ ] 85. What is the difference between || and ?? operator ?

- [ ] 86. What was the issue with || that ?? was introduced ?

- [ ] 87. What is the precedence of ?? operator ?

- [ ] 88. What do you need to keep in mind while using ?? with || or && ?

- [ ] 89. How can we skip parts of the for loop like the first let i = 0; the last one i++ and what if we also remove the condition itself ?

- [ ] 90. What break and continue keywords does in loop ?

- [ ] 91. What are labels for break/continue in loops ? Why do we need them ?

- [ ] 92.  
```js
let i = 0; 
while (++i < 5) alert(i);
```
what the output be ?

- [ ] 93.  
```js
let i = 0; 
while (i++ < 5) alert(i);
```
what the output be ?

- [ ] 94.  
```js
for (let i = 0; i < 5; i++) alert(i);
for (let i = 0; i < 5; ++i) alert(i);
```
would they give different result or same ?

- [ ] 95. Write code to output prime numbers from 2 to n.

96.
```js
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
``` 
rewrite using if else.

97. 
```js
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
```
rewrite this if loop using switch.

- [ ] 98. What if a function has an outer and inner same named variable, which variable will the function perform operations.

- [ ] 99. What do you mean by variable shadowing ?

- [ ] 100. So when we pass arguement into a function what actually the function does to get those parameters and what if we change the parameters inside the functions will it modify the original parameter or it's copy ?

- [ ] 101. Difference between Parameter and Arguement ?

- [ ] 102. What if a function is called but an arguement is not provided, what's the default value ?

- [ ] 103. How to pass default values to function parameters that triggers when no value is provided for that parameter ? 

- [ ] 104. What the default values could be in the function parameter ?

- [ ] 105. How to achieve the same functionality of default parameter value without providing default value to the paramters ? (2 ways)

- [ ] 106. Explain nullish coalescing character ?

- [ ] 107. How the return keyword works in the function when to use it and when to not ? How many times we can use the return keyword ?

- [ ] 108. What if you use return without a value, what happens to the function ?

- [ ] 109. What a function with empty return or withot it returns ?

110. 
```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```
rewrite this using ? or || 

- [ ] 111. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
```js
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```

- [ ] 112. What are function expressions and why do they have semicolons at the end and when normal function declaration hasn't.

- [ ] 113. What are callback functions ? Give example.

- [ ] 114. What is confirm() method ?

- [ ] 115. What are anonymous function and where are they used ?

- [ ] 116. Explain the differences between function declaration and function expression ?

- [ ] 117. Suppose we declare a function inside if, else or inside another function then we can't call the function from outside of the block, how to make the function declaration be available globally what approach can we take ?

- [ ] 118. When to choose function declaration vs function expression ?

- [ ] 119. Rewrite this using arrow function
```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

### Code Quality

- [ ] 120. What is JSDoc and how is it used ? Give an example.

- [ ] 121. What is Mocha and explain the steps how it works ? Can you explain how Mocha and Chai related and how do they work together ?

- [ ] 122. What is a specification or spec in testing ?

- [ ] 123. What are the 3 main buildling blocks of a spec ?

- [ ] 124. What the full developement flow looks like with spec and tests and implementation ?

- [ ] 125. What Sinon library does ? 

- [ ] 126. Explain describe, it and assert keyword in testing ?

- [ ] 127. How do we extend the spec ? 

- [ ] 128. What do you mean by polyfills in js ?

- [ ] 129. What do you mean by transpilers ? 

### Objects Basics

- [ ] 130. How many data types in js and what ?

- [ ] 131. What are primitive and non primitive data types ?

- [ ] 132. What do you mean by property in an object ?

- [ ] 133. What are the types of key and value in property of an object ?

- [ ] 134. What are the two syntax to create an empty object ?

- [ ] 135. What is an object literal ?

- [ ] 136. How can we access the property values of an object ? Adding, deleting, modifying and getting those values ?

- [ ] 137. Can we use multiword property names if yes then how ?

- [ ] 138. Should we add comma at the end of the last property ?

- [ ] 139. For multiword property names the dot notation doesn't work to access the property, what should we do ?

- [ ] 140. What is the difference between . notation and [] notation to access object properties and when to use which ?

- [ ] 141. What is the flexibility in using [] syntax compared to the dot one ?

- [ ] 142. make it work by using different notation.
```js
let user = {
  name: "John",
  age: 30
};

let key = "name";
alert( user.key ) // undefined
```

- [ ] 143. What do you mean by computed properties ? Give example.

- [ ] 144. Explain what do you mean by property value shorthand and when do we use them and how to use them ?

- [ ] 145. Can you explain why can we use reserverd keywords such as let, for, return, if as key names in an object ?

- [ ] 146. How to test whether a property exists in an object ?

- [ ] 147. What is the role of "in" operator ? What it does and how is it used ? State the syntax.

- [ ] 148. Why did we need the in keyword when we could check if a property is defined by trying to access it and see if it returns undefined ?

- [ ] 149. Explain for what for in loop is used. Give the syntax.

- [ ] 150. Are objects ordered ? How order is determined in objects ?

- [ ] 151. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

152. 
```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.

153. 
```js
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

- [ ] 154. What is the fundamental difference between objects and primitives in terms of storing and copying ?

- [ ] 155. How an object is stored in memory ?

- [ ] 156. What actually happens when an object variable is copied, what actually gets copied ?

- [ ] 157. When we consider two objects to be equal ?

- [ ] 158. How const objects can be modified ?

- [ ] 159. How do we create a duplicate of an object ? Give an example by duplicatin an object in a new empty object variable using for in loop.

- [ ] 160. Explain the syntax of Object.assign and how is it used to clone objects ? Give example.

- [ ] 161. What if a copied property name already exists while using Object.assign ? 

- [ ] 161. Can you explain how objects can be cloned using the ... spread syntax ? Give one example.

- [ ] 162. Explain the concept of nested cloning of and what it means ?

- [ ] 163. Explain the difference between shallow cloning and deep cloning / structured cloning ?

- [ ] 164. What happnes when you clone a complex object which has othere objects as properties to a new empty object variable using Object.assign ? What happens to those property objects ? What are the drawbacks of this cloning ?

- [ ] 165. How to implement structured cloning ? Give example.

- [ ] 166. How structuredClone(object) method works ? State the syntax ? How to use it ?

- [ ] 167. What is the difference in using Object.assign and structuredClone ?

- [ ] 168. What do you mean by circular reference in objects ?

- [ ] 169. For what kind of properties structuredClone() method fails ?

- [ ] 170. Give high level overview how memory management happens in js ?

- [ ] 171. What happens when something is not needed any more? How does the JavaScript engine discover it and clean it up?

- [ ] 172. Explain reachability in memory management of js.

- [ ] 173. What do you mean by reachable values and can you give some examples ?

- [ ] 174. What is the role of garbage collector in js engine and how that works ? Give a simple example of an object reference first only one reference then two reference to one object how garbage collection happens when we remove those references ?

- [ ] 175. What are interlinked objects ? Explain circular reference.

- [ ] 176. How does JavaScript pass objects to functions by reference? Demonstrate this by writing a function that: accepts two objects, mutates both by adding properties that reference each other, and returns a new object containing references to both inputs. eg. function marry(man, woman).

- [ ] 177. What do you mean by unreachable island in js memory management, give one example.

- [ ] 178. What is the basic garbage collection algorithm is called in js ?

- [ ] 179. Explain the steps involved in garbage collection algorithm, how it does it ?

- [ ] 180. Explain the concept of Generational Collection in js memory management.

- [ ] 181. Explain the concept of Incremental Collection.

- [ ] 182. Explain the concept of Idle Time Collection.

- [ ] 183. What is a method in object ?

- [ ] 184. State the shorter syntax for methods in js object literal.

- [ ] 185. What is the this keyword, and for what is it used ? Give one example how it's used ?

- [ ] 186. What is the problem in using outer variable name of the object to access it's properties in the methods of that object instead of using this ? Give one example showing the problem.

- [ ] 187. What does it mean by "this" is not bound ?

- [ ] 188. When the value of "this" is evaluated by js engine ?

- [ ] 189. What if we call a function with "this" without an object at all, what would be the value of this ? In strict mode and In non strict mode ?

- [ ] 190. What does it mean by normal functions have their own "this" and arrow function don't have their own "this" ?

- [ ] 191. What does it mean by dynamic this and lexical this ?

192. 
```js
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result? Explain the why.
```

- [ ] 193. Create an object calculator with three methods: read() prompts for two values and saves them as object properties with names a and b respectively. sum() returns the sum of saved values. mul() multiplies saved values and returns the result.
```js
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```

- [ ] 194. There’s a ladder object that allows you to go up and down:
```js
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
```
Now, if we need to make several calls in sequence, we can do it like this:
```js
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
```
Modify the code of up, down, and showStep to make the calls chainable, like this:
```js
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
```

- [ ] 195. What are Constructor Functions ? What are its 2 conventions ? Give one example.

- [ ] 196. What happens when a function is executed with new keyword ?

- [ ] 197. Can any function be used as a constructor ?

- [ ] 198. Inside a function, how we can check whether it was called with new or without it ?

- [ ] 199. Do Constructors have a return statement ? Explain why ?

- [ ] 200. What if a return is called inside a constructor function with an object ? What if the return is called with a Primitive ?

- [ ] 201. Can we add methods using constructor function ? Give one example.

- [ ] 202. Is it possible to create functions A and B so that new A() == new B()? If it is, then provide an example of their code.
```js
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
```

- [ ] 203. Create a constructor function Calculator that creates objects with 3 methods: read() prompts for two values and saves them as object properties with names a and b respectively. sum() returns the sum of these properties. mul() returns the multiplication product of these properties.
```js
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

- [ ] 204. Create a constructor function Accumulator(startingValue). Object that it creates should:

- Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
- The read() method should use prompt to read a new number and add it to value.
- In other words, the value property is the sum of all user-entered values with the initial value startingValue.
```js
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
```

- [ ] 205. Explain optional chaining in js. Give an example.

- [ ] 206. What do you mean by non existing property problem ? How optional chaining solves that ?

- [ ] 207. Explain some other inelegant ways to achieve undefined for a non existent object property and null for a non existing html element ?

- [ ] 208. Why we shouldn't overuse the optional chaining ?

- [ ] 209. What do you mean by short circuiting ? give an example.

- [ ] 210. Is the optional chaining an operator or something else ?

- [ ] 211. Where ?.() is used ?

- [ ] 212. Where ?.[] is used ?

- [ ] 213. Can we use ?. with delete ? eg. delete User.name

- [ ] 214. By specification, only two primitive types may serve as object property keys: What are they ?

- [ ] 215. What if some other data type is used for keys such as number or boolean ?

- [ ] 216. What do you mean by Symbol data type ? What it represents ? Explain the syntax of Symbol.

- [ ] 217. What is symbol name ?

- [ ] 218. What is the speciality of symbols ?

- [ ] 219. What if we create multiple symbols with the exactly the same description will they be equal ? Is it possible to have equal symbols ?

- [ ] 220. What do you mean by description of a Symbol ?

- [ ] 221. Can Symbols be auto converted to strings ? Why ?

- [ ] 222. If we really want to show a symbol what do we need to do ?

- [ ] 223. How to show the description only of a Symbol ?

- [ ] 224. What do you mean by hidden property of an object ?

- [ ] 225. How can we use symbols to create hidden property of an object ? Give example.

- [ ] 226. What's the benifit of using Symbol("id") instaed of using string "id" ?

- [ ] 227. What is object literal and how to use Symbol in object literal ?

- [ ] 228. Can the for in loop access symbol keys ?

- [ ] 229. When we copy an Object using Object.assign(), are the symbols copied ?

- [ ] 230. What do you mean by global symbols and when do we need global symbols ? What is global symbol registry ?

- [ ] 231. How to read a symbol from the global symbol registry ?

- [ ] 232. Give an example of global symbol and using it ?

- [ ] 233. For what symbol.keyFor is used ? Give an example.

- [ ] 234. What symbol.for(key) returns for global symbols ? and what for non global symbols ?

- [ ] 235. Why symbol.for(key) doesn't work for non global symbols ?

- [ ] 236. Which property all symbols have ?

- [ ] 237. What do you mean by system symbols ?

- [ ] 238. What happens when objects are added obj1 + obj2, subtracted obj1 - obj2 or printed using alert(obj)?

- [ ] 239. Is there anything like objects type conversion to booleans ?

- [ ] 240. What kind of type conversions are available with objects ?

- [ ] 241. When numeric conversion happens for objects and when string conversion happens for objects give example for each.

- [ ] 242. How does javascript decides which conversion to apply for objects ?

- [ ] 243. What are the three variants of type conversion for objects ?

- [ ] 244. What are called hints in js type conversions for objects ?

- [ ] 245. What are three hints listed in js spec ? Explain each hint.

- [ ] 246. What hint < > these operatos uses while comparing objects ?

- [ ] 247. Explain the "default" hint in detail.

- [ ] 248. How all objects implement default conversion, and what's different with Date object ?

- [ ] 249. How javascript convert objects to primitive can you explain the high level of it ? 3 steps.

- [ ] 250. What are built in symbol methods, explain the built in symbol Symbol.toPrimitive. Explain the first step which is Symbol.toPrimitive() with example.

- [ ] 251. If the method Symbol.toPrimitive() exixts what happens ?

- [ ] 252. What if the method Symbol.toPrimitive() doesn't exist ?

- [ ] 253. Explain the methods toString() and valueOf(). What they do and how they work ? and what they return ?

- [ ] 254. Explain the role of toString() and valueOf() in the context of object to primitive conversion, when they take place and what they do ?

- [ ] 255. What if toString and valueOf return an object ?

- [ ] 256. Difference between toString and valueOf and Symbol.toString and Symbol.valueOf.

- [ ] 257. Explain the object to primitive conversion algorithm summary.

### Data Types

- [ ] 258. JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects. They also provide methods to call as such - explain this statement and how and why it works ?

- [ ] 259. Are primitives object too ?

- [ ] 260. How many primitives types are there ?

- [ ] 261. Are functions object too ?

- [ ] 262. Why objects are heavier than primitives ?

- [ ] 263. Primitives are fast and lightweight as possible and they also can be accessed using methods like an object - How this solution was implemented by the creators of JS, give high level overview.

- [ ] 264. What do you mean by object wrapper when it comes into the picture for the primitives to act like objects and have methods ?

- [ ] 265. Can you explain what's happening here ? and how under the hood ?

```js
let str = "Hello";

alert( str.toUpperCase() ); // HELLO
```

- [ ] 266. Does null and undefined primitives have methods ?

- [ ] 267. Can I add a string property such as objects ?

```js
let str = "Hello";

str.test = 5;

alert(str.test);
```

- [ ] 268. How many types of Number is available in JS ?

- [ ] 269. What do you mean by double precision floating point numbers ?

- [ ] 270. What BigInt represent and when are they needed ?

- [ ] 271. Explain how can we use e to write big numbers like 7.3 billion in short and 0.000073 in short ?

- [ ] 272. Explain Hex, Binary and Octal numbers ? And where are they used ?

- [ ] 273. Explain what num.toString(base) does and returns ? What is the range of base it can have ?

- [ ] 274. Convert 123456 in the base 36.

- [ ] 275. What are the different in built functions available in js for rounding off numbers ?

- [ ] 276. Explain the difference and usage between Math.floor, Math.ceil, Math.round, Math.trunc with examples ?

- [ ] 277. For instance, we have 1.2345 and want to round it to 2 digits, getting only 1.23. How could we do this ?

- [ ] 278. What is the drawback of using toFixed(n) for rounding off ? What Math.method it uses to round off ?

- [ ] 279. How internally in js a number is represented ? How many bits are the number in js ? What do you mean by 32 bits or 64 bits number ?

- [ ] 280. in 64 bits, break down how many bits are used for the number, how many for the decimal points and how many for the sign ?

- [ ] 281. What if we try to console.log a very big number ?

- [ ] 281. Explain what do you mean by loss of precision with an example.

- [ ] 282. alert( 0.1 + 0.2 == 0.3 ); // false can you explain it why it happens ?

- [ ] 283. alert( 0.1 + 0.2 ); what would be the value of it ?

- [ ] 284. How fractions like 0.1 and 0.2 are stored in memory ? 

- [ ] 285. alert( 0.1.toFixed(20) ); Explain this what is it doing and what would be the output ?

- [ ] 286. What is the workaround the problem of the loss precision ?

- [ ] 287. alert( 9999999999999999 ); // shows 10000000000000000 why ?

- [ ] 288. Explain Infinity, -Infinity and NaN. And what type do they belong to ?

- [ ] 289. What isNaN(value) does ? And why do we need it ?

- [ ] 290. But do we need this function? Can’t we just use the comparison === NaN?

- [ ] 291. alert( NaN === NaN ); // false Why ?

- [ ] 292. What isFinite(value) does ? And why do we need it ? Where do we need it ?

- [ ] 293. an empty or a space-only string is treated as ....... in all numeric functions in js ?

- [ ] 294. Explain the difference between Number.isNaN(), Number.isFinite() and isNaN() and isFinite().

- [ ] 295. alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type : explain why ?

- [ ] 296. alert( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion : explain why ?

- [ ] 297. When Number.isNan(value) returns true and when false ?

- [ ] 298. When Number.isFinite(value) returns true and when false ?

- [ ] 299. When isNaN(value) returns true and when false ?

- [ ] 300. when isFinite(value) returns true and when false ?

- [ ] 301. What Object.is() method is ? What is does ? When is it used ? How it works ?

- [ ] 302. What +value an Number(value) returns if the value is not exactly a number ? What are the things that are ignored in the conversion ?

- [ ] 303. Explain how parseInt(value) works and how is it different compared to Number() or +value ? When they are used ?

- [ ] 304. Explain how parseFloat(value) works and how is it differnt comparexd to Number(value) or +value ? When they ar used ?

- [ ] 305. Explain what they will produce ?
```js
alert( parseInt('100px') ); 
alert( parseFloat('12.5em') ); 

alert( parseInt('12.3') );
alert( parseFloat('12.3.4') );
```

- [ ] 306. When ParseInt(value) and ParseFloat(value) returns NaN ?

- [ ] 307. What is the optional second arguement of ParseInt(value, second-arguement) ?

- [ ] 308. Explain What Math.random() does and does it take any arguements ? How Math.random() works ? give example.

- [ ] 309. Math.max(a, b, c...) and Math.min(a, b, c...) Explain what they do and how they work ? give example.

- [ ] 310. Math.pow(n, power) explain what they do and how they work ? give example.

- [ ] 311. Create a script that prompts the visitor to enter two numbers and then shows their sum.

- [ ] 312. Why 6.35.toFixed(1) === 6.3. in the example alert( 1.35.toFixed(1) ); // 1.4 but why alert( 6.35.toFixed(1) ); // 6.3 ?

- [ ] 313. How to round 6.35 the right way ?

- [ ] 314. Create a function readNumber which prompts for a number until the visitor enters a valid numeric value. The resulting value must be returned as a number. The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

- [ ] 315. This loop is infinite. It never ends. Why?
```js
let i = 0;
while (i != 10) {
  i += 0.2;
}
```

- [ ] 316. The built-in function Math.random() creates a random value from 0 to 1 (not including 1). Write the function random(min, max) to generate a random floating-point number from min to max (not including max). Examples of its work:
```js
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
```

- [ ] 317. Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values. Any number from the interval min..max must appear with the same probability. Examples of its work:
```js
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
```

- [ ] 318. What is the internal format for Strings in js ? 

- [ ] 319. Explain the difference between Strings in single quote, double quote and backticks ?

- [ ] 320. Explain the advantages of using backticks.

- [ ] 321. 