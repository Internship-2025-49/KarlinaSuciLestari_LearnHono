import { Hono } from 'hono'
import { handle } from 'hono/vercel'
// import { z } from 'zod'
// import { zValidator } from '@hono/zod-validator'

import books from './routes/books'
import authors from './routes/authors'
import library from './routes/library'
import resto from './routes/resto'
import test from './routes/test'
import middleware from './routes/middleware'
import { Routes } from './routes'


export const runtime = 'serverless'

const app = new Hono().basePath('/api')

app.route('/authors', authors)
app.route('/books', books)
app.route('/library', library)
app.route('/resto',resto)
app.route('/test',test)
app.route('/middleware',middleware)
app.route('/posts', Routes)


export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
// export const PATCH = handle(app) 
export const DELETE = handle(app)
export type AppType = typeof app

