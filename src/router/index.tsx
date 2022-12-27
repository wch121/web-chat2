import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import App from "App";
import Loading from "components/Loading"

//定义数组每一项的接口
interface IRoute {
    path: string;
    component: any;
    children?: IRoute[]
}

const router_arr: IRoute[] = [
    {
        path: "/", component: App, children: [
            { path: "/friends", component: lazy(() => import("pages/Friends")) },
            { path: "/message", component: lazy(() => import("pages/chat/home")) },
            { path: "/means", component: lazy(() => import("pages/Means")) },
        ]
    },
    { path: "/login", component: lazy(() => import("pages/Login")) },
    { path: "/register", component: lazy(() => import("pages/Register")) },
]

const MyRouter = () => (
    <Router >
        <Suspense fallback={<Loading />}>
            <Routes>
                {
                    router_arr.map((item, index) => {
                        return (
                            item.children ? //有子路由
                                <Route key={index} path={item.path} element={<item.component />}>
                                    {
                                        item.children.map((e, i) => <Route key={i} path={e.path} element={<e.component />}></Route>)
                                    }
                                </Route>
                                ://没子路由
                                <Route key={index} path={item.path} element={<item.component />}></Route>
                        )
                    })
                }
            </Routes>
        </Suspense>

    </Router>
)

export default MyRouter

