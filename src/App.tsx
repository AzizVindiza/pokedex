import React from 'react';
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route, RouterProvider
} from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;