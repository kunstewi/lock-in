# Javascript Solutions

### Javascript Fundamentals

1. **Explain the full process of how js gets executed in the browser and explain the high level architecture of v8 engine.**
   - **Execution Process:**
     1. **Parsing:** The engine reads the code and converts it into an Abstract Syntax Tree (AST).
     2. **Compilation:** The interpreter (Ignition) takes the AST and converts it into bytecode.
     3. **Execution:** The bytecode version is executed.
     4. **Optimization:** While running, the compiler (TurboFan) monitors "hot" code and compiles it into highly optimized machine code.
   - **V8 Architecture:** V8 consists of a Parser, an Interpreter (Ignition), a Compiler (TurboFan), and a Garbage Collector (Orinoco).

2. **What can in-browser javascript do (5 points)**
   - Modify the DOM (change content, style, structure).
   - React to user events (clicks, keyboard input, etc.).
   - Send network requests (AJAX, Fetch).
   - Store data locally (localStorage, Cookies).
   - Access browser features like Geolocation, Camera, and Audio.

3. **Explain what are AJAX and COMET and how do they work ?**
   - **AJAX (Asynchronous JavaScript and XML):** Allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. It means it is possible to update parts of a web page, without reloading the whole page.
   - **COMET:** A web application model in which a long-held HTTP request allows a web server to push data to a browser, without the browser explicitly requesting it. Techniques include long polling and streaming.

4. **What are cookies ? how do they work ? What does it mean by get or set cookies ?**
   - **Cookies:** Small strings of data stored directly in the browser. They are sent to the server with every request.
   - **How they work:** The server sets them using the `Set-Cookie` header, and the browser stores them.
   - **Get/Set:** "Get" refers to reading the `document.cookie` string. "Set" refers to assigning a new value to `document.cookie` to create or update a cookie.

5. **What is the local storage and how that works ?**
   - **Local Storage:** A property of the window object that allows developers to store key-value pairs in a web browser with no expiration date. The data persists even after the browser is closed and reopened.

6. **What do you mean by "same origin policy" ?**
   - A security mechanism that restricts how a document or script loaded from one "origin" can interact with a resource from another origin. An origin is defined by the combination of protocol (http/https), domain, and port.

7. **What if a script tag in the html file has content inside and also a src attribute? Which js will run ?**
   - If the `src` attribute is present, the internal script content is ignored. Only the external file will be loaded and executed.

8. **What is "use strict" and how that works ?**
   - It is a directive that enables "strict mode" in JavaScript. It enforces better coding practices, makes debugging easier by throwing errors for silent mistakes (like assigning to undeclared variables), and prevents the use of potentially confusing features.

9. **What are primitive and non primitive data types ? give names of primitives and non primitives data types in js.**
   - **Primitives:** Stored by value, immutable. Types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
   - **Non-Primitives:** Stored by reference, mutable. Type: `object` (includes Arrays, Functions, Dates, etc.).

10. **When should we use capital letters for constant variables and when we shouldn't ?**
    - Use ALL_CAPS for "hard-coded" constants whose values are known before execution (e.g., `const COLOR_RED = "#F00";`).
    - Use camelCase for constants that are calculated during execution but don't change after that (e.g., `const pageLoadTime = Date.now();`).

11. **How many basic data types in js, and what ?**
    - There are 8 basic data types: `string`, `number`, `bigint`, `boolean`, `null`, `undefined`, `symbol`, and `object`.

12. **What if we try to do any number operation with NaN what the result would be ?**
    - Any mathematical operation with `NaN` (Not-a-Number) results in `NaN` (except `NaN ** 0` which is `1`).

13. **What is the range of numbers 'number' data type can hold ?**
    - Between `-(2^53 - 1)` and `2^53 - 1`.

14. **How to represent BigInt numbers ?**
    - By appending `n` to the end of an integer literal (e.g., `1234n`) or by calling the `BigInt()` function.

15. **How null in javascript different compared to other languages like java or cpp ?**
    - In JS, `null` is a special value that represents "nothing", "empty", or "value unknown". It is not a "reference to a non-existent object" or a "null pointer" as in some other languages.

16. **What is the meaning of data type undefined ?**
    - This means "value is not assigned". If a variable is declared but not assigned, its value is `undefined`.

17. **Difference between primitive and non primitive values.**
    - Primitives are compared by value and are immutable. Non-primitives (objects) are compared by reference and are mutable.

18. **What symbol data type does ?**
    - It is used to create unique identifiers for objects. Even if two symbols have the same description, they are different.

19. **Difference between typeof(x) and typeof x syntax ?**
    - There is no functional difference. `typeof` is an operator, not a function. The parentheses are just for grouping if needed.

20. **Output of `let name = "Ilya"; alert(`hello ${"name"}`);` ?**
    - Output: `hello name`. Because `"name"` is a string literal, not the variable `name`.

21. **What is the prompt() function and what it does in js give one example and how is it different from alert(). what arguments the prompt() expects ?**
    - `prompt(title, [default])` shows a modal window with a text input. It returns the text entered or `null` if canceled.
    - Difference: `alert()` just shows a message; `prompt()` asks for input.
    - Arguments: `title` (text to show) and an optional `default` value for the input field.
    - Example: `let name = prompt("What is your name?", "Guest");`

22. **What is the confirm() function and what it does in js give one example.**
    - `confirm(question)` shows a modal window with a question and two buttons: OK and Cancel. It returns `true` for OK and `false` for Cancel.
    - Example: `let isBoss = confirm("Are you the boss?");`

23. **What do you mean by type conversion in js ? what type alert() converts to ?**
    - Type conversion is the process of converting a value from one type to another. `alert()` automatically converts any value passed to it into a string.

24. **How do we convert a value to a string in js ?**
    - Using `String(value)` or calling `.toString()` on a variable.

25. **How do we convert a value to a number in js ?**
    - Using `Number(value)`, the unary plus operator `+value`, or `parseInt()` / `parseFloat()`.

26. **What is the result of Number(null) and Number(undefined) ?**
    - `Number(null)` becomes `0`.
    - `Number(undefined)` becomes `NaN`.

27. **How can we do boolean type conversion in js and which value is considered true and which one false ?**
    - Using `Boolean(value)` or the double NOT operator `!!value`.
    - **Falsy values:** `0`, `""`, `null`, `undefined`, `NaN`, and `false`.
    - **Truthy values:** Everything else (including `"0"`, `" "`, `[]`, `{}`).

28. **"0" and "" true or false ?**
    - `"0"` is `true` (non-empty string).
    - `""` is `false` (empty string).

29. **What is an operand in js ?**
    - An operand is what operators are applied to. For example, in `5 + 2`, `5` and `2` are operands.

30. **What does it mean by an unary operator ?**
    - An operator that has a single operand (e.g., `-5`, `+x`, `!true`).

31. **What does it mean by a binary operator ?**
    - An operator that has two operands (e.g., `2 + 3`, `x * y`).

32. **Difference between negation operator and subtraction operator.**
    - Negation is a unary operator that flips the sign of a number (`-x`). Subtraction is a binary operator that takes one number from another (`x - y`).

33. **List all the math operation available in js ?**
    - Addition `+`, Subtraction `-`, Multiplication `*`, Division `/`, Remainder `%`, Exponentiation `**`.

34. **What if + binary operator is applied to strings ? what if only one is string and other is number ?**
    - If either operand is a string, the result is a string concatenation. The other operand is converted to a string.

35. **Result of `alert('1' + 2 + 2);` ?**
    - `"122"`. It starts from left: `'1' + 2` becomes `"12"`, then `"12" + 2` becomes `"122"`.

36. **Result of `alert(2 + 2 + '1');` ?**
    - `"41"`. It starts from left: `2 + 2` becomes `4`, then `4 + '1'` becomes `"41"`.

37. **What is the difference between + and other operators in js ?**
    - The `+` operator supports string concatenation. Other arithmetic operators (`-`, `*`, `/`) only work with numbers and will convert strings to numbers.

38. **Difference between unary + and binary + ?**
    - Unary `+` converts its single operand to a number. Binary `+` performs addition or concatenation between two operands.

39. **What the unary + does ?**
    - It converts non-numbers to numbers (shorthand for `Number(...)`).

40. **Result of `let apples = "2"; let oranges = "3"; alert(+apples + +oranges);` ?**
    - `5`. Each string is converted to a number by the unary `+`, then they are added.

41. **Organise them by their precedence from highest to lowest with their precedence number and also write all the operators which are present in them - Equality, Additive, Multiplicative, Exponentiation, Unary, Shift, Relational, Bitwise AND, Bitwise OR, Bitwise XOR, Logical AND, Logical OR, Assignment, Comma.**
    1. **Unary:** `+`, `-`, `!`, `~`, `typeof`, `void`, `delete`, `await` (14)
    2. **Exponentiation:** `**` (13)
    3. **Multiplicative:** `*`, `/`, `%` (12)
    4. **Additive:** `+`, `-` (11)
    5. **Shift:** `<<`, `>>`, `>>>` (10)
    6. **Relational:** `<`, `<=`, `>`, `>=` (9)
    7. **Equality:** `==`, `!=`, `===`, `!==` (8)
    8. **Bitwise AND:** `&` (7)
    9. **Bitwise XOR:** `^` (6)
    10. **Bitwise OR:** `|` (5)
    11. **Logical AND:** `&&` (4)
    12. **Logical OR:** `||` (3)
    13. **Assignment:** `=`, `+=`, `-=`, etc. (2)
    14. **Comma:** `,` (1)

42. **What if the precedence number is same for multiple operators in a same statement ?**
    - The engine uses the **associativity** rule (Left-to-Right or Right-to-Left).

43. **What is associativity rule, what do we mean left to right associativity and right to left associativity explain which one are left to right and which one are right to left ? and what's the short trick to remember associativity rule for operators ?**
    - **Associativity:** Determines the order in which operators of the same precedence are evaluated.
    - **Left-to-Right:** Evaluated from left to right (most operators: arithmetic, relational, logical).
    - **Right-to-Left:** Evaluated from right to left (Assignment `=`, Exponentiation `**`, Unary operators).
    - **Trick:** Most operators are L-R. R-L are mostly things that "return" a value to something on their left (assignments) or unary prefixes.

44. **Explain how assignment operators work ?**
    - They assign a value to a variable. They also return the value they assigned, which allows chaining.

45. **Result of `let a = 1; let b = 2; let c = 3 - (a = b + 1);` ?**
    - `a = 3`, `b = 2`, `c = 0`. Inside the parenthesis, `b + 1` is `3`, which is assigned to `a`. The assignment expression itself returns `3`. So `3 - 3 = 0`.

46. **What do you mean by assignment chaining give one example.**
    - Chaining multiple assignments in one statement.
    - Example: `let a = b = c = 2 + 2;` (All variables will be `4`).

47. **What's the associativity rule for chained assignments ?**
    - Right-to-Left. `a = b = c = 5` evaluates as `c = 5` first, then `b = c`, then `a = b`.

48. **What if we try to apply --, ++ operator on number instead of variables like 5++ or 4-- ?**
    - It will cause a Reference Error. These operators only work on variables (L-values).

49. **What is the difference between ++, -- being placed at the beginning of a variable and at the end of the variable, like count++, ++count ?**
    - **Prefix (`++count`):** Increments first, then returns the new value.
    - **Postfix (`count++`):** Returns the current value, then increments.

50. **Difference between `let a = ++counter;` and `let a2 = counter2++;` ?**
    - `a` will be the incremented value. `a2` will be the original value before incrementing.

51. **What are bitwise operators ? List all the bitwise operators present in js and their function.**
    - Operators that treat their operands as a sequence of 32 bits.
    - `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (Left Shift), `>>` (Sign-propagating Right Shift), `>>>` (Zero-fill Right Shift).

52. **What is the comma operator and what it does ? give me one example where it's used ? why we shouldn't use it ?**
    - It evaluates multiple expressions and returns the result of the last one.
    - Example: `for (let i = 0, j = 10; i < j; i++, j--)`.
    - Why not use it: It makes code hard to read and serves no purpose in most contexts.

53. **Final value of a,b,c,d for: `let a = 1, b = 1; let c = ++a; let d = b++;` ?**
    - `a = 2`, `b = 2`, `c = 2`, `d = 1`.

54. **Values of a and x for: `let a = 2; let x = 1 + (a *= 2);` ?**
    - `a = 4`, `x = 5`.

55. **Result of expressions:**
    - `"" + 1 + 0` -> `"10"`
    - `"" - 1 + 0` -> `-1`
    - `true + false` -> `1`
    - `6 / "3"` -> `2`
    - `"2" * "3"` -> `6`
    - `4 + 5 + "px"` -> `"9px"`
    - `"$ " + 4 + 5` -> `"$45"`
    - `"4" - 2` -> `2`
    - `"4px" - 2` -> `NaN`
    - `" -9 " + 5` -> `" -9 5"`
    - `" -9 " - 5` -> `-14`
    - `null + 1` -> `1`
    - `undefined + 1` -> `NaN`
    - `"\t \n" - 2` -> `-2`

56. **Fix: `let a = prompt("First number?", 1); let b = prompt("Second number?", 2); alert(a + b);`**
    - Prompt returns strings, so `+` concatenates.
    - Fix: `alert(+a + +b);` or `alert(Number(a) + Number(b));`.

57. **What are comparisons operator in js, list them all ?**
    - `>`, `<`, `>=`, `<=`, `==` (equality), `!=` (inequality), `===` (strict equality), `!==` (strict inequality).

58. **Difference between = and == in js ?**
    - `=` is assignment. `==` is equality comparison (with type conversion).

59. **How string comparisons work, how js decides which string is bigger and which is small ?**
    - It uses "dictionary" (lexicographical) order, comparing character codes one by one.

60. **Which is greater "a" or "A" in js ?**
    - `"a" > "A"` is `true` because lowercase letters have higher character codes in Unicode/ASCII.

61. **What if we compare string and number using comparison operators ?**
    - The string is converted to a number for the comparison.

62. **What is the numerical value of true and false ?**
    - `true` becomes `1`, `false` becomes `0`.

63. **What is the problem with == and === ?**
    - `==` can lead to unexpected results due to type conversion (e.g., `0 == ""` is true). `===` is the strict version that doesn't do conversion and is generally safer.

64. **What is the strict non equality operator and it's use ?**
    - `!==`. It checks if two values are not equal OR have different types.

65. **Compare `null` and `0` using `<`, `>`, `==`.**
    - `null > 0` -> `false`
    - `null < 0` -> `false` (converted to 0)
    - `null == 0` -> `false` (null only equals undefined with `==`)

66. **Why the value undefined shouldn't be compared to other values ?**
    - Because it converts to `NaN` in numeric comparisons, making all comparisons (`>`, `<`, `>=`) return `false`.

67. **What comparison operators return ?**
    - A boolean value: `true` or `false`.

68. **Is null and undefined equal, if yes why so ?**
    - `null == undefined` is `true`. This is a special rule in the JS specification. They are not strictly equal (`===` is false).

69. **Results:**
    - `5 > 4` -> `true`
    - `"apple" > "pineapple"` -> `false`
    - `"2" > "12"` -> `true` (lexicographical comparison)
    - `undefined == null` -> `true`
    - `undefined === null` -> `false`
    - `null == "\n0\n"` -> `false`
    - `null === +"\n0\n"` -> `false`

70. **What are logical operators in js ? How many, List them all.**
    - `||` (OR), `&&` (AND), `!` (NOT), `??` (Nullish Coalescing).

71. **Are the logical operators only applied to booleans ?**
    - No, they can be applied to values of any type.

72. **What do you mean by short circuit evaluation ?**
    - The operator stops evaluation as soon as the result is determined.
    - Example: `true || someFunction()` (someFunction is never called).

73. **Whose precedence is higher || or && ?**
    - `&&` has higher precedence than `||`.

74. **How the ! operator work ?**
    - It converts the operand to boolean and returns the inverse value.

75. **When !! double not is used ?**
    - To explicitly convert a value to its boolean representation.

76. **`alert(alert(1) || 2 || alert(3));` result?**
    - Alerts `1` first (from inner call), then alerts `2`. `alert(1)` returns `undefined` (falsy), so it moves to `2`, which is truthy, so it stops there and returns `2`.

77. **`alert(alert(1) && alert(2));` result?**
    - Alerts `1`, then alerts `undefined`. `alert(1)` returns `undefined`, which is falsy, so it stops and returns `undefined`.

78. **`alert(null || 2 && 3 || 4);` result?**
    - Alerts `3`. `&&` runs first: `2 && 3` -> `3`. Then `null || 3 || 4` -> `3`.

79. **Check age NOT between 14 and 90.**
    - `if (!(age >= 14 && age <= 90))`
    - `if (age < 14 || age > 90)`

80. **Login code:**
    ```js
    let user = prompt("Who's there?", '');
    if (user === 'Admin') {
      let pass = prompt('Password?', '');
      if (pass === 'TheMaster') {
        alert('Welcome!');
      } else if (pass === '' || pass === null) {
        alert('Canceled');
      } else {
        alert('Wrong password');
      }
    } else if (user === '' || user === null) {
      alert('Canceled');
    } else {
      alert("I don't know you");
    }
    ```

81. **What is Nullish coalescing operator '??' and how that works ?**
    - Returns the first argument if it’s not `null` or `undefined`. Otherwise, it returns the second.

82. **What is the result of a ?? b in words ?**
    - "If `a` is defined, use `a`, otherwise use `b`."

83. **Write ?? using != and &&.**
    - `(a !== null && a !== undefined) ? a : b`

84. **What is the usecase of ?? ?**
    - Providing a default value for variables that might be `null` or `undefined`, but specifically allowing `0`, `false`, or `""` as valid values.

85. **Difference between || and ?? operator ?**
    - `||` returns the first "truthy" value. `??` returns the first "defined" (not null/undefined) value.

86. **What was the issue with || that ?? was introduced ?**
    - `||` treats `0`, `false`, and `""` as falsy, so you couldn't easily set a default if the variable was `undefined` without overwriting a genuine `0` value.

87. **What is the precedence of ?? operator ?**
    - Low: 3 (same as `||`).

88. **What do you need to keep in mind while using ?? with || or && ?**
    - You cannot use `??` directly with `&&` or `||` without parentheses; otherwise, it throws a syntax error.

89. **Skip parts of for loop:**
    - `for (; i < 10; i++)` (Skip init)
    - `for (let i = 0; i < 10; )` (Skip step)
    - `for (;;)` (Infinite loop)

90. **What break and continue keywords does in loop ?**
    - `break` exits the loop entirely. `continue` skips the current iteration and jumps to the next one.

91. **What are labels for break/continue ?**
    - They are identifiers before a loop (`labelName: for...`). They allow breaking or continuing an outer loop from an inner nested loop.

92. **`let i = 0; while (++i < 5) alert(i);` output?**
    - `1, 2, 3, 4`.

93. **`let i = 0; while (i++ < 5) alert(i);` output?**
    - `1, 2, 3, 4, 5`.

94. **Different result in for loop prefix/postfix?**
    - No, they yield the same result because the increment happens after the body in both cases.

95. **Prime numbers 2 to n:**
    ```js
    nextPrime: for (let i = 2; i <= n; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
      console.log(i);
    }
    ```

96. **Switch to if-else:**
    ```js
    if (browser == 'Edge') {
      alert("You've got the Edge!");
    } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
      alert('Okay we support these browsers too');
    } else {
      alert('We hope that this page looks ok!');
    }
    ```

97. **If-else to switch:**
    ```js
    switch (a) {
      case 0:
        alert(0);
        break;
      case 1:
        alert(1);
        break;
      case 2:
      case 3:
        alert('2,3');
        break;
    }
    ```

98. **Same named outer and inner variable?**
    - The function will use the local (inner) variable. This is called shadowing.

99. **What do you mean by variable shadowing ?**
    - When a variable declared within a certain scope has the same name as a variable in an outer scope, the inner variable "shadows" the outer one.

100. **Passing arguments into function:**
     - The function creates local variables for the parameters and copies the arguments' values into them.
     - Primitives (copies) do not change the original. Objects (references) can be modified.

101. **Parameter vs Argument?**
     - **Parameter:** The variable listed in the function definition (declaration time).
     - **Argument:** The actual value passed to the function when it is called (call time).

102. **Default value if argument is not provided?**
     - `undefined`.

103. **How to pass default values?**
     - `function show(message = "text") { ... }`

104. **What default values could be?**
     - They can be values, expressions, or even function calls.

105. **Two ways to achieve default value without parameters:**
     1. Using `if (param === undefined) param = 'default';`
     2. Using logical OR: `param = param || 'default';`

106. **Nullish coalescing character?**
     - `??`. It returns the first argument if it's not `null` or `undefined`.

107. **Return keyword:**
     - Returns a value to the caller and exits the function.
     - You can have multiple `return` statements, but only the first one encountered will execute.

108. **Return without value?**
     - The function exits immediately and returns `undefined`.

109. **Function without return returns?**
     - `undefined`.

110. **Rewrite using ? or ||:**
     - `return (age > 18) ? true : confirm('Did parents allow you?');`
     - `return (age > 18) || confirm('Did parents allow you?');`

111. **pow(x, n):**
     ```js
     function pow(x, n) {
       let result = x;
       for (let i = 1; i < n; i++) {
         result *= x;
       }
       return result;
     }
     ```

112. **Function Expression vs Declaration (semicolon):**
     - Function Expressions need semicolons because they are part of an assignment statement. Declarations do not need one.

113. **Callback functions:**
     - Functions passed as arguments to other functions to be "called back" later.
     - `function ask(q, yes) { if (confirm(q)) yes(); } ask("Ok?", () => alert("Yes!"));`

114. **confirm() method:**
     - Shows a modal with OK/Cancel and returns true/false.

115. **Anonymous functions:**
     - Functions without names, often used as callbacks or assigned to variables.

116. **Function Declaration vs Expression Differences:**
     - **Syntactic difference:** Declaration is a standalone statement. Expression is inside an assignment.
     - **Hoisting:** Declarations are hoisted (available before they are defined). Expressions are not.

117. **Global availability of function in block?**
     - Declare a variable outside the block and assign the function expression to it inside the block.

118. **When to choose which?**
     - Prefer Function Declarations for better structure and hoisting. Use Expressions when you need conditional definition or callbacks.

119. **Rewrite with Arrow Function:**
     ```js
     const ask = (question, yes, no) => {
       if (confirm(question)) yes();
       else no();
     };
     
     ask(
       "Do you agree?",
       () => alert("You agreed."),
       () => alert("You canceled the execution.")
     );
     ```

### Code Quality

120. **JSDoc:**
     - A documentation syntax for JavaScript comments.
     - Example:
     ```js
     /**
      * Returns the sum of two numbers.
      * @param {number} a
      * @param {number} b
      * @returns {number}
      */
     function sum(a, b) { return a + b; }
     ```

121. **Mocha and Chai:**
     - **Mocha:** A test framework that runs tests and provides hooks.
     - **Chai:** An assertion library used with Mocha to provide `expect`, `should`, or `assert` syntax.
     - They work together to verify that code behavior matches expectations.

122. **Specification (Spec):**
     - A document describing what a feature should do, often containing tests.

123. **3 main building blocks of a spec:**
     - `describe`: Group of tests.
     - `it`: A single test case.
     - `assert`: Verification of the result.

124. **Development Flow:**
     1. Write the initial spec.
     2. Create the implementation draft (it fails tests).
     3. Fix the implementation until it passes.
     4. Iterate and refine.

125. **Sinon library:**
     - Used for creating standalone spies, stubs, and mocks for testing.

126. **describe, it, assert:**
     - `describe("title", function)`: Groups tests.
     - `it("title", function)`: Description of a specific test case.
     - `assert.equal(a, b)`: Checks if `a` is equal to `b`.

127. **Extend the spec:**
     - By adding more `it` blocks or nested `describe` blocks.

128. **Polyfills:**
     - A script that updates/adds new functions to an engine to support modern features in older browsers.

129. **Transpilers:**
     - Software that converts modern code into an older version of the same language (e.g., Babel).

### Objects Basics

130. **How many data types?**
     - 8 (string, number, bigint, boolean, null, undefined, symbol, object).

131. **Primitive vs Non-primitive?**
     - Primitives (value-based: string, number, etc.) and Non-primitives (reference-based: objects).

132. **Property in an object:**
     - A "key: value" pair.

133. **Types of key and value?**
     - **Key:** Must be a string or symbol.
     - **Value:** Can be any type.

134. **Two syntaxes for empty object:**
     - `let obj = new Object();` (constructor)
     - `let obj = {};` (literal)

135. **Object literal:**
     - Creating an object using `{...}` syntax.

136. **Access, add, delete, modify:**
     - `obj.prop` (get), `obj.prop = "val"` (add/modify), `delete obj.prop` (delete).

137. **Multiword property names:**
     - Use quotes: `"likes birds": true`.

138. **Trailing comma?**
     - Yes, it is allowed and recommended for easier property manipulation.

139. **Access multiword property?**
     - Use square brackets: `user["likes birds"]`.

140. **. notation vs [] notation:**
     - Dot is simple but restricted (no spaces, must be valid identifier). Brackets allow any string and dynamic keys.

141. **Flexibility of []?**
     - It allows using variable names as keys: `user[varName]`.

142. **Make it work:**
     - `alert( user[key] )`.

143. **Computed properties:**
     - Using brackets inside an object literal to use a dynamic key.
     - Example: `let fruit = "apple"; let bag = { [fruit]: 5 };`

144. **Property value shorthand:**
     - When key and variable name are the same: `let name = "John"; let user = { name };`

145. **Reserved keywords as keys?**
     - Yes, JS converts them to strings for keys, so there are no naming conflicts like in variables.

146. **Test property existence:**
     - Use `"key" in object` or check `obj.prop === undefined`.

147. **Role of "in" operator:**
     - Checks if a key exists in the object (including inherited ones).
     - Syntax: `"key" in object`.

148. **Why "in" instead of undefined check?**
     - Because a property might exist but have the value `undefined`. `in` returns `true` for such properties.

149. **for..in loop:**
     - Iterates over all enumerable keys of an object.
     - Syntax: `for (let key in object) { ... }`

150. **Object order?**
     - Integer properties are sorted. Non-integer string properties appear in creation order.

151. **isEmpty(obj):**
     ```js
     function isEmpty(obj) {
       for (let key in obj) return false;
       return true;
     }
     ```

152. **Sum salaries:**
     ```js
     let sum = 0;
     for (let key in salaries) {
       sum += salaries[key];
     }
     ```

153. **multiplyNumeric(obj):**
     ```js
     function multiplyNumeric(obj) {
       for (let key in obj) {
         if (typeof obj[key] === 'number') {
           obj[key] *= 2;
         }
       }
     }
     ```

154. **Fundamental difference primitives vs objects:**
     - Primitives are copied "as a whole value". Objects are stored and copied "by reference".

155. **How an object is stored in memory?**
     - The variable stores the address (memory reference) where the object data is stored.

156. **Copying object variable:**
     - Only the reference (address) is copied, not the object itself. Both variables point to the same object.

157. **Two objects equal?**
     - Only if they are the exact same object (reference comparison). Two different objects `{}` and `{}` are not equal.

158. **Modify const objects?**
     - A `const` object variable means the reference cannot change, but the properties of the object can still be modified.

159. **Duplicate object (for..in):**
     ```js
     let clone = {};
     for (let key in user) {
       clone[key] = user[key];
     }
     ```

160. **Object.assign:**
     - Copies properties from source objects to a target object.
     - `Object.assign(target, src1, src2)`.

161. **Existing property name in Object.assign?**
     - It overwrites the existing property.

161. (Duplicate number in readme) **Spread syntax cloning:**
     - `let clone = { ...user };`

162. **Nested cloning:**
     - Cloning an object that contains other objects.

163. **Shallow vs Deep cloning:**
     - **Shallow:** Copies top-level properties. If a property is an object, only its reference is copied.
     - **Deep:** Recursively copies all objects and sub-objects, creating a completely independent copy.

164. **Object.assign drawbacks (complex objects):**
     - It performs a shallow copy. Changing a nested object in the clone will affect the original.

165. **Structured cloning implementation:**
     - `let clone = structuredClone(user);`

166. **structuredClone(object):**
     - Deep clones objects, handles circular references, and most data types.
     - `let clone = structuredClone(original);`

167. **Object.assign vs structuredClone:**
     - `Object.assign` is shallow; `structuredClone` is deep.

168. **Circular reference:**
     - When an object references itself directly or through a chain of other objects.

169. **structuredClone fails for?**
     - Function properties and certain built-in objects like DOM elements.

170. **JS Memory Management:**
     - Automatic garbage collection based on reachability.

171. **Cleanup of unused objects:**
     - The Garbage Collector (GC) runs in the background and removes objects that are no longer "reachable".

172. **Reachability:**
     - A value is reachable if it can be accessed from a "root" (global variables, local variables in stack) either directly or through a chain of references.

173. **Reachable values:**
     - Local variables of current function.
     - Variables in the call chain.
     - Global variables.
     - Values reachable from roots.

174. **Garbage Collector role:**
     - It tracks all objects and removes those that become unreachable.
     - Example: If `user = null`, the object previously stored in `user` (if no other reference exists) becomes unreachable and is deleted.

175. **Interlinked objects & Circular reference:**
     - Objects referencing each other. If the whole group becomes unreachable from the root, it is deleted.

176. **marry(man, woman):**
     ```js
     function marry(man, woman) {
       woman.husband = man;
       man.wife = woman;
       return { father: man, mother: woman };
     }
     ```

177. **Unreachable island:**
     - A group of objects that reference each other but are collectively unreachable from the root.

178. **Basic GC algorithm:**
     - Mark-and-Sweep.

179. **Steps in Mark-and-Sweep:**
     1. Mark the roots.
     2. Visit all references from roots and mark them.
     3. Visit references from marked objects.
     4. Sweep (delete) all unmarked objects.

180. **Generational Collection:**
     - Objects are split into "new" and "old". New objects are checked frequently. If they survive many cycles, they move to "old" and are checked less often.

181. **Incremental Collection:**
     - Instead of pausing execution to do full GC, the engine splits GC into small fragments to avoid lag.

182. **Idle Time Collection:**
     - The GC tries to run only while the CPU is idle.

183. **Method in object:**
     - A property that is a function.

184. **Shorter syntax for methods:**
     - `sayHi() { ... }` instead of `sayHi: function() { ... }`.

185. **this keyword:**
     - Refers to the "current object" context of the function call.
     - Example: `user.sayHi()` -> `this` is `user`.

186. **Problem using outer variable name:**
     - If the variable is renamed or copied to another variable, the method might refer to the wrong object or error out.

187. **"this" is not bound:**
     - In JS, `this` is evaluated at runtime based on the call-site, not at definition time.

188. **When "this" is evaluated?**
     - At the moment of the function call.

189. **this without object:**
     - **Strict mode:** `undefined`.
     - **Non-strict:** `window` (global object).

190. **Normal functions vs Arrow function 'this':**
     - Normal functions have their own `this` (determined by caller). Arrow functions do not have their own `this`; they inherit it from the outer lexical scope.

191. **Dynamic vs Lexical this:**
     - **Dynamic:** Value changes based on how the function is called (normal functions).
     - **Lexical:** Value is fixed to the surrounding scope at definition time (arrow functions).

192. **`user.ref.name` result?**
     - Error/Undefined. `ref: this` is evaluated at object creation time. Since `makeUser` is called without an object, `this` is `undefined` (in strict mode). So `user.ref` is `undefined`.

193. **Calculator object:**
     ```js
     let calculator = {
       read() {
         this.a = +prompt('a?', 0);
         this.b = +prompt('b?', 0);
       },
       sum() { return this.a + this.b; },
       mul() { return this.a * this.b; }
     };
     ```

194. **Chainable ladder:**
     ```js
     let ladder = {
       step: 0,
       up() { this.step++; return this; },
       down() { this.step--; return this; },
       showStep() { alert(this.step); return this; }
     };
     ```

195. **Constructor Functions:**
     - Regular functions used with `new` to create objects.
     - **Conventions:** Named with capital letter, executed with `new`.
     - Example: `function User(name) { this.name = name; }`.

196. **What happens with new keyword?**
     1. A new empty object is created and assigned to `this`.
     2. Function body executes (usually modifies `this`).
     3. The value of `this` is returned.

197. **Any function as constructor?**
     - Yes, except arrow functions (they don't have `this`).

198. **new.target:**
     - A property that is defined if the function was called with `new`.

199. **Constructors return statement?**
     - Usually no, as they return `this` implicitly.

200. **return inside constructor:**
     - If `return` an **object**, that object is returned instead of `this`.
     - If `return` a **primitive**, it is ignored and `this` is returned.

201. **Methods in constructor:**
     ```js
     function User(name) {
       this.name = name;
       this.sayHi = function() { alert(this.name); };
     }
     ```

202. **new A() == new B()?**
     - Yes, if both return the same externally defined object.
     ```js
     let obj = {};
     function A() { return obj; }
     function B() { return obj; }
     ```

203. **Calculator constructor:**
     ```js
     function Calculator() {
       this.read = function() {
         this.a = +prompt('a?', 0);
         this.b = +prompt('b?', 0);
       };
       this.sum = () => this.a + this.b;
       this.mul = () => this.a * this.b;
     }
     ```

204. **Accumulator constructor:**
     ```js
     function Accumulator(startingValue) {
       this.value = startingValue;
       this.read = function() {
         this.value += +prompt('Add?', 0);
       };
     }
     ```

205. **Optional Chaining (?.)**
     - A safe way to access nested object properties even if an intermediate property is `null` or `undefined`.
     - Example: `user?.address?.street` returns `undefined` instead of throwing an error if `user.address` is missing.
