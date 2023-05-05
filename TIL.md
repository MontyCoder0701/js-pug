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
