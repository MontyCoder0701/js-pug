# TIL Troubleshooting

1. Files in `public` folder not rendering

    ```js
    app.use(express.static(path.join(__dirname, "/public")));
    ```

    Add this line to `server.js` to render the files inside  the `public` folder.

2. `npm start` not working

    ```json
    start: "node server.js"
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
