## CSS Questions Solutions - Part 1

### CSS Fundamentals

1. **What is CSS? What does CSS stand for?**
   - CSS stands for **Cascading Style Sheets**. It is a stylesheet language used to describe the presentation (look and formatting) of a document written in HTML or XML.

2. **What is the purpose of CSS in web development?**
   - Its primary purpose is to separate content (HTML) from presentation (CSS), allowing for easier maintenance, consistency across multiple pages, and more flexible design.

3. **What are the three ways to add CSS to HTML? (Inline, Internal, External)**
   - **Inline**: Adding styles directly to the element using the `style` attribute.
   - **Internal**: Placing CSS inside a `<style>` tag in the `<head>` of an HTML document.
   - **External**: Linking to a separate `.css` file using the `<link>` tag.

4. **What is inline CSS? Give an example.**
   - CSS applied directly within an HTML tag.
   - Example: `<p style="color: blue;">Hello World</p>`

5. **What is internal CSS? Give an example.**
   - CSS placed inside the HTML file itself, usually in the `<head>`.
   - Example:
     ```html
     <style>
       p { color: blue; }
     </style>
     ```

6. **What is external CSS? Give an example.**
   - A separate file with the `.css` extension.
   - Example (HTML): `<link rel="stylesheet" href="style.css">`
   - Example (CSS file): `p { color: blue; }`

7. **What is the recommended way to add CSS and why?**
   - **External CSS** is recommended because it separates content from design, allows caching for faster loading, and enables one stylesheet to control multiple pages.

8. **What is a CSS rule?**
   - A complete set of instructions that tells the browser how to style one or more elements. It consists of a selector and a declaration block.

9. **What is a CSS selector?**
   - The part of a CSS rule that matches the HTML element(s) you want to style (e.g., `p`, `.class-name`, `#id-name`).

10. **What is a CSS property?**
    - The specific characteristic you want to change (e.g., `color`, `font-size`, `margin`).

11. **What is a CSS value?**
    - The setting applied to a property (e.g., `blue`, `16px`, `10px`).

12. **What is a CSS declaration?**
    - A single line consisting of a property and its value (e.g., `color: red;`).

13. **What is a CSS declaration block?**
    - A set of one or more declarations enclosed in curly braces `{}`.

14. **How do you write CSS comments?**
    - Using `/* comment here */`.

15. **What is the syntax of a CSS rule?**
    - `selector { property: value; }`

16. **What is case sensitivity in CSS?**
    - CSS selectors and properties are generally case-insensitive, but class names, IDs, and file names (in URLs) are often case-sensitive. It's best practice to use lowercase.

17. **What happens if you have a syntax error in CSS?**
    - The browser will ignore the specific declaration or rule it doesn't understand and continue parsing the rest.

18. **What is the importance of semicolons in CSS?**
    - They separate multiple declarations within a block. Without them, the browser won't know where one declaration ends and the next begins.

19. **What happens if you forget a semicolon?**
    - The property immediately following the missing semicolon will likely be ignored or cause the entire rule to fail.

20. **What is the importance of curly braces in CSS?**
    - They define the scope of the declaration block for a particular selector.

---

### CSS Selectors

21. **What is a type selector (element selector)?**
    - It selects elements by their tag name (e.g., `h1`, `p`, `div`).

22. **What is a class selector? How do you write it?**
    - It selects elements based on their `class` attribute. It starts with a dot `.` followed by the class name (e.g., `.btn`).

23. **What is an ID selector? How do you write it?**
    - It selects a single element based on its `id` attribute. It starts with a hash `#` followed by the ID name (e.g., `#header`).

24. **What is the difference between class and ID selectors?**
    - Classes are reusable (multiple elements can have the same class); IDs must be unique (only one element per page can have that ID).

25. **Can you use the same class on multiple elements?**
    - Yes, that is their primary purpose.

26. **Can you use the same ID on multiple elements?**
    - No, it is invalid HTML/CSS practice and can break functionality (especially in JavaScript).

27. **What is the universal selector?**
    - The asterisk `*`, which matches every single element on the page.

28. **What is a descendant selector?**
    - A space between selectors that matches elements inside another (e.g., `div p` matches all `<p>` within any `<div>`).

29. **What is a child selector?**
    - The `>` symbol, matching only direct children (e.g., `div > p` matches `<p>` that are direct children of `<div>`).

30. **What is the difference between descendant and child selectors?**
    - Descendant matches nested elements at any level; Child matches only the immediate level.

31. **What is an adjacent sibling selector?**
    - The `+` symbol, matching an element that immediately follows another (e.g., `h1 + p`).

32. **What is a general sibling selector?**
    - The `~` symbol, matching all siblings that follow an element (e.g., `h1 ~ p`).

33. **What is an attribute selector?**
    - Selects elements based on the presence or value of an attribute (e.g., `input[type="text"]`).

34. **How do you select elements with a specific attribute?**
    - `[attribute]` (e.g., `[title]`).

35. **How do you select elements where an attribute starts with a value?**
    - `[attribute^="value"]`.

36. **How do you select elements where an attribute ends with a value?**
    - `[attribute$="value"]`.

37. **How do you select elements where an attribute contains a value?**
    - `[attribute*="value"]`.

38. **What is a pseudo-class?**
    - A keyword added to a selector that specifies a special state of the selected element(s) (e.g., `:hover`).

39. **What is `:hover`?**
    - Styles an element when the user's mouse/pointer is over it.

40. **What is `:active`?**
    - Styles an element while it is being interacted with (e.g., while a button is being clicked).

41. **What is `:focus`?**
    - Styles an element that has keyboard focus (e.g., an input field you are typing in).

42. **What is `:visited`?**
    - Styles links that the user has already visited in their browser.

43. **What is `:link`?**
    - Styles links that have not yet been visited.

44. **What is `:first-child`?**
    - Matches an element that is the first child of its parent.

45. **What is `:last-child`?**
    - Matches an element that is the last child of its parent.

46. **What is `:nth-child()`?**
    - Matches an element based on its position in a list (e.g., `:nth-child(2)`, `:nth-child(odd)`).

47. **What is `:nth-of-type()`?**
    - Similar to `nth-child`, but only counts elements of the same type.

48. **What is the difference between `:nth-child()` and `:nth-of-type()`?**
    - `nth-child` counts all children; `nth-of-type` counts only those that match the tag name.

49. **What is `:not()`?**
    - The negation pseudo-class; it matches elements that do not match the provided selector.

50. **What is `:first-of-type`?**
    - Matches the first element of its type within its parent.

51. **What is `:last-of-type`?**
    - Matches the last element of its type within its parent.

52. **What is `:only-child`?**
    - Matches an element that is the only child of its parent.

53. **What is `:empty`?**
    - Matches elements that have no children (not even text nodes).

54. **What is `:checked`?**
    - Matches checkboxes or radio buttons that are selected.

55. **What is `:disabled`?**
    - Matches form elements that have the `disabled` attribute.

56. **What is `:enabled`?**
    - Matches form elements that are not disabled.

57. **What is `:required`?**
    - Matches inputs that have the `required` attribute.

58. **What is `:optional`?**
    - Matches inputs that do not have the `required` attribute.

59. **What is `:valid`?**
    - Matches inputs that pass browser validation.

60. **What is `:invalid`?**
    - Matches inputs that do not pass browser validation.

61. **What is a pseudo-element?**
    - A keyword added to a selector that lets you style a specific part of an element (e.g., `::before`, `::first-letter`).

62. **What is `::before`?**
    - Creates a pseudo-element that is the first child of the selected element (often used with the `content` property).

63. **What is `::after`?**
    - Creates a pseudo-element that is the last child of the selected element.

64. **What is the difference between `:before` and `::before`?**
    - `:` is legacy CSS2 syntax; `::` is modern CSS3 syntax used to differentiate pseudo-elements from pseudo-classes. Browsers support both for `before`/`after`.

65. **What is `::first-letter`?**
    - Styles the first letter of a block-level element.

66. **What is `::first-line`?**
    - Styles the first line of text in a block-level element.

67. **What is `::selection`?**
    - Styles the portion of the page that has been highlighted by the user.

68. **What is `::placeholder`?**
    - Styles the placeholder text of an `<input>` or `<textarea>`.

69. **What is the difference between pseudo-class and pseudo-element?**
    - Pseudo-class targets a **state**; Pseudo-element targets a specific **part** of an element or generates content.

70. **What is a combinator in CSS?**
    - A character that joins multiple selectors to define a relationship between them (Space, `>`, `+`, `~`).

71. **What is selector specificity?**
    - The weight or "power" a selector has in determining which styles win when conflicting rules apply to the same element.

72. **How is specificity calculated?**
    - Using a scoring system:
      - Inline Styles (1000)
      - IDs (100)
      - Classes, Attributes, Pseudo-classes (10)
      - Tags and Pseudo-elements (1)

73. **What has higher specificity: class or ID?**
    - **ID** (100 vs 10).

74. **What has higher specificity: element or class?**
    - **Class** (10 vs 1).

75. **What is the `!important` rule?**
    - A declaration override that forces a style to win regardless of specificity or source order.

76. **When should you use `!important`?**
    - Primarily for emergency overrides, debugging, or when working with third-party libraries where you cannot change their selectors.

77. **What are the problems with using `!important`?**
    - It makes the CSS hard to maintain, breaks the natural cascade, and leads to code that is difficult to override later.

78. **What is the cascade in CSS?**
    - The process browsers use to resolve style conflicts based on Source Order, Specificity, and Importance.

79. **What is inheritance in CSS?**
    - The way some properties (like `color` or `font-family`) are passed down from parent elements to their children.

80. **What properties are inherited by default?**
    - Mostly text-related properties like `color`, `font-family`, `font-size`, `line-height`, `text-align`, etc. Layout properties (margin, padding, border) are usually NOT inherited.

---

### Colors & Backgrounds

81. **How many ways can you specify colors in CSS?**
    - Keywords, Hexadecimal, RGB, RGBA, HSL, HSLA.

82. **What are named colors?**
    - English words like `red`, `blue`, `crimson`, `magenta`.

83. **What is hexadecimal color notation?**
    - A 6-digit code starting with `#` using base-16 (0-9, A-F) characters (e.g., `#FF0000`).

84. **What is the shorthand hex notation?**
    - A 3-digit code used when the pairs are identical (e.g., `#F00` is same as `#FF0000`).

85. **What is RGB color notation?**
    - `rgb(red, green, blue)` where values range from 0 to 255.

86. **What is RGBA color notation?**
    - Same as RGB but adds an "Alpha" channel for transparency (0.0 to 1.0).

87. **What is HSL color notation?**
    - `hsl(hue, saturation, lightness)` where Hue is 0-360, and others are percentages.

88. **What is HSLA color notation?**
    - Same as HSL plus transparency.

89. **What is the `color` property?**
    - Sets the text color of an element.

90. **What is the `background-color` property?**
    - Sets the solid color of an element's background.

91. **What is the `background-image` property?**
    - Sets one or more images as the background (using `url("...")`).

92. **How do you add multiple background images?**
    - Comma-separate the URLs: `background-image: url(1.png), url(2.png);`

93. **What is the `background-size` property?**
    - Determines the size of the background image (specific px, %, `cover`, or `contain`).

94. **What does `background-size: cover` do?**
    - Scales the image to cover the entire container, potentially cropping some of the image.

95. **What does `background-size: contain` do?**
    - Scales the image to be as large as possible without cropping any part of it.

96. **What is the `background-position` property?**
    - Sets the starting position of a background image (e.g., `center`, `top right`, `50% 50%`).

97. **What is the `background-repeat` property?**
    - Defines whether the background image repeats (tiles) or not (`repeat`, `no-repeat`, `repeat-x`, `repeat-y`).

98. **What does `background-repeat: no-repeat` do?**
    - Shows the image only once.

99. **What is the `background-attachment` property?**
    - Sets whether the background scrolls with the page (`scroll`) or stays fixed (`fixed`).

100. **What does `background-attachment: fixed` do?**
     - Creates a parallax-like effect where the background stays in place as the user scrolls.

101. **What is the `background` shorthand property?**
     - Allows setting all background properties in one line.

102. **What is the order of values in the `background` shorthand?**
     - Usually: `color image position/size repeat attachment`.

103. **What is a linear gradient?**
     - A smooth transition between two or more colors along a straight line.

104. **How do you create a linear gradient?**
     - `background: linear-gradient(direction, color1, color2);`

105. **What is a radial gradient?**
     - A smooth transition between colors radiating from a central point.

106. **How do you create a radial gradient?**
     - `background: radial-gradient(shape, color1, color2);`

107. **What is a conic gradient?**
     - A gradient with color transitions rotated around a center point (like a pie chart).

108. **How do you create a repeating gradient?**
     - Use `repeating-linear-gradient(...)` or `repeating-radial-gradient(...)`.

109. **What is the `opacity` property?**
     - Sets the transparency level for an entire element (including its children), from 0.0 to 1.0.

110. **What is the difference between `opacity` and `rgba()`?**
     - `opacity` affects the entire element and its content; `rgba()` only affects the specific color (e.g., background) it is applied to, leaving text/children opaque.

---

### Text & Typography

111. **What is the `font-family` property?**
     - Specifies a list of fonts to use for an element.

112. **What is a font stack?**
     - A list of fonts ordered by preference, ending with a generic family (e.g., `Arial, sans-serif`).

113. **What are web-safe fonts?**
     - Fonts pre-installed on almost all devices (e.g., Arial, Times New Roman, Verdana).

114. **What is the `font-size` property?**
     - Sets the size of the text.

115. **What are the different units for font-size? (px, em, rem, %, vw)**
     - `px`: Absolute unit.
     - `em`: Relative to parent font size.
     - `rem`: Relative to root (html) font size.
     - `%`: Relative to parent.
     - `vw`: Relative to viewport width.

116. **What is the difference between `em` and `rem`?**
     - `em` is relative to the current element's parent; `rem` is always relative to the root (`<html>`) element.

117. **What is the `font-weight` property?**
     - Sets the thickness of characters.

118. **What are the numeric values for font-weight?**
     - 100 to 900 (400 is `normal`, 700 is `bold`).

119. **What is the `font-style` property?**
     - Used for `normal`, `italic`, or `oblique` text.

120. **What is the difference between `italic` and `oblique`?**
     - `italic` uses a specially designed cursive version of the font; `oblique` is simply a slanted version of the normal font.

121. **What is the `text-align` property?**
     - Controls horizontal alignment of text (`left`, `right`, `center`, `justify`).

122. **What values can `text-align` have?**
     - `left`, `right`, `center`, `justify`, `start`, `end`.

123. **What is the `text-decoration` property?**
     - Adds lines to text (underline, overline, line-through).

124. **What is `text-decoration-line`?**
     - Specifies the type of line (e.g., `underline`).

125. **What is `text-decoration-color`?**
     - Specifies the color of the decoration.

126. **What is `text-decoration-style`?**
     - Specifies the style of the line (e.g., `solid`, `dashed`, `dotted`, `wavy`).

127. **What is the `text-transform` property?**
     - Controls capitalization (`uppercase`, `lowercase`, `capitalize`, `none`).

128. **What is the `line-height` property?**
     - Sets the vertical space between lines of text.

129. **What is the recommended line-height for readability?**
     - Usually between `1.4` and `1.6`.

130. **What is the `letter-spacing` property?**
     - Adjusts space between individual characters (tracking).

131. **What is the `word-spacing` property?**
     - Adjusts space between words.

132. **What is the `text-indent` property?**
     - Sets the indentation of the first line of a paragraph.

133. **What is the `text-shadow` property?**
     - Adds a shadow effect to text: `h-shadow v-shadow blur color`.

134. **How do you create multiple text shadows?**
     - Comma-separate them: `text-shadow: 2px 2px red, -2px -2px blue;`

135. **What is the `white-space` property?**
     - Controls how whitespace and line wrapping inside an element are handled.

136. **What does `white-space: nowrap` do?**
     - Forces text to stay on a single line and never wrap to the next line.

137. **What does `white-space: pre` do?**
     - Preserves all whitespace and line breaks exactly as written in the code.

138. **What is the `word-wrap` property?**
     - Older name for `overflow-wrap`; allows long words to be broken and wrap onto the next line.

139. **What is the `word-break` property?**
     - Specifies how to break lines within words (e.g., `break-all`, `keep-all`).

140. **What is the `overflow-wrap` property?**
     - The modern way to allow the browser to break lines mid-word to prevent overflow.

141. **What is the `text-overflow` property?**
     - Determines how overflowed text is signalized to the user.

142. **What does `text-overflow: ellipsis` do?**
     - Adds three dots `...` to indicate that text has been cut off.

143. **What is the `vertical-align` property?**
     - Sets the vertical alignment of an **inline** or **table-cell** element (e.g., `top`, `bottom`, `middle`).

144. **What is the `@font-face` rule?**
     - A CSS at-rule that allows you to use custom fonts by linking to their font files.

145. **How do you import custom fonts using `@font-face`?**
     ```css
     @font-face {
       font-family: 'MyFont';
       src: url('myfont.woff2');
     }
     ```

146. **What is Google Fonts?**
     - A free service providing a massive library of web fonts that are easy to link and use.

147. **How do you import Google Fonts?**
     - Via `<link>` in HTML or `@import` in CSS.

148. **What are font formats? (woff, woff2, ttf, otf)**
     - Different file types for fonts. `woff2` is the most compressed and modern standard for the web.

149. **What is variable font?**
     - A single font file that can behave like multiple fonts by adjusting "axes" like weight, width, and slant.

150. **What is the `font` shorthand property?**
     - Sets style, variant, weight, size/line-height, and family in one line.

---

### Box Model

151. **What is the CSS box model?**
     - A fundamental concept where every element is represented as a rectangular box consisting of margins, borders, padding, and the actual content.

152. **What are the four parts of the box model?**
     - Content, Padding, Border, and Margin.

153. **What is content in the box model?**
     - The actual text, images, or nested elements inside the box.

154. **What is padding in the box model?**
     - The transparent space between the content and the border. It's inside the element's box (and background).

155. **What is border in the box model?**
     - The line that goes around the padding and content.

156. **What is margin in the box model?**
     - The space outside the border, creating distance between the element and its neighbors.

157. **What is the `width` property?**
     - Sets the width of the content area (or the entire box if `box-sizing: border-box` is used).

158. **What is the `height` property?**
     - Sets the height of the element.

159. **What is the `padding` property?**
     - Shorthand for setting padding on all four sides.

160. **What is the difference between `padding: 10px` and `padding: 10px 20px`?**
     - `10px`: All sides are 10px.
     - `10px 20px`: 10px Top/Bottom, 20px Left/Right.

161. **What is the difference between `padding: 10px 20px` and `padding: 10px 20px 30px`?**
     - `10px 20px 30px`: 10px Top, 20px Left/Right, 30px Bottom.

162. **What is the difference between `padding: 10px 20px 30px` and `padding: 10px 20px 30px 40px`?**
     - `10px 20px 30px 40px`: Top (10), Right (20), Bottom (30), Left (40) - clockwise from top.

163. **What is `padding-top`, `padding-right`, `padding-bottom`, `padding-left`?**
     - Specific properties to set padding for each side individually.

164. **What is the `margin` property?**
     - Shorthand for setting margins on all four sides.

165. **What is margin collapse?**
     - A behavior where the top and bottom margins of adjacent boxes are combined into a single margin that is equal to the largest of the two.

166. **When does margin collapse happen?**
     - Between adjacent siblings, between parent and first/last child, and empty blocks.

167. **How do you prevent margin collapse?**
     - By adding padding, border, or `overflow: hidden` to the parent, or using flex/grid.

168. **What is the `margin: auto` trick?**
     - Setting `margin-left: auto` and `margin-right: auto` centers a block-level element horizontally within its parent.

169. **What is the `border` property?**
     - Shorthand for `border-width`, `border-style`, and `border-color`.

170. **What is `border-width`?**
     - Sets the thickness of the border (e.g., `2px`, `thin`, `medium`).

171. **What is `border-style`?**
     - Sets the type of line (`solid`, `dashed`, `dotted`, `double`, `none`).

172. **What are the different border styles?**
     - `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset`.

173. **What is `border-color`?**
     - Sets the color of the border.

174. **What is `border-radius`?**
     - Rounds the corners of the element's outer border edge.

175. **How do you create a circle using `border-radius`?**
     - Set `border-radius: 50%` on a square element (where width equals height).

176. **What is `border-top`, `border-right`, `border-bottom`, `border-left`?**
     - Shorthands for each specific side of the border.

177. **What is `border-top-left-radius`, `border-top-right-radius`, etc.?**
     - Properties to round specific individual corners.

178. **What is the `outline` property?**
     - A line drawn outside the border edge.

179. **What is the difference between `border` and `outline`?**
     - Outlines do not take up space, do not affect the box model, and are often used for focus indicators.

180. **What is `outline-offset`?**
     - Adds space between the border and the outline.

181. **What is the `box-sizing` property?**
     - Controls how the total width and height of an element are calculated.

182. **What is the difference between `content-box` and `border-box`?**
     - `content-box` (default): Width/Height only applies to content. Padding/Border are added on top.
     - `border-box`: Width/Height includes padding and border.

183. **Why is `box-sizing: border-box` recommended?**
     - It makes layout calculations much easier since adding padding doesn't change the element's external dimensions.

184. **What is the `box-shadow` property?**
     - Adds shadow effects around an element's frame. Syntax: `h-offset v-offset blur spread color`.

185. **How do you create multiple box shadows?**
     - Comma-separate the shadow definitions.

186. **What is an inset box shadow?**
     - A shadow that appears inside the element's border, as if the content is sunken.

187. **What is the `max-width` property?**
     - Prevents an element from becoming wider than a certain value.

188. **What is the `min-width` property?**
     - Prevents an element from becoming narrower than a certain value.

189. **What is the `max-height` property?**
     - Sets a maximum height for the element.

190. **What is the `min-height` property?**
     - Sets a minimum height for the element.

---

### Display & Positioning

191. **What is the `display` property?**
     - Specifies the inner and outer display type of an element, determining how it renders and interacts with neighbors.

192. **What is `display: block`?**
     - The element takes up the full width available and starts on a new line.

193. **What is `display: inline`?**
     - The element takes only as much width as necessary and does not start on a new line.

194. **What is `display: inline-block`?**
     - The element flows inline like text but allows setting width, height, padding, and margins like a block element.

195. **What is the difference between `block`, `inline`, and `inline-block`?**
     - Block: New line, full width.
     - Inline: No new line, no width/height.
     - Inline-block: No new line, allows width/height.

196. **What is `display: none`?**
     - Removes the element completely from the document flow as if it were never there.

197. **What is the difference between `display: none` and `visibility: hidden`?**
     - `display: none` removes the space as well; `visibility: hidden` hides the content but keeps the empty space.

198. **What is `display: flex`?**
     - Turns an element into a flex container, initiating the Flexbox layout model.

199. **What is `display: grid`?**
     - Turns an element into a grid container, initiating the CSS Grid layout model.

200. **What is `display: table`?**
     - Makes an element behave like a `<table>` element.

201. **What is the `position` property?**
     - Determines how an element is placed in the document.

202. **What is `position: static`?**
     - The default position; element follows the normal document flow. `top/bottom/left/right` have no effect.

203. **What is `position: relative`?**
     - Positioned relative to its normal position. Offsetting it with `top/left` does NOT affect other elements.

204. **What is `position: absolute`?**
     - Positioned relative to its nearest **positioned** ancestor (not static). It is removed from the normal document flow.

205. **What is `position: fixed`?**
     - Positioned relative to the viewport (the screen). It stays in the same place even when scrolling.

206. **What is `position: sticky`?**
     - A hybrid of relative and fixed. It acts like relative until it reaches a specific scroll threshold, then it sticks (acts like fixed).

207. **What is the difference between `relative` and `absolute` positioning?**
     - Relative leaves a "ghost" space in the flow; Absolute removes it entirely and looks for a positioned parent.

208. **What is the difference between `fixed` and `sticky` positioning?**
     - Fixed is always relative to the screen; Sticky is relative to its container and only "sticks" within the scroll range of that container.

209. **What is the `top` property?**
     - Offsets a positioned element from the top edge.

210. **What is the `right` property?**
     - Offsets a positioned element from the right edge.

211. **What is the `bottom` property?**
     - Offsets a positioned element from the bottom edge.

212. **What is the `left` property?**
     - Offsets a positioned element from the left edge.

213. **What is the `z-index` property?**
     - Controls the stack order (overlapping) of positioned elements. Higher numbers are "closer" to the user.

214. **How does `z-index` work?**
     - It only works on elements with a `position` other than `static`.

215. **What is a stacking context?**
     - A three-dimensional conceptual grouping of elements. Certain properties (like `opacity < 1` or `transform`) create local stacking contexts where children are scoped together.

216. **What is the `float` property?**
     - Places an element on the left or right side of its container, allowing text and inline elements to wrap around it.

217. **What does `float: left` do?**
     - Pushes the element to the left.

218. **What does `float: right` do?**
     - Pushes the element to the right.

219. **What is the `clear` property?**
     - Specifies which sides of an element floating elements are NOT allowed to float (e.g., `clear: both`).

220. **What is a clearfix?**
     - A CSS hack/technique used to automatically expand a container that only contains floated children.

221. **Why is `float` less commonly used now?**
     - Because modern tools like Flexbox and Grid are much more reliable and powerful for layout construction.

222. **What is the `overflow` property?**
     - Determines what happens if content is too big for the container.

223. **What is `overflow: hidden`?**
     - Content is clipped, and no scrollbars are shown.

224. **What is `overflow: scroll`?**
     - Forces scrollbars to appear (even if not needed).

225. **What is `overflow: auto`?**
     - Adds scrollbars only when the content overflows.

226. **What is `overflow-x` and `overflow-y`?**
     - Controls overflow for horizontal and vertical directions separately.

227. **What is the `visibility` property?**
     - Hides or shows an element.

228. **What is the difference between `visibility: hidden` and `opacity: 0`?**
     - Both hide the element and keep its space. `opacity: 0` still allows interactions (clicks), while `visibility: hidden` usually prevents them.

---

### Flexbox

229. **What is Flexbox?**
     - A 1D layout model designed to distribute space and align items within a container automatically.

230. **What problems does Flexbox solve?**
     - Centering (vertically/horizontally), equal heights for columns, reordering elements, and fluid spacing without complex math.

231. **How do you create a flex container?**
     - Set `display: flex;` on the parent element.

232. **What is a flex container?**
     - The parent element that hosts the flex items.

233. **What is a flex item?**
     - Any direct child element of a flex container.

234. **What is the `flex-direction` property?**
     - Defines the main axis (direction) in which items are laid out.

235. **What does `flex-direction: row` do?**
     - Horizontal layout (default). Main axis is Left-to-Right.

236. **What does `flex-direction: column` do?**
     - Vertical layout. Main axis is Top-to-Bottom.

237. **What does `flex-direction: row-reverse` do?**
     - Horizontal, but right-to-left.

238. **What does `flex-direction: column-reverse` do?**
     - Vertical, but bottom-to-top.

239. **What is the `flex-wrap` property?**
     - Determines whether flex items are forced onto a single line or can wrap onto multiple lines.

240. **What does `flex-wrap: wrap` do?**
     - Allows items to break into new lines when space runs out.

241. **What does `flex-wrap: nowrap` do?**
     - Forces all items to stay on a single line, causing them to shrink or overflow.

242. **What is the `flex-flow` shorthand?**
     - Combines `flex-direction` and `flex-wrap`.

243. **What is the `justify-content` property?**
     - Aligns flex items along the **main axis**.

244. **What does `justify-content: flex-start` do?**
     - Packs items at the beginning of the axis.

245. **What does `justify-content: flex-end` do?**
     - Packs items at the end of the axis.

246. **What does `justify-content: center` do?**
     - Centers items along the main axis.

247. **What does `justify-content: space-between` do?**
     - Distributes items evenly; first item is at the start and last is at the end.

248. **What does `justify-content: space-around` do?**
     - Items have equal space around them (resulting in double space between adjacent items).

249. **What does `justify-content: space-evenly` do?**
     - Items have exactly the same amount of space between them and the edges.

250. **What is the difference between `space-between`, `space-around`, and `space-evenly`?**
     - Space-between has no edge padding; Space-around has half-padding on edges; Space-evenly has full padding on edges.

251. **What is the `align-items` property?**
     - Aligns flex items along the **cross axis** (perpendicular to main axis).

252. **What does `align-items: flex-start` do?**
     - Items align to the top/start of the container.

253. **What does `align-items: flex-end` do?**
     - Items align to the bottom/end of the container.

254. **What does `align-items: center` do?**
     - Vertically centers items within the flex container.

255. **What does `align-items: stretch` do?**
     - Items expand to fill the container height (default).

256. **What does `align-items: baseline` do?**
     - Items align based on the baseline of their internal text content.

257. **What is the `align-content` property?**
     - Aligns the entire "flex lines" when there is extra space on the cross axis (only works when `flex-wrap: wrap` is in effect).

258. **What is the difference between `align-items` and `align-content`?**
     - `align-items` aligns individual items; `align-content` aligns the rows of items.

259. **What is the `align-self` property?**
     - Allows an individual flex item to override the container's `align-items` setting.

260. **What is the `flex-grow` property?**
     - Defines the ability for a flex item to grow if necessary (takes a number, e.g., `1`).

261. **What is the `flex-shrink` property?**
     - Defines the ability for a flex item to shrink if necessary (default is `1`).

262. **What is the `flex-basis` property?**
     - Sets the initial main size of a flex item before space is distributed.

263. **What is the `flex` shorthand property?**
     - Combines `grow`, `shrink`, and `basis`.

264. **What does `flex: 1` mean?**
     - Shorthand for `flex-grow: 1; flex-shrink: 1; flex-basis: 0%;`. The item will expand to fill available space evenly.

265. **What is the `order` property in Flexbox?**
     - Changes the visual order in which items appear without changing the HTML source code.

266. **What is the `gap` property in Flexbox?**
     - Specifies the space between items, avoiding the need for margins on items.

267. **How do you center a div using Flexbox?**
     - `display: flex; justify-content: center; align-items: center;` on the parent.

268. **How do you create a space-between layout with Flexbox?**
     - `display: flex; justify-content: space-between;` on the parent.

269. **How do you create a responsive navigation with Flexbox?**
     - Use `flex-direction: column` for mobile and `flex-direction: row` with media queries for desktop.

270. **What is the main axis and cross axis in Flexbox?**
     - Main axis: Defined by `flex-direction` (horizontal if `row`).
     - Cross axis: Perpendicular to the main axis (vertical if `row`).

---

### CSS Grid

271. **What is CSS Grid?**
     - A 2D layout model designed to handle both columns and rows simultaneously.

272. **What problems does CSS Grid solve?**
     - Complex layouts like overlapping elements, masonry-like structures, and alignment in two dimensions that are difficult with Flexbox.

273. **How do you create a grid container?**
     - Set `display: grid;` on the parent.

274. **What is a grid container?**
     - The parent element that holds the internal grid lines and items.

275. **What is a grid item?**
     - Any direct child of a grid container.

276. **What is the `grid-template-columns` property?**
     - Defines the number and size of the columns in the grid.

277. **What is the `grid-template-rows` property?**
     - Defines the number and size of the rows in the grid.

278. **What is the `fr` unit in Grid?**
     - Fractional unit; represents a fraction of the available space in the grid container.

279. **What does `grid-template-columns: 1fr 1fr 1fr` do?**
     - Creates three equal-width columns.

280. **What is the `repeat()` function?**
     - A shorthand to define multiple rows or columns of the same size.

281. **What does `grid-template-columns: repeat(3, 1fr)` do?**
     - Same as `1fr 1fr 1fr`.

282. **What is the `minmax()` function?**
     - Defines a size range greater than or equal to `min` and less than or equal to `max`.

283. **What is the `auto-fill` keyword?**
     - Fills the row with as many columns as it can fit without exceeding the container width.

284. **What is the `auto-fit` keyword?**
     - Similar to `auto-fill`, but collapses empty tracks to zero, allowing filled items to expand and take up all available space.

285. **What is the difference between `auto-fill` and `auto-fit`?**
     - `auto-fill` keeps empty spaces as tracks; `auto-fit` collapses them so the items stretch to fill the container.

286. **What is the `grid-template-areas` property?**
     - Allows you to name grid areas and place items visually by their names.

287. **What is the `grid-area` property?**
     - Assigns a name to a grid item or acts as shorthand for `grid-row-start / grid-column-start / grid-row-end / grid-column-end`.

288. **What is the `grid-column` property?**
     - Shorthand for start and end positions on the horizontal axis.

289. **What is the `grid-row` property?**
     - Shorthand for start and end positions on the vertical axis.

290. **What is `grid-column-start` and `grid-column-end`?**
     - Specific line numbers or name where an item begins and ends horizontally.

291. **What is `grid-row-start` and `grid-row-end`?**
     - Specific line numbers or name where an item begins and ends vertically.

292. **What does `grid-column: 1 / 3` mean?**
     - Item spans from grid line 1 to grid line 3 (covering 2 columns).

293. **What does `grid-column: span 2` mean?**
     - Item spans two column tracks regardless of where it starts.

294. **What is the `gap` property in Grid?**
     - Shorthand for setting both row and column gaps.

295. **What is `row-gap` and `column-gap`?**
     - Specific properties to set spacing between rows or columns.

296. **What is the `justify-items` property in Grid?**
     - Aligns all items inside their grid cells along the row (horizontal) axis.

297. **What is the `align-items` property in Grid?**
     - Aligns all items inside their grid cells along the column (vertical) axis.

298. **What is the `justify-content` property in Grid?**
     - Aligns the entire grid (the tracks) within the grid container horizontally.

299. **What is the `align-content` property in Grid?**
     - Aligns the entire grid (the tracks) within the grid container vertically.

300. **What is the `place-items` shorthand?**
     - Combines `align-items` and `justify-items`.

301. **What is the `place-content` shorthand?**
     - Combines `align-content` and `justify-content`.

302. **What is the `justify-self` property?**
     - Aligns a single grid item inside its cell horizontally.

303. **What is the `align-self` property?**
     - Aligns a single grid item inside its cell vertically.

304. **What is the `place-self` shorthand?**
     - Combines `align-self` and `justify-self`.

305. **What is the `grid-auto-flow` property?**
     - Controls how the auto-placement algorithm works (e.g., `row`, `column`, `dense`).

306. **What is the `grid-auto-columns` property?**
     - Specifies the size of any implicitly created columns.

307. **What is the `grid-auto-rows` property?**
     - Specifies the size of any implicitly created rows.

308. **How do you create a responsive grid layout?**
     - Use `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`.

309. **How do you create a 12-column grid system?**
     - `grid-template-columns: repeat(12, 1fr);`.

310. **What is the difference between Flexbox and Grid?**
     - Flexbox is 1D (rows OR columns) and content-driven; Grid is 2D (rows AND columns) and layout-driven.

---

### Responsive Design

311. **What is responsive design?**
     - A design approach that makes web pages render well on a variety of devices and window or screen sizes.

312. **What is a media query?**
     - A CSS technique used to apply styles only when certain conditions are met, such as a specific screen width.

313. **How do you write a media query?**
     - `@media screen and (max-width: 600px) { ... }`

314. **What is the `@media` rule?**
     - The at-rule used to define media-specific styles.

315. **What is a breakpoint?**
     - The specific screen width where the layout of a web page changes to accommodate the device size.

316. **What are common breakpoints for responsive design?**
     - Small (phones): 480px, Medium (tablets): 768px, Large (laptops): 1024px, Extra Large (desktops): 1200px.

317. **What is mobile-first design?**
     - Designing the website for smaller screens first and then adding styles for larger screens using `min-width` media queries.

318. **What is desktop-first design?**
     - Designing for larger screens first and then adding styles for smaller screens using `max-width` media queries.

319. **What is the difference between mobile-first and desktop-first?**
     - Mobile-first uses `min-width` and builds UP; Desktop-first uses `max-width` and builds DOWN.

320. **What is the `min-width` media query?**
     - Applies styles if the viewport is at least as wide as the specified value.

321. **What is the `max-width` media query?**
     - Applies styles if the viewport is no wider than the specified value.

322. **What is the difference between `min-width` and `max-width`?**
     - `min-width`: screen >= value; `max-width`: screen <= value.

323. **What is the `orientation` media query?**
     - Checks if the device is in `portrait` or `landscape` mode.

324. **What is the `aspect-ratio` media query?**
     - Applies styles based on the width-to-height ratio of the viewport.

325. **What is the `prefers-color-scheme` media query?**
     - Detects if the user has requested a light or dark color theme in their system settings.

326. **What is the `prefers-reduced-motion` media query?**
     - Detects if the user has requested that the system minimize the amount of non-essential motion.

327. **What are viewport units? (vw, vh, vmin, vmax)**
     - Units relative to the size of the browser window.

328. **What is `vw`?**
     - 1% of the viewport width.

329. **What is `vh`?**
     - 1% of the viewport height.

330. **What is `vmin`?**
     - 1% of the smaller dimension (width or height).

331. **What is `vmax`?**
     - 1% of the larger dimension.

332. **What is the `clamp()` function?**
     - Clamps a value between an upper and lower bound: `clamp(min, preferred, max)`.

333. **What is the `min()` function?**
     - Sets the smallest value from a list of comma-separated expressions.

334. **What is the `max()` function?**
     - Sets the largest value from a list of comma-separated expressions.

335. **How do you create responsive typography?**
     - By using viewport units (`vw`) or CSS functions like `clamp()`.

336. **What is fluid typography?**
     - Typography that scales smoothly between a minimum and maximum size based on the viewport width.

337. **What is the `calc()` function?**
     - Allows you to perform calculations when specifying CSS property values (e.g., `calc(100% - 20px)`).

338. **How do you use `calc()` for responsive layouts?**
     - To combine different unit types (e.g., % and px) to create flexible containers.

339. **What is container query?**
     - A modern feature that allows styling an element based on the size of its parent container rather than the viewport.

340. **What is the `@container` rule?**
     - The rule used to apply container-specific media styles.

---

### Transitions & Animations

341. **What is the `transition` property?**
     - Shorthand for setting the transition between states of an element.

342. **What is `transition-property`?**
     - Specifies the name of the CSS property to be transitioned.

343. **What is `transition-duration`?**
     - Specifies how long the transition should take.

344. **What is `transition-timing-function`?**
     - Specifies the speed curve of the transition (e.g., `ease`, `linear`).

345. **What is `transition-delay`?**
     - Defines a pause before the transition starts.

346. **What are the timing functions? (ease, linear, ease-in, ease-out, ease-in-out)**
     - `ease`: Slow start, fast middle, slow end.
     - `linear`: Same speed from start to end.
     - `ease-in`: Slow start.
     - `ease-out`: Slow end.
     - `ease-in-out`: Slow start and end.

347. **What is the `cubic-bezier()` function?**
     - Allows you to define your own timing function using four coordinates.

348. **How do you transition multiple properties?**
     - Comma-separate them: `transition: color 0.3s, background 0.5s;`

349. **What is the `animation` property?**
     - A shorthand for applying complex animations defined with `@keyframes`.

350. **What is the `@keyframes` rule?**
     - Specifies the animation code, defining what styles an element will have at certain times.

351. **How do you create a keyframe animation?**
     ```css
     @keyframes slide {
       from { left: 0; }
       to { left: 100px; }
     }
     ```

352. **What is `animation-name`?**
     - The name of the `@keyframes` to apply.

353. **What is `animation-duration`?**
     - How long the animation takes to complete one cycle.

354. **What is `animation-timing-function`?**
     - The speed curve of the animation.

355. **What is `animation-delay`?**
     - Delay before the animation starts.

356. **What is `animation-iteration-count`?**
     - Number of times the animation plays.

357. **What does `animation-iteration-count: infinite` do?**
     - Plays the animation forever.

358. **What is `animation-direction`?**
     - Defines if the animation plays forward, backward, or alternates.

359. **What does `animation-direction: alternate` do?**
     - Plays forward first, then backward.

360. **What is `animation-fill-mode` baker?**
     - Specifies what styles are applied before and after the animation.

361. **What does `animation-fill-mode: forwards` do?**
     - The element retains the styles of the last keyframe after the animation ends.

362. **What does `animation-fill-mode: backwards` do?**
     - The element applies the first keyframe's styles during the delay period.

363. **What is `animation-play-state`?**
     - Specifies whether the animation is running or paused.

364. **How do you pause an animation on hover?**
     - `element:hover { animation-play-state: paused; }`

365. **What is the difference between `transition` and `animation`?**
     - `transition` requires a trigger (like hover) and only has two states; `animation` can run automatically and have many states.

366. **When should you use `transition` vs `animation`?**
     - Use `transition` for simple state changes; use `animation` for complex, looping, or multi-step movements.

367. **What is the `transform` property?**
     - Applies 2D or 3D transformations to an element (move, rotate, scale, skew).

368. **What is `transform: translate()`?**
     - Moves an element along the X and Y axes.

369. **What is `transform: scale()`?**
     - Changes the size of the element.

370. **What is `transform: rotate()`?**
     - Rotates the element by a certain degree (e.g., `45deg`).

371. **What is `transform: skew()`?**
     - Tilts the element along the X or Y axis.

372. **How do you combine multiple transforms?**
     - Space-separate them: `transform: translate(10px) rotate(45deg);`

373. **What is `transform-origin`?**
     - Changes the point around which the transformation is applied (default is `center`).

374. **What is the `perspective` property?**
     - Defines how far away the 3D object is from the user (gives depth to 3D transforms).

375. **What is `transform: rotateX()`, `rotateY()`, `rotateZ()`?**
     - Rotates the element in 3D space around specific axes.

---

### Advanced Selectors & Techniques

376. **What is the `:is()` pseudo-class?**
     - A powerful selector that takes a selector list and matches any of them, simplifying long selector chains.

377. **What is the `:where()` pseudo-class?**
     - Similar to `:is()`, but it **always has zero specificity**.

378. **What is the difference between `:is()` and `:where()`?**
     - `:is()` takes on the specificity of its most specific argument; `:where()` has no specificity.

379. **What is the `:has()` pseudo-class?**
     - The "parent selector"; it matches an element if it contains certain descendants.

380. **What is the `:focus-visible` pseudo-class?**
     - Only matches an element that has focus specifically via keyboard (avoids mouse-click focus outlines).

381. **What is the `:focus-within` pseudo-class?**
     - Matches an element if either the element itself or any of its children have focus.

382. **What is the `::marker` pseudo-element?**
     - Selects the marker box of a list item (the bullet or number).

383. **What is the `::backdrop` pseudo-element?**
     - Selects the background of a `<dialog>` or an element in full-screen mode.

384. **What is the `:root` pseudo-class?**
     - Matches the highest-level parent (`<html>`). Used primarily for declaring global CSS variables.

385. **What are CSS custom properties (CSS variables)?**
     - Entities defined by CSS authors that contain specific values to be reused throughout a document.

386. **How do you declare a CSS variable?**
     - Using two dashes: `--main-color: blue;`

387. **How do you use a CSS variable?**
     - Using the `var()` function: `color: var(--main-color);`

388. **What is the `var()` function?**
     - The function used to retrieve the value of a custom property.

389. **What is the scope of CSS variables?**
     - They follow the cascade; they are available to the element they are defined in and all its descendants.

390. **How do you create global CSS variables?**
     - Define them inside the `:root` pseudo-class.

391. **How do you override CSS variables?**
     - Redefine the variable in a more specific selector.

392. **What is the fallback value in `var()`?**
     - A second argument used if the variable is not defined: `var(--color, black)`.

393. **How do you use CSS variables for theming?**
     - By changing variable values inside a class (like `.dark-theme`) to swap colors instantly.

394. **What is the `@supports` rule?**
     - A feature query that checks if the browser supports a specific CSS property/value pair.

395. **How do you use feature queries?**
     - `@supports (display: grid) { ... }`

---

### Layout Techniques

396. **What is a two-column layout?**
     - A layout where content is split into two side-by-side containers.

397. **How do you create a two-column layout with Flexbox?**
     - `display: flex;` on parent, and set width/flex-basis on the two children.

398. **How do you create a two-column layout with Grid?**
     - `grid-template-columns: 1fr 1fr;` (or specific widths).

399. **What is a three-column layout?**
     - Content split into three vertical sections.

400. **What is a holy grail layout?**
     - A classic layout with a header, footer, and a three-column middle (nav, main content, sidebar).

401. **How do you create a sticky footer?**
     - Using Flexbox on the body with `flex-direction: column;` and `margin-top: auto;` on the footer.

402. **How do you create a sticky header?**
     - Using `position: sticky; top: 0;`.

403. **How do you center a div horizontally?**
     - `margin: 0 auto;` (for blocks) or `text-align: center;` (for inline).

404. **How do you center a div vertically?**
     - Using Flexbox `align-items: center;` or Grid `align-content: center;`.

405. **How do you center a div both horizontally and vertically?**
     - `display: flex; justify-content: center; align-items: center;` on the parent.

406. **What is the `aspect-ratio` property?**
     - Allows you to specify the ratio of width to height (e.g., `aspect-ratio: 16 / 9;`).

407. **How do you maintain aspect ratio for images?**
     - By setting one dimension (e.g., width) and letting the other stay `auto`, or using the `aspect-ratio` property.

408. **What is the `object-fit` property?**
     - Controls how an `<img>` or `<video>` should be resized to fit its container.

409. **What does `object-fit: cover` do?**
     - The image is scaled to fill the container, preserving aspect ratio (some cropping occurs).

410. **What does `object-fit: contain` do?**
     - The image is scaled to fit inside the container without being cropped.

411. **What is the `object-position` property?**
     - Aligns the content within the element's box (e.g., `object-position: top center;`).

---

### Filters & Effects

412. **What is the `filter` property?**
     - Applies graphical effects like blur or color shift to an element.

413. **What is `filter: blur()`?**
     - Applies a Gaussian blur to the element.

414. **What is `filter: brightness()`?**
     - Makes the element brighter or darker.

415. **What is `filter: contrast()`?**
     - Adjusts the contrast of the element.

416. **What is `filter: grayscale()`?**
     - Converts the element to black and white.

417. **What is `filter: hue-rotate()`?**
     - Rotates the colors of the element along the color wheel.

418. **What is `filter: invert()`?**
     - Inverts the colors of the element.

419. **What is `filter: saturate()`?**
     - Adjusts the color saturation.

420. **What is `filter: sepia()`?**
     - Applies a sepia (vintage) tone.

421. **What is `filter: drop-shadow()`?**
     - Applies a shadow that follows the actual shape (alpha channel) of the content, unlike `box-shadow` which follows the outer box.

422. **How do you combine multiple filters?**
     - Space-separate them: `filter: blur(2px) grayscale(50%);`

423. **What is the `backdrop-filter` property?**
     - Applies filters (like blur) to the area **behind** the element (requires `background` to be semi-transparent).

424. **What is the difference between `filter` and `backdrop-filter`?**
     - `filter` affects the element itself; `backdrop-filter` affects what is visible through the element.

425. **How do you create a frosted glass effect?**
     - `background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(10px);`

426. **What is the `mix-blend-mode` property?**
     - Determines how an element's content should blend with its parent's background.

427. **What is the `background-blend-mode` property?**
     - Determines how an element's background image should blend with its background color.

428. **What is the `clip-path` property?**
     - Creates a clipping region that determines what part of an element should be visible.

429. **How do you create a circular clip path?**
     - `clip-path: circle(50%);`

430. **What is the `mask` property?**
     - Uses an image to hide parts of an element, similar to how Photoshop masks work.

---

### CSS Units

431. **What are absolute units in CSS?**
     - Fixed units that appear the same regardless of parent or screen (e.g., `px`, `cm`, `in`).

432. **What are relative units in CSS?**
     - Units relative to another length (parent, root, or viewport) (e.g., `em`, `rem`, `%`, `vw`).

433. **What is `px`?**
     - Pixel; the basic unit of screen resolution.

434. **What is `em`?**
     - Relative to the font size of the parent element.

435. **What is `rem`?**
     - Relative to the font size of the root (`<html>`) element.

436. **What is the difference between `em` and `rem`?**
     - `em` compounds (nests); `rem` stays consistent based on the global root.

437. **What is `%`?**
     - Relative to the size of the parent element.

438. **What is `vw`?**
     - 1% of viewport width.

439. **What is `vh`?**
     - 1% of viewport height.

440. **What is `vmin`?**
     - 1% of the smaller viewport dimension.

441. **What is `vmax`?**
     - 1% of the larger viewport dimension.

442. **What is `ch`?**
     - Relative to the width of the "0" (zero) character of the font.

443. **What is `ex`?**
     - Relative to the x-height of the current font.

444. **What is `cm`, `mm`, `in`?**
     - Centimeters, Millimeters, Inches (Physical units).

445. **What is `pt`?**
     - Points (1/72 of an inch), commonly used for print.

446. **What is `pc`?**
     - Picas (12 points).

447. **When should you use `px` vs `rem`?**
     - Use `px` for small fixed borders; use `rem` for typography and spacing to support browser zoom/accessibility.

448. **When should you use `em` vs `rem`?**
     - Use `em` when you want an element's size to scale with its internal font size; use `rem` for general consistency.

449. **What is the default font-size in browsers?**
     - 16 pixels.

450. **How do you convert px to rem?**
     - `rem = px / 16`. (e.g., 32px is 2rem).

---

### Best Practices & Performance

451. **What is CSS specificity?**
     - A ranking system that determines which styling rules are applied by the browser when multiple rules target the same element.

452. **How do you avoid specificity wars?**
     - By using a consistent naming convention (like BEM), avoiding IDs for styling, and keeping selectors flat (minimal nesting).

453. **What is the BEM methodology?**
     - Block Element Modifier; a naming convention that makes CSS classes readable and avoids naming collisions.

454. **What is the OOCSS methodology?**
     - Object-Oriented CSS; encourages separating "structure" from "skin" to create reusable visual objects.

455. **What is the SMACSS methodology?**
     - Scalable and Modular Architecture for CSS; categorizes CSS into Base, Layout, Module, State, and Theme.

456. **What is the Atomic CSS methodology?**
     - A style where you have small, single-purpose classes (e.g., `.m-10 { margin: 10px; }`) to build components.

457. **What is CSS-in-JS?**
     - A styling technique where JavaScript is used to style components (common in React, e.g., Styled Components).

458. **What are CSS modules?**
     - A CSS file in which all class names and animation names are scoped locally by default.

459. **What is the importance of CSS organization?**
     - It ensures the codebase remains maintainable, scalable, and easy for multiple developers to work on.

460. **How do you structure your CSS files?**
     - By splitting them into logical chunks (e.g., `variables.css`, `layout.css`, `components/button.css`) and using a main `index.css` to import them.

461. **What is the cascade?**
     - The "C" in CSS; the algorithm that combines styles from different sources and resolves conflicts.

462. **What is CSS reset?**
     - A set of styles that removes browser default styling (e.g., `margin: 0; padding: 0;`) to provide a clean slate.

463. **What is CSS normalize?**
     - An alternative to reset that preserves useful defaults but fixes cross-browser inconsistencies.

464. **What is the difference between reset and normalize?**
     - Reset wipes out everything; Normalize makes everything consistent across browsers.

465. **What is critical CSS?**
     - The minimum CSS required to render the "Above the Fold" content of a web page as fast as possible.

466. **What is CSS minification?**
     - Removing all unnecessary characters (spaces, newlines, comments) from CSS files to reduce file size.

467. **What is CSS compression?**
     - Using Gzip or Brotli on the server to compress CSS files before sending them to the browser.

468. **How do you optimize CSS for performance?**
     - Minify files, use critical CSS, avoid `@import` inside CSS files, and use hardware-accelerated properties (`transform`, `opacity`).

469. **What is render-blocking CSS?**
     - CSS files that prevent the browser from rendering the page until they are fully downloaded and parsed.

470. **How do you reduce render-blocking CSS?**
     - By inlining critical CSS and using `<link rel="preload">` or asynchronous loading for non-critical styles.

471. **What is the `will-change` property?**
     - A hint to the browser that an element is expected to change in a specific way, allowing it to optimize ahead of time.

472. **When should you use `will-change`?**
     - Only as a last resort for performance issues on complex animations; overusing it consumes significant memory.

473. **What are the performance implications of CSS animations?**
     - Animations that trigger "layout" or "paint" are expensive; animations that only trigger "composite" (`transform`, `opacity`) are cheap.

474. **What properties are cheap to animate?**
     - `transform` (scale, rotate, translate) and `opacity`.

475. **What properties are expensive to animate?**
     - `width`, `height`, `margin`, `padding`, `top`, `left`, `box-shadow`, etc., because they trigger layout changes.

476. **What is reflow and repaint?**
     - **Reflow**: Recalculating the geometry of the page. **Repaint**: Re-drawing the pixels.

477. **How do you minimize reflow and repaint?**
     - By using `absolute/fixed` positioning for moving parts, avoiding tables for layout, and batching DOM changes.

478. **What is CSS containment?**
     - A feature that allows developers to isolate parts of a page so the browser doesn't have to recalculate the entire page during changes.

479. **What is the `contain` property?**
     - The property used to implement CSS containment (`contain: layout paint;`).

480. **What is the `content-visibility` property?**
     - Allows the browser to skip rendering off-screen content, significantly improving initial load performance.

---

### CSS Preprocessors

481. **What is a CSS preprocessor?**
     - A tool that extends CSS with variables, nesting, and functions, which then compiles down to standard CSS.

482. **What is Sass?**
     - Syntactically Awesome Style Sheets; the most popular CSS preprocessor.

483. **What is SCSS?**
     - A syntax for Sass that is fully compatible with standard CSS (uses curly braces and semicolons).

484. **What is Less?**
     - A dynamic preprocessor language similar to Sass but written in JavaScript.

485. **What is Stylus?**
     - A highly flexible preprocessor with a very minimal, optional syntax.

486. **What are the benefits of using a preprocessor?**
     - Better code organization, reusability (via mixins), and easier color/sizing management via variables.

487. **What are CSS variables in Sass?**
     - Sass variables start with `$` (e.g., `$color: red;`). Note: These are compiled away, unlike native CSS variables (`--var`).

488. **What is nesting in Sass?**
     - Placing child selectors inside parent selectors to reflect the HTML structure visually.

489. **What are mixins in Sass?**
     - Reusable blocks of CSS code that can be "included" into other rules (often taken with arguments).

490. **What are functions in Sass?**
     - Used to perform complex calculations and return values (like `lighten()` or `darken()`).

491. **What is the `@import` rule in Sass?**
     - An older way to combine Sass files (now being replaced by `@use`).

492. **What is the `@use` rule in Sass?**
     - The modern way to load Sass modules; it handles namespacing better and prevents duplicate code.

493. **What is the difference between `@import` and `@use`?**
     - `@import` makes everything global; `@use` is modular and prevents member name collisions.

494. **What is the `@extend` directive in Sass?**
     - Allows one selector to inherit the styles of another.

495. **What are partials in Sass?**
     - Sass files that start with an underscore (e.g., `_header.scss`), which are not compiled into their own CSS files but are meant to be imported.

---

### Modern CSS Features

496. **What is CSS Grid Level 2?**
     - An update to the Grid spec that introduced features like `subgrid`.

497. **What is subgrid?**
     - Allows a grid item that is itself a grid to inherit the rows/columns of the parent grid.

498. **What is CSS Houdini?**
     - A collection of low-level APIs that give developers direct access to the browser's CSS engine (rendering, layout, etc.).

499. **What is the Paint API?**
     - A Houdini API that allows you to draw images/backgrounds dynamically via JavaScript.

500. **What is the Layout API?**
     - A Houdini API that allows developers to write their own layout algorithms.

501. **What is CSS scroll snap?**
     - A feature that allows the browser to "snap" to specific elements as a user finishes scrolling (common in carousels).

502. **What is the `scroll-snap-type` property?**
     - Sets how strictly the scroll container snaps.

503. **What is the `scroll-snap-align` property?**
     - Sets where exactly the element should snap to (e.g., `start`, `center`).

504. **What is the `scroll-behavior` property?**
     - Determines whether scrolling happens instantly or with a smooth animation.

505. **What does `scroll-behavior: smooth` do?**
     - Enables smooth scrolling when a user clicks a jump link (like anchor links).

506. **What is the `overscroll-behavior` property?**
     - Controls what happens when the edge of a scroll area is reached (e.g., prevents "scroll chaining" to the body).

507. **What is the `accent-color` property?**
     - Allows you to quickly change the branding color of native form controls like checkboxes and radio buttons.

508. **What is the `inert` attribute?**
     - An HTML attribute that, when applied, makes an entire section of the page non-interactive (ignoring clicks and tab focus).

509. **What is the `:modal` pseudo-class?**
     - Selects an element that is currently open as a modal (like a `<dialog>`).

510. **What is the `color-scheme` property?**
     - Informs the browser about which color themes (light/dark) the page supports, allowing native elements to render correctly.

511. **What is the `@layer` rule?**
     - Used to declare CSS "Cascading Layers," allowing developers to control the order of precedence without specificity hacks.

512. **What is cascade layers?**
     - A way to group styles so that later layers always win, even if earlier layers have higher specificity.

513. **What is the `@scope` rule?**
     - A way to limit the reach of CSS selectors to a specific part of the DOM tree.

514. **What is CSS nesting?**
     - A native CSS feature (released in 2023) that allows nesting selectors directly without a preprocessor.

515. **What is the `&` selector in nesting?**
     - Represents the parent element being nested within.

---

### Practical Questions & Scenarios

516. **How do you create a navigation bar?**
     - Use `<nav>`, a `<ul>`, and Flexbox to space the links horizontally.

517. **How do you create a dropdown menu?**
     - Set the parent to `position: relative` and the menu to `position: absolute; display: none;`. Show it on `:hover`.

518. **How do you create a hamburger menu?**
     - Use a button with three `<span>` lines and toggle a "mobile-open" class via JavaScript.

519. **How do you create a modal?**
     - Use the `<dialog>` tag or a `fixed` container with high `z-index` and a dark semi-transparent overlay.

520. **How do you create a tooltip?**
     - Use a data attribute and the `::after` pseudo-element with `position: absolute`.

521. **How do you create a card component?**
     - A `div` with `box-shadow`, `border-radius`, and `overflow: hidden` to wrap content and images.

522. **How do you create a button with hover effect?**
     - `button:hover { background: darkened-color; transform: translateY(-2px); }`.

523. **How do you create a gradient button?**
     - Use `background: linear-gradient(...)` and animate the `background-position` on hover.

524. **How do you create a loading spinner?**
     - A circular `div` with one colored border and `animation: rotate 1s infinite linear;`.

525. **How do you create a skeleton loader?**
     - A gray `div` with a moving linear-gradient "shimmer" effect using `@keyframes`.

526. **How do you create a progress bar?**
     - A container `div` and an inner `div` whose `width` is set in percentages.

527. **How do you create a breadcrumb?**
     - `nav > ul > li` with `::after { content: "/"; }` on all but the last item.

528. **How do you create a badge?**
     - `display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 12px;`.

529. **How do you create an avatar?**
     - An `<img>` with `width == height`, `object-fit: cover`, and `border-radius: 50%`.

530. **How do you create a tabs component?**
     - A list of buttons and several "content" panels where only one is `display: block` at a time.

531. **How do you create an accordion?**
     - Use the `<details>` and `<summary>` tags for a native solution.

532. **How do you create a carousel?**
     - A horizontal container with `display: flex`, `overflow-x: scroll`, and `scroll-snap-type: x mandatory`.

533. **How do you create a parallax effect?**
     - By setting `background-attachment: fixed` or using `transform: translateZ()` in 3D space.

534. **How do you create a sticky sidebar?**
     - `position: sticky; top: 20px;`.

535. **How do you create a masonry layout?**
     - Use `column-count` or a more complex CSS Grid layout using `grid-row: span`.

536. **How do you create a pricing table?**
     - A Flexbox or Grid container holding several "price cards" side-by-side.

537. **How do you create a testimonial card?**
     - A card with a `blockquote` for text and a small avatar/name footer.

538. **How do you create a feature grid?**
     - `display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`.

539. **How do you create a hero section?**
     - A full-width `section` with a background image, `display: flex`, and centered text.

540. **How do you create a footer?**
     - A `footer` tag with flexbox to distribute links and copyright info across the bottom.

541. **How do you create a form with floating labels?**
     - Use `:placeholder-shown` and `label { position: absolute; transition: transform 0.3s; }`.

542. **How do you style a checkbox?**
     - Hide the input (`appearance: none` or `opacity: 0`) and style a custom `span` or `::before` attached to the label.

543. **How do you style a radio button?**
     - Similar to checkboxes; hide original and style a custom circular element.

544. **How do you style a select dropdown?**
     - Use `appearance: none` and add a custom SVG arrow as a background image.

545. **How do you create a search bar?**
     - An `input[type="search"]` with a search icon positioned via `absolute` or background image.

546. **How do you create a tag input?**
     - A container that looks like an input, containing small "tag" spans and a borderless `input`.

547. **How do you create a toggle switch?**
     - A checkbox and a label styled as a "track" with a moving "knob" using the `:checked` selector.

548. **How do you create a range slider?**
     - Use `input[type="range"]` and style the `::-webkit-slider-thumb` and `::-webkit-slider-runnable-track`.

549. **How do you create a star rating?**
     - Use a set of radio buttons with labels containing star icons, leveraging the `~` sibling selector to color all stars before the checked one.

550. **How do you create a timeline?**
     - A vertical line (via border or `::after`) with points and labels alternating on either side.

---

### Debugging & Common Issues

551. **How do you debug CSS?**
     - By using browser Developer Tools (Inspect Element), checking the "computed" tab, and looking for overridden styles.

552. **What are browser developer tools?**
     - Built-in software in browsers (Chrome, Firefox, Safari) that lets you inspect HTML/CSS and debug JavaScript.

553. **How do you inspect elements?**
     - Right-click on any element on the page and select "Inspect".

554. **How do you view computed styles?**
     - In the DevTools side panel, navigate to the "Computed" tab to see the final values the browser actually applied.

555. **What is the box model visualizer?**
     - A color-coded diagram in DevTools showing the content, padding, border, and margin of the selected element.

556. **How do you test responsive design?**
     - Use the "Device Toolbar" in DevTools to simulate different screen sizes and devices.

557. **What is the device toolbar?**
     - An icon in DevTools that toggles a responsive preview window with preset device sizes.

558. **How do you override styles in DevTools?**
     - By clicking a property and typing a new value or adding new rules in the "element.style" section.

559. **What are common CSS bugs?**
     - Specificity issues, unexpected margin collapse, z-index stack problems, and layout breakage on mobile.

560. **Why is my element not showing?**
     - Check for `display: none`, `visibility: hidden`, `opacity: 0`, `z-index` (behind others), or if it has zero height.

561. **Why is my element not centered?**
     - Check if the parent is a flex container and if the element is an inline-level element (needs `text-align`) or block (needs `margin: auto`).

562. **Why is my margin not working?**
     - It might be collapsing with a parent/neighbor, or it is being ignored because the element is `display: inline`.

563. **What is margin collapse and how to fix it?**
     - Top/bottom margins merging. Fix by adding 1px padding, border, or `overflow: hidden` to the container.

564. **Why is my z-index not working?**
     - It only works on elements with `position` other than `static`, or the element is trapped in a lower stacking context.

565. **Why is my flexbox not working?**
     - Check if `display: flex` is correctly applied to the **parent**, not the item.

566. **Why is my grid not working?**
     - Ensure the parent has `display: grid` and verify your `grid-template-columns` syntax.

567. **Why is my background image not showing?**
     - Check the file path, verify the URL is correct, and ensure the element has width and height.

568. **Why is my font not loading?**
     - Check for CORS issues, verify the `@font-face` URL, and ensure the font-family name matches exactly.

569. **How do you fix cross-browser compatibility issues?**
     - Use a library like Autoprefixer for vendor prefixes and check [Caniuse.com](https://caniuse.com).

570. **What is vendor prefixing?**
     - Adding prefixes like `-webkit-`, `-moz-`, `-ms-` to experimental CSS properties so they work in specific browsers.

571. **What is Autoprefixer?**
     - A post-processor that automatically adds required vendor prefixes to your CSS based on current browser support data.

572. **How do you test CSS in different browsers?**
     - By having multiple browsers installed or using services like BrowserStack.

573. **What is CSS validation?**
     - The process of checking if your CSS follows the official W3C specifications.

574. **What is the W3C CSS Validator?**
     - A free tool provided by the W3C to check for syntax errors and warnings in CSS.

575. **What are common CSS validation errors?**
     - Typographical errors in property names, missing semicolons, and using properties that don't exist in the spec.

---

### Accessibility & Best Practices

576. **What is the importance of color contrast?**
     - It ensures that text is readable for users with visual impairments including color blindness.

577. **What is the WCAG standard?**
     - Web Content Accessibility Guidelines; the global standard for making web content accessible.

578. **How do you ensure sufficient color contrast?**
     - Use browser DevTools (which has a built-in contrast checker) or online tools to reach at least AA level (4.5:1).

579. **What is the importance of focus styles?**
     - They allow keyboard-only users to see where they are on the page.

580. **Should you remove outline on focus?**
     - NO. Only remove it if you are providing a visible alternative focus state.

581. **How do you create accessible focus styles?**
     - By using `:focus-visible` to style a prominent outline or background change for keyboard users only.

582. **What is the importance of font size?**
     - Text must be large enough to be read comfortably by all users.

583. **What is the minimum font size for accessibility?**
     - Generally 16px (1rem) for body text; smaller than 12px is highly discouraged.

584. **What is the importance of line height?**
     - Proper spacing between lines prevents text from looking cluttered and improves readability.

585. **What is the recommended line height for readability?**
     - 1.5 is a common standard for body text.

586. **What is the importance of responsive design for accessibility?**
     - It allows users to zoom in (up to 400%) or use small devices without losing functionality or horizontal scrolling.

587. **How do you hide content visually but keep it for screen readers?**
     - By using a "visually-hidden" class that moves the element off-screen but keeps it in the accessibility tree.

588. **What is the sr-only class?**
     - A common utility class in frameworks like Tailwind used for Screen Reader Only content.

589. **What is the importance of semantic HTML for CSS?**
     - It allows you to write simpler selectors and ensures that screen readers understand the structure correctly.

590. **How do you create accessible animations?**
     - By avoiding fast flashing (seizure risk) and providing alternatives for those who prefer reduced motion.

591. **What is the `prefers-reduced-motion` media query?**
     - A way to detect if a user has enabled a "Reduce Motion" setting on their device.

592. **How do you respect user preferences for reduced motion?**
     - By wrapping animations in a media query that disables or simplifies them if the user prefers reduced motion.

593. **What is the importance of keyboard navigation?**
     - Many users (motor-impaired or power users) rely solely on the keyboard to move through a site.

594. **How do you ensure keyboard accessibility with CSS?**
     - Provide visible focus states, ensure logical source order, and avoid hiding elements that should be tabbed to.

595. **What is the importance of hover and focus states?**
     - They provide visual feedback to the user that an element is interactive.

---

### CSS Architecture & Methodologies

596. **What is CSS architecture?**
     - The high-level strategy for organizing and scaling CSS files and classes in large applications.

597. **What is the importance of CSS naming conventions?**
     - They prevent collisions between styles and make the relationship between HTML and CSS obvious.

598. **What is BEM (Block Element Modifier)?**
     - A convention: `block__element--modifier` (e.g., `card__title--large`).

599. **How do you write BEM class names?**
     - `block`: Top-level component. `__element`: Part of the block. `--modifier`: A variant of the block or element.

600. **What is OOCSS (Object-Oriented CSS)?**
     - A method focusing on reusable "objects" (e.g., a "Media Object" found in many places).

601. **What are the principles of OOCSS?**
     - 1. Separate structure from skin. 2. Separate container from content.

602. **What is SMACSS (Scalable and Modular Architecture for CSS)?**
     - A guide for categorizing CSS rules.

603. **What are the categories in SMACSS?**
     - Base, Layout, Module, State, Theme.

604. **What is Atomic CSS?**
     - A methodology where classes are named after their function rather than the component they are in.

605. **What is utility-first CSS?**
     - A style (like Tailwind) where you use small helper classes to build UI directly in HTML.

606. **What is the difference between component-based and utility-first CSS?**
     - Component-based: Styles scoped to a card/button. Utility-first: Building a card/button using margin/padding/color utilities.

607. **When should you use BEM vs Atomic CSS?**
     - BEM is great for large hand-written stylesheets; Atomic/Utility-first is excellent for rapid prototyping and design system consistency.

608. **What is CSS-in-JS?**
     - Writing CSS directly in your JavaScript files, allowing for dynamic styling based on component logic.

609. **What are the pros and cons of CSS-in-JS?**
     - Pros: Scoped styles, logic integration. Cons: Extra JS bundle size, performance overhead, loss of standard CSS tooling.

610. **What is the importance of CSS documentation?**
     - It helps new developers understand the design system and avoid duplicating styles.

611. **How do you document your CSS?**
     - Using comments, Markdown files, or tools like Storybook or a Styleguide.

612. **What is a style guide?**
     - A document that defines the visual language (colors, fonts, components) used in a project.

613. **What is a design system?**
     - A comprehensive library of reusable components and patterns, guided by clear standards, that can be assembled to build applications.

614. **How do you maintain CSS in large projects?**
     - Use a preprocessor, follow a strict methodology (BEM), use linting tools, and keep a shared design system.

615. **What is CSS refactoring?**
     - The process of cleaning up and consolidating CSS code (removing unused styles, merging duplicates) without changing the visual output.



