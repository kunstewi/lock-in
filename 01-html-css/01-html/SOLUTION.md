## HTML Questions Solutions

### HTML Fundamentals

1. **What is HTML? What does HTML stand for?**
   - HTML (HyperText Markup Language) is the standard markup language used to create the structure and content of web pages.

2. **What is the purpose of HTML in web development?**
   - It provides the skeleton or structure of a website, defining elements like headings, paragraphs, links, images, and other content.

3. **What is the difference between HTML and HTML5?**
   - HTML5 is the latest version of HTML. It introduced new semantic elements (`<header>`, `<footer>`, `<article>`), multimedia support (`<video>`, `<audio>`), better form handling, and APIs like Geolocation and Local Storage.

4. **What are HTML elements? What are HTML tags?**
   - **Tags** are the keywords used to start and end an element (e.g., `<p>` and `</p>`).
   - An **Element** is the complete unit, including the opening tag, the content, and the closing tag.

5. **What is the difference between an opening tag and a closing tag?**
   - An **opening tag** starts an element (e.g., `<div>`), while a **closing tag** contains a forward slash to end it (e.g., `</div>`).

6. **What are self-closing tags? Give 5 examples.**
   - These tags do not require a separate closing tag because they don't wrap content. Examples: `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`.

7. **What is the basic structure of an HTML document?**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Document</title>
   </head>
   <body>
       <!-- Content goes here -->
   </body>
   </html>
   ```

8. **What is the purpose of the `<!DOCTYPE html>` declaration?**
   - It tells the browser that the document is an HTML5 document, ensuring it renders in "standards mode."

9. **What happens if you don't include `<!DOCTYPE html>`?**
   - Browsers might enter "quirks mode," which can lead to inconsistent layout and rendering issues as they try to emulate older browsers.

10. **What is the `<html>` tag and what attribute should it have?**
    - The root element of an HTML page. It should ideally have the `lang` attribute (e.g., `<html lang="en">`) for accessibility and SEO.

11. **What is the purpose of the `<head>` section?**
    - It contains metadata, titles, links to CSS, and other instructions for the browser that are not displayed directly on the page.

12. **What is the purpose of the `<body>` section?**
    - It contains all the visible content of the web page, such as text, images, and videos.

13. **What is the `<meta>` tag used for? Give 3 examples.**
    - It provides metadata about the HTML document. Examples:
        - `<meta charset="UTF-8">` (character encoding)
        - `<meta name="description" content="...">` (SEO summary)
        - `<meta name="viewport" content="...">` (Responsive behavior)

14. **What is the viewport meta tag and why is it important for responsive design?**
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. It controls the layout on mobile browsers, matching the site width to the device width.

15. **What is the charset meta tag? What is the recommended charset?**
    - It specifies the character encoding. `UTF-8` is the recommended charset as it covers almost all characters and symbols in the world.

16. **What is the `<title>` tag and why is it important?**
    - It defines the text shown on the browser tab and in search engine results. It's crucial for SEO and UX.

17. **What is the difference between `<title>` and `<h1>`?**
    - `<title>` is metadata for the browser/search engines (not on the page). `<h1>` is the main heading visible to the user on the page.

18. **What are HTML attributes? Give examples.**
    - They provide additional information about elements. Examples: `href` in `<a>`, `src` in `<img>`, `class`, `id`.

19. **What is the difference between an attribute and a property?**
    - Attributes are defined in the HTML source code. Properties are part of the DOM object in JavaScript. They usually sync, but not always (e.g., `value` attribute is the initial value, `value` property is current value).

20. **What are boolean attributes? Give examples.**
    - Attributes that are true if present and false if absent. Examples: `checked`, `disabled`, `required`, `readonly`, `hidden`.

21. **What is the `id` attribute? Can multiple elements have the same id?**
    - A unique identifier for an element. No, an ID must be unique within a single HTML page.

22. **What is the `class` attribute? Can multiple elements have the same class?**
    - Used to group multiple elements for styling or JS. Yes, multiple elements can share the same class.

23. **What is the difference between `id` and `class`?**
    - `id` is unique (one per page); `class` is reusable (multiple per page).

24. **What is the `style` attribute used for?**
    - For applying inline CSS styles directly to an element.

25. **What are data attributes? How do you create them?**
    - Custom attributes to store private data for the page or application. They start with `data-` (e.g., `data-user-id="123"`).

26. **What is the purpose of the `lang` attribute in the `<html>` tag?**
    - It helps screen readers identify the language of the page and assists search engines.

27. **What are HTML comments? How do you write them?**
    - Text ignored by the browser. Syntax: `<!-- This is a comment -->`.

28. **What is the purpose of comments in HTML?**
    - To provide notes for developers, explain code sections, or temporarily disable parts of the code.

29. **Can you nest comments in HTML?**
    - No, nesting comments (putting `<!-- -->` inside another) is not allowed and will break the syntax.

30. **What are semantic HTML elements? Why are they important?**
    - Elements that describe their meaning to both the browser and the developer (e.g., `<article>`, `<nav>`, `<footer>`). They improve SEO, accessibility, and code readability.

---

### Text Content & Formatting

31. **What are heading tags? How many levels are there?**
    - Tags used to define headings. There are 6 levels: `<h1>` (most important) down to `<h6>` (least important).

32. **Why should you only use one `<h1>` per page?**
    - It indicates the main topic of the page to search engines and screen readers. Multiple `<h1>` tags can confuse the hierarchy.

33. **What is the `<p>` tag used for?**
    - To define a paragraph of text.

34. **What is the difference between `<strong>` and `<b>`?**
    - `<strong>` is semantic; it indicates "importance" or urgency. `<b>` is for stylistic bolding without extra importance.

35. **What is the difference between `<em>` and `<i>`?**
    - `<em>` is semantic; it indicates "emphasis." `<i>` is for stylistic italics (like technical terms or thoughts) without extra emphasis.

36. **What is the `<mark>` tag used for?**
    - To highlight text for reference or notation purposes.

37. **What is the `<small>` tag used for?**
    - For "fine print" like legal disclaimers, copyright notices, or side comments.

38. **What is the `<del>` tag used for?**
    - To represent text that has been deleted from the document. Usually rendered with a strikethrough.

39. **What is the `<ins>` tag used for?**
    - To represent text that has been inserted into the document. Usually rendered with an underline.

40. **What is the `<sub>` tag used for?**
    - For subscript text (e.g., H₂O).

41. **What is the `<sup>` tag used for?**
    - For superscript text (e.g., E = mc²).

42. **What is the `<br>` tag? Is it semantic?**
    - It produces a line break. It is not semantic; it should only be used for content-related breaks (like addresses or poetry), not for layout spacing.

43. **What is the `<hr>` tag used for?**
    - It represents a thematic break (a horizontal rule) between paragraphs or sections.

44. **What is the `<pre>` tag? How does it preserve formatting?**
    - It represents preformatted text. It preserves both spaces and line breaks exactly as they appear in the source code.

45. **What is the `<code>` tag used for?**
    - To display a snippet of computer code.

46. **What is the `<kbd>` tag used for?**
    - To represent keyboard input (e.g., <kbd>Ctrl</kbd> + <kbd>C</kbd>).

47. **What is the `<samp>` tag used for?**
    - To represent sample output from a computer program.

48. **What is the `<var>` tag used for?**
    - To represent a variable in a mathematical expression or programming context.

49. **What is the `<blockquote>` tag? What attribute should it have?**
    - For long quotations from another source. It often uses the `cite` attribute to provide the URL of the source.

50. **What is the `<q>` tag used for?**
    - For short, inline quotations. Browsers typically surround them with quotation marks.

51. **What is the `<cite>` tag used for?**
    - To represent the title of a work (e.g., a book, song, or film).

52. **What is the `<abbr>` tag? What attribute should it have?**
    - For abbreviations or acronyms. It uses the `title` attribute to show the full description on hover.

53. **What is the `<address>` tag used for?**
    - To provide contact information for the author/owner of the document.

54. **What is the `<time>` tag? What is the `datetime` attribute?**
    - To represent dates or times. The `datetime` attribute provides a machine-readable format (e.g., `2023-10-27`).

55. **What is the difference between block-level and inline elements?**
    - **Block-level**: Starts on a new line and takes up the full width (e.g., `<div>`, `<h1>`, `<p>`).
    - **Inline**: Does not start on a new line and only takes as much width as necessary (e.g., `<span>`, `<a>`, `<img>`).

---

### Links & Navigation

56. **What is the `<a>` tag used for?**
    - To create hyperlinks to other pages, files, email addresses, or locations on the same page.

57. **What is the `href` attribute?**
    - Hypertext Reference. It specifies the destination URL of the link.

58. **What is the difference between absolute and relative URLs?**
    - **Absolute**: Provides the full path including protocol (e.g., `https://google.com`).
    - **Relative**: Path relative to the current file (e.g., `/images/logo.png` or `about.html`).

59. **What does `href="#"` do?**
    - It creates a link that points to the top of the current page.

60. **What does `href="#section-id"` do?**
    - It scrolls the page to an element with that specific `id`.

61. **What is the `target` attribute? What are its values?**
    - Specifies where to open the linked document. Values: `_self` (default), `_blank` (new window/tab), `_parent`, `_top`.

62. **What does `target="_blank"` do? What security issue does it have?**
    - Opens links in a new tab. It allows the new page access to the original page's `window.opener` object, potentially leading to phishing/malicious redirection.

63. **What is the `rel` attribute? What is `rel="noopener noreferrer"`?**
    - Defines the relationship between the current and linked document. `noopener noreferrer` fixes the security hole of `target="_blank"`.

64. **What is the `download` attribute used for?**
    - Prompts the browser to download the linked file instead of navigating to it.

65. **How do you create a mailto link?**
    - `<a href="mailto:someone@example.com">Send Email</a>`

66. **How do you create a tel link?**
    - `<a href="tel:+1234567890">Call Us</a>`

67. **What is the `<nav>` tag used for?**
    - To define a section containing navigation links.

68. **What is a breadcrumb navigation?**
    - A navigation trail that shows the user's location within the site hierarchy (e.g., Home > Products > Shoes).

69. **What is the difference between `<nav>` and `<menu>`?**
    - `<nav>` is for primary navigation links. `<menu>` is for a list of commands or interactive items (more common in web apps).

70. **What is the `title` attribute on links?**
    - Provides extra information (tooltip) about the link when hovered.

---

### Lists

71. **What are the three types of lists in HTML?**
    - Unordered list (`<ul>`), Ordered list (`<ol>`), and Description list (`<dl>`).

72. **What is the `<ul>` tag used for?**
    - For lists where the order of items doesn't matter (bullet points).

73. **What is the `<ol>` tag used for?**
    - For lists where items follow a specific sequence (numbered).

74. **What is the `<li>` tag used for?**
    - To define a list item within `<ul>` or `<ol>`.

75. **What attributes can you use with `<ol>`? (start, reversed, type)**
    - `start`: Initial value. `reversed`: Reverse order. `type`: Numbering style (1, A, a, I, i).

76. **What is the `<dl>` tag used for?**
    - For a list of terms and their descriptions.

77. **What is the `<dt>` tag used for?**
    - Description Term. The name or term being defined.

78. **What is the `<dd>` tag used for?**
    - Description Details. The definition or description of the term.

79. **Can you nest lists in HTML? Give an example.**
    - Yes.
    ```html
    <ul>
      <li>Fruits
        <ul>
          <li>Apple</li>
          <li>Orange</li>
        </ul>
      </li>
    </ul>
    ```

80. **What is the difference between ordered and unordered lists?**
    - Ordered lists show numbers/letters; Unordered lists show bullets/icons.

---

### Images & Media

81. **What is the `<img>` tag? Is it self-closing?**
    - Used to embed images. Yes, it is self-closing.

82. **What is the `src` attribute?**
    - Source. Specifies the path to the image file.

83. **What is the `alt` attribute? Why is it important?**
    - Alternative text. It's displayed if the image fails to load and is read by screen readers for accessibility. Huge for SEO.

84. **What should you write in the `alt` attribute for decorative images?**
    - Use an empty string (`alt=""`) so screen readers skip it.

85. **What is the `width` and `height` attribute on images?**
    - Specifies the dimensions in pixels. Providing these helps browsers reserve space and prevent layout shifts (CLS).

86. **What is the `<figure>` tag used for?**
    - To wrap self-contained content, like images, diagrams, or code snippets, often with a caption.

87. **What is the `<figcaption>` tag used for?**
    - To provide a caption for a `<figure>` element.

88. **What is the `<picture>` element? When would you use it?**
    - Provides multiple sources for an image. Used for Art Direction or choosing different image formats (like WebP vs JPEG based on browser support).

89. **What is the `<source>` element used for?**
    - Specifies alternative media resources inside `<picture>`, `<video>`, or `<audio>`.

90. **What is the `srcset` attribute?**
    - Allows providing multiple versions of an image at different resolutions for responsive layouts.

91. **What is the `sizes` attribute?**
    - Tells the browser how much of the screen the image will take up at different breakpoints so it can pick the best source from `srcset`.

92. **What is the `loading` attribute? What are its values?**
    - Controls when the browser loads the image. `lazy` (off-screen images load later) and `eager` (load immediately).

93. **What does `loading="lazy"` do?**
    - Defers loading images until they are close to the viewport, improving initial page load speed.

94. **What is the `<video>` tag?**
    - To embed video content.

95. **What attributes does the `<video>` tag have?**
    - `controls`: Shows play/pause. `autoplay`: Starts automatically. `loop`: Repeats. `muted`: Sound off. `poster`: Thumbnail image.

96. **What is the `<audio>` tag?**
    - To embed sound or music.

97. **What is the `<track>` tag used for?**
    - To provide subtitles, captions, or descriptions for media in VTT format.

98. **What is the `<iframe>` tag used for?**
    - To embed another HTML page inside the current one.

99. **What security concerns are there with iframes?**
    - Clickjacking and XSS. Use the `sandbox` attribute for security.

100. **What is the `<embed>` tag used for?**
    - For external resources like plugins (Flash, PDF), though largely replaced by `<iframe>` or specific tags.

---

### Tables

101. **What is the `<table>` tag used for?**
     - To display tabular data in rows and columns.

102. **What is the `<tr>` tag used for?**
     - Table Row.

103. **What is the `<td>` tag used for?**
     - Table Data (cell).

104. **What is the `<th>` tag used for?**
     - Table Header (usually bold/centered by default).

105. **What is the difference between `<td>` and `<th>`?**
     - `<td>` is for standard data; `<th>` is for headers and is semantic.

106. **What is the `<thead>` tag used for?**
     - To group header content in a table.

107. **What is the `<tbody>` tag used for?**
     - To group the main body content of a table.

108. **What is the `<tfoot>` tag used for?**
     - To group footer content in a table (e.g., totals).

109. **What is the `colspan` attribute?**
     - Allows a cell to span across multiple columns.

110. **What is the `rowspan` attribute?**
     - Allows a cell to span across multiple rows.

111. **What is the `<caption>` tag used for?**
     - To provide a title or summary for the table.

112. **What is the `<colgroup>` tag used for?**
     - To specify a group of one or more columns for formatting.

113. **What is the `<col>` tag used for?**
     - To apply styles to specific columns within a `<colgroup>`.

114. **Should you use tables for layout? Why or why not?**
     - No. Tables are for data only. For layouts, use Flexbox or Grid as tables make accessibility and responsiveness difficult.

115. **What is the `scope` attribute on `<th>`?**
     - Tells screen readers whether a header cell is for a `row`, `col`, `rowgroup`, or `colgroup`.

---

### Forms & Input

116. **What is the `<form>` tag used for?**
     - To collect user input and send it to a server.

117. **What is the `action` attribute on forms?**
     - Specifies the URL where the form data should be submitted.

118. **What is the `method` attribute? What are the values?**
     - Specifies the HTTP method: `GET` or `POST`.

119. **What is the difference between GET and POST methods?**
     - **GET**: Data appended to URL; visible; limited length; good for searching.
     - **POST**: Data in request body; hidden; no length limit; secure for passwords/files.

120. **What is the `<input>` tag?**
     - The most versatile form element, used for various data inputs based on its `type`.

121. **What is the `type` attribute on input? List 10 input types.**
     - `text`, `password`, `email`, `number`, `checkbox`, `radio`, `file`, `submit`, `date`, `color`.

122. **What is `type="text"` used for?**
     - For single-line text input.

123. **What is `type="password"` used for?**
     - Masks the characters for security.

124. **What is `type="email"` used for? Does it provide validation?**
     - Specifically for email addresses. Yes, browsers provide basic format validation.

125. **What is `type="number"` used for? What attributes can it have?**
     - For numeric input. Attributes: `min`, `max`, `step`.

126. **What is `type="tel"` used for?**
     - For telephone numbers. Does not enforce a format by default (use `pattern`).

127. **What is `type="url"` used for?**
     - For web addresses.

128. **What is `type="date"` used for?**
     - Opens a date picker.

129. **What is `type="time"` used for?**
     - Opens a time picker.

130. **What is `type="datetime-local"` used for?**
     - For selecting both date and time (no timezone).

131. **What is `type="color"` used for?**
     - Opens a color picker.

132. **What is `type="range"` used for?**
     - Displays a slider.

133. **What is `type="file"` used for? What is the `accept` attribute?**
     - For uploading files. `accept` filters allowed file types (e.g., `.pdf`, `image/*`).

134. **What is `type="checkbox"` used for?**
     - For selecting zero or more options from a set.

135. **What is `type="radio"` used for?**
     - For selecting exactly one option from a set.

136. **What is the difference between checkbox and radio buttons?**
     - Checkbox: Multi-select; Radio: Single-select.

137. **How do you group radio buttons together?**
     - Give them the same `name` attribute.

138. **What is `type="submit"` used for?**
     - Triggers the form submission.

139. **What is `type="reset"` used for?**
     - Resets all form inputs to their default values.

140. **What is `type="button"` used for?**
     - A clickable button that does nothing by default (usually used with JavaScript).

141. **What is `type="hidden"` used for?**
     - Stores data that is submitted to the server but not visible to the user.

142. **What is the `<label>` tag? Why is it important?**
     - Provides a caption for an input. Clicking the label focuses the input, improving accessibility and UX (especially for small checkboxes).

143. **How do you associate a label with an input?**
     - Use the `for` attribute on the label matching the `id` of the input, or wrap the input inside the label.

144. **What is the `for` attribute on labels?**
     - It links the label to the `id` of a specific form element.

145. **What is the `name` attribute on inputs?**
     - It serves as the key for identifying the data when it's sent to the server.

146. **What is the `value` attribute on inputs?**
     - Specifies the initial (or current) value of the input.

147. **What is the `placeholder` attribute?**
     - Shows a hint inside the input when it's empty.

148. **What is the difference between `placeholder` and `value`?**
     - `value` is actual data; `placeholder` is just a temporary visual hint.

149. **What is the `required` attribute?**
     - Forces the user to fill out the field before submitting.

150. **What is the `disabled` attribute?**
     - Makes the input non-interactive and prevents it from being submitted.

151. **What is the `readonly` attribute?**
     - User cannot change the value, but it is still focusable and submitted with the form.

152. **What is the difference between `disabled` and `readonly`?**
     - Disabled fields are NOT submitted; Readonly fields ARE submitted.

153. **What is the `autofocus` attribute?**
     - Automatically focuses the field when the page loads.

154. **What is the `autocomplete` attribute?**
     - Helps browsers suggest values based on previous inputs (e.g., `email`, `tel`, `off`).

155. **What is the `pattern` attribute? How does it work?**
     - Uses Regex to validate the input format.

156. **What is the `min` and `max` attribute?**
     - Sets limits for numeric and date inputs.

157. **What is the `step` attribute?**
     - Defines legal number intervals (e.g., `step="0.01"` for decimals).

158. **What is the `maxlength` attribute?**
     - Limits the maximum number of characters allowed.

159. **What is the `minlength` attribute?**
     - Requires a minimum number of characters.

160. **What is the `<textarea>` tag? What attributes does it have?**
     - For multi-line text input. Attributes: `rows`, `cols`, `placeholder`.

161. **What is the difference between `<input type="text">` and `<textarea>`?**
     - Input is single-line; Textarea is multi-line and resizable.

162. **What is the `rows` and `cols` attribute on textarea?**
     - `rows`: Number of lines; `cols`: Visible width.

163. **What is the `<select>` tag used for?**
     - To create a dropdown selection list.

164. **What is the `<option>` tag used for?**
     - Defines an item in a `<select>` list.

165. **What is the `<optgroup>` tag used for?**
     - To group related options within a dropdown.

166. **What is the `selected` attribute on options?**
     - Sets the default selected option in the list.

167. **What is the `multiple` attribute on select?**
     - Allows users to select more than one option.

168. **What is the `<button>` tag? How is it different from `<input type="button">`?**
     - `<button>` allows nested HTML content (like icons/images) inside, whereas `<input>` does not.

169. **What is the `type` attribute on button? What are the values?**
     - `submit` (default), `reset`, `button`.

170. **What is the `<fieldset>` tag used for?**
     - To group related elements in a form visually and semantically.

171. **What is the `<legend>` tag used for?**
     - To provide a caption for the `<fieldset>`.

172. **What is the `<datalist>` tag used for?**
     - Provides an "autocomplete" feature for an input with a list of pre-defined options.

173. **What is the `<output>` tag used for?**
     - Displays the result of a calculation (e.g., by JavaScript).

174. **What is the `<progress>` tag used for?**
     - Shows the completion progress of a task.

175. **What is the `<meter>` tag used for?**
     - Represents a scalar measurement within a known range (a "gauge").

176. **What is form validation? What are the built-in validation attributes?**
     - Checking if input is correct before submission. Attributes: `required`, `pattern`, `min`, `max`, `type`.

177. **What is the `novalidate` attribute on forms?**
     - Disables default browser validation for the entire form.

178. **What is the `formnovalidate` attribute?**
     - Disables validation specifically for a single submit button.

179. **What is the difference between client-side and server-side validation?**
     - **Client-side**: Immediate feedback; saves server load. **Server-side**: Essential for security and data integrity (cannot be bypassed).

180. **What is the `enctype` attribute on forms? When do you use `multipart/form-data`?**
     - Specifies how data is encoded. Use `multipart/form-data` when uploading files.

---

### Semantic HTML5 Elements

181. **What is the `<header>` tag used for?**
     - Introductory content, logos, and navigation.

182. **What is the `<footer>` tag used for?**
     - Bottom content, copyright info, and secondary links.

183. **What is the `<main>` tag used for? How many should you have per page?**
     - The unique, central content of the document. Only ONE per page.

184. **What is the `<article>` tag used for?**
     - Self-contained, independent content (e.g., blog post, news story).

185. **What is the `<section>` tag used for?**
     - Generic thematic grouping of content.

186. **What is the difference between `<article>` and `<section>`?**
     - Article is independent and reusable; Section is a part of something else.

187. **What is the `<aside>` tag used for?**
     - Content indirectly related to the main content (e.g., sidebars, call-out boxes).

188. **What is the `<nav>` tag used for?**
     - Navigation links block.

189. **What is the `<details>` tag used for?**
     - Creates an interactive disclosure widget (expand/collapse).

190. **What is the `<summary>` tag used for?**
     - The visible heading for the `<details>` element.

191. **What is the `<dialog>` tag used for?**
     - Represents a dialog box or modal.

192. **What is the `<mark>` tag used for?**
     - Highlights or marks text.

193. **What are the benefits of using semantic HTML?**
     - Better Accessibility, better SEO, cleaner code, and consistent structure.

194. **How does semantic HTML improve SEO?**
     - Search engines better understand page priority and content relationships.

195. **How does semantic HTML improve accessibility?**
     - Assistive technologies navigate the page more efficiently using standard landmarks.

---

### Accessibility (a11y)

196. **What is accessibility in HTML?**
     - Ensuring that web content is usable by everyone, including people with disabilities.

197. **What are ARIA attributes?**
     - Accessible Rich Internet Applications. Attributes that add extra semantic info for screen readers.

198. **What is the `role` attribute?**
     - Defines the type of an element (e.g., `role="button"`, `role="navigation"`).

199. **What is `aria-label` used for?**
     - Provides a string label for an element that has no visible text.

200. **What is `aria-labelledby` used for?**
     - Links an element to another existing element as its label.

201. **What is `aria-describedby` used for?**
     - Links an element to another element providing extra descriptive text.

202. **What is `aria-hidden` used for?**
     - Hides elements from screen readers while keeping them visible to sighted users.

203. **What is the `tabindex` attribute?**
     - Controls the order in which elements receive focus when using the <kbd>Tab</kbd> key.

204. **What does `tabindex="0"` mean?**
     - The element is focusable in the natural source order.

205. **What does `tabindex="-1"` mean?**
     - The element is focusable only via JavaScript, not via tab navigation.

206. **Why should you avoid positive tabindex values?**
     - It overrides the natural source order, creating a confusing and broken experience for keyboard users.

207. **What is skip navigation? How do you implement it?**
     - A link at the start of the page allowing users to jump directly to the main content. Implementation: `<a href="#main">Skip to content</a>`.

208. **What is the importance of heading hierarchy for screen readers?**
     - It allows users to "scan" the page structure and jump between sections.

209. **What is the `lang` attribute and why is it important?**
     - Critical for correct pronunciation and language detection in screen readers.

210. **How do you make images accessible?**
     - Use meaningful `alt` text or `alt=""` for decorative ones.

211. **How do you make forms accessible?**
     - Use `<label>` for every input, `fieldset` for groups, and clear error messages via `aria-live`.

212. **What is the purpose of `<label>` for accessibility?**
     - It provides a click target and labels the input for screen readers.

213. **What are focus indicators and why are they important?**
     - Visual outlines (usually blue) that show where the keyboard focus is. Essential for keyboard-only users.

214. **What is keyboard navigation?**
     - Browsing a site using only a keyboard (Tab, Enter, Space, Arrows).

215. **How do you make custom components keyboard accessible?**
     - Use `tabindex="0"`, handle keydown events (Enter/Space), and manage focus carefully.

---

### Meta Tags & SEO

216. **What is the purpose of meta tags?**
     - To provide metadata (data about data) to browsers and search engines.

217. **What is the `description` meta tag?**
     - A summary of the page content shown in search engine results.

218. **What is the `keywords` meta tag? Is it still used?**
     - Formerly used for SEO keywords. No longer used by major search engines (Google).

219. **What is the `author` meta tag?**
     - Specifies the creator of the website.

220. **What is the `robots` meta tag?**
     - Instructs search engines to `index` (or `noindex`) and `follow` (or `nofollow`) links on the page.

221. **What are Open Graph meta tags?**
     - They control how URLs are displayed when shared on social media (Facebook, LinkedIn).

222. **What is `og:title`, `og:description`, `og:image`?**
     - Title, summary, and preview image for social sharing.

223. **What are Twitter Card meta tags?**
     - Similar to Open Graph, but specific to Twitter.

224. **What is the canonical link tag?**
     - `<link rel="canonical" href="...">`. Prevents duplicate content issues by telling search engines which version of a URL is the "original."

225. **What is the `<link rel="icon">` tag?**
     - Defines the favicon (browser tab icon).

226. **What is the difference between favicon.ico and other icon formats?**
     - `.ico` contains multiple sizes in one file and is legacy-compatible. Modern sites use PNG/SVG icons as well.

227. **What is the `<link rel="stylesheet">` tag?**
     - Links an external CSS file to the HTML.

228. **What is the `<link rel="preconnect">` tag?**
     - Pre-warms connections to third-party domains (e.g., Google Fonts) to speed up performance.

229. **What is the `<link rel="prefetch">` tag?**
     - Tells the browser to download resources for future navigations.

230. **What is the `<link rel="preload">` tag?**
     - Forces the browser to download critical resources (e.g., fonts, hero images) as early as possible.

---

### Advanced HTML Concepts

231. **What is the `<template>` tag used for?**
     - Holds HTML code that is NOT rendered by the browser until cloned and inserted via JavaScript.

232. **What is the `<slot>` tag used for in Web Components?**
     - A placeholder inside a Shadow DOM where you can inject custom markup from the outside.

233. **What is the `<canvas>` tag used for?**
     - Used to draw graphics on the fly via JavaScript (good for games and charts).

234. **What is the `<svg>` tag used for?**
     - Scalable Vector Graphics. Defines two-dimensional vector-based graphics in XML.

235. **What is the difference between `<canvas>` and `<svg>`?**
     - Canvas is pixel-based (raster); SVG is vector-based (scalable). SVG is part of the DOM; Canvas is not.

236. **What is the `contenteditable` attribute?**
     - Makes any HTML element editable by the user.

237. **What is the `draggable` attribute?**
     - Specifies whether an element is allowed to be dragged using the Drag and Drop API.

238. **What is the `spellcheck` attribute?**
     - Controls whether the browser should perform spell-checking on inputs and textareas.

239. **What is the `translate` attribute?**
     - Tells translation services (like Google Translate) whether content should be translated.

240. **What is the `hidden` attribute?**
     - Boolean attribute that hides an element from the layout and screen readers.

241. **What is the `<base>` tag used for?**
     - Specifies the base URL for all relative URLs in a document.

242. **What is the `<script>` tag? Where should you place it?**
     - Used to embed or reference executable script. Best placed at the end of `<body>` or in `<head>` with `defer`/`async`.

243. **What is the `defer` attribute on script tags?**
     - Downloads script in parallel but executes it only after the HTML is fully parsed. Maintains order.

244. **What is the `async` attribute on script tags?**
     - Downloads and executes script immediately, pausing HTML parsing. Does NOT maintain order.

245. **What is the difference between `defer` and `async`?**
     - Defer waits for DOM; Async doesn't. Defer respects order; Async doesn't.

246. **What is the `<noscript>` tag used for?**
     - Displays content to users who have disabled JavaScript.

247. **What is the `<link>` tag used for?**
     - Establishes relationships with external resources (CSS, Icons, preloading).

248. **What is the `<style>` tag used for?**
     - For embedding internal CSS.

249. **What is inline CSS vs internal CSS vs external CSS?**
     - **Inline**: Inside `style` attribute. **Internal**: Inside `<style>` tag in `<head>`. **External**: In a separate `.css` file via `<link>`.

250. **What is the `<meta http-equiv="refresh">` tag?**
     - Automatically reloads the page or redirects after a specified number of seconds.

---

### HTML Entities & Special Characters

251. **What are HTML entities?**
     - Strings starting with `&` and ending with `;` used to display reserved or invisible characters.

252. **How do you display `<` and `>` in HTML?**
     - Use `&lt;` and `&gt;`.

253. **What is `&nbsp;`?**
     - Non-Breaking Space. Prevents an automatic line break between words.

254. **What is `&copy;`?**
     - The copyright symbol (©).

255. **What is `&reg;`?**
     - The registered trademark symbol (®).

256. **What is `&trade;`?**
     - The trademark symbol (™).

257. **What is `&amp;`?**
     - The ampersand symbol (&).

258. **What is `&quot;`?**
     - Double quotation marks (").

259. **What is `&apos;`?**
     - Single quotation mark (').

260. **How do you display an emoji in HTML?**
     - Use Decimal/Hex codes (e.g., `&#128512;` for 😀) or paste the emoji directly if using UTF-8.

---

### Best Practices & Common Mistakes

261. **Should you use inline styles? Why or why not?**
     - Generally NO. It makes code harder to maintain, violates Separation of Concerns, and bloats file size.

262. **What is the importance of proper indentation in HTML?**
     - Essential for readability and identifying nesting errors easily.

263. **Should you use uppercase or lowercase for HTML tags?**
     - Lowercase is the industry standard and required in XHTML.

264. **What is the importance of closing tags?**
     - Prevents layout bugs and unpredictable behavior in browsers.

265. **What happens if you don't close tags properly?**
     - Browsers guess where they end, which often leads to incorrect styling and broken document trees.

266. **What is the importance of the `alt` attribute on images?**
     - Accessibility for blind users and SEO value.

267. **Should you use `<br>` for spacing? What should you use instead?**
     - NO. Use CSS margin and padding.

268. **What is the problem with using `<div>` for everything?**
     - "Divitis." It lacks meaning for screen readers and search engines, making the site less accessible and harder to index.

269. **What is "div soup"?**
     - A codebase overly cluttered with nested `<div>` tags without semantic elements.

270. **When should you use `<div>` vs semantic elements?**
     - Use semantic tags if they fit (e.g., `header`, `nav`); use `div` ONLY for purely visual/styling groupings.

271. **What is the importance of valid HTML?**
     - Ensures consistent cross-browser behavior, future-proofing, and better performance.

272. **How do you validate HTML? What tools can you use?**
     - Use the W3C Markup Validation Service.

273. **What is the W3C Validator?**
     - An official tool to check if your HTML follows the standard specification.

274. **What are some common HTML validation errors?**
     - Missing `alt` tags, duplicate IDs, nesting an `<h1>` inside a `<p>`, unclosed tags.

275. **What is the importance of mobile-first design?**
     - Most web traffic is mobile. Designing for small screens first ensures focus on core features and speed.

276. **What is responsive design?**
     - Designing webs that automatically adjust their layout based on screen size.

277. **How does the viewport meta tag help with responsive design?**
     - It sets the "zoom" level and prevents mobile device browsers from shrinking large desktop sites into a tiny, unreadable view.

278. **What is the difference between HTML and XHTML?**
     - XHTML is HTML written in strict XML. It requires lowercase tags, quoted attributes, and closed tags (e.g. `<br />`).

279. **What is the difference between HTML4 and HTML5?**
     - HTML5 added multimediatags, semantic tags, and better web apps APIs.

280. **What new features were introduced in HTML5?**
     - Semantic tags (`nav`, `footer`), `video`/`audio`, `canvas`, SVG support, local storage, drag-and-drop.

---

### Practical Questions & Scenarios

281. **How do you create a simple navigation menu?**
     - Use `<nav>` wrapping a `<ul>` with `<a>` inside `<li>`.

282. **How do you create a contact form with name, email, and message fields?**
     - Use `<form>`, `<label>` for each, `<input type="text">`, `<input type="email">`, and `<textarea>`.

283. **How do you create a registration form with validation?**
     - Use `required`, `minlength`, and `type="password"`.

284. **How do you create a table with headers and data?**
     - Use `tr`, `th` for headers, and `td` for data.

285. **How do you create an image gallery?**
     - Group `<img>` elements inside a container or use `<figure>`.

286. **How do you embed a YouTube video?**
     - Use the `<iframe>` code provided by YouTube's "Share" feature.

287. **How do you create a dropdown menu using `<select>`?**
     - `<select>` with multiple `<option>` tags inside.

288. **How do you create a checkbox group for multiple selections?**
     - Use multiple `<input type="checkbox">` tags with different names/values.

289. **How do you create a radio button group for single selection?**
     - Use multiple `<input type="radio">` tabs with the SAME `name` attribute.

290. **How do you create a file upload form?**
     - `<form method="POST" enctype="multipart/form-data">` with `<input type="file">`.

291. **How do you create a search bar?**
     - `<input type="search" placeholder="Search...">`.

292. **How do you create a login form?**
     - `<input type="text">` for username, `<input type="password">` for password, `<button type="submit">`.

293. **How do you create a newsletter signup form?**
     - `<input type="email" required>` and a "Subscribe" button.

294. **How do you create a pricing table?**
     - Use `<table>` or CSS Flex/Grid for responsive layout.

295. **How do you create a testimonial section?**
     - Use `<blockquote>`, `<cite>`, and an `<img>`.

296. **How do you create a FAQ section using `<details>` and `<summary>`?**
     - Multiple `<details>` blocks each containing a `<summary>` (the question) and text (the answer).

297. **How do you create a progress bar?**
     - `<progress value="70" max="100"></progress>`.

298. **How do you create a breadcrumb navigation?**
     - An ordered list `<ol>` with links and separator characters via CSS.

299. **How do you create an accessible button?**
     - Use the `<button>` tag or add `role="button"` and `tabindex="0"` to a `div` (but tag is always better).

300. **How do you structure a blog post in HTML?**
     - Use `<article>`, with a `<header>` (title/author), section for body content, and `<footer>` (tags/comments).
