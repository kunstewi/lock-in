1. Explain the full process of how js gets executed in the browser and explain the high level architecture of v8 engine.
2. What can in-browser javascript do (5 points)
3. Explain what are AJAX and COMET and how do they work ?
4. What are cookies ? how do they work ? What does it mean by get or set cookies ?
5. What is the local storage and how that works ?
6. What do you mean by "same origin policy" ?
7. What if a script tag in the html file has alert(1) inside that and also it has src = "index.js" which js will run ?
8. What is "use strict" and how that works ?
9. What are primitive and non primitive data types ? give names of primitives and non primitives data types in js.
10. When should we use capital letters for constant variables and when we shouldn't ?
11. How many basic data types in js, and what ?
12. What if we try to do any number operation with NaN what the result would be ?
13. What is the range of numbers 'number' data type can hold ?
14. How to represent BigInt numbers ?
15. How null in javascript different compared to other languages like java or cpp ?
16. What is the meaing of data type undefined ?
17. Difference between primitive and non primitive values.
18. What symbol data type does ?
19. Difference between typeof(x) and typeof x syntax ?
20. let name = "Ilya"; alert( `hello ${"name"}` ); what's the output ?
21. what is the prompt() function and what it does in js give one example and how is it different from alert(). what arguements the prompt() expects ?
22. what is the confirm() function and what it does in js give one example.
23. what do you mean by type conversion in js ? what type alert() converts to ?
24. How do we convert a value to a string in js ?
25. How do we convert a value to a number in js ?
26. What is the result of Number(null) and Number(undefined) ?
27. How can we do boolean type conversion in js and which value is considered true and which one false ?
28. "0" and "" true or false ?
29. What is an operand in js ?
30. What does it mean by an unary operator ?
31. What does it mean by a binary operator ?
32. Difference between negation opeartor and subraction operator.
33. List all the math operation available in js ?
34. What if + binary operator is applied to strings ? what if only one is string and other is number ?
35. alert('1' + 2 + 2); what would be the result ?
36. alert(2 + 2 + '1' ); what would be the result ?
37. what is the difference between + and other operators in js ?
38. Difference between unary + and binary + ?
39. What the unary + does ?
40. let apples = "2"; let oranges = "3"; alert( +apples + +oranges ); what would be the result ?
41. Organise them by their precedence from highest to lowest with their precendence number and also write all the operators which are present in them - Equality, Additive, Multiplicative, Exponentiation, Unary, Shift, Relational, Bitwise AND, Bitwise OR, Bitwise XOR, Logical AND, Logical OR, Assignment, Comma.
42. What if the precedence number is same for multiple operators in a same statement ?
43. What is associativity rule, what do we mean left to right associativity and right to left associativity explain which one are left to right and which one are right to left ? and what's the short trick to remember associativity rule for opearators ?
44. Explain how assignment operators work ?
45. let a = 1; let b = 2; let c = 3 - (a = b + 1); what would be the result of a, b, c ?
46. What do you mean by assignment chaining give one example.
47. What's the associativity rule for chained assignments ?
48. What if we try to apply --, ++ operator on number instead of variables like 5++ or 4-- ?
49. What is the difference between ++, -- being placed at the beginning of a variable and at the end of the variable, like count++, ++count ?
50. let counter = 1; let a = ++counter; let counter = 1; let a = counter++; difference between these two.
51. What are bitwise opeartors ? List all the bitwise operators present in js and their function.
52. What is the comma opeartor and what it does ? give me one example where it's used ? why we shouldn't use it ?
53. let a = 1, b = 1; let c = ++a; let d = b++; final value of a,b,c,d ?
54. let a = 2; let x = 1 + (a \*= 2); values of a and x ?
55. "" + 1 + 0; "" - 1 + 0; true + false; 6 / "3"; "2" \* "3"; 4 + 5 + "px"; "$" + 4 + 5; "4" - 2; "4px" - 2; " -9 " + 5; " -9 " - 5; null + 1; undefined + 1; " \t \n" - 2
give the result of each expression.
56. let a = prompt("First number?", 1); let b = prompt("Second number?", 2); alert(a + b); // 12 why this code gives 12 and not 3 ? fix this. 
57. What are comparisons operator in js, list them all ?
58. What's the differnce between = and == in js ?
59. How string comparisons work, how js decides which string is bigger and which is small ?
60. Which is greater "a" or "A" in js ?
61. What if we compare string and number using comparison operators ?
62. What is the numerical value of true and false ?
63. What is the problem with == and === ?
64. What is the strict non equality operator and it's use ?
65. What if we compre null and zero using <, >, ==. What would be the result in each case ?
66. Why the value undefined shoudn't be compared to other values ?
67. What comparison operatos return ?
68. Is null and undefined equal, if yes why so ?
69. 5 > 4; "apple" > "pineapple"; "2" > "12"; undefined == null; undefined === null; null == "\n0\n"; null === +"\n0\n"; give result of each. 
70. What are logical operators in js ? How many, List them all.
71. Are the logical operators only applied to booleans ?
72. What do you mean by short circuit evaluation ? give example.
73. Whose precedence is higher || or && ?
74. How the ! operator work ?
75. When !! double not is used ?
76. What will it return and explain why alert( alert(1) || 2 || alert(3) );
77. What will it return and explain why alert( alert(1) && alert(2) );
78. What will it reuturn and explain why alert( null || 2 && 3 || 4 );
79. Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two variants: the first one using NOT !, the second one – without it.
80. Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

81. What is Nullish coalescing operator '??' and how that works ?
82. What is the result of a ?? b in words ?
83. Write this ?? operator using not equal and and operator.
84. What is the usecase of ?? ? 
85. What is the difference between || and ?? operator ?
86. What was the issue with || that ?? was introduced ?
87. What is the precedence of ?? operator ?
88. What do you need to keep in mind while using ?? with || or && ?
89. 