import { Hono } from 'hono'

import { basicAuth } from 'hono/basic-auth'
import prisma from '@/prisma/client'
import { apiKeyAuth } from '../../middleware/auth'
import { createPost, deletePost, getPostById, getPosts, updatePost } from '@/controllers/PostController'

const app = new Hono()

app.use(
    '/*',
    basicAuth({
        username: 'admin',
        password: 'dne',
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

app.get('/data', (c) => getPosts(c))

app.post('/data', (c) => createPost(c))

app.get('/data/:id', (c) => getPostById(c))

app.put('/data/:id', (c) => updatePost(c))

app.delete('/data/:id', (c) => deletePost(c))

export const Routes = app