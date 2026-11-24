# Running the imported math API

- In Replit, click **Run** to start the **Start application** workflow. It runs `PORT=5000 node index.js` using Node.js 20.
- In a fresh checkout, run `npm ci` to install the locked dependencies. Run `node index.js` to start the server locally on port 3000, or set `PORT` to use another port.
- The server does not require secrets or an external service.

This is an API exercise starter, not a website. There is no `/` route, so the preview displays `Cannot GET /`. The imported `/math/circle/:r` exercise is unfinished and returns HTTP 500 until it computes `result`. The other two exercises are TODOs. The server starting does not mean the exercises are implemented.
