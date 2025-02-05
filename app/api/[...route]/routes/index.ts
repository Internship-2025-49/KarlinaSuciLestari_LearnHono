// import hono
import { Hono } from 'hono';

// import controller
import { getPosts, createPost } from '../../../../controllers/PostController';  

// inisialisasi router
const router = new Hono();

// routing posts index
router.get('/', (c) => getPosts(c));  

//routes posts create
router.post('/', (c) => createPost(c));


// Ekspor router untuk digunakan di aplikasi utama
export const Routes = router;
