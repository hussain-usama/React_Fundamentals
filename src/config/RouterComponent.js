import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./RouteTypes";
import { routes } from "./routes";
import NotFound from "./NotFound";

function RouterComp() {
    return (
        <>
            <Suspense fallback={<h1>Please Wait...</h1>}>
                <Routes>
                    {routes.map(({ component: Component, path, public: pub }, index) => {
                        if(pub && pub==='both'){
                            <Route path="*" key={index} element={<NotFound/>}  />
                        }
                        else if (pub) {
                            return (
                                <Route path={path} key={index} element={
                                    <PublicRoutes>
                                        <Component />
                                    </PublicRoutes>} />
                            )
                        } else {
                            return (
                                <Route path={path} key={index} element={
                                    <PrivateRoutes>
                                        <Component />
                                    </PrivateRoutes>} />
                            )
                        }
                    })}

                    <Route path="*"  element={<NotFound/>}  />
                </Routes>
            </Suspense>
        </>
    )
}

export default RouterComp 
