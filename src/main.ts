// @ts-types="npm:@types/express@4.17.15"
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  const headers = req.headers;
  const body = req.body;

  res.json({
    body,
    headers,
  });
});

app.post("/", (req, res) => {
  const headers = req.headers;
  const body = req.body;

  res.json({
    body,
    headers,
  });
});

app.listen(8000);
console.log(`Server is running on http://localhost:8000`);
