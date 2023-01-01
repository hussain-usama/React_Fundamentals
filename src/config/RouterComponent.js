import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./RouteTypes";

const Login = lazy(() => import("../pages/Login"))
const Home = lazy(() => import("../pages/Home"))
const Dashboard = lazy(() => import("../pages/Dashboard"))
const Post = lazy(() => import("../pages/Post"))
const AddPost = lazy(() => import("../pages/Forms/AddPost"))

function RouterComp() {
    let auth = localStorage.getItem("token")
    return (
        <>
            <Suspense>
                <Routes>
                    <Route path="/" element={
                        <PublicRoutes>
                            <Login />
                        </PublicRoutes>} />
                    <Route path="/home" element={
                        <PrivateRoutes>
                            <Home />
                        </PrivateRoutes>} />
                    <Route path="/dashboard" element={
                        <PrivateRoutes>
                            <Dashboard />
                        </PrivateRoutes>} />
                    <Route path="/posts/:id" element={
                        <PrivateRoutes>
                            <Post />
                        </PrivateRoutes>} />
                    <Route path="/addPost" element={
                        <PrivateRoutes>
                            <AddPost />
                        </PrivateRoutes>} />

                </Routes>
            </Suspense>
        </>
    )
}

export default RouterComp 
