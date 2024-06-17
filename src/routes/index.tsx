import { createBrowserRouter } from "react-router-dom";
import { aboutweUrl, homeUrl, layoutUrl, postdetailUrl, topicsUrl } from "./urls";
import { AboutWe, DetailPost, Home, Layout, Topics } from "@/pages";


export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: (
                <Layout />
        ),
        children: [
            {
                path: homeUrl,
                element: <Home />
            },
            {
                path: topicsUrl,
                element: <Topics />
            },
            {
                path: aboutweUrl,
                element: <AboutWe />
            },
            {
                path: postdetailUrl,
                element: <DetailPost />
            },
        ]
    },
]);