### Javascript Fundamentals

1. Explain the full process of how js gets executed in the browser and explain the high level architecture of v8 engine.

2. What can in-browser javascript do (5 points)

3. Explain what are AJAX and COMET and how do they work ?

4. What are cookies ? how do they work ? What does it mean by get or set cookies ?

5. What is the local storage and how that works ?

6. What do you mean by "same origin policy" ?

7. What if a script tag in the html file has 
```js
alert(1)
```
inside that and also it has 
```html
<script src="index.js"></script>
```
which js will run ?

8. What is "use strict" and how that works ?

9. What are primitive and non primitive data types ? give names of primitives and non primitives data types in js.

10. When should we use capital letters for constant variables and when we shouldn't ?

11. How many basic data types in js, and what ?

12. What if we try to do any number operation with NaN what the result would be ?

13. What is the range of numbers 'number' data type can hold ?

14. How to represent BigInt numbers ?

15. How null in javascript different compared to other languages like java or cpp ?

16. What is the meaning of data type undefined ?

17. Difference between primitive and non primitive values.

18. What symbol data type does ?

19. Difference between typeof(x) and typeof x syntax ?

20. 
```js
let name = "Ilya"; 
alert(`hello ${"name"}`);
```
what's the output ?

21. What is the prompt() function and what it does in js give one example and how is it different from alert(). what arguments the prompt() expects ?

22. What is the confirm() function and what it does in js give one example.

23. What do you mean by type conversion in js ? what type alert() converts to ?

24. How do we convert a value to a string in js ?

25. How do we convert a value to a number in js ?

26. What is the result of Number(null) and Number(undefined) ?

27. How can we do boolean type conversion in js and which value is considered true and which one false ?

28. "0" and "" true or false ?

29. What is an operand in js ?

30. What does it mean by an unary operator ?

31. What does it mean by a binary operator ?

32. Difference between negation operator and subtraction operator.

33. List all the math operation available in js ?

34. What if + binary operator is applied to strings ? what if only one is string and other is number ?

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

37. What is the difference between + and other operators in js ?

38. Difference between unary + and binary + ?

39. What the unary + does ?

40. 
```js
let apples = "2"; 
let oranges = "3"; 
alert(+apples + +oranges);
```
what would be the result ?

41. Organise them by their precedence from highest to lowest with their precedence number and also write all the operators which are present in them - Equality, Additive, Multiplicative, Exponentiation, Unary, Shift, Relational, Bitwise AND, Bitwise OR, Bitwise XOR, Logical AND, Logical OR, Assignment, Comma.

42. What if the precedence number is same for multiple operators in a same statement ?

43. What is associativity rule, what do we mean left to right associativity and right to left associativity explain which one are left to right and which one are right to left ? and what's the short trick to remember associativity rule for operators ?

44. Explain how assignment operators work ?

45. 
```js
let a = 1; 
let b = 2; 
let c = 3 - (a = b + 1);
```
what would be the result of a, b, c ?

46. What do you mean by assignment chaining give one example.

47. What's the associativity rule for chained assignments ?

48. What if we try to apply --, ++ operator on number instead of variables like 5++ or 4-- ?

49. What is the difference between ++, -- being placed at the beginning of a variable and at the end of the variable, like count++, ++count ?

50. 
```js
let counter = 1; 
let a = ++counter;

let counter2 = 1; 
let a2 = counter2++;
```
difference between these two.

51. What are bitwise operators ? List all the bitwise operators present in js and their function.

52. What is the comma operator and what it does ? give me one example where it's used ? why we shouldn't use it ?

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

55.  
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

56.  
```js
let a = prompt("First number?", 1); 
let b = prompt("Second number?", 2); 
alert(a + b); // 12
```
why this code gives 12 and not 3 ? fix this. 

57. What are comparisons operator in js, list them all ?

58. What's the differnce between = and == in js ?

59. How string comparisons work, how js decides which string is bigger and which is small ?

60. Which is greater "a" or "A" in js ?

61. What if we compare string and number using comparison operators ?

62. What is the numerical value of true and false ?

63. What is the problem with == and === ?

64. What is the strict non equality operator and it's use ?

65. What if we compare null and zero using <, >, ==. What would be the result in each case ?

66. Why the value undefined shouldn't be compared to other values ?

67. What comparison operators return ?

68. Is null and undefined equal, if yes why so ?

69.  
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

70. What are logical operators in js ? How many, List them all.

71. Are the logical operators only applied to booleans ?

72. What do you mean by short circuit evaluation ? give example.

73. Whose precedence is higher || or && ?

74. How the ! operator work ?

75. When !! double not is used ?

76.  
```js
alert(alert(1) || 2 || alert(3));
```
explain result.

77.  
```js
alert(alert(1) && alert(2));
```
explain result.

78.  
```js
alert(null || 2 && 3 || 4);
```
explain result.

79. Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two variants: the first one using NOT !, the second one – without it.

80. Write the code which asks for a login with prompt following rules (Admin, TheMaster etc).

81. What is Nullish coalescing operator '??' and how that works ?

82. What is the result of a ?? b in words ?

83. Write this ?? operator using not equal and and operator.

84. What is the usecase of ?? ? 

85. What is the difference between || and ?? operator ?

86. What was the issue with || that ?? was introduced ?

87. What is the precedence of ?? operator ?

88. What do you need to keep in mind while using ?? with || or && ?

89. How can we skip parts of the for loop like the first let i = 0; the last one i++ and what if we also remove the condition itself ?

90. What break and continue keywords does in loop ?

91. What are labels for break/continue in loops ? Why do we need them ?

92.  
```js
let i = 0; 
while (++i < 5) alert(i);
```
what the output be ?

93.  
```js
let i = 0; 
while (i++ < 5) alert(i);
```
what the output be ?

94.  
```js
for (let i = 0; i < 5; i++) alert(i);
for (let i = 0; i < 5; ++i) alert(i);
```
would they give different result or same ?

95. Write code to output prime numbers from 2 to n.

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

98. What if a function has an outer and inner same named variable, which variable will the function perform operations.

99. What do you mean by variable shadowing ?

100. So when we pass arguement into a function what actually the function does to get those parameters and what if we change the parameters inside the functions will it modify the original parameter or it's copy ?

101. Difference between Parameter and Arguement ?

102. What if a function is called but an arguement is not provided, what's the default value ?

103. How to pass default values to function parameters that triggers when no value is provided for that parameter ? 

104. What the default values could be in the function parameter ?

105. How to achieve the same functionality of default parameter value without providing default value to the paramters ? (2 ways)

106. Explain nullish coalescing character ?

107. How the return keyword works in the function when to use it and when to not ? How many times we can use the return keyword ?

108. What if you use return without a value, what happens to the function ?

109. What a function with empty return or withot it returns ?

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

111. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
```js
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```

112. What are function expressions and why do they have semicolons at the end and when normal function declaration hasn't.

113. What are callback functions ? Give example.

114. What is confirm() method ?

115. What are anonymous function and where are they used ?

116. Explain the differences between function declaration and function expression ?

117. Suppose we declare a function inside if, else or inside another function then we can't call the function from outside of the block, how to make the function declaration be available globally what approach can we take ?

118. When to choose function declaration vs function expression ?

119. Rewrite this using arrow function
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

120. What is JSDoc and how is it used ? Give an example.

121. What is Mocha and explain the steps how it works ? Can you explain how Mocha and Chai related and how do they work together ?

122. What is a specification or spec in testing ?

123. What are the 3 main buildling blocks of a spec ?

124. What the full developement flow looks like with spec and tests and implementation ?

125. What Sinon library does ? 

126. Explain describe, it and assert keyword in testing ?

127. How do we extend the spec ? 

128. What do you mean by polyfills in js ?

129. What do you mean by transpilers ? 

### Objects Basics

130. 