const express = require("express");
const next = require("next");
const cors = require('cors');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Add CORS middleware
  server.use(cors({
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://www.genshifter.com']
      : ['http://localhost:3000'],
    credentials: true
  }));

  // Define custom routes here, if needed
  server.get("/custom-route", (req, res) => {
    return app.render(req, res, "/custom-page", req.query);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});