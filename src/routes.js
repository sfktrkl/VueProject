import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import singleBlog from './components/singleBlog.vue'

export default [
    {
        // Home page
        path: '/',
        component: showBlogs,
    },
    {
        path: '/add',
        component: addBlog,
    },
    {
        path: '/list',
        component: listBlogs,
    },
    // http://localhost:8080/blogs/1
    // http://localhost:8080/blogs/:id << Route Parameter
    // Inside the component detect this route parameter
    // and handle it to make http requests for correct resource
    {
        path: '/blog/:id',
        component: singleBlog,
    },
]