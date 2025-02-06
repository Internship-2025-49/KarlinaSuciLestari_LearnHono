import prisma from '@/prisma/client';
import { createPost, deletePost, getPostById, getPosts, updatePost } from 'controllers/PostController';
import { Hono } from 'hono';
import { basicAuth } from 'hono/basic-auth';
import { poweredBy } from 'hono/powered-by';
import { apiKeyAuth } from '../../middleware/auth';


const app = new Hono()

app.use(poweredBy())


app.use(
  '/admin/*',
  basicAuth({
    username: 'admin',
    password: 'duar',
  })
)



app.get('/', async (c) => {
  const auth = await prisma.auth.findFirst()

  if (auth) {
      return c.json(
          { 
              success: true, 
              message: 'Authorized',
              key: auth.key 
          }
      )
  }
})


app.use('*', apiKeyAuth)

app.get('/', (c) => getPosts(c));

app.post('/', (c) => createPost(c));

app.get('/:admin_id', (c) => getPostById(c));

app.put('/:admin_id', (c) => updatePost(c));

app.delete('/:admin_id', (c) => deletePost(c));

export const Routes = app;