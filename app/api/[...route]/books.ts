// authors.ts
import { Hono } from "hono";

const app = new Hono()
  .get("/", (c) => c.json({
    title: 'rose',
    id: '2',
    penerbit: 'DZAAKI'
  }))
  .post("/", (c) => c.json("create an author", 201))
  .get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;