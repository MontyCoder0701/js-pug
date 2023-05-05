# TIL Troubleshooting

1. Files in `public` folder not rendering

    ```js
    app.use(express.static(path.join(__dirname, "/public")));
    ```

    Add this line to `index.js` to render the files inside  the `public` folder.

2. `npm start` not working

    ```json
    start: "node index.js"
    ```

    Add `start` to the script so that `npm start` is a runnable script.
