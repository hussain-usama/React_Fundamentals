import React, { lazy } from "react"

const Login = lazy(() => import("../pages/Login"))
const Home = lazy(() => import("../pages/Home"))
const Dashboard = lazy(() => import("../pages/Dashboard"))
const Post = lazy(() => import("../pages/Post"))
const AddPost = lazy(() => import("../pages/Forms/AddPost"))
const PostComments = lazy(() => import("../pages/PostComments"))
const NotFound = lazy(() => import("./NotFound"))
const Todos = lazy(() => import("../pages/Todos/Todos"))

/* DEFINING ROUTES */
/* public false component will only visible if user logged in */
export const routes = [
    { component: Login, public: true, path: '/' },
    { component: Dashboard, public: false, path: '/dashboard' },
    { component: Home, public: false, path: '/home' },
    { component: Post, public: false, path: '/posts/:id' },
    { component: AddPost, public: false, path: '/addPost' },
    { component: PostComments, public: false, path: '/posts/:id/comments' },
    { component: Todos, public: false, path: '/todos' },
    { component: NotFound, public: 'both', path: '*' },

]
