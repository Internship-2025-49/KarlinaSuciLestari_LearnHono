import { Hono } from "hono";

const library = new Hono();


const bookCategories = [
  { id: 1, category: "Fiksi" },
  { id: 2, category: "Non-Fiksi" },
  { id: 3, category: "Sains" },
  { id: 4, category: "Sejarah" },
  { id: 5, category: "Biografi" },
  { id: 6, category: "Teknologi" },
];


library.get("/:id", async (c) => {
  const id = Number(c.req.param("id")); 

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      return c.json({ error: "Data not found" }, 404);
    }

    const data = await response.json();

    
    return c.json({
      ...data,
    });
  } catch (error) {
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

export default library;
