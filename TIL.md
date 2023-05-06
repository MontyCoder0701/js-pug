# TIL Troubleshooting

1. Files in `public` folder not rendering

    ```js
    app.use(express.static(path.join(__dirname, "/public")));
    ```

    Add this line to `server.js` to render the files inside  the `public` folder.

2. `npm start` not working

    ```json
    "start": "node server.js"
    ```

    Add `start` to the script so that `npm start` is a runnable script.

3. Language change
    - Initially I set the event to change the language to onClick and change the innerHTML for each element.
    - However, creating one dictionary for all languages and changing the innerHTML as a updateContent function is more efficient.
    - We're extracting the headTitle, bodyH1, bodyP, langButton, koreanButton, and englishButton properties from the `languages[language]` object and assigning them to variables.

4. Routing not working ("unable to GET")
    - `calendar.pug` is in the `views` folder, so it can be rendered.
    - GET was not working so I had to add `app.get("/calendar", (req, res) => res.render("calendar"));` to `server.js` to render the `calendar.pug` file.

5. How to apply the language setting once it is selected
    - I saved it to `localStorage` and applied it to the language setting when the page is loaded.
    - Make sure to apply it for default language setting as well.
    - I had trouble fetching the value with the key, but I noticed I used the wrong key name.

6. MIME error
    - This can happen when the program can't find the file. Check the directory and file name.

7. Can't use import error
    - This happens because this is not a ES6 or ES module build system.
    - Initialize with the script tags instead.

8. Removing unused modules
    - Delete unnecessary modules from `package.json`.
    - Run `npm prune` to remove the unused modules.

9. Camera not working even with right code
    - I reset the stream with "null" to initialize properly.
    - I added `camera.play()` to the `startCamera` function to make sure the camera is working.
    - Should check for the methods and properties of the camera object.

10. Thinking about how variables are communicated between `js` files
    - JavaScript variables defined in separate files can communicate with each other through an HTML file, as long as the files are properly linked in the HTML document using the `<script>` tag.
    - When multiple JavaScript files are linked to an HTML document, the global scope of the files is shared, and any variables defined in one file can be accessed from another file.
    - However, it's important to note that JavaScript files are loaded and executed in the order that they appear in the HTML document, so you need to make sure that the dependent files are loaded before the files that use them.

        ```html
        <!DOCTYPE html>
        <html>
        <head>
            <title>JavaScript Variables and HTML</title>
            <script src="file1.js"></script>
            <script src="file2.js"></script>
        </head>
        <body>
            <div id="output"></div>
        </body>
        </html>
        ```

        ```js
        // file1.js
        var message = "Hello World!";

        // file2.js
        document.getElementById("output").innerHTML = message;
        ```

11. Debugging
    - If the variable is not in the global scope, you cannot access it from the console with `console.log()`.
    - You can use `alert()` to debug.
    - After you checked the variable with `alert()`, apply your logic in the code.

12. Making variables/functions accessible in another file when it's not a not a ES6 or ES module build system
    - Use `module.exports` to export the variable/function.
    - Then use `require()` to import the variable/function.

        ``` js
        // file1.js
        module.exports = {
        myVar: "Hello World"
        };
        ```

        ``` js
        // file2.js
        const file1 = require("./file1.js");
        console.log(file1.myVar); // "Hello World"
        ```

13. Environment variables
    - Create an `.env` file in the root directory.
    - Put `require('dotenv').config();`.
    - Make sure the module is installed through `npm install dotenv`.
    - Then access the variables with `process.env.VARIABLE_NAME`.
