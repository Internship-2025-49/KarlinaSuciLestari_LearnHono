// authors.ts
import { Hono } from 'hono'

const app = new Hono()
    .get('/', (c) => c.json({
        name: 'Karlina Suci',
        phone: '08492840928',
        email: 'tari@gmail.com',
        address: 'Hujung',
        city: 'Cimahi',
        state: 'Indonesia',
        zip: 62701
    }))
    .post('/', (c) => c.json('create an author', 201))
    .get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app