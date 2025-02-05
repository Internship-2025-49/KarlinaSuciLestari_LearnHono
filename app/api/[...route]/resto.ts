import { Hono } from "hono";

const app = new Hono();

const menu = [
  { id: 1, page: "burger" },
  { id: 2, page: "pizza" },
  { id: 3, page: "seblak" },
  { id: 4, page: "kwetiaw" },
  { id: 5, page: "tahu" },
  { id: 6, page: "tempe" },
];

app.get('/posts/:id', async (c) => {
  const page = c.req.param('page');
 
  return c.text(`Apa yang akan anda pilih?  dengan nama menu ${page}`);
});

export default app;
