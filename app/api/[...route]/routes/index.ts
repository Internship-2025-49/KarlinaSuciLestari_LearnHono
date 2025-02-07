import { Hono } from 'hono'
import { jwt } from 'hono/jwt'
import type { JwtVariables } from 'hono/jwt'
import prisma from '@/prisma/client'
import { apiKeyAuth } from '../../middleware/auth'
import { createPost, deletePost, getPostById, getPosts, updatePost } from '@/controllers/PostController'

type Variables = JwtVariables

const app = new Hono<{ Variables: Variables }>()

app.use('/auth/*',jwt(
    {
      secret: 'hai-secret',
    }
  )
)

app.get('/', async (c) => {
  const auth = await prisma.auth.findFirst()

  if (auth) {
      return c.json(
          { 
              statusCode: 200, 
              message: 'Authorized',
              key: auth.key 
          }
      )
  }
})


app.use('*', apiKeyAuth)

app.get('/data', (c) => getPosts(c))

app.post('/data', (c) => createPost(c))

app.get('/data/:id', (c) => getPostById(c))

app.put('/data/:id', (c) => updatePost(c))

app.delete('/data/:id', (c) => deletePost(c))

export const Routes = app