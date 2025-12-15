// @ts-types="npm:@types/express"
import express from "express";

const app = express();

app.use(express.json());

function handleRequest(req: express.Request, res: express.Response) {
  const body = req.body;
  const headers = req.headers;
  const method = req.method;
  const params = req.params;
  const url = req.url;

  res.json({
    body,
    headers,
    method,
    params,
    url,
  });
}

app.get("/", handleRequest);
app.post("/", handleRequest);

app.listen(8000);
console.log(`Server is running on http://localhost:8000`);
