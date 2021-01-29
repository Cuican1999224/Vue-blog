import ShowBlogs from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
// import { component } from 'vue/types/umd'
export default [
    { path: '/', component: ShowBlogs },
    { path: '/add', component: AddBlog },
]