import { Hono } from 'hono'
import { html, raw } from 'hono/html'

const app = new Hono()

app.get('/:username', (c) => {
  const { username } = c.req.param()
  return c.html(
    html`<!doctype html>
      <h1>Hello! ${username}!</h1>`
  )
})



export default app;