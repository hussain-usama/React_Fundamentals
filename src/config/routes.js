import React, { lazy } from "react"

const Login = lazy(() => import("../pages/Login"))
const Home = lazy(() => import("../pages/Home"))
const Dashboard = lazy(() => import("../pages/Dashboard"))

export const routes = [
    { component: Login, public: true, path: '/' },
    { component: Dashboard, public: false, path: '/dashboard' },
    { component: Home, public: false, path: '/home' },
]