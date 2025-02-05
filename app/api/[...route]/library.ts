import { Hono } from "hono";

const library = new Hono();


library.get("/post",async (c) =>{
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    
    return c.json({
      ...data,
    });
  } catch (error) {
    return c.json({ error: "Internal Server Error" }, 500);
  }
});


library.get("/posts/:id", async (c) => {
  const id = Number(c.req.param("id")); 

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    
    return c.json({
      ...data,
    });
  } catch (error) {
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

export default library;
